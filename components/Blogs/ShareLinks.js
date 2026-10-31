"use client";
import React, { useState, useSyncExternalStore } from "react";
import styles from "../../styles/BlogDetail.module.scss";

const subscribe = () => () => {};

const ShareLinks = ({ path, title }) => {
  // Absolute URL on the client; falls back to the relative path during SSR.
  const url = useSyncExternalStore(
    subscribe,
    () => window.location.href,
    () => path
  );
  const [copied, setCopied] = useState(false);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#1877f2" />
          <path
            d="M13.4 19v-6h2l.3-2.4h-2.3V9.1c0-.7.2-1.1 1.2-1.1h1.2V5.9c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.7H9v2.4h2v6h2.4z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${t}%20${u}`,
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#25d366" />
          <path
            d="M12 6.2a5.8 5.8 0 0 0-5 8.7l-.8 2.9 3-.8A5.8 5.8 0 1 0 12 6.2zm3.4 8.2c-.1.4-.8.8-1.2.8-.3 0-.7.1-2.2-.5-1.9-.8-3-2.7-3.1-2.8-.1-.1-.7-1-.7-1.9 0-.9.5-1.4.7-1.6.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.3l.6 1.4c0 .1.1.2 0 .4l-.2.3-.3.3c-.1.1-.2.2-.1.4.1.2.6.9 1.2 1.5.8.7 1.5.9 1.7 1 .2.1.3.1.4 0l.6-.7c.1-.2.3-.2.4-.1l1.3.6c.2.1.3.1.3.2.1 0 .1.4 0 .6z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="1" y="1" width="22" height="22" rx="3" fill="#0a66c2" />
          <path
            d="M7.2 9.6h2.3V17H7.2V9.6zm1.2-3.7a1.3 1.3 0 1 1 0 2.7 1.3 1.3 0 0 1 0-2.7zM11 9.6h2.2v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6V17H16v-3.6c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9V17H11V9.6z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      icon: (
        <svg viewBox="0 0 24 24">
          <path
            d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z"
            fill="#0a0a0a"
          />
        </svg>
      ),
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles["share-box"]}>
      <h3>Share this on</h3>
      <div className={styles["share-row"]}>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${l.name}`}
            title={l.name}
          >
            {l.icon}
          </a>
        ))}
        <button type="button" onClick={copy} aria-label="Copy link" title="Copy link">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.8">
            <rect x="8" y="8" width="12" height="12" rx="2.5" />
            <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" />
          </svg>
        </button>
        <span className={styles["share-copied"]} aria-live="polite">
          {copied ? "Link copied" : ""}
        </span>
      </div>
    </div>
  );
};

export default ShareLinks;
