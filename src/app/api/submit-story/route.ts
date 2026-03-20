import { NextRequest, NextResponse } from 'next/server';

interface SubmitStoryPayload {
  fullName: string;
  email: string;
  phone?: string;
  objectName: string;
  description: string;
  imageUrls?: string[];
}

export async function POST(req: NextRequest) {
  let body: SubmitStoryPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { fullName, email, phone, objectName, description, imageUrls } = body;

  // Validate required fields
  const missing: string[] = [];
  if (!fullName?.trim()) missing.push('fullName');
  if (!email?.trim()) missing.push('email');
  if (!objectName?.trim()) missing.push('objectName');
  if (!description?.trim()) missing.push('description');

  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Missing required fields.', fields: missing },
      { status: 422 },
    );
  }

  // Basic email format validation
  if (!email.includes('@') || email.indexOf('@') === email.length - 1) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 });
  }

  // Log submission to server console
  console.log('[submit-story] New story submission received:', {
    fullName,
    email,
    phone: phone ?? null,
    objectName,
    description,
    imageUrls: imageUrls ?? [],
    submittedAt: new Date().toISOString(),
  });

  // TODO: Save submission to database

  // TODO: Send notification email to the team

  return NextResponse.json({ success: true, submittedAt: new Date().toISOString() }, { status: 200 });
}
