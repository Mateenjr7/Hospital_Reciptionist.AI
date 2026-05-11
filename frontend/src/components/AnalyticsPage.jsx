import {
  Activity,
  AlertTriangle,
  Brain,
  Clock3,
  Users,
  HeartPulse,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

export default function Analytics() {

  const wardStats = [
    {
      name: "Emergency Ward",
      patients: 36,
      progress: 72,
      icon: <AlertTriangle size={20} />,
      bg: "bg-red-50",
      border: "border-red-100",
      text: "text-red-600",
      bar: "bg-red-500"
    },

    {
      name: "Mental Health",
      patients: 14,
      progress: 45,
      icon: <Brain size={20} />,
      bg: "bg-violet-50",
      border: "border-violet-100",
      text: "text-violet-600",
      bar: "bg-violet-500"
    },

    {
      name: "General Ward",
      patients: 58,
      progress: 63,
      icon: <HeartPulse size={20} />,
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      text: "text-emerald-600",
      bar: "bg-emerald-500"
    }
  ];

  const activityFeed = [
    "Emergency patient routed successfully",
    "AI triage completed in 14 seconds",
    "New patient registered in General Ward",
    "Critical alert sent to Emergency Team",
    "Mental health consultation assigned"
  ];

  return (
    <div className="min-h-screen bg-[#F4FAFF] p-6">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Hospital Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Real-time AI-powered hospital monitoring dashboard
          </p>

        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">

          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

          <span className="text-sm font-semibold text-slate-600">
            LIVE SYSTEM
          </span>

        </div>

      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Total Patients
              </p>

              <h2 className="text-4xl font-bold text-slate-800 mt-2">
                127
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Users />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Emergency Cases
              </p>

              <h2 className="text-4xl font-bold text-red-500 mt-2">
                36
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
              <AlertTriangle />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Avg Intake Time
              </p>

              <h2 className="text-4xl font-bold text-slate-800 mt-2">
                18s
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
              <Clock3 />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                AI Accuracy
              </p>

              <h2 className="text-4xl font-bold text-emerald-600 mt-2">
                98.7%
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck />
            </div>

          </div>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Ward Analytics */}
        <div className="xl:col-span-2 bg-white rounded-[32px] border border-slate-200 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                Ward Capacity Analytics
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Real-time hospital occupancy monitoring
              </p>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
              <TrendingUp />
            </div>

          </div>

          <div className="space-y-5">

            {wardStats.map((ward, index) => (
              <div
                key={index}
                className={`${ward.bg} ${ward.border} border rounded-3xl p-5`}
              >

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-3">

                    <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm ${ward.text}`}>
                      {ward.icon}
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-700">
                        {ward.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {ward.patients} active patients
                      </p>

                    </div>

                  </div>

                  <div className={`text-xl font-bold ${ward.text}`}>
                    {ward.progress}%
                  </div>

                </div>

                <div className="w-full h-3 bg-white rounded-full overflow-hidden">

                  <div
                    className={`h-full rounded-full ${ward.bar}`}
                    style={{
                      width: `${ward.progress}%`
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-[32px] border border-slate-200 p-6 shadow-sm flex flex-col">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                Live Activity
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Real-time AI system updates
              </p>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Activity />
            </div>

          </div>

          <div className="space-y-4">

            {activityFeed.map((activity, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >

                <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

                <div>

                  <p className="text-sm text-slate-700 leading-6">
                    {activity}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Just now
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Insight */}
          <div className="mt-auto pt-6">

            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 p-5">

              <div className="text-xs font-bold tracking-widest text-emerald-600 mb-3">
                AI INSIGHT
              </div>

              <p className="text-sm text-slate-600 leading-7">
                Emergency department activity increased by 14% today.
                AI triage response times remain within optimal range.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}