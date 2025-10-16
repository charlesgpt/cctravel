# C&C Travel Hub Landing Page

A luxury travel landing page with integrated contact form and WhatsApp functionality.

## Features

- ✨ Modern, responsive design
- 📱 WhatsApp integration with floating button
- 📧 Working contact form with email notifications
- 🌙 Dark/light mode support
- 🎨 Tailwind CSS styling
- 📞 Multiple contact methods (UAE & Tanzania)

## Contact Integration

### WhatsApp
- Floating WhatsApp button with UAE number: +971 58 524 2945
- Pre-filled message for easy customer engagement

### Contact Form
- Powered by Resend for reliable email delivery
- Form validation and user feedback
- Professional email templates

### Phone Numbers
- UAE: +971 58 524 2945
- Tanzania: +255 763 858 246

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Service
1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Copy `.env.example` to `.env`
4. Add your Resend API key:
```
RESEND_API_KEY=your_actual_api_key_here
```

### 3. Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### 4. Alternative: Deploy to Netlify
1. Build the site: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure serverless functions
4. Add environment variables

## Email Configuration

The contact form sends emails using Resend. Make sure to:

1. Verify your domain in Resend
2. Update the `from` email in `api/contact.js`
3. Update the `to` email to your actual business email

## Local Development

```bash
npm run dev
```

This will serve the site locally at `http://localhost:3000`

## File Structure

```
├── code.html              # Main landing page
├── api/
│   └── contact.js         # Contact form handler
├── package.json           # Dependencies
├── .env.example          # Environment variables template
└── README.md             # This file
```

## Customization

### Update Contact Information
- Edit phone numbers in the contact section
- Update WhatsApp number in the floating button
- Change email addresses in the API handler

### Styling
- The site uses Tailwind CSS
- Colors are defined in the CSS custom properties
- Primary color: `#f2ad0d` (gold)

### Content
- Update destination information
- Modify service descriptions
- Change testimonials and images

## Support

For technical support or customization requests, contact the development team.
