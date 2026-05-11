import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

/* Smooth scrolling */
document.documentElement.style.scrollBehavior = "smooth";

/* Root */
ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <Router>

      <div className="min-h-screen antialiased text-slate-800">

        <App />

      </div>

    </Router>

  </React.StrictMode>

);