"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/Header.module.scss";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
            <Link href="/contact-us">
              Book a demo <span className={styles["hb-arrow"]}>→</span>
            </Link>
          </span>
        </div>
      </div>

      {/* ============ NAV ============ */}
      <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`} id="nav">
        <div className={`${styles.wrap} ${styles["nav-inner"]}`}>
          <Link className={styles.brand} href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img className={styles["brand-logo"]} src="/images/footerlogo.png" alt="Tubelight Communications" />
          </Link>

          {/* Desktop Navigation */}
          <Menu />

          <div className={styles["nav-cta"]}>
            <Link className={`${styles.btn} ${styles["btn-ghost"]} ${styles["nav-desktop-cta"]}`} href="/login">
              Login
            </Link>
            <Link className={`${styles.btn} ${styles["btn-blue"]} ${styles["nav-desktop-cta"]}`} href="/sign-up">
              Register
            </Link>
            <button
              className={styles["nav-toggle"]}
              id="navToggle"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ============ MOBILE NAVIGATION DRAWER (Slide from Left, height 100%) ============ */}
      <MenuMobile isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
