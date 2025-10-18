<template>
  <v-app-bar
    app
    elevate-on-scroll
    :elevation="scrolled ? 8 : 0"
    color="background"
    height="70"
    class="navbar"
  >
    <v-container class="d-flex align-center px-4">
      <!-- Logo / Nombre -->
      <div class="logo">
        <router-link to="/" class="text-decoration-none">
          <span class="logo-text">Portafolio</span>
          <span class="logo-dot">.</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <!-- Menú Desktop -->
      <div class="nav-links d-none d-md-flex">
        <a
          v-for="item in menuItems"
          :key="item.title"
          :href="item.link"
          class="nav-link"
          @click.prevent="scrollToSection(item.link)"
        >
          {{ item.title }}
        </a>
      </div>

      <!-- Botón menú móvil -->
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" color="primary">
        <v-icon>{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
      </v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Drawer para móvil -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    color="surface"
    class="mobile-drawer"
  >
    <v-list class="pt-8">
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :href="item.link"
        @click="handleMobileClick(item.link)"
        class="mobile-menu-item"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" color="primary"></v-icon>
        </template>
        <v-list-item-title class="mobile-menu-text">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- Información adicional en el drawer -->
    <template v-slot:append>
      <div class="pa-4 text-center">
        <v-divider class="mb-4"></v-divider>
        <div class="social-links">
          <v-btn icon variant="text" color="primary" href="https://github.com" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary" href="https://linkedin.com" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary" href="mailto:tu@email.com">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Estado del drawer
const drawer = ref(false);
const scrolled = ref(false);

// Items del menú
const menuItems = ref([
  { title: "Inicio", link: "#home", icon: "mdi-home" },
  { title: "Sobre mí", link: "#about", icon: "mdi-account" },
  { title: "Habilidades", link: "#skills", icon: "mdi-code-tags" },
  { title: "Proyectos", link: "#projects", icon: "mdi-folder-multiple" },
  { title: "Contacto", link: "#contact", icon: "mdi-email" },
]);

// Función para scroll suave
const scrollToSection = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    const offset = 80; // Altura del navbar
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

// Función para manejar click en móvil
const handleMobileClick = (link) => {
  drawer.value = false;
  setTimeout(() => {
    scrollToSection(link);
  }, 300);
};

// Detectar scroll para cambiar elevación
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

/* Logo */
.logo {
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
}

.logo-text {
  color: #ededed;
  transition: color 0.3s ease;
}

.logo-dot {
  color: #00abf0;
  font-size: 32px;
  animation: pulse 2s ease-in-out infinite;
}

.logo:hover .logo-text {
  color: #00abf0;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Menú Desktop */
.nav-links {
  gap: 2rem;
}

.nav-link {
  color: #ededed;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #00abf0;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #00abf0;
}

.nav-link:hover::after {
  width: 100%;
}

/* Menú Móvil */
.mobile-drawer {
  border-left: 2px solid #00abf0;
}

.mobile-menu-item {
  margin: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-item:hover {
  background-color: rgba(0, 171, 240, 0.1);
}

.mobile-menu-text {
  color: #ededed;
  font-weight: 500;
  font-size: 16px;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 8px;
}

/* Animaciones */
.v-list-item {
  transition: transform 0.2s ease;
}

.v-list-item:active {
  transform: scale(0.98);
}
</style>
