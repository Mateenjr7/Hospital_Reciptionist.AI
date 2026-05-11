  export default function StepBar({ step }) {

    const steps = [
      {
        key: "collect_name",
        label: "Patient Name",
        icon: "👤",
        order: 0
      },

      {
        key: "collect_age",
        label: "Age",
        icon: "🎂",
        order: 1
      },

      {
        key: "collect_query",
        label: "Symptoms",
        icon: "🩺",
        order: 2
      },

      {
        key: "classify_ward",
        label: "Ward Routing",
        icon: "🏥",
        order: 3
      }
    ];

    const stepMap = {
      collect_name: 0,
      collect_age: 1,
      collect_query: 2,
      classify_ward: 3,
      complete: 4
    };

    const current =
      stepMap[step] ?? 0;

    return (
      <div className="bg-white/70 backdrop-blur-xl border-b border-slate-200 px-5 py-5 overflow-x-auto">

        <div className="flex items-center min-w-[760px]">

          {steps.map((s, index) => {

            const isDone =
              index < current;

            const isActive =
              index === current;

            return (
              <div
                key={s.key}
                className="flex items-center flex-1"
              >

                {/* Step */}
                <div className="flex items-center gap-3">

                  {/* Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-sm ${
                      isDone
                        ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-200"
                        : isActive
                        ? "bg-emerald-50 border-2 border-emerald-300 text-emerald-700 scale-105"
                        : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}
                  >

                    {isDone
                      ? "✓"
                      : s.icon}

                    {/* Glow */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl border-2 border-emerald-200 animate-pulse"></div>
                    )}

                  </div>

                  {/* Labels */}
                  <div>

                    <div
                      className={`text-sm font-semibold transition-all ${
                        isDone
                          ? "text-emerald-700"
                          : isActive
                          ? "text-slate-800"
                          : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </div>

                    <div
                      className={`text-xs mt-1 ${
                        isDone
                          ? "text-emerald-500"
                          : isActive
                          ? "text-emerald-600"
                          : "text-slate-300"
                      }`}
                    >
                      {isDone
                        ? "Completed"
                        : isActive
                        ? "In Progress"
                        : "Pending"}
                    </div>

                  </div>

                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex-1 px-4">

                    <div className="relative h-[4px] rounded-full bg-slate-200 overflow-hidden">

                      <div
                        className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                          index < current
                            ? "w-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : "w-0"
                        }`}
                      />

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    );
  }
