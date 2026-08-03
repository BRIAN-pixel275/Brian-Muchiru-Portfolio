const BrowserFrame = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-sm border border-ink-line bg-ink-raised shadow-2xl">

      {/* Browser Header */}

      <div className="flex items-center gap-2 border-b border-ink-line bg-ink px-5 py-4">

        <span className="h-3 w-3 rounded-full bg-red-500/70"></span>

        <span className="h-3 w-3 rounded-full bg-brass/70"></span>

        <span className="h-3 w-3 rounded-full bg-moss/70"></span>

        <div className="ml-4 rounded-sm bg-ink-line px-4 py-1 font-mono-ledger text-xs text-paper-muted">
          localhost:5173
        </div>

      </div>

      {children}

    </div>
  );
};

export default BrowserFrame;
