const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;