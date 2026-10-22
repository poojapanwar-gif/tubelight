import React from "react";
import styles from "../../styles/VoicePlatfrom.module.scss";
const VoicePlatfrom = () => {
  const cardData = [
    {
      digit: "O1",
      title: "Local Language",
      detail:
        "Connect with your customer in International & Regional Languages",
    },
    {
      digit: "O2",
      title: "OBD",
      detail:
        "Send customers recorded messages that are personal & responsive.",
    },
    {
      digit: "O3",
      title: "Numbers",
      detail:
        "Build customer trust with instant provisioning of local numbers.",
    },
    {
      digit: "O4",
      title: "Flow Builder",
      detail:
        "IVR Flow Builder provides an intuitive drag-and-drop interface that makes it easy for users to create and customize their own IVR workflows.",
    },
    {
      digit: "O5",
      title: "IVR",
      detail:
        "IVR systems are used to route incoming calls to the appropriate department or agent. By providing customers with a series of options, IVR can help reduce wait times and improve customer satisfaction.",
    },
    {
      digit: "O6",
      title: "Missed Call",
      detail:
        "Missed Call is an effective simple & budget friendly solution for lead generation.",
    },
    {
      digit: "O7",
      title: "Number Masking",
      detail:
        "Increase customer privacy & safety by Number Masking solution for various cases.",
    },
    {
      digit: "O8",
      title: "Contact Center Solution",
      detail:
        "Deploy best in class contact center solution at scale with tons of loaded feature & a great UI.",
    },
    {
      digit: "O9",
      title: "Click2Call",
      detail:
        "Simplest & quickest solution for call batching on a website or CRM.",
    },
  ];
  return (
    <div className={styles["voice-platfrom-section"]}>
      <h2>Voice Platform</h2>
      <div className={styles["voice-platfrom-all-cards"]}>
        {
            cardData.map((item,index)=>(
                <div className={styles["platfrom-card"]} key={index}>
                    <h4>{item.digit}</h4>
                    <h5>{item.title}</h5>
                    <p>{item.detail}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default VoicePlatfrom;
