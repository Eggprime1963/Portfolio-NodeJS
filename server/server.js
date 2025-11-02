const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Resend configuration
(async () => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: 'Resend API Test',
      html: '<p>Email configuration test successful.</p>'
    });
    console.log('Email server is ready to take messages');
  } catch (error) {
    console.log('Email configuration error:', error);
  }
})();

// Formal email templates
const createContactNotificationEmail = (formData) => {
  return {
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #007bff;
          }
          .content {
            padding: 20px;
            background-color: #ffffff;
          }
          .info-row {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f8f9fa;
            border-left: 3px solid #007bff;
          }
          .label {
            font-weight: bold;
            color: #007bff;
          }
          .footer {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message through your portfolio contact form</p>
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">Name:</span> ${formData.name} ${formData.lastName || ''}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${formData.email}
            </div>
            <div class="info-row">
              <span class="label">Subject:</span> ${formData.subject}
            </div>
            <div class="info-row">
              <span class="label">Message:</span><br>
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
            <div class="info-row">
              <span class="label">Submitted:</span> ${new Date().toLocaleString()}
            </div>
          </div>
          <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

const createCVDeliveryEmail = (recipientEmail, recipientName) => {
  return {
    subject: 'Your Requested CV - Thank You for Your Interest',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 30px;
            background-color: #ffffff;
          }
          .greeting {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .message {
            margin-bottom: 20px;
          }
          .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }
          .footer {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>CV Delivery</h2>
          </div>
          <div class="content">
            <div class="greeting">
              Dear ${recipientName || 'Valued Contact'},
            </div>
            <div class="message">
              Thank you for your interest in my professional background. As requested, please find my CV attached to this email.
            </div>
            <div class="message">
              I appreciate you taking the time to review my qualifications and experience. Should you have any questions or require additional information, please don't hesitate to reach out to me.
            </div>
            <div class="message">
              I look forward to the possibility of discussing potential opportunities with you.
            </div>
            <div class="signature">
              <p>Best regards,</p>
              <p><strong>${process.env.YOUR_NAME || 'Portfolio Owner'}</strong></p>
              <p>${process.env.YOUR_EMAIL || 'your.email@example.com'}</p>
              <p>${process.env.YOUR_PHONE || ''}</p>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent in response to a CV request from your portfolio website.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, lastName, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    const formData = { name, lastName, email, subject, message };
    const emailContent = createContactNotificationEmail(formData);

    // Send notification email using Resend
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.RECIPIENT_EMAIL,
      reply_to: email,
      subject: emailContent.subject,
      html: emailContent.html
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

app.post('/api/request-cv', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    // Validate email
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email address is required' 
      });
    }

    const cvPath = path.join(__dirname, '..', 'my-page', 'public', 'MyCV.pdf');
    const emailContent = createCVDeliveryEmail(email, name);

    // Send CV to requester using Resend
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
      attachments: [
        {
          filename: 'CV.pdf',
          path: cvPath,
          contentType: 'application/pdf'
        }
      ]
    });

    // Send notification to you about CV request
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `CV Request from ${name || 'Someone'} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3>CV Download Request</h3>
          <p><strong>Requester:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p>The CV has been automatically sent to the requester.</p>
        </div>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'CV sent successfully to your email!' 
    });

  } catch (error) {
    console.error('Error sending CV:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send CV. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});