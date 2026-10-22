import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export const metadata = {
  title: "Tubelight Communications — Customer Engagement Platform for Modern Enterprises",
  description:
    "Connect with customers across WhatsApp, SMS, RCS, Voice, Email and AI-powered conversations from a single omnichannel platform. CPaaS + contact centre built for modern enterprises.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
};

export default RootLayout;
