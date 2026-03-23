import { NextRequest, NextResponse } from 'next/server';
import { UTApi } from 'uploadthing/server';

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const fullName = formData.get('fullName') as string | null;
  const email = formData.get('email') as string | null;
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
  const imageUrls = resultsArray.filter((r) => r.data).map((r) => r.data!.ufsUrl);

  // TODO: Send submission fields (fullName, email, phone: formData.get('phone'), objectName, description, imageUrls) to an email

  return NextResponse.json({ success: true, imageUrls });
}
