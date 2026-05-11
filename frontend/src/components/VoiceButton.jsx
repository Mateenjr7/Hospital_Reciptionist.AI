export default function VoiceButton({ setInput }) {

  const startListening = () => {
    const recognition =
      new window.webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.start();
  };

  return (
    <button
      onClick={startListening}
      className="bg-blue-500 hover:bg-blue-600 px-4 rounded-2xl"
    >
      🎤
    </button>
  );
}