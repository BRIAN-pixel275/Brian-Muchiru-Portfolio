const Counter = ({ end, label }) => {
  return (
    <div>
      <h3 className="font-mono-ledger text-4xl font-semibold text-brass">
        {end}+
      </h3>

      <p>{label}</p>
    </div>
  );
};

export default Counter;