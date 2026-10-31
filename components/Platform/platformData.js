import React from "react";

// Per-page copy for the shared platform layout (copied verbatim from the Figma frames).

const devTextInbox =
  "Tubelight’s APIs let you connect 1iNbox to your CRM, helpdesk or app. Sync conversations, trigger replies and automate workflows with a few lines of code.";

export const bottlData = {
  hero: {
    heading: (
      <>
        Conversational <span>AI</span>
        <br />
        <span>Chatbot</span>
      </>
    ),
    text: "Tubelight’s AI chatbot lets businesses answer customer queries, qualify leads and resolve issues instantly, 24/7, across WhatsApp, your website, apps and more.",
  },
  features: {
    heading: "Integrate the Chatbot on Website, WhatsApp & CRM",
    text: "Add an intelligent chatbot to your channels and maximise lead generation. Let your bot handle first-level conversations and hand over to your agents, with full context, whenever a human touch is needed.",
    cards: [
      {
        icon: "user",
        title: "Convenience for Customers",
        detail:
          "The chatbot gives customers instant answers at any hour, with no waiting in queues and no hunting through menus. It saves time and improves the experience, especially for mobile users.",
      },
      {
        icon: "chart",
        title: "Tracking & Analytics",
        detail:
          "Get detailed conversation reports and insights on queries, drop-offs and lead quality. Use them to refine your marketing and customer service strategies.",
      },
      {
        icon: "engage",
        title: "Customer Engagement",
        detail:
          "Engage customers in real time with personalised, context-aware replies. This builds stronger relationships and increases customer satisfaction",
      },
    ],
  },
  steps: [
    {
      icon: "code",
      title: "1. Integrate",
      detail: "Add the chatbot to your website, app or WhatsApp in just minutes",
    },
    {
      icon: "message",
      title: "2. Chat",
      detail: "Customers message the bot whenever they need help",
    },
    {
      icon: "monitor",
      title: "3. Connect",
      detail: "Complex queries are handed to your team with full chat history",
    },
    {
      icon: "convert",
      title: "4. Convert",
      detail: "Engage, assist and turn leads into loyal customers",
    },
  ],
  useCases: [
    {
      link: "/bottl",
      linktext: "WebBot",
      title: "Website Chatbot",
      detail:
        "Embed the chatbot on your website. When a visitor lands on a page, the bot greets them, answers questions, captures their details and routes hot leads to your sales team.",
    },
    {
      link: "/whatsapp",
      linktext: "WhatsApp Bot",
      title: "WhatsApp Chatbot",
      detail:
        "Run automated conversations on the official WhatsApp Business API. The bot handles order updates, FAQs, bookings and support, and escalates to a live agent when needed.",
    },
    {
      link: "/bottl",
      linktext: "AdsBot",
      title: "Click-to-Chat Ads",
      detail:
        "Add a chat button to your search or social media ads. When a user clicks, the bot starts the conversation, qualifies the lead and passes the details to your CRM.",
    },
  ],
  developerText: devTextInbox,
};

export const contactCenterSuiteData = {
  hero: {
    heading: (
      <>
        Contact Center
        <br />
        <span>Suite</span>
      </>
    ),
    text: "A cloud-based contact center platform that brings voice, SMS, WhatsApp and AI-powered conversations into one workspace, so your agents can answer faster and your customers get a consistent experience.",
  },
  features: {
    heading: "Run Your Customer Conversations From One Contact Center Suite",
    text: "Handle inbound and outbound calls, messages and chats from a single dashboard. Give your agents the context they need and give your business full visibility over every interaction.",
    cards: [
      {
        icon: "calendar",
        title: "Unified Omnichannel Experience",
        detail:
          "Manage voice, SMS, WhatsApp and RCS conversations in one place. Agents see the full customer history, so customers never have to repeat themselves.",
      },
      {
        icon: "chat",
        title: "Real-Time Monitoring & Analytics",
        detail:
          "Track live calls, agent performance, wait times and resolution rates with real-time dashboards and detailed reports. Use the data to improve service quality and cut costs.",
      },
      {
        icon: "chart",
        title: "Smart Routing & Automation",
        detail:
          "Use IVR, skill-based routing and AI-driven automation to send every customer to the right agent or bot quickly. Reduce wait times and increase first-call resolution.",
      },
    ],
  },
  steps: [
    {
      icon: "code",
      title: "1. Integrate",
      detail: "Connect the suite to your CRM, website or app in just minutes",
    },
    {
      icon: "gear",
      title: "2. Configure",
      detail: "Set up IVR flows, routing rules, agents and teams",
    },
    {
      icon: "send",
      title: "3. Connect",
      detail: "Customers reach your team through calls, SMS, WhatsApp and chat",
    },
    {
      icon: "growth",
      title: "4. Convert",
      detail: "Track every interaction and turn conversations into loyal customers",
    },
  ],
  useCases: [
    {
      link: "/contact-center-suite",
      linktext: "Inbound Contact Center",
      title: "Customer Support & Service Desk",
      detail:
        "Receive calls and messages from customers through a single number. IVR menus, smart routing and call queuing connect each customer to the best-suited agent, so support is faster and satisfaction is higher",
    },
    {
      link: "/contact-center-suite",
      linktext: "Outbound Contact Center",
      title: "Sales, Collections & Reminders",
      detail:
        "Run outbound campaigns with auto dialers, click-to-call and bulk messaging. Reach more leads, follow up on payments and send appointment reminders while your agents spend their time on live conversations.",
    },
    {
      link: "/intelligent-conversations",
      linktext: "AI-Powered Contact Center",
      title: "Conversational AI & Chatbots",
      detail:
        "Let AI voice and chat bots handle routine queries 24/7 and hand over to a human agent when needed. Lower your cost per interaction without lowering the quality of service.",
    },
  ],
  developerText:
    "Tubelight programmable API infrastructure enables developers to easily integrate voice and IVR flows into their apps and create solutions of their choice.",
};

export const campaignsData = {
  hero: {
    heading: (
      <>
        Smart <span>Campaigns</span>
      </>
    ),
    text: "Campaigns is a platform that lets businesses plan, launch, and track targeted messages across SMS, WhatsApp, RCS, and Voice from a single dashboard.",
  },
  features: {
    heading: "Run Campaigns Across Every Channel, From One Platform",
    text: "Create, schedule, and optimize campaigns for your customers and CRM leads. Reach the right audience, on the right channel, at the right time with Tubelight.",
    cards: [
      {
        icon: "calendar",
        title: "Reach at Scale",
        detail:
          "Send thousands of messages in a single click. Upload contact lists, segment audiences, and deliver campaigns quickly across SMS, WhatsApp, RCS, and Voice.",
      },
      {
        icon: "chat",
        title: "Tracking & Analytics",
        detail:
          "Track delivery, reads, clicks, and replies in real time. Use detailed reports to see what works and improve every campaign.",
      },
      {
        icon: "chart",
        title: "Customer Engagement",
        detail:
          "Start two-way conversations with rich media, buttons, and quick replies. Build stronger relationships and increase conversions.",
      },
    ],
  },
  steps: [
    {
      icon: "code",
      title: "1. Plan",
      detail: "Upload your contacts and define your audience in minutes.",
    },
    {
      icon: "gear",
      title: "2. Create",
      detail: "Design your message with templates, media, and personalization.",
    },
    {
      icon: "send",
      title: "3. Launch",
      detail: "Schedule or send instantly across your chosen channels.",
    },
    {
      icon: "growth",
      title: "4. Convert",
      detail: "Track responses, follow up, and turn leads into loyal customers.",
    },
  ],
  useCases: [
    {
      link: "/campaigns",
      linktext: "PromoC",
      title: "Promotional Campaigns",
      detail:
        "Announce offers, launches, and seasonal sales to targeted audience segments. Add links, images, and call-to-action buttons to drive instant response.",
    },
    {
      link: "/campaigns",
      linktext: "AlertC",
      title: "Transactional Alerts",
      detail:
        "Send OTPs, order updates, payment reminders, and appointment confirmations. Messages are delivered reliably and on time across all channels.",
    },
    {
      link: "/campaigns",
      linktext: "EngageC",
      title: "Conversational Campaigns",
      detail:
        "Run interactive WhatsApp and RCS campaigns with buttons, carousels, and AI-led replies. Customers can browse, ask, and buy without leaving the chat.",
    },
  ],
  developerText: devTextInbox,
};

export const inboxData = {
  hero: {
    heading: <span>1inBox</span>,
    text: "1iNbox is a unified inbox that brings WhatsApp, SMS, RCS, voice and web chat conversations into one screen. Your team can see every customer message, reply faster and never lose context.",
  },
  features: {
    heading: "1inBox for Every Customer Conversation",
    text: "Stop switching between apps and tabs. Manage every channel from a single dashboard, with a complete history for each customer, so your team can respond quickly and consistently.",
    spacedIntro: true,
    cards: [
      {
        icon: "calendar",
        title: "Every Channel, One Screen",
        detail:
          "Receive and reply to WhatsApp, SMS, RCS, voice and web chat messages in one place. Your team no longer has to move between platforms or miss a message.",
      },
      {
        icon: "chat",
        title: "Smart Routing & Collaboration",
        detail:
          "Assign conversations to the right agent or team automatically. Add internal notes, transfer chats and work together without confusing the customer.",
      },
      {
        icon: "chart",
        title: "Insights & Analytics",
        detail:
          "Track response times, agent performance and conversation volume in real time. Use the data to improve service quality and customer satisfaction.",
      },
    ],
  },
  steps: [
    {
      icon: "code",
      title: "1. Connect",
      detail: "Add your WhatsApp, SMS, RCS, voice and chat channels in minutes",
    },
    {
      icon: "gear",
      title: "2. Receive",
      detail: "Every customer message lands in one shared inbox",
    },
    {
      icon: "send",
      title: "3. Respond",
      detail: "Your team replies with templates, notes and AI-suggested answers",
    },
    {
      icon: "growth",
      title: "4. Resolve",
      detail: "Close conversations, track results and keep customers happy",
    },
  ],
  useCases: [
    {
      link: "/1inbox",
      linktext: "Support Inbox",
      title: "Customer Support Teams",
      detail:
        "Handle support queries from every channel in one queue. Agents see the full conversation history, so customers never have to repeat themselves, and issues are resolved faster.",
    },
    {
      link: "/1inbox",
      linktext: "Sales Inbox",
      title: "Sales & Lead Management",
      detail:
        "Capture enquiries from WhatsApp, web chat and ads in one place. Assign leads to the right sales rep instantly and follow up before the lead goes cold.",
    },
    {
      link: "/1inbox",
      linktext: "Campaign Inbox",
      title: "Marketing & Campaign Replies",
      detail:
        "Manage replies to your bulk SMS, WhatsApp and RCS campaigns in one inbox. Turn responses into conversations and conversations into conversions.",
    },
  ],
  developerText: devTextInbox,
};
