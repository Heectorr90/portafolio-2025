export function makeContactMessageDto(payload) {
  return {
    name: normalizeText(payload?.name),
    email: normalizeText(payload?.email).toLowerCase(),
    subject: normalizeText(payload?.subject),
    message: normalizeText(payload?.message),
  };
}

function normalizeText(value) {
  return String(value ?? "").trim();
}
