import { NextRequest, NextResponse } from 'next/server';

interface SubmitStoryPayload {
  fullName: string;
  email: string;
  phone?: string;
  objectName: string;
  description: string;
  imageUrls: string[];
}

export async function POST(request: NextRequest) {
  let body: SubmitStoryPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { fullName, email, objectName, description, imageUrls } = body;

  // Validate required fields
  if (!fullName || !email || !objectName || !description) {
    return NextResponse.json(
      { error: 'Missing required fields: fullName, email, objectName, description.' },
      { status: 400 },
    );
  }

  // Validate imageUrls (min 1, max 2)
  if (!Array.isArray(imageUrls) || imageUrls.length < 1) {
    return NextResponse.json(
      { error: 'At least one image is required.' },
      { status: 400 },
    );
  }
  if (imageUrls.length > 2) {
    return NextResponse.json(
      { error: 'A maximum of 2 images is allowed.' },
      { status: 400 },
    );
  }
  if (imageUrls.some((url) => typeof url !== 'string' || url.trim() === '')) {
    return NextResponse.json(
      { error: 'One or more image URLs are invalid.' },
      { status: 400 },
    );
  }

  // TODO: Send submission fields (fullName, email, phone, objectName, description, imageUrls) to an email

  return NextResponse.json({ success: true });
}
