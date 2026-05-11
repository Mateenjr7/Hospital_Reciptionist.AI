export default function MessageBubble({
  role,
  text,
  wardClass
}) {

  const isBot = role === "bot";

  const bubbleStyles = isBot
    ? wardClass === "emergency"
      ? "bg-red-50 border border-red-200 text-red-800"
      : wardClass === "mental"
      ? "bg-violet-50 border border-violet-200 text-violet-800"
      : wardClass === "general"
      ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
      : "bg-white/90 border border-slate-200 text-slate-700 backdrop-blur-xl"
    : "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg";

  const avatarStyles = isBot
    ? wardClass === "emergency"
      ? "bg-red-100 text-red-600"
      : wardClass === "mental"
      ? "bg-violet-100 text-violet-600"
      : "bg-emerald-100 text-emerald-700"
    : "bg-blue-100 text-blue-700";

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div
      className={`flex items-end gap-3 mb-5 message-animate ${
        !isBot ? "flex-row-reverse" : ""
      }`}
    >

      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center text-sm shadow-sm ${avatarStyles}`}
      >
        {isBot ? "🏥" : "👤"}
      </div>

      {/* Bubble */}
      <div className="max-w-[78%]">

        <div
          className={`px-4 py-3 rounded-3xl text-sm leading-7 shadow-sm ${bubbleStyles} ${
            isBot
              ? "rounded-bl-md"
              : "rounded-br-md"
          }`}
        >

          <div
            dangerouslySetInnerHTML={{
              __html: text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              )
            }}
          />

        </div>

        {/* Time */}
        <div
          className={`text-[11px] text-slate-400 mt-1 px-2 ${
            !isBot ? "text-right" : ""
          }`}
        >
          {currentTime}
        </div>

      </div>

    </div>
  );
}