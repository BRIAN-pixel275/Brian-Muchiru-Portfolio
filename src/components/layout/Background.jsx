const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow 1 */}
      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Glow 2 */}
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      {/* Glow 3 */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

    </div>
  );
};

export default Background;