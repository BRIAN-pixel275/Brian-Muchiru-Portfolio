const Button = ({ children }) => {
  return (
    <button
      className="
        rounded-full
        bg-blue-500
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:scale-105
        hover:bg-blue-400
      "
    >
      {children}
    </button>
  );
};

export default Button;