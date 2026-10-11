import React from "react";
import { useState } from "react";
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconPhone,
} from "@tabler/icons-react";

function LeadModal({ leads, index, setIndex, onClose }) {
  const [showSignals, setShowSignals] = useState(true);

  const lead = leads[index];

  const previous = () => {
    setIndex((current) => Math.max(0, current - 1));
  };

  const next = () => {
    setIndex((current) => Math.min(leads.length - 1, current + 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-eyebrow">LEAD DETAILS</div>
            <h2>{lead.name}</h2>
          </div>

          <button className="close-btn" onClick={onClose}>
            <IconX size={19} />
          </button>
        </div>

        <div className="lead-profile">
          <div className="big-avatar">{lead.initials}</div>

          <div>
            <strong>{lead.interest}</strong>
            <span>{lead.company}</span>
            <span>{lead.phone}</span>
          </div>

          <div className={`status ${lead.status.toLowerCase()}`}>
            {lead.status}
          </div>
        </div>

        <div className="score-grid">
          <div className="score-card">
            <span>ICP SCORE</span>
            <strong>{lead.icp}</strong>
            <small>Fit with ideal customer</small>
          </div>

          <div className="score-card">
            <span>INTENT SCORE</span>
            <strong>{lead.intent}</strong>
            <small>Purchase intent</small>
          </div>
        </div>

        <div
          className="signals-header"
          onClick={() => setShowSignals(!showSignals)}
        >
          <div>
            <strong>Buying signals</strong>
            <span>What we know about this lead</span>
          </div>

          <IconChevronDown
            size={18}
            className={showSignals ? "rotate" : ""}
          />
        </div>

        {showSignals && (
          <div className="signals-list">
            {lead.signals.map((signal, i) => (
              <div className="signal" key={i}>
                <span>✓</span>
                {signal}
              </div>
            ))}
          </div>
        )}

        <div className="modal-actions">
          <button
            className="secondary-btn"
            onClick={previous}
            disabled={index === 0}
          >
            <IconChevronLeft size={17} />
            Previous
          </button>

          <div className="modal-counter">
            {index + 1} / {leads.length}
          </div>

          <button
            className="primary-btn"
            onClick={next}
            disabled={index === leads.length - 1}
          >
            Next
            <IconChevronRight size={17} />
          </button>
        </div>

        <button className="call-lead-btn" onClick={() => alert(`Calling ${lead.name}`)}>
          <IconPhone size={17} />
          Call {lead.name}
        </button>
      </div>
    </div>
  );
}

export default LeadModal;