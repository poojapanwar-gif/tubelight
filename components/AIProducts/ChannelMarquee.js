import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { channels } from "./data/shared";

const ChannelMarquee = () => {
  const items = [...channels, ...channels, ...channels, ...channels];
  return (
    <div className={styles["ai-marquee"]} aria-label={channels.join(", ")}>
      <div className={styles["ai-marquee-track"]} aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className={styles["ai-marquee-item"]}>
            <span className={styles["ai-marquee-star"]}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChannelMarquee;
