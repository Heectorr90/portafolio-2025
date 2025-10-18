<template>
  <v-app>
    <!-- Sistema de tema de Vuetify -->
    <v-theme-provider>
      <!-- Aquí se renderizarán todas las vistas -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-theme-provider>
  </v-app>
</template>
