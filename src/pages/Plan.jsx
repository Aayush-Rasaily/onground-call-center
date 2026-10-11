import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronRight,
  IconPhone,
  IconPhoneIncoming,
  IconHistory,
  IconArrowUpRight,
  IconClock,
} from "@tabler/icons-react";

import {
  leads,
  incomingCalls,
  recentCalls,
} from "../data/mockData";

import LeadModal from "../components/leads/LeadModal";
import CallPanel from "../components/calls/CallPanel";

function Plan() {
  const [tab, setTab] = useState("outgoing");
  const [expanded, setExpanded] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [activeCall, setActiveCall] = useState(null);

  const startHumanCall = (call) => {
    setActiveCall({
      name: call.name,
      phone: call.phone,
      mode: "human",
    });
  };

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-heading">
        <div>
          <div className="eyebrow">CALL PLANNING</div>
          <h1>Plan</h1>
          <p>Prioritise the calls that matter most.</p>
        </div>

        <div className="plan-summary">
          <div>
            <strong>{leads.length}</strong>
            <span>Calls planned</span>
          </div>

          <div>
            <strong>{incomingCalls.length}</strong>
            <span>Incoming</span>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button
          className={tab === "outgoing" ? "tab active" : "tab"}
          onClick={() => setTab("outgoing")}
        >
          <IconPhone size={17} />
          Calls to make
          <span className="tab-count">{leads.length}</span>
        </button>

        <button
          className={tab === "incoming" ? "tab active" : "tab"}
          onClick={() => setTab("incoming")}
        >
          <IconPhoneIncoming size={17} />
          Incoming
          <span className="tab-count">{incomingCalls.length}</span>
        </button>

        <button
          className={tab === "recent" ? "tab active" : "tab"}
          onClick={() => setTab("recent")}
        >
          <IconHistory size={17} />
          Recent
        </button>
      </div>

      {/* MAIN PANEL */}
      <section className="panel plan-panel">

        {/* =========================
            CALLS TO MAKE
        ========================== */}
        {tab === "outgoing" && (
          <>
            <div className="list-heading">
              <div>
                <h2>Calls to make</h2>
                <p>
                  Start with the leads showing the strongest buying signals.
                </p>
              </div>

              <span className="muted-count">
                {leads.length} leads
              </span>
            </div>

            <div className="call-list">
              {leads.map((lead, index) => (
                <div className="call-item" key={lead.id}>

                  <div
                    className="call-main"
                    onClick={() =>
                      setExpanded(
                        expanded === index ? null : index
                      )
                    }
                  >
                    <div className="small-avatar">
                      {lead.initials}
                    </div>

                    <div className="call-person">
                      <strong>{lead.name}</strong>
                      <span>{lead.interest}</span>
                    </div>

                    <div className="score-block">
                      <strong>{lead.score}</strong>
                      <span>score</span>
                    </div>

                    <IconChevronDown
                      size={18}
                      className={
                        expanded === index ? "rotate" : ""
                      }
                    />
                  </div>

                  {expanded === index && (
                    <div className="expanded-call">

                      <div className="detail-column">
                        <span>ICP</span>
                        <strong>{lead.icp}</strong>
                      </div>

                      <div className="detail-column">
                        <span>Intent</span>
                        <strong>{lead.intent}</strong>
                      </div>

                      <div className="detail-story">
                        <span>Buying signals</span>
                        <p>
                          {lead.signals?.slice(0, 2).join(" · ") ||
                            "Strong engagement and recent interest"}
                        </p>
                      </div>

                      <div className="expanded-actions">
                        <button
                          className="small-primary"
                          onClick={(event) => {
                            event.stopPropagation();
                            setLeadIndex(index);
                          }}
                        >
                          View lead
                          <IconChevronRight size={15} />
                        </button>

                        <button
                          className="small-call-btn"
                          onClick={(event) => {
                            event.stopPropagation();

                            startHumanCall({
                              name: lead.name,
                              phone:
                                lead.phone ||
                                "+919876543210",
                            });
                          }}
                        >
                          <IconPhone size={15} />
                          Call lead
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* =========================
            INCOMING
        ========================== */}
        {tab === "incoming" && (
          <>
            <div className="list-heading">
              <div>
                <h2>Incoming</h2>
                <p>
                  Missed calls ranked by value at stake.
                </p>
              </div>

              <span className="green-pill">
                {incomingCalls.length} waiting
              </span>
            </div>

            <div className="call-list">

              {incomingCalls.map((call) => (
                <div
                  className="incoming-row"
                  key={`${call.name}-${call.time}`}
                >

                  <div className="small-avatar">
                    {call.initials}
                  </div>

                  <div className="call-person">
                    <strong>{call.name}</strong>
                    <span>{call.reason}</span>
                  </div>

                  <div className="value-at-stake">
                    <strong>{call.value}</strong>

                    <span>
                      <IconClock size={13} />
                      {call.time}
                    </span>
                  </div>

                  <button
                    className="callback-btn"
                    onClick={() => startHumanCall(call)}
                  >
                    <IconPhone size={16} />
                    Call back
                  </button>

                </div>
              ))}

            </div>
          </>
        )}

        {/* =========================
            RECENT
        ========================== */}
        {tab === "recent" && (
          <>
            <div className="list-heading">
              <div>
                <h2>Recent calls</h2>
                <p>
                  Review your latest conversations.
                </p>
              </div>

              <span className="muted-count">
                {recentCalls.length} calls
              </span>
            </div>

            <div className="call-list">

              {recentCalls.map((call) => (
                <div
                  className="recent-row"
                  key={`${call.name}-${call.time}`}
                >

                  <div className="small-avatar">
                    {call.name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="call-person">
                    <strong>{call.name}</strong>

                    <span>
                      {call.type} · {call.time}
                    </span>
                  </div>

                  <span className="duration">
                    {call.duration}
                  </span>

                  <span
                    className={`result ${call.result
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {call.result}
                  </span>

                  <IconArrowUpRight size={17} />

                </div>
              ))}

            </div>
          </>
        )}
      </section>

      {/* LEAD MODAL */}
      {leadIndex !== null && (
        <LeadModal
          leads={leads}
          index={leadIndex}
          setIndex={setLeadIndex}
          onClose={() => setLeadIndex(null)}
        />
      )}

      {/* REAL HUMAN CALL PANEL */}
      {activeCall && (
        <CallPanel
          name={activeCall.name}
          phone={activeCall.phone}
          mode={activeCall.mode}
          onClose={() => setActiveCall(null)}
        />
      )}
    </>
  );
}

export default Plan;