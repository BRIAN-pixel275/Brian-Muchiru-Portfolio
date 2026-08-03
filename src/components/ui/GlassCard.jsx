const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-sm
        border
        border-ink-line
        border-t-2
        border-t-brass
        bg-ink-raised
        shadow-[0_16px_40px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
