"use client";
import React, { useState } from "react";
import styles from "../../styles/NumberWorld.module.scss";
import { MAP_VIEWBOX, LAND_PATH, SELECTED_PATH } from "./worldMapPaths";

const countries = [
  { name: "Australia", code: "au" },
  { name: "Austria", code: "at" },
  { name: "Belgium", code: "be" },
  { name: "Canada", code: "ca" },
  { name: "Colombia", code: "co" },
  { name: "Croatia", code: "hr" },
  { name: "Czech Republic", code: "cz" },
  { name: "Denmark", code: "dk" },
  { name: "Finland", code: "fi" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Greece", code: "gr" },
  { name: "Hungary", code: "hu" },
  { name: "Iceland", code: "is" },
  { name: "India", code: "in" },
  { name: "Ireland", code: "ie" },
  { name: "Italy", code: "it" },
  { name: "Netherlands", code: "nl" },
  { name: "New Zealand", code: "nz" },
  { name: "Norway", code: "no" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Spain", code: "es" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "United Kingdom", code: "gb" },
  { name: "United States", code: "us" },
  { name: "Argentina", code: "ar" },
];

const NumbersWorld = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 1));
  const handleReset = () => setZoom(1);

  return (
    <div className={styles["number-world-section"]}>
      <h2>Reliable Around The World</h2>
      <p>
        Direct connections with over 240 carriers in 140 countries, and a
        carrier-grade network with global connectivity give you best-in-class
        deliverability around the world.
      </p>

      <div className={styles["map-section"]}>
        <div className={styles["world-panel"]}>
          {/* Map Display */}
          <div className={styles["world-map-box"]}>
            <svg
              viewBox={MAP_VIEWBOX}
              role="img"
              aria-label="World map highlighting selected countries"
              className={styles["svg-map"]}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              <path d={LAND_PATH} className={styles["map-land"]} />
              <path d={SELECTED_PATH} className={styles["map-selected"]} />
            </svg>

            {/* Map Controls */}
            <div className={styles["map-controls"]}>
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In"
                aria-label="Zoom In"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                −
              </button>
              <button
                type="button"
                onClick={handleReset}
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </button>
            </div>

            {/* Legend inside map */}
            <div className={styles["map-legend"]}>
              <span className={styles["legend-box"]} />
              <span>Selected Countries</span>
            </div>
          </div>

          {/* Action Pill */}
          <button type="button" className={styles["selected-pill"]}>
            Selected Countries
          </button>

          {/* Flag Strip */}
          <div className={styles["flag-strip-wrapper"]}>
            <div
              className={styles["flag-strip"]}
              tabIndex={0}
              aria-label="Selected countries list"
            >
              {countries.map((c) => (
                <div className={styles["flag-card"]} key={c.code}>
                  <div className={styles["flag-img-box"]}>
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      alt={c.name}
                      loading="lazy"
                    />
                  </div>
                  <span className={styles["country-name"]}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersWorld;
