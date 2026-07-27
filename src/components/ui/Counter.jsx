const Counter = ({ end, label }) => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-blue-400">
        {end}+
      </h3>

      <p>{label}</p>
    </div>
  );
};

export default Counter;