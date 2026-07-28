const BrowserFrame = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 shadow-2xl backdrop-blur-xl">

      {/* Browser Header */}

      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">

        <span className="h-3 w-3 rounded-full bg-red-500"></span>

        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-slate-400">
          localhost:5173
        </div>

      </div>

      {children}

    </div>
  );
};

export default BrowserFrame;