export const profile = {
  firstName: "Gianluca",
  lastName: "Sciabarrasi",
  role: "Software Engineer · Full Stack",
  location: "Santa Fe, Argentina",
  photo: "/profile.jpg",
  initials: "GS",
  email: "sciabarrasi.gianluca@gmail.com",
  github: "https://github.com/Sciabarrasi",
  linkedin: "https://www.linkedin.com/in/gianluca-sciabarrasi",
  cv: "/cv/CV-Gianluca-Sciabarrasi.pdf",
  headline: "Construyo software que simplifica el día a día de quienes lo usan.",
  intro:
    "Diseño y desarrollo sistemas a medida para empresas, instituciones y profesionales. Primero entiendo cómo trabaja cada cliente; después construyo la herramienta que le ahorra tiempo.",
} as const

export const navItems = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "formacion", label: "Formación" },
  { id: "asistente", label: "Asistente IA" },
  { id: "contacto", label: "Contacto" },
] as const

export const impactStats = [
  { value: "+750", label: "usuarios alcanzados sumando todos mis proyectos" },
  { value: "~300", label: "turnos por mes gestionados con MediTurno" },
  { value: "~200", label: "participantes activos en el Prode del Mundial" },
  { value: "3", label: "proyectos freelance en producción" },
] as const

export const about = {
  paragraphs: [
    "Lo que más me motiva de mi trabajo es detectar tareas manuales, repetitivas o desordenadas y transformarlas en procesos simples y automatizados.",
    "Creo que el buen software no empieza por la tecnología sino por escuchar a las personas que lo van a usar: entender su rutina, dónde pierden tiempo y qué necesitan para trabajar mejor. Con esa mirada busco que cada sistema genere un impacto concreto, ya sea ahorrar horas de trabajo administrativo, ordenar la información o abrir nuevas formas de llegar a clientes y comunidades.",
  ],
  principles: [
    {
      title: "Escuchar primero",
      text: "Trabajo en contacto directo con quien va a usar el sistema. Las demos frecuentes y el feedback temprano guían cada decisión.",
    },
    {
      title: "Automatizar lo repetitivo",
      text: "Busco dónde se pierde tiempo — planillas, registros manuales, procesos desordenados — y lo convierto en un flujo simple.",
    },
    {
      title: "Ciclo completo",
      text: "Desarrollo, QA, deploy y soporte. Entender cómo vive el usuario final una funcionalidad me hace construirla mejor.",
    },
  ],
} as const

export type Experience = {
  role: string
  company: string
  client: string
  clientDescription: string
  period: string
  modality: string
  bullets: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer · Full Stack Development",
    company: "Crombie",
    client: "NFTYDoor",
    clientDescription:
      "Fintech / LendTech del mercado inmobiliario de Estados Unidos que ofrece préstamos hipotecarios a propietarios.",
    period: "Sep. 2025 – Jul. 2026",
    modality: "Staffing para cliente internacional",
    bullets: [
      "Desarrollé y mantuve nuevas funcionalidades, fixes y refactors, tanto en frontend como en soluciones serverless de backend con React, Next.js, TypeScript, JavaScript y MongoDB.",
      "Implementé y mantuve servicios de AWS Cognito, Lambda, S3 y CloudWatch para autenticación, procesamiento serverless, almacenamiento y monitoreo en producción.",
      "Construí interfaces siguiendo los diseños y especificaciones del equipo de UX/UI en Figma.",
      "Trabajé bajo Scrum: sprints, dailies y demos con el cliente para presentar avances.",
      "Realicé QA manual previo a cada release, detectando y reportando incidencias antes de producción.",
      "Fui punto de contacto de Service Desk, analizando y resolviendo incidentes reportados por usuarios finales.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS Lambda",
      "AWS Cognito",
      "AWS S3",
      "CloudWatch",
      "Figma",
      "Scrum",
    ],
  },
]

export const recommendation = {
  author: "Santiago Don",
  authorRole: "Chief People Officer (CPO)",
  company: "Crombie",
  date: "30 de julio de 2026",
  highlight:
    "His work was solid, efficient, and results-oriented, and he consistently stood out for his collaborative attitude, professionalism, and excellent technical expertise.",
  summary:
    "Carta de recomendación emitida por el área de Recursos Humanos de Crombie al finalizar el proyecto.",
  fullText: [
    "Through this letter, the Human Resources Department of Crombie is pleased to recommend Mr. Gianluca Sciabarrasi, who worked as a Software Developer in our organization from September 22, 2025, to July 20, 2026, as part of a team assigned to a project for an international client based in the United States.",
    "During his time at Crombie, Gianluca consistently demonstrated outstanding professional performance, carrying out his responsibilities with dedication, accountability, and commitment. His work was solid, efficient, and results-oriented, and he consistently stood out for his collaborative attitude, professionalism, and excellent technical expertise.",
    "His employment ended solely due to the completion of the project to which he had been assigned and was in no way related to his performance or professional conduct.",
    "At Crombie, we sincerely value the time we had the opportunity to work with Gianluca and are confident that he will be a valuable asset to any organization he joins in the future.",
  ],
} as const

export type Project = {
  slug: string
  name: string
  client: string
  category: string
  period: string
  problem: string
  solution: string
  impact: { value: string; label: string }
  highlights: string[]
  stack?: string[]
  repo?: string
}

export const projects: Project[] = [
  {
    slug: "prode-mundial",
    name: "Prode del Mundial 2026",
    client: "Club Atlético Belgrano de Coronda",
    category: "Comunidad · Recaudación",
    period: "Jun. – Jul. 2026",
    problem:
      "El club necesitaba una forma atractiva de recaudar fondos y mantener activa a su comunidad durante el Mundial.",
    solution:
      "Una plataforma de pronósticos vinculada a la venta de rifas del club: registra las predicciones de todos los partidos y calcula automáticamente un ranking donde los tres primeros obtienen premios.",
    impact: { value: "~200", label: "participantes activos" },
    highlights: [
      "Pronósticos para todos los partidos del Mundial",
      "Ranking calculado automáticamente",
      "Integrado a la venta de rifas del club",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "mediturno",
    name: "MediTurno",
    client: "Consultorio médico privado · Santa Fe",
    category: "Salud",
    period: "Abr. 2022 – Dic. 2025",
    problem:
      "Cada médico tenía que anotar a mano los datos de todos los pacientes que llegaban a la consulta.",
    solution:
      "Desarrollada junto a los médicos del consultorio: el paciente solicita el turno con el profesional de su preferencia y carga toda su información. El médico solo tiene que aceptar la solicitud.",
    impact: { value: "~300", label: "solicitudes de turno por mes" },
    highlights: [
      "Eliminó el registro manual de pacientes",
      "Elección del profesional por parte del paciente",
      "El médico solo acepta la solicitud de turno",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "chiozzi",
    name: "Sitio corporativo + CMS propio",
    client: "Industria Gráfica Eduardo Chiozzi S.A.",
    category: "Corporativo · Marketing",
    period: "Feb. 2024 – Jun. 2025",
    problem:
      "La empresa necesitaba renovar y fortalecer su imagen, y que su equipo de Marketing pudiera publicar contenido sin depender de terceros.",
    solution:
      "Diseñé desde cero la UI/UX y la arquitectura de un sitio corporativo de 5 rutas, con módulo de blog y un dashboard CMS propio. Trabajé a la par del equipo de Marketing con demos semanales.",
    impact: { value: "~250", label: "visitantes por mes" },
    highlights: [
      "Dashboard CMS a medida, sin CMS externo",
      "Backend con Next.js API Routes",
      "Deploy en VPS de DonWeb con PM2 y Nginx",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API Routes", "Nginx", "PM2", "VPS"],
    repo: "https://github.com/Sciabarrasi/MPA_chiozzi",
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS / SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Java", "Spring Boot", "Next.js API Routes", "Serverless", "Prisma ORM"],
  },
  {
    category: "Bases de datos",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS Cognito", "AWS Lambda", "AWS S3", "AWS CloudWatch", "Docker", "GCP", "Nginx", "PM2", "VPS"],
  },
  {
    category: "Testing & herramientas",
    skills: ["Jest", "QA manual", "Git", "GitHub", "Bitbucket", "Jira", "Figma", "Trello"],
  },
  {
    category: "Metodologías",
    skills: ["Scrum", "Agile"],
  },
]

export type Education = {
  title: string
  place: string
  period: string
  note?: string
  current?: boolean
  certificate?: string
}

export const education: Education[] = [
  {
    title: "Tecnicatura en Desarrollo de Software",
    place: "ICOP",
    period: "2026 – actualidad",
    note: "Finalización estimada: 2029",
    current: true,
  },
  {
    title: "Universidad Java – Cero a Experto (+155 horas)",
    place: "Udemy",
    period: "Jul. – Sep. 2026",
    certificate: "https://www.udemy.com/certificate/UC-5f857181-e088-4633-83c0-5228f6334301/",
  },
  {
    title: "Serverless en Español con AWS y Serverless Framework",
    place: "Udemy",
    period: "Sep. 2025",
    certificate: "https://www.udemy.com/certificate/UC-f4898691-71e5-4358-ad73-658efb9d5d64/",
  },
  {
    title: "Crombie Code Academy — NestJS & AWS",
    place: "Crombie",
    period: "Oct. 2024 – Abr. 2025",
    note: "Bootcamp de backend, AWS, Git, trabajo colaborativo y metodologías ágiles.",
  },
  {
    title: "Programa de Desarrollo Full Stack",
    place: "Coderhouse",
    period: "Oct. 2023 – Abr. 2024",
  },
  {
    title: "Programa de Desarrollo Frontend – React",
    place: "Coderhouse",
    period: "Ene. – Jul. 2023",
  },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 certificado" },
] as const

export const suggestedQuestions = [
  "¿Qué hizo en NFTYDoor?",
  "Contame sobre MediTurno",
  "¿Qué experiencia tiene con AWS?",
  "¿Cómo encara un proyecto nuevo?",
  "¿Dónde estudió Gianluca?",
]
