const SectionHeading = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-16">

      <span className="inline-block border-b-2 border-brass pb-2 font-mono-ledger text-xs uppercase tracking-[3px] text-brass">
        {badge}
      </span>

      <h2 className="mt-6 font-display text-4xl font-semibold md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-paper-muted">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;
