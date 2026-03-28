import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyInterest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to database and save contact
    await connectDB();
    const contact = await Contact.create({
      name,
      email,
      phone,
      propertyInterest,
      message,
      status: 'new',
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password',
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.EMAIL_TO || 'info@whitecoat.com',
      subject: `New Property Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0369a1; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #eab308; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 WhiteCoat Property Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Doctor Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              
              ${propertyInterest ? `
              <div class="field">
                <div class="label">Property Interest:</div>
                <div class="value">${propertyInterest}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
              
              <div class="footer">
                <p>This inquiry was submitted through the WhiteCoat website contact form.</p>
                <p>Please respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to WhiteCoat (you)
    await transporter.sendMail(mailOptions);

    // Confirmation email to sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting WhiteCoat',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .message { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #eab308; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .highlight { color: #0369a1; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 WhiteCoat</h1>
              <p style="margin: 0; font-size: 18px;">Thank you for reaching out!</p>
            </div>
            <div class="content">
              <p>Dear <span class="highlight">${name}</span>,</p>
              
              <p>Thank you for contacting WhiteCoat. We have received your inquiry and our team will review it shortly.</p>
              
              <div class="message">
                <p><strong>Your Message:</strong></p>
                <p>${message}</p>
                ${propertyInterest ? `<p><strong>Property Interest:</strong> ${propertyInterest}</p>` : ''}
              </div>
              
              <p>We aim to respond to all inquiries within <span class="highlight">24 hours</span>. If your matter is urgent, please feel free to call us directly.</p>
              
              <p>Best regards,<br>
              <strong>The WhiteCoat Team</strong></p>
              
              <div class="footer">
                <p>This is an automated confirmation email.</p>
                <p>Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send confirmation email to sender
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        contactId: contact._id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve contacts (for admin use)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    
    const query = status ? { status } : {};
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit);
    
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
