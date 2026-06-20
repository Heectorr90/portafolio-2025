const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2000,
};

export function validateContactMessage(contactMessage) {
  const errors = [];

  if (contactMessage.name.length < 3) {
    errors.push("El nombre debe tener al menos 3 caracteres");
  }

  if (!EMAIL_REGEX.test(contactMessage.email)) {
    errors.push("El email no es valido");
  }

  if (contactMessage.subject && contactMessage.subject.length < 3) {
    errors.push("El asunto debe tener al menos 3 caracteres");
  }

  if (contactMessage.message.length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres");
  }

  for (const [field, limit] of Object.entries(FIELD_LIMITS)) {
    if (contactMessage[field].length > limit) {
      errors.push(`El campo ${field} excede el limite permitido`);
    }
  }

  return errors;
}
