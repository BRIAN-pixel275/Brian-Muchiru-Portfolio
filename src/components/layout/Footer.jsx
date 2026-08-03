import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-ink-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">

        <div>

          <h2 className="font-display text-2xl font-semibold text-paper">
            <span className="text-brass">B</span>M
          </h2>

          <p className="mt-2 text-paper-muted">
            Crafting modern web experiences.
          </p>

        </div>

         <div className="flex items-center gap-6 text-paper-muted">
  <a
    href="https://github.com/BRIAN-pixel275"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="transition-colors duration-300 hover:text-brass"
  >
    <FaGithub size={26} />
  </a>

  <a
    href="https://www.instagram.com/just_muchiru/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition-colors duration-300 hover:text-brass"
  >
    <FaInstagram size={26} />
  </a>

  <a
    href="https://www.linkedin.com/in/brian-muchiru-b0b057356/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="transition-colors duration-300 hover:text-brass"
  >
    <FaLinkedinIn size={26} />
  </a>
</div>

      </div>

      <p className="mt-8 text-center font-mono-ledger text-xs text-paper-muted">
        © 2026 Brian Muchiru. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
