

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Left side: Introduction */}
        <div>
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-lime-700">
            <Code2 size={18} />
            FRONT-END DEVELOPER
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building clean, thoughtful{" "}
            <span className="text-lime-700">
              web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Hi, I&apos;m Sarah, a front-end developer passionate
            about creating responsive, accessible, and user-friendly
            websites with modern web technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-lime-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-lime-800"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-lime-600 hover:text-lime-700"
            >
              Get in touch
              <ArrowDown size={17} />
            </Link>
          </div>
        </div>

        {/* Right side: Hero illustration */}
        <div className="relative mx-auto w-full max-w-lg">
          <Image
            src="/hero.png"
            alt="Illustration of a developer working on a laptop"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

