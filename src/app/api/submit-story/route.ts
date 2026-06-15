import { NextRequest, NextResponse } from 'next/server';
import { UTApi } from 'uploadthing/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const fullName = formData.get('fullName') as string | null;
  const email = formData.get('email') as string | null;
  const phone = formData.get('phone') as string | null;
  const objectName = formData.get('objectName') as string | null;
  const description = formData.get('description') as string | null;
  const imageFiles = formData.getAll('images').filter((f): f is File => f instanceof File);

  // Validate required fields
  if (!fullName || !email || !objectName || !description) {
    return NextResponse.json(
      { error: 'Missing required fields: fullName, email, objectName, description.' },
      { status: 400 },
    );
  }

  // Validate images (min 1, max 2)
  if (imageFiles.length < 1) {
    return NextResponse.json(
      { error: 'At least one image is required.' },
      { status: 400 },
    );
  }
  if (imageFiles.length > 2) {
    return NextResponse.json(
      { error: 'A maximum of 2 images is allowed.' },
      { status: 400 },
    );
  }

  // Upload images to UploadThing
  let results: Awaited<ReturnType<UTApi['uploadFiles']>>;
  try {
    const utapi = new UTApi();
    results = await utapi.uploadFiles(imageFiles);
  } catch (err) {
    console.error('[submit-story] UTApi.uploadFiles threw:', err);
    return NextResponse.json(
      { error: 'Image upload failed. Ensure UPLOADTHING_TOKEN is set.' },
      { status: 500 },
    );
  }

  const resultsArray = Array.isArray(results) ? results : [results];
  const failed = resultsArray.filter((r) => r.error !== null);
  if (failed.length > 0) {
    console.error('[submit-story] Upload errors:', failed.map((r) => r.error));
    return NextResponse.json(
      { error: 'Failed to upload one or more images.' },
      { status: 500 },
    );
  }
  const uploadedFiles = resultsArray
    .filter((r): r is typeof r & { data: NonNullable<typeof r.data> } => r.data !== null)
    .map((r) => ({
      url: r.data.ufsUrl,
      key: r.data.key,
      name: r.data.name,
      size: r.data.size,
      type: r.data.type,
    }));
  const imageUrls = uploadedFiles.map((file) => file.url);

  const { error: insertError } = await supabase.from('submissions').insert({
    full_name: fullName,
    email,
    phone: phone || null,
    object_name: objectName,
    description,
    image_urls: imageUrls,
  });

  if (insertError) {
    console.error('[submit-story] Supabase insert failed:', insertError);
    return NextResponse.json(
      { error: 'Images uploaded successfully, but saving the story submission failed.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, imageUrls });
}
