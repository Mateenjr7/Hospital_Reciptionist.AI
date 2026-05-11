export default function TypingIndicator() {

  return (
    <div className="flex items-end gap-3 mb-4 message-animate">

      {/* AI Avatar */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-emerald-300/30 blur-xl rounded-full animate-pulse" />

        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-lg shadow-lg">
          🏥
        </div>

      </div>

      {/* Bubble */}
      <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[26px] rounded-bl-md px-5 py-4 shadow-lg">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/40 blur-2xl rounded-full" />

        <div className="relative">

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">

            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-emerald-600">
              MEDAI
            </div>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <div className="text-[10px] text-slate-400 font-medium">
              analyzing symptoms
            </div>

          </div>

          {/* Typing Dots */}
          <div className="flex items-center gap-2">

            {[0, 150, 300].map((delay) => (

              <span
                key={delay}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 animate-bounce shadow-sm"
                style={{
                  animationDelay: `${delay}ms`
                }}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}