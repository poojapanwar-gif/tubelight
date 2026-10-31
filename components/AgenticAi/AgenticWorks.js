import React from "react";
import styles from "../../styles/AgenticWorks.module.scss";

export const ticketingWorksCards = [
  {
    icon: "01",
    title: "Capture",
    detail: "Receive a customer request through an enabled channel.",
  },
  {
    icon: "02",
    title: "Understand",
    detail:
      "Use AI and configured rules to identify the issue and summarize the interaction.",
  },
  {
    icon: "03",
    title: "Create",
    detail: "Generate a ticket with relevant details and category.",
  },
  {
    icon: "04",
    title: "Route",
    detail: "Assign it to the appropriate team or agent.",
  },
  {
    icon: "05",
    title: "Resolve",
    detail: "Assist the agent or automate eligible actions.",
  },
  {
    icon: "06",
    title: "Track",
    detail: "Monitor progress, SLA status, escalations, and outcomes.",
  },
];

export const campaignerWorksCards = [
  {
    icon: "01",
    title: "Define",
    detail: "Set campaign goals and the desired customer outcome.",
  },
  {
    icon: "02",
    title: "Segment",
    detail: "Select the relevant audience using available customer data.",
  },
  {
    icon: "03",
    title: "Create",
    detail: "Prepare campaign content and channel-specific templates.",
  },
  {
    icon: "04",
    title: "Automate",
    detail: "Configure schedules, triggers, and follow-up workflows.",
  },
  {
    icon: "05",
    title: "Launch",
    detail: "Execute the campaign through enabled channels.",
  },
  {
    icon: "06",
    title: "Analyze",
    detail: "Review delivery, engagement, conversion, and cost metrics.",
  },
  {
    icon: "07",
    title: "Optimize",
    detail: "Use campaign insights to improve future communication.",
  },
];

export const conversationsWorksCards = [
  {
    icon: "01",
    title: "Connect",
    detail: "Receive customer interactions through enabled channels.",
  },
  {
    icon: "02",
    title: "Understand",
    detail: "Identify the customer's intent and relevant context.",
  },
  {
    icon: "03",
    title: "Respond",
    detail:
      "Provide an approved AI-assisted response or initiate a supported workflow.",
  },
  {
    icon: "04",
    title: "Act",
    detail:
      "Execute permitted actions through configured integrations and business rules.",
  },
  {
    icon: "05",
    title: "Escalate",
    detail: "Transfer the interaction to a human agent when necessary.",
  },
  {
    icon: "06",
    title: "Learn & Improve",
    detail:
      "Review conversation outcomes and analytics to refine workflows and knowledge sources.",
  },
];

export const leadsWorksCards = [
  {
    icon: "01",
    title: "Capture",
    detail: "Collect leads from your connected channels and sources.",
  },
  {
    icon: "02",
    title: "Organize",
    detail:
      "Create a centralized lead record with relevant prospect information.",
  },
  {
    icon: "03",
    title: "Qualify",
    detail:
      "Use business rules and available AI capabilities to assess lead quality and intent.",
  },
  {
    icon: "04",
    title: "Assign",
    detail: "Route leads to the appropriate salesperson or team.",
  },
  {
    icon: "05",
    title: "Engage",
    detail:
      "Automate communication, reminders, and follow-ups across enabled channels.",
  },
  {
    icon: "06",
    title: "Convert",
    detail:
      "Track progress through the sales pipeline and update the final outcome.",
  },
  {
    icon: "07",
    title: "Optimize",
    detail:
      "Analyze performance to improve response times, follow-up practices, and conversion rates.",
  },
];

const AgenticWorks = ({
  eyebrow = "HOW IT WORKS",
  title = "From First Message to Final Resolution",
  cards,
  mode = "ticketing",
}) => {
  // Determine card list
  let cardList = cards;
  if (!cardList) {
    if (mode === "campaigner") {
      cardList = campaignerWorksCards;
    } else if (mode === "conversations") {
      cardList = conversationsWorksCards;
    } else if (mode === "leads") {
      cardList = leadsWorksCards;
    } else {
      cardList = ticketingWorksCards;
    }
  }

  // Chunk cards into rows (e.g. 3-4 for 7 items, 3-3 for 6 items)
  let rows = [];
  if (cardList.length === 7) {
    rows = [cardList.slice(0, 3), cardList.slice(3, 7)];
  } else if (cardList.length === 6) {
    rows = [cardList.slice(0, 3), cardList.slice(3, 6)];
  } else {
    // Default 3 per row
    for (let i = 0; i < cardList.length; i += 3) {
      rows.push(cardList.slice(i, i + 3));
    }
  }

  return (
    <div className={styles["agentic-works-section"]}>
      <h6>{eyebrow}</h6>
      <h2>{title}</h2>
      <div className={styles["website-crm-all-cards"]}>
        {rows.map((row, rIdx) => {
          const rowClass =
            row.length === 4
              ? styles["four-cols"]
              : styles["three-cols"];
          return (
            <div
              key={rIdx}
              className={`${styles["website-crm-row"]} ${rowClass}`}
            >
              {row.map((item, index) => (
                <div className={styles["website-crm-card"]} key={index}>
                  <div className={styles["circle-icon"]}>{item.icon}</div>
                  <h5>{item.title}</h5>
                  <h6>{item.detail}</h6>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgenticWorks;
