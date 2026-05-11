import { useState, useRef } from "react";

import ChatArea from "../components/ChatArea";
import StepBar from "../components/StepBar";
import PatientCard from "../components/PatientCard";
import WardStatus from "../components/WardStatus";
import AnimatedBackground from "../components/AnimatedBackground";

const GREETINGS = {
  en: "Hello! Welcome to City General Hospital. I'm your AI receptionist. May I know your name please?",
  hi: "Namaste! City General Aspatal mein aapka swagat hai. Main aapka AI receptionist hoon.",
  te: "Namaskaram! City General Asupathri ki swaagatam."
};

export default function Chat() {

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: GREETINGS.en
    }
  ]);

  const [input, setInput] = useState("");

  const [lang, setLang] = useState("en");

  const [step, setStep] =
    useState("collect_name");

  const [isLoading, setIsLoading] =
    useState(false);

  const [isComplete, setIsComplete] =
    useState(false);

  const [patientData, setPatientData] =
    useState(null);

  const [saveStatus, setSaveStatus] =
    useState(null);

  const inputRef = useRef(null);

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

    const userInput = input;

    setInput("");

    setIsLoading(true);

    setTimeout(() => {

      let botReply = "";
      let nextStep = step;

      if (step === "collect_name") {

        botReply =
          "Thank you. Please tell me your age.";

        nextStep =
          "collect_age";

      } else if (
        step === "collect_age"
      ) {

        botReply =
          "Please describe your symptoms or reason for visit.";

        nextStep =
          "collect_query";

      } else if (
        step === "collect_query"
      ) {

        const emergencyKeywords = [
          "pain",
          "blood",
          "accident",
          "breathing",
          "heart"
        ];

        const mentalKeywords = [
          "stress",
          "depression",
          "anxiety",
          "panic"
        ];

        let ward =
          "General Ward";

        const lower =
          userInput.toLowerCase();

        if (
          emergencyKeywords.some((k) =>
            lower.includes(k)
          )
        ) {
          ward =
            "Emergency Ward";
        }

        if (
          mentalKeywords.some((k) =>
            lower.includes(k)
          )
        ) {
          ward =
            "Mental Health Ward";
        }

        botReply =
          `AI triage complete. You are assigned to ${ward}.`;

        nextStep =
          "complete";

        setIsComplete(true);

        setPatientData({
          patient_name:
            "Patient",
          patient_age:
            "24",
          patient_query:
            userInput,
          ward,
          timestamp:
            new Date().toISOString()
        });
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: botReply
        }
      ]);

      setStep(nextStep);

      setIsLoading(false);

    }, 1200);
  };

  const handleReset = () => {

    setMessages([
      {
        role: "bot",
        text: GREETINGS[lang]
      }
    ]);

    setInput("");

    setStep("collect_name");

    setIsComplete(false);

    setPatientData(null);

    setSaveStatus(null);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleSave = () => {

    setSaveStatus("saving");

    setTimeout(() => {
      setSaveStatus("ok");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#EEF7FF] overflow-hidden relative">

      <AnimatedBackground />

      <div className="h-screen flex">

        {/* LEFT SIDEBAR */}
        <div className="hidden lg:flex w-[280px] bg-white/70 backdrop-blur-2xl border-r border-white/40 flex-col">

          {/* Logo */}
          <div className="p-6 border-b border-slate-200">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-2xl shadow-lg">
                🏥
              </div>

              <div>

                <h1 className="text-xl font-bold text-slate-800">
                  MedAI
                </h1>

                <p className="text-sm text-slate-400 mt-1">
                  Smart Hospital Platform
                </p>

              </div>

            </div>

          </div>

          {/* Ward Status */}
          <div className="p-5">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-sm font-bold tracking-wide text-slate-700">
                LIVE WARD STATUS
              </h2>

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                <span className="text-xs font-semibold text-emerald-600">
                  LIVE
                </span>

              </div>

            </div>

            <WardStatus />

          </div>

          {/* Footer */}
          <div className="mt-auto p-5 border-t border-slate-200">

            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 p-5">

              <div className="text-xs font-bold tracking-widest text-emerald-600 mb-2">
                AI STATUS
              </div>

              <p className="text-sm text-slate-600 leading-7">
                AI triage system operational with 98.7% routing accuracy.
              </p>

            </div>

          </div>

        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col">

          {/* HEADER */}
          <div className="h-[85px] bg-white/70 backdrop-blur-2xl border-b border-white/40 flex items-center px-7">

            <div>

              <h1 className="text-2xl font-bold text-slate-800">
                AI Receptionist
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Intelligent multilingual patient intake system
              </p>

            </div>

            <div className="ml-auto flex items-center gap-2">

              {["en", "hi", "te"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold border transition-all ${
                    lang === l
                      ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                      : "bg-white text-slate-400 border-slate-200"
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
          <div className="flex-1 overflow-hidden">

            <div className="h-full overflow-y-auto px-6 py-6">

              <div className="max-w-5xl mx-auto">

                <ChatArea
                  messages={messages}
                  isLoading={isLoading}
                />

                {isComplete && patientData && (
                  <PatientCard
                    data={patientData}
                    saveStatus={saveStatus}
                    onSave={handleSave}
                  />
                )}

              </div>

            </div>

          </div>

          {/* INPUT */}
          <div className="bg-white/70 backdrop-blur-2xl border-t border-white/40 p-5">

            <div className="max-w-5xl mx-auto flex gap-3 items-center">

              <button
                onClick={handleReset}
                className="px-5 py-4 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-all"
              >
                ↺ New
              </button>

              <div className="flex-1 flex items-center rounded-[28px] bg-white border border-slate-200 px-5 shadow-sm">

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
                  placeholder="Describe your symptoms or ask something..."
                  className="flex-1 bg-transparent py-4 outline-none text-sm text-slate-700 placeholder-slate-400"
                />

                <button className="text-slate-400 hover:text-emerald-600 transition-all text-lg">
                  🎤
                </button>

              </div>

              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl flex items-center justify-center shadow-lg hover:scale-105 transition-all disabled:opacity-50"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}