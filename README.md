# On-Ground Call Centre

A frontend implementation of the **On-Ground Call Centre staff application**, built as part of the Forward Deployed Engineer / Agentic Engineer assignment.

The application is designed around a call-centre agent's daily workflow: understanding performance, prioritising calls, handling incoming leads, reviewing recent conversations, managing the calendar, and collaborating through the Pulse workspace.

---

## Live Demo

**Live Application:**  
[PASTE YOUR VERCEL URL HERE]

**GitHub Repository:**  
https://github.com/Aayush-Rasaily/onground-call-center

---

## Overview

The application recreates the supplied On-Ground Call Centre mock as a responsive React frontend using sample data.

The implementation focuses on:

- Clear call-centre workflow
- High visual similarity to the supplied reference
- Functional interactions rather than static screens
- Reusable React components
- Client-side state management
- Responsive layout
- Clean and maintainable project structure

No backend or external database is required. All application data is represented using local mock data.

---

## Key Features

### Dashboard

The dashboard provides a quick overview of the agent's current performance and workload.

Implemented:

- OG Score
- Average Handle Time
- CSAT
- Calls currently in queue
- Daily progress
- Leads created
- Leads called
- Today's earnings
- Performance-linked earnings
- Daily status indicators

---

### Plan

The Plan section helps the agent prioritise and manage calls.

#### Calls to Make

- Leads ranked by attractiveness score
- Lead initials and information
- Lead score
- Expandable lead details
- ICP score
- Intent score
- Buying/story signals
- Lead detail modal

#### Incoming

- Missed/incoming calls
- Reason for the call
- Value at stake
- Callback action

#### Recent

- Recent conversations
- Call type
- Call duration
- Call result
- Review interaction

---

### Calendar

The Calendar provides a monthly view for managing scheduled activities.

Implemented:

- Month navigation
- Calendar grid
- Current-day indication
- Scheduled activity indicators
- Today navigation
- Event display

---

### Pulse

Pulse acts as the team communication and AI workspace.

Implemented:

- AvaniBot AI coach section
- Daily Brief interaction
- Ask a Question interaction
- Team channels
- Direct messages
- Unread indicators
- Channel conversation view
- Pinned "Needs Your Input" task
- Task completion interaction
- Message composer
- Sending messages locally
- Active channel state

---

### Lead Details

The lead modal provides a deeper view of individual leads.

Implemented:

- Lead profile
- ICP score
- Lead intent score
- Buying signals
- Lead navigation
- Previous/next lead navigation
- Modal close interaction

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React | UI development |
| Vite | Development server and production build |
| React Router | Client-side navigation |
| JavaScript (JSX) | Application logic |
| CSS | Layout, styling and responsive design |
| Tabler Icons | UI icons |
| Recharts | Data visualisation support |
| Local Mock Data | Frontend-only application data |

---

## Project Structure

```text
onground-call-centre/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── TopBar.jsx
│   │   │
│   │   └── leads/
│   │       └── LeadModal.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Plan.jsx
│   │   ├── Calendar.jsx
│   │   └── Pulse.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── style.css
│
├── index.html
├── package.json
├── README.md
└── .gitignore
