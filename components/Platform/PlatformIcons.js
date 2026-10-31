import React from "react";

// Small white line icons used inside the blue circles of the platform pages.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "white",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

const paths = {
  // person with chat bubble
  user: (
    <>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4.5 19c0-3 2.5-5.2 5.5-5.2 1.2 0 2.3.3 3.2.9" />
      <path d="M15 14.5h5v3.5h-2.4L16 19.4V18h-1z" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />,
  engage: (
    <>
      <circle cx="12" cy="13" r="2.4" />
      <path d="M7.5 20c.6-2.4 2.3-3.8 4.5-3.8s3.9 1.4 4.5 3.8" />
      <path d="M5 9.5 3.5 8M19 9.5 20.5 8M12 6V4M8 7 7 5.5M16 7l1-1.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
      <rect x="8" y="13" width="3" height="3" rx=".5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </>
  ),
  code: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />,
  message: (
    <>
      <rect x="4" y="4.5" width="16" height="12" rx="2" />
      <path d="M8 16.5 6 20l5-3.5M8 9h8M8 12h5" />
    </>
  ),
  monitor: (
    <>
      <path d="M8 4H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3" />
      <path d="M12 3v8M9 8.5l3 3 3-3M9 20h6M12 16v4" />
    </>
  ),
  convert: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 10.5a3.6 3.6 0 0 1 6.4-1.6M15.5 13.5a3.6 3.6 0 0 1-6.4 1.6" />
      <path d="M15 6.8v2.4h-2.4M9 17.2v-2.4h2.4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6" />
      <circle cx="12" cy="12" r="5.6" />
    </>
  ),
  send: <path d="M20 4 3.5 10.5l6.8 2.7L13 20zM10.3 13.2 20 4" />,
  growth: (
    <>
      <path d="M4 20h16" />
      <path d="M5 16l4-5 3 3 4-6 3 3" />
      <path d="M6 20v-2M10 20v-3M14 20v-2M18 20v-4" />
    </>
  ),
};

const PlatformIcon = ({ name, size = 24 }) => (
  <svg {...base} width={size} height={size}>
    {paths[name]}
  </svg>
);

export default PlatformIcon;
