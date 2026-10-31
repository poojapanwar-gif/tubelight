"use client";
import React, { useState } from "react";
import styles from "../../styles/PHPCode.module.scss";
const PHPCode = ({
  title = "Construct with confidence - send your first SMS Verification in minutes.",
  desc = "Keep control of phone verification requests, status updates, and notifications with our REST API and reduce development and maintenance time with our SDK for Android, iOS, or JavaScript.",
  buttonText = "Documentation",
}) => {
  const style = styles;
  const [activeTab, setActiveTab] = useState(0);

  const allTabs = [
    {
      tab: "PHP",
      renderCode: () => (
        <>
          <div className={style["code-line"]}>
            <span className={style.variable}>$tubelightCommunications</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.keyword}>new</span>
          </div>
          <div className={style["code-line"]}>
            <span className={style.function}>
              tubelightCommunicationsClient
            </span>
            <span className={style.operator}>(</span>
            <span className={style.string}>'YOUR_ACCESS_KEY'</span>
            <span className={style.operator}>);</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>$message</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.keyword}>new</span>{" "}
            <span className={style.function}>
              tubelightCommunicationsObjectsMessage
            </span>
            <span className={style.operator}>();</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>$message</span>
            <span className={style.operator}>-&gt;</span>
            <span className={style.property}>originator</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.string}>'tubelightCommunications'</span>
            <span className={style.operator}>;</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>$message</span>
            <span className={style.operator}>-&gt;</span>
            <span className={style.property}>recipients</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.operator}>[</span>
            <span className={style.number}>31612345678</span>
            <span className={style.operator}>];</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>$message</span>
            <span className={style.operator}>-&gt;</span>
            <span className={style.property}>body</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.string}>'This is a test message.'</span>
            <span className={style.operator}>;</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>$tubelightCommunications</span>
            <span className={style.operator}>-&gt;</span>
            <span className={style.property}>messages</span>
            <span className={style.operator}>-&gt;</span>
            <span className={style.function}>create</span>
            <span className={style.operator}>(</span>
            <span className={style.variable}>$message</span>
            <span className={style.operator}>);</span>
          </div>
        </>
      ),
    },
    {
      tab: "JAVA",
      renderCode: () => (
        <>
          <div className={style["code-line"]}>
            <span className={style["class-name"]}>TubelightCommunications</span>{" "}
            <span className={style.variable}>tubelightCommunications</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.keyword}>new</span>
          </div>
          <div className={style["code-line"]}>
            <span className={style.function}>
              TubelightCommunicationsClient
            </span>
            <span className={style.operator}>(</span>
            <span className={style.string}>"YOUR_ACCESS_KEY"</span>
            <span className={style.operator}>);</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style["class-name"]}>Message</span>{" "}
            <span className={style.variable}>message</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.keyword}>new</span>{" "}
            <span className={style.function}>
              TubelightCommunicationsObjectsMessage
            </span>
            <span className={style.operator}>();</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>setOriginator</span>
            <span className={style.operator}>(</span>
            <span className={style.string}>"tubelightCommunications"</span>
            <span className={style.operator}>);</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>setRecipients</span>
            <span className={style.operator}>(</span>
            <span className={style["class-name"]}>Arrays</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>asList</span>
            <span className={style.operator}>(</span>
            <span className={style.number}>31612345678L</span>
            <span className={style.operator}>));</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>setBody</span>
            <span className={style.operator}>(</span>
            <span className={style.string}>"This is a test message."</span>
            <span className={style.operator}>);</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>tubelightCommunications</span>
            <span className={style.operator}>.</span>
            <span className={style.property}>messages</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>create</span>
            <span className={style.operator}>(</span>
            <span className={style.variable}>message</span>
            <span className={style.operator}>);</span>
          </div>
        </>
      ),
    },
    {
      tab: "PYTHON",
      renderCode: () => (
        <>
          <div className={style["code-line"]}>
            <span className={style.variable}>tubelight_communications</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.function}>
              TubelightCommunicationsClient
            </span>
            <span className={style.operator}>(</span>
          </div>
          <div className={style["code-line"]}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={style.property}>access_key</span>
            <span className={style.operator}>=</span>
            <span className={style.string}>'YOUR_ACCESS_KEY'</span>
          </div>
          <div className={style["code-line"]}>
            <span className={style.operator}>)</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.function}>
              TubelightCommunicationsObjectsMessage
            </span>
            <span className={style.operator}>()</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.property}>originator</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.string}>'tubelightCommunications'</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.property}>recipients</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.operator}>[</span>
            <span className={style.number}>31612345678</span>
            <span className={style.operator}>]</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>message</span>
            <span className={style.operator}>.</span>
            <span className={style.property}>body</span>{" "}
            <span className={style.operator}>=</span>{" "}
            <span className={style.string}>'This is a test message.'</span>
          </div>
          <div className={`${style["code-line"]} ${style.indent}`}>
            <span className={style.variable}>tubelight_communications</span>
            <span className={style.operator}>.</span>
            <span className={style.property}>messages</span>
            <span className={style.operator}>.</span>
            <span className={style.function}>create</span>
            <span className={style.operator}>(</span>
            <span className={style.variable}>message</span>
            <span className={style.operator}>)</span>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className={styles["php-developer-section"]}>
      <div className={styles["developer-left-right-content"]}>
        <div className={styles["developer-right-content"]}>
          <div className={styles["all-tabs-and-content"]}>
            <div className={styles["all-tabs"]}>
              {allTabs.map((item, index) => (
                <button
                  key={index}
                  className={activeTab === index ? styles["active"] : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <div className={styles["tab-content"]}>
              <div className={styles["code-block"]}>
                {allTabs[activeTab]?.renderCode()}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["developer-left-content"]}>
          <h2>
            {title}

          </h2>
          <p>
            {desc}


          </p>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default PHPCode;
