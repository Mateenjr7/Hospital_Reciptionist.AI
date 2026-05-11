import { useState, useRef } from "react";

import ChatArea from "../components/ChatArea";
import StepBar from "../components/StepBar";
import PatientCard from "../components/PatientCard";
import AnimatedBackground from "../components/AnimatedBackground";

const GREETINGS = {
  en: "Hello! Welcome to MedAI Hospital. May I know your name please?",
  hi: "Namaste! MedAI Hospital mein aapka swagat hai. Kripya apna naam batayein?",
  te: "Namaskaram! MedAI Hospital ki swaagatam. Mee peru cheppandi?"
};

export default function Dashboard() {

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: GREETINGS.en
    }
  ]);

  const [input, setInput] =
    useState("");

  const [lang, setLang] =
    useState("en");

  const [step, setStep] =
    useState("collect_name");

  const [isLoading, setIsLoading] =
    useState(false);

  const [isComplete, setIsComplete] =
    useState(false);

  const inputRef =
    useRef(null);

  /* Patient */
  const [patientData, setPatientData] =
    useState(null);

  /* Send */
  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    const text =
      input.toLowerCase();

    setInput("");

    setIsLoading(true);

    setTimeout(() => {

      let botReply =
        "Thank you. Your symptoms have been recorded.";

      let ward =
        "General Ward";

      if (
        text.includes("chest") ||
        text.includes("breathing") ||
        text.includes("blood")
      ) {

        ward =
          "Emergency Ward";

        botReply =
          "Emergency symptoms detected. Routing patient to Emergency Ward immediately.";

      } else if (
        text.includes("stress") ||
        text.includes("anxiety") ||
        text.includes("depression")
      ) {

        ward =
          "Mental Health Ward";

        botReply =
          "Mental health support detected. Routing patient to Mental Health Ward.";

      }

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: botReply,
          wardClass:
            ward === "Emergency Ward"
              ? "emergency"
              : ward === "Mental Health Ward"
              ? "mental"
              : "general"
        }
      ]);

      setPatientData({
        patient_name:
          "Patient User",

        patient_age:
          24,

        patient_query:
          input,

        ward,

        timestamp:
          new Date().toISOString()
      });

      setIsComplete(true);

      setStep("complete");

      setIsLoading(false);

    }, 1400);
  };

  /* Reset */
  const handleReset = () => {

    setMessages([
      {
        role: "bot",
        text: GREETINGS[lang]
      }
    ]);

    setInput("");

    setIsComplete(false);

    setPatientData(null);

    setStep("collect_name");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

  };

  return (

    <div className="min-h-screen bg-[#EEF7FD] relative overflow-hidden">

      <AnimatedBackground />

      {/* LAYOUT */}
      <div className="relative z-10 h-screen flex overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="hidden lg:flex w-[280px] border-r border-white/40 bg-white/60 backdrop-blur-xl flex-col">

          {/* Logo */}
          <div className="p-6 border-b border-slate-200">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
                🏥
              </div>

              <div>

                <h1 className="text-2xl font-black text-slate-800">
                  MedAI
                </h1>

                <p className="text-sm text-slate-400">
                  Hospital Platform
                </p>

              </div>

            </div>

          </div>

          {/* Ward Status */}
          <div className="p-6 border-b border-slate-200">

            <div className="flex items-center justify-between mb-5">

              <h2 className="font-bold text-slate-700">
                Ward Status
              </h2>

              <span className="text-xs font-bold text-emerald-600">
                LIVE
              </span>

            </div>

            <div className="space-y-5">

              {/* Emergency */}
              <div className="bg-red-50 border border-red-100 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-3">

                  <div>

                    <p className="font-semibold text-slate-700">
                      Emergency
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      12 active cases
                    </p>

                  </div>

                  <span className="text-2xl">
                    🚨
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-red-100 overflow-hidden">

                  <div className="h-full w-[72%] bg-red-500 rounded-full"></div>

                </div>

              </div>

              {/* Mental */}
              <div className="bg-violet-50 border border-violet-100 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-3">

                  <div>

                    <p className="font-semibold text-slate-700">
                      Mental Health
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      7 active cases
                    </p>

                  </div>

                  <span className="text-2xl">
                    🧠
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-violet-100 overflow-hidden">

                  <div className="h-full w-[45%] bg-violet-500 rounded-full"></div>

                </div>

              </div>

              {/* General */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-3">

                  <div>

                    <p className="font-semibold text-slate-700">
                      General Ward
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      24 active cases
                    </p>

                  </div>

                  <span className="text-2xl">
                    🏥
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-emerald-100 overflow-hidden">

                  <div className="h-full w-[58%] bg-emerald-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Stats */}
          <div className="p-6 grid grid-cols-2 gap-4">

            <div className="bg-white rounded-3xl border border-slate-200 p-5 text-center shadow-sm">

              <div className="text-3xl font-black text-emerald-600">
                127
              </div>

              <div className="text-xs text-slate-400 mt-2">
                Patients
              </div>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 text-center shadow-sm">

              <div className="text-3xl font-black text-red-500">
                36
              </div>

              <div className="text-xs text-slate-400 mt-2">
                Emergency
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="mt-auto p-6 border-t border-slate-200 text-center text-xs text-slate-400">
            🔒 HIPAA-aware · AI Protected
          </div>

        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* TOPBAR */}
          <div className="h-[88px] bg-white/60 backdrop-blur-xl border-b border-white/40 flex items-center px-8">

            <div>

              <h1 className="text-2xl font-black text-slate-800">
                AI Reception Dashboard
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Intelligent patient intake & ward routing
              </p>

            </div>

            {/* LANG */}
            <div className="ml-auto flex items-center gap-3">

              {["en", "hi", "te"].map((l) => (

                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold border transition-all ${
                    lang === l
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                      : "bg-white border-slate-200 text-slate-400"
                  }`}
                >

                  {l.toUpperCase()}

                </button>

              ))}

              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse ml-2"></div>

            </div>

          </div>

          {/* STEP BAR */}
          <StepBar step={step} />

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto px-6 py-6">

            <div className="max-w-5xl mx-auto">

              <ChatArea
                messages={messages}
                isLoading={isLoading}
              />

              {isComplete && patientData && (

                <PatientCard
                  data={patientData}
                  saveStatus={null}
                  onSave={() => {}}
                />

              )}

            </div>

          </div>

          {/* INPUT */}
          <div className="bg-white/70 backdrop-blur-xl border-t border-white/40 p-5">

            <div className="max-w-5xl mx-auto flex items-center gap-4">

              <button
                onClick={handleReset}
                className="px-5 py-4 rounded-3xl border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-all"
              >

                ↺ New

              </button>

              <div className="flex-1 flex items-center bg-white rounded-3xl border border-slate-200 px-5 shadow-sm">

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Describe symptoms or patient issue..."
                  className="flex-1 bg-transparent py-5 outline-none text-sm text-slate-700 placeholder-slate-400"
                />

                <button className="text-slate-400 hover:text-emerald-600 transition-all text-xl">

                  🎤

                </button>

              </div>

              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-14 h-14 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl shadow-xl hover:scale-[1.03] transition-all duration-300 disabled:bg-slate-200 disabled:text-slate-400"
              >

                →

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="hidden xl:flex w-[320px] border-l border-white/40 bg-white/60 backdrop-blur-xl flex-col">

          {/* VITALS */}
          <div className="p-6 border-b border-slate-200">

            <h2 className="font-bold text-slate-700 mb-5">
              Live Vitals
            </h2>

            <div className="space-y-4">

              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5">

                <div className="text-xs text-slate-400 mb-2">
                  HEART RATE
                </div>

                <div className="text-3xl font-black text-emerald-700">
                  72 bpm
                </div>

              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5">

                <div className="text-xs text-slate-400 mb-2">
                  BLOOD PRESSURE
                </div>

                <div className="text-3xl font-black text-slate-700">
                  120/80
                </div>

              </div>

              <div className="bg-red-50 border border-red-100 rounded-3xl p-5">

                <div className="text-xs text-slate-400 mb-2">
                  TEMPERATURE
                </div>

                <div className="text-3xl font-black text-red-500">
                  36.6°C
                </div>

              </div>

            </div>

          </div>

          {/* AI INSIGHT */}
          <div className="p-6">

            <div className="rounded-[32px] bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 p-6 shadow-sm">

              <div className="text-xs font-black tracking-[0.25em] text-emerald-600 mb-4">
                AI INSIGHT
              </div>

              <p className="text-sm text-slate-600 leading-8">

                MedAI is actively analyzing patient conversations,
                detecting emergency patterns, and assisting hospital triage.

              </p>

            </div>

          </div>

          {/* STATS */}
          <div className="mt-auto p-6 border-t border-slate-200 space-y-4">

            <div className="flex items-center justify-between text-sm">

              <span className="text-slate-400">
                Avg Intake Time
              </span>

              <span className="font-bold text-slate-700">
                18s
              </span>

            </div>

            <div className="flex items-center justify-between text-sm">

              <span className="text-slate-400">
                AI Accuracy
              </span>

              <span className="font-bold text-emerald-600">
                98.7%
              </span>

            </div>

            <div className="flex items-center justify-between text-sm">

              <span className="text-slate-400">
                Patients Today
              </span>

              <span className="font-bold text-slate-700">
                127
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}