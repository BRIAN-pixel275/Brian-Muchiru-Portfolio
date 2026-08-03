const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <p className="font-mono-ledger text-brass uppercase tracking-[6px]">
        {subtitle}
      </p>

      <h2 className="mt-4 font-display text-5xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
