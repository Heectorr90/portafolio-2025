/* eslint-disable no-undef */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "https://portafolio-2025-two.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(422).json({ message: "Datos incompletos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacto Portafolio" <${process.env.BREVO_FROM}>`,
      to: process.env.BREVO_TO,
      subject: subject || "Nuevo mensaje desde el portafolio",
      html: `
        <h3>Nuevo mensaje</h3>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return res.status(500).json({ message: "Error al enviar correo" });
  }
}
