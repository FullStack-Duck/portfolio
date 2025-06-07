import FreelancerPage from './FreelancerPageClient'

export const metadata = {
  title: "Nicolas Sandrin | Freelance Full Stack Developer",
  description:
    "Hire Nicolas Sandrin, an experienced freelance full stack developer specialized in Java, React, TypeScript and scalable web applications.",
  openGraph: {
    title: "Nicolas Sandrin | Freelance Full Stack Developer",
    description:
      "Freelance developer available for remote work, contracts and collaborations with startups and small businesses.",
    url: "https://tudominio.com/freelancer", // actualizá esto
    siteName: "Nicolas Sandrin Portfolio",
    images: [
      {
        url: "https://tudominio.com/og-image.jpg", // opcional
        width: 1200,
        height: 630,
        alt: "Nicolas Sandrin Freelance Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <FreelancerPage />
}
