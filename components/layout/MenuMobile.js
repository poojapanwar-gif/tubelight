"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/MenuMobile.module.scss";
import { productCategories, quickLinks, integrationsList } from "./ProductMenu";

const MenuMobile = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedProductCat, setExpandedProductCat] = useState(null);
  const pathname = usePathname();

  // Reset accordion state when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setActiveSection(null);
      setExpandedProductCat(null);
    }
  }, [isOpen]);

  // Close drawer on page route change
  useEffect(() => {
    onClose?.();
  }, [pathname]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  const toggleProductCat = (catId) => {
    setExpandedProductCat((prev) => (prev === catId ? null : catId));
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  /* Navigation Data for Solutions, Verification, Resources, Company */
  const solutionsData = [
    {
      group: "Case Studies",
      items: [
        {
          title: "Banking & Finance",
          sub: "WhatsApp banking & KYC",
          href: "/case-studies/banking-finance",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18" />
            </svg>
          ),
        },
        {
          title: "Healthcare",
          sub: "Appointments & patient care",
          href: "/case-studies/health-tech",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
            </svg>
          ),
        },
        {
          title: "Insurance",
          sub: "Policy services & claims",
          href: "/case-studies/insurance",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          ),
        },
        {
          title: "Electric Utility",
          sub: "Consumer utility self-service",
          href: "/case-studies/electric-utility",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
        },
        {
          title: "Home & Appliances",
          sub: "Customer & dealer portal",
          href: "/case-studies/home-appliance",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21V9l9-6 9 6v12" />
            </svg>
          ),
        },
        {
          title: "Oil Company",
          sub: "Engagement & loyalty dispatch",
          href: "/case-studies/oil-company",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v6m0 4v10M5 7l14 10M5 17L19 7" />
            </svg>
          ),
        },
      ],
    },
  ];

  const developerData = [
    {
      group: "APIs & SDKs",
      items: [
        {
          title: "SMS",
          sub: "Get started with SMS APIs",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/SMS",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          ),
        },
        {
          title: "Voice",
          sub: "Voice API integration guide",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/Voice",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
            </svg>
          ),
        },
        {
          title: "Email",
          sub: "Send emails & view reports",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/Email",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          ),
        },
      ],
    },
    {
      group: "Channels & Security",
      items: [
        {
          title: "WhatsApp",
          sub: "Reach audience via WhatsApp APIs",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/WhatsApp",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          ),
        },
        {
          title: "RCS",
          sub: "Send rich messages with RCS",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/RCS",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="m8 21 4-4 4 4" />
            </svg>
          ),
        },
        {
          title: "2FA",
          sub: "Secure your system using 2FA",
          href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/2FA",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ),
        },
      ],
    },
  ];

  const resourcesData = [
    {
      title: "Blog",
      sub: "Guides & product news",
      href: "/blogs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h12l4 4v12H4z" />
          <path d="M8 12h8M8 16h8" />
        </svg>
      ),
    },
    {
      title: "Case Studies",
      sub: "Customer results",
      href: "/case-studies",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-4 4 3 5-7" />
        </svg>
      ),
    },
  ];

  const companyData = [
    {
      title: "About Us",
      sub: "Our story & mission",
      href: "/about-us",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      title: "Contact Us",
      sub: "Talk to sales",
      href: "/contact-us",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        className={`${styles.drawerOverlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* 2. Slide-out Left Sidebar */}
      <aside
        className={`${styles.drawerSidebar} ${isOpen ? styles.open : ""}`}
        aria-label="Mobile Navigation"
      >
        {/* Top Header with Brand Logo & Close Button (Matching user screenshot) */}
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.brandLink} onClick={handleLinkClick}>
            <img
              src="/images/footerlogo.png"
              alt="Tubelight Communications"
              className={styles.brandImg}
            />
          </Link>

          {/* Clean borderless Close Button */}
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className={styles.drawerBody}>
          {/* ============ A. PRODUCTS (Interactive Accordion) ============ */}
          <div className={styles.navSection}>
            <button
              type="button"
              className={`${styles.navSectionTrigger} ${
                activeSection === "products" ? styles.activeTrigger : ""
              }`}
              onClick={() => toggleSection("products")}
              aria-expanded={activeSection === "products"}
            >
              <span>Products</span>
              <svg
                className={`${styles.chev} ${
                  activeSection === "products" ? styles.rotated : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeSection === "products" && (
              <div className={styles.navSectionBody}>
                <div className={styles.productsContainer}>
                  {productCategories.map((cat) => {
                    const isExpanded = expandedProductCat === cat.id;
                    return (
                      <div
                        key={cat.id}
                        className={`${styles.productCatItem} ${
                          isExpanded ? styles.catExpanded : ""
                        }`}
                      >
                        <button
                          type="button"
                          className={styles.productCatTrigger}
                          onClick={() => toggleProductCat(cat.id)}
                          aria-expanded={isExpanded}
                        >
                          <div className={styles.catLeft}>
                            <span className={styles.catIcon}>{cat.icon}</span>
                            <span className={styles.catLabel}>{cat.label}</span>
                          </div>
                          <svg
                            className={`${styles.catChev} ${
                              isExpanded ? styles.rotated : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>

                        {isExpanded && (
                          <div className={styles.productCatBody}>
                            {cat.columns.map((col, cIdx) => (
                              <div key={cIdx} className={styles.subColBlock}>
                                {col.title && cat.columns.length > 1 && (
                                  <div className={styles.subColHeading}>
                                    {col.title}
                                  </div>
                                )}
                                <ul className={styles.linksList}>
                                  {col.links.map((link, lIdx) => {
                                    const isInternal = link.href.startsWith("/");
                                    return (
                                      <li key={lIdx}>
                                        {isInternal ? (
                                          <Link
                                            href={link.href}
                                            className={styles.menuLink}
                                            onClick={handleLinkClick}
                                          >
                                            <span>{link.label}</span>
                                            <span className={styles.linkArrow}>→</span>
                                          </Link>
                                        ) : (
                                          <a
                                            href={link.href}
                                            className={styles.menuLink}
                                            onClick={handleLinkClick}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <span>{link.label}</span>
                                            <span className={styles.linkArrow}>↗</span>
                                          </a>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Integrations Section */}
                  <div className={styles.integrationsSection}>
                    <h4 className={styles.integrationsTitle}>Integrations</h4>
                    <div className={styles.integrationsGrid}>
                      {integrationsList.map((item, iIdx) => (
                        <a
                          key={iIdx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.integItem}
                          title={item.name}
                          onClick={handleLinkClick}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className={styles.integImg}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions for Products: CTA + Quick links */}
                  <div className={styles.productsBottom}>
                    <Link
                      href="/contact-us"
                      className={styles.productCtaBtn}
                      onClick={handleLinkClick}
                    >
                      Try It For Free
                    </Link>
                    <div className={styles.quickLinksRow}>
                      {quickLinks.map((ql, qIdx) => {
                        const isInternal = ql.href.startsWith("/");
                        return isInternal ? (
                          <Link
                            key={qIdx}
                            href={ql.href}
                            className={styles.quickLinkPill}
                            onClick={handleLinkClick}
                          >
                            {ql.label}
                          </Link>
                        ) : (
                          <a
                            key={qIdx}
                            href={ql.href}
                            className={styles.quickLinkPill}
                            onClick={handleLinkClick}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {ql.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ============ B. SOLUTIONS ============ */}
          <div className={styles.navSection}>
            <button
              type="button"
              className={`${styles.navSectionTrigger} ${
                activeSection === "solutions" ? styles.activeTrigger : ""
              }`}
              onClick={() => toggleSection("solutions")}
              aria-expanded={activeSection === "solutions"}
            >
              <span>Solutions</span>
              <svg
                className={`${styles.chev} ${
                  activeSection === "solutions" ? styles.rotated : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeSection === "solutions" && (
              <div className={styles.navSectionBody}>
                {solutionsData.map((group, gIdx) => (
                  <ul key={gIdx} className={styles.standardLinksList}>
                    {group.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className={styles.standardLink}
                          onClick={handleLinkClick}
                        >
                          <span className={styles.linkIcon}>{item.icon}</span>
                          <span className={styles.linkTexts}>
                            <span className={styles.linkTitle}>{item.title}</span>
                            <span className={styles.linkSub}>{item.sub}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>

          {/* ============ C. DEVELOPER ============ */}
          <div className={styles.navSection}>
            <button
              type="button"
              className={`${styles.navSectionTrigger} ${
                activeSection === "developer" ? styles.activeTrigger : ""
              }`}
              onClick={() => toggleSection("developer")}
              aria-expanded={activeSection === "developer"}
            >
              <span>Developer</span>
              <svg
                className={`${styles.chev} ${
                  activeSection === "developer" ? styles.rotated : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeSection === "developer" && (
              <div className={styles.navSectionBody}>
                {developerData.map((grp, gIdx) => (
                  <ul key={gIdx} className={styles.standardLinksList}>
                    <div className={styles.groupLabel}>{grp.group}</div>
                    {grp.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className={styles.standardLink}
                          onClick={handleLinkClick}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className={styles.linkIcon}>{item.icon}</span>
                          <span className={styles.linkTexts}>
                            <span className={styles.linkTitle}>{item.title}</span>
                            <span className={styles.linkSub}>{item.sub}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>

          {/* ============ D. RESOURCES ============ */}
          <div className={styles.navSection}>
            <button
              type="button"
              className={`${styles.navSectionTrigger} ${
                activeSection === "resources" ? styles.activeTrigger : ""
              }`}
              onClick={() => toggleSection("resources")}
              aria-expanded={activeSection === "resources"}
            >
              <span>Resources</span>
              <svg
                className={`${styles.chev} ${
                  activeSection === "resources" ? styles.rotated : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeSection === "resources" && (
              <div className={styles.navSectionBody}>
                <ul className={styles.standardLinksList}>
                  {resourcesData.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className={styles.standardLink}
                        onClick={handleLinkClick}
                      >
                        <span className={styles.linkIcon}>{item.icon}</span>
                        <span className={styles.linkTexts}>
                          <span className={styles.linkTitle}>{item.title}</span>
                          <span className={styles.linkSub}>{item.sub}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ============ E. COMPANY ============ */}
          <div className={styles.navSection}>
            <button
              type="button"
              className={`${styles.navSectionTrigger} ${
                activeSection === "company" ? styles.activeTrigger : ""
              }`}
              onClick={() => toggleSection("company")}
              aria-expanded={activeSection === "company"}
            >
              <span>Company</span>
              <svg
                className={`${styles.chev} ${
                  activeSection === "company" ? styles.rotated : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeSection === "company" && (
              <div className={styles.navSectionBody}>
                <ul className={styles.standardLinksList}>
                  {companyData.map((item, idx) => {
                    const isInternal = item.href.startsWith("/");
                    return (
                      <li key={idx}>
                        {isInternal ? (
                          <Link
                            href={item.href}
                            className={styles.standardLink}
                            onClick={handleLinkClick}
                          >
                            <span className={styles.linkIcon}>{item.icon}</span>
                            <span className={styles.linkTexts}>
                              <span className={styles.linkTitle}>{item.title}</span>
                              <span className={styles.linkSub}>{item.sub}</span>
                            </span>
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className={styles.standardLink}
                            onClick={handleLinkClick}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className={styles.linkIcon}>{item.icon}</span>
                            <span className={styles.linkTexts}>
                              <span className={styles.linkTitle}>{item.title}</span>
                              <span className={styles.linkSub}>{item.sub}</span>
                            </span>
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Drawer Bottom Footer (Login / Register) */}
        <div className={styles.drawerFooter}>
          <Link
            href="/login"
            className={`${styles.btn} ${styles.btnGhost}`}
            onClick={handleLinkClick}
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className={`${styles.btn} ${styles.btnBlue}`}
            onClick={handleLinkClick}
          >
            Register
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MenuMobile;

