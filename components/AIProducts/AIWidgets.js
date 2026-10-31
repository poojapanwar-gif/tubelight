import React from "react";
import styles from "../../styles/AIProductWidgets.module.scss";

/* ---------- Hero: capture → understand → route diagram (ticketing) ---------- */
export const TicketingDiagram = () => (
  <div className={styles["diagram"]} role="img" aria-label="AI captures a request, understands it, and routes it to Billing, Tech or Account teams">
    <div className={styles["diagram-labels"]}>
      <span>1 · CAPTURE</span>
      <span>2 · UNDERSTAND</span>
      <span>3 · ROUTE</span>
    </div>
    <div className={styles["diagram-body"]}>
      <span className={styles["diagram-input"]}>Call no signal</span>
      <span className={styles["diagram-ai"]}>
        <strong>AI</strong>
        <small>classify · prioritize</small>
      </span>
      <div className={styles["diagram-routes"]}>
        <div className={styles["diagram-route"]}>
          <span className={[styles["diagram-ticket"], styles["is-red"]].join(" ")}>
            <b>#2041</b>
            <i>High</i>
          </span>
          <span className={styles["diagram-node"]}>Billing</span>
        </div>
        <div className={styles["diagram-route"]}>
          <span className={styles["diagram-node"]}>Tech</span>
        </div>
        <div className={styles["diagram-route"]}>
          <span className={[styles["diagram-ticket"], styles["is-green"]].join(" ")}>
            <b>#2043 Access</b>
            <i>Auto-resolved</i>
          </span>
          <span className={styles["diagram-node"]}>Acct</span>
        </div>
      </div>
    </div>
    <div className={styles["diagram-sla"]}>
      <span className={styles["diagram-sla-fill"]} />
      <span className={styles["diagram-sla-text"]}>SLA healthy · live monitoring</span>
    </div>
  </div>
);

/* ---------- Platform section: ticket mock card (ticketing) ---------- */
export const TicketCard = () => (
  <div className={styles["ticket"]}>
    <div className={styles["ticket-head"]}>
      <strong>Ticket #2041</strong>
      <div className={styles["ticket-chips"]}>
        <span className={[styles["chip"], styles["chip-red"]].join(" ")}>High</span>
        <span className={[styles["chip"], styles["chip-blue"]].join(" ")}>Billing</span>
      </div>
    </div>
    <p className={styles["ticket-quote"]}>
      &ldquo;I was charged twice for my plan this month. Can you fix this?&rdquo;
    </p>
    <div className={styles["ticket-summary"]}>
      <span className={styles["ticket-summary-label"]}>✦ AI SUMMARY</span>
      <p>
        Duplicate charge reported. Customer on annual plan. Suggest refund
        workflow and notify billing team.
      </p>
    </div>
    <div className={styles["ticket-chips"]}>
      <span className={[styles["chip"], styles["chip-green"]].join(" ")}>
        Assigned: Billing Team
      </span>
      <span className={[styles["chip"], styles["chip-orange"]].join(" ")}>
        SLA: 2h 14m left
      </span>
    </div>
  </div>
);

/* ---------- Key feature card widgets ---------- */
const pills = ["Customer Details", "Conversation context", "Issue summary"];
const priorities = [
  { label: "Urgent", tone: "red" },
  { label: "Billing", tone: "yellow" },
  { label: "Low", tone: "green" },
  { label: "Access", tone: "blue" },
];
const assignees = [
  { name: "Asha", value: 46 },
  { name: "Rahul", value: 64 },
];
const history = ["Customer message received", "Ticket created & routed", "Agent replied"];
const bars = [28, 44, 35, 56, 41, 50, 31, 59];

export const FeatureWidget = ({ type }) => {
  switch (type) {
    case "pills":
      return (
        <ul className={styles["pills"]}>
          {pills.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      );
    case "priority":
      return (
        <ul className={styles["priority"]}>
          {priorities.map((p) => (
            <li key={p.label} className={styles[`tone-${p.tone}`]}>
              {p.label}
            </li>
          ))}
        </ul>
      );
    case "assignees":
      return (
        <ul className={styles["assignees"]}>
          {assignees.map((a) => (
            <li key={a.name}>
              <span className={styles["avatar"]} aria-hidden="true">
                {a.name[0]}
              </span>
              <span className={styles["assignee-name"]}>{a.name}</span>
              <span className={styles["progress"]} aria-hidden="true">
                <span style={{ width: `${a.value}%` }} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "suggested":
      return (
        <span className={styles["suggested"]}>
          <span aria-hidden="true">✦</span> Suggested reply ready
        </span>
      );
    case "sla":
      return (
        <span className={styles["sla-ring"]} style={{ "--p": 72 }}>
          <span>72%</span>
        </span>
      );
    case "history":
      return (
        <ul className={styles["history"]}>
          {history.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      );
    case "bars":
      return (
        <div className={styles["bars"]} aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      );
    default:
      return null;
  }
};
