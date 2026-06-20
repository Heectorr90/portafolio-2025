export function renderContactEmail({ name, email, message }) {
  return `
    <h3>Nuevo mensaje desde el portafolio</h3>
    <p><b>Nombre:</b> ${escapeHtml(name)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Mensaje:</b></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
