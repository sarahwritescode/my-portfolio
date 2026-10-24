


import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiGit,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import {
  Code2,
  Smartphone,
  Plug,
  ShieldCheck,
  Database,
  Bug,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Technologies",
    description: "The core technologies I use to build websites.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Styling & UI",
    description: "Creating clean, responsive user interfaces.",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DaisyUI", icon: SiDaisyui },
      { name: "Responsive Design", icon: Smartphone },
      { name: "UI Development", icon: PanelsTopLeft },
      { name: "Component-Based UI", icon: Workflow },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use during development and deployment.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Development Skills",
    description: "Practical skills for building functional applications.",
    skills: [
      { name: "REST API Integration", icon: Plug },
      { name: "Authentication", icon: ShieldCheck },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Debugging", icon: Bug },
      { name: "Clean Code", icon: Code2 },
      { name: "Database Basics", icon: Database },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#FAFBF8] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Skills & <span className="text-green-700">Technologies</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Technologies, tools, and practical skills I use to build
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[#E3EBDD] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-[#FAFBF8] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
                    >
                      <Icon
                        size={27}
                        className="text-green-700 transition-transform duration-300 group-hover:scale-110"
                      />

                      <span className="text-xs font-medium text-gray-700 sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
