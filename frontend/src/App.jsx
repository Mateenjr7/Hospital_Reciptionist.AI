import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ChatPage from "./components/ChatPage";
import AnalyticsPage from "./components/AnalyticsPage";
import AboutPage from "./components/AboutPage";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-[#EAF4FD] relative">
      <AnimatedBackground />

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
