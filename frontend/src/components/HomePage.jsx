import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {

  const stats = [

    {
      value: "98.7%",
      label: "AI Accuracy"
    },

    {
      value: "24/7",
      label: "Availability"
    },

    {
      value: "127+",
      label: "Patients Today"
    },

    {
      value: "18s",
      label: "Avg Intake Time"
    }

  ];

  const features = [

    {
      icon: "🤖",
      title: "AI Receptionist",
      desc:
        "Automated patient conversations with intelligent symptom understanding."
    },

    {
      icon: "🚨",
      title: "Emergency Detection",
      desc:
        "Detect urgent symptoms instantly and prioritize critical patients."
    },

    {
      icon: "🌍",
      title: "Multilingual AI",
      desc:
        "Communicate with patients in multiple regional languages seamlessly."
    },

    {
      icon: "🏥",
      title: "Smart Ward Routing",
      desc:
        "Automatically classify and assign patients to hospital wards."
    }

  ];

  return (

    <div className="min-h-screen bg-[#EEF7FD] relative overflow-hidden">

      <AnimatedBackground />

      {/* NAVBAR */}
      <nav className="relative z-20 px-6 py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
              🏥
            </div>

            <div>

              <h1 className="text-2xl font-black text-slate-800">
                MedAI
              </h1>

              <p className="text-sm text-slate-400">
                Intelligent Hospital Platform
              </p>

            </div>

          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#features"
              className="text-slate-600 font-medium hover:text-emerald-600 transition-all"
            >
              Features
            </a>

            <a
              href="#stats"
              className="text-slate-600 font-medium hover:text-emerald-600 transition-all"
            >
              Analytics
            </a>

            <a
              href="#about"
              className="text-slate-600 font-medium hover:text-emerald-600 transition-all"
            >
              About
            </a>

          </div>

          {/* CTA */}
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold shadow-xl hover:scale-[1.03] transition-all duration-300">

            Launch Dashboard

          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-14 pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-5 py-2 shadow-sm mb-7">

              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

              <span className="text-sm font-semibold text-emerald-700 tracking-wide">
                AI-POWERED HOSPITAL AUTOMATION
              </span>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">

              Intelligent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Hospital Reception
              </span>

            </h1>

            <p className="text-lg text-slate-600 leading-9 mt-8 max-w-2xl">

              MedAI revolutionizes patient intake with AI-powered symptom analysis,
              emergency detection, multilingual communication, and smart ward routing.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-8 py-4 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold shadow-xl hover:scale-[1.03] transition-all duration-300">

                Start AI Reception

              </button>

              <button className="px-8 py-4 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 font-semibold hover:bg-white transition-all duration-300">

                View Demo

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="soft-card rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* TOP */}
              <div className="p-7 border-b border-slate-100">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="text-sm text-slate-400">
                      MEDAI LIVE SYSTEM
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mt-1">
                      AI Reception Active
                    </h3>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-3xl shadow-lg">
                    🤖
                  </div>

                </div>

              </div>

              {/* CHAT PREVIEW */}
              <div className="p-7 space-y-5">

                {/* BOT */}
                <div className="flex gap-3">

                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-lg">
                    🏥
                  </div>

                  <div className="bg-white rounded-[24px] rounded-bl-md px-5 py-4 border border-slate-200 shadow-sm max-w-sm">

                    <p className="text-sm text-slate-700 leading-7">
                      Hello! Welcome to MedAI Hospital.
                      Please describe your symptoms.
                    </p>

                  </div>

                </div>

                {/* USER */}
                <div className="flex justify-end">

                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-[24px] rounded-br-md px-5 py-4 shadow-lg max-w-sm">

                    <p className="text-sm leading-7">
                      I'm experiencing chest pain and difficulty breathing.
                    </p>

                  </div>

                </div>

                {/* AI */}
                <div className="flex gap-3">

                  <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center text-lg">
                    🚨
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-[24px] rounded-bl-md px-5 py-4 shadow-sm max-w-sm">

                    <p className="text-sm text-red-700 leading-7">
                      Emergency symptoms detected.
                      Routing patient to Emergency Ward immediately.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section
        id="stats"
        className="relative z-10 px-6 pb-24"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => (

            <div
              key={index}
              className="soft-card rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/40 p-8 text-center shadow-lg hover:scale-[1.02] transition-all duration-300"
            >

              <div className="text-4xl font-black text-emerald-600">
                {item.value}
              </div>

              <div className="text-sm text-slate-500 mt-3">
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 px-6 pb-28"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black text-slate-900">
              Powerful AI Healthcare Features
            </h2>

            <p className="text-lg text-slate-500 mt-6 max-w-3xl mx-auto leading-9">

              Designed for hospitals, clinics, and healthcare systems seeking
              intelligent patient automation and modern AI workflows.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

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