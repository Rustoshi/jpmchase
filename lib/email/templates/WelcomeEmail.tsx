import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"

export interface WelcomeEmailProps {
  firstName:       string
  verificationUrl: string
}

export function renderWelcomeEmail({ firstName, verificationUrl }: WelcomeEmailProps): string {
  const year = new Date().getFullYear()
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email - ${BANK_NAME}</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#333333">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:40px 20px">
    <tr>
      <td>
        <!-- Header -->
        <h1 style="margin:0 0 32px;font-size:24px;font-weight:600;color:#111111">${BANK_NAME}</h1>
        
        <!-- Greeting -->
        <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#333333">
          Hi ${escapeHtml(firstName)},
        </p>
        
        <!-- Main content -->
        <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#333333">
          Thank you for creating an account with ${BANK_NAME}. To complete your registration and start using your account, please verify your email address.
        </p>
        
        <!-- CTA Button -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:32px 0">
          <tr>
            <td>
              <a href="${escapeHtml(verificationUrl)}" style="display:inline-block;padding:14px 32px;background-color:#111111;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;border-radius:6px">Verify Email Address</a>
            </td>
          </tr>
        </table>
        
        <!-- Alternative link -->
        <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#666666">
          Or copy and paste this link into your browser:
        </p>
        <p style="margin:0 0 32px;font-size:14px;line-height:1.6;color:#666666;word-break:break-all">
          ${escapeHtml(verificationUrl)}
        </p>
        
        <!-- Expiry notice -->
        <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#666666">
          This verification link will expire in 24 hours. If you did not create an account with ${BANK_NAME}, please ignore this email.
        </p>
        
        <!-- Divider -->
        <hr style="margin:32px 0;border:none;border-top:1px solid #eeeeee" />
        
        <!-- Footer -->
        <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#333333">
          Best regards,<br />
          The ${BANK_NAME} Team
        </p>
        
        <p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#999999">
          If you have any questions, contact us at <a href="mailto:${SUPPORT_EMAIL}" style="color:#666666">${SUPPORT_EMAIL}</a>
        </p>
        
        <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#999999">
          &copy; ${year} ${BANK_NAME}. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
