import AnimatedBackground from "../components/AnimatedBackground";

export default function About() {

  const features = [

    {
      icon: "🤖",
      title: "AI Receptionist",
      desc:
        "Advanced AI-powered hospital receptionist capable of understanding patient symptoms and guiding them intelligently."
    },

    {
      icon: "🌍",
      title: "Multilingual Support",
      desc:
        "Supports English, Hindi, and Telugu for seamless communication with diverse patients."
    },

    {
      icon: "🚨",
      title: "Emergency Detection",
      desc:
        "Detects critical emergency symptoms instantly and prioritizes urgent ward routing."
    },

    {
      icon: "🏥",
      title: "Smart Ward Routing",
      desc:
        "Automatically classifies patients into Emergency, General, or Mental Health wards."
    },

    {
      icon: "📊",
      title: "Live Analytics",
      desc:
        "Real-time monitoring of patient intake, AI accuracy, and hospital ward utilization."
    },

    {
      icon: "🔒",
      title: "Secure Infrastructure",
      desc:
        "Built with secure backend architecture and HIPAA-aware healthcare workflows."
    }

  ];

  const stats = [

    {
      number: "98.7%",
      label: "AI Accuracy"
    },

    {
      number: "127+",
      label: "Patients Today"
    },

    {
      number: "18s",
      label: "Avg Intake Time"
    },

    {
      number: "24/7",
      label: "AI Availability"
    }

  ];

  return (

    <div className="min-h-screen bg-[#EEF7FD] relative overflow-hidden">

      <AnimatedBackground />

      {/* HERO */}
      <section className="relative px-6 pt-24 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-5 py-2 shadow-sm mb-6">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                <span className="text-sm font-semibold text-emerald-700 tracking-wide">
                  AI-POWERED HEALTHCARE PLATFORM
                </span>

              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">

                The Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  Hospital Reception
                </span>

              </h1>

              <p className="text-lg text-slate-600 leading-9 mt-8 max-w-2xl">

                MedAI transforms traditional hospital intake into an intelligent,
                AI-powered patient experience with multilingual communication,
                emergency detection, real-time triage, and smart ward routing.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-10">

                <button className="px-7 py-4 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold shadow-xl hover:scale-[1.03] transition-all duration-300">

                  Launch Dashboard

                </button>

                <button className="px-7 py-4 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 font-semibold hover:bg-white transition-all duration-300">

                  Learn More

                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="soft-card rounded-[40px] border border-white/40 p-8 shadow-2xl backdrop-blur-xl bg-white/60">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <p className="text-sm text-slate-400">
                      MEDAI LIVE STATUS
                    </p>

                    <h3 className="text-2xl font-bold text-slate-800 mt-1">
                      System Operational
                    </h3>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-3xl shadow-lg">
                    🏥
                  </div>

                </div>

                <div className="space-y-5">

                  {/* ITEM */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5">

                    <div className="flex items-center justify-between mb-3">

                      <div>

                        <p className="font-semibold text-slate-700">
                          Emergency Ward
                        </p>

                        <p className="text-sm text-slate-400 mt-1">
                          12 active patients
                        </p>

                      </div>

                      <span className="text-2xl">
                        🚨
                      </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-emerald-100 overflow-hidden">

                      <div className="h-full w-[72%] bg-gradient-to-r from-red-400 to-red-500 rounded-full"></div>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-5">

                    <div className="flex items-center justify-between mb-3">

                      <div>

                        <p className="font-semibold text-slate-700">
                          General Ward
                        </p>

                        <p className="text-sm text-slate-400 mt-1">
                          24 active patients
                        </p>

                      </div>

                      <span className="text-2xl">
                        🩺
                      </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-cyan-100 overflow-hidden">

                      <div className="h-full w-[58%] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="bg-violet-50 border border-violet-100 rounded-3xl p-5">

                    <div className="flex items-center justify-between mb-3">

                      <div>

                        <p className="font-semibold text-slate-700">
                          Mental Health
                        </p>

                        <p className="text-sm text-slate-400 mt-1">
                          7 active patients
                        </p>

                      </div>

                      <span className="text-2xl">
                        🧠
                      </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-violet-100 overflow-hidden">

                      <div className="h-full w-[45%] bg-gradient-to-r from-violet-400 to-violet-500 rounded-full"></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="soft-card rounded-[32px] border border-white/40 bg-white/60 backdrop-blur-xl p-8 text-center shadow-lg hover:scale-[1.02] transition-all duration-300"
            >

              <div className="text-4xl font-black text-emerald-600">
                {stat.number}
              </div>

              <div className="text-sm text-slate-500 mt-3">
                {stat.label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black text-slate-900">
              Why Hospitals Choose MedAI
            </h2>

            <p className="text-slate-500 text-lg mt-5 max-w-3xl mx-auto leading-8">

              Built for modern healthcare systems with intelligent automation,
              multilingual patient interaction, and AI-assisted triage workflows.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {features.map((feature, index) => (

              <div
                key={index}
                className="soft-card rounded-[32px] border border-white/40 bg-white/60 backdrop-blur-xl p-7 shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-3xl shadow-lg mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-500 leading-8 text-sm">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );
}