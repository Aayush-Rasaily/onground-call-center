import { useEffect, useRef, useState } from "react";
import {
  IconPhone,
  IconPhoneOff,
  IconRobot,
  IconMicrophone,
  IconMicrophoneOff,
  IconX,
} from "@tabler/icons-react";

export default function CallPanel({ name, phone, mode = "human", onClose }) {
  const [status, setStatus] = useState("connecting");
  const [muted, setMuted] = useState(false);
  const recognitionRef = useRef(null);

  const isAI = mode === "ai";

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("connected");

      if (isAI) {
        speak(
          `Hello ${name}. This is Avani, your On-Ground AI assistant. ` +
          `I am calling to help with your customer follow-up. ` +
          `How can I help you today?`
        );
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis?.cancel();
      recognitionRef.current?.stop();
    };
  }, []);

  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      speak("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;

      if (text.toLowerCase().includes("thank")) {
        speak("You're welcome. Have a great day.");
      } else if (text.toLowerCase().includes("price")) {
        speak(
          "I can help with that. One of our team members can share the latest pricing details with you."
        );
      } else {
        speak(
          `I heard you say ${text}. I have noted that and our team can follow up with you.`
        );
      }
    };

    recognition.onerror = () => {
      speak("I couldn't hear that clearly. Please try again.");
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const startHumanCall = () => {
    if (!phone) return;

    window.location.href = `tel:${phone}`;
  };

  const endCall = () => {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    setStatus("ended");

    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div className="call-overlay">
      <div className="call-panel">
        <button className="call-close" onClick={endCall}>
          <IconX size={18} />
        </button>

        <div className={`call-avatar ${isAI ? "ai" : ""}`}>
          {isAI ? <IconRobot size={34} /> : name?.slice(0, 2).toUpperCase()}
        </div>

        <div className="call-name">{name}</div>

        <div className="call-type">
          {isAI ? "Avani AI Voice Call" : phone}
        </div>

        <div className={`call-status ${status}`}>
          <span></span>
          {status === "connecting" && "Connecting..."}
          {status === "connected" && "Connected"}
          {status === "ended" && "Call ended"}
        </div>

        {status === "connected" && isAI && (
          <div className="voice-card">
            <IconRobot size={22} />
            <div>
              <strong>Avani is listening</strong>
              <p>Speak naturally to continue the conversation.</p>
            </div>
          </div>
        )}

        <div className="call-actions">
          {status === "connected" && isAI && (
            <>
              <button
                className={`call-action ${muted ? "active" : ""}`}
                onClick={() => setMuted(!muted)}
              >
                {muted ? (
                  <IconMicrophoneOff size={20} />
                ) : (
                  <IconMicrophone size={20} />
                )}
                <span>{muted ? "Unmute" : "Mute"}</span>
              </button>

              <button
                className="call-action primary"
                onClick={startListening}
                disabled={muted}
              >
                <IconMicrophone size={20} />
                <span>Speak</span>
              </button>
            </>
          )}

          {status === "connected" && !isAI && (
            <button className="call-action primary" onClick={startHumanCall}>
              <IconPhone size={20} />
              <span>Open phone</span>
            </button>
          )}

          {status !== "ended" && (
            <button className="call-action danger" onClick={endCall}>
              <IconPhoneOff size={20} />
              <span>End call</span>
            </button>
          )}
        </div>

        {isAI && status === "connected" && (
          <p className="call-note">
            Browser voice interaction powered by Web Speech API.
          </p>
        )}
      </div>
    </div>
  );
}