/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Las páginas viejas ahora son secciones de la home.
  redirects() {
    return [
      { source: "/skills", destination: "/#stack", permanent: false },
      { source: "/freelance", destination: "/#proyectos", permanent: false },
      { source: "/asistente", destination: "/#asistente", permanent: false },
    ]
  },
}

export default nextConfig
