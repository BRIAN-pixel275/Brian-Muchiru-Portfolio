const Badge = ({ children }) => {
  return (
    <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-lg">
      {children}
    </span>
  );
};

export default Badge;