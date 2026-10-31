const intelligentConversations = {
  hero: {
    lines: [
      [{ text: "Every Conversation Connected." }],
      [{ text: "Every Interaction More Intelligent.", accent: true }],
    ],
    text: "Bring customer conversations together and use AI to understand intent, assist with responses, automate routine workflows, and connect customers with the right human agent when needed. Create a more consistent customer experience across supported channels, with the context and tools your teams need to manage conversations efficiently.",
    visual: "empty",
  },
  platform: {
    eyebrow: "THE PLATFORM",
    title: ["From Disconnected Chats to", "Intelligent Customer Engagement"],
    paragraphs: [
      "Customer conversations often happen across multiple channels, leaving teams to switch between applications, search for context, and repeat the same work.",
      "Intelligent Conversations brings supported channels into a unified workspace and adds AI-assisted capabilities to help teams understand customer needs, respond efficiently, and automate appropriate next steps. AI agents can support routine interactions and configured workflows, while human agents remain available for complex requests, sensitive issues, and situations that require judgment.",
    ],
    visual: null,
  },
  features: [
    {
      title: "Unified Conversation Workspace",
      text: "Manage customer interactions across enabled channels, which may include WhatsApp, Instagram DMs, Facebook Messenger, RCS, Email, WebChat, SMS, and Voice.",
      variant: "wide",
      widget: "pills",
    },
    {
      title: "AI-Powered Intent Recognition",
      text: "Identify customer intent from incoming messages to help determine the appropriate response, workflow, or destination.",
      variant: "highlight",
      widget: "priority",
    },
    {
      title: "Context-Aware Response Assistance",
      text: "Generate suggested responses using available conversation history and approved knowledge sources, subject to the enabled AI capabilities.",
    },
    {
      title: "AI Agent Workflow Execution",
      text: "Use configured AI agents and business rules to perform supported tasks, retrieve permitted information, and initiate approved workflows.",
    },
    {
      title: "Seamless Human Handover",
      text: "Transfer conversations to human agents when needed, preserving relevant context and conversation history where supported.",
    },
    {
      title: "Intelligent Routing",
      text: "Route conversations based on configured criteria such as topic, team, availability, or customer requirements.",
    },
    {
      title: "Complete Conversation History",
      text: "Help agents understand previous interactions and maintain continuity across supported channels and connected systems.",
    },
    {
      title: "Conversation Analytics",
      text: "Track available metrics such as conversation volumes, response times, resolution outcomes, handovers, and agent performance.",
    },
  ],
  stepsLayout: "3-3",
  steps: [
    { title: "Connect", text: "Receive customer interactions through enabled channels." },
    { title: "Understand", text: "Identify the customer's intent and relevant context." },
    { title: "Respond", text: "Provide an approved AI-assisted response or initiate a supported workflow." },
    { title: "Act", text: "Execute permitted actions through configured integrations and business rules." },
    { title: "Escalate", text: "Transfer the interaction to a human agent when necessary." },
    { title: "Learn & Improve", text: "Review conversation outcomes and analytics to refine workflows and knowledge sources." },
  ],
  benefits: [
    "Reduce the need to switch between communication tools.",
    "Improve response consistency and speed.",
    "Automate eligible repetitive interactions.",
    "Provide better context during human handovers.",
    "Improve visibility into conversation performance.",
    "Create a connected experience across customer touchpoints.",
  ],
  // NOTE: "Order and Service Updates" appears twice in the Figma design — kept verbatim, flag for client review.
  industries: [
    { label: "Customer Support" },
    { label: "Sales Engagement" },
    { label: "Lead Management" },
    { label: "Order and Service Updates" },
    { label: "Order and Service Updates" },
    { label: "Internal Assistance" },
  ],
  faqs: [
    {
      q: "What are Intelligent Conversations?",
      a: "They combine a unified conversation workspace with AI assistance and workflow automation to help businesses manage customer interactions more effectively.",
    },
    {
      q: "Can AI handle customer conversations automatically?",
      a: "AI agents can handle routine interactions and configured workflows, while complex requests, sensitive issues, and situations that require judgment can be passed to human agents.",
    },
    {
      q: "Can a human agent take over?",
      a: "Yes. Conversations can be transferred to human agents when needed, with relevant context and conversation history preserved where supported.",
    },
    {
      q: "Which channels are supported?",
      a: "Available channels depend on your enabled integrations and may include WhatsApp, Instagram DMs, Facebook Messenger, RCS, Email, WebChat, SMS, and Voice.",
    },
    {
      q: "Can AI access customer information?",
      a: "AI agents can retrieve only the information they are permitted to access through configured integrations and business rules.",
    },
    {
      q: "Can we measure conversation performance?",
      a: "Yes. You can track available metrics such as conversation volumes, response times, resolution outcomes, handovers, and agent performance.",
    },
  ],
  cta: {
    title: "Make Every Customer Conversation Count",
    text: "Connect your channels, empower your agents, and automate the right interactions with intelligent customer engagement.",
  },
};

export default intelligentConversations;
