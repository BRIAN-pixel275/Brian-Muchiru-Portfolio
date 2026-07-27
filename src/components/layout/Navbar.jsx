import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-6 z-50 w-[92%] max-w-7xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl">

        <h2 className="text-2xl font-black">
          <span className="text-blue-400">B</span>M
        </h2>

        <ul className="hidden gap-10 text-sm md:flex">

          <li className="cursor-pointer transition hover:text-blue-400">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-blue-400">
            About
          </li>

          <li className="cursor-pointer transition hover:text-blue-400">
            Projects
          </li>

          <li className="cursor-pointer transition hover:text-blue-400">
            Contact
          </li>

        </ul>

        <button className="rounded-full bg-blue-500 px-6 py-2 hover:bg-blue-400">
          Resume
        </button>

      </div>
    </motion.nav>
  );
};

export default Navbar;