import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconLayoutDashboard,
  IconPhone,
  IconCalendar,
  IconActivity,
  IconChevronLeft,
} from "@tabler/icons-react";

export default function Sidebar() {
  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: IconLayoutDashboard,
    },
    {
      label: "Plan",
      path: "/plan",
      icon: IconPhone,
    },
    {
      label: "Calendar",
      path: "/calendar",
      icon: IconCalendar,
    },
    {
      label: "Pulse",
      path: "/pulse",
      icon: IconActivity,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">OG</div>

        <div>
          <div className="logo-title">On-Ground</div>
          <div className="logo-subtitle">CALL CENTRE</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <Icon size={19} stroke={1.8} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="collapse-btn">
          <IconChevronLeft size={18} />
          <span>Collapse</span>
        </button>

        <div className="user-card">
          <div className="user-avatar">AK</div>

          <div>
            <div className="user-name">Aayush</div>
            <div className="user-role">Call Centre</div>
          </div>
        </div>
      </div>
    </aside>
  );
}