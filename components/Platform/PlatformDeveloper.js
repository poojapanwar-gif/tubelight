"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Platform.module.scss";

const codeTabs = [
  {
    tab: "PHP",
    code: `$tubelight = new
tubelightCommunicationsClient('YOUR_ACCESS_KEY'); $call = new
tubelightCommunicationsObjectsIvrCall(); $call->flowId   =
'WELCOME_MENU'; $call->to       = [919876543210]; $call->language =
'en'; $tubelight->ivr->start($call);`,
  },
  {
    tab: "JAVA",
    code: `TubelightCommunications tubelight = new
TubelightCommunicationsClient("YOUR_ACCESS_KEY"); IvrCall call = new
TubelightCommunicationsObjectsIvrCall(); call.setFlowId(
"WELCOME_MENU"); call.setTo(Arrays.asList(919876543210L));
call.setLanguage("en"); tubelight.ivr.start(call);`,
  },
  {
    tab: "PHYTHON",
    code: `tubelight = TubelightCommunicationsClient(
'YOUR_ACCESS_KEY'); call = TubelightCommunicationsObjectsIvrCall()
call.flow_id  = 'WELCOME_MENU'; call.to = [919876543210]
call.language = 'en'; tubelight.ivr.start(call)`,
  },
];

const PlatformDeveloper = ({ text }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles["platform-developer"]}>
      <div className={styles["developer-inner"]}>
        <div className={styles["code-panel"]}>
          <div className={styles["code-tabs"]} role="tablist">
            {codeTabs.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={activeTab === index ? styles["active"] : ""}
                onClick={() => setActiveTab(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>
          <pre className={styles["code-block"]}>
            <code>{codeTabs[activeTab].code}</code>
          </pre>
        </div>
        <div className={styles["developer-text"]}>
          <h2>
            For Developers,
            <br /> By Developers
          </h2>
          <p>{text}</p>
          <Link href="#">Documentation</Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformDeveloper;
