const aiCampaigner = {
  hero: {
    lines: [
      [{ text: "Create Smarter Campaigns." }],
      [{ text: "Engage the Right Audience.", accent: true }],
    ],
    text: "Plan, launch, and optimize customer communication campaigns across supported messaging channels. Combine audience segmentation, automated journeys, personalized communication, and campaign analytics to make every interaction more relevant.",
    visual: "empty",
  },
  platform: {
    eyebrow: "THE PLATFORM",
    title: ["Move Beyond Manual", "Campaign Execution"],
    paragraphs: [
      "Customer engagement requires more than sending bulk messages. Businesses need to reach the right audience, choose relevant communication, follow up at the right time, and measure campaign performance.",
      "AI Campaigner helps streamline campaign operations through configurable workflows and AI-assisted capabilities. Manage customer outreach across WhatsApp, SMS, RCS, Email, and Voice where supported by your platform integrations.",
    ],
    visual: null,
  },
  features: [
    {
      title: "Omnichannel Campaign Management",
      text: "Manage campaigns across supported channels from a centralized interface, with channel-specific configuration and execution.",
      variant: "wide",
      widget: "pills",
    },
    {
      title: "Audience Segmentation",
      text: "Create target groups using available customer attributes, consent status, engagement history, and business-defined criteria.",
      variant: "highlight",
      widget: "priority",
    },
    {
      title: "AI-Assisted Personalization",
      text: "Generate or refine message content for different audiences, subject to approved templates, channel policies, and platform capabilities.",
    },
    {
      title: "Automated Customer Journeys",
      text: "Set up trigger-based communication, scheduled follow-ups, and multi-step workflows based on defined customer actions or events.",
    },
    {
      title: "Campaign Scheduling",
      text: "Plan campaign delivery according to business requirements, audience time zones, and available scheduling controls.",
    },
    {
      title: "Intelligent Follow-Ups",
      text: "Configure follow-up communication based on delivery status, engagement events, customer responses, or other supported triggers.",
    },
    {
      title: "Campaign Performance Analytics",
      text: "Track available metrics such as submitted messages, delivery rates, clicks, responses, conversions, failures, and campaign costs.",
    },
    {
      title: "Template and Compliance Management",
      text: "Manage approved messaging templates, opt-in requirements, suppression lists, and applicable channel-specific policies.",
    },
  ],
  stepsLayout: "3-4",
  steps: [
    { title: "Define", text: "Set campaign goals and the desired customer outcome." },
    { title: "Segment", text: "Select the relevant audience using available customer data." },
    { title: "Create", text: "Prepare campaign content and channel-specific templates." },
    { title: "Automate", text: "Configure schedules, triggers, and follow-up workflows." },
    { title: "Launch", text: "Execute the campaign through enabled channels." },
    { title: "Analyze", text: "Review delivery, engagement, conversion, and cost metrics." },
    { title: "Optimize", text: "Use campaign insights to improve future communication." },
  ],
  benefits: [
    "Manage campaigns from a centralized workspace.",
    "Improve audience relevance through segmentation.",
    "Reduce manual campaign execution.",
    "Automate customer follow-ups.",
    "Track campaign performance and communication costs.",
    "Improve visibility into engagement and conversion outcomes.",
  ],
  industries: [
    { label: "Lead Generation" },
    { label: "Customer Onboarding" },
    { label: "Promotional Campaign" },
    { label: "Appointment Reminders" },
    { label: "Payment and Service Notifications" },
    { label: "Customer Retention" },
  ],
  faqs: [
    {
      q: "Which channels can I use?",
      a: "Available channels depend on the active integrations and your subscription. Supported deployments may include WhatsApp, SMS, RCS, Email, and Voice.",
    },
    {
      q: "Can I schedule campaigns?",
      a: "Yes. You can plan campaign delivery according to your business requirements, audience time zones, and the available scheduling controls.",
    },
    {
      q: "Can campaigns be triggered automatically?",
      a: "Yes. You can set up trigger-based communication, scheduled follow-ups, and multi-step workflows based on defined customer actions or events.",
    },
    {
      q: "Can I personalize messages?",
      a: "Yes. AI-assisted personalization can generate or refine message content for different audiences, subject to approved templates, channel policies, and platform capabilities.",
    },
    {
      q: "How do I measure campaign success?",
      a: "Campaign analytics let you track available metrics such as submitted messages, delivery rates, clicks, responses, conversions, failures, and campaign costs.",
    },
    {
      q: "How is messaging compliance handled?",
      a: "You can manage approved messaging templates, opt-in requirements, suppression lists, and applicable channel-specific policies from within the platform.",
    },
  ],
  cta: {
    title: "Turn Customer Communication into Measurable Outcomes",
    text: "Build connected campaigns that reach the right audience, automate follow-ups, and provide clear performance insights.",
  },
};

export default aiCampaigner;
