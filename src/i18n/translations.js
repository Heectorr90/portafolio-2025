export const translations = {
  es: {
    // Navbar
    navbar: {
      brand: "Portafolio",
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma",
    },

    // Hero Section
    hero: {
      greeting: "Hola, soy",
      name: "Hector Ramirez",
      rolePrefix: "Y soy",
      titles: ["Desarrollador Full Stack", "Desarrollador de Software"],
      description:
        "Desarrollador apasionado por crear experiencias web increíbles. Especializado en Vue.js, JavaScript y diseño moderno.",
      contactBtn: "Contáctame",
      downloadCV: "Descargar CV",
      scrollHint: "Desplázate para saber más",
    },

    // About Section
    about: {
      title: "Sobre",
      titleHighlight: "Mí",
      whyHire: "¿Por qué contratarme?",
      valueIntro: "Mi valor se centra en el dominio de la pila completa:",
      frontend:
        "Frontend: Experto en Vue.js y Angular, garantizando interfaces de usuario atractivas y totalmente responsivas.",
      backend:
        "Backend: Sólida experiencia en Laravel y PHP, enfocada en la creación de APIs REST robustas y funcionales.",
      additional:
        "Destaco por ir más allá del código: me especializo en la automatización, monitoreo y resolución de incidencias técnicas para asegurar que las aplicaciones no solo funcionen, sino que optimicen los procesos del negocio. Siempre estoy en constante aprendizaje de nuevas tecnologías y mejores prácticas.",
      tabs: {
        experience: "Experiencia",
        education: "Educación",
        information: "Información",
      },
      myExperience: "Mi",
      experienceHighlight: "Experiencia",
      experienceDesc:
        "He trabajado en diversos proyectos que me han permitido crecer como desarrollador web.",
      myEducation: "Mi",
      educationHighlight: "Educación",
      educationDesc: "Formación académica y cursos que respaldan mis conocimientos técnicos.",
      informationTitle: "Mi Información",
      informationDesc:
        "A continuación, te comparto mis datos personales y de contacto para que puedas comunicarte conmigo de manera directa y eficiente.",
      experienceEntries: [
        {
          year: "2022 - 2025",
          title: "Desarrollo de Software",
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
      ],
      educationEntries: [
        {
          year: "2023 - 2024",
          title: "Ingeniería en Sistemas Computacionales",
          institution: "Tecnológico Universitario de Toluca",
          description:
            "Formación integral como ingeniero en sistemas con énfasis en desarrollo de software, bases de datos, administración de sistemas y arquitecturas escalables. Competencias en programación, análisis de requerimientos y soluciones tecnológicas eficientes.",
        },
      ],
      personalInfo: [
        { label: "Nombre", value: "Héctor Ramírez" },
        { label: "Edad", value: "30 años" },
        { label: "Estado", value: "Soltero" },
        { label: "Ubicación", value: "Estado de México, Toluca" },
        { label: "Correo", value: "developerbit035@gmail.com" },
        { label: "Lenguaje", value: "Español, Inglés (Básico)" },
      ],
    },

    // Skills Section
    skills: {
      mySkills: "Mis",
      skillsHighlight: "Habilidades",
      skillsSubtitle: "Tecnologías y herramientas que domino",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas",
      toolsTitle: "Herramientas y Tecnologías",
      achievements: "Logros Destacados",
      yearsExperience: "Años de Experiencia",
      projectsCompleted: "Proyectos Completados",
      clientsSatisfied: "Clientes Satisfechos",
      certificationsEarned: "Certificaciones Obtenidas",
      technologiesMastered: "Tecnologías Dominadas",
      items: {
        gitGithub: "Git y GitHub",
        responsiveDesign: "Diseño Responsivo",
        automation: "Automatización",
        backendScripts: "Scripts Backend",
        testing: "Pruebas",
      },
    },

    // Projects Section
    projects: {
      myProjects: "Mis",
      projectsHighlight: "Proyectos",
      projectsSubtitle: "Algunos de mis trabajos más recientes",
      all: "Todos",
      frontend: "Frontend",
      fullstack: "Full Stack",
      backend: "Backend",
      viewDemo: "Ver Demo",
      viewCode: "Ver Código",
      viewMoreGithub: "Ver más en GitHub",
      noProjects: "No hay proyectos en esta categoría",
      demoUser: "Usuario",
      demoAdmin: "Admin",
      items: {
        ecommerce: {
          title: "E-commerce",
          description:
            "Tienda online full stack moderna y escalable, construida con Laravel 10 como API REST y Angular 17 como SPA. Cubre usuarios, productos, carrito, pagos en línea, despliegue en la nube y un panel administrativo para gestionar productos, pedidos y usuarios.",
        },
        aiChatbot: {
          title: "Chatbot de IA",
          description:
            "Chatbot inteligente impulsado por IA que responde preguntas y asiste a los usuarios en tiempo real mediante procesamiento de lenguaje natural.",
        },
        inventory: {
          title: "Sistema de Inventario de Equipos",
          description:
            "Sistema web para gestionar equipos mediante una estructura jerárquica de categorías. Incluye CRUD, validaciones, generación automática de códigos únicos, formularios dinámicos, búsqueda, filtros y paginación con Livewire y Tailwind CSS.",
        },
        eventHub: {
          title: "EventHub",
          description:
            "Sistema de gestión de eventos para crear, registrar y administrar participantes. Incluye autenticación, control de aforo y panel de administración.",
        },
        blog: {
          title: "Blog Personal",
          description:
            "Blog moderno con búsqueda, categorías, autenticación y panel administrativo con roles de usuario.",
        },
        dashForge: {
          title: "DashForge",
          description:
            "Aplicación en Vue 3 para crear dashboards dinámicos con widgets personalizables y drag and drop. Usa Pinia para estado y renderizado dinámico de componentes, con modo local y persistencia para usuarios autenticados.",
        },
      },
    },

    // Contact Section
    contact: {
      contactMe: "Contáctame",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      contactInfo: "Información de Contacto",
      infoDescription:
        "Estoy disponible para trabajar en tu próximo proyecto. No dudes en contactarme a través de cualquiera de estos medios.",
      sendMessage: "Envíame un Mensaje",
      followMe: "Sígueme en:",
      items: {
        location: {
          title: "Ubicación",
          value: "Toluca, México",
        },
        email: {
          title: "Email",
          linkText: "Enviar email",
        },
        phone: {
          title: "Teléfono",
          linkText: "Llamar ahora",
        },
      },
      form: {
        fullName: "Nombre completo",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        successTitle: "Mensaje enviado",
        successMessage: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
        errorTitle: "Error al enviar",
        errorMessage: "Hubo un problema. Por favor, intenta de nuevo.",
      },
      validation: {
        nameRequired: "El nombre es requerido",
        nameMin: "El nombre debe tener al menos 3 caracteres",
        emailRequired: "El email es requerido",
        emailInvalid: "El email no es válido",
        subjectRequired: "El asunto es requerido",
        subjectMin: "El asunto debe tener al menos 3 caracteres",
        messageRequired: "El mensaje es requerido",
        messageMin: "El mensaje debe tener al menos 10 caracteres",
      },
    },

    // Social
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },

  en: {
    // Navbar
    navbar: {
      brand: "Portfolio",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },

    // Hero Section
    hero: {
      greeting: "Hi, I am",
      name: "Hector Ramirez",
      rolePrefix: "And I am",
      titles: ["Full Stack Developer", "Software Developer"],
      description:
        "Passionate developer creating incredible web experiences. Specialized in Vue.js, JavaScript and modern design.",
      contactBtn: "Contact Me",
      downloadCV: "Download CV",
      scrollHint: "Scroll to learn more",
    },

    // About Section
    about: {
      title: "About",
      titleHighlight: "Me",
      whyHire: "Why Hire Me?",
      valueIntro: "My value is centered on mastering the full stack:",
      frontend:
        "Frontend: Expert in Vue.js and Angular, ensuring attractive and fully responsive user interfaces.",
      backend:
        "Backend: Solid experience in Laravel and PHP, focused on creating robust and functional REST APIs.",
      additional:
        "I stand out by going beyond the code: I specialize in automation, monitoring and troubleshooting to ensure that applications not only work, but optimize business processes. I am always constantly learning new technologies and best practices.",
      tabs: {
        experience: "Experience",
        education: "Education",
        information: "Information",
      },
      myExperience: "My",
      experienceHighlight: "Experience",
      experienceDesc:
        "I have worked on various projects that have allowed me to grow as a web developer.",
      myEducation: "My",
      educationHighlight: "Education",
      educationDesc: "Academic training and courses that support my technical knowledge.",
      informationTitle: "My Information",
      informationDesc:
        "Here I share my personal and contact details so you can reach me directly and efficiently.",
      experienceEntries: [
        {
          year: "2022 - 2025",
          title: "Software Development",
          company: 'Bit Electronics "Service Center"',
          description:
            "Automation, monitoring and troubleshooting of repetitive technical tasks using backend scripts and tools to improve productivity.",
        },
        {
          year: "2021 - 2022",
          title: "Front-end Programmer",
          company: "CTED Corporativo Tecnológico y Educativo S.A. de C.V.",
          description:
            "During my internship, I participated in the development and maintenance of web applications using technologies such as HTML, CSS and Angular.",
        },
      ],
      educationEntries: [
        {
          year: "2023 - 2024",
          title: "Bachelor's Degree in Computer Systems Engineering",
          institution: "Tecnológico Universitario de Toluca",
          description:
            "Comprehensive training as a systems engineer with emphasis on software development, databases, systems administration, and scalable architectures. Skills in programming, requirements analysis and efficient technological solutions.",
        },
      ],
      personalInfo: [
        { label: "Name", value: "Héctor Ramírez" },
        { label: "Age", value: "30 years" },
        { label: "Status", value: "Single" },
        { label: "Location", value: "State of Mexico, Toluca" },
        { label: "Email", value: "developerbit035@gmail.com" },
        { label: "Language", value: "Spanish, English (Basic)" },
      ],
    },

    // Skills Section
    skills: {
      mySkills: "My",
      skillsHighlight: "Skills",
      skillsSubtitle: "Technologies and tools I master",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      toolsTitle: "Tools and Technologies",
      achievements: "Featured Achievements",
      yearsExperience: "Years of Experience",
      projectsCompleted: "Projects Completed",
      clientsSatisfied: "Satisfied Clients",
      certificationsEarned: "Certifications Earned",
      technologiesMastered: "Technologies Mastered",
      items: {
        gitGithub: "Git and GitHub",
        responsiveDesign: "Responsive Design",
        automation: "Automation",
        backendScripts: "Backend Scripts",
        testing: "Testing",
      },
    },

    // Projects Section
    projects: {
      myProjects: "My",
      projectsHighlight: "Projects",
      projectsSubtitle: "Some of my recent work",
      all: "All",
      frontend: "Frontend",
      fullstack: "Full Stack",
      backend: "Backend",
      viewDemo: "View Demo",
      viewCode: "View Code",
      viewMoreGithub: "View more on GitHub",
      noProjects: "No projects in this category",
      demoUser: "User",
      demoAdmin: "Admin",
      items: {
        ecommerce: {
          title: "E-commerce",
          description:
            "Modern and scalable full stack online store built with Laravel 10 as a REST API and Angular 17 as an SPA. It covers users, products, cart, online payments, cloud deployment, and an admin panel for managing products, orders, and users.",
        },
        aiChatbot: {
          title: "AI Chatbot",
          description:
            "AI-powered chatbot that answers questions and assists users in real time through natural language processing.",
        },
        inventory: {
          title: "Equipment Inventory System",
          description:
            "Web system for managing equipment through a hierarchical category structure. It includes CRUD, validations, automatic unique code generation, dynamic forms, search, filters, and pagination with Livewire and Tailwind CSS.",
        },
        eventHub: {
          title: "EventHub",
          description:
            "Event management system for creating, registering, and administering participants. It includes authentication, capacity control, and an admin panel.",
        },
        blog: {
          title: "Personal Blog",
          description:
            "Modern blog with search, categories, authentication, and an admin panel with user roles.",
        },
        dashForge: {
          title: "DashForge",
          description:
            "Vue 3 application for building dynamic dashboards with customizable widgets and drag and drop. It uses Pinia for state management and dynamic component rendering, with local mode and persistence for authenticated users.",
        },
      },
    },

    // Contact Section
    contact: {
      contactMe: "Contact Me",
      subtitle: "Do you have a project in mind? Let's talk!",
      contactInfo: "Contact Information",
      infoDescription:
        "I am available to work on your next project. Feel free to contact me through any of these channels.",
      sendMessage: "Send Me a Message",
      followMe: "Follow me on:",
      items: {
        location: {
          title: "Location",
          value: "Toluca, Mexico",
        },
        email: {
          title: "Email",
          linkText: "Send email",
        },
        phone: {
          title: "Phone",
          linkText: "Call now",
        },
      },
      form: {
        fullName: "Full Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        successTitle: "Message Sent",
        successMessage: "Thank you for your message. I will get back to you soon.",
        errorTitle: "Error Sending",
        errorMessage: "There was a problem. Please try again.",
      },
      validation: {
        nameRequired: "Name is required",
        nameMin: "Name must be at least 3 characters",
        emailRequired: "Email is required",
        emailInvalid: "Email is not valid",
        subjectRequired: "Subject is required",
        subjectMin: "Subject must be at least 3 characters",
        messageRequired: "Message is required",
        messageMin: "Message must be at least 10 characters",
      },
    },

    // Social
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
};
