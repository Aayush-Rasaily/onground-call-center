// ==========================================
// ON-GROUND CALL CENTRE - MOCK DATA
// ==========================================

// ------------------------------------------
// LEADS
// ------------------------------------------

export const leads = [{
        id: 1,
        name: "Priya Iyer",
        initials: "PI",
        interest: "Premium plan upgrade",
        score: 94,
        icp: 96,
        intent: 92,
        phone: "+919876543210",
        signals: [
            "Visited premium plan page twice",
            "Requested pricing information",
            "Engaged with follow-up message",
        ],
    },

    {
        id: 2,
        name: "Rohan Mehta",
        initials: "RM",
        interest: "New product enquiry",
        score: 89,
        icp: 91,
        intent: 87,
        phone: "+919876543211",
        signals: [
            "High-value product viewed",
            "Requested a callback",
            "Compared two product options",
        ],
    },

    {
        id: 3,
        name: "Ananya Shah",
        initials: "AS",
        interest: "Enterprise package",
        score: 86,
        icp: 88,
        intent: 84,
        phone: "+919876543212",
        signals: [
            "Downloaded product brochure",
            "Asked about enterprise pricing",
            "Returned to product page",
        ],
    },

    {
        id: 4,
        name: "Vikram Rao",
        initials: "VR",
        interest: "Product follow-up",
        score: 82,
        icp: 85,
        intent: 80,
        phone: "+919876543213",
        signals: [
            "Requested product information",
            "Opened follow-up message",
            "Previously engaged with sales team",
        ],
    },

    {
        id: 5,
        name: "Suresh Nair",
        initials: "SN",
        interest: "Plan upgrade",
        score: 78,
        icp: 81,
        intent: 76,
        phone: "+919876543214",
        signals: [
            "Asked about upgrade options",
            "Existing customer",
            "Positive previous interaction",
        ],
    },
];


// ------------------------------------------
// INCOMING CALLS
// ------------------------------------------

export const incomingCalls = [{
        name: "Priya Iyer",
        initials: "PI",
        reason: "Likely billing dispute",
        value: "₹48,000",
        time: "4:30 PM",
        phone: "+919876543210",
    },

    {
        name: "Rohan Mehta",
        initials: "RM",
        reason: "Product enquiry",
        value: "₹35,000",
        time: "4:45 PM",
        phone: "+919876543211",
    },

    {
        name: "Ananya Shah",
        initials: "AS",
        reason: "Callback requested",
        value: "₹28,000",
        time: "5:10 PM",
        phone: "+919876543212",
    },

    {
        name: "Vikram Rao",
        initials: "VR",
        reason: "Order follow-up",
        value: "₹21,000",
        time: "5:30 PM",
        phone: "+919876543213",
    },
];


// ------------------------------------------
// RECENT CALLS
// ------------------------------------------

export const recentCalls = [{
        name: "Suresh Nair",
        type: "Outgoing",
        time: "Today · 11:42 AM",
        duration: "5m 18s",
        result: "Converted",
    },

    {
        name: "Meera Kapoor",
        type: "Incoming",
        time: "Today · 10:35 AM",
        duration: "3m 42s",
        result: "Follow-up",
    },

    {
        name: "Arjun Menon",
        type: "Outgoing",
        time: "Today · 9:50 AM",
        duration: "4m 12s",
        result: "Interested",
    },

    {
        name: "Neha Sharma",
        type: "Incoming",
        time: "Yesterday · 6:20 PM",
        duration: "6m 04s",
        result: "Resolved",
    },

    {
        name: "Karan Shah",
        type: "Outgoing",
        time: "Yesterday · 5:45 PM",
        duration: "2m 51s",
        result: "Follow-up",
    },
];


// ------------------------------------------
// DASHBOARD CHART DATA
// ------------------------------------------

export const performanceData = [{
        day: "Mon",
        calls: 21,
    },

    {
        day: "Tue",
        calls: 28,
    },

    {
        day: "Wed",
        calls: 24,
    },

    {
        day: "Thu",
        calls: 31,
    },

    {
        day: "Fri",
        calls: 29,
    },

    {
        day: "Sat",
        calls: 27,
    },

    {
        day: "Sun",
        calls: 23,
    },
];


// ------------------------------------------
// PULSE CHANNELS
// ------------------------------------------

export const pulseChannels = [{
        name: "callcentre-team",
        unread: 3,
    },

    {
        name: "all-stores",
        unread: 1,
    },

    {
        name: "avani-coaching",
        unread: 2,
    },
];


// ------------------------------------------
// PULSE MESSAGES
// ------------------------------------------

export const pulseMessages = [{
        user: "Sunita Rao",
        initials: "SR",
        text: "Priya Iyer needs a callback before 4:30 PM regarding her billing concern.",
        time: "3:42 PM",
        own: false,
    },

    {
        user: "Avani",
        initials: "AI",
        text: "Suggested resolution: confirm the disputed charge and offer a priority review.",
        time: "3:45 PM",
        own: false,
    },

    {
        user: "You",
        initials: "AY",
        text: "I'll take this one and confirm the callback.",
        time: "3:48 PM",
        own: false,
    },
];


// ------------------------------------------
// CALENDAR EVENTS
// ------------------------------------------

export const calendarEvents = [{
        date: "2026-10-11",
        title: "Priya callback",
        time: "4:30 PM",
        type: "callback",
    },

    {
        date: "2026-10-12",
        title: "Team coaching",
        time: "10:00 AM",
        type: "coaching",
    },

    {
        date: "2026-10-14",
        title: "Lead review",
        time: "2:00 PM",
        type: "review",
    },

    {
        date: "2026-10-16",
        title: "Performance review",
        time: "4:00 PM",
        type: "review",
    },

    {
        date: "2026-10-20",
        title: "Store coordination",
        time: "11:30 AM",
        type: "meeting",
    },
];