

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BazarDor",
    image: "/bazardor.png",
    description:
      "A market-price web application for browsing everyday products and categories.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://assignment-07-bazar-dor-seven.vercel.app/",
    github: "https://github.com/sarahwritescode/assignment-07-bazar-dor.git",
  },
  {
    title: "FitLog",
    image: "/fitlog.png",
    description:
      "A fitness tracking application designed to help users manage their fitness activities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://my-a6-fit-log.vercel.app/",
    github: "https://github.com/sarahwritescode/my-a6-fit-log.git",
  },
  {
    title: "DevStack",
    image: "/devstack.png",
    description:
      "Explore frontend, backend, database, and tooling options for web development projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://exquisite-douhua-8a1479.netlify.app/",
    github: "https://github.com/Sara-saku/A05-DevStack.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#FAFBF8] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects I&apos;ve{" "}
            <span className="text-green-700">Built</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-600">
            A selection of projects that reflect my learning,
            creativity, and frontend development skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              {/* Full-page screenshot preview */}
              <div className="relative h-64 overflow-hidden bg-gray-100 sm:h-72">
                <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-1.5 border-b border-gray-200 bg-white/95 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="ml-2 truncate rounded-md bg-gray-100 px-3 py-1 text-[10px] text-gray-500">
                    {project.title}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} full-page website screenshot`}
                    width={1440}
                    height={3000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="h-auto w-full object-top transition-transform duration-[5000ms] ease-linear group-hover:translate-y-[calc(-100%+18rem)] sm:group-hover:translate-y-[calc(-100%+20rem)]"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-green-700">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-gray-100 pt-5">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors hover:text-green-900"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
