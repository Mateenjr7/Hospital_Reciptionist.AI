const API_BASE =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

/* ------------------------------------------------ */
/* Generic Request Helper */
/* ------------------------------------------------ */

async function request(
  endpoint,
  options = {}
) {

  try {

    const response = await fetch(
      `${API_BASE}${endpoint}`,
      {
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {})
        },

        ...options
      }
    );

    const data =
      await response.json();

    if (!response.ok) {

      throw new Error(
        data?.message ||
        data?.error ||
        "Request failed"
      );

    }

    return data;

  } catch (error) {

    console.error(
      `API Error (${endpoint}):`,
      error
    );

    throw error;
  }
}

/* ------------------------------------------------ */
/* Emergency Detection */
/* ------------------------------------------------ */

const EMERGENCY_KEYWORDS = [

  "heart attack",
  "stroke",
  "bleeding",
  "unconscious",
  "can't breathe",
  "cannot breathe",
  "seizure",
  "critical",
  "overdose",
  "fracture",
  "chest pain",
  "head injury",
  "trauma",
  "poisoning",

  // Hindi
  "saans nahi",
  "behosh",
  "seene mein dard",

  // Telugu
  "noppi",
  "gundello noppi"

];

/* ------------------------------------------------ */
/* Mental Health Detection */
/* ------------------------------------------------ */

const MENTAL_KEYWORDS = [

  "depression",
  "anxiety",
  "suicidal",
  "panic attack",
  "stress",
  "hallucination",
  "self harm",
  "mental health",
  "ptsd",
  "bipolar",

  // Hindi
  "udaas",

  // Telugu
  "badha"

];

/* ------------------------------------------------ */
/* Local AI Helpers */
/* ------------------------------------------------ */

export function detectEmergency(
  text = ""
) {

  const lower =
    text.toLowerCase();

  return EMERGENCY_KEYWORDS.some(
    (keyword) =>
      lower.includes(keyword)
  );
}

export function detectMentalHealth(
  text = ""
) {

  const lower =
    text.toLowerCase();

  return MENTAL_KEYWORDS.some(
    (keyword) =>
      lower.includes(keyword)
  );
}

/* ------------------------------------------------ */
/* AI Ward Classification */
/* ------------------------------------------------ */

export async function classifyWard(
  symptoms
) {

  if (
    detectEmergency(symptoms)
  ) {

    return {
      ward:
        "Emergency Ward",
      confidence: 0.98,
      source: "local-ai"
    };
  }

  if (
    detectMentalHealth(symptoms)
  ) {

    return {
      ward:
        "Mental Health Ward",
      confidence: 0.94,
      source: "local-ai"
    };
  }

  try {

    return await request(
      "/triage",
      {
        method: "POST",

        body: JSON.stringify({
          symptoms
        })
      }
    );

  } catch {

    return {
      ward:
        "General Ward",
      confidence: 0.72,
      source: "fallback"
    };
  }
}

/* ------------------------------------------------ */
/* Chat with AI */
/* ------------------------------------------------ */

export async function triagePatient(
  payload
) {

  return request(
    "/chat",
    {
      method: "POST",

      body: JSON.stringify(
        payload
      )
    }
  );
}

/* ------------------------------------------------ */
/* Save Patient */
/* ------------------------------------------------ */

export async function submitPatient(
  patientData
) {

  return request(
    "/patient",
    {
      method: "POST",

      body: JSON.stringify(
        patientData
      )
    }
  );
}

/* ------------------------------------------------ */
/* Speech-to-Text */
/* ------------------------------------------------ */

export async function speechToText(
  audioBlob
) {

  const formData =
    new FormData();

  formData.append(
    "audio",
    audioBlob
  );

  const response =
    await fetch(
      `${API_BASE}/speech-to-text`,
      {
        method: "POST",
        body: formData
      }
    );

  if (!response.ok) {

    throw new Error(
      "Speech recognition failed"
    );
  }

  return response.json();
}

/* ------------------------------------------------ */
/* Health Check */
/* ------------------------------------------------ */

export async function pingServer() {

  try {

    return await request(
      "/health"
    );

  } catch {

    return {
      status: "offline"
    };
  }
}