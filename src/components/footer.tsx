
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
         © 2026 Sarah. Built with care.
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/sarahwritescode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-500 transition hover:text-lime-700"
          >
           <FaGithub size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/sarah-khatun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-500 transition hover:text-lime-700"
          >
           <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

