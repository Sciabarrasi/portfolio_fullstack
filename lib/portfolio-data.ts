export const profile = {
  firstName: "Gianluca",
  lastName: "Sciabarrasi",
  role: "Desarrollador Fullstack",
  location: "Argentina",
  photo: "/profile.jpg",
  initials: "GS",
  email: "sciabarrasi.gianluca@gmail.com",
  github: "https://github.com/Sciabarrasi",
  linkedin: "https://linkedin.com/in/gianluca-sciabarrasi",
  summary:
    "Desarrollador Fullstack con experiencia práctica en todo el ciclo de vida del desarrollo de software, desde desarrollo de features, infraestructura cloud, QA manual y soporte técnico. Mi experiencia fue adquirida trabajando de forma integral en el desarrollo y mantenimiento de aplicaciones, participando en la implementación de múltiples features y fixes, desde la lógica del backend hasta la interfaz de usuario.",
} as const

export const highlights = [
  { label: "Experiencia end-to-end", value: "Backend + Frontend" },
  { label: "Cloud", value: "AWS · GCP · Docker" },
  { label: "Metodología", value: "Scrum / Ágil" },
  { label: "Inglés", value: "B2" },
] as const

export type Experience = {
  role: string
  company: string
  client?: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: "Desarrollador Full Stack (Staffing)",
    company: "Crombie",
    client: "cliente: NFTYDoor",
    period: "Sep. 2025 – Jul. 2026",
    bullets: [
      "Desarrollé y mantuve múltiples features, fixes y refactors en React y Next.js con TypeScript y JavaScript, participando tanto en el desarrollo del frontend como en soluciones serverless para backend y trabajando con MongoDB como base de datos no relacional, siempre siguiendo los diseños y especificaciones definidios por el equipo de UX/UI en Figma.",
      "Trabajé bajo metodología ágil (Scrum) con sprints, dailies y demos con el cliente.",
      "Implementé y mantuve componentes basados en AWS (Cognito, Lambda, S3, CloudWatch) para autenticación, procesamiento serverless y monitoreo en producción.",
      "Detecté problemas antes del release mediante QA manual y actué como punto de contacto de Service Desk.",
    ],
  },
  {
    role: "Desarrollador Full Stack (Freelance)",
    company: "Eduardo Chiozzi S.A.",
    client: "cliente: Eduardo Chiozzi S.A.",
    period: "Feb. 2024 – Jun. 2025",
    bullets: [
      "Diseñé y construí un sitio web corporativo de 5 rutas de punta a punta como único desarrollador, incluyendo un dashboard de CMS a medida.",
      "El CMS permitió al personal no técnico del cliente publicar y gestionar posts del blog de forma independiente.",
      "Construí toda la interfaz con Next.js y Tailwind CSS, e implementé el backend con Next.js API Routes, eliminando la necesidad de un CMS de terceros.",
    ],
  },
]

export const education = [
  { title: "Programa de Desarrollo Fullstack", place: "Coderhouse", period: "Oct. 2023 – Abr. 2024" },
  { title: "Programa de Desarrollo Frontend (React)", place: "Coderhouse", period: "Ene. 2023 – Jul. 2023" },
  { title: "Crombie Code Academy — Bootcamp NestJS & AWS", place: "Crombie", period: "Oct. 2024 – Abr. 2025" },
] as const

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS/SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["NestJS", "Node.js", "Serverless", "Prisma ORM"],
  },
  {
    category: "Bases de datos",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS Cognito", "AWS Lambda", "AWS S3", "AWS CloudWatch", "GCP", "Docker"],
  },
  {
    category: "Testing & Herramientas",
    skills: ["Jest", "QA Manual", "Git / GitHub", "Bitbucket", "Jira"],
  },
  {
    category: "Idiomas",
    skills: ["Español (nativo)", "Inglés (B2)"],
  },
]

export type FreelanceProject = {
  title: string
  client: string
  period: string
  description: string
  bullets: string[]
  stack: string[]
  link?: string
}

export const freelanceProjects: FreelanceProject[] = [
  {
    title: "Sitio web corporativo + CMS a medida",
    client: "Eduardo Chiozzi S.A.",
    period: "Feb. 2024 – Jun. 2025",
    description:
      "Diseñé y construí un sitio corporativo de 5 rutas de punta a punta como único desarrollador, incluyendo un dashboard de CMS a medida que permitió al personal no técnico publicar y gestionar posts del blog de forma independiente.",
    bullets: [
      "Interfaz completa construida con Next.js y Tailwind CSS.",
      "Backend implementado con Next.js API Routes, eliminando la necesidad de un CMS de terceros.",
      "Dashboard de administración para gestión de contenido por usuarios no técnicos.",
    ],
    stack: ["Next.js", "Tailwind CSS", "API Routes", "TypeScript"],
    link: "#",
  },
]

export const suggestedQuestions = [
  "¿Qué experiencia tenés con AWS?",
  "¿En qué tecnologías de frontend trabajás?",
  "Contame sobre tu experiencia en NFTYDoor.",
  "¿Qué proyectos freelance hiciste?",
]
