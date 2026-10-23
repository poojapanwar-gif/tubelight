import React from "react";
import styles from "../../styles/WhatsappAdvantages.module.scss";

const WhatsappAdvantages = () => {
  const cardData = [
    {
      digit: "01",
      title: "Powering Messaging",
      detail:
        "Customer services such as delivering notifications and alerts, its real strength lies in its ability to let brands easily engage in two - way interactions in real time",
    },
    {
      digit: "02",
      title: "Securing Conversations",
      detail:
        "Enterprise - level security forms a vital pillar of the Whatsapp Business API. For instance, Whatsapp verifies all business account details before activation",
    },
    {
      digit: "03",
      title: "Mastering Integration",
      detail:
        "Brand choose to team up with an official Whatsapp Business API provider to plan, implement, and rollout their Whatapp solution",
    },
    {
      digit: "04",
      title: "Transforming Marketing",
      detail:
        "From Click - to -Chat and Conversation buttons that let consumers immediately start chatting with a brand to deploying broadcast messaging in digital marketing campaigns",
    },
    {
      digit: "05",
      title: "Conversational Inbox With Conversational API",
      detail:
        "Brands can choose to either use API or use Tubelight Conversational UI based inbox to send and receive messages",
    },
  ];

  return (
    <div className={styles["whatsapp-advantages-section"]}>
      <h2>Whatsapp Advantages</h2>
      <div className={styles["all-advantages-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["advantage-cards"]} key={index}>
            <div className={styles["digit-box"]}>
              <h3>{item.digit}</h3>
            </div>
            <div className={styles["card-content"]}>
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsappAdvantages;
