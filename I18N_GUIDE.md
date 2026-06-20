# 🌍 Sistema de Internacionalización (i18n) - Español/Inglés

## ¿Qué se implementó?

Se ha agregado un completo sistema de internacionalización (i18n) a tu portafolio personal en Vue 3, permitiendo cambiar entre **español** e **inglés** con un simple switch en la barra de navegación.

## 📁 Archivos Creados

### 1. **`src/stores/languageStore.js`**

- Store de Pinia que gestiona el idioma global
- Persiste la preferencia de idioma en `localStorage`
- Proporciona la función `t(key)` para obtener textos traducidos

### 2. **`src/i18n/translations.js`**

- Archivo central con todas las traducciones (español → inglés)
- Estructura anidada por secciones: `navbar`, `hero`, `about`, `skills`, `projects`, `contact`
- Fácil de mantener y actualizar

## 🔧 Componentes Actualizados

Se actualizaron los siguientes componentes para usar el sistema de i18n:

1. ✅ **SiteNavbar.vue**
   - Switch de idioma con botones ES/EN
   - Menú dinámico traducido
   - Switch responsivo en versión móvil

2. ✅ **HeroContainer.vue**
   - Saludo, nombre y títulos traducidos
   - Efecto de escritura (typing) dinámico según idioma
   - Botones de acción traducidos

3. ✅ **AboutContainer.vue**
   - Secciones sobre ti traducidas
   - Tabs (Experiencia, Educación, Información) en ambos idiomas
   - Descripciones dinámicas

4. ✅ **SkillsContainer.vue**
   - Categorías de habilidades traducidas (Frontend, Backend, Herramientas)
   - Títulos y subtítulos dinámicos
   - Logros destacados traducidos

5. ✅ **ProjectsContainer.vue**
   - Título y subtítulo de proyectos
   - Filtros traducidos (Todos, Full Stack, Backend, Frontend)
   - Botones (Ver Demo, Ver Código)

6. ✅ **ContactContainer.vue**
   - Formulario completamente traducido
   - Validaciones dinámicas en ambos idiomas
   - Mensajes de éxito y error traducidos

## 🎯 Cómo Usar

### Cambiar de Idioma

Los usuarios pueden cambiar el idioma de dos maneras:

1. **Desktop**: Click en el botón **ES | EN** en la navbar derecha
2. **Móvil**: Botones completos en el drawer (español/english)

El idioma se guarda automáticamente en `localStorage`, así que la preferencia persiste entre sesiones.

### Para Agregat Nuevas Traducciones

Si necesitas agregar nuevas secciones o textos traducidos:

1. **Abre** `src/i18n/translations.js`
2. **Agrega** las nuevas claves en ambos idiomas (`es` e `en`)
3. **En tus componentes**, usa:

```javascript
import { useLanguageStore } from "@/stores/languageStore";

const languageStore = useLanguageStore();
// Uso: {{ languageStore.t('sección.clave') }}
```

### Ejemplo Práctico

```vue
<template>
  <h1>
    {{ languageStore.t("hero.greeting") }}, {{ languageStore.t("hero.name") }}
  </h1>
</template>

<script setup>
import { useLanguageStore } from "@/stores/languageStore";
const languageStore = useLanguageStore();
</script>
```

## 📊 Estructura de Traducciones

```javascript
translations = {
  es: {
    navbar: { home: 'Inicio', about: 'Sobre mí', ... },
    hero: { greeting: 'Hola, soy', name: 'Hector Ramirez', ... },
    about: { title: 'Sobre', titleHighlight: 'Mí', ... },
    skills: { mySkills: 'Mis', skillsHighlight: 'Habilidades', ... },
    projects: { myProjects: 'Mis', projectsHighlight: 'Proyectos', ... },
    contact: { contactMe: 'Contáctame', subtitle: '¿Tienes un proyecto en mente?', ... }
  },
  en: {
    navbar: { home: 'Home', about: 'About', ... },
    hero: { greeting: 'Hi, I am', name: 'Hector Ramirez', ... },
    // ... resto de traducciones
  }
}
```

## 🚀 Características

✨ **Cambio de idioma en tiempo real** - La UI se actualiza instantáneamente
✨ **Persistencia** - El idioma seleccionado se guarda en localStorage
✨ **Totalmente integrado** - Todos los componentes usan el mismo sistema
✨ **Fácil de mantener** - Traducciones centralizadas en un único archivo
✨ **Responsive** - Switch adaptado para desktop y móvil
✨ **Accesible** - Los botones indican claramente el idioma actual

## 📱 Próximas Mejoras (Opcional)

Si en el futuro quieres expandir el sistema, puedes:

- Agregar más idiomas (francés, alemán, etc.)
- Soportar detección automática del idioma del navegador
- Usar una librería como `vue-i18n` para funcionalidades más avanzadas
- Traducir contenido dinámico de APIs

## ✅ Verificación

Para verificar que todo funciona:

1. **npm run dev** - Inicia el servidor de desarrollo
2. Haz click en **ES | EN** en la navbar
3. Ve a diferentes secciones y confirma que los textos cambien

---

¡Tu portafolio ahora es completamente bilingüe! 🎉
