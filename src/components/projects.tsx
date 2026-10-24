
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "BazarDor",
    description:
      "A market-price web application for browsing everyday products and categories.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://assignment-07-bazar-dor-seven.vercel.app/",
    github: "https://github.com/sarahwritescode/assignment-07-bazar-dor.git",
  },
  {
    title: "FitLog",
    description:
      "A fitness tracking application designed to help users manage their fitness activities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://my-a6-fit-log.vercel.app/",
    github: "https://github.com/sarahwritescode/my-a6-fit-log.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium text-lime-700">
          SELECTED WORK
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
          Projects I&apos;ve built
        </h2>

        <p className="mt-4 text-gray-600">
          A selection of projects that reflect my learning and skills.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-600 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-3 min-h-14 leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-lime-50 px-3 py-1 text-xs font-medium text-lime-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-5">
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-lime-700 hover:text-lime-900"
                >
                  Live demo <ArrowUpRight size={16} />
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-lime-700"
                >
                 <FaGithub size={16} /> GitHub
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
