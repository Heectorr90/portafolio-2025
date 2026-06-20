import { renderContactEmail } from "./contact-email.template.js";

const DEFAULT_SUBJECT = "Nuevo mensaje desde el portafolio";

export async function sendContactMessageAction(contactMessage, emailProvider, options) {
  await emailProvider.send({
    to: options.recipientEmail,
    replyTo: contactMessage.email,
    subject: contactMessage.subject || DEFAULT_SUBJECT,
    htmlContent: renderContactEmail(contactMessage),
  });
}
