import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

// HTML/CSS recreation of the WhatsApp chat shown on the BANK hero.
const ChatMockup = ({ chat }) => {
  return (
    <div className={styles["cs-chat"]} aria-label={`${chat.name} WhatsApp chat example`} role="img">
      <div className={styles["cs-chat-head"]}>
        <span className={styles["cs-chat-avatar"]}>{chat.name.charAt(0)}</span>
        <div>
          <strong>{chat.name}</strong>
          <span>{chat.status} ✓</span>
        </div>
      </div>
      <div className={styles["cs-chat-body"]}>
        {chat.messages.map((message, index) => (
          <div
            key={index}
            className={`${styles["cs-chat-msg"]} ${
              message.from === "user" ? styles["from-user"] : styles["from-bot"]
            }`}
          >
            <p>{message.text}</p>
            {message.options && (
              <ol>
                {message.options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMockup;
