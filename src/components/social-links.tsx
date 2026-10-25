
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sarahwritescode",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarah-khatun/",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharifs.wife.sara",
    icon: FaFacebookF,
  },
 {
  name: "Email",
  href: "mailto:sarahkhatun582@gmail.com",
  icon: MdEmail,
},
];

export default function SocialLinks() {
  return (
    <aside
      aria-label="Social media links"
      className="fixed left-0 top-[70%] z-50 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-r-2xl border border-l-0 border-green-100 bg-white/90 px-3 py-5 shadow-lg backdrop-blur-md md:flex"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.name} profile`}
            title={social.name}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-green-50 hover:text-green-700"
          >
            <Icon size={21} />
          </a>
        );
      })}

      <div className="mt-1 h-10 w-px bg-green-200" />
    </aside>
  );
}
