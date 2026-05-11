export default function SeverityBadge({ severity }) {

  let label = "Low";

  if (severity >= 8) label = "Critical";
  else if (severity >= 5) label = "Moderate";

  return (
    <div className="mt-3">
      <div className="text-sm text-slate-300 mb-1">
        Severity Score
      </div>

      <div className="w-full bg-white/10 rounded-full h-3">
        <div
          className="bg-red-500 h-3 rounded-full"
          style={{ width: `${severity * 10}%` }}
        />
      </div>

      <p className="mt-1 text-sm">{label}</p>
    </div>
  );
}