import React from "react";
import style from "../../styles/ForDeveloper.module.scss";

const text = `Tubelight programmable API infrastructure enables developers to
easily integrate communication API’s and create solutions of their
choice.`;

const ForDeveloper = () => {
  const allTabs = [
    {
      tab: "PHP",
      code: "$tubelightCommunications = new",
    },
    {
      tab: "JAVA",
      code: "$tubelightCommunications = new",
    },
    {
      tab: "PHYTHON",
      code: "$tubelightCommunications = new",
    },
  ];

  return (
    <div className={style["for-developer-section"]}>
      <div className={style["developer-left-right-content"]}>
        <div className={style["developer-left-content"]}>
          <h2>For Developers,<br/> By Developers</h2>
          <p>{text}</p>
          <button>API Documentation</button>
        </div>
        <div className={style["developer-right-content"]}>
          <div className={style["all-tabs-and-content"]}>
            <div className={style["all-tabs"]}>
              {allTabs.map((item, index) => (
                <button key={index}>{item.tab}</button>
              ))}
            </div>

            <div className={style["tab-content"]}>
              {allTabs.map((item, index) => (
                <div className={style["content"]} key={index}>
                  <h5>{item.code}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForDeveloper;
