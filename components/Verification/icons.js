// Shared inline SVG icons for the verification pages.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

export const ArrowIcon = ({ color = "currentColor" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.33398 8H12.6673M8.66732 12L12.6673 8L8.66732 4"
      stroke={color}
      strokeWidth="1.46667"
    />
  </svg>
);

export const ShieldCheckIcon = () => (
  <svg {...base}>
    <path
      d="M12 2.5 19.5 5.3v5.9c0 4.6-3.2 8.6-7.5 10.3-4.3-1.7-7.5-5.7-7.5-10.3V5.3L12 2.5Z"
      fill="white"
    />
    <path d="m8.6 12 2.4 2.4 4.4-4.6" stroke="#5e6ff9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BoltIcon = () => (
  <svg {...base}>
    <path d="M13.5 3 7.5 13h4.2l-1.2 8 6-10.2h-4.3L13.5 3Z" fill="white" />
    <path d="M2.5 9.5h4M3.5 13h2.5M2.5 16.5h4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const GlobeIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" fill="white" />
    <path
      d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"
      stroke="#5e6ff9"
      strokeWidth="1.5"
    />
  </svg>
);

export const LockIcon = ({ fill = "white", hole = "#5e6ff9" }) => (
  <svg {...base}>
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke={fill} strokeWidth="2" />
    <rect x="5" y="10" width="14" height="11" rx="2.5" fill={fill} />
    <circle cx="12" cy="15" r="1.6" fill={hole} />
    <path d="M12 15.5v2.2" stroke={hole} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const HourglassIcon = () => (
  <svg {...base}>
    <path d="M6 3h12v2.5c0 2.6-2.2 4.8-4.5 6.5 2.3 1.7 4.5 3.9 4.5 6.5V21H6v-2.5c0-2.6 2.2-4.8 4.5-6.5C8.2 10.3 6 8.1 6 5.5V3Z" fill="white" />
  </svg>
);

export const AppsAddIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.4" fill="white" />
    <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.4" fill="white" />
    <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.4" fill="white" />
    <path d="M16.75 13v7.5M13 16.75h7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MobileIcon = () => (
  <svg {...base}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="white" />
    <path d="M10.5 18.5h3" stroke="#5e6ff9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PhoneIcon = ({ color = "white", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 3.5c.5-.3 1.1-.2 1.5.2l2.2 2.6c.4.5.4 1.2 0 1.7l-1.4 1.6c1 2.2 2.8 4 5 5l1.6-1.4c.5-.4 1.2-.4 1.7 0l2.6 2.2c.4.4.5 1 .2 1.5l-1 1.7c-.6 1-1.8 1.5-2.9 1.2C10.4 18.4 5.6 13.6 4.2 7.9c-.3-1.1.2-2.3 1.2-2.9l1.2-1.5Z"
      fill={color}
    />
  </svg>
);

export const ChatIcon = ({ color = "white" }) => (
  <svg {...base}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5v-8Z" fill={color} />
  </svg>
);
