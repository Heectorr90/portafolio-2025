const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export function makeBrevoEmailProvider({ apiKey, senderEmail, senderName }) {
  return {
    async send({ to, replyTo, subject, htmlContent }) {
      const response = await fetch(BREVO_EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: {
            name: senderName,
            email: senderEmail,
          },
          to: [{ email: to }],
          replyTo: {
            email: replyTo,
          },
          subject,
          htmlContent,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`Brevo email failed: ${details}`);
      }
    },
  };
}
