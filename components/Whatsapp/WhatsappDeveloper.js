"use client";
import React, { useState } from "react";
import style from "../../styles/IVRDevelopers.module.scss";

const text = `Keep control of data verification requests, status updates, and notifications with our REST API and reduce development and maintenance time with our SDK for Android, iOS, or JavaScript.`;

const WhatsappDeveloper = () => {
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
    <div className={style["ivr-developer-section"]}>
      <div className={style["developer-left-right-content"]}>
        <div className={style["developer-right-content"]}>
          <div className={style["all-tabs-and-content"]}>
            <div className={style["all-tabs"]}>
              {allTabs.map((item, index) => (
                <button
                  key={index}
                  className={activeTab === index ? style["active"] : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <div className={style["tab-content"]}>
              <div className={style["code-block"]}>
                {allTabs[activeTab]?.renderCode()}
              </div>
            </div>
          </div>
        </div>
        <div className={style["developer-left-content"]}>
          <h2>Easy, flexible integration with our REST API and SDK</h2>
          <p>{text}</p>
          <button>Documentation</button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappDeveloper;
