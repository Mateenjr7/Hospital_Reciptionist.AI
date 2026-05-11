import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatArea({
  messages,
  isLoading
}) {

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages, isLoading]);

  return (
    <div className="w-full">

      {/* Welcome Banner */}
      <div className="mb-8">

        <div className="soft-card rounded-[28px] p-6 border border-white/40 shadow-sm overflow-hidden relative">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200/20 blur-3xl rounded-full" />

          <div className="relative flex items-center gap-5">

            {/* Icon */}
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-3xl shadow-lg float text-white">
              🤖
            </div>

            {/* Text */}
            <div>

              <div className="flex items-center gap-2 mb-1">

                <h2 className="text-xl font-bold text-slate-800">
                  AI Hospital Receptionist
                </h2>

                <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-widest">
                  LIVE AI
                </span>

              </div>

              <p className="text-sm text-slate-500 leading-7 max-w-2xl">
                Intelligent multilingual patient intake,
                emergency symptom detection,
                real-time ward routing,
                and AI-assisted hospital triage.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Messages Container */}
      <div className="flex flex-col gap-1 pb-6">

        {messages.map((message, index) => (

          <div
            key={index}
            className="message-animate"
          >

            <MessageBubble {...message} />

          </div>

        ))}

        {/* Typing */}
        {isLoading && (

          <div className="message-animate">
            <TypingIndicator />
          </div>

        )}

        {/* Bottom Scroll Ref */}
        <div
          ref={bottomRef}
          className="h-2"
        />

      </div>

    </div>
  );
}