"use client";
import React, { useState } from "react";
import styles from "../../styles/ProductShowcase.module.scss";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("dash");

  const urls = {
    dash: "portal.tubelightcommunications.com/dashboard",
    logs: "portal.tubelightcommunications.com/voice/call-logs",
    rec: "portal.tubelightcommunications.com/voice/recordings",
    wa: "portal.tubelightcommunications.com/inbox/whatsapp",
    ana: "portal.tubelightcommunications.com/analytics",
  };

  const tabsList = [
    {
      id: "dash",
      label: "Dashboard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
    },
    {
      id: "logs",
      label: "Call Logs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.9V19a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h2.1a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L7.1 8.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      ),
    },
    {
      id: "rec",
      label: "Recordings",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
        </svg>
      ),
    },
    {
      id: "wa",
      label: "WhatsApp Inbox",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Z" />
        </svg>
      ),
    },
    {
      id: "ana",
      label: "Analytics",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-4 4 3 5-7" />
        </svg>
      ),
    },
  ];

  const dashSideItems = [
    { label: "Dashboard", active: true },
    { label: "Campaigns", active: false },
    { label: "Conversations", active: false },
    { label: "Call Centre", active: false },
    { label: "Journeys", active: false },
    { label: "Analytics", active: false },
    { label: "Settings", active: false },
  ];

  const dashKpis = [
    { label: "Messages today", val: "1.24M", delta: "▲ 12%" },
    { label: "Delivery rate", val: "99.4%", delta: "▲ 0.3" },
    { label: "Active journeys", val: "38", delta: "" },
    { label: "Avg. latency", val: "118ms", delta: "" },
  ];

  const dashChannels = [
    { name: "WhatsApp · Order updates", sent: "412,800", delivered: "409,221", status: "99.1%", pill: "ok" },
    { name: "SMS · OTP", sent: "684,210", delivered: "683,902", status: "99.9%", pill: "ok" },
    { name: "Voice · EMI reminders", sent: "86,100", delivered: "—", status: "running", pill: "live" },
  ];

  const callLogsData = [
    { caller: "+91 98201 ••• 14", agent: "AI Voice Bot", dur: "01:42", outcome: "Resolved", pill: "ok" },
    { caller: "+91 99300 ••• 87", agent: "Priya · Collections", dur: "03:18", outcome: "PTP captured", pill: "ok" },
    { caller: "+91 81049 ••• 02", agent: "IVR · Self-serve", dur: "00:51", outcome: "Deflected", pill: "ok" },
    { caller: "+91 90041 ••• 39", agent: "—", dur: "00:00", outcome: "Missed → SMS", pill: "miss" },
    { caller: "+91 70219 ••• 55", agent: "Rahul · Sales", dur: "05:07", outcome: "Demo booked", pill: "ok" },
    { caller: "+91 98335 ••• 71", agent: "AI Voice Bot", dur: "02:09", outcome: "Transferred", pill: "live" },
    { caller: "+91 89767 ••• 20", agent: "OBD · Broadcast", dur: "00:33", outcome: "Listened 100%", pill: "ok" },
  ];

  const recordingsData = [
    { who: "Collections · Priya", ph: "+91 99300 ••• 87", dur: "03:18", seed: 1 },
    { who: "AI Voice Bot · Support", ph: "+91 98201 ••• 14", dur: "01:42", seed: 5 },
    { who: "Sales · Rahul", ph: "+91 70219 ••• 55", dur: "05:07", seed: 8 },
    { who: "Onboarding · IVR", ph: "+91 81049 ••• 02", dur: "00:51", seed: 12 },
  ];

  const waList = [
    { av: "RS", name: "Rohan Shah", preview: "Yes, please reschedule my…", time: "2m", active: true },
    { av: "AK", name: "Anita Kumar", preview: "Order #4821 — where is…", time: "8m", active: false },
    { av: "MJ", name: "Mohit Jain", preview: "Got the OTP, thanks 👍", time: "14m", active: false },
    { av: "SP", name: "Sneha P.", preview: "Can I pay the EMI here?", time: "22m", active: false },
  ];

  const analyticsKpis = [
    { label: "Conversion lift", val: "+38%", small: "30d" },
    { label: "Cost / resolution", val: "₹4.20", small: "▼ 42%" },
    { label: "Reply rate", val: "61%", small: "" },
    { label: "Revenue recovered", val: "₹2.1Cr", small: "" },
  ];

  const analyticsJourneys = [
    { name: "Abandoned cart recovery", entered: "18,420", converted: "3,109", rate: "16.9%" },
    { name: "EMI reminder cadence", entered: "9,860", converted: "7,512", rate: "76.2%" },
  ];

  // 38 deterministic waveform bar heights for recordings
  const getWaveBars = (seed) => {
    const bars = [];
    for (let i = 0; i < 38; i++) {
      const h = 20 + Math.round(Math.abs(Math.sin((i + seed) * 0.6)) * 65 + ((i * 7 + seed) % 15));
      bars.push(h);
    }
    return bars;
  };

  return (
    <section className={styles["showcase-sec"]} id="product">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>One console for every conversation</h2>
          <p>Dashboards, call logs, recordings, a unified WhatsApp inbox and live analytics — all in a single pane of glass.</p>
        </div>

        {/* Tab buttons mapped from array */}
        <div className={styles["show-tabs"]} id="showTabs">
          {tabsList.map((t) => (
            <button
              key={t.id}
              className={`${styles["show-tab"]} ${activeTab === t.id ? styles.active : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles["show-stage"]}>
          <div className={styles["win-bar"]}>
            <i className={styles.r}></i>
            <i className={styles.y}></i>
            <i className={styles.g}></i>
            <span className={styles.url} id="winUrl">
              {urls[activeTab]}
            </span>
          </div>

          <div className={styles.panes}>
            {/* DASHBOARD */}
            <div className={`${styles.pane} ${activeTab === "dash" ? styles.active : ""}`}>
              <div className={styles.app}>
                <aside className={styles["app-side"]}>
                  {dashSideItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`${styles.si} ${item.active ? styles.on : ""}`}
                    >
                      <span className={styles.d}></span>
                      {item.label}
                    </div>
                  ))}
                </aside>

                <div className={styles["app-main"]}>
                  <div className={styles["kpi-row"]}>
                    {dashKpis.map((kpi, idx) => (
                      <div key={idx} className={styles.kpi}>
                        <div className={styles.l}>{kpi.label}</div>
                        <div className={styles.v}>
                          {kpi.val}
                          {kpi.delta && <small>{kpi.delta}</small>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.chart}>
                    <div className={styles.bars}>
                      {[42, 58, 50, 74, 66, 88, 78, 96, 70, 82].map((height, bIdx) => (
                        <div key={bIdx} className={styles.b} style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.tablerow} ${styles.h}`}>
                      <span>Channel</span>
                      <span>Sent</span>
                      <span>Delivered</span>
                      <span>Status</span>
                    </div>
                    {dashChannels.map((ch, idx) => (
                      <div key={idx} className={styles.tablerow}>
                        <span>{ch.name}</span>
                        <span>{ch.sent}</span>
                        <span>{ch.delivered}</span>
                        <span className={`${styles.pill} ${styles[ch.pill]}`}>{ch.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CALL LOGS */}
            <div className={`${styles.pane} ${activeTab === "logs" ? styles.active : ""}`}>
              <div className={`${styles.tablerow} ${styles.h}`}>
                <span>Caller</span>
                <span>Agent / Bot</span>
                <span>Duration</span>
                <span>Outcome</span>
              </div>
              {callLogsData.map((row, idx) => (
                <div key={idx} className={styles.tablerow}>
                  <span>{row.caller}</span>
                  <span>{row.agent}</span>
                  <span>{row.dur}</span>
                  <span className={`${styles.pill} ${styles[row.pill]}`}>{row.outcome}</span>
                </div>
              ))}
            </div>

            {/* RECORDINGS */}
            <div className={`${styles.pane} ${activeTab === "rec" ? styles.active : ""}`}>
              <div className={styles["rec-list"]}>
                {recordingsData.map((rec, idx) => (
                  <div key={idx} className={styles.rec}>
                    <div className={styles.play}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className={styles.who}>
                      <div className={styles.nm}>{rec.who}</div>
                      <div className={styles.ph}>{rec.ph}</div>
                    </div>
                    <div className={styles.wavef}>
                      {getWaveBars(rec.seed).map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }}></i>
                      ))}
                    </div>
                    <div className={styles.dur}>{rec.dur}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHATSAPP INBOX */}
            <div className={`${styles.pane} ${activeTab === "wa" ? styles.active : ""}`}>
              <div className={styles["wa-app"]}>
                <div className={styles["wa-list"]}>
                  {waList.map((contact, idx) => (
                    <div
                      key={idx}
                      className={`${styles["wa-li"]} ${contact.active ? styles.on : ""}`}
                    >
                      <div className={styles["wa-av"]}>{contact.av}</div>
                      <div>
                        <div className={styles.nm}>{contact.name}</div>
                        <div className={styles.pv}>{contact.preview}</div>
                      </div>
                      <div className={styles.tm}>{contact.time}</div>
                    </div>
                  ))}
                </div>

                <div className={styles["wa-chat"]}>
                  <div className={styles["wa-head"]}>
                    <div className={styles["wa-av"]} style={{ width: "34px", height: "34px" }}>
                      RS
                    </div>
                    <div>
                      <div className={styles.nm}>Rohan Shah</div>
                      <div className={styles.status}>online · assigned to AI Agent</div>
                    </div>
                  </div>
                  <div className={styles["wa-body"]}>
                    <div className={`${styles.bub} ${styles.in}`}>
                      Hi, I need to move my site visit to the weekend. Is Saturday possible?
                      <span className={styles.t}>11:02</span>
                    </div>
                    <div className={`${styles.bub} ${styles.bot}`}>
                      Of course, Rohan! I have <b>Sat 14 Jun</b> at 11:00 AM or 4:00 PM open for the Prabhadevi project. Which works?
                      <span className={styles.t}>11:02</span>
                    </div>
                    <div className={`${styles.bub} ${styles.in}`}>
                      11 AM works.<span className={styles.t}>11:03</span>
                    </div>
                    <div className={`${styles.bub} ${styles.out}`}>
                      Booked ✅ Saturday 14 Jun, 11:00 AM. I&apos;ve sent a calendar invite and the brochure. See you there!
                      <span className={styles.t}>11:03</span>
                    </div>
                  </div>
                  <div className={styles["wa-input"]}>
                    <div className={styles.box}>Type a message…</div>
                    <div className={styles.snd}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="m3 3 18 9-18 9 4-9-4-9Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className={`${styles.pane} ${activeTab === "ana" ? styles.active : ""}`}>
              <div className={styles["app-main"]}>
                <div className={styles["kpi-row"]}>
                  {analyticsKpis.map((kpi, idx) => (
                    <div key={idx} className={styles.kpi}>
                      <div className={styles.l}>{kpi.label}</div>
                      <div className={styles.v}>
                        {kpi.val}
                        {kpi.small && <small>{kpi.small}</small>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.chart} style={{ height: "180px" }}>
                  <div className={styles.bars}>
                    {[30, 44, 38, 60, 52, 72, 64, 84, 76, 92, 88, 100].map((h, bIdx) => (
                      <div key={bIdx} className={styles.b} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className={`${styles.tablerow} ${styles.h}`}>
                  <span>Journey</span>
                  <span>Entered</span>
                  <span>Converted</span>
                  <span>Rate</span>
                </div>
                {analyticsJourneys.map((j, idx) => (
                  <div key={idx} className={styles.tablerow}>
                    <span>{j.name}</span>
                    <span>{j.entered}</span>
                    <span>{j.converted}</span>
                    <span className={`${styles.pill} ${styles.ok}`}>{j.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;