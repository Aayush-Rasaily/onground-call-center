import React, { useState } from "react";
import { IconPhone, IconPhoneOff, IconX } from "@tabler/icons-react";

export default function CallPanel({ name, phone, onClose }) {
  const [status, setStatus] = useState("ready");

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  const startCall = () => {
    setStatus("calling");

    // Opens the device's native phone/dialer application.
    window.location.href = `tel:${phone}`;
  };

  const endCall = () => {
    setStatus("ended");
  };

  return (
    <div className="call-overlay">
      <div className="call-card">
        <button className="call-close" onClick={onClose}>
          <IconX size={18} />
        </button>

        <div className="call-avatar">{initials}</div>

        <span className="call-label">HUMAN-TO-HUMAN CALL</span>

        <h2>{name}</h2>
        <p>{phone}</p>

        <div className={`call-status ${status}`}>
          {status === "ready" && "Ready to call"}
          {status === "calling" && "Opening phone…"}
          {status === "ended" && "Call ended"}
        </div>

        {status === "ready" && (
          <button className="call-primary" onClick={startCall}>
            <IconPhone size={20} />
            Call {name}
          </button>
        )}

        {status === "calling" && (
          <a
            className="call-primary"
            href={`tel:${phone}`}
            onClick={() => setStatus("calling")}
          >
            <IconPhone size={20} />
            Open phone & call
          </a>
        )}

        {status === "ended" && (
          <button className="call-end" onClick={onClose}>
            <IconPhoneOff size={20} />
            Close
          </button>
        )}

        <small>
          The call is placed through your device's native phone handler.
        </small>
      </div>
    </div>
  );
}