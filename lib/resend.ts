import { Resend } from 'resend';

let resendInstance: Resend | null = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined. Set it in your environment variables to use email sending.');
  }
  
  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  
  return resendInstance;
}

Object.defineProperty(exports, 'resend', {
  get() {
    return getResend();
  }
});

export interface SendBookingConfirmationParams {
  to: string;
  bookingReference: string;
  doctorName: string;
  scheduledAt: Date;
  videoUrl?: string;
}

export async function sendBookingConfirmation(params: SendBookingConfirmationParams) {
  const { to, bookingReference, doctorName, scheduledAt, videoUrl } = params;

  const formattedDate = scheduledAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = scheduledAt.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  try {
    await resend.emails.send({
      from: 'AutiCare <noreply@auticare.com>',
      to,
      subject: `Appointment Confirmed - ${bookingReference}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #0073e6;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .detail {
                margin: 15px 0;
                padding: 15px;
                background-color: white;
                border-radius: 4px;
              }
              .detail-label {
                font-weight: bold;
                color: #0073e6;
                margin-bottom: 5px;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #0073e6;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Appointment Confirmed</h1>
            </div>
            <div class="content">
              <p>Your appointment has been successfully booked!</p>
              
              <div class="detail">
                <div class="detail-label">Booking Reference</div>
                <div style="font-size: 18px; font-weight: bold; color: #0073e6;">${bookingReference}</div>
              </div>

              <div class="detail">
                <div class="detail-label">Doctor</div>
                <div>${doctorName}</div>
              </div>

              <div class="detail">
                <div class="detail-label">Date & Time</div>
                <div>${formattedDate}</div>
                <div>${formattedTime}</div>
              </div>

              ${videoUrl ? `
                <div class="detail">
                  <div class="detail-label">Video Consultation Link</div>
                  <a href="${videoUrl}" class="button">Join Video Call</a>
                  <p style="font-size: 14px; color: #666;">You can join the call 5 minutes before your scheduled time.</p>
                </div>
              ` : ''}

              <div style="margin-top: 30px; padding: 20px; background-color: #e6f2ff; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #0073e6;">What's Next?</h3>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>You'll receive a reminder 24 hours before your appointment</li>
                  <li>Please be ready 5 minutes before your scheduled time</li>
                  <li>Have any questions or concerns ready to discuss</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <p>Thank you for choosing AutiCare</p>
              <p>If you need to reschedule or cancel, please contact us with your booking reference.</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log(`Booking confirmation sent to ${to}`);
  } catch (error) {
    console.error('Failed to send booking confirmation:', error);
    // Don't throw error - email failure shouldn't break the booking flow
  }
}

export interface SendReminderParams {
  to: string;
  bookingReference: string;
  doctorName: string;
  scheduledAt: Date;
  videoUrl?: string;
}

export async function sendReminder(params: SendReminderParams) {
  const { to, bookingReference, doctorName, scheduledAt, videoUrl } = params;

  const formattedDate = scheduledAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = scheduledAt.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  try {
    await resend.emails.send({
      from: 'AutiCare <noreply@auticare.com>',
      to,
      subject: `Reminder: Appointment Tomorrow - ${bookingReference}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #00a35c;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #00a35c;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Appointment Reminder</h1>
            </div>
            <div class="content">
              <p><strong>Your appointment is tomorrow!</strong></p>
              <p>Booking Reference: <strong>${bookingReference}</strong></p>
              <p>Doctor: ${doctorName}</p>
              <p>Date: ${formattedDate}</p>
              <p>Time: ${formattedTime}</p>
              ${videoUrl ? `<a href="${videoUrl}" class="button">Join Video Call</a>` : ''}
              <p>We look forward to seeing you!</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log(`Reminder sent to ${to}`);
  } catch (error) {
    console.error('Failed to send reminder:', error);
  }
}

export interface SendCancellationParams {
  to: string;
  bookingReference: string;
  reason: string;
}

export async function sendCancellation(params: SendCancellationParams) {
  const { to, bookingReference, reason } = params;

  try {
    await resend.emails.send({
      from: 'AutiCare <noreply@auticare.com>',
      to,
      subject: `Appointment Cancelled - ${bookingReference}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #dc2626;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Appointment Cancelled</h1>
            </div>
            <div class="content">
              <p>Your appointment (${bookingReference}) has been cancelled.</p>
              <p><strong>Reason:</strong> ${reason}</p>
              <p>If you'd like to reschedule, please visit our website to book a new appointment.</p>
              <p>We apologize for any inconvenience.</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log(`Cancellation notification sent to ${to}`);
  } catch (error) {
    console.error('Failed to send cancellation:', error);
  }
}
