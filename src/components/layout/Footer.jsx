import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">

        <div>

          <h2 className="text-2xl font-black">
            <span className="text-blue-400">B</span>M
          </h2>

          <p className="mt-2 text-slate-400">
            Crafting modern web experiences.
          </p>

        </div>

        <div className="flex gap-6 text-2xl">

          <a href="#https://github.com/BRIAN-pixel275">
            <FaGithub />
          </a>

          <a href="#https://www.linkedin.com/in/brian-muchiru-b0b057356/">
            <FaLinkedin />
          </a>

          <a href="brayo2933@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        © 2026 Brian Muchiru. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;