<template>
  <section id="home" class="hero-section">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <!-- Contenido principal -->
        <v-col cols="12" md="7" class="hero-content">
          <div class="text-content">
            <!-- Saludo animado -->
            <h3 class="greeting fade-in">Hola, soy</h3>

            <!-- Nombre principal -->
            <h1 class="name slide-in-left">Hector Ramirez</h1>

            <!-- Texto dinámico con títulos -->
            <div class="typing-container slide-in-left">
              <h2 class="profession">
                Y soy <span class="typing-text">{{ currentTitle }}</span>
                <span class="cursor">|</span>
              </h2>
            </div>

            <!-- Descripción -->
            <p class="description fade-in-up">
              Desarrollador apasionado por crear experiencias web increíbles. Especializado en
              Vue.js, JavaScript y diseño moderno.
            </p>

            <!-- Botones de acción -->
            <div class="action-buttons fade-in-up">
              <v-btn
                color="primary"
                size="x-large"
                elevation="8"
                class="mr-4 mb-2"
                @click="scrollToContact"
              >
                <v-icon start>mdi-email</v-icon>
                Contáctame
              </v-btn>

              <v-btn
                variant="outlined"
                color="primary"
                size="x-large"
                class="mb-2"
                href="/Hector_Ramirez_CV.pdf"
                download="Hector_Ramirez_CV.pdf"
                target="_blank"
              >
                <v-icon start>mdi-download</v-icon>
                Descargar CV
              </v-btn>
            </div>

            <!-- Redes sociales -->
            <div class="social-icons fade-in">
              <v-btn
                v-for="social in socialLinks"
                :key="social.name"
                :icon="social.icon"
                variant="text"
                color="primary"
                size="large"
                :href="social.url"
                target="_blank"
                class="social-btn"
              >
              </v-btn>
            </div>
          </div>
        </v-col>

        <!-- Imagen / Ilustración -->
        <v-col cols="12" md="5" class="hero-image-col">
          <div class="hero-image-container fade-in">
            <img src="@/assets/home-foto.png" alt="Profile" class="profile-image" />
          </div>
        </v-col>
      </v-row>

      <!-- Flecha de scroll -->
      <div class="scroll-indicator">
        <a href="#about" @click.prevent="scrollToAbout">
          <v-icon color="primary" class="bounce">mdi-chevron-down</v-icon>
        </a>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Títulos que se van rotando
const titles = ["Desarrollador Full Stack", "Desarrollador de Software"];

const currentTitle = ref("");
const socialLinks = ref([
  { name: "GitHub", icon: "mdi-github", url: "https://github.com/Heectorr90" },
  {
    name: "LinkedIn",
    icon: "mdi-linkedin",
    url: "https://www.linkedin.com/in/hector-ramirez-909577215/",
  },
  { name: "Email", icon: "mdi-email", url: "mailto:developerbit035@gmail.com" },
]);

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingInterval = null;

// Efecto de escritura (typing effect)
const typeEffect = () => {
  const currentFullTitle = titles[titleIndex];

  if (isDeleting) {
    currentTitle.value = currentFullTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentTitle.value = currentFullTitle.substring(0, charIndex + 1);
    charIndex++;
  }

  // Velocidad de escritura
  let typeSpeed = isDeleting ? 50 : 100;

  // Si terminó de escribir
  if (!isDeleting && charIndex === currentFullTitle.length) {
    typeSpeed = 2000; // Pausa antes de borrar
    isDeleting = true;
  }
  // Si terminó de borrar
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // Siguiente título
    typeSpeed = 500; // Pausa antes de escribir nuevo título
  }

  typingInterval = setTimeout(typeEffect, typeSpeed);
};

// Scroll suave a secciones
const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToAbout = () => {
  const element = document.querySelector("#about");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  if (typingInterval) {
    clearTimeout(typingInterval);
  }
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: #081b29;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Contenido de texto */
.hero-content {
  z-index: 2;
}

.text-content {
  padding: 2rem 0;
}

.greeting {
  font-size: 2rem;
  color: #ededed;
  font-weight: 500;
  margin-bottom: 1rem;
}

.name {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  color: #ededed;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.typing-container {
  margin-bottom: 2rem;
}

.profession {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #ededed;
  font-weight: 600;
}

.typing-text {
  color: #00abf0;
}

.cursor {
  color: #00abf0;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.description {
  font-size: 1.1rem;
  color: #ededed;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
  opacity: 0.9;
}

/* Botones */
.action-buttons {
  margin-bottom: 2rem;
}

/* Redes sociales */
.social-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
}

/* Imagen Hero */
.hero-image-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #00abf0 0%, #112e42 100%);
  animation: rotate 20s linear infinite;
  opacity: 0.2;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.image-placeholder {
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #00abf0;
  box-shadow: 0 0 30px rgba(0, 171, 240, 0.5);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Indicador de scroll */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.bounce {
  animation: bounce 2s infinite;
  cursor: pointer;
  font-size: 3rem !important;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Animaciones */
.fade-in {
  animation: fadeIn 1s ease-out;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.slide-in-left {
  animation: slideInLeft 1s ease-out 0.2s backwards;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .hero-section {
    padding-top: 70px;
  }

  .text-content {
    text-align: center;
  }

  .greeting {
    font-size: 1.5rem;
  }

  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .action-buttons .v-btn {
    margin: 0 !important;
    width: 100%;
    max-width: 300px;
  }

  .social-icons {
    justify-content: center;
  }

  .hero-image-container {
    max-width: 300px;
    margin-top: 2rem;
  }
}
</style>
