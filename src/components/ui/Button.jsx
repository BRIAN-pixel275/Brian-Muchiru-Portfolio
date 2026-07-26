const Button = ({ children, primary = true }) => {
  return (
    <button
      className={
        primary
          ? "rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3 font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          : "rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl transition duration-300 hover:bg-white/10"
      }
    >
      {children}
    </button>
  );
};

export default Button;