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
        rounded-sm
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        ${
          primary
            ? "bg-brass text-ink shadow-[0_10px_30px_rgba(200,150,62,0.25)] hover:bg-brass-deep"
            : "border border-ink-line bg-transparent text-paper hover:border-brass hover:text-brass"
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
