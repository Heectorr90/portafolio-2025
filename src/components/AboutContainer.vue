<template>
  <section id="about" class="about-section">
    <v-container>
      <!-- Título de la sección -->
      <div class="section-header text-center mb-12">
        <h2 class="section-title">Sobre <span class="highlight">Mí</span></h2>
        <div class="title-underline"></div>
      </div>

      <v-row>
        <!-- Columna izquierda: Descripción -->
        <v-col cols="12" md="5">
          <div class="about-content fade-in">
            <h3 class="about-title mb-6">¿Por qué contratarme?</h3>

            <p class="about-text mb-4">Mi valor se centra en el dominio de la pila completa:</p>

            <p class="about-text mb-4">
              Frontend: Experto en Vue.js y Angular, garantizando interfaces de usuario atractivas y
              totalmente responsivas.
            </p>

            <p class="about-text mb-4">
              Backend: Sólida experiencia en Laravel y PHP, enfocada en la creación de APIs REST
              robustas y funcionales.
            </p>

            <p class="about-text mb-4">
              Destaco por ir más allá del código: me especializo en la automatización, monitoreo y
              resolución de incidencias técnicas para asegurar que las aplicaciones no solo
              funcionen, sino que optimicen los procesos del negocio. Siempre estoy en constante
              aprendizaje de nuevas tecnologías y mejores prácticas.
            </p>
          </div>
        </v-col>

        <!-- Columna derecha: Pestañas -->
        <v-col cols="12" md="7">
          <v-card class="tabs-card fade-in-up" color="surface" elevation="8">
            <v-tabs v-model="activeTab" color="primary" align-tabs="center" grow>
              <v-tab value="experiencia">
                <v-icon start>mdi-briefcase</v-icon>
                Experiencia
              </v-tab>
              <v-tab value="educacion">
                <v-icon start>mdi-school</v-icon>
                Educación
              </v-tab>
              <v-tab value="informacion">
                <v-icon start>mdi-account</v-icon>
                Información
              </v-tab>
            </v-tabs>

            <v-card-text class="pa-6">
              <v-window v-model="activeTab">
                <!-- Tab Experiencia -->
                <v-window-item value="experiencia">
                  <div class="tab-content">
                    <h3 class="tab-title mb-4">Mi <span class="highlight">Experiencia</span></h3>
                    <p class="tab-description mb-6">
                      He trabajado en diversos proyectos que me han permitido crecer como
                      desarrollador web.
                    </p>

                    <div class="experience-list">
                      <v-card
                        v-for="(exp, index) in experienceList"
                        :key="index"
                        class="experience-item mb-4"
                        color="background"
                        elevation="4"
                      >
                        <v-card-text class="pa-5">
                          <div class="experience-year mb-2">{{ exp.year }}</div>
                          <h4 class="experience-title mb-2">{{ exp.title }}</h4>
                          <p class="experience-company mb-3">{{ exp.company }}</p>
                          <p class="experience-description">{{ exp.description }}</p>
                        </v-card-text>
                      </v-card>
                    </div>
                  </div>
                </v-window-item>

                <!-- Tab Educación -->
                <v-window-item value="educacion">
                  <div class="tab-content">
                    <h3 class="tab-title mb-4">Mi <span class="highlight">Educación</span></h3>
                    <p class="tab-description mb-6">
                      Formación académica y cursos que respaldan mis conocimientos técnicos.
                    </p>

                    <div class="education-list">
                      <v-card
                        v-for="(edu, index) in educationList"
                        :key="index"
                        class="education-item mb-4"
                        color="background"
                        elevation="4"
                      >
                        <v-card-text class="pa-5">
                          <div class="education-year mb-2">{{ edu.year }}</div>
                          <h4 class="education-title mb-2">{{ edu.title }}</h4>
                          <p class="education-institution mb-3">{{ edu.institution }}</p>
                          <p class="education-description">{{ edu.description }}</p>
                        </v-card-text>
                      </v-card>
                    </div>
                  </div>
                </v-window-item>

                <!-- Tab Información -->
                <v-window-item value="informacion">
                  <div class="tab-content">
                    <h3 class="tab-title mb-4">Mi <span class="highlight">Información</span></h3>
                    <p class="tab-description mb-6">
                      A continuación, te comparto mis datos personales y de contacto para que puedas
                      comunicarte conmigo de manera directa y eficiente.
                    </p>

                    <div class="info-list">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          v-for="(item, index) in informacionPersonal"
                          :key="index"
                        >
                          <div class="info-item">
                            <span class="info-label">{{ item.label }}:</span>
                            <span class="info-value">{{ item.value }}</span>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("experiencia");

const experienceList = ref([
  {
    year: "2022 - 2025",
    title: "Desarrollador Web Jr.",
    company: 'Bit Electronics "Centro de servicio"',
    description:
      "Automatización, monitoreo y resolución de incidencias técnicas de tareas repetitivas mediante scripts y herramientas de backend para mejorar la productividad.",
  },
  {
    year: "2021 - 2022",
    title: "Programador Front-end",
    company: "CTED Corporativo Tecnológico y Educativo S.A. de C.V.",
    description:
      "Durante mi estancia como becario, participé en el desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como HTML, CSS y Angular.",
  },
]);

const educationList = ref([
  {
    year: "2023 - 2024",
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Tecnológico Universitario de Toluca",
    description: "Enfoque en desarrollo de software, bases de datos y administración de sistemas.",
  },
  {
    year: "2016 - 2019",
    title: "Ingeniería Informática (Trunca)",
    institution: "Tecnológico Universitario de Toluca",
    description:
      "Formación en lógica de programación, redes y fundamentos de ingeniería. Se cursaron materias clave antes de la interrupción de estudios.",
  },
]);

const informacionPersonal = ref([
  { label: "Nombre", value: "Héctor Ramírez" },
  { label: "Edad", value: "29 años" },
  { label: "Estado", value: "Soltero" },
  { label: "Ubicación", value: "Estado de México, Toluca" },
  { label: "Correo", value: "developerbit035@gmail.com" },
  { label: "Lenguaje", value: "Español, Inglés (Básico)" },
]);
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  background: #112e42;
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

/* Contenido izquierdo */
.about-content {
  padding: 2rem 1rem;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ededed;
  margin-bottom: 1.5rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ededed;
  opacity: 0.9;
}

/* Card de pestañas */
.tabs-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 171, 240, 0.2);
  overflow: hidden;
}

:deep(.v-tabs) {
  background: rgba(0, 171, 240, 0.05);
}

:deep(.v-tab) {
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Contenido de tabs */
.tab-content {
  min-height: 500px;
  max-height: 650px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.tab-content::-webkit-scrollbar {
  width: 7px;
}

.tab-content::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

.tab-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}

.tab-content:hover::-webkit-scrollbar-thumb {
  background: #00abf0;
}

.tab-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ededed;
}

.tab-description {
  font-size: 1rem;
  color: #ededed;
  opacity: 0.8;
  line-height: 1.6;
}

/* Items de experiencia */
.experience-item,
.education-item {
  transition: all 0.3s ease;
  border-left: 3px solid #00abf0;
}

.experience-item:hover,
.education-item:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 20px rgba(0, 171, 240, 0.3) !important;
}

.experience-year,
.education-year {
  font-size: 0.95rem;
  color: #00abf0;
  font-weight: 600;
}

.experience-title,
.education-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ededed;
}

.experience-company,
.education-institution {
  font-size: 1.05rem;
  color: #00abf0;
  font-weight: 500;
  opacity: 0.9;
  position: relative;
  padding-left: 1.5rem;
}

.experience-company::before,
.education-institution::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #00abf0;
  border-radius: 50%;
}

.experience-description,
.education-description {
  font-size: 1rem;
  color: #ededed;
  opacity: 0.85;
  line-height: 1.7;
}

/* Información personal */
.info-list {
  padding: 1rem 0;
}

.info-item {
  background: rgba(8, 27, 41, 0.5);
  padding: 1.2rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border-left: 3px solid #00abf0;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(8, 27, 41, 0.8);
  transform: translateX(5px);
}

.info-label {
  font-size: 1.05rem;
  color: #00abf0;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
}

.info-value {
  font-size: 1.1rem;
  color: #ededed;
  font-weight: 400;
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
  .about-section {
    padding: 80px 0;
  }

  .about-content {
    padding: 1rem 0;
    text-align: center;
  }

  .tab-content {
    max-height: 500px;
  }
}

@media (max-width: 600px) {
  :deep(.v-tab) {
    font-size: 0.85rem;
    padding: 0 8px;
  }
}
</style>
