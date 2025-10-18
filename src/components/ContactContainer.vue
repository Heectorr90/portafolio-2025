<template>
  <section id="contact" class="contact-section">
    <v-container>
      <!-- Título de la sección -->
      <div class="section-header text-center mb-12">
        <h2 class="section-title">
          <span class="highlight">Contáctame</span>
        </h2>
        <div class="title-underline"></div>
        <p class="section-subtitle mt-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>

      <v-row align="center" justify="center">
        <!-- Información de contacto -->
        <v-col cols="12" md="5" class="mb-8 mb-md-0">
          <div class="contact-info fade-in">
            <h3 class="info-title mb-6">Información de Contacto</h3>
            <p class="info-description mb-8">
              Estoy disponible para trabajar en tu próximo proyecto. No dudes en contactarme a
              través de cualquiera de estos medios.
            </p>

            <!-- Items de contacto -->
            <div v-for="item in contactItems" :key="item.title" class="contact-item mb-6">
              <div class="d-flex align-start">
                <v-avatar color="primary" size="50" class="contact-icon mr-4">
                  <v-icon :icon="item.icon" color="background"></v-icon>
                </v-avatar>
                <div class="contact-details">
                  <h4 class="contact-title">{{ item.title }}</h4>
                  <p class="contact-value">{{ item.value }}</p>
                  <a v-if="item.link" :href="item.link" class="contact-link" target="_blank">
                    {{ item.linkText }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Redes sociales -->
            <div class="social-links mt-8">
              <h4 class="social-title mb-4">Sígueme en:</h4>
              <div class="d-flex gap-3">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  :icon="social.icon"
                  color="primary"
                  variant="outlined"
                  size="large"
                  :href="social.url"
                  target="_blank"
                  class="social-btn"
                >
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Formulario de contacto -->
        <v-col cols="12" md="6" offset-md="1">
          <v-card class="contact-form-card fade-in-up" color="surface" elevation="12">
            <v-card-text class="pa-8">
              <h3 class="form-title mb-6">Envíame un Mensaje</h3>

              <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <!-- Nombre -->
                <v-text-field
                  v-model="formData.name"
                  label="Nombre completo"
                  :rules="nameRules"
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                  prepend-inner-icon="mdi-account"
                  required
                ></v-text-field>

                <!-- Email -->
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  :rules="emailRules"
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  required
                ></v-text-field>

                <!-- Asunto -->
                <v-text-field
                  v-model="formData.subject"
                  label="Asunto"
                  :rules="subjectRules"
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                  prepend-inner-icon="mdi-text-subject"
                  required
                ></v-text-field>

                <!-- Mensaje -->
                <v-textarea
                  v-model="formData.message"
                  label="Mensaje"
                  :rules="messageRules"
                  variant="outlined"
                  color="primary"
                  rows="5"
                  class="mb-4"
                  prepend-inner-icon="mdi-message-text"
                  required
                ></v-textarea>

                <!-- Botón enviar -->
                <v-btn
                  type="submit"
                  color="primary"
                  size="x-large"
                  block
                  :loading="loading"
                  :disabled="!valid"
                >
                  <v-icon start>mdi-send</v-icon>
                  Enviar Mensaje
                </v-btn>
              </v-form>

              <!-- Mensaje de éxito -->
              <v-alert
                v-if="showSuccess"
                type="success"
                variant="tonal"
                class="mt-4"
                closable
                @click:close="showSuccess = false"
              >
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </v-alert>

              <!-- Mensaje de error -->
              <v-alert
                v-if="showError"
                type="error"
                variant="tonal"
                class="mt-4"
                closable
                @click:close="showError = false"
              >
                Hubo un error al enviar el mensaje. Intenta nuevamente.
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref(null);
const valid = ref(false);
const loading = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactItems = ref([
  {
    icon: "mdi-map-marker",
    title: "Ubicación",
    value: "Toluca, México",
    link: null,
    linkText: null,
  },
  {
    icon: "mdi-email",
    title: "Email",
    value: "developerbit035@gmail.com",
    link: "mailto:developerbit035@gmail.com",
    linkText: "Enviar email",
  },
  {
    icon: "mdi-phone",
    title: "Teléfono",
    value: "+52 722 571 9891",
    link: "tel:+527225719891",
    linkText: "Llamar ahora",
  },
]);

const socialLinks = ref([
  { name: "GitHub", icon: "mdi-github", url: "https://github.com/tuusuario" },
  { name: "LinkedIn", icon: "mdi-linkedin", url: "https://linkedin.com/in/tuusuario" },
  { name: "Twitter", icon: "mdi-twitter", url: "https://twitter.com/tuusuario" },
  { name: "Instagram", icon: "mdi-instagram", url: "https://instagram.com/tuusuario" },
]);

// Reglas de validación
const nameRules = [
  (v) => !!v || "El nombre es requerido",
  (v) => (v && v.length >= 3) || "El nombre debe tener al menos 3 caracteres",
];

const emailRules = [
  (v) => !!v || "El email es requerido",
  (v) => /.+@.+\..+/.test(v) || "El email debe ser válido",
];

const subjectRules = [
  (v) => !!v || "El asunto es requerido",
  (v) => (v && v.length >= 5) || "El asunto debe tener al menos 5 caracteres",
];

const messageRules = [
  (v) => !!v || "El mensaje es requerido",
  (v) => (v && v.length >= 10) || "El mensaje debe tener al menos 10 caracteres",
];

// Enviar formulario
const submitForm = async () => {
  const { valid: isValid } = await form.value.validate();

  if (isValid) {
    loading.value = true;
    showSuccess.value = false;
    showError.value = false;

    try {
      // Aquí puedes integrar con un servicio de email como EmailJS, Formspree, etc.
      // Por ahora simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Formulario enviado:", formData.value);

      showSuccess.value = true;
      formData.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      form.value.reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      showError.value = true;
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  background: #081b29;
  padding: 100px 0;
  position: relative;
}

/* Header de sección */
.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #ededed;
  margin-bottom: 1rem;
}

.highlight {
  color: #00abf0;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: #00abf0;
  margin: 0 auto;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #ededed;
  opacity: 0.8;
}

/* Información de contacto */
.contact-info {
  padding: 2rem 1rem;
}

.info-title {
  font-size: 2rem;
  font-weight: 600;
  color: #00abf0;
  margin-bottom: 1.5rem;
}

.info-description {
  font-size: 1.1rem;
  color: #ededed;
  opacity: 0.9;
  line-height: 1.8;
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
}

.contact-icon {
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ededed;
  margin-bottom: 0.25rem;
}

.contact-value {
  font-size: 1rem;
  color: #ededed;
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.contact-link {
  color: #00abf0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  text-decoration: underline;
  opacity: 0.8;
}

/* Redes sociales */
.social-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ededed;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
}

/* Formulario */
.contact-form-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 171, 240, 0.2);
}

.form-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #00abf0;
}

/* Estilos de campos del formulario */
:deep(.v-field) {
  border-radius: 12px;
}

:deep(.v-field__outline__start),
:deep(.v-field__outline__end) {
  border-color: rgba(0, 171, 240, 0.3) !important;
}

:deep(.v-field--focused .v-field__outline__start),
:deep(.v-field--focused .v-field__outline__end) {
  border-color: #00abf0 !important;
}

:deep(.v-label) {
  color: #ededed !important;
  opacity: 0.8;
}

:deep(.v-field__input) {
  color: #ededed !important;
}

:deep(.v-icon) {
  opacity: 0.7;
}

/* Animaciones */
.fade-in {
  animation: fadeIn 1s ease-out;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out 0.2s backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .contact-section {
    padding: 80px 0;
  }

  .contact-info {
    text-align: center;
    padding: 1rem 0;
  }

  .contact-item {
    justify-content: center;
  }

  .contact-item:hover {
    transform: translateX(0) translateY(-5px);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-links .d-flex {
    justify-content: center;
  }
}
</style>
