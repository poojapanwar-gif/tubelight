const aiPoweredTicketing = {
  hero: {
    lines: [
      [{ text: "Turn Every Customer Issue" }],
      [{ text: "into a " }, { text: "Faster Resolution", accent: true }],
    ],
    text: "Manage customer queries, automate ticket handling, and improve resolution times with AI-powered ticketing. From ticket creation to prioritization, assignment, escalation, and resolution, bring intelligence and accountability to every support interaction.",
    visual: "ticketing",
  },
  platform: {
    eyebrow: "THE PLATFORM",
    title: ["One Intelligent System for", "Every Support Request"],
    paragraphs: [
      "Traditional ticketing systems rely heavily on manual categorization, assignment, follow-ups, and status updates. Our AI-powered ticketing solution helps streamline these activities so your team can focus on solving customer problems instead of managing tickets.",
      "AI agents can assist with repetitive requests, recommend relevant responses, identify priority issues, and support human agents throughout the ticket lifecycle.",
    ],
    visual: "ticket",
  },
  features: [
    {
      title: "AI-Powered Ticket Creation",
      text: "Convert incoming customer interactions into structured support tickets with relevant customer details, conversation context, and issue summaries.",
      variant: "wide",
      widget: "pills",
    },
    {
      title: "Intelligent Categorization and Prioritization",
      text: "Classify tickets based on issue type, urgency, customer context, and configurable business rules.",
      variant: "highlight",
      widget: "priority",
    },
    {
      title: "Smart Ticket Assignment",
      text: "Route tickets to the appropriate team or agent based on expertise, availability, workload, and predefined routing rules.",
      widget: "assignees",
    },
    {
      title: "Automated Responses and Resolution Assistance",
      text: "Help agents respond faster with AI-generated suggestions, relevant knowledge articles, and automated handling of eligible routine requests.",
      widget: "suggested",
    },
    {
      title: "SLA Monitoring and Escalation",
      text: "Track response and resolution deadlines, identify tickets at risk of breaching SLAs, and trigger alerts or escalations based on configured rules.",
      widget: "sla",
    },
    {
      title: "Complete Conversation History",
      text: "Keep relevant customer interactions and ticket updates connected, giving agents the context they need to provide consistent support.",
      widget: "history",
    },
    {
      title: "Ticket Analytics and Reporting",
      text: "Monitor ticket volumes, response times, resolution times, pending queues, SLA performance, and team productivity.",
      variant: "span2",
      widget: "bars",
    },
  ],
  stepsLayout: "3-3",
  steps: [
    { title: "Capture", text: "Receive a customer request through an enabled channel." },
    { title: "Understand", text: "Use AI and configured rules to identify the issue and summarize the interaction." },
    { title: "Create", text: "Generate a ticket with relevant details and category." },
    { title: "Route", text: "Assign it to the appropriate team or agent." },
    { title: "Resolve", text: "Assist the agent or automate eligible actions." },
    { title: "Track", text: "Monitor progress, SLA status, escalations, and outcomes." },
  ],
  benefits: [
    "Reduce manual ticket management",
    "Improve response and resolution times.",
    "Prioritize urgent customer issues.",
    "Increase agent productivity.",
    "Improve SLA visibility and accountability.",
    "Build a consistent customer support experience.",
  ],
  industries: [
    { icon: "🎧", label: "Customer Support" },
    { icon: "💻", label: "IT Helpdesks" },
    { icon: "📡", label: "Telecom" },
    { icon: "🛒", label: "E-commerce" },
    { icon: "🏦", label: "Financial Services" },
    { icon: "☁️", label: "SaaS" },
    { icon: "🏢", label: "Enterprises" },
  ],
  faqs: [
    {
      q: "What is AI-powered ticketing?",
      a: "It combines ticket management with AI assistance to help classify, prioritize, route, summarize, and resolve customer issues more efficiently.",
    },
    {
      q: "Can tickets be created automatically?",
      a: "Yes. Incoming customer interactions can be converted into structured support tickets with relevant customer details, conversation context, and issue summaries.",
    },
    {
      q: "Can tickets be assigned to specific teams?",
      a: "Yes. Tickets can be routed to the appropriate team or agent based on expertise, availability, workload, and predefined routing rules.",
    },
    {
      q: "Does AI replace human support agents?",
      a: "No. AI agents assist with repetitive requests and recommend relevant responses, while human agents remain involved throughout the ticket lifecycle.",
    },
    {
      q: "Can we monitor SLA performance?",
      a: "Yes. You can track response and resolution deadlines, identify tickets at risk of breaching SLAs, and trigger alerts or escalations based on configured rules.",
    },
  ],
  cta: null,
};

export default aiPoweredTicketing;
