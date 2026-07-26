const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <h2 className="font-bold tracking-wider">
          BM
        </h2>

        <ul className="hidden gap-8 md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>

        <button className="rounded-full bg-blue-500 px-6 py-2">
          Resume
        </button>

      </div>

    </nav>
  );
};

export default Navbar;