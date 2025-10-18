<template>
  <!-- Navbar -->
  <Navbar />
  <v-main>
    <!-- Sección Hero/Home -->
    <Hero />
    <!-- Sección About -->
    <About />
    <!-- Sección Skills -->
    <Skills />
    <!-- Sección Projects -->
    <Projects />
    <!-- Sección Contact -->
    <Contact />
  </v-main>
</template>

<script setup>
import Navbar from "@/components/SiteNavbar.vue";
import Hero from "@/components/HeroContainer.vue";
import About from "@/components/AboutContainer.vue";
import Skills from "@/components/SkillsContainer.vue";
import Projects from "@/components/ProjectsContainer.vue";
import Contact from "@/components/ContactContainer.vue";
</script>
