import React, { useState } from "react";
import {
  IconRobot,
  IconSend,
  IconArrowLeft,
  IconSparkles,
  IconHash,
  IconCheck,
  IconMessageCircle,
} from "@tabler/icons-react";

import {
  pulseChannels,
  pulseMessages,
} from "../data/mockData";

function Pulse() {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState(pulseMessages);
  const [text, setText] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages([
      ...messages,
      {
        user: "You",
        initials: "AY",
        text: text.trim(),
        time: "Now",
        own: true,
      },
    ]);

    setText("");
  };

  const openChannel = (channel) => {
    setSelectedChannel(channel);
    setTaskDone(false);
  };

  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">TEAM COMMUNICATION</div>
          <h1>Pulse</h1>
          <p>Your AI-powered team workspace.</p>
        </div>
      </div>

      {/* AVANI */}
      <section className="avani-card">
        <div className="avani-icon">
          <IconRobot size={26} />
        </div>

        <div className="avani-content">
          <div className="always-on">
            <span className="status-dot" />
            ALWAYS ON
          </div>

          <h2>AvaniBot</h2>

          <p>
            Your AI coach for calls, performance and customer
            conversations.
          </p>

          <div className="avani-actions">
            <button
              onClick={() =>
                alert(
                  "Daily brief: 18 calls remaining. CSAT is 94%. Two high-priority leads are waiting."
                )
              }
            >
              <IconSparkles size={16} />
              Daily Brief
            </button>

            <button
              className="avani-light"
              onClick={() =>
                alert(
                  "Try asking: How can I improve my handle time?"
                )
              }
            >
              Ask a question
            </button>
          </div>
        </div>
      </section>

      {/* WORKSPACE */}
      <div className="pulse-workspace">

        {/* SIDEBAR */}
        <section className="panel pulse-sidebar">
          <div className="pulse-sidebar-heading">
            <span>WORKSPACE</span>
          </div>

          <div className="pulse-section-label">
            CHANNELS
          </div>

          {pulseChannels.map((channel) => (
            <button
              className={`channel-row ${
                selectedChannel === channel.name
                  ? "selected"
                  : ""
              }`}
              key={channel.name}
              onClick={() => openChannel(channel.name)}
            >
              <IconHash size={17} />

              <span>{channel.name}</span>

              {channel.unread > 0 && (
                <span className="unread">
                  {channel.unread}
                </span>
              )}
            </button>
          ))}

          <div className="pulse-section-label direct">
            DIRECT MESSAGES
          </div>

          <button className="channel-row">
            <div className="dm-avatar">SM</div>
            <span>Sunita Rao</span>
          </button>

          <button className="channel-row">
            <div className="dm-avatar bot">✨</div>
            <span>Avani</span>
          </button>

          <div className="pulse-mini-card">
            <IconMessageCircle size={18} />

            <div>
              <strong>3 unread</strong>
              <span>Across your channels</span>
            </div>
          </div>
        </section>

        {/* MAIN CHAT */}
        <section className="panel pulse-chat-area">

          {!selectedChannel ? (
            <div className="pulse-empty">
              <div className="pulse-empty-icon">
                <IconSparkles size={28} />
              </div>

              <h2>Stay in the loop</h2>

              <p>
                Open a channel to see team conversations,
                coaching prompts and tasks that need your
                attention.
              </p>

              <div className="summary-stats">
                <div>
                  <strong>3</strong>
                  <span>Unread</span>
                </div>

                <div>
                  <strong>2</strong>
                  <span>Tasks</span>
                </div>

                <div>
                  <strong>18</strong>
                  <span>Members</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* CHAT HEADER */}
              <div className="chat-header">
                <button
                  className="back-btn"
                  onClick={() => setSelectedChannel(null)}
                >
                  <IconArrowLeft size={18} />
                </button>

                <div className="chat-channel-icon">
                  #
                </div>

                <div className="chat-title">
                  <strong>#{selectedChannel}</strong>
                  <span>18 members</span>
                </div>

                <div className="chat-status">
                  <span />
                  Active
                </div>
              </div>

              {/* TASK */}
              <div className="pinned-task">
                <div className="pin-icon">
                  <IconSparkles size={18} />
                </div>

                <div className="pin-content">
                  <span className="pin-label">
                    NEEDS YOUR INPUT
                  </span>

                  <strong>
                    Confirm the 4:30 PM callback
                  </strong>

                  <p>
                    Priya Iyer · likely billing dispute
                  </p>

                  {!taskDone ? (
                    <div className="pin-buttons">
                      <button
                        onClick={() => setTaskDone(true)}
                      >
                        <IconCheck size={14} />
                        Confirm
                      </button>

                      <button
                        className="light"
                        onClick={() => setTaskDone(true)}
                      >
                        Reschedule
                      </button>
                    </div>
                  ) : (
                    <div className="task-complete">
                      <IconCheck size={15} />
                      Task completed
                    </div>
                  )}
                </div>
              </div>

              {/* MESSAGES */}
              <div className="messages">
                {messages.map((message, index) => (
                  <div
                    className={`message-row ${
                      message.own ? "own" : ""
                    }`}
                    key={index}
                  >
                    <div className="message-avatar">
                      {message.initials}
                    </div>

                    <div className="message-content">
                      <div className="message-meta">
                        <strong>{message.user}</strong>
                        <span>{message.time}</span>
                      </div>

                      <div className="message-bubble">
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* COMPOSER */}
              <div className="message-box">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder={`Message #${selectedChannel}...`}
                />

                <button onClick={sendMessage}>
                  <IconSend size={17} />
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Pulse;