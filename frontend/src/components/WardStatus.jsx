export default function WardStatus() {

  const wards = [
    {
      name: "Emergency Ward",
      icon: "🚨",
      patients: 12,
      beds: 2,
      wait: "5 mins",
      usage: 72,
      bg: "bg-red-50",
      border: "border-red-100",
      text: "text-red-600",
      bar: "bg-red-500"
    },

    {
      name: "Mental Health Ward",
      icon: "🧠",
      patients: 7,
      beds: 4,
      wait: "8 mins",
      usage: 45,
      bg: "bg-violet-50",
      border: "border-violet-100",
      text: "text-violet-600",
      bar: "bg-violet-500"
    },

    {
      name: "General Ward",
      icon: "🏥",
      patients: 24,
      beds: 10,
      wait: "15 mins",
      usage: 58,
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      text: "text-emerald-600",
      bar: "bg-emerald-500"
    }
  ];

  return (
    <div className="space-y-4">

      {wards.map((ward, index) => (
        <div
          key={index}
          className={`${ward.bg} ${ward.border} border rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300`}
        >

          {/* Top */}
          <div className="flex items-center justify-between mb-4">

            <div>

              <h3 className="font-semibold text-slate-700 text-sm">
                {ward.name}
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                {ward.patients} active patients
              </p>

            </div>

            <div
              className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-xl shadow-sm ${ward.text}`}
            >
              {ward.icon}
            </div>

          </div>

          {/* Stats */}
          <div className="flex gap-5 mb-4 text-sm">

            <div>
              <p className="text-slate-400 text-xs">
                Beds
              </p>

              <p className={`font-bold mt-1 ${ward.text}`}>
                {ward.beds}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-xs">
                Wait Time
              </p>

              <p className={`font-bold mt-1 ${ward.text}`}>
                {ward.wait}
              </p>
            </div>

          </div>

          {/* Capacity */}
          <div>

            <div className="flex justify-between text-xs mb-2">

              <span className="text-slate-400">
                Capacity
              </span>

              <span className={`font-semibold ${ward.text}`}>
                {ward.usage}%
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white overflow-hidden">

              <div
                className={`h-full rounded-full ${ward.bar}`}
                style={{
                  width: `${ward.usage}%`
                }}
              />

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}
