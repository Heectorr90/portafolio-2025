/* eslint-disable no-undef */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(422).json({ message: "Datos incompletos" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Contacto Portafolio",
          email: "developerbit035@gmail.com",
        },
        to: [{ email: "developerbit035@gmail.com" }],
        replyTo: {
          email,
        },
        subject: subject || "Nuevo mensaje desde el portafolio",
        htmlContent: `
          <h3>Nuevo mensaje desde el portafolio</h3>
          <p><b>Nombre:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mensaje:</b></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(errorText);
      return res.status(500).json({ message: "Error Brevo" });
    }

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error del servidor" });
  }
}
