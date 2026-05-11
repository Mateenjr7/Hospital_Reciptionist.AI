export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Blob 1 */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-emerald-300/30 rounded-full blur-[100px] animate-pulse" />

      {/* Blob 2 */}
      <div className="absolute bottom-[-160px] right-[-120px] w-[460px] h-[460px] bg-cyan-300/30 rounded-full blur-[100px] animate-pulse" />

      {/* Blob 3 */}
      <div className="absolute top-[30%] right-[20%] w-[260px] h-[260px] bg-blue-200/20 rounded-full blur-[80px] float" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

    </div>
  );
}
