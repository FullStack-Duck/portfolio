"use client";

import React, { useEffect, useState } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Turnero Médico",
    description: "A medical appointment system built with React and Spring Boot.",
    image: "/medical-care.svg",
    techs: ["React", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/nicosheker/turnero",
    liveUrl: "https://turnero-app.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js, Tailwind and shadcn/ui.",
    image: "/portfolio.svg",
    techs: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/nicosheker/portfolio",
    liveUrl: "https://nicosheker.dev",
  },
  {
    title: "Crypto Tracker",
    description: "A Web3 dApp to track token prices using Solidity and Ethers.js.",
    image: "/bitcoin.svg",
    techs: ["Solidity", "Ethers.js", "React"],
    githubUrl: "https://github.com/nicosheker/crypto-tracker",
  },
  {
    title: "AI Blog Generator",
    description: "Generate full blog posts using GPT and Next.js in seconds.",
    image: "/AI.svg",
    techs: ["Next.js", "OpenAI API", "Tailwind"],
    githubUrl: "https://github.com/nicosheker/ai-blog",
  },
  {
    title: "ChatApp",
    description: "Real-time chat application using WebSockets and Node.js.",
    image: "/messageApp.svg",
    techs: ["React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/nicosheker/chat-app",
  },
  {
    title: "E-commerce Store",
    description: "A fully functional e-commerce site with Stripe integration.",
    image: "/ecommerce.svg",
    techs: ["React", "Express", "Stripe"],
    githubUrl: "https://github.com/nicosheker/ecommerce",
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const paginatedProjects = projects.slice(
    page * projectsPerPage,
    (page + 1) * projectsPerPage
  );

  return (
    <section className="min-h-screen snap-start bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] px-6 sm:px-20 pt-20 pb-32">
      <div className="w-full text-center">
        <h2 className="text-4xl sm:text-6xl font-bold text-blue-900 dark:text-yellow-400 mb-4">
          My Projects
        </h2>

        <p className="text-xl uppercase tracking-widest text-yellow-500">
          Crafted with passion ⚒️
        </p>

        <div className="w-24 h-1 bg-yellow-400 mx-auto my-6 rounded-full" />

        <p className="text-lg text-neutral-600 dark:text-neutral-300 italic">
          Source code and deploys are coming soon. Stay tuned!
        </p>

        <div className="w-24 h-1 bg-yellow-400 mx-auto my-6 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          {paginatedProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 dark:text-yellow-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {project.techs.map((tech, i) => (
                  <span key={i} className="text-xs bg-blue-100 dark:bg-yellow-700 text-blue-800 dark:text-yellow-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-30"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
