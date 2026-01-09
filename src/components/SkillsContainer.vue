<template>
  <section id="skills" class="skills-section">
    <v-container>
      <!-- Título de la sección -->
      <div class="section-header text-center mb-12">
        <h2 class="section-title">Mis <span class="highlight">Habilidades</span></h2>
        <div class="title-underline"></div>
        <p class="section-subtitle mt-4">Tecnologías y herramientas que domino</p>
      </div>

      <!-- Categorías de habilidades -->
      <v-row>
        <!-- Frontend -->
        <v-col cols="12" md="6" lg="4" v-for="category in skillCategories" :key="category.title">
          <v-card class="skill-category-card fade-in-up" color="surface" elevation="8">
            <v-card-title class="category-header">
              <v-icon :icon="category.icon" color="primary" size="40" class="mr-3"></v-icon>
              <span class="category-title">{{ category.title }}</span>
            </v-card-title>

            <v-card-text class="pa-6">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item mb-6">
                <div class="d-flex justify-space-between align-center mb-2">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar-container">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Herramientas adicionales -->
      <div class="tools-section mt-12">
        <h3 class="tools-title text-center mb-8">Herramientas y Tecnologías</h3>

        <v-row justify="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="tool in tools"
            :key="tool.name"
            class="text-center"
          >
            <div class="tool-item">
              <v-avatar size="80" class="tool-avatar" color="surface">
                <v-icon :icon="tool.icon" size="50" color="primary"></v-icon>
              </v-avatar>
              <p class="tool-name mt-3">{{ tool.name }}</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Estadísticas -->
      <div class="stats-section mt-12">
        <h3 class="stats-title text-center mb-8">Logros Destacados</h3>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="achievement in achievements"
            :key="achievement.title"
          >
            <v-card class="achievement-card text-center" color="surface" elevation="4">
              <v-card-text>
                <v-icon :icon="achievement.icon" size="60" color="primary" class="mb-4"></v-icon>
                <h4 class="achievement-number">{{ achievement.number }}</h4>
                <p class="achievement-label">{{ achievement.label }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skillCategories = ref([
  {
    title: "Frontend",
    icon: "mdi-monitor",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "React", level: 70 },
      { name: "Django", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: "mdi-server",
    skills: [
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Python ", level: 70 },
    ],
  },
  {
    title: "Herramientas",
    icon: "mdi-cog",
    skills: [
      { name: "Git y GitHub", level: 90 },
      { name: "Responsive Design", level: 92 },
      { name: "Automatización", level: 85 },
      { name: "Scripts Backend", level: 80 },
      { name: "Testing", level: 70 },
    ],
  },
]);

const tools = ref([
  { name: "VS Code", icon: "mdi-microsoft-visual-studio-code" },
  { name: "Git", icon: "mdi-git" },
  { name: "GitHub", icon: "mdi-github" },
  { name: "MySQL", icon: "mdi-database" },
  { name: "Laravel", icon: "mdi-language-php" },
  { name: "Vue.js", icon: "mdi-vuejs" },
]);

const achievements = ref([
  {
    icon: "mdi-trophy",
    number: "10+",
    label: "Proyectos Completados",
  },
  {
    icon: "mdi-briefcase",
    number: "3+",
    label: "Años de Experiencia",
  },
  {
    icon: "mdi-account-group",
    number: "5+",
    label: "Clientes Satisfechos",
  },
  {
    icon: "mdi-code-tags",
    number: "9",
    label: "Tecnologías Dominadas",
  },
]);
</script>

<style scoped>
.skills-section {
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

/* Categorías de habilidades */
.skill-category-card {
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 171, 240, 0.2);
  height: 100%;
}

.skill-category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 171, 240, 0.3) !important;
}

.category-header {
  padding: 1.5rem;
  border-bottom: 2px solid rgba(0, 171, 240, 0.3);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ededed;
}

/* Habilidades individuales */
.skill-item {
  margin-bottom: 1.5rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 500;
  color: #ededed;
}

.skill-percentage {
  font-size: 1rem;
  font-weight: 600;
  color: #00abf0;
}

.skill-bar-container {
  width: 100%;
  height: 10px;
  background: rgba(0, 171, 240, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, #00abf0 0%, #0087c2 100%);
  border-radius: 10px;
  transition: width 1s ease-out;
  animation: fillBar 1.5s ease-out;
  box-shadow: 0 0 10px rgba(0, 171, 240, 0.5);
}

@keyframes fillBar {
  from {
    width: 0;
  }
}

/* Herramientas */
.tools-section {
  padding: 3rem 0;
}

.tools-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ededed;
}

.tool-item {
  transition: all 0.3s ease;
  cursor: pointer;
}

.tool-item:hover {
  transform: translateY(-10px);
}

.tool-avatar {
  border: 2px solid #00abf0;
  transition: all 0.3s ease;
}

.tool-item:hover .tool-avatar {
  box-shadow: 0 0 20px rgba(0, 171, 240, 0.6);
  transform: rotate(360deg);
}

.tool-name {
  padding: 3rem 0;
}

.achievements-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ededed;
}

.achievement-card {
  border-radius: 16px;
  padding: 2rem 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 171, 240, 0.2);
}

.achievement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 171, 240, 0.3) !important;
}

.achievement-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00abf0;
  margin: 1rem 0;
}

.achievement-label {
  font-size: 1rem;
  color: #ededed;
  opacity: 0.9;
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
  .skills-section {
    padding: 80px 0;
  }

  .skill-category-card {
    margin-bottom: 2rem;
  }
}
</style>
