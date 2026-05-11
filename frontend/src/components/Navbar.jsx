import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Info,
  Shield,
  Bell
} from "lucide-react";

export default function Navbar() {

  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={18} />
    },

    {
      name: "Chat",
      path: "/chat",
      icon: <MessageSquare size={18} />
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={18} />
    },

    {
      name: "About",
      path: "/about",
      icon: <Info size={18} />
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/70 backdrop-blur-2xl">

      <div className="max-w-[1600px] mx-auto px-6 h-[78px] flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-10">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-4"
          >

            <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-2xl shadow-lg">
              🏥
            </div>

            <div>

              <h1 className="text-xl font-bold text-slate-800">
                MedAI
              </h1>

              <p className="text-xs text-slate-400 mt-1">
                Hospital Intelligence Platform
              </p>

            </div>

          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-2">

            {navItems.map((item) => {

              const active =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm"
                      : "text-slate-500 hover:bg-white hover:text-slate-700"
                  }`}
                >

                  {item.icon}

                  {item.name}

                </Link>
              );
            })}

          </nav>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* LIVE STATUS */}
          <div className="hidden lg:flex items-center gap-3 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-sm font-semibold text-emerald-700">
              AI System Active
            </span>

          </div>

          {/* SECURITY */}
          <div className="hidden xl:flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-sm">

            <Shield
              size={16}
              className="text-emerald-600"
            />

            <span className="text-sm font-medium text-slate-600">
              HIPAA Protected
            </span>

          </div>

          {/* NOTIFICATIONS */}
          <button className="relative w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm hover:scale-105 transition-all">

            <Bell size={18} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold">
              A
            </div>

            <div className="hidden sm:block">

              <p className="text-sm font-semibold text-slate-700">
                Admin
              </p>

              <p className="text-xs text-slate-400">
                Hospital Staff
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}