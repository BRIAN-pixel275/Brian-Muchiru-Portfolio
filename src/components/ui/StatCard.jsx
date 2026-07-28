const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400">
      <h3 className="text-3xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
};

export default StatCard;