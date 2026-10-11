import React from "react";
import { useState } from "react";
import {
  IconArrowUpRight,
  IconPhone,
  IconUsers,
  IconClock,
  IconMoodSmile,
  IconChevronRight,
  IconCheck,
} from "@tabler/icons-react";

import {
  leads,
  performanceData,
} from "../data/mockData";

import LeadModal from "../components/leads/LeadModal";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [leadIndex, setLeadIndex] = useState(0);

  const openLeads = () => {
    setLeadIndex(0);
    setModalOpen(true);
  };

  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">SUNDAY · 11 OCTOBER</div>
          <h1>Good afternoon, Aayush</h1>
          <p>Here's how your shift is going today.</p>
        </div>

        <button className="outline-btn">
          Today
        </button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-top">
            <span>OG SCORE™</span>
            <IconArrowUpRight size={17} />
          </div>

          <strong>76</strong>

          <div className="positive">+4.2% this week</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <span>AVG HANDLE TIME</span>
            <IconClock size={17} />
          </div>

          <strong>4m 12s</strong>

          <div className="positive">12s faster than target</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <span>CSAT TODAY</span>
            <IconMoodSmile size={17} />
          </div>

          <strong>94%</strong>

          <div className="positive">+3% vs yesterday</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <span>IN QUEUE</span>
            <IconPhone size={17} />
          </div>

          <strong>2</strong>

          <div className="neutral">Both high priority</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="panel progress-panel">
          <div className="panel-header">
            <div>
              <h2>My progress today</h2>
              <p>Keep the momentum going.</p>
            </div>

            <span className="green-pill">On track</span>
          </div>

          <div className="progress-items">
            <div className="progress-item">
              <div className="progress-icon green">
                <IconUsers size={20} />
              </div>

              <div className="progress-text">
                <strong>3</strong>
                <span>Leads created</span>
              </div>

              <span className="progress-change">+1</span>
            </div>

            <div className="progress-item">
              <div className="progress-icon purple">
                <IconPhone size={20} />
              </div>

              <div className="progress-text">
                <strong>2</strong>
                <span>Leads called</span>
              </div>

              <span className="progress-change">+2</span>
            </div>
          </div>

          <div className="progress-bar">
            <span></span>
          </div>

          <div className="progress-footer">
            <span>Daily call target</span>
            <strong>18 / 25</strong>
          </div>
        </section>

        <section className="panel earnings-panel">
          <div className="panel-header">
            <div>
              <h2>Today's earnings</h2>
              <p>Performance-linked earnings.</p>
            </div>
          </div>

          <div className="earnings-value">₹5,200</div>

          <div className="earnings-row">
            <span>Base earnings</span>
            <strong>₹3,500</strong>
          </div>

          <div className="earnings-row">
            <span>Coached moves</span>
            <strong>₹1,700</strong>
          </div>

          <div className="earnings-progress">
            <div>
              <span>Next slab</span>
              <strong>₹800 to ₹6,000</strong>
            </div>

            <div className="small-progress">
              <span></span>
            </div>
          </div>
        </section>
      </div>

      <div className="dashboard-grid lower">
        <section className="panel chart-panel">
          <div className="panel-header">
            <div>
              <h2>Calls this week</h2>
              <p>Completed calls over the last 7 days.</p>
            </div>

            <span className="chart-total">183 calls</span>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6d5dfc" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="#6d5dfc" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} width={30} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="calls"
                  stroke="#6d5dfc"
                  fill="url(#callsGradient)"
                  strokeWidth={2.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="panel waiting-panel">
          <div className="panel-header">
            <div>
              <h2>Who's waiting</h2>
              <p>People who need your attention.</p>
            </div>

            <span className="count-badge">3</span>
          </div>

          {leads.slice(0, 3).map((lead) => (
            <div className="waiting-row" key={lead.id}>
              <div className="small-avatar">{lead.initials}</div>

              <div className="waiting-info">
                <strong>{lead.name}</strong>
                <span>{lead.interest}</span>
              </div>

              <span className="lead-score">{lead.score}</span>
            </div>
          ))}

          <button className="view-all" onClick={openLeads}>
            View all leads
            <IconChevronRight size={16} />
          </button>
        </section>
      </div>

      <section className="panel tasks-panel">
        <div className="panel-header">
          <div>
            <h2>Needs your input</h2>
            <p>Three quick actions waiting for you.</p>
          </div>
        </div>

        <div className="task-grid">
          <div className="task-card">
            <div className="task-icon orange">
              <IconPhone size={18} />
            </div>

            <div>
              <strong>Confirm the 4:30 PM callback</strong>
              <span>Priya Iyer · likely billing dispute</span>
            </div>

            <button className="task-action">
              Confirm
            </button>
          </div>

          <div className="task-card">
            <div className="task-icon purple">
              <IconUsers size={18} />
            </div>

            <div>
              <strong>Call the 2 hot leads</strong>
              <span>Untouched for 24 hours</span>
            </div>

            <button className="task-action">
              Calling
            </button>
          </div>

          <div className="task-card">
            <div className="task-icon green">
              <IconCheck size={18} />
            </div>

            <div>
              <strong>Log this morning's outcome</strong>
              <span>Suresh Nair · plan upgrade</span>
            </div>

            <button className="task-action">
              Done
            </button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <LeadModal
          leads={leads}
          index={leadIndex}
          setIndex={setLeadIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default Dashboard;