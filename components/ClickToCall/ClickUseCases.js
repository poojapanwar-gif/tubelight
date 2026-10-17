import React from "react";
import styles from "../../styles/ClickUseCases.module.scss";
import clickcase1 from "../../public/images/clickcase1.png";
import clickcase2 from "../../public/images/clickcase2.png";
import clickcase3 from "../../public/images/clickcase3.png";
import Image from "next/image";
import Link from "next/link";
const ClickUseCases = () => {
  const useCaseCard = [
    {
      link:"/",
      image: clickcase1,
      linktext: "WebC2C",
      title: "Web-based Click to Call",
      detail:
        "This implementation involves embedding a Click to Call button on a website. When a user click on the button, the system prompts the user to enter their phone number. The System then connects the user to the destination number.",
    },
    {
      link:"/",
      image: clickcase2,
      linktext: "AppC2C",
      title: "App-based Click to Call",
      detail:
        "This implementation involves involves integration Click to Call functionality into a mobile application. When a user clicks on the button, the app initiates a call to the destination number.",
    },
    {
      link:"/",
      image: clickcase3,
      linktext: "AdsC2C",
      title: "Click to Call Ads",
      detail:
        "This implementation involves adding a Click to Call button to a search engine or social media advertisement. When a user clicks on the button, the system connects the user to the destination number.",
    },
  ];
  return (
    <div className={styles["click-use-cases"]}>
      <h2>Use Cases</h2>
      <div className={styles["use-cases-all-cards"]}>
        {useCaseCard.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className={styles["use-cases-card"]}>
              <div className={styles["use-case-image"]}>
                <div className={styles["main-image"]}><Image src={item.image} alt="img" /></div>
              </div>
              <h3>{item.linktext}</h3>
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClickUseCases;
