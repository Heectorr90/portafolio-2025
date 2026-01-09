<template>
  <section id="projects" class="projects-section">
    <v-container>
      <!-- Título de la sección -->
      <div class="section-header text-center mb-12">
        <h2 class="section-title">Mis <span class="highlight">Proyectos</span></h2>
        <div class="title-underline"></div>
        <p class="section-subtitle mt-4">Algunos de mis trabajos más recientes</p>
      </div>

      <!-- Filtros de proyectos -->
      <div class="filters text-center mb-8">
        <v-chip-group
          v-model="selectedFilter"
          selected-class="text-primary"
          color="primary"
          mandatory
        >
          <v-chip
            v-for="filter in filters"
            :key="filter"
            :value="filter"
            size="large"
            class="filter-chip"
          >
            {{ filter }}
          </v-chip>
        </v-chip-group>
      </div>

      <!-- Grid de proyectos -->
      <v-row>
        <v-col cols="12" sm="6" lg="4" v-for="project in filteredProjects" :key="project.id">
          <v-card class="project-card fade-in-up" color="surface" elevation="8">
            <!-- Imagen del proyecto -->
            <div class="project-image-container">
              <v-img :src="project.image" height="250" cover class="project-image">
                <div class="image-overlay">
                  <v-btn
                    icon
                    size="large"
                    color="primary"
                    :href="project.demo"
                    target="_blank"
                    class="overlay-btn"
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    size="large"
                    color="primary"
                    :href="project.github"
                    target="_blank"
                    class="overlay-btn ml-2"
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
              </v-img>
            </div>

            <!-- Contenido del proyecto -->
            <v-card-text class="pa-6">
              <h3 class="project-title mb-3">{{ project.title }}</h3>
              <p class="project-description mb-4">{{ project.description }}</p>

              <!-- Tecnologías usadas -->
              <div class="technologies mb-4">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="mr-2 mb-2"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <!-- Botones de acción -->
              <div class="project-actions">
                <!-- Si solo hay mas de una demo -->
                <template v-if="Array.isArray(project.demo)">
                  <v-btn
                    v-for="(link, index) in project.demo"
                    :key="index"
                    color="primary"
                    variant="flat"
                    :href="link.url"
                    target="_blank"
                    size="small"
                    class="mr-2"
                  >
                    <v-icon start size="small">mdi-eye</v-icon>
                    {{ link.name }}
                  </v-btn>
                </template>
                <!-- Si solo hay una demo -->
                <template v-else>
                  <v-btn
                    color="primary"
                    variant="flat"
                    :href="project.demo"
                    target="_blank"
                    size="small"
                    class="mr-2"
                  >
                    <v-icon start size="small">mdi-eye</v-icon>
                    Demo
                  </v-btn>
                </template>
                <v-btn
                  color="primary"
                  variant="outlined"
                  :href="project.github"
                  target="_blank"
                  size="small"
                >
                  <v-icon start size="small">mdi-github</v-icon>
                  Código
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Mensaje si no hay proyectos -->
      <v-row v-if="filteredProjects.length === 0">
        <v-col cols="12" class="text-center py-12">
          <v-icon size="80" color="primary">mdi-folder-open</v-icon>
          <p class="text-h6 mt-4" style="color: #ededed">No hay proyectos en esta categoría</p>
        </v-col>
      </v-row>

      <!-- Botón ver más proyectos -->
      <div class="text-center mt-12">
        <v-btn
          color="primary"
          size="large"
          variant="outlined"
          href="https://github.com/Heectorr90"
          target="_blank"
        >
          <v-icon start>mdi-github</v-icon>
          Ver más en GitHub
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedFilter = ref("Todos");

const filters = ref(["Todos", "Full Stack", "API Rest", "Otros"]);

const projects = ref([
  /*
  {
    id: 1,
    title: "E-commerce",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "https://via.placeholder.com/400x250/112e42/00abf0?text=E-commerce",
    demo: [
      { name: "Usuario", url: "https://tudemo.com/ecommerce" },
      { name: "Admin", url: "https://tudemo.com/admin" },
    ],
    github: "#",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Laravel"],
    category: ["Full Stack", "API Rest"],
  },
  */
  {
    id: 2,
    title: "Chatbot de IA",
    description:
      "Chatbot inteligente impulsado por IA que responde preguntas y asiste a los usuarios en tiempo real mediante procesamiento de lenguaje natural.",
    image: "/chatBot.png",
    demo: "https://react-ai-chatbot-gamma.vercel.app/",
    github: "https://github.com/Heectorr90/react-ai-chatbot",
    technologies: ["React", "OpenAI", "GPT", "Gemini"],
    category: ["Otros"],
  },
  /*
  {
    id: 3,
    title: "BizTrack",
    description:
      "BizTrack es un sistema ERP ligero con módulo CRM integrado, diseñado para pequeñas y medianas empresas. Permite gestionar clientes, ventas, inventario y facturación desde una única plataforma.",
    image: "https://via.placeholder.com/400x250/112e42/00abf0?text=ERP",
    demo: "#",
    github: "#",
    technologies: ["Vue.js", "Vuetify", "Laravel", "MySQL", "JWT"],
    category: ["Full Stack"],
  },
  */
  {
    id: 4,
    title: "EventHub",
    description:
      "Sistema de gestión de eventos que permite crear, registrar y administrar participantes. Incluye autenticación, control de aforo y panel de administración.",
    image: "/event_hub.png",
    demo: "https://hectorrm.infinityfreeapp.com/",
    github: "https://github.com/Heectorr90/EventHub.git",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: ["Otros"],
  },
  {
    id: 5,
    title: "Blog Personal",
    description:
      "Blog moderno con búsqueda y categorías. Con autenticación y panel de administración con roles de usuario.",
    image: "/blog_app.png",
    demo: "https://blog-app-six-drab.vercel.app/",
    github: "https://github.com/Heectorr90/blog-app.git",
    technologies: ["Vue.js", "Vuetify", "Laravel", "MySQL", "JWT"],
    category: ["Full Stack", "API Rest"],
  },
  {
    id: 6,
    title: "Task Manager",
    description:
      "Permite a los usuarios registrarse, iniciar sesión y administrar sus pendientes mediante una interfaz clara e intuitiva. El sistema incluye autenticación con JWT, filtrado por estado y operaciones CRUD completas.",
    image: "/to_do_app.png",
    demo: "https://to-do-app-hector-rm.vercel.app/",
    github: "https://github.com/Heectorr90/to-do-app.git",
    technologies: ["Vue.js", "Vuetify", "Laravel", "MySQL", "JWT"],
    category: ["Full Stack", "API Rest"],
  },
]);

const filteredProjects = computed(() => {
  if (selectedFilter.value === "Todos") {
    return projects.value;
  }
  return projects.value.filter((project) => project.category.includes(selectedFilter.value));
});
</script>

<style scoped>
.projects-section {
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

.section-subtitle {
  font-size: 1.2rem;
  color: #ededed;
  opacity: 0.8;
}

/* Filtros */
.filters {
  margin-bottom: 3rem;
}

.filter-chip {
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Cards de proyectos */
.project-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 171, 240, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 171, 240, 0.3) !important;
}

/* Imagen del proyecto */
.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(8, 27, 41, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.overlay-btn {
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.project-card:hover .overlay-btn {
  transform: translateY(0);
}

/* Contenido del proyecto */
.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ededed;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  color: #ededed;
  opacity: 0.8;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Animaciones */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
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
  .projects-section {
    padding: 80px 0;
  }
}

@media (max-width: 600px) {
  .project-actions {
    flex-direction: column;
  }

  .project-actions .v-btn {
    width: 100%;
    margin: 0 !important;
  }
}
</style>
