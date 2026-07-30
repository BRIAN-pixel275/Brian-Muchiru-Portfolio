import { motion } from "framer-motion";

const Navbar = () => {

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];


  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if(section){
      section.scrollIntoView({
        behavior:"smooth",
      });
    }
  };


  return (
    <motion.nav
      initial={{
        y:-100,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:0.8
      }}

      className="
      fixed
      top-6
      left-1/2
      z-50
      w-[90%]
      max-w-7xl
      -translate-x-1/2
      rounded-full
      border
      border-white/10
      bg-white/5
      px-8
      py-4
      backdrop-blur-xl
      "
    >

      <div className="flex items-center justify-between">


        {/* Logo */}

        <button
          onClick={() => scrollToSection("#home")}
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          <span className="text-blue-400">
            B
          </span>
          M
        </button>


        {/* Links */}

        <div className="
        hidden
        items-center
        gap-10
        md:flex
        ">

          {
            links.map((link)=>(
              <button
                key={link.name}
                onClick={() =>
                  scrollToSection(link.href)
                }

                className="
                text-sm
                font-medium
                text-slate-300
                transition
                hover:text-white
                "
              >
                {link.name}

              </button>
            ))
          }

        </div>



        {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          className="
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-violet-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:scale-105
          "
        >

          Resume

        </a>


      </div>

    </motion.nav>
  );
};


export default Navbar;