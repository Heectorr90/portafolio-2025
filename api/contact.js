/* eslint-disable no-undef */
import { makeBrevoEmailProvider } from "./contact/brevo-email.provider.js";
import { makeContactMessageDto } from "./contact/contact-message.dto.js";
import { validateContactMessage } from "./contact/contact-message.validator.js";
import { sendContactMessageAction } from "./contact/send-contact-message.action.js";

const CONTACT_EMAIL = "developerbit035@gmail.com";
const SENDER_NAME = "Contacto Portafolio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not configured");
    return res.status(500).json({ message: "Configuracion de correo incompleta" });
  }

  const contactMessage = makeContactMessageDto(req.body);
  const errors = validateContactMessage(contactMessage);

  if (errors.length > 0) {
    return res.status(422).json({ message: "Datos invalidos", errors });
  }

  const emailProvider = makeBrevoEmailProvider({
    apiKey: process.env.BREVO_API_KEY,
    senderEmail: CONTACT_EMAIL,
    senderName: SENDER_NAME,
  });

  try {
    await sendContactMessageAction(contactMessage, emailProvider, {
      recipientEmail: CONTACT_EMAIL,
    });

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error del servidor" });
  }
}
