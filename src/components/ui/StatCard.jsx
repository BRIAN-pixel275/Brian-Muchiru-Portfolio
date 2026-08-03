const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-sm border border-ink-line bg-ink-raised px-6 py-5 transition duration-300 hover:-translate-y-1 hover:border-brass">
      <h3 className="font-mono-ledger text-3xl font-semibold text-brass">
        {value}
      </h3>

      <p className="mt-2 text-sm text-paper-muted">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
