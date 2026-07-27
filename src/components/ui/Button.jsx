const Button = ({
  children,
  primary = true,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        ${
          primary
            ? "bg-gradient-to-r from-blue-500 via-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-blue-500/40"
            : "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:border-blue-400/30"
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;