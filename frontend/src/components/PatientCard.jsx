export default function PatientCard({
  data,
  saveStatus,
  onSave
}) {

  const ward = data.ward;

  const isEmergency =
    ward === "Emergency Ward";

  const isMental =
    ward === "Mental Health Ward";

  const wardStyles = isEmergency
    ? {
        card:
          "from-red-50 to-red-100 border-red-200",
        badge:
          "bg-red-100 text-red-700 border-red-200",
        icon:
          "🚨",
        accent:
          "text-red-600"
      }
    : isMental
    ? {
        card:
          "from-violet-50 to-violet-100 border-violet-200",
        badge:
          "bg-violet-100 text-violet-700 border-violet-200",
        icon:
          "🧠",
        accent:
          "text-violet-600"
      }
    : {
        card:
          "from-emerald-50 to-emerald-100 border-emerald-200",
        badge:
          "bg-emerald-100 text-emerald-700 border-emerald-200",
        icon:
          "✅",
        accent:
          "text-emerald-600"
      };

  const initials = (
    data.patient_name || "P"
  )
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const payload = JSON.stringify(
    {
      patient_name:
        data.patient_name,

      patient_age:
        data.patient_age,

      patient_query:
        data.patient_query,

      ward:
        data.ward,

      timestamp:
        data.timestamp
    },
    null,
    2
  );

  return (
    <div className="mt-6">

      {/* Main Card */}
      <div className="soft-card rounded-[32px] overflow-hidden border border-white/40 shadow-xl">

        {/* Header */}
        <div
          className={`bg-gradient-to-r ${wardStyles.card} border-b px-6 py-5`}
        >

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="w-16 h-16 rounded-3xl bg-white shadow-md flex items-center justify-center text-lg font-bold text-slate-700">
                {initials}
              </div>

              {/* Patient Info */}
              <div>

                <div className="flex items-center gap-2 flex-wrap">

                  <h2 className="text-xl font-bold text-slate-800">
                    {data.patient_name}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-bold ${wardStyles.badge}`}
                  >
                    {wardStyles.icon} {ward}
                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-1">
                  Patient Intake Summary
                </p>

              </div>

            </div>

            {/* AI Badge */}
            <div className="hidden md:flex items-center gap-2 bg-white/80 px-4 py-2 rounded-2xl border border-white">

              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

              <span className="text-xs font-bold text-slate-600 tracking-wide">
                AI VERIFIED
              </span>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            {/* Age */}
            <div className="bg-white/80 rounded-3xl border border-slate-200 p-5 shadow-sm">

              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Patient Age
              </div>

              <div className="text-3xl font-bold text-slate-800">
                {data.patient_age}
              </div>

              <div className="text-sm text-slate-400 mt-1">
                Years Old
              </div>

            </div>

            {/* Ward */}
            <div className="bg-white/80 rounded-3xl border border-slate-200 p-5 shadow-sm">

              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Assigned Ward
              </div>

              <div className={`text-xl font-bold ${wardStyles.accent}`}>
                {ward}
              </div>

              <div className="text-sm text-slate-400 mt-1">
                AI triage classification
              </div>

            </div>

          </div>

          {/* Symptoms */}
          <div className="bg-white/80 rounded-3xl border border-slate-200 p-5 shadow-sm mb-5">

            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
              Symptoms & Patient Query
            </div>

            <p className="text-slate-700 leading-8 text-sm">
              {data.patient_query}
            </p>

          </div>

          {/* Timestamp */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-5 mb-5">

            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
              Timestamp
            </div>

            <p className="text-sm text-slate-700">
              {new Date(
                data.timestamp
              ).toLocaleString()}
            </p>

          </div>

          {/* AI JSON Output */}
          <div className="mb-5">

            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
              Structured AI Output
            </div>

            <pre className="bg-slate-900 text-emerald-300 rounded-3xl p-5 text-xs overflow-auto max-h-56 leading-6 border border-slate-800">
{payload}
            </pre>

          </div>

          {/* Save Button */}
          <button
            onClick={onSave}
            disabled={
              saveStatus === "saving" ||
              saveStatus === "ok"
            }
            className={`w-full py-4 rounded-3xl font-semibold text-sm transition-all duration-300 shadow-lg ${
              saveStatus === "ok"
                ? "bg-emerald-500 text-white"
                : saveStatus === "saving"
                ? "bg-slate-300 text-slate-600"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:scale-[1.01] hover:shadow-emerald-200"
            }`}
          >

            {saveStatus === "saving"
              ? "⏳ Saving Patient Record..."
              : saveStatus === "ok"
              ? "✓ Saved Successfully"
              : "💾 Save to Database & Send Webhook"}

          </button>

          {/* Success */}
          {saveStatus === "ok" && (
            <div className="mt-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl px-4 py-3 text-sm text-center font-medium">
              ✓ Patient record successfully stored in Supabase.
            </div>
          )}

          {/* Error */}
          {saveStatus === "error" && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-4 py-3 text-sm text-center font-medium">
              ⚠ Failed to save patient record.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
