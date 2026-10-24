

import Image from "next/image";
import { Code2, LayoutDashboard, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing readable and maintainable code.",
  },
  {
    icon: LayoutDashboard,
    title: "Responsive Design",
    description: "Building interfaces for different screen sizes.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description: "Improving my skills through hands-on projects.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-green-100" />

            <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-[#FAFBF8] p-3">
              <Image
                src="/about.png"
                alt="Sarah, Frontend Developer"
                width={500}
                height={600}
                className="h-[380px] w-full rounded-2xl object-cover sm:h-[460px]"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-lg sm:-right-5">
              <p className="text-sm font-semibold text-gray-900">
                Frontend Developer
              </p>
              <p className="mt-1 text-xs text-green-700">
                Learning · Building · Growing
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="mt-6 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Get to Know Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              A Little About{" "}
              <span className="text-green-700">Me</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Hi, I&apos;m Sarah! I&apos;m a passionate aspiring Frontend Developer
              who enjoys turning ideas into clean, responsive, and
              user-friendly web experiences.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              I work with technologies like React, Next.js, TypeScript,
              and Tailwind CSS. Through hands-on projects, I&apos;m continuously
              improving my skills, exploring new tools, and learning how
              to build better web applications.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              My goal is to keep growing as a developer, solve real-world
              problems, and create digital experiences that are both
              useful and enjoyable to use.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex flex-col gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                      <Icon size={22} className="text-green-700" />
                    </div>

                    <h3 className="text-sm font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
