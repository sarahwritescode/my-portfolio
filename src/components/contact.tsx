
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-gray-900 px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-medium text-lime-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            I&apos;m always interested in learning, collaborating, and
            exploring opportunities to build great web experiences.
          </p>

          <Link
            href="mailto:YOUR-sarahkhatun582@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-lime-700"
          >
            <Mail size={17} />
            Email me
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
