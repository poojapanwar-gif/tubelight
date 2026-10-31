"use client";
import React, { useState } from "react";
import styles from "../../styles/OurOffice.module.scss";

const PinIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
    <path
      d="M8 0C3.6 0 0 3.5 0 7.9 0 13.7 8 20 8 20s8-6.3 8-12.1C16 3.5 12.4 0 8 0Z"
      fill="#E5252A"
    />
    <circle cx="8" cy="7.8" r="3" fill="#ffffff" />
  </svg>
);

const offices = [
  {
    id: "mumbai",
    name: "Mumbai, India",
    city: "Mumbai",
    type: "Headquarters",
    address:
      "C Wing, 701, Lotus Corporate Park, Geetanjali Railway Colony, Laxmi Nagar, Goregaon East, Mumbai, Maharashtra 400060",
    coords: { x: 63.8, y: 57.5 },
    pillAlign: "left",
    tooltipAlign: "bottom-left",
  },
  {
    id: "bengaluru",
    name: "Bengaluru, India",
    city: "Bengaluru",
    type: "Tech Hub",
    address:
      "HD 139, Prestige Central 36, Infantry Road, Shivaji Nagar, Bengaluru Urban, Bengaluru, Karnataka 560001",
    coords: { x: 65.8, y: 64.0 },
    pillAlign: "right",
    tooltipAlign: "bottom-right",
  },
  {
    id: "ranchi",
    name: "Ranchi, India",
    city: "Ranchi",
    type: "Operations Center",
    address:
      "6th Floor, Saluja Tower, Church Complex, Pee Pee Compound, Main Road, Above Vasan Eye Care, Sujata Chowk, Ranchi, Jharkhand 834001",
    coords: { x: 68.6, y: 55.5 },
    pillAlign: "right",
    tooltipAlign: "top-right",
  },
  {
    id: "california",
    name: "California, USA",
    city: "California",
    type: "Global Presence",
    address: "Tubelight Communications Inc., California, USA",
    coords: { x: 19.5, y: 47.2 },
    pillAlign: "right",
    tooltipAlign: "bottom-right",
  },
];

const OurOffice = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles["our-office-section"]}>
      <div className={styles["our-office-inner"]}>
        <div className={styles["heading-wrap"]}>
          <h2>Our Office</h2>
          <p className={styles["subtitle"]}>
            Visit or reach out to our teams across our global and regional offices.
          </p>
        </div>

        {/* Map Panel with Interactive Pins and Hover Tooltips */}
        <div className={styles["map-panel"]}>
          <div className={styles["map-wrapper"]}>
            <img
              className={styles["map-img"]}
              src="/images/contact/office-map-clean.png"
              alt="World map with Tubelight Communications offices in Mumbai, Bengaluru, Ranchi, and California"
            />

            {offices.map((office) => {
              const isHovered = hoveredId === office.id;
              const isSelected = selectedId === office.id;
              const isOpen = isHovered || isSelected;

              return (
                <div
                  key={office.id}
                  className={`${styles["marker-wrapper"]} ${
                    styles[`align-${office.pillAlign}`]
                  } ${isOpen ? styles["is-open"] : ""}`}
                  style={{
                    left: `${office.coords.x}%`,
                    top: `${office.coords.y}%`,
                  }}
                  onMouseEnter={() => setHoveredId(office.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleCardClick(office.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-label={`${office.name} office`}
                >
                  {/* Pin anchor with pulsing ring */}
                  <span className={styles["pin-pulse"]} aria-hidden="true" />
                  <span className={styles["pin-dot"]} aria-hidden="true" />

                  {/* Sleek Pill Badge (matching Figma design) */}
                  <div className={styles["pill-badge"]}>
                    <span className={styles["pill-icon"]}>
                      <PinIcon />
                    </span>
                    <span className={styles["pill-text"]}>{office.name}</span>
                  </div>

                  {/* Tooltip Card revealing full address on hover */}
                  <div
                    className={`${styles["address-card"]} ${
                      styles[`tooltip-${office.tooltipAlign}`]
                    }`}
                  >
                    <div className={styles["address-card-head"]}>
                      <PinIcon />
                      <div className={styles["address-card-title"]}>
                        <strong>{office.name}</strong>
                        {office.type && (
                          <span className={styles["office-tag"]}>
                            {office.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className={styles["address-card-body"]}>
                      {office.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Address Cards Grid */}
        <div className={styles["office-grid"]}>
          {offices.map((office) => {
            const isActive =
              hoveredId === office.id || selectedId === office.id;

            return (
              <div
                key={office.id}
                className={`${styles["office-card"]} ${
                  isActive ? styles["card-active"] : ""
                }`}
                onMouseEnter={() => setHoveredId(office.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(office.id)}
                role="button"
                tabIndex={0}
              >
                <div className={styles["card-header"]}>
                  <div className={styles["card-icon-wrap"]}>
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className={styles["card-title"]}>{office.name}</h3>
                    {office.type && (
                      <span className={styles["card-type-badge"]}>
                        {office.type}
                      </span>
                    )}
                  </div>
                </div>
                <p className={styles["card-address"]}>{office.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
