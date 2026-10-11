import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronRight,
  IconPhone,
  IconPhoneIncoming,
  IconHistory,
  IconArrowUpRight,
  IconFlame,
  IconClock,
  IconCheck,
} from "@tabler/icons-react";

import {
  leads,
  incomingCalls,
  recentCalls,
} from "../data/mockData";

import LeadModal from "../components/leads/LeadModal";

function Plan() {
  const [tab, setTab] = useState("outgoing");
  const [expanded, setExpanded] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [calling, setCalling] = useState(null);

  const callBack = (name) => {
    setCalling(name);

    setTimeout(() => {
      setCalling(null);
    }, 1800);
  };

  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">CALL PLANNING</div>
          <h1>Plan</h1>
          <p>Prioritise the calls that matter most.</p>
        </div>
      </div>

      {/* TABS */}
      <div className="plan-tabs">
        <button
          className={tab === "outgoing" ? "plan-tab active" : "plan-tab"}
          onClick={() => {
            setTab("outgoing");
            setExpanded(null);
          }}
        >
          <IconPhone size={17} />
          <span>Calls to make</span>
          <b>{leads.length}</b>
        </button>

        <button
          className={tab === "incoming" ? "plan-tab active" : "plan-tab"}
          onClick={() => {
            setTab("incoming");
            setExpanded(null);
          }}
        >
          <IconPhoneIncoming size={17} />
          <span>Incoming</span>
          <b className="incoming-count">{incomingCalls.length}</b>
        </button>

        <button
          className={tab === "recent" ? "plan-tab active" : "plan-tab"}
          onClick={() => {
            setTab("recent");
            setExpanded(null);
          }}
        >
          <IconHistory size={17} />
          <span>Recent</span>
        </button>
      </div>

      <section className="panel plan-panel">

        {/* CALLS TO MAKE */}
        {tab === "outgoing" && (
          <>
            <div className="plan-list-header">
              <div>
                <h2>Calls to make</h2>
                <p>Leads ranked by attractiveness score.</p>
              </div>

              <div className="plan-header-stat">
                <strong>{leads.length}</strong>
                <span>priority leads</span>
              </div>
            </div>

            <div className="lead-list">
              {leads.map((lead, index) => {
                const isExpanded = expanded === index;

                return (
                  <div
                    className={`lead-row ${isExpanded ? "expanded" : ""}`}
                    key={lead.id}
                  >
                    <div
                      className="lead-row-main"
                      onClick={() =>
                        setExpanded(isExpanded ? null : index)
                      }
                    >
                      <div className="lead-avatar">
                        {lead.initials}
                      </div>

                      <div className="lead-main-info">
                        <div className="lead-name-line">
                          <strong>{lead.name}</strong>

                          {lead.score >= 90 && (
                            <span className="hot-badge">
                              <IconFlame size={12} />
                              HOT
                            </span>
                          )}
                        </div>

                        <span className="lead-interest">
                          {lead.interest}
                        </span>
                      </div>

                      <div className="lead-score">
                        <strong>{lead.score}</strong>
                        <span>score</span>
                      </div>

                      <IconChevronDown
                        size={19}
                        className={`lead-chevron ${
                          isExpanded ? "open" : ""
                        }`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="lead-expanded">
                        <div className="lead-metrics">
                          <div className="lead-metric">
                            <span>ICP SCORE</span>
                            <strong>{lead.icp}</strong>
                          </div>

                          <div className="lead-metric">
                            <span>INTENT</span>
                            <strong>{lead.intent}</strong>
                          </div>

                          <div className="lead-metric">
                            <span>STATUS</span>
                            <strong className="metric-green">
                              Ready to call
                            </strong>
                          </div>
                        </div>

                        <div className="buying-signals">
                          <span>BUYING SIGNALS</span>

                          <div className="signal-list">
                            {lead.signals.slice(0, 3).map((signal) => (
                              <span key={signal}>
                                <IconCheck size={13} />
                                {signal}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lead-actions">
                          <button
                            className="secondary-action"
                            onClick={() => setLeadIndex(index)}
                          >
                            View lead
                            <IconChevronRight size={15} />
                          </button>

                          <button
                            className="primary-action"
                            onClick={() => callBack(lead.name)}
                          >
                            <IconPhone size={15} />
                            Call now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* INCOMING */}
        {tab === "incoming" && (
          <>
            <div className="plan-list-header">
              <div>
                <h2>Incoming calls</h2>
                <p>Missed calls ranked by value at stake.</p>
              </div>

              <div className="waiting-badge">
                {incomingCalls.length} waiting
              </div>
            </div>

            <div className="incoming-list">
              {incomingCalls.map((call) => (
                <div className="incoming-card" key={call.name}>
                  <div className="lead-avatar">
                    {call.initials}
                  </div>

                  <div className="incoming-info">
                    <strong>{call.name}</strong>
                    <span>{call.reason}</span>
                  </div>

                  <div className="incoming-value">
                    <span>VALUE AT STAKE</span>
                    <strong>{call.value}</strong>
                  </div>

                  <div className="incoming-time">
                    <IconClock size={15} />
                    {call.time}
                  </div>

                  <button
                    className={`primary-action ${
                      calling === call.name ? "calling" : ""
                    }`}
                    onClick={() => callBack(call.name)}
                  >
                    <IconPhone size={15} />

                    {calling === call.name
                      ? "Calling..."
                      : "Call back"}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* RECENT */}
        {tab === "recent" && (
          <>
            <div className="plan-list-header">
              <div>
                <h2>Recent calls</h2>
                <p>Review your latest conversations.</p>
              </div>
            </div>

            <div className="recent-list">
              {recentCalls.map((call) => (
                <div
                  className="recent-card"
                  key={`${call.name}-${call.time}`}
                  onClick={() =>
                    alert(`Opening call review for ${call.name}`)
                  }
                >
                  <div className="lead-avatar">
                    {call.name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="recent-info">
                    <strong>{call.name}</strong>
                    <span>
                      {call.type} · {call.time}
                    </span>
                  </div>

                  <span className="duration">
                    {call.duration}
                  </span>

                  <span
                    className={`result ${
                      call.result
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                    }`}
                  >
                    {call.result}
                  </span>

                  <IconArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {calling && (
        <div className="call-toast">
          <IconPhone size={17} />
          Calling <strong>{calling}</strong>...
        </div>
      )}

      {leadIndex !== null && (
        <LeadModal
          leads={leads}
          index={leadIndex}
          setIndex={setLeadIndex}
          onClose={() => setLeadIndex(null)}
        />
      )}
    </>
  );
}

export default Plan;