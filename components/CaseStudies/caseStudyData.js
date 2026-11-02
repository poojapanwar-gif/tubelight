// All case-study copy lives here (verbatim from the Figma screenshots).
// Template placeholders in the design ("{{Company}}", "{{Client Name}}") have
// been replaced with the neutral phrase "the client".

/* ------------------------------------------------------------------ */
/* Listing page cards (/case-studies)                                  */
/* ------------------------------------------------------------------ */
// `slug` → detail page (only when a detail design exists).
// `image` → expected illustration asset (missing from the repo for now);
// `bg` is the gradient placeholder shown behind / instead of it.
export const caseStudyCards = [
  {
    title: "Missed Call Service",
    description: "",
    slug: "missed-call-service",
    image: "/images/casestudy1.png",
    bg: "linear-gradient(180deg, #c8f3f9 0%, #9fe7f2 100%)",
  },
  {
    title: "TextEdu",
    description:
      "The client faced a significant challenge in disseminating product information to their extensive medical store network.",
    slug: null,
    image: "/images/casestudy2.png",
    bg: "linear-gradient(180deg, #d9ecf8 0%, #a9d4ee 100%)",
  },
  {
    title: "Cloud Telephony Solution",
    description:
      "The sales processes involved in the real estate industry often had long life cycles, requiring relationship managers to nurture prospects over an extended period.",
    slug: null,
    image: "/images/casestudy3.png",
    bg: "linear-gradient(160deg, #8a82db 0%, #b4a9f0 100%)",
  },
  {
    title: "IVR call Service",
    description:
      "A renowned brand in the pathology services business operates close to 1,000 test labs across India through a direct and franchise model.",
    slug: null,
    image: "/images/casestudy4.png",
    bg: "linear-gradient(180deg, #e9ecfd 0%, #dde2fb 100%)",
  },
  {
    title: "Custom Link Textedu",
    description:
      "The customer is large company, which supplies Natural Liquid Gas for domestic as well as commercial use and caters to more",
    slug: null,
    image: "/images/casestudy5.png",
    bg: "linear-gradient(160deg, #aeaaea 0%, #8580dd 100%)",
  },
  {
    title: "Banking & Finance",
    description:
      "Banking for smaller banks, now just a WhatsApp chat away",
    slug: "banking-finance",
    image: "/images/casestudy6.png",
    bg: "linear-gradient(150deg, #eef0ff 0%, #d9ddfd 55%, #c3c9fb 100%)",
  },
  {
    title: "Electric Utility",
    description:
      "Bringing essential utility services to consumers through WhatsApp",
    slug: "electric-utility",
    image: "/images/casestudy7.png",
    bg: "linear-gradient(150deg, #fff7e6 0%, #fde9c4 55%, #f9d79a 100%)",
  },
  {
    title: "Health Tech",
    description:
      "Transforming patient engagement across multiple branches with CPaaS",
    slug: "health-tech",
    image: "/images/casestudy8.png",
    bg: "linear-gradient(150deg, #e9faf2 0%, #c9f0dd 55%, #a5e3c5 100%)",
  },
  {
    title: "Oil Company",
    description:
      "Automating customer engagement and gift dispatch for a global lubricants leader",
    slug: "oil-company",
    image: "/images/casestudy9.png",
    bg: "linear-gradient(150deg, #fff1ea 0%, #fddccb 55%, #f8c4a8 100%)",
  },
  {
    title: "Home & Appliances",
    description:
      "Enabling self-service for customers, distributors, and dealers through WhatsApp",
    slug: "home-appliance",
    image: "/images/casestudy10.png",
    bg: "linear-gradient(150deg, #eaf6ff 0%, #cfe8fb 55%, #acd6f6 100%)",
  },
  {
    title: "Banking",
    description:
      "Secure, easy access to banking services directly through WhatsApp",
    slug: "banking",
    image: "/images/casestudy11.png",
    bg: "linear-gradient(150deg, #f1eeff 0%, #ddd6fd 55%, #c6bbf8 100%)",
  },
  {
    title: "Insurance Company",
    description: "Simplifying policy services with a WhatsApp virtual assistant",
    slug: "insurance",
    image: "/images/casestudy12.png",
    bg: "linear-gradient(150deg, #ecfbfb 0%, #ccf1f1 55%, #a8e3e4 100%)",
  },
  {
    title: "Real Estate",
    description:
      "Streamlining property enquiries and sales communication with automated cloud telephony",
    slug: null,
    image: "/images/casestudy13.png",
    bg: "linear-gradient(150deg, #fdf0f5 0%, #f8d9e6 55%, #f0bdd2 100%)",
  },
];

/* ------------------------------------------------------------------ */
/* Shared bits for the "structured" template                           */
/* ------------------------------------------------------------------ */
const moreStories = [
  {
    tag: "Electric Utility",
    title: "Bringing essential utility services to consumers through WhatsApp",
    slug: "electric-utility",
  },
  {
    tag: "Health Tech",
    title: "Transforming patient engagement across multiple branches with CPaaS",
    slug: "health-tech",
  },
  {
    tag: "Banking",
    title: "Secure, easy access to banking services directly through WhatsApp",
    slug: "banking",
  },
];

const bankingCta = {
  title: "Bring WhatsApp banking to your customers",
  text: "Talk to our team about integrating your core banking system with WhatsApp.",
};

const defaultStats = (firstLabel) => [
  { value: "6", label: firstLabel },
  { value: "24×7", label: "Self-service availability" },
  { value: "0", label: "Branch visits needed" },
  { value: "100%", label: "Secure API integration" },
];

const securityPills = [
  "🔒 Secure APIs",
  "🔑 PIN-protected access",
  "✅ Official WhatsApp Business",
];

/* ------------------------------------------------------------------ */
/* Detail pages (/case-studies/[slug])                                 */
/* ------------------------------------------------------------------ */
export const caseStudies = [
  /* ---------------------------- classic --------------------------- */
  {
    slug: "missed-call-service",
    template: "classic",
    title: "Missed Call Service",
    heroImage: "/images/case-studies/missed-call-hero.jpg",
    metaDescription:
      "How a missed call service helped a civil hospital improve TB medication adherence.",
    rows: [
      {
        heading: "The Problem",
        art: "problem",
        image: "/images/case-studies/missed-call-problem.jpg",
        paragraphs: [
          "Amongst the various diseases it addresses, the hospital provides medical care for TB patients and even provides free medicines for their treatment. However, one of the significant obstacles encountered by the hospital was the patient's irregularity in taking their prescribed medications. This lack of adherence to the Tuberculosis medicine regimen led to incomplete treatment, prolonged treatment and disease progression. Moreover, it increased the risk of drug resistance, increased transmission, and public health implications necessitating more intensive care and hospitalization.",
          "Ensuring regular medication is vital for effective treatment and the recovery of TB patients. Unfortunately, the hospital faced challenges in ensuring that the patients consistently took their prescribed medicines. Often, they would only discover this issue during the patient's subsequent visits, which resulted in delays in identifying the problem and addressing it.",
        ],
      },
      {
        heading: "Solutions",
        art: "solution",
        image: "/images/case-studies/missed-call-solution.jpg",
        paragraphs: [
          "India has been actively involved in TB control activities for more than 50 years now. But TB still continues to be a severe health problem in India. Understanding the problem, the solution revolved around effective treatment of the disease. This is possible only if the patients regularly consume the given medicines and complete the course. And the only way to ensure this was through stringent monitoring.",
          "Tubelight offered an out of the box solution for this problem. A pool of numbers, mapped to missed call services, were mapped to specific medicine as per the prescribed course. These numbers were typed in the packets of the medicine given to the patients. The patients were asked to give a missed call on the number mentioned in the packet each time they consumed the medicine. The resultant data of the missed call was then scrutinised by the hospital staff to identify those patients who failed to give a missed call. These patient's were called by the staff to check the reasons and to urge them to take the medicine.",
        ],
      },
      {
        heading: "Outcome",
        art: "outcome",
        image: "/images/case-studies/missed-call-outcome.jpg",
        paragraphs: [
          "The missed call solution at Shri Vinoba Bhave Civil Hospital had positive outcomes for TB patients. The monitoring system improved medication adherence, leading to faster recovery and reduced TB cases. Patients gave missed calls after taking medication, enabling staff to identify non-adherence promptly. Staff engagement with non-adherent patients encouraged compliance.",
          "The solution resulted in enhanced patient engagement, reduced transmission, and minimized drug resistance. The hospital observed fewer active TB cases, contributing to community health. Timely intervention prevented spread and reduced hospitalization costs. Overall, the missed call solution successfully addressed irregular medication intake and improved TB control efforts.",
        ],
      },
    ],
  },

  /* --------------------------- Health Tech ------------------------- */
  {
    slug: "health-tech",
    template: "structured",
    title: "Health Tech",
    breadcrumb: "Health Tech",
    heroImage: "/images/healthimage.png",
    metaDescription:
      "Transforming patient engagement across multiple branches with CPaaS.",
    tags: ["Health Tech", "Patient Engagement", "CPaaS Solution"],
    heading: {
      text: "Transforming patient engagement across multiple branches with ",
      highlight: "CPaaS",
    },
    intro:
      "The client, a healthcare and research company in Pune, partnered with Tubelight to transform patient engagement across multiple branches.",
    meta: [
      { label: "Sector", value: "Health Tech" },
      { label: "Solution", value: "Tubelight CPaaS" },
      { label: "Agents", value: "150+" },
      { label: "Channel", value: "OMNICHANNEL" },
    ],
    stats: defaultStats("Services in one chat"),
    objective: {
      heading: "Streamline patient engagement at scale",
      text: "The objective was to streamline patient engagement across multiple branches, reduce dependency on physical visits for appointment booking, deliver personalised patient journeys while maintaining efficiency, and enable scalable awareness campaigns for health initiatives and technology launches.",
      goals: [
        "Streamline patient engagement across multiple branches.",
        "Reduce dependency on physical visits for appointment booking.",
        "Deliver personalised patient journeys while maintaining efficiency.",
        "Enable scalable awareness campaigns for health initiatives and technology launches.",
      ],
    },
    solution: {
      heading: "Tubelight CPaaS — an integrated communication platform",
      text: "Tubelight deployed its CPaaS solution to unify patient communication across WhatsApp, SMS, voice, and email — enabling automated booking, live agent support, and rich broadcast messaging across all branches",
      flow: {
        arrows: true,
        nodes: [
          { icon: "🧑‍⚕️", label: "Patient" },
          { icon: "📲", label: "WhatsApp / SMS / Voice" },
          { icon: "🖥️", label: "Tubelight CPaaS" },
          { icon: "🏥", label: "Healthcare System" },
        ],
      },
      features: [
        {
          icon: "🎧",
          title: "Contact Centre Suite",
          text: "Patients interact seamlessly across WhatsApp, SMS, voice, and email, ensuring one-to-one personalised engagement from brand to customer.",
        },
        {
          icon: "🔀",
          title: "WhatsApp Automated Chatflow",
          text: "Patients can book appointments by simply mentioning their preferred location and date/ time via WhatsApp, reducing booking time to just 2 minutes.",
        },
        {
          icon: "👥",
          title: "Live Agent Redirection",
          text: "If automated chatflows don't fully resolve patient needs, Tubelight's 1iNbox panel allows manual agent takeover, giving patients a personalised experience.",
        },
        {
          icon: "✍️",
          title: "Rich Communication Messages",
          text: "Used for awareness activities, technology launch announcements, appointment booking links, and broadcast communications.",
        },
        {
          icon: "💰",
          title: "Cross-Channel Communication",
          text: "Supports 150+ agents calling registered users, ensuring smooth doctor-patient coordination.",
        },
      ],
      pills: ["Contact Centre", "WhatsApp Chatflow", "Omnichannel Engagement"],
    },
    impact: {
      heading: "Unified patient communication, measurable outcomes",
      text: "Tubelight's CPaaS platform enabled the client to unify patient engagement across channels — simplifying bookings, enabling live support, and scaling awareness campaigns across all branches.",
      results: [
        {
          title: "Simplified Booking",
          text: "Simplified patient booking journey through automated WhatsApp chatflows, reducing booking time to just 2 minutes.",
        },
        {
          title: "Personalised Engagement",
          text: "Personalised engagement with live agents when needed, ensuring no patient query goes unresolved.",
        },
        {
          title: "Operational Efficiency",
          text: "Call centre agents manage provider relationships and consultations more effectively with 150+ agents supported.",
        },
        {
          title: "Scalable Communication",
          text: "Rich messages broadcast across branches for awareness and promotions, enabling scalable health initiative campaigns.",
        },
        {
          title: "Revenue Growth",
          text: "Improved patient reach and streamlined workflows drive higher conversions and revenue growth.",
        },
      ],
    },
    moreStories,
    cta: {
      title: "Transform the Way You Connect with Your Patients",
      text: "Simplify appointment bookings, personalise patient interactions, and deliver seamless healthcare communication across every channel with Tubelight's CPaaS solutions.",
    },
  },

  /* ------------------------- Electric Utility ---------------------- */
  {
    slug: "electric-utility",
    template: "structured",
    title: "Electric Utility",
    breadcrumb: "Electric Utility",
    heroImage: "/images/electricityimage.png",
    metaDescription:
      "Bringing essential utility services to consumers through WhatsApp.",
    tags: ["Electric Utility", "WhatsApp Self-Service", "Consumer Engagement"],
    heading: {
      text: "Bringing essential utility services to consumers through ",
      highlight: "WhatsApp",
    },
    intro:
      "Tubelight Communications enabled to offer a self-service WhatsApp platform — empowering consumers to access billing, register complaints, and manage account details without visiting physical offices.",
    meta: [
      { label: "Client", value: "Electric Utility" },
      { label: "Availability", value: "24×7" },
      { label: "Platform", value: "WhatsApp" },
      { label: "Services", value: "8 services" },
    ],
    stats: defaultStats("Services in one chat"),
    objective: {
      heading: "Simplify consumer access to essential utility services",
      text: "To make it easier for consumers to access bills, register complaints, and update their information — without the need to visit physical offices. The objective was to introduce a self-service platform through WhatsApp, enabling 24×7 access to essential utility services.",
    },
    solution: {
      heading: "A WhatsApp-based self-service platform for utility consumers",
      text: "Tubelight Communications built a WhatsApp chatbot that allows consumers to perform key utility-related tasks directly from their phones. The platform offers the following services:",
      flow: {
        arrows: false,
        nodes: [
          { icon: "📱", label: "Customer" },
          { icon: "💬", label: "WhatsApp Chatbot" },
          { icon: "🔐", label: "Tubelight Platform" },
          { icon: "🏦", label: "Utility Backend" },
        ],
      },
      features: [
        {
          icon: "💰",
          title: "Account balance",
          text: "Update registered mobile number or email address directly through WhatsApp.",
        },
        {
          icon: "🧾",
          title: "No power complaints",
          text: "Register a no-power complaint instantly without calling or visiting the office.",
        },
        {
          icon: "📄",
          title: "Complaint status",
          text: "Track the status of registered complaints in real time.",
        },
        {
          icon: "✍️",
          title: "Billing equation",
          text: "Access current and past billing details on demand.",
        },
        {
          icon: "📑",
          title: "Duplicate Bill (PDF)",
          text: "Download a duplicate bill as a PDF directly through the chat.",
        },
        {
          icon: "🤝",
          title: "Reach out to us",
          text: "Connect with customer support for any additional queries or assistance.",
        },
        {
          icon: "📧",
          title: "Opt-in for eBills",
          text: "Subscribe to receive electricity bills electronically via WhatsApp.",
        },
        {
          icon: "🧾",
          title: "Duplicate Receipt",
          text: "Retrieve a duplicate payment receipt for past transactions.",
        },
      ],
      pills: securityPills,
    },
    impact: {
      heading: "Transforming utility services through digital self-service",
      text: "Tubelight's WhatsApp-based platform enabled to modernise consumer engagement — delivering essential utility services through a familiar, accessible digital channel.",
      results: [
        {
          title: "Convenience",
          text: "Consumers can access essential services anytime, anywhere — without visiting a physical office.",
        },
        {
          title: "Faster Resolution",
          text: "Complaints are registered and tracked instantly through WhatsApp, reducing turnaround time",
        },
        {
          title: "Cost Savings",
          text: "Reduced operational costs for the utility company by minimising in-person service requests.",
        },
        {
          title: "Customer Satisfaction",
          text: "Improved consumer satisfaction through quick, hassle-free access to billing and support services.",
        },
        {
          title: "Digital Adoption",
          text: "Encouraged digital adoption among consumers through a familiar and intuitive platform.",
        },
      ],
    },
    // The Electric Utility design has no "More customer stories" section.
    moreStories: null,
    cta: bankingCta,
  },

  /* ------------------ Banking & Finance (BANK) -------------------- */
  {
    slug: "banking-finance",
    template: "structured",
    title: "Banking & Finance",
    breadcrumb: "Banking",
    metaDescription:
      "Banking for smaller banks, now just a WhatsApp chat away.",
    tags: ["Banking & Finance", "WhatsApp Banking", "Secure APIs"],
    heading: {
      text: "Banking for smaller banks, now just a ",
      highlight: "WhatsApp chat away",
    },
    intro:
      "Tubelight Communications integrated BANK's core banking system with WhatsApp, enabling smaller banks to offer convenient, menu-based access to essential banking services through a familiar messaging platform.",
    chatMockup: {
      name: "BANK",
      status: "Official business account",
      messages: [
        { from: "user", text: "Hi" },
        {
          from: "bot",
          text: "Welcome to BANK 👋 Reply with a number:",
          options: [
            "Check balance",
            "Mini statement",
            "Account statement",
            "Cheque status",
            "Interest certificate",
            "Reset PIN",
          ],
        },
        { from: "user", text: "1" },
        { from: "bot", text: "Your available balance is ₹ ••,••••.••" },
      ],
    },
    meta: [
      { label: "Client", value: "BANK" },
      { label: "Sector", value: "Banking" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Integration", value: "Core banking · API" },
    ],
    stats: defaultStats("Banking services in one chat"),
    objective: {
      heading: "Make everyday banking effortless",
      text: "The objective was to make everyday banking services more accessible to customers of banks using BANK's core banking software. The initiative focused on integrating WhatsApp with the existing banking system to enable customers to access essential banking services through a simple, menu-based interface.",
    },
    solution: {
      heading: "Core banking, connected to WhatsApp",
      text: "Tubelight integrated BANK's core banking system with WhatsApp through secure APIs, enabling customers to access essential banking services through a simple menu-based chatflow.",
      flow: {
        arrows: false,
        nodes: [
          { icon: "📱", label: "Customer", sub: "Messages on WhatsApp", subArrow: true },
          { icon: "💬", label: "Menu chatflow", sub: "Simple numbered options", subArrow: true },
          { icon: "🔐", label: "Tubelight secure API", sub: "Authenticated & encrypted", subArrow: true },
          { icon: "🏦", label: "Core banking", sub: "BANK central software" },
        ],
      },
      features: [
        { icon: "💰", title: "Account balance", text: "Check available account balances instantly." },
        { icon: "🧾", title: "Mini statements", text: "View recent transactions in the chat." },
        { icon: "📄", title: "Account statements", text: "Request complete account statements." },
        { icon: "✍️", title: "Cheque status", text: "Track cheque clearance status." },
        { icon: "📊", title: "Interest certificates", text: "Access interest certificates on demand." },
        { icon: "🔑", title: "PIN reset", text: "Reset the WhatsApp banking PIN securely." },
      ],
      pills: securityPills,
    },
    impact: {
      heading: "Modern banking, delivered through a simple chatflow",
      text: "Secure, convenient and modern banking for customers of smaller banks.",
      numberTone: "grey",
      results: [
        {
          title: "Simplified banking",
          text: "Routine banking services are accessible directly through WhatsApp, making everyday banking easier.",
        },
        {
          title: "Better customer experience",
          text: "Customers can access supported banking services conveniently without visiting a physical bank.",
        },
        {
          title: "Higher service efficiency",
          text: "Smaller banks can offer digital banking services without dedicated in-house software solutions.",
        },
      ],
    },
    moreStories,
    cta: bankingCta,
  },

  /* ----------------------------- Banking --------------------------- */
  {
    slug: "banking",
    template: "structured",
    title: "Banking",
    breadcrumb: "Banking",
    metaDescription:
      "Secure, easy access to banking services directly through WhatsApp.",
    tags: ["WhatsApp Banking", "CBS Integration", "Multilingual"],
    heading: {
      text: "Secure, easy access to banking services directly through ",
      highlight: "WhatsApp",
    },
    intro:
      "Bank wanted to provide customers with secure, easy access to banking services directly through WhatsApp. The goal was to simplify routine tasks like checking balances, updating contact details, and locating branches/ ATMs, while ensuring end-to-end security with OTP verification.",
    meta: [
      { label: "Sector", value: "Banking" },
      { label: "Integration", value: "CBS via APIs" },
      { label: "Security", value: "OTP Verified" },
      { label: "Languages", value: "Odia, Hindi, English" },
    ],
    stats: defaultStats("Banking services in one chat"),
    objective: {
      heading: "Secure, easy access to banking services through WhatsApp",
      text: "Bank wanted to provide customers with secure, easy access to banking services directly through WhatsApp. The goal was to simplify routine tasks like checking balances, updating contact details, and locating branches/ATMs, while ensuring end-to-end security with OTP verification.",
    },
    solution: {
      heading:
        "WhatsApp banking chatflow integrated with Core Banking System APIs",
      text: "Tubelight developed a WhatsApp banking chatflow integrated with the bank's CBS (Core Banking System) APIs. Language options — Odia, Hindi, and English — are available from the very first message.",
      flow: {
        arrows: true,
        nodes: [
          { icon: "👥", label: "Customer" },
          { icon: "📲", label: "WhatsApp Chatflow" },
          { icon: "✅", label: "OTP Authentication" },
          { icon: "🖥️", label: "CBS (Core Banking)" },
        ],
      },
      features: [
        {
          icon: "🔐",
          title: "Authentication",
          text: "Customers validate their mobile number with an OTP sent via SMS, ensuring secure access.",
        },
        {
          icon: "💰",
          title: "Balance Inquiry",
          text: "Check available account balance instantly through the WhatsApp chatflow.",
        },
        {
          icon: "🧾",
          title: "Mini Statement",
          text: "View last 5 transactions directly in the chat (Phase 2).",
        },
        {
          icon: "📬",
          title: "Account Statement",
          text: "Receive complete account statements on demand (Phase 2)",
        },
        {
          icon: "👤",
          title: "Customer Updates",
          text: "Mobile/email updates captured and confirmed instantly.",
        },
        {
          icon: "🎧",
          title: "Complaint Handling",
          text: 'Customers can register "No Power" or service complaints and track their status via API.',
        },
        {
          icon: "📬",
          title: "Information Access",
          text: "Interest rates and service charges shared via PDF. FAQs for common queries.",
        },
        {
          icon: "📍",
          title: "Locators",
          text: "Branch, ATM, and BC (Business Correspondent) locators integrated for convenience.",
        },
        {
          icon: "🌐",
          title: "Language Options",
          text: "Odia, Hindi, and English available from the very first message.",
        },
      ],
      pills: [
        "OTP Security",
        "CBS Integration",
        "Multilingual Support",
        "Branch & ATM Locator",
      ],
    },
    impact: {
      heading: "Comprehensive WhatsApp banking with end-to-end security",
      text: "Tubelight's WhatsApp banking chatflow enabled to deliver secure, multilingual banking services — from balance inquiries and complaint handling to branch locators — all through a familiar, accessible platform with OTP-verified security.",
      results: [],
    },
    moreStories,
    cta: bankingCta,
  },

  /* ---------------------------- Insurance -------------------------- */
  {
    slug: "insurance",
    template: "structured",
    title: "Insurance Company",
    breadcrumb: "Insurance",
    metaDescription:
      "Simplifying policy services with a WhatsApp virtual assistant.",
    tags: ["Insurance Company", "WhatsApp Virtual Assistant", "Policy Self-Service"],
    heading: {
      text: "Simplifying policy services with a WhatsApp ",
      highlight: "virtual assistant",
    },
    intro:
      "Company Insurance wanted to provide customers with a virtual assistant on WhatsApp to simplify policy-related interactions. The goal was to make services like downloading e-cards, checking hospital networks, and tracking claims accessible in one place, without the need for branch visits or lengthy calls.",
    meta: [
      { label: "Sector", value: "Insurance" },
      { label: "Platform", value: "WhatsApp" },
      { label: "Authentication", value: "Employee ID" },
      { label: "Services", value: "Policy & Claims" },
    ],
    stats: defaultStats("Services in one chat"),
    objective: {
      heading: "Simplify policy-related interactions through WhatsApp",
      text: "Company Insurance wanted to provide customers with a virtual assistant on WhatsApp to simplify policy-related interactions. The goal was to make services like downloading e-cards, checking hospital networks, and tracking claims accessible in one place, without the need for branch visits or lengthy calls.",
    },
    solution: {
      heading:
        "WhatsApp chatflow integrated with Insurance company’s backend systems",
      text: "Tubelight Communications designed and implemented a WhatsApp chatflow integrated with Insurance company's backend systems. The assistant offered a guided menu with secure access.",
      flow: {
        arrows: true,
        nodes: [
          { icon: "🧑‍⚕️", label: "Customer" },
          { icon: "📲", label: "WhatsApp Assistant" },
          { icon: "🖥️", label: "Employee ID Auth" },
          { icon: "🏥", label: "Insurance Backend" },
        ],
      },
      features: [
        {
          icon: "🔐",
          title: "Authentication",
          text: "Customers entered their Employee ID to validate their identity.",
        },
        {
          icon: "🪪",
          title: "Download E-Cards",
          text: "Download e-cards instantly through the WhatsApp chatflow.",
        },
        {
          icon: "🏥",
          title: "Network Hospital List",
          text: "Access the network hospital list directly in the chat.",
        },
        {
          icon: "📬",
          title: "Intimate a Claim",
          text: "Intimate a claim directly through WhatsApp without visiting a branch",
        },
        {
          icon: "🔎",
          title: "Track Claim Status",
          text: "Track claim status in real time through the chatflow.",
        },
        {
          icon: "🎧",
          title: "Customer Support",
          text: "Quick access to contact details and links to download the mobile app.",
        },
      ],
      pills: ["Download Ecard", "Claim Status", "Contact Us", "Network Hospitals"],
      note: "Ease of Use: Simple menu navigation with options like Download Ecard, Claim Status, Contact Us, and more.",
    },
    impact: {
      heading:
        "Secure, convenient, and transparent policy services through a simple chatflow",
      text: "Tubelight's WhatsApp virtual assistant empowered Insurance Company to deliver secure, convenient, and transparent policy services all through a simple chatflow.",
      results: [
        {
          title: "Seamless Customer Experience",
          text: "Customers could manage policy needs directly from WhatsApp without hassle",
        },
        {
          title: "Faster Claim Handling",
          text: "Claims could be initiated and tracked instantly, speeding up the process.",
        },
        {
          title: "Operational Efficiency",
          text: "Reduced dependency on call centres and manual processes.",
        },
        {
          title: "Trust & Transparency",
          text: "Real-time updates and easy access to documents built confidence among policyholders.",
        },
        {
          title: "Digital Adoption",
          text: "Encouraged customers to use self-service tools, aligning with modern digital insurance practices.",
        },
      ],
    },
    moreStories,
    cta: bankingCta,
  },

  /* --------------------------- Oil Company ------------------------- */
  {
    slug: "oil-company",
    template: "structured",
    title: "Oil Company",
    breadcrumb: "Oil & Lubricants",
    heroImage: "/images/oilimage.png",
    metaDescription:
      "Automating customer engagement and gift dispatch for a global lubricants leader.",
    tags: ["Oil Company", "WhatsApp Automation", "Customer Engagement"],
    heading: {
      text: "Automating customer engagement and gift dispatch for a global ",
      highlight: "lubricants leader",
    },
    intro:
      "Client, a global leader in lubricants, the brand refresh is aimed at better reflecting its unique positioning in the market and the opportunities it sees in meeting the changing needs of customers.",
    meta: [
      { label: "Sector", value: "Oil Company" },
      { label: "Solution", value: "WhatsApp" },
      { label: "Automation", value: "End-to-End" },
      { label: "Engagement", value: "Personalised" },
    ],
    stats: defaultStats("Services in one chat"),
    objective: {
      heading: "Engage customers, capture information, and manage gift dispatches",
      text: "The client wanted a seamless way to engage customers, capture information, and manage gift dispatches. Tubelight created an automated WhatsApp chatflow that simplified the customer journey.",
      // In this design the flow + feature cards sit under OBJECTIVE.
      flow: {
        arrows: true,
        nodes: [
          { icon: "🧑‍⚕️", label: "Customer" },
          { icon: "📲", label: "WhatsApp Chatflow" },
          { icon: "🖥️", label: "Data Capture & Dispatch" },
          { icon: "📦", label: "Delivery Confirmation" },
        ],
      },
      featureColumns: 2,
      features: [
        {
          icon: "🗂️",
          title: "Data Collection",
          text: "A guided flow captured user details like name, DOB, marital status, anniversary, spouse name, and delivery address.",
        },
        {
          icon: "🚚",
          title: "Dispatch & Tracking",
          text: "Automated updates with tracking IDs and courier details kept customers informed.",
        },
        {
          icon: "📦",
          title: "Delivery Confirmation",
          text: "Interactive buttons allowed customers to confirm receipt or report issues instantly.",
        },
        {
          icon: "⏰",
          title: "Reminders & Escalation",
          text: "Automated reminders ensured timely responses, while non-responders were escalated to telecallers.",
        },
      ],
      pills: ["Automated Chatflow", "Gift Dispatch Tracking", "Telecaller Escalation"],
    },
    solution: {
      // Eyebrow only in this design — no heading / intro text.
      featureColumns: 4,
      features: [
        {
          icon: "🧭",
          title: "Streamlined Customer Journey",
          text: "Customers could share details and track gifts easily through WhatsApp.",
        },
        {
          icon: "⚙️",
          title: "Operational Efficiency",
          text: "Automated flows reduced manual intervention and saved time.",
        },
        {
          icon: "🤝",
          title: "Improved Customer Experience",
          text: "Timely updates and confirmations built trust and satisfaction.",
        },
        {
          icon: "📊",
          title: "Logs",
          text: "Logs and statuses were maintained for transparency and quick support.",
        },
      ],
    },
    impact: {
      heading: "Smarter, personalised communication from data collection to gift delivery",
      text: "Tubelight's WhatsApp automation transformed customer engagement into a smooth, interactive journey from data collection to gift delivery while paving the way for smarter, personalised communication in the future.",
      results: [
        {
          title: "Seamless Customer Experience",
          text: "Customers enjoyed a smooth, hassle-free journey through WhatsApp.",
        },
        {
          title: "Higher Response Rates",
          text: "Automated reminders and easy flows encouraged more users to complete the process.",
        },
        {
          title: "Operational Efficiency",
          text: "Manual work was reduced, saving time and resources for the team..",
        },
        {
          title: "Transparency & Trust",
          text: "Real-time updates and confirmations built confidence among customers.",
        },
        {
          title: "Brand Refresh Alignment",
          text: "Modern, interactive communication reinforced Client's refreshed brand identity.",
        },
      ],
    },
    moreStories,
    cta: bankingCta,
  },

  /* ------------------------- Home & Appliance ---------------------- */
  {
    slug: "home-appliance",
    template: "structured",
    title: "Home & Appliance",
    breadcrumb: "Home & Appliance",
    metaDescription:
      "Enabling self-service for customers, distributors, and dealers through WhatsApp.",
    tags: ["Home & Appliance", "WhatsApp + CRM", "Self-Service"],
    heading: {
      text: "Enabling self-service for customers, distributors, and dealers through ",
      highlight: "WhatsApp",
    },
    intro:
      "Home and Appliance (Company) wanted to make customer interactions easier and faster. They needed a system where customers, distributors, and dealers could self-serve for tasks like registering complaints, requesting product demos, or checking product details — without waiting for manual support.",
    meta: [
      { label: "Sector", value: "Home & Appliance" },
      { label: "Integration", value: "CRM via APIs" },
      { label: "Automation", value: "End-to-End" },
      { label: "Self-Service", value: "WhatsApp Chatbot" },
    ],
    stats: defaultStats("Services in one chat"),
    objective: {
      heading: "Make customer interactions easier and faster",
      text: "Home and Appliance (Company) wanted to make customer interactions easier and faster. They needed a system where customers, distributors, and dealers could self-serve for tasks like registering complaints, requesting product demos, or checking product details — without waiting for manual support.",
    },
    solution: {
      heading: "Automated WhatsApp chatbot flow integrated with the client’s CRM via APIs",
      text: "Tubelight created an automated WhatsApp chatbot flow integrated with the client's CRM via APIs. This flow allowed customers to complete the entire process themselves, directly on WhatsApp, without needing to call or email support.",
      flow: {
        arrows: true,
        nodes: [
          { icon: "🧑‍⚕️", label: "Customer / Dealer" },
          { icon: "📲", label: "WhatsApp Chatbot" },
          { icon: "⚙️", label: "Tubelight API" },
          { icon: "👥", label: "Client CRM" },
        ],
      },
      features: [
        {
          icon: "👋",
          title: "Welcome & Identification",
          text: "Customers, distributors, or dealers start by selecting their category and whether they are new or existing.",
        },
        {
          icon: "🗃️",
          title: "CRM Integration",
          text: "For existing users, the chatbot fetches details directly from the CRM using secure API calls. For new users, it collects basic information like name, address, state, and pin code.",
        },
        {
          icon: "🖥️",
          title: "Demo Requests",
          text: "Customers can choose demo products from a master list.",
        },
        {
          icon: "📝",
          title: "Complaints",
          text: "Customers select product category, group, model, serial number, purchase date, and describe the issue.",
        },
        {
          icon: "📬",
          title: "Confirmation",
          text: "Customers receive a WhatsApp confirmation with request details and next steps (e.g., technician visit within 24 hours).",
        },
      ],
      pills: ["CRM Integration", "Automated Service Requests", "WhatsApp Self-Service"],
    },
    impact: {
      heading: "Faster resolutions, higher accuracy, and reduced manual workload",
      text: "Tubelight's WhatsApp-CRM integration empowered the client to deliver seamless self-service across customers, distributors, and dealers — reducing manual effort and improving service quality at scale.",
      results: [
        {
          title: "Ease of Use",
          text: "Customers could register complaints or request demos in minutes, right from WhatsApp.",
        },
        {
          title: "Faster Response",
          text: "Service requests were logged instantly in the CRM, reducing delays.",
        },
        {
          title: "Accuracy",
          text: "Data was captured directly from WhatsApp and mapped to CRM masters, minimising errors.",
        },
        {
          title: "Customer Satisfaction",
          text: "Self-service improved convenience and built trust in the brand.",
        },
        {
          title: "Operational Efficiency",
          text: "Reduced manual workload for staff and streamlined complaint handling.",
        },
      ],
    },
    moreStories,
    cta: bankingCta,
  },
];

export const getCaseStudy = (slug) =>
  caseStudies.find((study) => study.slug === slug) || null;
