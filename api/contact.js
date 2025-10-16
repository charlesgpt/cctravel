// Contact form handler using Resend
// This is a serverless function that can be deployed to Vercel, Netlify, or similar platforms

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'C&C Travel Hub <noreply@cctravelhub.com>', // Replace with your verified domain
      to: ['info@cctravelhub.com'], // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f2ad0d; border-bottom: 2px solid #f2ad0d; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f7f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #f2ad0d;">
            <h3 style="margin-top: 0; color: #1f2937;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e5f3ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1f2937;">
              <strong>Quick Actions:</strong><br>
              • Reply to: <a href="mailto:${email}" style="color: #f2ad0d;">${email}</a><br>
              • Call UAE: <a href="tel:+971585242945" style="color: #f2ad0d;">+971 58 524 2945</a><br>
              • Call Tanzania: <a href="tel:+255763858246" style="color: #f2ad0d;">+255 763 858 246</a>
            </p>
          </div>
          
          <footer style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the C&C Travel Hub contact form.</p>
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data?.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
