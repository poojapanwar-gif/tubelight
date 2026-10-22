"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
import Menu from "./Menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* ============ HELLO BAR ============ */}
      <div className={styles.hellobar} id="helloBar" role="region" aria-label="Announcement">
        <div className={styles["hellobar-inner"]}>
          <span>
            🚀 New: AI-powered conversations across every channel —{" "}
            <a href="https://tubelightcommunications.com/contact" target="_blank" rel="noopener noreferrer">
              Book a demo <span className={styles["hb-arrow"]}>→</span>
            </a>
          </span>
        </div>
      </div>

      {/* ============ NAV ============ */}
      <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`} id="nav">
        <div className={`${styles.wrap} ${styles["nav-inner"]}`}>
          <Link className={styles.brand} href="/">
            <img className={styles["brand-logo"]} src="/images/footerlogo.png" alt="Tubelight Communications" />
          </Link>

          <Menu isOpen={isMobileMenuOpen} />

          <div className={styles["nav-cta"]}>
            <a className={`${styles.btn} ${styles["btn-ghost"]} ${styles["nav-desktop-cta"]}`} href="#login">
              Login
            </a>
            <a className={`${styles.btn} ${styles["btn-blue"]} ${styles["nav-desktop-cta"]}`} href="#register">
              Register
            </a>
            <button
              className={styles["nav-toggle"]}
              id="navToggle"
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
