"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Verification.module.scss";

const snippets = [
  {
    tab: "PHP",
    code: `$tubelightCommunications = new
tubelightCommunicationsClient('YOUR_ACCESS_KEY');
        $message = new  tubelightCommunicationsObjectsMessage();
        $message->originator = 'tubelightCommunications';
        $message->recipients = [31612345678];
        $message->body = 'This is a test message.';
        $tubelightCommunications->messages->create($message);`,
  },
  {
    tab: "JAVA",
    code: `TubelightCommunications tubelightCommunications = new
TubelightCommunicationsClient("YOUR_ACCESS_KEY");
        Message message = new TubelightCommunicationsObjectsMessage();
        message.setOriginator("tubelightCommunications");
        message.setRecipients(Arrays.asList(31612345678L));
        message.setBody("This is a test message.");
        tubelightCommunications.messages.create(message);`,
  },
  {
    tab: "PHYTHON",
    code: `tubelight_communications = TubelightCommunicationsClient(
    access_key='YOUR_ACCESS_KEY'
)
        message = TubelightCommunicationsObjectsMessage()
        message.originator = 'tubelightCommunications'
        message.recipients = [31612345678]
        message.body = 'This is a test message.'
        tubelight_communications.messages.create(message)`,
  },
];

// Code sample with PHP / JAVA / PHYTHON tabs + page-specific heading and copy.
// accent: "blue" (#5e6ff9) or "royal" (#2f6be8); headingAccent colours the heading.
const CodePanel = ({ title, text, accent = "blue", headingAccent = false }) => {
  const [active, setActive] = useState(0);
  return (
    <section className={`${styles.code} ${accent === "royal" ? styles["accent-royal"] : ""}`}>
      <div className={styles["code-inner"]}>
        <div className={styles["code-frame"]}>
          <div className={styles["code-tabs"]} role="tablist">
            {snippets.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? styles["code-tab-active"] : ""}
                onClick={() => setActive(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>
          <pre className={styles["code-block"]}>{snippets[active].code}</pre>
        </div>
        <div className={`${styles["code-text"]} ${headingAccent ? styles["code-text-accent"] : ""}`}>
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href="#" className={`${styles["btn-primary"]} ${styles["btn-glow"]}`}>
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CodePanel;
