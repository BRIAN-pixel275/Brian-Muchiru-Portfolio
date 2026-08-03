const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">

      {/* Grid — ledger-paper feel, no color glow blobs */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,232,222,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,222,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Single restrained brass glow, top-right */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brass/[0.06] blur-[160px]" />

    </div>
  );
};

export default Background;
