import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    // Check if API key exists
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      company, 
      role, 
      expertise, 
      challenge, 
      timeline, 
      budget,
      locale,
      submittedAt 
    } = body;

    // Basic validation
    if (!fullName || !email || !company || !role || !expertise || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend default testing address
      to: ['hello@matteoarnaboldi.com'],
      subject: `Strategic Inquiry: ${fullName} - ${company}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #354BB5; text-transform: uppercase; letter-spacing: 2px;">New Strategic Inquiry</h2>
          <p style="color: #666; font-size: 14px;">Received on: ${new Date(submittedAt).toLocaleString(locale)}</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <h3 style="font-size: 16px; margin-bottom: 10px;">Identity</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Role:</strong> ${role}</p>
          
          <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">Project Context</h3>
          <p><strong>Areas of Interest:</strong> ${expertise.join(', ')}</p>
          <p><strong>Challenge:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #354BB5; font-style: italic;">
            ${challenge.replace(/\n/g, '<br/>')}
          </div>
          
          <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">Logistics</h3>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #999;">This inquiry was sent from matteoarnaboldi.com contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

