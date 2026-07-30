const SectionHeading = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-16">

      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;