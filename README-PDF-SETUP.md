# PDF and Email Setup for IMAGINATION G

You need to install additional packages to enable the PDF generation and email functionality:

## Installing Required Packages

Run these commands in your terminal:

```bash
# Install PDF generation library
npm install @react-pdf/renderer

# Install email functionality
npm install nodemailer
```

## Setting Up Email Delivery

1. Create a `.env.local` file in the root directory:

```
# Email configuration
EMAIL_USER=marcus@imaginationg.studio
EMAIL_PASS=your-app-password

# Site URL (used for PDF generation)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. If using Gmail, you'll need to generate an app password:
   - Go to your Google Account > Security
   - Under "Signing in to Google," select "App passwords"
   - Generate a new app password for "Mail" and use it in your .env.local file

## Troubleshooting

If you encounter issues with PDF generation:

1. Make sure @react-pdf/renderer is installed
2. Restart your development server after installation
3. Check browser console for any errors

For email delivery issues:

1. Verify your email credentials in .env.local
2. Ensure your email provider allows SMTP access
3. Check server logs for detailed error messages

## Support

If you need further assistance, contact us at hello@imaginationg.com.