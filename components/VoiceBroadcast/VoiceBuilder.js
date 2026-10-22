import React from "react";
import styles from "../../styles/VoiceBuilder.module.scss";
import voicebuilder from "../../public/images/voicebuilder.png";
import Image from "next/image";
const VoiceBuilder = () => {
  const cardData = [
    {
      title: "Number",
      detail:
        "We make it easy to expand, move, merge or acquire – because in moving with Tubelight Communications, your business needs are covered multidimensionally.",
    },
    {
      title: "Conference Calls",
      detail:
        "Tubelight Communications provides a unified communication platform that allows businesses to connect and engage with customers across all major channels.",
    },
    {
      title: "Voice based IVR",
      detail:
        "Tubelight Communications work hard to prevent fraud and spam so that you and your customers get the most out of our Services",
    },
  ];
  return (
    <div className={styles["voice-builder-section"]}>
      <div className={styles["voice-builder-left-right"]}>
        <div className={styles["voice-builder-left"]}>
          <div className={styles["voice-builder-image"]}>
            <Image src={voicebuilder} alt="img" />
          </div>
        </div>
        <div className={styles["voice-builder-right"]}>
          <h2>Flow Builder</h2>
          <h6>Drag and drop Based IVR flow creation</h6>
          <h6>Easy to configure flow</h6>
          <h6>Multi-level IVR Technology</h6>
          <h6>
            API integration in IVR Flow : Collect DTMF Responses, SET dynamic
            flows, Broadcast OBD Personalized / Responsive
          </h6>
          <h6>Call Forwarding</h6>
          <h6>
            Text to speech available to create voice files in major Global /
            Regional Language.
          </h6>
          <button>Learn more</button>
        </div>
      </div>
      <div className={styles["explore-solution-section"]}>
        <h2>Explore related solutions</h2>
        <div className={styles["all-cards-solution"]}>
          {cardData.map((item, index) => (
            <div className={styles["card-solution"]} key={index}>
                <h5>{item.title}</h5>
                <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceBuilder;
