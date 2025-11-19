export default {
  navbar: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    certificates: "Certificates",
    contact: "Contact",
    cv: "View CV",
    print: "Print / PDF",
  },

  hero: {
    name: "Hoang Gia Hao",
    title: "Software Developer — Web & AI Integration",

    shortDescription:
      "Building full-stack applications with modern UI, geolocation, and AI features.",

    description:
      "Motivated Software Developer with hands-on experience building full-stack applications using React, TypeScript, Node.js, and MongoDB. I developed a real-world FoodMap platform integrating geolocation search, restaurant management workflows, AI chatbot assistance (Live2D + RAG), and image processing capabilities. I have experience designing scalable REST APIs, implementing secure authentication and authorization flows, and building backend services with NestJS following clean architecture principles. I focus on clean, maintainable, and efficient code. I am currently expanding my expertise through developing an interactive Live2D AI assistant that brings natural, human-like communication to users.",

    downloadCV: "Download CV",
    viewProjects: "View Projects",
  },

  skills: {
    title: "Skills",

    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & DevOps",
      ai: "AI & ML",
    },

    list: {
      frontend: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Vite"],
      backend: ["NestJS", "Node.js", "Express", "Java", "Spring Boot"],
      database: ["MongoDB", "MySQL"],
      tools: ["Git", "Docker", "Postman", "Vercel", "Google Cloud Storage"],
      ai: ["RAG", "ChromaDB", "Embeddings", "Live2D"],
    },
  },

  experience: {
    title: "Experience",

    list: [
      {
        role: "Project-Based Software Developer",
        company: "Ho Chi Minh City, Vietnam",
        year: "2022 – Present",
        details: [
          "Developed projects using React, TypeScript, NestJS, MongoDB, and Java.",
          "Built FoodMap platform with geolocation search, restaurant management, and AI chatbot (Live2D + RAG).",
          "Applied core software engineering principles across frontend and backend.",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",

    list: [
      {
        title: "FoodMap – AI-Powered Restaurant Discovery",
        desc: "Full-stack restaurant discovery platform with geolocation search, AI chatbot (Live2D), ChromaDB RAG, and Mapbox integration.",
        tech: [
          "React",
          "TypeScript",
          "NestJS",
          "MongoDB",
          "Mapbox",
          "Live2D",
          "RAG",
        ],
        link: "https://www.food-map.online/",
        image: "assets/foodmap.png", 
      },

      {
        title: "Medical Supply E-Commerce Website",
        desc: "Responsive e-commerce front-end with category navigation, product lists, and mobile-optimized UI/UX.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://giahao1609.github.io/hoanggiahao-21121381/",
        image: "assets/ecommerce.png", 
      },
    ],
  },

  contact: {
    title: "Contact",
    desc: "If you have any questions, feel free to send me a message!",

    form: {
      fullname: "Full Name",
      fullname_placeholder: "Enter your name...",
      email: "Email",
      email_placeholder: "Enter your email...",
      message: "Message",
      message_placeholder: "Enter your message...",
      submit: "Send Message",
    },

    info_title: "Contact Information",
    location: "Ho Chi Minh City",
  },
};
