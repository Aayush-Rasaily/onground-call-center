import React from "react";
import { useLocation } from "react-router-dom";
import {
  IconSearch,
  IconBell,
  IconChevronDown,
} from "@tabler/icons-react";

export default function TopBar() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/plan": "Plan",
    "/calendar": "Calendar",
    "/pulse": "Pulse",
  };

  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="page-context">
          <span className="page-label">CALL CENTRE</span>
          <span className="page-title">{pageTitle}</span>
        </div>
      </div>

      <div className="topbar-right">
        <button className="topbar-icon">
          <IconSearch size={19} />
        </button>

        <button className="topbar-icon notification">
          <IconBell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="topbar-user">
          <div className="user-avatar small">AK</div>

          <div className="topbar-user-info">
            <span className="topbar-user-name">Aayush</span>
            <span className="topbar-user-role">Agent</span>
          </div>

          <IconChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}