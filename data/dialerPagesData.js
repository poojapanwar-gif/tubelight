import React from "react";

export const dialerPagesData = {
  // ==========================================
  // 1. OUTBOUND DIALER
  // ==========================================
  "outbound-dialer": {
    metadata: {
      title: "Outbound Dialer — Tubelight Communications",
      description:
        "Maximize contact-center productivity with an intelligent Outbound Dialer that automates outbound calling and manages dialing pace.",
    },
    banner: {
      title: (
        <>
          Automate Outbound Calling. <span>Scale Customer Reach.</span>
        </>
      ),
      description:
        "Simplify outbound calling with a centralized platform that helps businesses manage campaigns, connect with customers, and monitor calling performance at scale.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/outbounddialerbanner.mp4",
    },
    features: {
      title: "A Better Way to Manage Outbound Campaigns",
      description:
        "From sales outreach to service reminders, an Outbound Dialer helps teams execute calling campaigns with greater consistency. Configure dialing modes, manage contact lists, track call outcomes, and monitor performance from one workspace.",
      cards: [
        {
          icon: "01",
          title: "Multiple Dialing Modes",
          detail:
            "Support preview, progressive, and predictive dialing where available.",
        },
        {
          icon: "02",
          title: "Campaign Configuration",
          detail:
            "Manage calling lists, schedules, retry rules, and campaign settings.",
        },
        {
          icon: "03",
          title: "Automated Call Distribution",
          detail:
            "Allocate connected calls to available agents according to configured rules.",
        },
        {
          icon: "04",
          title: "Call Disposition Management",
          detail:
            "Record outcomes such as answered, busy, no answer, and callback required.",
        },
        {
          icon: "05",
          title: "Retry and Callback Scheduling",
          detail: "Manage eligible follow-ups using configurable rules.",
        },
        {
          icon: "06",
          title: "Live Campaign Monitoring",
          detail:
            "Track attempts, connections, agent activity, and campaign progress.",
        },
        {
          icon: "07",
          title: "Reporting and CDRs",
          detail:
            "Review call records, durations, outcomes, and campaign performance.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose an Outbound Dialer",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 21.0007C15.9446 21.0007 17.5974 20.3201 18.9585 18.959C20.3196 17.5979 21.0002 15.9451 21.0002 14.0007C21.0002 12.0562 20.3196 10.4034 18.9585 9.04232C17.5974 7.68121 15.9446 7.00065 14.0002 7.00065V14.0007L9.04183 18.959C9.72238 19.6007 10.4856 20.1013 11.3314 20.4611C12.1772 20.8208 13.0668 21.0007 14.0002 21.0007ZM14.0002 25.6673C12.3863 25.6673 10.8696 25.3611 9.45016 24.7486C8.03072 24.1361 6.796 23.3048 5.746 22.2548C4.696 21.2048 3.86475 19.9701 3.25225 18.5507C2.63975 17.1312 2.3335 15.6145 2.3335 14.0007C2.3335 12.3868 2.63975 10.8701 3.25225 9.45065C3.86475 8.03121 4.696 6.79648 5.746 5.74648C6.796 4.69648 8.03072 3.86523 9.45016 3.25273C10.8696 2.64023 12.3863 2.33398 14.0002 2.33398C15.6141 2.33398 17.1307 2.64023 18.5502 3.25273C19.9696 3.86523 21.2043 4.69648 22.2543 5.74648C23.3043 6.79648 24.1356 8.03121 24.7481 9.45065C25.3606 10.8701 25.6668 12.3868 25.6668 14.0007C25.6668 15.6145 25.3606 17.1312 24.7481 18.5507C24.1356 19.9701 23.3043 21.2048 22.2543 22.2548C21.2043 23.3048 19.9696 24.1361 18.5502 24.7486C17.1307 25.3611 15.6141 25.6673 14.0002 25.6673ZM14.0002 23.334C16.6057 23.334 18.8127 22.4298 20.621 20.6215C22.4293 18.8132 23.3335 16.6062 23.3335 14.0007C23.3335 11.3951 22.4293 9.18815 20.621 7.37982C18.8127 5.57148 16.6057 4.66732 14.0002 4.66732C11.3946 4.66732 9.18766 5.57148 7.37933 7.37982C5.571 9.18815 4.66683 11.3951 4.66683 14.0007C4.66683 16.6062 5.571 18.8132 7.37933 20.6215C9.18766 22.4298 11.3946 23.334 14.0002 23.334Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce manual dialing effort.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9972 15.166V12.8327H25.6639V15.166H20.9972ZM22.3972 23.3327L18.6639 20.5327L20.0639 18.666L23.7972 21.466L22.3972 23.3327ZM20.0639 9.33268L18.6639 7.46602L22.3972 4.66602L23.7972 6.53268L20.0639 9.33268ZM5.83057 22.166V17.4993H4.6639C4.02223 17.4993 3.47293 17.2709 3.01598 16.8139C2.55904 16.357 2.33057 15.8077 2.33057 15.166V12.8327C2.33057 12.191 2.55904 11.6417 3.01598 11.1848C3.47293 10.7278 4.02223 10.4993 4.6639 10.4993H9.33057L15.1639 6.99935V20.9993L9.33057 17.4993H8.1639V22.166H5.83057ZM12.8306 16.8577V11.141L9.97223 12.8327H4.6639V15.166H9.97223L12.8306 16.8577ZM16.3306 17.9077V10.091C16.8556 10.5577 17.2785 11.1264 17.5993 11.7973C17.9201 12.4681 18.0806 13.2021 18.0806 13.9993C18.0806 14.7966 17.9201 15.5306 17.5993 16.2014C17.2785 16.8723 16.8556 17.441 16.3306 17.9077Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve campaign consistency.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33333 15.9257V7.00065H12.8333V15.9257L11.0833 14.2923L9.33333 15.9257ZM15.1667 17.6757V2.33398H18.6667V14.1757L15.1667 17.6757ZM3.5 21.7007V11.6673H7V18.2007L3.5 21.7007ZM3.5 24.559L11.025 17.034L15.1667 20.5923L21.7 14.059H19.8333V11.7257H25.6667V17.559H23.3333V15.6923L15.2833 23.7423L11.1417 20.184L6.76667 24.559H3.5Z"
                fill="white"
              />
            </svg>
          ),
          title: "Increase visibility into agent and channel utilization.",
        },
        {
          icon: (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66927 12.9993V10.8327H17.3359V12.9993H8.66927ZM8.66927 8.66602V6.49935H17.3359V8.66602H8.66927ZM6.5026 15.166H14.6276C15.1512 15.166 15.6387 15.2789 16.0901 15.5046C16.5415 15.7303 16.9207 16.0507 17.2276 16.466L19.5026 19.4452V4.33268H6.5026V15.166ZM6.5026 21.666H18.4734L15.5214 17.7931C15.413 17.6487 15.2821 17.5358 15.1286 17.4546C14.9752 17.3733 14.8082 17.3327 14.6276 17.3327H6.5026V21.666ZM19.5026 23.8327H6.5026C5.90677 23.8327 5.3967 23.6205 4.9724 23.1962C4.54809 22.7719 4.33594 22.2618 4.33594 21.666V4.33268C4.33594 3.73685 4.54809 3.22678 4.9724 2.80247C5.3967 2.37817 5.90677 2.16602 6.5026 2.16602H19.5026C20.0984 2.16602 20.6085 2.37817 21.0328 2.80247C21.4571 3.22678 21.6693 3.73685 21.6693 4.33268V21.666C21.6693 22.2618 21.4571 22.7719 21.0328 23.1962C20.6085 23.6205 20.0984 23.8327 19.5026 23.8327Z"
                fill="white"
              />
            </svg>
          ),
          title: "Simplify campaign management and reporting.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8335 24.5V22.1667H22.1668V13.8833C22.1668 11.6083 21.3745 9.67847 19.7897 8.09375C18.205 6.50903 16.2752 5.71667 14.0002 5.71667C11.7252 5.71667 9.7953 6.50903 8.21058 8.09375C6.62586 9.67847 5.8335 11.6083 5.8335 13.8833V21H4.66683C4.02516 21 3.47586 20.7715 3.01891 20.3146C2.56197 19.8576 2.3335 19.3083 2.3335 18.6667V16.3333C2.3335 15.925 2.43558 15.541 2.63975 15.1812C2.84391 14.8215 3.13072 14.5347 3.50016 14.3208L3.58766 12.775C3.74322 11.4528 4.12725 10.2278 4.73975 9.1C5.35225 7.97222 6.1203 6.99028 7.04391 6.15417C7.96752 5.31806 9.02725 4.66667 10.2231 4.2C11.4189 3.73333 12.6779 3.5 14.0002 3.5C15.3224 3.5 16.5766 3.73333 17.7627 4.2C18.9488 4.66667 20.0085 5.31319 20.9418 6.13958C21.8752 6.96597 22.6432 7.94306 23.246 9.07083C23.8488 10.1986 24.2377 11.4236 24.4127 12.7458L24.5002 14.2625C24.8696 14.4375 25.1564 14.7 25.3606 15.05C25.5647 15.4 25.6668 15.7694 25.6668 16.1583V18.8417C25.6668 19.2306 25.5647 19.6 25.3606 19.95C25.1564 20.3 24.8696 20.5625 24.5002 20.7375V22.1667C24.5002 22.8083 24.2717 23.3576 23.8147 23.8146C23.3578 24.2715 22.8085 24.5 22.1668 24.5H12.8335ZM9.66891 15.9979C9.4453 15.7743 9.3335 15.4972 9.3335 15.1667C9.3335 14.8361 9.4453 14.559 9.66891 14.3354C9.89252 14.1118 10.1696 14 10.5002 14C10.8307 14 11.1078 14.1118 11.3314 14.3354C11.555 14.559 11.6668 14.8361 11.6668 15.1667C11.6668 15.4972 11.555 15.7743 11.3314 15.9979C11.1078 16.2215 10.8307 16.3333 10.5002 16.3333C10.1696 16.3333 9.89252 16.2215 9.66891 15.9979ZM16.6689 15.9979C16.4453 15.7743 16.3335 15.4972 16.3335 15.1667C16.3335 14.8361 16.4453 14.559 16.6689 14.3354C16.8925 14.1118 17.1696 14 17.5002 14C17.8307 14 18.1078 14.1118 18.3314 14.3354C18.555 14.559 18.6668 14.8361 18.6668 15.1667C18.6668 15.4972 18.555 15.7743 18.3314 15.9979C18.1078 16.2215 17.8307 16.3333 17.5002 16.3333C17.1696 16.3333 16.8925 16.2215 16.6689 15.9979ZM7.02933 14.525C6.89322 12.4639 7.51544 10.6944 8.896 9.21667C10.2766 7.73889 11.9974 7 14.0585 7C15.7891 7 17.3106 7.54931 18.6231 8.64792C19.9356 9.74653 20.7279 11.1514 21.0002 12.8625C19.2307 12.8431 17.6022 12.3667 16.1147 11.4333C14.6272 10.5 13.4849 9.23611 12.6877 7.64167C12.3766 9.19722 11.7203 10.5826 10.7189 11.7979C9.71752 13.0132 8.48766 13.9222 7.02933 14.525Z"
                fill="white"
              />
            </svg>
          ),
          title: "Support scalable customer outreach.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Ideal for Every Outbound Calling Need",
      description:
        " From closing deals to sending reminders, an Outbound Dialer helps teams reach customers consistently. It suits inside sales, telemarketing, appointment reminders, collections, surveys and customer retention.",
      tabs: [
        "🎧 Customer Support",
        "📈 Sales Engagement",
        "🎯 Lead Management",
        "📦 Order and Service Updates",
        "🔔 Order and Service Updates",
        "🤝 Internal Assistance",
      ],
      ctaTitle: "Make Every Call Count",
      ctaDesc:
        "Connect with more customers, reduce idle time, and boost agent productivity with Tubelight Communication’s smart dialing solutions.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 2. INBOUND CALLS
  // ==========================================
  "inbound-calls": {
    metadata: {
      title: "Inbound Calls — Tubelight Communications",
      description:
        "Deliver seamless customer experiences with intelligent inbound call routing, IVR, and real-time agent dashboards.",
    },
    banner: {
      title: (
        <>
          Every Incoming Call Deserves the <span>Right Response.</span>
        </>
      ),
      description:
        "Deliver a better customer experience with intelligent inbound call management. Route incoming calls to the right team, manage queues, and help agents resolve customer inquiries with the right context.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/inboundcallingbanner.mp4",
    },
    features: {
      title: "Turn Incoming Calls into Better Customer Experiences",
      description:
        "Missed calls, long waiting times, and inefficient routing can affect customer satisfaction and business opportunities. Our inbound calling solution helps contact centers manage incoming traffic through configurable routing, queue management, IVR, and agent-handling workflows.",
      cards: [
        {
          icon: "01",
          title: "Intelligent Call Routing",
          detail:
            "Direct calls using configured rules, skills, departments, or business hours.",
        },
        {
          icon: "02",
          title: "IVR and Self-Service",
          detail:
            "Allow callers to navigate menus and access supported self-service options.",
        },
        {
          icon: "03",
          title: "Queue Management",
          detail:
            "Manage waiting calls and configure queue announcements and routing policies.",
        },
        {
          icon: "04",
          title: "Agent Availability",
          detail:
            "Route calls based on agent status and configured distribution rules.",
        },
        {
          icon: "05",
          title: "Caller Context",
          detail:
            "Present available caller information and interaction history to authorized agents.",
        },
        {
          icon: "06",
          title: "Call Recording",
          detail:
            "Support recording where enabled and permitted by applicable requirements.",
        },
        {
          icon: "07",
          title: "Real-Time Monitoring",
          detail:
            "Track call volumes, waiting times, missed calls, and agent performance.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose a Inbound calling",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H17.5V22.1667H22.1667V8.16667H5.83333V22.1667H10.5V24.5H5.83333ZM12.8333 24.5V17.325L10.9667 19.1917L9.33333 17.5L14 12.8333L18.6667 17.5L17.0333 19.1917L15.1667 17.325V24.5H12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve call handling and routing efficiency.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33333 23.3327C8.69167 23.3327 8.14236 23.1042 7.68542 22.6473C7.22847 22.1903 7 21.641 7 20.9993V17.4993H10.5V14.8743C9.81944 14.8355 9.17292 14.6848 8.56042 14.4223C7.94792 14.1598 7.38889 13.766 6.88333 13.241V11.9577H5.54167L1.75 8.16602C2.45 7.27157 3.31528 6.63963 4.34583 6.27018C5.37639 5.90074 6.41667 5.71602 7.46667 5.71602C7.99167 5.71602 8.50208 5.7549 8.99792 5.83268C9.49375 5.91046 9.99444 6.05629 10.5 6.27018V4.66602H24.5V19.8327C24.5 20.8049 24.1597 21.6313 23.4792 22.3118C22.7986 22.9924 21.9722 23.3327 21 23.3327H9.33333ZM12.8333 17.4993H19.8333V19.8327C19.8333 20.1632 19.9451 20.4403 20.1688 20.6639C20.3924 20.8875 20.6694 20.9993 21 20.9993C21.3306 20.9993 21.6076 20.8875 21.8312 20.6639C22.0549 20.4403 22.1667 20.1632 22.1667 19.8327V6.99935H12.8333V7.69935L19.8333 14.6993V16.3327H18.2L14.875 13.0077L14.6417 13.241C14.3694 13.5132 14.0826 13.7563 13.7812 13.9702C13.4799 14.1841 13.1639 14.3493 12.8333 14.466V17.4993ZM6.53333 9.62435H9.21667V12.1327C9.45 12.2882 9.69306 12.3952 9.94583 12.4535C10.1986 12.5118 10.4611 12.541 10.7333 12.541C11.1806 12.541 11.584 12.473 11.9438 12.3368C12.3035 12.2007 12.6583 11.9577 13.0083 11.6077L13.2417 11.3743L11.6083 9.74102C11.0444 9.17713 10.4125 8.75421 9.7125 8.47227C9.0125 8.19032 8.26389 8.04935 7.46667 8.04935C7.07778 8.04935 6.70833 8.07852 6.35833 8.13685C6.00833 8.19518 5.65833 8.28268 5.30833 8.39935L6.53333 9.62435ZM17.5 19.8327H9.33333V20.9993H17.675C17.6167 20.8244 17.5729 20.6396 17.5437 20.4452C17.5146 20.2507 17.5 20.0466 17.5 19.8327Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce avoidable transfers and missed opportunities.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83325 22.166V10.4993H8.16659V18.1993L21.6999 4.66602L23.3333 6.29935L9.79992 19.8327H17.4999V22.166H5.83325Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve visibility into inbound traffic.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8335 24.5V22.1667H22.1668V13.8833C22.1668 11.6083 21.3745 9.67847 19.7897 8.09375C18.205 6.50903 16.2752 5.71667 14.0002 5.71667C11.7252 5.71667 9.7953 6.50903 8.21058 8.09375C6.62586 9.67847 5.8335 11.6083 5.8335 13.8833V21H4.66683C4.02516 21 3.47586 20.7715 3.01891 20.3146C2.56197 19.8576 2.3335 19.3083 2.3335 18.6667V16.3333C2.3335 15.925 2.43558 15.541 2.63975 15.1812C2.84391 14.8215 3.13072 14.5347 3.50016 14.3208L3.58766 12.775C3.74322 11.4528 4.12725 10.2278 4.73975 9.1C5.35225 7.97222 6.1203 6.99028 7.04391 6.15417C7.96752 5.31806 9.02725 4.66667 10.2231 4.2C11.4189 3.73333 12.6779 3.5 14.0002 3.5C15.3224 3.5 16.5766 3.73333 17.7627 4.2C18.9488 4.66667 20.0085 5.31319 20.9418 6.13958C21.8752 6.96597 22.6432 7.94306 23.246 9.07083C23.8488 10.1986 24.2377 11.4236 24.4127 12.7458L24.5002 14.2625C24.8696 14.4375 25.1564 14.7 25.3606 15.05C25.5647 15.4 25.6668 15.7694 25.6668 16.1583V18.8417C25.6668 19.2306 25.5647 19.6 25.3606 19.95C25.1564 20.3 24.8696 20.5625 24.5002 20.7375V22.1667C24.5002 22.8083 24.2717 23.3576 23.8147 23.8146C23.3578 24.2715 22.8085 24.5 22.1668 24.5H12.8335ZM9.66891 15.9979C9.4453 15.7743 9.3335 15.4972 9.3335 15.1667C9.3335 14.8361 9.4453 14.559 9.66891 14.3354C9.89252 14.1118 10.1696 14 10.5002 14C10.8307 14 11.1078 14.1118 11.3314 14.3354C11.555 14.559 11.6668 14.8361 11.6668 15.1667C11.6668 15.4972 11.555 15.7743 11.3314 15.9979C11.1078 16.2215 10.8307 16.3333 10.5002 16.3333C10.1696 16.3333 9.89252 16.2215 9.66891 15.9979ZM16.6689 15.9979C16.4453 15.7743 16.3335 15.4972 16.3335 15.1667C16.3335 14.8361 16.4453 14.559 16.6689 14.3354C16.8925 14.1118 17.1696 14 17.5002 14C17.8307 14 18.1078 14.1118 18.3314 14.3354C18.555 14.559 18.6668 14.8361 18.6668 15.1667C18.6668 15.4972 18.555 15.7743 18.3314 15.9979C18.1078 16.2215 17.8307 16.3333 17.5002 16.3333C17.1696 16.3333 16.8925 16.2215 16.6689 15.9979ZM7.02933 14.525C6.89322 12.4639 7.51544 10.6944 8.896 9.21667C10.2766 7.73889 11.9974 7 14.0585 7C15.7891 7 17.3106 7.54931 18.6231 8.64792C19.9356 9.74653 20.7279 11.1514 21.0002 12.8625C19.2307 12.8431 17.6022 12.3667 16.1147 11.4333C14.6272 10.5 13.4849 9.23611 12.6877 7.64167C12.3766 9.19722 11.7203 10.5826 10.7189 11.7979C9.71752 13.0132 8.48766 13.9222 7.02933 14.525Z"
                fill="white"
              />
            </svg>
          ),
          title: "Help agents respond with better customer context.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.44992 24.7486C8.03047 24.1361 6.79575 23.3048 5.74575 22.2548C4.69575 21.2048 3.8645 19.9701 3.252 18.5507C2.6395 17.1312 2.33325 15.6145 2.33325 14.0007C2.33325 12.3868 2.6395 10.8701 3.252 9.45065C3.8645 8.03121 4.69575 6.79648 5.74575 5.74648C6.79575 4.69648 8.03047 3.86523 9.44992 3.25273C10.8694 2.64023 12.386 2.33398 13.9999 2.33398C15.6138 2.33398 17.1305 2.64023 18.5499 3.25273C19.9694 3.86523 21.2041 4.69648 22.2541 5.74648C23.3041 6.79648 24.1353 8.03121 24.7478 9.45065C25.3603 10.8701 25.6666 12.3868 25.6666 14.0007C25.6666 15.6145 25.3603 17.1312 24.7478 18.5507C24.1353 19.9701 23.3041 21.2048 22.2541 22.2548C21.2041 23.3048 19.9694 24.1361 18.5499 24.7486C17.1305 25.3611 15.6138 25.6673 13.9999 25.6673C12.386 25.6673 10.8694 25.3611 9.44992 24.7486ZM10.6166 22.6923L12.0166 19.484C11.1999 19.1923 10.4951 18.7402 9.902 18.1277C9.30895 17.5152 8.84714 16.8007 8.51659 15.984L5.30825 17.3257C5.75547 18.5701 6.44575 19.659 7.37909 20.5923C8.31242 21.5257 9.39159 22.2257 10.6166 22.6923ZM8.51659 12.0173C8.84714 11.2007 9.30895 10.4861 9.902 9.87357C10.4951 9.26107 11.1999 8.80898 12.0166 8.51732L10.6749 5.30898C9.43047 5.77565 8.34159 6.47565 7.40825 7.40898C6.47492 8.34232 5.77492 9.43121 5.30825 10.6757L8.51659 12.0173ZM16.4791 16.4798C17.1596 15.7993 17.4999 14.9729 17.4999 14.0007C17.4999 13.0284 17.1596 12.202 16.4791 11.5215C15.7985 10.8409 14.9721 10.5007 13.9999 10.5007C13.0277 10.5007 12.2013 10.8409 11.5208 11.5215C10.8402 12.202 10.4999 13.0284 10.4999 14.0007C10.4999 14.9729 10.8402 15.7993 11.5208 16.4798C12.2013 17.1604 13.0277 17.5007 13.9999 17.5007C14.9721 17.5007 15.7985 17.1604 16.4791 16.4798ZM17.3833 22.6923C18.6083 22.2257 19.6826 21.5305 20.6062 20.6069C21.5298 19.6833 22.2249 18.609 22.6916 17.384L19.4833 15.984C19.1916 16.8007 18.7444 17.5055 18.1416 18.0986C17.5388 18.6916 16.8388 19.1534 16.0416 19.484L17.3833 22.6923ZM19.4833 11.959L22.6916 10.6173C22.2249 9.39232 21.5298 8.31801 20.6062 7.3944C19.6826 6.47079 18.6083 5.77565 17.3833 5.30898L16.0416 8.57565C16.8388 8.86732 17.5291 9.30968 18.1124 9.90273C18.6958 10.4958 19.1527 11.1812 19.4833 11.959Z"
                fill="white"
              />
            </svg>
          ),
          title: "Deliver a more consistent service experience.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Built for High-Volume Inbound Teams",
      description:
        "Built for teams that live on the phone. Tubelight’s Inbound Calling routes every call to the right agent fast, whether you’re handling support, sales enquiries, bookings, or service requests.",
      tabs: [
        "🎧 Customer Support",
        "🛠️ Helpdesks",
        "🏢 Service Centers",
        "💼 Sales Inquiry Teams",
        "📞 Businesses Handling High Inbound Call Volumes",
      ],
      ctaTitle: "Transform Your Inbound Calling",
      ctaDesc:
        "Connect callers to the right agent faster and deliver support that keeps customers coming back.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 3. LEAD MANAGEMENT SYSTEM
  // ==========================================
  "lead-management-system": {
    metadata: {
      title: "Lead Management System — Tubelight Communications",
      description:
        "Capture, qualify, and convert leads with automated lead routing, pipeline tracking, and omnichannel nurturing.",
    },
    banner: {
      title: (
        <>
          Capture Every Lead. Automate Every Follow-Up.{" "}
          <span>Convert More Opportunities.</span>
        </>
      ),
      description:
        "Manage the complete lead lifecycle with an intelligent Lead Management System. Capture inquiries from connected sources, qualify prospects, assign leads to the right representatives, automate follow-ups, and track opportunities through to conversion.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/leadmanagementsystembanner2.mp4",
    },
    features: {
      title: "From Lead Generation to Lead Conversion",
      description:
        "Leads can be lost when responses are delayed, information is scattered, or follow-ups are missed. 1inBox Lead Management helps centralize prospect information and organize every stage of the sales process. AI-assisted capabilities can help teams prioritize prospects, summarize interactions, and identify the next best action where supported",
      cards: [
        {
          icon: "01",
          title: "Centralized Lead Capture",
          detail:
            "Collect leads from supported websites, forms, campaigns, APIs, and connected systems.",
        },
        {
          icon: "02",
          title: "Lead Qualification",
          detail:
            "Organize and qualify prospects using business rules and available customer information.",
        },
        {
          icon: "03",
          title: "AI-Assisted Lead Scoring",
          detail:
            "Prioritize leads using configured criteria and supported engagement signals.",
        },
        {
          icon: "04",
          title: "Smart Lead Assignment",
          detail:
            "Allocate leads by territory, product interest, lead source, or team rules.",
        },
        {
          icon: "05",
          title: "Automated Follow-Ups",
          detail:
            "Trigger reminders and customer communication across enabled channels.",
        },
        {
          icon: "06",
          title: "Pipeline Management",
          detail: "Track leads through customizable sales stages.",
        },
        {
          icon: "07",
          title: "Interaction History",
          detail: "Maintain accessible lead activity and conversation context.",
        },
        {
          icon: "08",
          title: "Performance Analytics",
          detail:
            "Monitor lead sources, response activity, pipeline movement, and conversion outcomes.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose a Lead Management System",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9997 18.6673C15.1469 18.6673 16.3865 18.468 17.7184 18.0694C19.0504 17.6708 20.8927 16.9562 23.2455 15.9257C23.2844 15.7118 23.3087 15.5027 23.3184 15.2986C23.3281 15.0944 23.333 14.8854 23.333 14.6715C23.333 14.4576 23.2504 14.2826 23.0851 14.1465C22.9198 14.0104 22.7302 13.9715 22.5163 14.0298C22.2441 14.127 21.9427 14.2291 21.6122 14.3361C21.2816 14.443 20.8636 14.6034 20.358 14.8173C19.0163 15.3812 17.8691 15.775 16.9163 15.9986C15.9636 16.2222 14.9913 16.334 13.9997 16.334C12.9886 16.334 11.9969 16.2173 11.0247 15.984C10.0525 15.7507 8.86634 15.352 7.46634 14.7882C6.96079 14.5743 6.5719 14.4187 6.29967 14.3215L5.48301 14.0298C5.26912 13.952 5.07954 13.9861 4.91426 14.1319C4.74898 14.2777 4.66634 14.4576 4.66634 14.6715C4.66634 14.8854 4.6712 15.0944 4.68092 15.2986C4.69065 15.5027 4.71495 15.7118 4.75384 15.9257C6.71773 16.859 8.46287 17.5493 9.98926 17.9965C11.5156 18.4437 12.8525 18.6673 13.9997 18.6673ZM13.9997 23.334C15.8275 23.334 17.4511 22.9354 18.8705 22.1382C20.29 21.3409 21.3983 20.2715 22.1955 18.9298C20.4844 19.6493 18.9775 20.1743 17.6747 20.5048C16.3719 20.8354 15.1469 21.0007 13.9997 21.0007C12.8719 21.0007 11.6177 20.8305 10.2372 20.4902C8.85662 20.15 7.36912 19.6395 5.77467 18.959C6.55245 20.3007 7.65592 21.3652 9.08509 22.1527C10.5143 22.9402 12.1525 23.334 13.9997 23.334ZM10.7038 10.2965C9.78995 9.3826 9.33301 8.28398 9.33301 7.00065C9.33301 5.71732 9.78995 4.61871 10.7038 3.70482C11.6177 2.79093 12.7163 2.33398 13.9997 2.33398C15.283 2.33398 16.3816 2.79093 17.2955 3.70482C18.2094 4.61871 18.6663 5.71732 18.6663 7.00065C18.6663 8.28398 18.2094 9.3826 17.2955 10.2965C16.3816 11.2104 15.283 11.6673 13.9997 11.6673C12.7163 11.6673 11.6177 11.2104 10.7038 10.2965ZM15.6476 8.64857C16.1045 8.19162 16.333 7.64232 16.333 7.00065C16.333 6.35898 16.1045 5.80968 15.6476 5.35273C15.1906 4.89579 14.6413 4.66732 13.9997 4.66732C13.358 4.66732 12.8087 4.89579 12.3518 5.35273C11.8948 5.80968 11.6663 6.35898 11.6663 7.00065C11.6663 7.64232 11.8948 8.19162 12.3518 8.64857C12.8087 9.10551 13.358 9.33398 13.9997 9.33398C14.6413 9.33398 15.1906 9.10551 15.6476 8.64857ZM13.9997 25.6673C10.558 25.6673 7.75315 24.6465 5.58509 22.6048C3.41704 20.5632 2.33301 17.9187 2.33301 14.6715C2.33301 13.6604 2.73648 12.8534 3.54342 12.2507C4.35037 11.6479 5.23023 11.502 6.18301 11.8132C6.49412 11.9104 6.81981 12.0222 7.16009 12.1486C7.50037 12.275 7.90384 12.4354 8.37051 12.6298C9.61495 13.1354 10.6455 13.4902 11.4622 13.6944C12.2788 13.8986 13.1247 14.0007 13.9997 14.0007C14.8358 14.0007 15.6622 13.9034 16.4788 13.709C17.2955 13.5145 18.2969 13.1645 19.483 12.659C20.0469 12.4451 20.499 12.2701 20.8393 12.134C21.1795 11.9979 21.515 11.8812 21.8455 11.784C22.7983 11.5118 23.6733 11.677 24.4705 12.2798C25.2677 12.8826 25.6663 13.6798 25.6663 14.6715C25.6663 16.2076 25.365 17.6416 24.7622 18.9736C24.1594 20.3055 23.333 21.4673 22.283 22.459C21.233 23.4507 19.9983 24.2333 18.5788 24.8069C17.1594 25.3805 15.633 25.6673 13.9997 25.6673Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce missed follow-ups.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H17.5V22.1667H22.1667V8.16667H5.83333V22.1667H10.5V24.5H5.83333ZM12.8333 24.5V17.325L10.9667 19.1917L9.33333 17.5L14 12.8333L18.6667 17.5L17.0333 19.1917L15.1667 17.325V24.5H12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve lead response times.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 25.6673C13.3585 25.6673 12.8092 25.4388 12.3522 24.9819C11.8953 24.525 11.6668 23.9757 11.6668 23.334V14.0007C11.6668 13.359 11.8953 12.8097 12.3522 12.3527C12.8092 11.8958 13.3585 11.6673 14.0002 11.6673H23.3335C23.9752 11.6673 24.5245 11.8958 24.9814 12.3527C25.4384 12.8097 25.6668 13.359 25.6668 14.0007V23.334C25.6668 23.9757 25.4384 24.525 24.9814 24.9819C24.5245 25.4388 23.9752 25.6673 23.3335 25.6673H14.0002ZM14.0002 23.334H23.3335V14.0007H14.0002V23.334ZM7.00016 21.0007V9.33398C7.00016 8.69232 7.22863 8.14301 7.68558 7.68607C8.14252 7.22912 8.69183 7.00065 9.3335 7.00065H21.0002V9.33398H9.3335V21.0007H7.00016ZM2.3335 16.334V4.66732C2.3335 4.02565 2.56197 3.47635 3.01891 3.0194C3.47586 2.56246 4.02516 2.33398 4.66683 2.33398H16.3335V4.66732H4.66683V16.334H2.3335Z"
                fill="white"
              />
            </svg>
          ),
          title: "Prioritize promising opportunities.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16667 19.8333H10.5V14H8.16667V19.8333ZM17.5 19.8333H19.8333V8.16667H17.5V19.8333ZM12.8333 19.8333H15.1667V16.3333H12.8333V19.8333ZM12.8333 14H15.1667V11.6667H12.8333V14ZM5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z"
                fill="white"
              />
            </svg>
          ),
          title: "Increase sales-team productivity.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66683 22.1667H9.3335V12.8333H4.66683V22.1667ZM11.6668 22.1667H16.3335V5.83333H11.6668V22.1667ZM18.6668 22.1667H23.3335V15.1667H18.6668V22.1667ZM2.3335 24.5V10.5H9.3335V3.5H18.6668V12.8333H25.6668V24.5H2.3335Z"
                fill="white"
              />
            </svg>
          ),
          title: "Gain better visibility into lead conversion.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "One Place for Every Lead Conversation",
      description:
        "From the first enquiry to the final deal, Lead Management helps teams capture, assign, and follow up on every opportunity without missing a beat. It suits sales, real estate, education admissions, insurance, financial services, and any business that handles leads at volume.",
      tabs: [
        "🏢 B2B Sales",
        "🏡 Real Estate",
        "🎓 Education",
        "💳 Financial Services",
        "💼 Inside Sales",
        "🚀 Campaign-Driven Businesses",
      ],
      ctaTitle: "Turn More Leads into Customers",
      ctaDesc:
        "Respond faster, follow up smarter, and see your entire pipeline in one place. Tubelight helps your team close more deals with less effort.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 4. TICKETING FLOW BUILDER
  // ==========================================
  "ticketing-flow-builder": {
    metadata: {
      title: "Ticketing Flow Builder — Tubelight Communications",
      description:
        "Manage customer queries, automate ticket handling, and improve resolution times with AI-powered ticketing.",
    },
    banner: {
      title: (
        <>
          Resolve Issues Faster. Deliver Better <span>Support.</span>
        </>
      ),
      description:
        "Bring structure and intelligence to customer support with AI-powered ticket management. Capture issues, prioritize requests, route tickets, monitor SLAs, and help support teams resolve cases more efficiently.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/ticketingflowbuilderbanner.mp4",
    },
    features: {
      title: "Every Issue. Tracked. Assigned. Resolved.",
      description:
        "Manual ticket handling can slow response times and make it difficult to track accountability. Our ticketing solution helps manage the support lifecycle through centralized ticket records, configurable workflows, automation, and AI-assisted support.",
      cards: [
        {
          icon: "01",
          title: "Ticket Creation",
          detail:
            "Create tickets from supported channels and connected workflows.",
        },
        {
          icon: "02",
          title: "Smart Categorization",
          detail:
            "Organize requests by issue type, urgency, or configured business rules.",
        },
        {
          icon: "03",
          title: "Intelligent Assignment",
          detail: "Route tickets to the appropriate team or agent.",
        },
        {
          icon: "04",
          title: "AI-Assisted Responses",
          detail:
            "Help agents draft responses and summarize available case context.",
        },
        {
          icon: "05",
          title: "SLA Monitoring",
          detail:
            "Track response and resolution targets, with alerts and escalations where configured.",
        },
        {
          icon: "06",
          title: "Workflow Automation",
          detail:
            "Trigger ticket updates, notifications, and follow-up actions.",
        },
        {
          icon: "07",
          title: "Knowledge Assistance",
          detail: "Surface relevant knowledge resources where supported.",
        },
        {
          icon: "08",
          title: "Ticket Analytics",
          detail:
            "Track open tickets, resolution times, backlog, and SLA performance.",
        },
      ],
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Why Teams Choose Ticketing Flow Builder",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 19.8327C14.3307 19.8327 14.6078 19.7209 14.8314 19.4973C15.055 19.2737 15.1668 18.9966 15.1668 18.666C15.1668 18.3355 15.055 18.0584 14.8314 17.8348C14.6078 17.6112 14.3307 17.4993 14.0002 17.4993C13.6696 17.4993 13.3925 17.6112 13.1689 17.8348C12.9453 18.0584 12.8335 18.3355 12.8335 18.666C12.8335 18.9966 12.9453 19.2737 13.1689 19.4973C13.3925 19.7209 13.6696 19.8327 14.0002 19.8327ZM14.0002 15.166C14.3307 15.166 14.6078 15.0542 14.8314 14.8306C15.055 14.607 15.1668 14.3299 15.1668 13.9993C15.1668 13.6688 15.055 13.3917 14.8314 13.1681C14.6078 12.9445 14.3307 12.8327 14.0002 12.8327C13.6696 12.8327 13.3925 12.9445 13.1689 13.1681C12.9453 13.3917 12.8335 13.6688 12.8335 13.9993C12.8335 14.3299 12.9453 14.607 13.1689 14.8306C13.3925 15.0542 13.6696 15.166 14.0002 15.166ZM14.0002 10.4993C14.3307 10.4993 14.6078 10.3875 14.8314 10.1639C15.055 9.94032 15.1668 9.66324 15.1668 9.33268C15.1668 9.00213 15.055 8.72504 14.8314 8.50143C14.6078 8.27782 14.3307 8.16602 14.0002 8.16602C13.6696 8.16602 13.3925 8.27782 13.1689 8.50143C12.9453 8.72504 12.8335 9.00213 12.8335 9.33268C12.8335 9.66324 12.9453 9.94032 13.1689 10.1639C13.3925 10.3875 13.6696 10.4993 14.0002 10.4993ZM23.3335 23.3327H4.66683C4.02516 23.3327 3.47586 23.1042 3.01891 22.6473C2.56197 22.1903 2.3335 21.641 2.3335 20.9993V16.3327C2.97516 16.3327 3.52447 16.1042 3.98141 15.6473C4.43836 15.1903 4.66683 14.641 4.66683 13.9993C4.66683 13.3577 4.43836 12.8084 3.98141 12.3514C3.52447 11.8945 2.97516 11.666 2.3335 11.666V6.99935C2.3335 6.35768 2.56197 5.80838 3.01891 5.35143C3.47586 4.89449 4.02516 4.66602 4.66683 4.66602H23.3335C23.9752 4.66602 24.5245 4.89449 24.9814 5.35143C25.4384 5.80838 25.6668 6.35768 25.6668 6.99935V11.666C25.0252 11.666 24.4759 11.8945 24.0189 12.3514C23.562 12.8084 23.3335 13.3577 23.3335 13.9993C23.3335 14.641 23.562 15.1903 24.0189 15.6473C24.4759 16.1042 25.0252 16.3327 25.6668 16.3327V20.9993C25.6668 21.641 25.4384 22.1903 24.9814 22.6473C24.5245 23.1042 23.9752 23.3327 23.3335 23.3327ZM23.3335 20.9993V18.0243C22.6141 17.5966 22.0453 17.0278 21.6272 16.3181C21.2092 15.6084 21.0002 14.8355 21.0002 13.9993C21.0002 13.1632 21.2092 12.3903 21.6272 11.6806C22.0453 10.9709 22.6141 10.4021 23.3335 9.97435V6.99935H4.66683V9.97435C5.38627 10.4021 5.95502 10.9709 6.37308 11.6806C6.79113 12.3903 7.00016 13.1632 7.00016 13.9993C7.00016 14.8355 6.79113 15.6084 6.37308 16.3181C5.95502 17.0278 5.38627 17.5966 4.66683 18.0243V20.9993H23.3335Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce manual ticket administration.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.3335 25.6673V4.66732C2.3335 4.02565 2.56197 3.47635 3.01891 3.0194C3.47586 2.56246 4.02516 2.33398 4.66683 2.33398H23.3335C23.9752 2.33398 24.5245 2.56246 24.9814 3.0194C25.4384 3.47635 25.6668 4.02565 25.6668 4.66732V11.6673H23.3335V4.66732H4.66683V19.9798L6.0085 18.6673H17.5002V21.0007H7.00016L2.3335 25.6673ZM22.1668 26.834V21.0007H19.8335V14.0007H25.6668L23.6835 18.6673H26.2502L22.1668 26.834Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve response and resolution efficiency..",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM11.6667 22.1667V15.1667H5.83333V22.1667H11.6667ZM14 22.1667H22.1667V15.1667H14V22.1667ZM5.83333 12.8333H22.1667V5.83333H5.83333V12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Increase accountability across support teams.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 19.8333C14.3306 19.8333 14.6076 19.7215 14.8313 19.4979C15.0549 19.2743 15.1667 18.9972 15.1667 18.6667C15.1667 18.3361 15.0549 18.059 14.8313 17.8354C14.6076 17.6118 14.3306 17.5 14 17.5C13.6694 17.5 13.3924 17.6118 13.1687 17.8354C12.9451 18.059 12.8333 18.3361 12.8333 18.6667C12.8333 18.9972 12.9451 19.2743 13.1687 19.4979C13.3924 19.7215 13.6694 19.8333 14 19.8333ZM12.8333 15.1667H15.1667V8.16667H12.8333V15.1667ZM9.625 24.5L3.5 18.375V9.625L9.625 3.5H18.375L24.5 9.625V18.375L18.375 24.5H9.625ZM10.6167 22.1667H17.3833L22.1667 17.3833V10.6167L17.3833 5.83333H10.6167L5.83333 10.6167V17.3833L10.6167 22.1667Z"
                fill="white"
              />
            </svg>
          ),
          title: "Identify bottlenecks and SLA risks.",
        },
        {
          icon: (
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 21V18.6667H19.8333V10.3833C19.8333 8.10833 19.041 6.17847 17.4562 4.59375C15.8715 3.00903 13.9417 2.21667 11.6667 2.21667C9.39167 2.21667 7.46181 3.00903 5.87708 4.59375C4.29236 6.17847 3.5 8.10833 3.5 10.3833V17.5H2.33333C1.69167 17.5 1.14236 17.2715 0.685417 16.8146C0.228472 16.3576 0 15.8083 0 15.1667V12.8333C0 12.425 0.102083 12.041 0.30625 11.6812C0.510417 11.3215 0.797222 11.0347 1.16667 10.8208L1.25417 9.275C1.40972 7.95278 1.79375 6.72778 2.40625 5.6C3.01875 4.47222 3.78681 3.49028 4.71042 2.65417C5.63403 1.81806 6.69375 1.16667 7.88958 0.7C9.08542 0.233333 10.3444 0 11.6667 0C12.9889 0 14.2431 0.233333 15.4292 0.7C16.6153 1.16667 17.675 1.81319 18.6083 2.63958C19.5417 3.46597 20.3097 4.44306 20.9125 5.57083C21.5153 6.69861 21.9042 7.92361 22.0792 9.24583L22.1667 10.7625C22.5361 10.9375 22.8229 11.2 23.0271 11.55C23.2313 11.9 23.3333 12.2694 23.3333 12.6583V15.3417C23.3333 15.7306 23.2313 16.1 23.0271 16.45C22.8229 16.8 22.5361 17.0625 22.1667 17.2375V18.6667C22.1667 19.3083 21.9382 19.8576 21.4813 20.3146C21.0243 20.7715 20.475 21 19.8333 21H10.5ZM7.33542 12.4979C7.11181 12.2743 7 11.9972 7 11.6667C7 11.3361 7.11181 11.059 7.33542 10.8354C7.55903 10.6118 7.83611 10.5 8.16667 10.5C8.49722 10.5 8.77431 10.6118 8.99792 10.8354C9.22153 11.059 9.33333 11.3361 9.33333 11.6667C9.33333 11.9972 9.22153 12.2743 8.99792 12.4979C8.77431 12.7215 8.49722 12.8333 8.16667 12.8333C7.83611 12.8333 7.55903 12.7215 7.33542 12.4979ZM14.3354 12.4979C14.1118 12.2743 14 11.9972 14 11.6667C14 11.3361 14.1118 11.059 14.3354 10.8354C14.559 10.6118 14.8361 10.5 15.1667 10.5C15.4972 10.5 15.7743 10.6118 15.9979 10.8354C16.2215 11.059 16.3333 11.3361 16.3333 11.6667C16.3333 11.9972 16.2215 12.2743 15.9979 12.4979C15.7743 12.7215 15.4972 12.8333 15.1667 12.8333C14.8361 12.8333 14.559 12.7215 14.3354 12.4979ZM4.69583 11.025C4.55972 8.96389 5.18194 7.19444 6.5625 5.71667C7.94306 4.23889 9.66389 3.5 11.725 3.5C13.4556 3.5 14.9771 4.04931 16.2896 5.14792C17.6021 6.24653 18.3944 7.65139 18.6667 9.3625C16.8972 9.34306 15.2688 8.86667 13.7812 7.93333C12.2937 7 11.1514 5.73611 10.3542 4.14167C10.0431 5.69722 9.38681 7.08264 8.38542 8.29792C7.38403 9.51319 6.15417 10.4222 4.69583 11.025Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve customer support visibility.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "One Place for Every Customer Issue",
      description:
        "Ticketing Flow Builder sorts, prioritizes, and routes every request to the right agent, so your team resolves more issues in less time.",
      tabs: [
        "🎧 Customer Service Teams",
        "💻 IT Helpdesks",
        "☁️ SaaS Businesses",
        "🏢 Enterprise Support Operations",
        "📡 Telecom Providers",
      ],
      ctaTitle: "Make Support More Intelligent",
      ctaDesc:
        "Tubelight’s Ticketing Flow Builder automatically categorizes, prioritizes, and routes every request, so your team resolves issues faster and customers stay happy.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 5. AI FLOW BUILDER
  // ==========================================
  "ai-flow-builder": {
    metadata: {
      title: "AI Flow Builder — Tubelight Communications",
      description:
        "Build visual, code-free communication journeys and automated workflows with Tubelight AI Flow Builder.",
    },
    banner: {
      title: (
        <>
          Design Workflows Visually. Automate Actions{" "}
          <span>Intelligently.</span>
        </>
      ),
      description:
        "Build and manage business workflows with a visual Flow Builder that connects triggers, conditions, communication channels, and actions in a structured process.",
      videoSrc: "/images/aifflowbuilderbanner.mp4",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
    },
    features: {
      title: "Turn Repetitive Tasks into Connected Workflows",
      description:
        "From lead follow-ups to ticket escalations and customer notifications, Flow Builder helps teams define how work should move through the business. Create repeatable processes that reduce manual effort and improve consistency across customer interactions.",
      cards: [
        {
          icon: "01",
          title: "Visual Workflow Design",
          detail:
            "Build workflows using a visual, node-based interface where available",
        },
        {
          icon: "02",
          title: "Trigger-Based Automation",
          detail:
            "Start workflows using supported events, schedules, or user actions.",
        },
        {
          icon: "03",
          title: "Conditional Logic",
          detail:
            " Define branches based on lead status, customer responses, ticket priority, or configured data.",
        },
        {
          icon: "04",
          title: "Multichannel Actions",
          detail:
            "Connect enabled WhatsApp, SMS, Email, Voice, and other communication services.",
        },
        {
          icon: "05",
          title: "Application Integrations",
          detail: "Connect supported APIs, webhooks, and business systems.",
        },
        {
          icon: "06",
          title: "Automated Notifications",
          detail:
            "Send alerts, reminders, and status updates based on workflow rules.",
        },
        {
          icon: "07",
          title: "Workflow Monitoring",
          detail: "Review execution status, failures, and available logs.",
        },
        {
          icon: "08",
          title: "Reusable Templates",
          detail:
            "Standardize common workflows for recurring business processes.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose aI Flow Builder",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.4993C5.19167 24.4993 4.64236 24.2709 4.18542 23.8139C3.72847 23.357 3.5 22.8077 3.5 22.166V5.83268C3.5 5.19102 3.72847 4.64171 4.18542 4.18477C4.64236 3.72782 5.19167 3.49935 5.83333 3.49935H10.7333C10.9861 2.79935 11.409 2.23546 12.0021 1.80768C12.5951 1.3799 13.2611 1.16602 14 1.16602C14.7389 1.16602 15.4049 1.3799 15.9979 1.80768C16.591 2.23546 17.0139 2.79935 17.2667 3.49935H22.1667C22.8083 3.49935 23.3576 3.72782 23.8146 4.18477C24.2715 4.64171 24.5 5.19102 24.5 5.83268V22.166C24.5 22.8077 24.2715 23.357 23.8146 23.8139C23.3576 24.2709 22.8083 24.4993 22.1667 24.4993H5.83333ZM5.83333 22.166H22.1667V5.83268H5.83333V22.166ZM8.16667 19.8327H16.3333V17.4993H8.16667V19.8327ZM8.16667 15.166H19.8333V12.8327H8.16667V15.166ZM8.16667 10.4993H19.8333V8.16602H8.16667V10.4993ZM14.6271 4.70977C14.7924 4.54449 14.875 4.33546 14.875 4.08268C14.875 3.8299 14.7924 3.62088 14.6271 3.4556C14.4618 3.29032 14.2528 3.20768 14 3.20768C13.7472 3.20768 13.5382 3.29032 13.3729 3.4556C13.2076 3.62088 13.125 3.8299 13.125 4.08268C13.125 4.33546 13.2076 4.54449 13.3729 4.70977C13.5382 4.87504 13.7472 4.95768 14 4.95768C14.2528 4.95768 14.4618 4.87504 14.6271 4.70977Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce repetitive manual tasks",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66683 24.5007C4.02516 24.5007 3.47586 24.2722 3.01891 23.8152C2.56197 23.3583 2.3335 22.809 2.3335 22.1673V9.33398C2.3335 8.69232 2.56197 8.14301 3.01891 7.68607C3.47586 7.22912 4.02516 7.00065 4.66683 7.00065H9.3335V4.66732C9.3335 4.02565 9.56197 3.47635 10.0189 3.0194C10.4759 2.56246 11.0252 2.33398 11.6668 2.33398H16.3335C16.9752 2.33398 17.5245 2.56246 17.9814 3.0194C18.4384 3.47635 18.6668 4.02565 18.6668 4.66732V7.00065H23.3335C23.9752 7.00065 24.5245 7.22912 24.9814 7.68607C25.4384 8.14301 25.6668 8.69232 25.6668 9.33398V22.1673C25.6668 22.809 25.4384 23.3583 24.9814 23.8152C24.5245 24.2722 23.9752 24.5007 23.3335 24.5007H4.66683ZM11.6668 7.00065H16.3335V4.66732H11.6668V7.00065ZM23.3335 17.5007H17.5002V19.834H10.5002V17.5007H4.66683V22.1673H23.3335V17.5007ZM12.8335 17.5007H15.1668V15.1673H12.8335V17.5007ZM4.66683 15.1673H10.5002V12.834H17.5002V15.1673H23.3335V9.33398H4.66683V15.1673Z"
                fill="white"
              />
            </svg>
          ),
          title: "Standardize business processes.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8333 24.5V22.1667H22.1666V13.8833C22.1666 11.6083 21.3742 9.67847 19.7895 8.09375C18.2048 6.50903 16.2749 5.71667 13.9999 5.71667C11.7249 5.71667 9.79506 6.50903 8.21034 8.09375C6.62561 9.67847 5.83325 11.6083 5.83325 13.8833V21H4.66659C4.02492 21 3.47561 20.7715 3.01867 20.3146C2.56172 19.8576 2.33325 19.3083 2.33325 18.6667V16.3333C2.33325 15.925 2.43534 15.541 2.6395 15.1812C2.84367 14.8215 3.13047 14.5347 3.49992 14.3208L3.58742 12.775C3.74297 11.4528 4.127 10.2278 4.7395 9.1C5.352 7.97222 6.12006 6.99028 7.04367 6.15417C7.96728 5.31806 9.027 4.66667 10.2228 4.2C11.4187 3.73333 12.6777 3.5 13.9999 3.5C15.3221 3.5 16.5763 3.73333 17.7624 4.2C18.9485 4.66667 20.0083 5.31319 20.9416 6.13958C21.8749 6.96597 22.643 7.94306 23.2458 9.07083C23.8485 10.1986 24.2374 11.4236 24.4124 12.7458L24.4999 14.2625C24.8694 14.4375 25.1562 14.7 25.3603 15.05C25.5645 15.4 25.6666 15.7694 25.6666 16.1583V18.8417C25.6666 19.2306 25.5645 19.6 25.3603 19.95C25.1562 20.3 24.8694 20.5625 24.4999 20.7375V22.1667C24.4999 22.8083 24.2714 23.3576 23.8145 23.8146C23.3576 24.2715 22.8083 24.5 22.1666 24.5H12.8333ZM9.66867 15.9979C9.44506 15.7743 9.33325 15.4972 9.33325 15.1667C9.33325 14.8361 9.44506 14.559 9.66867 14.3354C9.89228 14.1118 10.1694 14 10.4999 14C10.8305 14 11.1076 14.1118 11.3312 14.3354C11.5548 14.559 11.6666 14.8361 11.6666 15.1667C11.6666 15.4972 11.5548 15.7743 11.3312 15.9979C11.1076 16.2215 10.8305 16.3333 10.4999 16.3333C10.1694 16.3333 9.89228 16.2215 9.66867 15.9979ZM16.6687 15.9979C16.4451 15.7743 16.3333 15.4972 16.3333 15.1667C16.3333 14.8361 16.4451 14.559 16.6687 14.3354C16.8923 14.1118 17.1694 14 17.4999 14C17.8305 14 18.1076 14.1118 18.3312 14.3354C18.5548 14.559 18.6666 14.8361 18.6666 15.1667C18.6666 15.4972 18.5548 15.7743 18.3312 15.9979C18.1076 16.2215 17.8305 16.3333 17.4999 16.3333C17.1694 16.3333 16.8923 16.2215 16.6687 15.9979ZM7.02909 14.525C6.89297 12.4639 7.5152 10.6944 8.89575 9.21667C10.2763 7.73889 11.9971 7 14.0583 7C15.7888 7 17.3103 7.54931 18.6228 8.64792C19.9353 9.74653 20.7277 11.1514 20.9999 12.8625C19.2305 12.8431 17.602 12.3667 16.1145 11.4333C14.627 10.5 13.4846 9.23611 12.6874 7.64167C12.3763 9.19722 11.7201 10.5826 10.7187 11.7979C9.71728 13.0132 8.48742 13.9222 7.02909 14.525Z"
                fill="white"
              />
            </svg>
          ),
          title: "Connect customer communication with operational actions.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 25.6673C13.3585 25.6673 12.8092 25.4388 12.3522 24.9819C11.8953 24.525 11.6668 23.9757 11.6668 23.334V14.0007C11.6668 13.359 11.8953 12.8097 12.3522 12.3527C12.8092 11.8958 13.3585 11.6673 14.0002 11.6673H23.3335C23.9752 11.6673 24.5245 11.8958 24.9814 12.3527C25.4384 12.8097 25.6668 13.359 25.6668 14.0007V23.334C25.6668 23.9757 25.4384 24.525 24.9814 24.9819C24.5245 25.4388 23.9752 25.6673 23.3335 25.6673H14.0002ZM14.0002 23.334H23.3335V14.0007H14.0002V23.334ZM7.00016 21.0007V9.33398C7.00016 8.69232 7.22863 8.14301 7.68558 7.68607C8.14252 7.22912 8.69183 7.00065 9.3335 7.00065H21.0002V9.33398H9.3335V21.0007H7.00016ZM2.3335 16.334V4.66732C2.3335 4.02565 2.56197 3.47635 3.01891 3.0194C3.47586 2.56246 4.02516 2.33398 4.66683 2.33398H16.3335V4.66732H4.66683V16.334H2.3335Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve process visibility.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.63328 20.125C7.81662 20.8056 6.96592 21.1167 6.0812 21.0583C5.19648 21 4.42356 20.6986 3.76245 20.1542C3.10134 19.6097 2.64926 18.8951 2.4062 18.0104C2.16315 17.1257 2.32356 16.2167 2.88745 15.2833L5.07495 11.6667C4.58884 11.2389 4.20481 10.7236 3.92287 10.1208C3.64092 9.51806 3.49995 8.86667 3.49995 8.16667C3.49995 6.88333 3.9569 5.78472 4.87078 4.87083C5.78467 3.95694 6.88328 3.5 8.16662 3.5C9.44995 3.5 10.5486 3.95694 11.4625 4.87083C12.3763 5.78472 12.8333 6.88333 12.8333 8.16667C12.8333 9.45 12.3763 10.5486 11.4625 11.4625C10.5486 12.3764 9.44995 12.8333 8.16662 12.8333C7.99162 12.8333 7.81662 12.8236 7.64162 12.8042C7.46662 12.7847 7.30134 12.7556 7.14578 12.7167L4.89995 16.5083C4.68606 16.8583 4.61801 17.2035 4.69578 17.5437C4.77356 17.884 4.93884 18.1611 5.19162 18.375C5.4444 18.5889 5.74578 18.7104 6.09578 18.7396C6.44578 18.7688 6.78606 18.6472 7.11662 18.375L19.3666 7.84583C20.1833 7.16528 21.0388 6.85903 21.9333 6.92708C22.8277 6.99514 23.6055 7.30139 24.2666 7.84583C24.9277 8.39028 25.375 9.10486 25.6083 9.98958C25.8416 10.8743 25.6763 11.7833 25.1125 12.7167L22.925 16.3333C23.4111 16.7611 23.7951 17.2764 24.077 17.8792C24.359 18.4819 24.5 19.1333 24.5 19.8333C24.5 21.1167 24.043 22.2153 23.1291 23.1292C22.2152 24.0431 21.1166 24.5 19.8333 24.5C18.55 24.5 17.4513 24.0431 16.5375 23.1292C15.6236 22.2153 15.1666 21.1167 15.1666 19.8333C15.1666 18.55 15.6236 17.4514 16.5375 16.5375C17.4513 15.6236 18.55 15.1667 19.8333 15.1667C20.0083 15.1667 20.1784 15.1764 20.3437 15.1958C20.509 15.2153 20.6694 15.2444 20.825 15.2833L23.1 11.4917C23.3138 11.1417 23.3819 10.7965 23.3041 10.4563C23.2263 10.116 23.0611 9.83889 22.8083 9.625C22.5555 9.41111 22.2541 9.28958 21.9041 9.26042C21.5541 9.23125 21.2138 9.35278 20.8833 9.625L8.63328 20.125ZM9.81453 9.81458C10.2715 9.35764 10.5 8.80833 10.5 8.16667C10.5 7.525 10.2715 6.97569 9.81453 6.51875C9.35759 6.06181 8.80828 5.83333 8.16662 5.83333C7.52495 5.83333 6.97565 6.06181 6.5187 6.51875C6.06176 6.97569 5.83328 7.525 5.83328 8.16667C5.83328 8.80833 6.06176 9.35764 6.5187 9.81458C6.97565 10.2715 7.52495 10.5 8.16662 10.5C8.80828 10.5 9.35759 10.2715 9.81453 9.81458ZM21.4812 21.4813C21.9381 21.0243 22.1666 20.475 22.1666 19.8333C22.1666 19.1917 21.9381 18.6424 21.4812 18.1854C21.0243 17.7285 20.475 17.5 19.8333 17.5C19.1916 17.5 18.6423 17.7285 18.1854 18.1854C17.7284 18.6424 17.5 19.1917 17.5 19.8333C17.5 20.475 17.7284 21.0243 18.1854 21.4813C18.6423 21.9382 19.1916 22.1667 19.8333 22.1667C20.475 22.1667 21.0243 21.9382 21.4812 21.4813Z"
                fill="white"
              />
            </svg>
          ),
          title: "Scale automation across teams.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Build Intelligent Workflows Without Code",
      description:
        "Automate lead follow-ups, ticket routing, SLA monitoring and escalations with a visual AI flow builder, so every task moves forward without manual effort.",
      tabs: [
        "🆕 New Lead Captured",
        "👤 Assign Sales Representative",
        "💬 Send an Approved Message",
        "📅 Schedule Follow-up",
        "🔄 Update Lead Status",
        "🎫 Ticket Created",
        "🗂️ Categorize Issue",
        "🛠️ Assign Support Team",
        "⏱️ Monitor SLA",
        "🚨 Escalate When Required",
      ],
      ctaTitle: "Build Your First Automated Workflow",
      ctaDesc:
        "Set up your first AI-powered flow in minutes and see every task move forward on its own.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 6. AI-POWERED WORKFORCE MANAGEMENT
  // ==========================================
  "ai-powered-workforce-management": {
    metadata: {
      title: "AI-Powered Workforce Management — Tubelight Communications",
      description:
        "Forecast staffing demand, automate agent scheduling, and optimize contact center productivity with AI-Powered Workforce Management.",
    },
    banner: {
      title: (
        <>
          The Right People. The Right Time. The <span> Right Coverage.</span>
        </>
      ),
      description:
        "Improve contact-center workforce planning with AI-assisted forecasting, scheduling, and performance insights. Align staffing with expected demand while helping managers balance service levels, agent availability, and operational efficiency.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/workforcemanagementanner.mp4",
    },
    features: {
      title: "Plan Smarter. Respond to Demand.",
      description:
        "Contact centers face changing call volumes, fluctuating workloads, and complex staffing requirements. Workforce Management helps managers plan coverage, create schedules, monitor adherence, and identify staffing gaps using operational data and available forecasting capabilities.",

      cards: [
        {
          icon: "01",
          title: "Workload Visibility",
          detail: "Review call volumes, queue activity, and agent utilization.",
        },
        {
          icon: "02",
          title: "Staffing Alerts",
          detail:
            "Highlight potential understaffing or overstaffing based on configured thresholds.",
        },
        {
          icon: "03",
          title: "Performance Analytics",
          detail: "Evaluate staffing efficiency and service-level trends.",
        },
        {
          icon: "04",
          title: "Demand Forecasting",
          detail:
            "Analyze historical call volumes and available operational data to estimate future staffing requirements.",
        },
        {
          icon: "05",
          title: "AI-Assisted Scheduling",
          detail:
            "Help create schedules aligned with forecast demand, staffing rules, and agent availability.",
        },
        {
          icon: "06",
          title: "Intraday Monitoring",
          detail:
            "Compare actual activity with planned staffing and identify emerging gaps.",
        },
        {
          icon: "07",
          title: "Schedule Adherence",
          detail:
            "Monitor agent status and schedule compliance where integrated.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose aI Powered Workforce Management",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H17.5V22.1667H22.1667V8.16667H5.83333V22.1667H10.5V24.5H5.83333ZM12.8333 24.5V17.325L10.9667 19.1917L9.33333 17.5L14 12.8333L18.6667 17.5L17.0333 19.1917L15.1667 17.325V24.5H12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve staffing decisions.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2431 12.8914L11.2847 7.93307L12.9472 6.29974L16.2431 9.59557L22.8639 3.00391L24.4972 4.63724L16.2431 12.8914ZM9.33057 21.5831L17.4389 23.7997L24.3806 21.6414C24.2833 21.4664 24.1424 21.3157 23.9576 21.1893C23.7729 21.0629 23.5639 20.9997 23.3306 20.9997H17.4389C16.9139 20.9997 16.4958 20.9803 16.1847 20.9414C15.8736 20.9025 15.5528 20.8247 15.2222 20.7081L12.5097 19.8039L13.1514 17.5289L15.5139 18.3164C15.8445 18.4136 16.2333 18.4914 16.6806 18.5497C17.1278 18.6081 17.7889 18.647 18.6639 18.6664C18.6639 18.4525 18.6007 18.2484 18.4743 18.0539C18.3479 17.8595 18.1972 17.7331 18.0222 17.6747L11.1972 15.1664H9.33057V21.5831ZM2.33057 25.6664V12.8331H11.1972C11.3333 12.8331 11.4695 12.8477 11.6056 12.8768C11.7417 12.906 11.8681 12.94 11.9847 12.9789L18.8389 15.5164C19.4806 15.7497 20.0007 16.1581 20.3993 16.7414C20.7979 17.3247 20.9972 17.9664 20.9972 18.6664H23.3306C24.3028 18.6664 25.1292 18.9872 25.8097 19.6289C26.4903 20.2706 26.8306 21.1164 26.8306 22.1664V23.3331L17.4972 26.2497L9.33057 23.9747V25.6664H2.33057ZM4.6639 23.3331H6.99723V15.1664H4.6639V23.3331Z"
                fill="white"
              />
            </svg>
          ),
          title: "Support better service-level planning.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 24.5V12.8333H5.83333V22.1667H22.1667V5.83333H12.8333V3.5H24.5V24.5H3.5ZM3.5 10.5V8.16667H5.83333V10.5H3.5ZM3.5 5.83333V3.5H5.83333V5.83333H3.5ZM8.16667 15.1667V12.8333H10.5V15.1667H8.16667ZM8.16667 5.83333V3.5H10.5V5.83333H8.16667ZM12.8333 15.1667V12.8333H15.1667V15.1667H12.8333ZM12.8333 10.5V8.16667H15.1667V10.5H12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Identify coverage gaps earlier.",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 21V15H13V17H21V19H13V21H11ZM3 19V17H9V19H3ZM7 15V13H3V11H7V9H9V15H7ZM11 13V11H21V13H11ZM15 9V3H17V5H21V7H17V9H15ZM3 7V5H13V7H3Z"
                fill="white"
              />
            </svg>
          ),
          title: "Balance agent workloads.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 23.3342L15.1667 21.7009L18.2 18.6676L15.1667 15.6342L16.8 14.0009L19.8334 17.0342L22.8667 14.0009L24.5 15.6342L21.4667 18.6676L24.5 21.7009L22.8667 23.3342L19.8334 20.3009L16.8 23.3342ZM19.1042 12.8342L14.9625 8.69258L16.5959 7.05924L19.075 9.53841L24.0334 4.58008L25.6667 6.24258L19.1042 12.8342ZM2.33337 19.8342V17.5009H12.8334V19.8342H2.33337ZM2.33337 10.5009V8.16758H12.8334V10.5009H2.33337Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve workforce visibility and operational efficiency.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Workforce Management That Predicts Demand",
      description:
        "AI-powered workforce management that predicts call volumes, automates scheduling and keeps service levels high, even when demand changes.",
      tabs: [
        "📞 Contact Centers",
        "🎧 Customer Service Operations",
        "📢 Telemarketing Teams",
        "📊 Businesses Managing Variable Call Volumes",
      ],
      ctaTitle: "Plan Your Workforce Intelligently",
      ctaDesc:
        "From daily peaks to seasonal surges, Tubelight’s AI helps you forecast, schedule and adjust in real time, so service levels stay high and costs stay in check.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 7. VOICE BOT
  // ==========================================
  "voice-bot": {
    metadata: {
      title: "AI Voice Bot — Tubelight Communications",
      description:
        "Automate inbound and outbound phone conversations with human-like, conversational AI Voice Bots. Handle queries, qualify leads, and resolve issues 24/7 without agent intervention.",
    },
    banner: {
      title: (
        <>
          Automate Voice Interactions. Deliver <span>Faster Responses.</span>
        </>
      ),
      description:
        "Use AI-powered voice automation to handle eligible customer calls, answer common questions, collect information, and initiate configured workflows—all while providing a natural conversational experience.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/voicebotbanner.mp4",
    },
    features: {
      title: "Make Every Voice Interaction More Efficient",
      description:
        "High call volumes and repetitive inquiries can place pressure on customer service teams. A Voice Bot can automate supported call scenarios, provide information from approved sources, and route callers to human agents when required.",
      cards: [
        {
          icon: "01",
          title: "Automated Call Handling",
          detail: "Handle supported incoming or outgoing voice scenarios.",
        },
        {
          icon: "02",
          title: "Natural Language Understanding",
          detail:
            "Interpret customer requests using the enabled speech and AI technologies.",
        },
        {
          icon: "03",
          title: "Speech Recognition and Voice Responses",
          detail:
            "Convert speech to text and generate spoken responses through configured services.",
        },
        {
          icon: "04",
          title: "Business System Integration",
          detail:
            "Retrieve or update permitted information through supported APIs and workflows.",
        },
        {
          icon: "05",
          title: "Call Routing and Escalation",
          detail:
            "Transfer calls to human agents according to configured rules.",
        },
        {
          icon: "06",
          title: "Information Collection",
          detail:
            "Capture relevant caller responses and structured information.",
        },
        {
          icon: "07",
          title: "Call Summaries",
          detail: "Generate summaries and interaction records where supported.",
        },
        {
          icon: "08",
          title: "Performance Analytics",
          detail:
            "Review automation outcomes, transfer rates, and call-handling metrics.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose voice Bot",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 4.66536V2.33203H25.6667V4.66536H14ZM14 9.33203V6.9987H25.6667V9.33203H14ZM14 13.9987V11.6654H25.6667V13.9987H14ZM22.1084 25.6654C19.6778 25.6654 17.2764 25.1355 14.9042 24.0758C12.532 23.0161 10.3737 21.514 8.42921 19.5695C6.48476 17.6251 4.98268 15.4668 3.92296 13.0945C2.86324 10.7223 2.33337 8.32092 2.33337 5.89036C2.33337 5.54036 2.45004 5.2487 2.68337 5.01536C2.91671 4.78203 3.20837 4.66536 3.55837 4.66536H8.28337C8.5556 4.66536 8.79865 4.75773 9.01254 4.94245C9.22643 5.12717 9.35282 5.34592 9.39171 5.5987L10.15 9.68203C10.1889 9.99314 10.1792 10.2556 10.1209 10.4695C10.0625 10.6834 9.9556 10.8681 9.80004 11.0237L6.97087 13.882C7.35976 14.6015 7.82157 15.2966 8.35629 15.9674C8.89101 16.6383 9.47921 17.2848 10.1209 17.907C10.7237 18.5098 11.3556 19.0688 12.0167 19.5841C12.6778 20.0994 13.3778 20.5709 14.1167 20.9987L16.8584 18.257C17.0334 18.082 17.2618 17.9508 17.5438 17.8633C17.8257 17.7758 18.1028 17.7515 18.375 17.7904L22.4 18.607C22.6723 18.6848 22.8959 18.8258 23.0709 19.0299C23.2459 19.2341 23.3334 19.4626 23.3334 19.7154V24.4404C23.3334 24.7904 23.2167 25.082 22.9834 25.3154C22.75 25.5487 22.4584 25.6654 22.1084 25.6654ZM5.86254 11.6654L7.78754 9.74036L7.29171 6.9987H4.69587C4.7931 7.79592 4.92921 8.58342 5.10421 9.3612C5.27921 10.139 5.53199 10.907 5.86254 11.6654ZM16.3042 22.107C17.0625 22.4376 17.8355 22.7001 18.623 22.8945C19.4105 23.089 20.2028 23.2154 21 23.2737V20.707L18.2584 20.1529L16.3042 22.107Z"
                fill="white"
              />
            </svg>
          ),
          title: "Handle repetitive calls at scale.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6666 16.332H16.3333V13.9987H11.6666V16.332ZM11.6666 12.832H21V10.4987H11.6666V12.832ZM11.6666 9.33203H21V6.9987H11.6666V9.33203ZM9.33331 20.9987C8.69165 20.9987 8.14234 20.7702 7.6854 20.3133C7.22845 19.8563 6.99998 19.307 6.99998 18.6654V4.66536C6.99998 4.0237 7.22845 3.47439 7.6854 3.01745C8.14234 2.5605 8.69165 2.33203 9.33331 2.33203H23.3333C23.975 2.33203 24.5243 2.5605 24.9812 3.01745C25.4382 3.47439 25.6666 4.0237 25.6666 4.66536V18.6654C25.6666 19.307 25.4382 19.8563 24.9812 20.3133C24.5243 20.7702 23.975 20.9987 23.3333 20.9987H9.33331ZM9.33331 18.6654H23.3333V4.66536H9.33331V18.6654ZM4.66665 25.6654C4.02498 25.6654 3.47567 25.4369 3.01873 24.9799C2.56179 24.523 2.33331 23.9737 2.33331 23.332V6.9987H4.66665V23.332H21V25.6654H4.66665Z"
                fill="white"
              />
            </svg>
          ),
          title: "Provide consistent information.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0018 15.168C12.7185 15.168 11.6199 14.711 10.706 13.7971C9.79209 12.8832 9.33515 11.7846 9.33515 10.5013C9.33515 9.21797 9.79209 8.11936 10.706 7.20547C11.6199 6.29158 12.7185 5.83464 14.0018 5.83464C15.2851 5.83464 16.3838 6.29158 17.2976 7.20547C18.2115 8.11936 18.6685 9.21797 18.6685 10.5013C18.6685 11.7846 18.2115 12.8832 17.2976 13.7971C16.3838 14.711 15.2851 15.168 14.0018 15.168ZM4.66848 24.5013V21.2346C4.66848 20.593 4.83376 19.9902 5.16431 19.4263C5.49487 18.8624 5.95181 18.4346 6.53515 18.143C7.52681 17.6374 8.64487 17.2096 9.88931 16.8596C11.1338 16.5096 12.5046 16.3346 14.0018 16.3346C15.499 16.3346 16.8699 16.5096 18.1143 16.8596C19.3588 17.2096 20.4768 17.6374 21.4685 18.143C22.0518 18.4346 22.5088 18.8624 22.8393 19.4263C23.1699 19.9902 23.3351 20.593 23.3351 21.2346V24.5013H4.66848ZM7.00181 22.168H21.0018V21.2346C21.0018 21.0207 20.9483 20.8263 20.8414 20.6513C20.7345 20.4763 20.5935 20.3402 20.4185 20.243C19.7185 19.893 18.8192 19.543 17.7206 19.193C16.622 18.843 15.3824 18.668 14.0018 18.668C12.6213 18.668 11.3817 18.843 10.2831 19.193C9.18445 19.543 8.28515 19.893 7.58515 20.243C7.41015 20.3402 7.26917 20.4763 7.16223 20.6513C7.05528 20.8263 7.00181 21.0207 7.00181 21.2346V22.168ZM14.0018 12.8346C14.6435 12.8346 15.1928 12.6062 15.6497 12.1492C16.1067 11.6923 16.3351 11.143 16.3351 10.5013C16.3351 9.85964 16.1067 9.31033 15.6497 8.85339C15.1928 8.39644 14.6435 8.16797 14.0018 8.16797C13.3601 8.16797 12.8108 8.39644 12.3539 8.85339C11.897 9.31033 11.6685 9.85964 11.6685 10.5013C11.6685 11.143 11.897 11.6923 12.3539 12.1492C12.8108 12.6062 13.3601 12.8346 14.0018 12.8346ZM1.13931 5.83464V3.5013C1.46987 3.5013 1.77126 3.43811 2.04348 3.31172C2.3157 3.18533 2.55876 3.01519 2.77265 2.8013C2.98653 2.58741 3.15181 2.34436 3.26848 2.07214C3.38515 1.79991 3.44348 1.49852 3.44348 1.16797H5.80598C5.80598 1.80964 5.68445 2.41241 5.4414 2.9763C5.19834 3.54019 4.86292 4.03602 4.43515 4.4638C4.00737 4.89158 3.51153 5.227 2.94765 5.47005C2.38376 5.71311 1.78098 5.83464 1.13931 5.83464ZM1.13931 10.5305V8.19714C2.13098 8.19714 3.04973 8.01241 3.89556 7.64297C4.7414 7.27352 5.47542 6.76797 6.09765 6.1263C6.71987 5.48464 7.2157 4.74089 7.58515 3.89505C7.95459 3.04922 8.13931 2.14019 8.13931 1.16797H10.5018C10.5018 2.4513 10.2588 3.66172 9.77265 4.79922C9.28654 5.93672 8.6157 6.93325 7.76015 7.7888C6.90459 8.64436 5.91292 9.31519 4.78515 9.8013C3.65737 10.2874 2.44209 10.5305 1.13931 10.5305ZM26.8351 10.5305C25.5518 10.5305 24.3414 10.2874 23.2039 9.8013C22.0664 9.31519 21.0699 8.64436 20.2143 7.7888C19.3588 6.93325 18.6879 5.93672 18.2018 4.79922C17.7157 3.66172 17.4726 2.4513 17.4726 1.16797H19.806C19.806 2.14019 19.9907 3.04922 20.3601 3.89505C20.7296 4.74089 21.2351 5.48464 21.8768 6.1263C22.5185 6.76797 23.2622 7.27352 24.1081 7.64297C24.9539 8.01241 25.8629 8.19714 26.8351 8.19714V10.5305ZM26.8351 5.83464C26.1935 5.83464 25.5907 5.71311 25.0268 5.47005C24.4629 5.227 23.9671 4.89158 23.5393 4.4638C23.1115 4.03602 22.7761 3.54019 22.5331 2.9763C22.29 2.41241 22.1685 1.80964 22.1685 1.16797H24.5018C24.5018 1.49852 24.565 1.79991 24.6914 2.07214C24.8178 2.34436 24.9879 2.58741 25.2018 2.8013C25.4157 3.01519 25.6588 3.18533 25.931 3.31172C26.2032 3.43811 26.5046 3.5013 26.8351 3.5013V5.83464Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce pressure on live agents.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16671 7V5.83333C8.16671 5.19167 8.39518 4.64236 8.85212 4.18542C9.30907 3.72847 9.85837 3.5 10.5 3.5H17.5C18.1417 3.5 18.691 3.72847 19.148 4.18542C19.6049 4.64236 19.8334 5.19167 19.8334 5.83333V7H20.65C21.1167 7 21.5396 7.13125 21.9188 7.39375C22.298 7.65625 22.575 7.99167 22.75 8.4L25.4917 14.7C25.55 14.8556 25.5938 15.0111 25.623 15.1667C25.6521 15.3222 25.6667 15.4778 25.6667 15.6333V21C25.6667 21.6417 25.4382 22.191 24.9813 22.6479C24.5243 23.1049 23.975 23.3333 23.3334 23.3333H4.66671C4.02504 23.3333 3.47574 23.1049 3.01879 22.6479C2.56185 22.191 2.33337 21.6417 2.33337 21V15.6333C2.33337 15.4778 2.34796 15.3222 2.37712 15.1667C2.40629 15.0111 2.45004 14.8556 2.50837 14.7L5.25004 8.4C5.42504 7.99167 5.70212 7.65625 6.08129 7.39375C6.46046 7.13125 6.88337 7 7.35004 7H8.16671ZM10.5 7H17.5V5.83333H10.5V7ZM8.16671 14V12.8333H10.5V14H17.5V12.8333H19.8334V14H22.6334L20.65 9.33333H7.35004L5.36671 14H8.16671ZM8.16671 16.3333H4.66671V21H23.3334V16.3333H19.8334V17.5H17.5V16.3333H10.5V17.5H8.16671V16.3333Z"
                fill="white"
              />
            </svg>
          ),
          title:
            "Support service availability beyond staffed hours where configured.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1667 14C22.1667 11.725 21.3743 9.79514 19.7896 8.21042C18.2049 6.62569 16.275 5.83333 14 5.83333V3.5C15.4583 3.5 16.8243 3.77708 18.0979 4.33125C19.3715 4.88542 20.4799 5.63403 21.4229 6.57708C22.366 7.52014 23.1146 8.62847 23.6688 9.90208C24.2229 11.1757 24.5 12.5417 24.5 14H22.1667ZM17.5 14C17.5 13.0278 17.1597 12.2014 16.4792 11.5208C15.7986 10.8403 14.9722 10.5 14 10.5V8.16667C15.6139 8.16667 16.9896 8.73542 18.1271 9.87292C19.2646 11.0104 19.8333 12.3861 19.8333 14H17.5ZM23.275 24.5C20.8444 24.5 18.4431 23.9701 16.0708 22.9104C13.6986 21.8507 11.5403 20.3486 9.59583 18.4042C7.65139 16.4597 6.14931 14.3014 5.08958 11.9292C4.02986 9.55694 3.5 7.15556 3.5 4.725C3.5 4.375 3.61667 4.08333 3.85 3.85C4.08333 3.61667 4.375 3.5 4.725 3.5H9.45C9.72222 3.5 9.96528 3.59236 10.1792 3.77708C10.3931 3.96181 10.5194 4.18056 10.5583 4.43333L11.3167 8.51667C11.3556 8.82778 11.3458 9.09028 11.2875 9.30417C11.2292 9.51806 11.1222 9.70278 10.9667 9.85833L8.1375 12.7167C8.52639 13.4361 8.98819 14.1313 9.52292 14.8021C10.0576 15.4729 10.6458 16.1194 11.2875 16.7417C11.8903 17.3444 12.5222 17.9035 13.1833 18.4187C13.8444 18.934 14.5444 19.4056 15.2833 19.8333L18.025 17.0917C18.2 16.9167 18.4285 16.7854 18.7104 16.6979C18.9924 16.6104 19.2694 16.5861 19.5417 16.625L23.5667 17.4417C23.8389 17.5194 24.0625 17.6604 24.2375 17.8646C24.4125 18.0688 24.5 18.2972 24.5 18.55V23.275C24.5 23.625 24.3833 23.9167 24.15 24.15C23.9167 24.3833 23.625 24.5 23.275 24.5ZM7.02917 10.5L8.95417 8.575L8.45833 5.83333H5.8625C5.95972 6.63056 6.09583 7.41806 6.27083 8.19583C6.44583 8.97361 6.69861 9.74167 7.02917 10.5ZM17.4708 20.9417C18.2292 21.2722 19.0021 21.5347 19.7896 21.7292C20.5771 21.9236 21.3694 22.05 22.1667 22.1083V19.5417L19.425 18.9875L17.4708 20.9417Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve visibility into automated call outcomes.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "AI Voice Bot for Every Customer Conversation",
      description:
        "Automate appointment reminders, service inquiries, lead qualification, order updates, FAQs and callbacks with natural, human-like voice conversations, 24/7.",
      tabs: [
        "📅 Appointment Reminders",
        "❓ Service Inquiries",
        "🎯 Lead Qualification",
        "📦 Order Updates",
        "💡 FAQs",
        "📞 Callback Workflows",
      ],
      ctaTitle: "Experience Intelligent Voice Automation",
      ctaDesc:
        "AI voice bots that talk naturally, understand intent and resolve everyday calls instantly",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 8. AI CHATBOT
  // ==========================================
  "ai-chatbot": {
    metadata: {
      title: "AI Chatbot — Tubelight Communications",
      description:
        "Deploy intelligent, generative AI chatbots across WhatsApp, Web, and Mobile Apps. Automate customer support, drive sales, and qualify leads round the clock.",
    },
    banner: {
      title: (
        <>
          Engage Customers Instantly. Automate
          <span> Everyday Conversations.</span>
        </>
      ),
      description:
        "Deliver faster digital support with an AI chatbot that answers common questions, guides users, captures leads, and connects customers to the right team when human assistance is needed.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/aichatbotbanner.mp4",
    },
    features: {
      title: "Make Every Voice Interaction More Efficient",
      description:
        "High call volumes and repetitive inquiries can place pressure on customer service teams. A Voice Bot can automate supported call scenarios, provide information from approved sources, and route callers to human agents when required.",
      cards: [
        {
          icon: "01",
          title: "Automated Call Handling",
          detail: "Handle supported incoming or outgoing voice scenarios.",
        },
        {
          icon: "02",
          title: "Natural Language Understanding",
          detail:
            "Interpret customer requests using the enabled speech and AI technologies.",
        },
        {
          icon: "03",
          title: "Speech Recognition and Voice Responses",
          detail:
            "Convert speech to text and generate spoken responses through configured services.",
        },
        {
          icon: "04",
          title: "Business System Integration",
          detail:
            "Retrieve or update permitted information through supported APIs and workflows.",
        },
        {
          icon: "05",
          title: "Call Routing and Escalation",
          detail:
            "Transfer calls to human agents according to configured rules.",
        },
        {
          icon: "06",
          title: "Information Collection",
          detail:
            "Capture relevant caller responses and structured information.",
        },
        {
          icon: "07",
          title: "Call Summaries",
          detail: "Generate summaries and interaction records where supported.",
        },
        {
          icon: "08",
          title: "Performance Analytics",
          detail:
            "Review automation outcomes, transfer rates, and call-handling metrics.",
        },
      ],
    },
    benefits: {
      eyebrow: "business benefits",
      title: "Why Teams Choose AI Chat Bot",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33334 25.6654V4.66536C2.33334 4.0237 2.56182 3.47439 3.01876 3.01745C3.4757 2.5605 4.02501 2.33203 4.66668 2.33203H23.3333C23.975 2.33203 24.5243 2.5605 24.9813 3.01745C25.4382 3.47439 25.6667 4.0237 25.6667 4.66536V11.6654H23.3333V4.66536H4.66668V19.9779L6.00834 18.6654H17.5V20.9987H7.00001L2.33334 25.6654ZM22.1667 26.832V20.9987H19.8333V13.9987H25.6667L23.6833 18.6654H26.25L22.1667 26.832Z"
                fill="white"
              />
            </svg>
          ),
          title: "Respond to customers more quickly.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V10.5C3.5 8.55556 4.18056 6.90278 5.54167 5.54167C6.90278 4.18056 8.55556 3.5 10.5 3.5H17.5C19.4444 3.5 21.0972 4.18056 22.4583 5.54167C23.8194 6.90278 24.5 8.55556 24.5 10.5V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V10.5C22.1667 9.21667 21.7097 8.11806 20.7958 7.20417C19.8819 6.29028 18.7833 5.83333 17.5 5.83333H10.5C9.21667 5.83333 8.11806 6.29028 7.20417 7.20417C6.29028 8.11806 5.83333 9.21667 5.83333 10.5V22.1667ZM8.85208 13.3146C8.39514 12.8576 8.16667 12.3083 8.16667 11.6667C8.16667 11.025 8.39514 10.4757 8.85208 10.0188C9.30903 9.56181 9.85833 9.33333 10.5 9.33333C11.1417 9.33333 11.691 9.56181 12.1479 10.0188C12.6049 10.4757 12.8333 11.025 12.8333 11.6667C12.8333 12.3083 12.6049 12.8576 12.1479 13.3146C11.691 13.7715 11.1417 14 10.5 14C9.85833 14 9.30903 13.7715 8.85208 13.3146ZM15.8521 13.3146C15.3951 12.8576 15.1667 12.3083 15.1667 11.6667C15.1667 11.025 15.3951 10.4757 15.8521 10.0188C16.309 9.56181 16.8583 9.33333 17.5 9.33333C18.1417 9.33333 18.691 9.56181 19.1479 10.0188C19.6049 10.4757 19.8333 11.025 19.8333 11.6667C19.8333 12.3083 19.6049 12.8576 19.1479 13.3146C18.691 13.7715 18.1417 14 17.5 14C16.8583 14 16.309 13.7715 15.8521 13.3146ZM8.16667 22.1667V19.8333C8.16667 19.1917 8.39514 18.6424 8.85208 18.1854C9.30903 17.7285 9.85833 17.5 10.5 17.5H17.5C18.1417 17.5 18.691 17.7285 19.1479 18.1854C19.6049 18.6424 19.8333 19.1917 19.8333 19.8333V22.1667H17.5V19.8333H15.1667V22.1667H12.8333V19.8333H10.5V22.1667H8.16667Z"
                fill="white"
              />
            </svg>
          ),
          title: "Automate repetitive inquiries.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3334 10.5013V7.0013H19.8334V4.66797H23.3334C23.975 4.66797 24.5243 4.89644 24.9813 5.35339C25.4382 5.81033 25.6667 6.35964 25.6667 7.0013V10.5013H23.3334ZM2.33337 10.5013V7.0013C2.33337 6.35964 2.56185 5.81033 3.01879 5.35339C3.47574 4.89644 4.02504 4.66797 4.66671 4.66797H8.16671V7.0013H4.66671V10.5013H2.33337ZM19.8334 23.3346V21.0013H23.3334V17.5013H25.6667V21.0013C25.6667 21.643 25.4382 22.1923 24.9813 22.6492C24.5243 23.1062 23.975 23.3346 23.3334 23.3346H19.8334ZM4.66671 23.3346C4.02504 23.3346 3.47574 23.1062 3.01879 22.6492C2.56185 22.1923 2.33337 21.643 2.33337 21.0013V17.5013H4.66671V21.0013H8.16671V23.3346H4.66671ZM7.00004 18.668V9.33464H21V18.668H7.00004ZM9.33337 16.3346H18.6667V11.668H9.33337V16.3346Z"
                fill="white"
              />
            </svg>
          ),
          title: "Capture leads outside staffed hours where configured.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1116_1959)">
                <path
                  d="M5.83331 19.8346V11.668H8.16665V19.8346H5.83331ZM12.8333 19.8346V11.668H15.1666V19.8346H12.8333ZM2.33331 9.33464V7.0013L14 1.16797L25.6666 7.0013V9.33464H2.33331ZM7.55415 7.0013H20.4458L14 3.79297L7.55415 7.0013ZM2.33331 24.5013V22.168H16.3916C16.4305 22.5763 16.4791 22.9701 16.5375 23.3492C16.5958 23.7284 16.6833 24.1124 16.8 24.5013H2.33331ZM19.8333 15.4596V11.668H22.1666V14.293L19.8333 15.4596ZM23.3333 28.0013C21.9916 27.6707 20.8785 26.8978 19.9937 25.6826C19.109 24.4673 18.6666 23.1207 18.6666 21.643V18.668L23.3333 16.3346L28 18.668V21.643C28 23.1207 27.5576 24.4673 26.6729 25.6826C25.7882 26.8978 24.675 27.6707 23.3333 28.0013ZM22.4875 24.5013L26.5416 20.4763L25.3166 19.2513L22.4875 22.0221L21.35 20.8846L20.125 22.1388L22.4875 24.5013Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1116_1959">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          title: "Reduce agent workload.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9166 19.2513C23.4305 19.2513 23.0173 19.0812 22.677 18.7409C22.3368 18.4006 22.1666 17.9874 22.1666 17.5013V14.5846C22.1666 14.0985 22.3368 13.6853 22.677 13.3451C23.0173 13.0048 23.4305 12.8346 23.9166 12.8346C24.4027 12.8346 24.8159 13.0048 25.1562 13.3451C25.4965 13.6853 25.6666 14.0985 25.6666 14.5846V17.5013C25.6666 17.9874 25.4965 18.4006 25.1562 18.7409C24.8159 19.0812 24.4027 19.2513 23.9166 19.2513ZM23.3333 23.3346V21.5263C22.3416 21.3707 21.5104 20.9187 20.8395 20.1701C20.1687 19.4214 19.8333 18.5319 19.8333 17.5013H21C21 18.318 21.2819 19.0082 21.8458 19.5721C22.4097 20.136 23.1 20.418 23.9166 20.418C24.7333 20.418 25.4236 20.136 25.9875 19.5721C26.5513 19.0082 26.8333 18.318 26.8333 17.5013H28C28 18.5319 27.6645 19.4214 26.9937 20.1701C26.3229 20.9187 25.4916 21.3707 24.5 21.5263V23.3346H23.3333ZM10.5 14.0013C9.21663 14.0013 8.11801 13.5444 7.20413 12.6305C6.29024 11.7166 5.83329 10.618 5.83329 9.33464C5.83329 8.0513 6.29024 6.95269 7.20413 6.0388C8.11801 5.12491 9.21663 4.66797 10.5 4.66797C10.7722 4.66797 11.0395 4.68741 11.302 4.7263C11.5645 4.76519 11.8222 4.83325 12.075 4.93047C11.5694 5.53325 11.1805 6.20894 10.9083 6.95755C10.6361 7.70616 10.5 8.49852 10.5 9.33464C10.5 10.1707 10.6361 10.9631 10.9083 11.7117C11.1805 12.4603 11.5694 13.136 12.075 13.7388C11.8222 13.836 11.5645 13.9041 11.302 13.943C11.0395 13.9819 10.7722 14.0013 10.5 14.0013ZM1.16663 23.3346V20.0971C1.16663 19.436 1.3319 18.8235 1.66246 18.2596C1.99301 17.6957 2.44996 17.268 3.03329 16.9763C3.77218 16.5874 4.57427 16.252 5.43954 15.9701C6.30482 15.6881 7.25274 15.4694 8.28329 15.3138C7.50552 15.8582 6.90274 16.5485 6.47496 17.3846C6.04718 18.2207 5.83329 19.1249 5.83329 20.0971V23.3346H1.16663ZM14.2041 12.6305C13.2902 11.7166 12.8333 10.618 12.8333 9.33464C12.8333 8.0513 13.2902 6.95269 14.2041 6.0388C15.118 5.12491 16.2166 4.66797 17.5 4.66797C18.7833 4.66797 19.8819 5.12491 20.7958 6.0388C21.7097 6.95269 22.1666 8.0513 22.1666 9.33464C22.1666 10.618 21.7097 11.7166 20.7958 12.6305C19.8819 13.5444 18.7833 14.0013 17.5 14.0013C16.2166 14.0013 15.118 13.5444 14.2041 12.6305ZM17.5 11.668C18.1416 11.668 18.6909 11.4395 19.1479 10.9826C19.6048 10.5256 19.8333 9.9763 19.8333 9.33464C19.8333 8.69297 19.6048 8.14366 19.1479 7.68672C18.6909 7.22977 18.1416 7.0013 17.5 7.0013C16.8583 7.0013 16.309 7.22977 15.852 7.68672C15.3951 8.14366 15.1666 8.69297 15.1666 9.33464C15.1666 9.9763 15.3951 10.5256 15.852 10.9826C16.309 11.4395 16.8583 11.668 17.5 11.668ZM8.16663 23.3346V20.0971C8.16663 19.436 8.3319 18.8235 8.66246 18.2596C8.99301 17.6957 9.44996 17.268 10.0333 16.9763C11.025 16.4707 12.1479 16.043 13.402 15.693C14.6562 15.343 16.0222 15.168 17.5 15.168C17.7333 15.168 17.9618 15.1728 18.1854 15.1826C18.409 15.1923 18.6277 15.2069 18.8416 15.2263C18.6472 15.5763 18.4868 15.9409 18.3604 16.3201C18.234 16.6992 18.1513 17.093 18.1125 17.5013H17.5C16.1 17.5013 14.8604 17.6763 13.7812 18.0263C12.702 18.3763 11.8125 18.7263 11.1125 19.0763C10.918 19.1735 10.7673 19.3145 10.6604 19.4992C10.5534 19.6839 10.5 19.8832 10.5 20.0971V21.0013H18.8708C19.1625 21.5069 19.5222 21.9541 19.95 22.343C20.3777 22.7319 20.8541 23.0624 21.3791 23.3346H8.16663Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve digital customer engagement.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "AI Chatbot That Turns Visitors Into Customers",
      description:
        "Answer questions, capture leads, guide product discovery and support customers on your website, instantly and around the clock.",
      tabs: [
        "Website support",
        "Sales inquiries",
        "Lead generation",
        "Product discovery",
        "FAQs",
        "Customer service.",
      ],
      ctaTitle: "Put Intelligent Chat to Work",
      ctaDesc:
        "From first question to qualified lead, Tubelight’s AI chatbot keeps every website conversation moving forward.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 9. AI CAMPAIGNER (Agentic AI)
  // ==========================================
  "ai-campaigner": {
    metadata: {
      title: "AI Campaigner — Tubelight Communications",
      description:
        "Plan, launch, and optimize customer communication campaigns across supported messaging channels with audience segmentation, automated journeys, personalization, and campaign analytics.",
    },
    banner: {
      title: "Create Smarter Campaigns. ",
      videoSrc: "/images/aicampaignerbanner.mp4",
      highlightText: "Engage the Right Audience.",
      description:
        "Plan, launch, and optimize customer communication campaigns across supported messaging channels. Combine audience segmentation, automated journeys, personalized communication, and campaign analytics to make every interaction more relevant.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
    },
    platformContent: {
      eyebrow: "THE PLATFORM",
      title: "Move Beyond Manual Campaign Execution",
      paragraphs: [
        "Customer engagement requires more than sending bulk messages. Businesses need to reach the right audience, choose relevant communication, follow up at the right time, and measure campaign performance.",
        "AI Campaigner helps streamline campaign operations through configurable workflows and AI-assisted capabilities. Manage customer outreach across WhatsApp, SMS, RCS, Email, and Voice where supported by your platform integrations.",
      ],
    },
    features: {
      eyebrow: "KEY FEATURES",
      title: "Everything a Modern Support Desk Needs",
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Support That Scales With Accountability",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9972 15.168V12.8346H25.6639V15.168H20.9972ZM22.3972 23.3346L18.6639 20.5346L20.0639 18.668L23.7972 21.468L22.3972 23.3346ZM20.0639 9.33464L18.6639 7.46797L22.3972 4.66797L23.7972 6.53464L20.0639 9.33464ZM5.83057 22.168V17.5013H4.6639C4.02223 17.5013 3.47293 17.2728 3.01598 16.8159C2.55904 16.3589 2.33057 15.8096 2.33057 15.168V12.8346C2.33057 12.193 2.55904 11.6437 3.01598 11.1867C3.47293 10.7298 4.02223 10.5013 4.6639 10.5013H9.33057L15.1639 7.0013V21.0013L9.33057 17.5013H8.1639V22.168H5.83057ZM12.8306 16.8596V11.143L9.97223 12.8346H4.6639V15.168H9.97223L12.8306 16.8596ZM16.3306 17.9096V10.093C16.8556 10.5596 17.2785 11.1284 17.5993 11.7992C17.9201 12.4701 18.0806 13.2041 18.0806 14.0013C18.0806 14.7985 17.9201 15.5326 17.5993 16.2034C17.2785 16.8742 16.8556 17.443 16.3306 17.9096Z"
                fill="white"
              />
            </svg>
          ),
          title: "Manage campaigns from a centralized workspace.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1275_1088)">
                <path
                  d="M0 21V19.1625C0 18.3264 0.427778 17.6458 1.28333 17.1208C2.13889 16.5958 3.26667 16.3333 4.66667 16.3333C4.91944 16.3333 5.1625 16.3382 5.39583 16.3479C5.62917 16.3576 5.85278 16.3819 6.06667 16.4208C5.79444 16.8292 5.59028 17.2569 5.45417 17.7042C5.31806 18.1514 5.25 18.6181 5.25 19.1042V21H0ZM7 21V19.1042C7 18.4819 7.17014 17.9132 7.51042 17.3979C7.85069 16.8826 8.33194 16.4306 8.95417 16.0417C9.57639 15.6528 10.3201 15.3611 11.1854 15.1667C12.0507 14.9722 12.9889 14.875 14 14.875C15.0306 14.875 15.9785 14.9722 16.8438 15.1667C17.709 15.3611 18.4528 15.6528 19.075 16.0417C19.6972 16.4306 20.1736 16.8826 20.5042 17.3979C20.8347 17.9132 21 18.4819 21 19.1042V21H7ZM22.75 21V19.1042C22.75 18.5986 22.6868 18.1222 22.5604 17.675C22.434 17.2278 22.2444 16.8097 21.9917 16.4208C22.2056 16.3819 22.4243 16.3576 22.6479 16.3479C22.8715 16.3382 23.1 16.3333 23.3333 16.3333C24.7333 16.3333 25.8611 16.591 26.7167 17.1062C27.5722 17.6215 28 18.3069 28 19.1625V21H22.75ZM9.47917 18.6667H18.55C18.3556 18.2778 17.816 17.9375 16.9312 17.6458C16.0465 17.3542 15.0694 17.2083 14 17.2083C12.9306 17.2083 11.9535 17.3542 11.0688 17.6458C10.184 17.9375 9.65417 18.2778 9.47917 18.6667ZM4.66667 15.1667C4.025 15.1667 3.47569 14.9382 3.01875 14.4812C2.56181 14.0243 2.33333 13.475 2.33333 12.8333C2.33333 12.1722 2.56181 11.6181 3.01875 11.1708C3.47569 10.7236 4.025 10.5 4.66667 10.5C5.32778 10.5 5.88194 10.7236 6.32917 11.1708C6.77639 11.6181 7 12.1722 7 12.8333C7 13.475 6.77639 14.0243 6.32917 14.4812C5.88194 14.9382 5.32778 15.1667 4.66667 15.1667ZM23.3333 15.1667C22.6917 15.1667 22.1424 14.9382 21.6854 14.4812C21.2285 14.0243 21 13.475 21 12.8333C21 12.1722 21.2285 11.6181 21.6854 11.1708C22.1424 10.7236 22.6917 10.5 23.3333 10.5C23.9944 10.5 24.5486 10.7236 24.9958 11.1708C25.4431 11.6181 25.6667 12.1722 25.6667 12.8333C25.6667 13.475 25.4431 14.0243 24.9958 14.4812C24.5486 14.9382 23.9944 15.1667 23.3333 15.1667ZM14 14C13.0278 14 12.2014 13.6597 11.5208 12.9792C10.8403 12.2986 10.5 11.4722 10.5 10.5C10.5 9.50833 10.8403 8.67708 11.5208 8.00625C12.2014 7.33542 13.0278 7 14 7C14.9917 7 15.8229 7.33542 16.4937 8.00625C17.1646 8.67708 17.5 9.50833 17.5 10.5C17.5 11.4722 17.1646 12.2986 16.4937 12.9792C15.8229 13.6597 14.9917 14 14 14ZM14 11.6667C14.3306 11.6667 14.6076 11.5549 14.8313 11.3313C15.0549 11.1076 15.1667 10.8306 15.1667 10.5C15.1667 10.1694 15.0549 9.89236 14.8313 9.66875C14.6076 9.44514 14.3306 9.33333 14 9.33333C13.6694 9.33333 13.3924 9.44514 13.1687 9.66875C12.9451 9.89236 12.8333 10.1694 12.8333 10.5C12.8333 10.8306 12.9451 11.1076 13.1687 11.3313C13.3924 11.5549 13.6694 11.6667 14 11.6667Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1275_1088">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          title: "Improve audience relevance through segmentation.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9972 15.168V12.8346H25.6639V15.168H20.9972ZM22.3972 23.3346L18.6639 20.5346L20.0639 18.668L23.7972 21.468L22.3972 23.3346ZM20.0639 9.33464L18.6639 7.46797L22.3972 4.66797L23.7972 6.53464L20.0639 9.33464ZM5.83057 22.168V17.5013H4.6639C4.02223 17.5013 3.47293 17.2728 3.01598 16.8159C2.55904 16.3589 2.33057 15.8096 2.33057 15.168V12.8346C2.33057 12.193 2.55904 11.6437 3.01598 11.1867C3.47293 10.7298 4.02223 10.5013 4.6639 10.5013H9.33057L15.1639 7.0013V21.0013L9.33057 17.5013H8.1639V22.168H5.83057ZM12.8306 16.8596V11.143L9.97223 12.8346H4.6639V15.168H9.97223L12.8306 16.8596ZM16.3306 17.9096V10.093C16.8556 10.5596 17.2785 11.1284 17.5993 11.7992C17.9201 12.4701 18.0806 13.2041 18.0806 14.0013C18.0806 14.7985 17.9201 15.5326 17.5993 16.2034C17.2785 16.8742 16.8556 17.443 16.3306 17.9096Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce manual campaign execution.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V10.5C3.5 8.55556 4.18056 6.90278 5.54167 5.54167C6.90278 4.18056 8.55556 3.5 10.5 3.5H17.5C19.4444 3.5 21.0972 4.18056 22.4583 5.54167C23.8194 6.90278 24.5 8.55556 24.5 10.5V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V10.5C22.1667 9.21667 21.7097 8.11806 20.7958 7.20417C19.8819 6.29028 18.7833 5.83333 17.5 5.83333H10.5C9.21667 5.83333 8.11806 6.29028 7.20417 7.20417C6.29028 8.11806 5.83333 9.21667 5.83333 10.5V22.1667ZM8.85208 13.3146C8.39514 12.8576 8.16667 12.3083 8.16667 11.6667C8.16667 11.025 8.39514 10.4757 8.85208 10.0188C9.30903 9.56181 9.85833 9.33333 10.5 9.33333C11.1417 9.33333 11.691 9.56181 12.1479 10.0188C12.6049 10.4757 12.8333 11.025 12.8333 11.6667C12.8333 12.3083 12.6049 12.8576 12.1479 13.3146C11.691 13.7715 11.1417 14 10.5 14C9.85833 14 9.30903 13.7715 8.85208 13.3146ZM15.8521 13.3146C15.3951 12.8576 15.1667 12.3083 15.1667 11.6667C15.1667 11.025 15.3951 10.4757 15.8521 10.0188C16.309 9.56181 16.8583 9.33333 17.5 9.33333C18.1417 9.33333 18.691 9.56181 19.1479 10.0188C19.6049 10.4757 19.8333 11.025 19.8333 11.6667C19.8333 12.3083 19.6049 12.8576 19.1479 13.3146C18.691 13.7715 18.1417 14 17.5 14C16.8583 14 16.309 13.7715 15.8521 13.3146ZM8.16667 22.1667V19.8333C8.16667 19.1917 8.39514 18.6424 8.85208 18.1854C9.30903 17.7285 9.85833 17.5 10.5 17.5H17.5C18.1417 17.5 18.691 17.7285 19.1479 18.1854C19.6049 18.6424 19.8333 19.1917 19.8333 19.8333V22.1667H17.5V19.8333H15.1667V22.1667H12.8333V19.8333H10.5V22.1667H8.16667Z"
                fill="white"
              />
            </svg>
          ),
          title: "Automate customer follow-ups.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 24.5V22.1667H7V24.5H3.5ZM3.5 19.8333V17.5H12.8333V19.8333H3.5ZM3.5 15.1667V12.8333H24.5V15.1667H3.5ZM3.5 10.5V8.16667H12.8333V10.5H3.5ZM3.5 5.83333V3.5H7V5.83333H3.5ZM9.33333 24.5V22.1667H12.8333V24.5H9.33333ZM9.33333 5.83333V3.5H12.8333V5.83333H9.33333ZM15.1667 24.5V22.1667H18.6667V24.5H15.1667ZM15.1667 19.8333V17.5H24.5V19.8333H15.1667ZM15.1667 10.5V8.16667H24.5V10.5H15.1667ZM15.1667 5.83333V3.5H18.6667V5.83333H15.1667ZM21 24.5V22.1667H24.5V24.5H21ZM21 5.83333V3.5H24.5V5.83333H21Z"
                fill="white"
              />
            </svg>
          ),
          title: "Track campaign performance and communication costs.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1275_1108)">
                <path
                  d="M23.9165 19.2513C23.4304 19.2513 23.0172 19.0812 22.6769 18.7409C22.3366 18.4006 22.1665 17.9874 22.1665 17.5013V14.5846C22.1665 14.0985 22.3366 13.6853 22.6769 13.3451C23.0172 13.0048 23.4304 12.8346 23.9165 12.8346C24.4026 12.8346 24.8158 13.0048 25.1561 13.3451C25.4964 13.6853 25.6665 14.0985 25.6665 14.5846V17.5013C25.6665 17.9874 25.4964 18.4006 25.1561 18.7409C24.8158 19.0812 24.4026 19.2513 23.9165 19.2513ZM23.3332 23.3346V21.5263C22.3415 21.3707 21.5103 20.9187 20.8394 20.1701C20.1686 19.4214 19.8332 18.5319 19.8332 17.5013H20.9998C20.9998 18.318 21.2818 19.0082 21.8457 19.5721C22.4096 20.136 23.0998 20.418 23.9165 20.418C24.7332 20.418 25.4234 20.136 25.9873 19.5721C26.5512 19.0082 26.8332 18.318 26.8332 17.5013H27.9998C27.9998 18.5319 27.6644 19.4214 26.9936 20.1701C26.3228 20.9187 25.4915 21.3707 24.4998 21.5263V23.3346H23.3332ZM10.4998 14.0013C9.2165 14.0013 8.11789 13.5444 7.204 12.6305C6.29011 11.7166 5.83317 10.618 5.83317 9.33464C5.83317 8.0513 6.29011 6.95269 7.204 6.0388C8.11789 5.12491 9.2165 4.66797 10.4998 4.66797C10.7721 4.66797 11.0394 4.68741 11.3019 4.7263C11.5644 4.76519 11.8221 4.83325 12.0748 4.93047C11.5693 5.53325 11.1804 6.20894 10.9082 6.95755C10.6359 7.70616 10.4998 8.49852 10.4998 9.33464C10.4998 10.1707 10.6359 10.9631 10.9082 11.7117C11.1804 12.4603 11.5693 13.136 12.0748 13.7388C11.8221 13.836 11.5644 13.9041 11.3019 13.943C11.0394 13.9819 10.7721 14.0013 10.4998 14.0013ZM1.1665 23.3346V20.0971C1.1665 19.436 1.33178 18.8235 1.66234 18.2596C1.99289 17.6957 2.44984 17.268 3.03317 16.9763C3.77206 16.5874 4.57414 16.252 5.43942 15.9701C6.3047 15.6881 7.25261 15.4694 8.28317 15.3138C7.50539 15.8582 6.90262 16.5485 6.47484 17.3846C6.04706 18.2207 5.83317 19.1249 5.83317 20.0971V23.3346H1.1665ZM14.204 12.6305C13.2901 11.7166 12.8332 10.618 12.8332 9.33464C12.8332 8.0513 13.2901 6.95269 14.204 6.0388C15.1179 5.12491 16.2165 4.66797 17.4998 4.66797C18.7832 4.66797 19.8818 5.12491 20.7957 6.0388C21.7096 6.95269 22.1665 8.0513 22.1665 9.33464C22.1665 10.618 21.7096 11.7166 20.7957 12.6305C19.8818 13.5444 18.7832 14.0013 17.4998 14.0013C16.2165 14.0013 15.1179 13.5444 14.204 12.6305ZM17.4998 11.668C18.1415 11.668 18.6908 11.4395 19.1478 10.9826C19.6047 10.5256 19.8332 9.9763 19.8332 9.33464C19.8332 8.69297 19.6047 8.14366 19.1478 7.68672C18.6908 7.22977 18.1415 7.0013 17.4998 7.0013C16.8582 7.0013 16.3089 7.22977 15.8519 7.68672C15.395 8.14366 15.1665 8.69297 15.1665 9.33464C15.1665 9.9763 15.395 10.5256 15.8519 10.9826C16.3089 11.4395 16.8582 11.668 17.4998 11.668ZM8.1665 23.3346V20.0971C8.1665 19.436 8.33178 18.8235 8.66234 18.2596C8.99289 17.6957 9.44984 17.268 10.0332 16.9763C11.0248 16.4707 12.1478 16.043 13.4019 15.693C14.6561 15.343 16.0221 15.168 17.4998 15.168C17.7332 15.168 17.9616 15.1728 18.1853 15.1826C18.4089 15.1923 18.6276 15.2069 18.8415 15.2263C18.6471 15.5763 18.4866 15.9409 18.3603 16.3201C18.2339 16.6992 18.1512 17.093 18.1123 17.5013H17.4998C16.0998 17.5013 14.8603 17.6763 13.7811 18.0263C12.7019 18.3763 11.8123 18.7263 11.1123 19.0763C10.9179 19.1735 10.7672 19.3145 10.6603 19.4992C10.5533 19.6839 10.4998 19.8832 10.4998 20.0971V21.0013H18.8707C19.1623 21.5069 19.5221 21.9541 19.9498 22.343C20.3776 22.7319 20.854 23.0624 21.379 23.3346H8.1665Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1275_1108">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          title: "Improve visibility into engagement and conversion outcomes.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Built for Teams That Live in the Queue",
      description:
        "Customer support teams, IT helpdesks, telecom providers, e-commerce businesses, financial services, SaaS companies, and enterprises managing high volumes of customer requests.",
      tabs: [
        "🎯 Lead Generation",
        "👋 Customer Onboarding",
        "📢 Promotional Campaign",
        "📅 Appointment Reminders",
        "💳 Payment and Service Notifications",
        "🔄 Customer Retention",
      ],
      ctaTitle: "Turn Customer Communication into Measurable Outcomes",
      ctaDesc:
        "Build connected campaigns that reach the right audience, automate follow-ups, and provide clear performance insights.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 10. INTELLIGENT CONVERSATIONS (Agentic AI)
  // ==========================================
  "intelligent-conversations": {
    metadata: {
      title: "Intelligent Conversations — Tubelight Communications",
      description:
        "Bring customer conversations together and use AI to understand intent, assist with responses, automate routine workflows, and connect customers with the right human agent when needed.",
    },
    banner: {
      title: "Every Conversation Connected. ",
      highlightText: "Every Interaction More Intelligent.",
      description:
        "Bring customer conversations together and use AI to understand intent, assist with responses, automate routine workflows, and connect customers with the right human agent when needed. Create a more consistent customer experience across supported channels, with the context and tools your teams need to manage conversations efficiently.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/intelligentconversationsbanner.mp4",
    },
    platformContent: {
      eyebrow: "THE PLATFORM",
      title: "From Disconnected Chats to Intelligent Customer Engagement",
      paragraphs: [
        "Customer conversations often happen across multiple channels, leaving teams to switch between applications, search for context, and repeat the same work.",
        "Intelligent Conversations brings supported channels into a unified workspace and adds AI-assisted capabilities to help teams understand customer needs, respond efficiently, and automate appropriate next steps. AI agents can support routine interactions and configured workflows, while human agents remain available for complex requests, sensitive issues, and situations that require judgment.",
      ],
    },
    features: {
      eyebrow: "KEY FEATURES",
      title: "Everything a Modern Support Desk Needs",
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Support That Scales With Accountability",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8998 15.4016L10.6748 14.1766C10.8304 13.9627 10.9373 13.7439 10.9957 13.5203C11.054 13.2967 11.0832 13.0682 11.0832 12.8349C11.0832 12.6016 11.054 12.3731 10.9957 12.1495C10.9373 11.9259 10.8304 11.7168 10.6748 11.5224L11.8998 10.2682C12.2109 10.6377 12.4443 11.046 12.5998 11.4932C12.7554 11.9405 12.8332 12.3877 12.8332 12.8349C12.8332 13.2821 12.7554 13.7245 12.5998 14.162C12.4443 14.5995 12.2109 15.0127 11.8998 15.4016ZM14.379 17.9099L13.1248 16.6557C13.6109 16.1113 13.9755 15.5085 14.2186 14.8474C14.4616 14.1863 14.5832 13.5155 14.5832 12.8349C14.5832 12.1543 14.4616 11.4884 14.2186 10.837C13.9755 10.1856 13.6109 9.58767 13.1248 9.04323L14.379 7.78906C15.0401 8.50851 15.5311 9.30087 15.8519 10.1661C16.1728 11.0314 16.3332 11.921 16.3332 12.8349C16.3332 13.7488 16.1728 14.6432 15.8519 15.5182C15.5311 16.3932 15.0401 17.1905 14.379 17.9099ZM5.83317 14.0016C5.1915 14.0016 4.6422 13.7731 4.18525 13.3161C3.72831 12.8592 3.49984 12.3099 3.49984 11.6682C3.49984 11.0266 3.72831 10.4773 4.18525 10.0203C4.6422 9.56337 5.1915 9.3349 5.83317 9.3349C6.47484 9.3349 7.02414 9.56337 7.48109 10.0203C7.93803 10.4773 8.1665 11.0266 8.1665 11.6682C8.1665 12.3099 7.93803 12.8592 7.48109 13.3161C7.02414 13.7731 6.47484 14.0016 5.83317 14.0016ZM1.1665 18.6682V17.9974C1.1665 17.5307 1.29289 17.103 1.54567 16.7141C1.79845 16.3252 2.14845 16.0335 2.59567 15.8391C3.10123 15.6252 3.62137 15.4599 4.15609 15.3432C4.69081 15.2266 5.24984 15.1682 5.83317 15.1682C6.4165 15.1682 6.97553 15.2266 7.51025 15.3432C8.04498 15.4599 8.56511 15.6252 9.07067 15.8391C9.51789 16.0335 9.86789 16.3252 10.1207 16.7141C10.3734 17.103 10.4998 17.5307 10.4998 17.9974V18.6682H1.1665ZM22.1665 14.0016C21.5248 14.0016 20.9755 13.7731 20.5186 13.3161C20.0616 12.8592 19.8332 12.3099 19.8332 11.6682C19.8332 11.0266 20.0616 10.4773 20.5186 10.0203C20.9755 9.56337 21.5248 9.3349 22.1665 9.3349C22.8082 9.3349 23.3575 9.56337 23.8144 10.0203C24.2714 10.4773 24.4998 11.0266 24.4998 11.6682C24.4998 12.3099 24.2714 12.8592 23.8144 13.3161C23.3575 13.7731 22.8082 14.0016 22.1665 14.0016ZM17.4998 18.6682V17.9974C17.4998 17.5307 17.6262 17.103 17.879 16.7141C18.1318 16.3252 18.4818 16.0335 18.929 15.8391C19.4346 15.6252 19.9547 15.4599 20.4894 15.3432C21.0241 15.2266 21.5832 15.1682 22.1665 15.1682C22.7498 15.1682 23.3089 15.2266 23.8436 15.3432C24.3783 15.4599 24.8984 15.6252 25.404 15.8391C25.8512 16.0335 26.2012 16.3252 26.454 16.7141C26.7068 17.103 26.8332 17.5307 26.8332 17.9974V18.6682H17.4998Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce the need to switch between communication tools.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 18.6654C15.1474 18.6654 16.387 18.4661 17.7189 18.0674C19.0509 17.6688 20.8932 16.9543 23.246 15.9237C23.2849 15.7098 23.3092 15.5008 23.3189 15.2966C23.3286 15.0924 23.3335 14.8834 23.3335 14.6695C23.3335 14.4556 23.2509 14.2806 23.0856 14.1445C22.9203 14.0084 22.7307 13.9695 22.5168 14.0279C22.2446 14.1251 21.9432 14.2272 21.6127 14.3341C21.2821 14.4411 20.8641 14.6015 20.3585 14.8154C19.0168 15.3793 17.8696 15.773 16.9168 15.9966C15.9641 16.2202 14.9918 16.332 14.0002 16.332C12.9891 16.332 11.9974 16.2154 11.0252 15.982C10.0529 15.7487 8.86683 15.3501 7.46683 14.7862C6.96127 14.5723 6.57238 14.4168 6.30016 14.3195L5.4835 14.0279C5.26961 13.9501 5.08002 13.9841 4.91475 14.1299C4.74947 14.2758 4.66683 14.4556 4.66683 14.6695C4.66683 14.8834 4.67169 15.0924 4.68141 15.2966C4.69113 15.5008 4.71544 15.7098 4.75433 15.9237C6.71822 16.857 8.46336 17.5473 9.98975 17.9945C11.5161 18.4418 12.8529 18.6654 14.0002 18.6654ZM14.0002 23.332C15.8279 23.332 17.4516 22.9334 18.871 22.1362C20.2904 21.339 21.3988 20.2695 22.196 18.9279C20.4849 19.6473 18.9779 20.1723 17.6752 20.5029C16.3724 20.8334 15.1474 20.9987 14.0002 20.9987C12.8724 20.9987 11.6182 20.8286 10.2377 20.4883C8.85711 20.148 7.36961 19.6376 5.77516 18.957C6.55294 20.2987 7.65641 21.3633 9.08558 22.1508C10.5147 22.9383 12.1529 23.332 14.0002 23.332ZM10.7043 10.2945C9.79044 9.38064 9.3335 8.28203 9.3335 6.9987C9.3335 5.71536 9.79044 4.61675 10.7043 3.70286C11.6182 2.78898 12.7168 2.33203 14.0002 2.33203C15.2835 2.33203 16.3821 2.78898 17.296 3.70286C18.2099 4.61675 18.6668 5.71536 18.6668 6.9987C18.6668 8.28203 18.2099 9.38064 17.296 10.2945C16.3821 11.2084 15.2835 11.6654 14.0002 11.6654C12.7168 11.6654 11.6182 11.2084 10.7043 10.2945ZM15.6481 8.64661C16.105 8.18967 16.3335 7.64036 16.3335 6.9987C16.3335 6.35703 16.105 5.80773 15.6481 5.35078C15.1911 4.89384 14.6418 4.66536 14.0002 4.66536C13.3585 4.66536 12.8092 4.89384 12.3522 5.35078C11.8953 5.80773 11.6668 6.35703 11.6668 6.9987C11.6668 7.64036 11.8953 8.18967 12.3522 8.64661C12.8092 9.10356 13.3585 9.33203 14.0002 9.33203C14.6418 9.33203 15.1911 9.10356 15.6481 8.64661ZM14.0002 25.6654C10.5585 25.6654 7.75363 24.6445 5.58558 22.6029C3.41752 20.5612 2.3335 17.9168 2.3335 14.6695C2.3335 13.6584 2.73697 12.8515 3.54391 12.2487C4.35086 11.6459 5.23072 11.5001 6.1835 11.8112C6.49461 11.9084 6.8203 12.0202 7.16058 12.1466C7.50086 12.273 7.90433 12.4334 8.371 12.6279C9.61544 13.1334 10.646 13.4883 11.4627 13.6924C12.2793 13.8966 13.1252 13.9987 14.0002 13.9987C14.8363 13.9987 15.6627 13.9015 16.4793 13.707C17.296 13.5126 18.2974 13.1626 19.4835 12.657C20.0474 12.4431 20.4995 12.2681 20.8397 12.132C21.18 11.9959 21.5154 11.8793 21.846 11.782C22.7988 11.5098 23.6738 11.6751 24.471 12.2779C25.2682 12.8806 25.6668 13.6779 25.6668 14.6695C25.6668 16.2056 25.3654 17.6397 24.7627 18.9716C24.1599 20.3036 23.3335 21.4654 22.2835 22.457C21.2335 23.4487 19.9988 24.2313 18.5793 24.8049C17.1599 25.3786 15.6335 25.6654 14.0002 25.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve response consistency and speed.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66943 24.5V18.6667C4.66943 18.025 4.89791 17.4757 5.35485 17.0188C5.81179 16.5618 6.3611 16.3333 7.00277 16.3333H21.0028C21.6444 16.3333 22.1937 16.5618 22.6507 17.0188C23.1076 17.4757 23.3361 18.025 23.3361 18.6667V24.5H4.66943ZM10.5028 15.1667C8.88888 15.1667 7.51318 14.5979 6.37568 13.4604C5.23818 12.3229 4.66943 10.9472 4.66943 9.33333C4.66943 7.71944 5.23818 6.34375 6.37568 5.20625C7.51318 4.06875 8.88888 3.5 10.5028 3.5H17.5028C19.1167 3.5 20.4924 4.06875 21.6299 5.20625C22.7674 6.34375 23.3361 7.71944 23.3361 9.33333C23.3361 10.9472 22.7674 12.3229 21.6299 13.4604C20.4924 14.5979 19.1167 15.1667 17.5028 15.1667H10.5028ZM7.00277 22.1667H21.0028V18.6667H7.00277V22.1667ZM10.5028 12.8333H17.5028C18.475 12.8333 19.3014 12.4931 19.9819 11.8125C20.6625 11.1319 21.0028 10.3056 21.0028 9.33333C21.0028 8.36111 20.6625 7.53472 19.9819 6.85417C19.3014 6.17361 18.475 5.83333 17.5028 5.83333H10.5028C9.53055 5.83333 8.70416 6.17361 8.0236 6.85417C7.34304 7.53472 7.00277 8.36111 7.00277 9.33333C7.00277 10.3056 7.34304 11.1319 8.0236 11.8125C8.70416 12.4931 9.53055 12.8333 10.5028 12.8333ZM11.334 10.1646C11.5576 9.94097 11.6694 9.66389 11.6694 9.33333C11.6694 9.00278 11.5576 8.72569 11.334 8.50208C11.1104 8.27847 10.8333 8.16667 10.5028 8.16667C10.1722 8.16667 9.89513 8.27847 9.67152 8.50208C9.44791 8.72569 9.3361 9.00278 9.3361 9.33333C9.3361 9.66389 9.44791 9.94097 9.67152 10.1646C9.89513 10.3882 10.1722 10.5 10.5028 10.5C10.8333 10.5 11.1104 10.3882 11.334 10.1646ZM18.334 10.1646C18.5576 9.94097 18.6694 9.66389 18.6694 9.33333C18.6694 9.00278 18.5576 8.72569 18.334 8.50208C18.1104 8.27847 17.8333 8.16667 17.5028 8.16667C17.1722 8.16667 16.8951 8.27847 16.6715 8.50208C16.4479 8.72569 16.3361 9.00278 16.3361 9.33333C16.3361 9.66389 16.4479 9.94097 16.6715 10.1646C16.8951 10.3882 17.1722 10.5 17.5028 10.5C17.8333 10.5 18.1104 10.3882 18.334 10.1646Z"
                fill="white"
              />
            </svg>
          ),
          title: "Automate eligible repetitive interactions.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00016 18.668H15.1668V15.168H7.00016V18.668ZM17.5002 18.668H21.0002V9.33464H17.5002V18.668ZM7.00016 12.8346H15.1668V9.33464H7.00016V12.8346ZM4.66683 23.3346C4.02516 23.3346 3.47586 23.1062 3.01891 22.6492C2.56197 22.1923 2.3335 21.643 2.3335 21.0013V7.0013C2.3335 6.35964 2.56197 5.81033 3.01891 5.35339C3.47586 4.89644 4.02516 4.66797 4.66683 4.66797H23.3335C23.9752 4.66797 24.5245 4.89644 24.9814 5.35339C25.4384 5.81033 25.6668 6.35964 25.6668 7.0013V21.0013C25.6668 21.643 25.4384 22.1923 24.9814 22.6492C24.5245 23.1062 23.9752 23.3346 23.3335 23.3346H4.66683ZM4.66683 21.0013H23.3335V7.0013H4.66683V21.0013Z"
                fill="white"
              />
            </svg>
          ),
          title: "Provide better context during human handovers.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6665 23.3346V15.168H23.3332V23.3346H18.6665ZM11.6665 23.3346V4.66797H16.3332V23.3346H11.6665ZM4.6665 23.3346V10.5013H9.33317V23.3346H4.6665Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve visibility into conversation performance.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 26.832L10.5 23.332H5.83333C5.19167 23.332 4.64236 23.1036 4.18542 22.6466C3.72847 22.1897 3.5 21.6404 3.5 20.9987V4.66536C3.5 4.0237 3.72847 3.47439 4.18542 3.01745C4.64236 2.5605 5.19167 2.33203 5.83333 2.33203H22.1667C22.8083 2.33203 23.3576 2.5605 23.8146 3.01745C24.2715 3.47439 24.5 4.0237 24.5 4.66536V20.9987C24.5 21.6404 24.2715 22.1897 23.8146 22.6466C23.3576 23.1036 22.8083 23.332 22.1667 23.332H17.5L14 26.832ZM5.83333 19.657C6.88333 18.6265 8.10347 17.8147 9.49375 17.2216C10.884 16.6286 12.3861 16.332 14 16.332C15.6139 16.332 17.116 16.6286 18.5063 17.2216C19.8965 17.8147 21.1167 18.6265 22.1667 19.657V4.66536H5.83333V19.657ZM16.8875 12.8029C17.6847 12.0056 18.0833 11.0431 18.0833 9.91536C18.0833 8.78759 17.6847 7.82509 16.8875 7.02786C16.0903 6.23064 15.1278 5.83203 14 5.83203C12.8722 5.83203 11.9097 6.23064 11.1125 7.02786C10.3153 7.82509 9.91667 8.78759 9.91667 9.91536C9.91667 11.0431 10.3153 12.0056 11.1125 12.8029C11.9097 13.6001 12.8722 13.9987 14 13.9987C15.1278 13.9987 16.0903 13.6001 16.8875 12.8029ZM8.16667 20.9987H19.8333V20.707C19.0167 20.0265 18.1125 19.5161 17.1208 19.1758C16.1292 18.8355 15.0889 18.6654 14 18.6654C12.9111 18.6654 11.8708 18.8355 10.8792 19.1758C9.8875 19.5161 8.98333 20.0265 8.16667 20.707V20.9987ZM12.7604 11.1549C12.4201 10.8147 12.25 10.4015 12.25 9.91536C12.25 9.42925 12.4201 9.01606 12.7604 8.67578C13.1007 8.3355 13.5139 8.16536 14 8.16536C14.4861 8.16536 14.8993 8.3355 15.2396 8.67578C15.5799 9.01606 15.75 9.42925 15.75 9.91536C15.75 10.4015 15.5799 10.8147 15.2396 11.1549C14.8993 11.4952 14.4861 11.6654 14 11.6654C13.5139 11.6654 13.1007 11.4952 12.7604 11.1549Z"
                fill="white"
              />
            </svg>
          ),
          title: "Create a connected experience across customer touchpoints.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Built for Teams That Live in the Queue",
      description:
        "Customer support teams, IT helpdesks, telecom providers, e-commerce businesses, financial services, SaaS companies, and enterprises managing high volumes of customer requests.",
      tabs: [
        "🎧 Customer Support",
        "📈 Sales Engagement",
        "🎯 Lead Management",
        "📦 Order and Service Updates",
        "🔔 Notifications and Alerts",
        "🤝 Internal Assistance",
      ],
      ctaTitle: "Make Every Customer Conversation Count",
      ctaDesc:
        "Connect your channels, empower your agents, and automate the right interactions with intelligent customer engagement.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 11. AI-POWERED LEAD MANAGEMENT SYSTEM (Agentic AI)
  // ==========================================
  "ai-powered-lead-management-system": {
    metadata: {
      title: "AI-Powered Lead Management System — Tubelight Communications",
      description:
        "Turn incoming inquiries into qualified sales opportunities with an intelligent Lead Management System. Capture leads, automate follow-ups, and prioritize high-intent prospects.",
    },
    banner: {
      title: "Capture Every Lead. Automate Every Follow-Up. ",
      highlightText: "Convert More Opportunities.",
      description:
        "Turn incoming inquiries into qualified sales opportunities with an intelligent Lead Management System. Capture leads from multiple sources, automate follow-ups, prioritize high-intent prospects, and help your sales team move every opportunity toward conversion.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/aileadmanagement.mp4",
    },
    platformContent: {
      eyebrow: "THE PLATFORM",
      title: "Turn Lead Generation into Lead Conversion",
      paragraphs: [
        "Generating leads is only the first step. Delayed responses, missed follow-ups, scattered customer information, and inconsistent sales processes can cause valuable opportunities to slip away. 1inBox Lead Management System helps businesses organize the complete lead lifecycle—from lead capture and qualification to assignment, engagement, follow-up, and conversion.",
        "With AI-assisted insights and workflow automation, your team can focus on the right prospects, respond faster, and manage every opportunity with greater visibility.",
      ],
    },
    features: {
      eyebrow: "KEY FEATURES",
      title: "Everything a Modern Support Desk Needs",
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Support That Scales With Accountability",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM11.6667 22.1667V15.1667H5.83333V22.1667H11.6667ZM14 22.1667H22.1667V15.1667H14V22.1667ZM5.83333 12.8333H22.1667V5.83333H5.83333V12.8333Z"
                fill="white"
              />
            </svg>
          ),
          title:
            "Reduce delays between lead generation and the first sales interaction.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.58335 9.33203H8.75002V8.16536C8.75002 7.83481 8.63821 7.55773 8.4146 7.33411C8.19099 7.1105 7.91391 6.9987 7.58335 6.9987C7.25279 6.9987 6.97571 7.1105 6.7521 7.33411C6.52849 7.55773 6.41668 7.83481 6.41668 8.16536C6.41668 8.49592 6.52849 8.773 6.7521 8.99661C6.97571 9.22023 7.25279 9.33203 7.58335 9.33203ZM12.8334 9.33203C13.1639 9.33203 13.441 9.22023 13.6646 8.99661C13.8882 8.773 14 8.49592 14 8.16536C14 7.83481 13.8882 7.55773 13.6646 7.33411C13.441 7.1105 13.1639 6.9987 12.8334 6.9987C12.5028 6.9987 12.2257 7.1105 12.0021 7.33411C11.7785 7.55773 11.6667 7.83481 11.6667 8.16536V9.33203H12.8334ZM12.2208 25.6654C11.6764 25.6654 11.166 25.5487 10.6896 25.3154C10.2132 25.082 9.80974 24.7515 9.47918 24.3237L3.12085 16.2445L3.67502 15.6612C4.06391 15.2529 4.53057 15.0098 5.07502 14.932C5.61946 14.8543 6.12502 14.9612 6.59168 15.2529L8.75002 16.5654V11.6654H7.58335C6.61113 11.6654 5.78474 11.3251 5.10418 10.6445C4.42363 9.96398 4.08335 9.13759 4.08335 8.16536C4.08335 7.19314 4.42363 6.36675 5.10418 5.6862C5.78474 5.00564 6.61113 4.66536 7.58335 4.66536C7.79724 4.66536 7.99654 4.68481 8.18127 4.7237C8.36599 4.76259 8.55557 4.8112 8.75002 4.86953V3.4987C8.75002 3.16814 8.86182 2.89106 9.08543 2.66745C9.30904 2.44384 9.58613 2.33203 9.91668 2.33203C10.2472 2.33203 10.5292 2.44384 10.7625 2.66745C10.9959 2.89106 11.1125 3.16814 11.1125 3.4987V5.13203C11.3847 4.97648 11.6618 4.85981 11.9438 4.78203C12.2257 4.70425 12.5222 4.66536 12.8334 4.66536C13.8056 4.66536 14.632 5.00564 15.3125 5.6862C15.9931 6.36675 16.3334 7.19314 16.3334 8.16536C16.3334 9.13759 15.9931 9.96398 15.3125 10.6445C14.632 11.3251 13.8056 11.6654 12.8334 11.6654H11.1125V20.7654L8.28335 19.0154L11.3167 22.8945C11.4334 23.0306 11.5695 23.1376 11.725 23.2154C11.8806 23.2931 12.0458 23.332 12.2208 23.332H18.6667C19.3084 23.332 19.8577 23.1036 20.3146 22.6466C20.7715 22.1897 21 21.6404 21 20.9987V16.332C21 16.0015 20.8882 15.7244 20.6646 15.5008C20.441 15.2772 20.1639 15.1654 19.8334 15.1654H13.4459V12.832H19.8334C20.8056 12.832 21.632 13.1723 22.3125 13.8529C22.9931 14.5334 23.3334 15.3598 23.3334 16.332V20.9987C23.3334 22.282 22.8764 23.3806 21.9625 24.2945C21.0486 25.2084 19.95 25.6654 18.6667 25.6654H12.2208Z"
                fill="white"
              />
            </svg>
          ),
          title: "Keep follow-ups, reminders, and pending actions visible.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2431 12.8914L11.2847 7.93307L12.9472 6.29974L16.2431 9.59557L22.8639 3.00391L24.4972 4.63724L16.2431 12.8914ZM9.33057 21.5831L17.4389 23.7997L24.3806 21.6414C24.2833 21.4664 24.1424 21.3157 23.9576 21.1893C23.7729 21.0629 23.5639 20.9997 23.3306 20.9997H17.4389C16.9139 20.9997 16.4958 20.9803 16.1847 20.9414C15.8736 20.9025 15.5528 20.8247 15.2222 20.7081L12.5097 19.8039L13.1514 17.5289L15.5139 18.3164C15.8445 18.4136 16.2333 18.4914 16.6806 18.5497C17.1278 18.6081 17.7889 18.647 18.6639 18.6664C18.6639 18.4525 18.6007 18.2484 18.4743 18.0539C18.3479 17.8595 18.1972 17.7331 18.0222 17.6747L11.1972 15.1664H9.33057V21.5831ZM2.33057 25.6664V12.8331H11.1972C11.3333 12.8331 11.4695 12.8477 11.6056 12.8768C11.7417 12.906 11.8681 12.94 11.9847 12.9789L18.8389 15.5164C19.4806 15.7497 20.0007 16.1581 20.3993 16.7414C20.7979 17.3247 20.9972 17.9664 20.9972 18.6664H23.3306C24.3028 18.6664 25.1292 18.9872 25.8097 19.6289C26.4903 20.2706 26.8306 21.1164 26.8306 22.1664V23.3331L17.4972 26.2497L9.33057 23.9747V25.6664H2.33057ZM4.6639 23.3331H6.99723V15.1664H4.6639V23.3331Z"
                fill="white"
              />
            </svg>
          ),
          title:
            "Focus sales effort on prospects with stronger qualification signals.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.3361 13.9987V11.6654H18.6694V13.9987H9.3361ZM9.3361 9.33203V6.9987H18.6694V9.33203H9.3361ZM7.00277 16.332H15.7528C16.3167 16.332 16.8417 16.4536 17.3278 16.6966C17.8139 16.9397 18.2222 17.2848 18.5528 17.732L21.0028 20.9404V4.66536H7.00277V16.332ZM7.00277 23.332H19.8944L16.7153 19.1612C16.5986 19.0056 16.4576 18.8841 16.2924 18.7966C16.1271 18.7091 15.9472 18.6654 15.7528 18.6654H7.00277V23.332ZM21.0028 25.6654H7.00277C6.3611 25.6654 5.81179 25.4369 5.35485 24.9799C4.89791 24.523 4.66943 23.9737 4.66943 23.332V4.66536C4.66943 4.0237 4.89791 3.47439 5.35485 3.01745C5.81179 2.5605 6.3611 2.33203 7.00277 2.33203H21.0028C21.6444 2.33203 22.1937 2.5605 22.6507 3.01745C23.1076 3.47439 23.3361 4.0237 23.3361 4.66536V23.332C23.3361 23.9737 23.1076 24.523 22.6507 24.9799C22.1937 25.4369 21.6444 25.6654 21.0028 25.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Standardize lead assignment and pipeline stages.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 19.8333H16.3333V17.5H11.6667V19.8333ZM11.6667 15.1667H19.8333V12.8333H11.6667V15.1667ZM8.16667 10.5H19.8333V8.16667H8.16667V10.5ZM2.33333 25.6667V23.3333H5.30833C4.375 22.8861 3.62153 22.225 3.04792 21.35C2.47431 20.475 2.1875 19.4833 2.1875 18.375C2.1875 16.8389 2.72708 15.5312 3.80625 14.4521C4.88542 13.3729 6.19306 12.8333 7.72917 12.8333V15.1667C6.85417 15.1667 6.10069 15.4778 5.46875 16.1C4.83681 16.7222 4.52083 17.4806 4.52083 18.375C4.52083 19.1333 4.75417 19.8042 5.22083 20.3875C5.6875 20.9708 6.28056 21.3403 7 21.4958V18.6667H9.33333V25.6667H2.33333ZM11.6667 24.5V22.1667H22.1667V5.83333H5.83333V10.5H3.5V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H11.6667Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce manual data entry and repetitive follow-up work.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 16.3346V11.0846H5.25V16.3346H1.75ZM8.75 16.3346V9.33464H12.25V16.3346H8.75ZM15.75 16.3346V7.0013H19.25V16.3346H15.75ZM22.75 16.3346V4.66797H26.25V16.3346H22.75ZM1.75 23.3346V18.668H5.25V23.3346H1.75ZM8.75 23.3346V18.668H12.25V23.3346H8.75ZM15.75 23.3346V18.668H19.25V23.3346H15.75ZM22.75 23.3346V18.668H26.25V23.3346H22.75Z"
                fill="white"
              />
            </svg>
          ),
          title:
            "Understand where leads originate, how they progress, and where opportunities are being lost.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Built for Teams That Live in the Queue",
      description:
        "Customer support teams, IT helpdesks, telecom providers, e-commerce businesses, financial services, SaaS companies, and enterprises managing high volumes of customer requests.",
      tabs: [
        "🎯 Lead Generation and Qualification",
        "💼 Inside Sales",
        "🏡 Real Estate",
        "🎓 Education",
        "💳 Financial Services",
        "🏢 B2B Sales",
        "📊 Campaign-to-Conversion Tracking",
        "🔗 Connected Sales Workflow",
      ],
      ctaTitle: "Stop Losing Leads to Missed Follow-Ups",
      ctaDesc:
        "Bring lead capture, qualification, communication, and sales tracking into one connected workflow. Help your team respond faster, prioritize better, and convert more opportunities.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 12. CONVERSATIONAL AI (Agentic AI)
  // ==========================================
  "conversational-ai": {
    metadata: {
      title: "Conversational AI — Tubelight Communications",
      description:
        "Enable customer interactions that understand intent, maintain context, and support meaningful conversations across voice and digital channels.",
    },
    banner: {
      title: (
        <>
          Move Beyond Scripts. Create More Natural{" "}
          <span>Customer Interactions.</span>
        </>
      ),
      description:
        "Enable customer interactions that understand intent, maintain context, and support meaningful conversations across voice and digital channels. Conversational AI helps businesses deliver relevant responses and connect conversations with approved business workflows.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/conversationalaibanner.mp4",
    },
    features: {
      title: "Understand the Conversation. Support the Next Action.",
      description: (
        <>
          Traditional automated systems often rely on rigid menus and predefined
          responses. Conversational AI uses technologies such as natural
          language processing, speech recognition, and language models to
          interpret customer requests and generate context-aware responses.
          <br />
          <br />
          The exact capabilities depend on the models, knowledge sources,
          integrations, and safeguards configured for your deployment.
        </>
      ),
      cards: [
        {
          icon: "01",
          title: "Intent Recognition",
          detail:
            "Identify what the customer wants from the context of a request.",
        },
        {
          icon: "02",
          title: "Context-Aware Responses",
          detail:
            "Use available conversation context to deliver relevant replies.",
        },
        {
          icon: "03",
          title: "Voice and Digital Experiences",
          detail:
            "Support natural voice interactions and digital text conversations.",
        },
        {
          icon: "04",
          title: "Knowledge-Based Answers",
          detail: "Generate responses using approved information sources.",
        },
        {
          icon: "05",
          title: "Workflow Integration",
          detail:
            "Connect conversations to permitted actions with business systems.",
        },
        {
          icon: "06",
          title: "Agent Assistance",
          detail:
            "Summarize interactions and suggest next steps for human agents.",
        },
        {
          icon: "07",
          title: "Human Escalation",
          detail: "Route conversations to human teams when appropriate.",
        },
        {
          icon: "08",
          title: "Conversation Insights",
          detail:
            "Analyze conversation trends to identify recurring issues and improvement opportunities.",
        },
      ],
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Why Teams Choose Conversational AI",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66667 24.5V19.5417L20.0375 4.2C20.2708 3.96667 20.5333 3.79167 20.825 3.675C21.1167 3.55833 21.4083 3.5 21.7 3.5C22.0111 3.5 22.3076 3.55833 22.5896 3.675C22.8715 3.79167 23.1194 3.96667 23.3333 4.2L24.9667 5.83333C25.2 6.04722 25.375 6.29514 25.4917 6.57708C25.6083 6.85903 25.6667 7.15556 25.6667 7.46667C25.6667 7.75833 25.6083 8.05 25.4917 8.34167C25.375 8.63333 25.2 8.89583 24.9667 9.12917L9.625 24.5H4.66667ZM7 22.1667H8.63333L20.0958 10.7333L19.2792 9.8875L18.4333 9.07083L7 20.5333V22.1667ZM19.2792 9.8875L18.4333 9.07083L20.0958 10.7333L19.2792 9.8875ZM16.3333 24.5C17.7722 24.5 19.1042 24.1403 20.3292 23.4208C21.5542 22.7014 22.1667 21.7 22.1667 20.4167C22.1667 19.7167 21.9819 19.1139 21.6125 18.6083C21.2431 18.1028 20.7472 17.6653 20.125 17.2958L18.4042 19.0167C18.8514 19.2111 19.2014 19.425 19.4542 19.6583C19.7069 19.8917 19.8333 20.1444 19.8333 20.4167C19.8333 20.8639 19.4785 21.2674 18.7687 21.6271C18.059 21.9868 17.2472 22.1667 16.3333 22.1667C16.0028 22.1667 15.7257 22.2785 15.5021 22.5021C15.2785 22.7257 15.1667 23.0028 15.1667 23.3333C15.1667 23.6639 15.2785 23.941 15.5021 24.1646C15.7257 24.3882 16.0028 24.5 16.3333 24.5ZM5.3375 15.575L7.0875 13.825C6.69861 13.6694 6.39236 13.509 6.16875 13.3438C5.94514 13.1785 5.83333 13.0083 5.83333 12.8333C5.83333 12.6 6.00833 12.3667 6.35833 12.1333C6.70833 11.9 7.44722 11.5403 8.575 11.0542C10.2861 10.3153 11.4236 9.64444 11.9875 9.04167C12.5514 8.43889 12.8333 7.75833 12.8333 7C12.8333 5.93056 12.4056 5.07986 11.55 4.44792C10.6944 3.81597 9.56667 3.5 8.16667 3.5C7.29167 3.5 6.50903 3.65556 5.81875 3.96667C5.12847 4.27778 4.59861 4.65694 4.22917 5.10417C4.01528 5.35694 3.92778 5.63889 3.96667 5.95C4.00556 6.26111 4.15139 6.51389 4.40417 6.70833C4.65694 6.92222 4.93889 7.00972 5.25 6.97083C5.56111 6.93194 5.82361 6.80556 6.0375 6.59167C6.30972 6.31944 6.61111 6.125 6.94167 6.00833C7.27222 5.89167 7.68056 5.83333 8.16667 5.83333C8.96389 5.83333 9.55208 5.95 9.93125 6.18333C10.3104 6.41667 10.5 6.68889 10.5 7C10.5 7.27222 10.3299 7.52014 9.98958 7.74375C9.64931 7.96736 8.86667 8.36111 7.64167 8.925C6.08611 9.60556 5.00694 10.2229 4.40417 10.7771C3.80139 11.3313 3.5 12.0167 3.5 12.8333C3.5 13.4556 3.66528 13.9854 3.99583 14.4229C4.32639 14.8604 4.77361 15.2444 5.3375 15.575Z"
                fill="white"
              />
            </svg>
          ),
          title: "Create more natural automated interactions.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 25.6654V23.332H24.5V25.6654H3.5ZM3.5 18.6654V16.332H24.5V18.6654H3.5ZM3.5 11.6654V9.33203H24.5V11.6654H3.5ZM3.5 4.66536V2.33203H24.5V4.66536H3.5Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce reliance on rigid scripts.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9459 16.6966C17.8209 16.1619 18.5112 15.457 19.0167 14.582C18.3362 14.0181 17.5681 13.5855 16.7126 13.2841C15.857 12.9827 14.9529 12.832 14.0001 12.832C13.0473 12.832 12.1431 12.9827 11.2876 13.2841C10.432 13.5855 9.66397 14.0181 8.98341 14.582C9.48897 15.457 10.1792 16.1619 11.0542 16.6966C11.9292 17.2313 12.9112 17.4987 14.0001 17.4987C15.089 17.4987 16.0709 17.2313 16.9459 16.6966ZM14.0001 11.6654C14.6417 11.6654 15.1911 11.4369 15.648 10.9799C16.1049 10.523 16.3334 9.9737 16.3334 9.33203C16.3334 8.69036 16.1049 8.14106 15.648 7.68411C15.1911 7.22717 14.6417 6.9987 14.0001 6.9987C13.3584 6.9987 12.8091 7.22717 12.3522 7.68411C11.8952 8.14106 11.6667 8.69036 11.6667 9.33203C11.6667 9.9737 11.8952 10.523 12.3522 10.9799C12.8091 11.4369 13.3584 11.6654 14.0001 11.6654ZM14.0001 22.5737C16.3723 20.3959 18.132 18.4174 19.2792 16.6383C20.4265 14.8591 21.0001 13.2793 21.0001 11.8987C21.0001 9.77925 20.3244 8.04384 18.973 6.69245C17.6216 5.34106 15.964 4.66536 14.0001 4.66536C12.0362 4.66536 10.3786 5.34106 9.02716 6.69245C7.67578 8.04384 7.00008 9.77925 7.00008 11.8987C7.00008 13.2793 7.57369 14.8591 8.72091 16.6383C9.86814 18.4174 11.6279 20.3959 14.0001 22.5737ZM14.0001 25.6654C10.8695 23.0015 8.53133 20.5272 6.9855 18.2424C5.43966 15.9577 4.66675 13.8431 4.66675 11.8987C4.66675 8.98203 5.60494 6.65842 7.48133 4.92786C9.35772 3.19731 11.5306 2.33203 14.0001 2.33203C16.4695 2.33203 18.6424 3.19731 20.5188 4.92786C22.3952 6.65842 23.3334 8.98203 23.3334 11.8987C23.3334 13.8431 22.5605 15.9577 21.0147 18.2424C19.4688 20.5272 17.1306 23.0015 14.0001 25.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve consistency across customer touchpoints.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33057 25.6682V23.3349C3.22501 23.3349 4.10973 23.2766 4.98473 23.1599C5.85973 23.0432 6.71529 22.8293 7.5514 22.5182C6.65696 22.071 5.95209 21.4245 5.43682 20.5786C4.92154 19.7328 4.6639 18.8141 4.6639 17.8224V15.1682H9.33057V11.6682H13.2681L9.44723 4.02656L11.5472 2.97656L15.3681 10.6182C15.757 11.396 15.7278 12.1543 15.2806 12.8932C14.8333 13.6321 14.1722 14.0016 13.2972 14.0016H11.6639V15.1682C11.6639 15.8099 11.4354 16.3592 10.9785 16.8161C10.5215 17.2731 9.97223 17.5016 9.33057 17.5016H6.99723V17.8224C6.99723 18.503 7.20626 19.1009 7.62432 19.6161C8.04237 20.1314 8.57223 20.4766 9.2139 20.6516L9.5639 20.7391C10.3417 20.9335 10.7792 21.4196 10.8764 22.1974C10.9736 22.9752 10.6722 23.5585 9.97223 23.9474C8.80557 24.5891 7.57571 25.0363 6.28265 25.2891C4.98959 25.5418 3.67223 25.6682 2.33057 25.6682ZM19.0139 22.3432L17.3514 20.7099C17.7597 20.3016 18.0806 19.83 18.3139 19.2953C18.5472 18.7606 18.6639 18.1821 18.6639 17.5599C18.6639 16.9377 18.5472 16.3592 18.3139 15.8245C18.0806 15.2898 17.7597 14.8182 17.3514 14.4099L19.0139 12.7474C19.6361 13.3696 20.1222 14.0939 20.4722 14.9203C20.8222 15.7467 20.9972 16.6266 20.9972 17.5599C20.9972 18.4932 20.8222 19.3682 20.4722 20.1849C20.1222 21.0016 19.6361 21.721 19.0139 22.3432ZM22.3097 25.6682L20.6472 24.0057C21.4833 23.1696 22.1396 22.2023 22.616 21.1036C23.0924 20.005 23.3306 18.8238 23.3306 17.5599C23.3306 16.2766 23.0924 15.0905 22.616 14.0016C22.1396 12.9127 21.4833 11.9502 20.6472 11.1141L22.3097 9.45156C23.3597 10.5016 24.1813 11.7168 24.7743 13.0974C25.3674 14.478 25.6639 15.9655 25.6639 17.5599C25.6639 19.1349 25.3674 20.6175 24.7743 22.0078C24.1813 23.3981 23.3597 24.6182 22.3097 25.6682Z"
                fill="white"
              />
            </svg>
          ),
          title: "Connect conversations with business processes.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1116_2192)">
                <path
                  d="M23.9167 19.2513C23.4306 19.2513 23.0174 19.0812 22.6772 18.7409C22.3369 18.4006 22.1667 17.9874 22.1667 17.5013V14.5846C22.1667 14.0985 22.3369 13.6853 22.6772 13.3451C23.0174 13.0048 23.4306 12.8346 23.9167 12.8346C24.4029 12.8346 24.8161 13.0048 25.1563 13.3451C25.4966 13.6853 25.6667 14.0985 25.6667 14.5846V17.5013C25.6667 17.9874 25.4966 18.4006 25.1563 18.7409C24.8161 19.0812 24.4029 19.2513 23.9167 19.2513ZM23.3334 23.3346V21.5263C22.3417 21.3707 21.5105 20.9187 20.8397 20.1701C20.1688 19.4214 19.8334 18.5319 19.8334 17.5013H21.0001C21.0001 18.318 21.282 19.0082 21.8459 19.5721C22.4098 20.136 23.1001 20.418 23.9167 20.418C24.7334 20.418 25.4237 20.136 25.9876 19.5721C26.5515 19.0082 26.8334 18.318 26.8334 17.5013H28.0001C28.0001 18.5319 27.6647 19.4214 26.9938 20.1701C26.323 20.9187 25.4917 21.3707 24.5001 21.5263V23.3346H23.3334ZM10.5001 14.0013C9.21675 14.0013 8.11814 13.5444 7.20425 12.6305C6.29036 11.7166 5.83341 10.618 5.83341 9.33464C5.83341 8.0513 6.29036 6.95269 7.20425 6.0388C8.11814 5.12491 9.21675 4.66797 10.5001 4.66797C10.7723 4.66797 11.0397 4.68741 11.3022 4.7263C11.5647 4.76519 11.8223 4.83325 12.0751 4.93047C11.5695 5.53325 11.1806 6.20894 10.9084 6.95755C10.6362 7.70616 10.5001 8.49852 10.5001 9.33464C10.5001 10.1707 10.6362 10.9631 10.9084 11.7117C11.1806 12.4603 11.5695 13.136 12.0751 13.7388C11.8223 13.836 11.5647 13.9041 11.3022 13.943C11.0397 13.9819 10.7723 14.0013 10.5001 14.0013ZM1.16675 23.3346V20.0971C1.16675 19.436 1.33203 18.8235 1.66258 18.2596C1.99314 17.6957 2.45008 17.268 3.03341 16.9763C3.7723 16.5874 4.57439 16.252 5.43966 15.9701C6.30494 15.6881 7.25286 15.4694 8.28341 15.3138C7.50564 15.8582 6.90286 16.5485 6.47508 17.3846C6.0473 18.2207 5.83341 19.1249 5.83341 20.0971V23.3346H1.16675ZM14.2042 12.6305C13.2904 11.7166 12.8334 10.618 12.8334 9.33464C12.8334 8.0513 13.2904 6.95269 14.2042 6.0388C15.1181 5.12491 16.2167 4.66797 17.5001 4.66797C18.7834 4.66797 19.882 5.12491 20.7959 6.0388C21.7098 6.95269 22.1667 8.0513 22.1667 9.33464C22.1667 10.618 21.7098 11.7166 20.7959 12.6305C19.882 13.5444 18.7834 14.0013 17.5001 14.0013C16.2167 14.0013 15.1181 13.5444 14.2042 12.6305ZM17.5001 11.668C18.1417 11.668 18.6911 11.4395 19.148 10.9826C19.6049 10.5256 19.8334 9.9763 19.8334 9.33464C19.8334 8.69297 19.6049 8.14366 19.148 7.68672C18.6911 7.22977 18.1417 7.0013 17.5001 7.0013C16.8584 7.0013 16.3091 7.22977 15.8522 7.68672C15.3952 8.14366 15.1667 8.69297 15.1667 9.33464C15.1667 9.9763 15.3952 10.5256 15.8522 10.9826C16.3091 11.4395 16.8584 11.668 17.5001 11.668ZM8.16675 23.3346V20.0971C8.16675 19.436 8.33203 18.8235 8.66258 18.2596C8.99314 17.6957 9.45008 17.268 10.0334 16.9763C11.0251 16.4707 12.148 16.043 13.4022 15.693C14.6563 15.343 16.0223 15.168 17.5001 15.168C17.7334 15.168 17.9619 15.1728 18.1855 15.1826C18.4091 15.1923 18.6279 15.2069 18.8417 15.2263C18.6473 15.5763 18.4869 15.9409 18.3605 16.3201C18.2341 16.6992 18.1515 17.093 18.1126 17.5013H17.5001C16.1001 17.5013 14.8605 17.6763 13.7813 18.0263C12.7022 18.3763 11.8126 18.7263 11.1126 19.0763C10.9181 19.1735 10.7674 19.3145 10.6605 19.4992C10.5536 19.6839 10.5001 19.8832 10.5001 20.0971V21.0013H18.8709C19.1626 21.5069 19.5223 21.9541 19.9501 22.343C20.3779 22.7319 20.8542 23.0624 21.3792 23.3346H8.16675Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1116_2192">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          title: "Support scalable customer engagement.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Conversational AI That Understands Your Customers",
      description:
        "Automate customer service, guide sales conversations and enable self-service support with AI that understands context and intent.",
      tabs: [
        "🎧 Customer Service",
        "💬 Sales Conversations",
        "🤖 Virtual Agents",
        "🏢 Contact Centers",
        "🛠️ Self-Service Support",
        "💡 Internal Knowledge Assistance",
      ],
      ctaTitle: "Build More Intelligent Conversations",
      ctaDesc:
        "Built for contact centers, customer service teams and sales desks, with AI that handles queries and gives employees instant access to company knowledge.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 13. AI SENTIMENT ANALYSIS (Agentic AI)
  // ==========================================
  "ai-sentiment-analysis": {
    metadata: {
      title: "AI Sentiment Analysis — Tubelight Communications",
      description:
        "Gain deeper insight into customer interactions with AI-assisted sentiment analysis. Identify positive, neutral, or negative communication signals and help teams recognize conversations that may need additional attention.",
    },
    banner: {
      title: (
        <>
          Understand Customer Emotions. <span>Improve Every Interaction.</span>
        </>
      ),
      description:
        "Gain deeper insight into customer interactions with AI-assisted sentiment analysis. Identify positive, neutral, or negative communication signals and help teams recognize conversations that may need additional attention.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/aisentimentbanner.mp4",
    },
    features: {
      title: "Look Beyond the Words",
      description: (
        <>
          Customer messages and conversations can reveal signs of satisfaction,
          frustration, urgency, or dissatisfaction. Sentiment analysis helps
          businesses organize these signals and use them for support triage,
          agent coaching, service improvements, and customer experience
          monitoring.
          <br />
          <br />
          Sentiment predictions are indications, not definitive judgments of a
          customer's emotional state.
        </>
      ),
      cards: [
        {
          icon: "01",
          title: "Sentiment Classification",
          detail:
            "Classify conversation interactions into positive, neutral, or negative categories.",
        },
        {
          icon: "02",
          title: "Conversation Monitoring",
          detail: "Analyze customer messages and call transcripts.",
        },
        {
          icon: "03",
          title: "Negative Sentiment Alerts",
          detail:
            "Flag potentially dissatisfied interactions based on configured thresholds.",
        },
        {
          icon: "04",
          title: "Trend Analysis",
          detail:
            "Monitor changes in sentiment across teams, channels, or time periods.",
        },
        {
          icon: "05",
          title: "Agent Coaching Insights",
          detail:
            "Support quality reviews and coaching using relevant conversation evidence.",
        },
        {
          icon: "06",
          title: "Customer Experience Reporting",
          detail:
            "Connect sentiment trends with ticket outcomes and service metrics where data is available.",
        },
        {
          icon: "07",
          title: "Interaction Summaries",
          detail:
            "Combine sentiment signals with conversation summaries where supported.",
        },
      ],
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Why Teams Choose AI Sentiment Analysis",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 26.832L10.5 23.332H5.83333C5.19167 23.332 4.64236 23.1036 4.18542 22.6466C3.72847 22.1897 3.5 21.6404 3.5 20.9987V4.66536C3.5 4.0237 3.72847 3.47439 4.18542 3.01745C4.64236 2.5605 5.19167 2.33203 5.83333 2.33203H22.1667C22.8083 2.33203 23.3576 2.5605 23.8146 3.01745C24.2715 3.47439 24.5 4.0237 24.5 4.66536V20.9987C24.5 21.6404 24.2715 22.1897 23.8146 22.6466C23.3576 23.1036 22.8083 23.332 22.1667 23.332H17.5L14 26.832ZM5.83333 19.657C6.88333 18.6265 8.10347 17.8147 9.49375 17.2216C10.884 16.6286 12.3861 16.332 14 16.332C15.6139 16.332 17.116 16.6286 18.5063 17.2216C19.8965 17.8147 21.1167 18.6265 22.1667 19.657V4.66536H5.83333V19.657ZM16.8875 12.8029C17.6847 12.0056 18.0833 11.0431 18.0833 9.91536C18.0833 8.78759 17.6847 7.82509 16.8875 7.02786C16.0903 6.23064 15.1278 5.83203 14 5.83203C12.8722 5.83203 11.9097 6.23064 11.1125 7.02786C10.3153 7.82509 9.91667 8.78759 9.91667 9.91536C9.91667 11.0431 10.3153 12.0056 11.1125 12.8029C11.9097 13.6001 12.8722 13.9987 14 13.9987C15.1278 13.9987 16.0903 13.6001 16.8875 12.8029ZM8.16667 20.9987H19.8333V20.707C19.0167 20.0265 18.1125 19.5161 17.1208 19.1758C16.1292 18.8355 15.0889 18.6654 14 18.6654C12.9111 18.6654 11.8708 18.8355 10.8792 19.1758C9.8875 19.5161 8.98333 20.0265 8.16667 20.707V20.9987ZM12.7604 11.1549C12.4201 10.8147 12.25 10.4015 12.25 9.91536C12.25 9.42925 12.4201 9.01606 12.7604 8.67578C13.1007 8.3355 13.5139 8.16536 14 8.16536C14.4861 8.16536 14.8993 8.3355 15.2396 8.67578C15.5799 9.01606 15.75 9.42925 15.75 9.91536C15.75 10.4015 15.5799 10.8147 15.2396 11.1549C14.8993 11.4952 14.4861 11.6654 14 11.6654C13.5139 11.6654 13.1007 11.4952 12.7604 11.1549Z"
                fill="white"
              />
            </svg>
          ),
          title: "Identify potentially unhappy customers earlier.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5019 12.4979C22.2783 12.2743 22.1665 11.9972 22.1665 11.6667C22.1665 11.3361 22.2783 11.059 22.5019 10.8354C22.7255 10.6118 23.0026 10.5 23.3332 10.5C23.6637 10.5 23.9408 10.6118 24.1644 10.8354C24.388 11.059 24.4998 11.3361 24.4998 11.6667C24.4998 11.9972 24.388 12.2743 24.1644 12.4979C23.9408 12.7215 23.6637 12.8333 23.3332 12.8333C23.0026 12.8333 22.7255 12.7215 22.5019 12.4979ZM22.1665 9.33333V3.5H24.4998V9.33333H22.1665ZM7.204 12.6292C6.29011 11.7153 5.83317 10.6167 5.83317 9.33333C5.83317 8.05 6.29011 6.95139 7.204 6.0375C8.11789 5.12361 9.2165 4.66667 10.4998 4.66667C11.7832 4.66667 12.8818 5.12361 13.7957 6.0375C14.7096 6.95139 15.1665 8.05 15.1665 9.33333C15.1665 10.6167 14.7096 11.7153 13.7957 12.6292C12.8818 13.5431 11.7832 14 10.4998 14C9.2165 14 8.11789 13.5431 7.204 12.6292ZM1.1665 23.3333V20.0667C1.1665 19.4056 1.33664 18.7979 1.67692 18.2437C2.0172 17.6896 2.46928 17.2667 3.03317 16.975C4.23873 16.3722 5.46373 15.9201 6.70817 15.6187C7.95262 15.3174 9.2165 15.1667 10.4998 15.1667C11.7832 15.1667 13.0471 15.3174 14.2915 15.6187C15.5359 15.9201 16.7609 16.3722 17.9665 16.975C18.5304 17.2667 18.9825 17.6896 19.3228 18.2437C19.663 18.7979 19.8332 19.4056 19.8332 20.0667V23.3333H1.1665ZM3.49984 21H17.4998V20.0667C17.4998 19.8528 17.4464 19.6583 17.3394 19.4833C17.2325 19.3083 17.0915 19.1722 16.9165 19.075C15.8665 18.55 14.8068 18.1562 13.7373 17.8938C12.6679 17.6313 11.5887 17.5 10.4998 17.5C9.41095 17.5 8.33178 17.6313 7.26234 17.8938C6.19289 18.1562 5.13317 18.55 4.08317 19.075C3.90817 19.1722 3.7672 19.3083 3.66025 19.4833C3.55331 19.6583 3.49984 19.8528 3.49984 20.0667V21ZM12.1478 10.9812C12.6047 10.5243 12.8332 9.975 12.8332 9.33333C12.8332 8.69167 12.6047 8.14236 12.1478 7.68542C11.6908 7.22847 11.1415 7 10.4998 7C9.85817 7 9.30886 7.22847 8.85192 7.68542C8.39498 8.14236 8.1665 8.69167 8.1665 9.33333C8.1665 9.975 8.39498 10.5243 8.85192 10.9812C9.30886 11.4382 9.85817 11.6667 10.4998 11.6667C11.1415 11.6667 11.6908 11.4382 12.1478 10.9812Z"
                fill="white"
              />
            </svg>
          ),
          title: "Help prioritize conversations that may need attention.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 16.3346V11.0846H5.25V16.3346H1.75ZM8.75 16.3346V9.33464H12.25V16.3346H8.75ZM15.75 16.3346V7.0013H19.25V16.3346H15.75ZM22.75 16.3346V4.66797H26.25V16.3346H22.75ZM1.75 23.3346V18.668H5.25V23.3346H1.75ZM8.75 23.3346V18.668H12.25V23.3346H8.75ZM15.75 23.3346V18.668H19.25V23.3346H15.75ZM22.75 23.3346V18.668H26.25V23.3346H22.75Z"
                fill="white"
              />
            </svg>
          ),
          title: "Support service-quality improvement.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9999 25.6654C12.386 25.6654 10.8694 25.3591 9.44992 24.7466C8.03047 24.1341 6.79575 23.3029 5.74575 22.2529C4.69575 21.2029 3.8645 19.9681 3.252 18.5487C2.6395 17.1293 2.33325 15.6126 2.33325 13.9987C2.33325 12.3848 2.6395 10.8681 3.252 9.4487C3.8645 8.02925 4.69575 6.79453 5.74575 5.74453C6.79575 4.69453 8.03047 3.86328 9.44992 3.25078C10.8694 2.63828 12.386 2.33203 13.9999 2.33203C15.6138 2.33203 17.1305 2.63828 18.5499 3.25078C19.9694 3.86328 21.2041 4.69453 22.2541 5.74453C23.3041 6.79453 24.1353 8.02925 24.7478 9.4487C25.3603 10.8681 25.6666 12.3848 25.6666 13.9987C25.6666 15.6126 25.3603 17.1293 24.7478 18.5487C24.1353 19.9681 23.3041 21.2029 22.2541 22.2529C21.2041 23.3029 19.9694 24.1341 18.5499 24.7466C17.1305 25.3591 15.6138 25.6654 13.9999 25.6654ZM13.9999 23.332C16.586 23.332 18.7881 22.423 20.6062 20.6049C22.4242 18.7869 23.3333 16.5848 23.3333 13.9987C23.3333 11.4126 22.4242 9.2105 20.6062 7.39245C18.7881 5.57439 16.586 4.66536 13.9999 4.66536C11.4138 4.66536 9.21172 5.57439 7.39367 7.39245C5.57561 9.2105 4.66659 11.4126 4.66659 13.9987C4.66659 16.5848 5.57561 18.7869 7.39367 20.6049C9.21172 22.423 11.4138 23.332 13.9999 23.332ZM15.7499 12.7154L16.3333 12.3654C16.3721 12.832 16.5569 13.2209 16.8874 13.532C17.218 13.8431 17.6166 13.9987 18.0833 13.9987C18.5694 13.9987 18.9826 13.8286 19.3228 13.4883C19.6631 13.148 19.8333 12.7348 19.8333 12.2487C19.8333 11.957 19.7652 11.6799 19.6291 11.4174C19.493 11.1549 19.3083 10.9459 19.0749 10.7904L19.8333 10.3529L19.2499 9.33203L15.1666 11.6654L15.7499 12.7154ZM12.2499 12.7154L12.8333 11.6654L8.74992 9.33203L8.16659 10.3529L8.92492 10.7904C8.69159 10.9459 8.50686 11.1549 8.37075 11.4174C8.23464 11.6799 8.16659 11.957 8.16659 12.2487C8.16659 12.7348 8.33672 13.148 8.677 13.4883C9.01728 13.8286 9.43047 13.9987 9.91659 13.9987C10.3833 13.9987 10.7819 13.8431 11.1124 13.532C11.443 13.2209 11.6277 12.832 11.6666 12.3654L12.2499 12.7154ZM13.9999 15.1654C12.6194 15.1654 11.4041 15.6077 10.3541 16.4924C9.30409 17.3772 8.5652 18.4904 8.13742 19.832H19.8624C19.4346 18.4904 18.6958 17.3772 17.6458 16.4924C16.5958 15.6077 15.3805 15.1654 13.9999 15.1654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Identify recurring sources of customer frustration.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6668 16.332H16.3335V13.9987H11.6668V16.332ZM11.6668 12.832H21.0002V10.4987H11.6668V12.832ZM11.6668 9.33203H21.0002V6.9987H11.6668V9.33203ZM9.3335 20.9987C8.69183 20.9987 8.14252 20.7702 7.68558 20.3133C7.22863 19.8563 7.00016 19.307 7.00016 18.6654V4.66536C7.00016 4.0237 7.22863 3.47439 7.68558 3.01745C8.14252 2.5605 8.69183 2.33203 9.3335 2.33203H23.3335C23.9752 2.33203 24.5245 2.5605 24.9814 3.01745C25.4384 3.47439 25.6668 4.0237 25.6668 4.66536V18.6654C25.6668 19.307 25.4384 19.8563 24.9814 20.3133C24.5245 20.7702 23.9752 20.9987 23.3335 20.9987H9.3335ZM9.3335 18.6654H23.3335V4.66536H9.3335V18.6654ZM4.66683 25.6654C4.02516 25.6654 3.47586 25.4369 3.01891 24.9799C2.56197 24.523 2.3335 23.9737 2.3335 23.332V6.9987H4.66683V23.332H21.0002V25.6654H4.66683Z"
                fill="white"
              />
            </svg>
          ),
          title: "Give managers additional context for coaching and reporting.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Understand How Your Customers Really Feel",
      description:
        "Use AI sentiment analysis to detect emotion, flag unhappy customers early and improve every conversation across your contact center and support teams.",
      tabs: [
        "🏢 Contact Centers",
        "🎧 Customer Support",
        "⚠️ Complaint Management",
        "🎯 Quality Assurance",
        "🌟 Customer Experience Teams",
      ],
      ctaTitle: "Understand Your Customer Conversations",
      ctaDesc:
        "Detect customer emotion, flag unhappy callers early and turn every conversation into insights that improve service quality and customer experience.",
      primaryBtnText: "Book Your Demo",
      secondaryBtnText: "Talk To Our Team",
    },
  },

  // ==========================================
  // 14. SPAM TEXT DETECTION (Agentic AI)
  // ==========================================
  "spam-text-detection": {
    metadata: {
      title: "Spam Text Detection — Tubelight Communications",
      description:
        "Help identify suspicious, unwanted, or potentially harmful text messages using configurable detection rules and AI-assisted text analysis where available.",
    },
    banner: {
      title: (
        <>
          Detect Suspicious Messages. Protect Trust. <span>Reduce Risk.</span>
        </>
      ),
      description:
        "Help identify suspicious, unwanted, or potentially harmful text messages using configurable detection rules and AI-assisted text analysis where available.",
      primaryBtnText: "Try for free",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk to Expert",
      secondaryBtnLink: "/contact-us",
      videoSrc: "/images/spamtextdetectionbanner.mp4",
    },
    features: {
      title: "Smarter Detection for Safer Messaging",
      description: (
        <>
          Unwanted and fraudulent messages can undermine customer trust,
          increase operational risk, and affect communication quality. Spam Text
          Detection helps assess message content for suspicious patterns,
          potentially harmful links, impersonation signals, and other configured
          indicators.
          <br />
          <br />
          Detection results should support appropriate review and policy
          enforcement rather than being treated as a guarantee that every
          message is safe or malicious.
        </>
      ),
      cards: [
        {
          icon: "01",
          title: "Text Classification",
          detail: "Assess messages for potential spam or suspicious content.",
        },
        {
          icon: "02",
          title: "Pattern Detection",
          detail:
            "Identify configured keywords, repeated patterns, and suspicious message structures.",
        },
        {
          icon: "03",
          title: "URL and Link Signals",
          detail:
            "Flag potentially suspicious links where link analysis is supported.",
        },
        {
          icon: "04",
          title: "AI-Assisted Content Analysis",
          detail: "Assess contextual signals using enabled detection models.",
        },
        {
          icon: "05",
          title: "Rule-Based Filtering",
          detail: "Apply configurable policies and thresholds.",
        },
        {
          icon: "06",
          title: "Alerts and Review",
          detail: "Flag suspicious messages for review or further action.",
        },
        {
          icon: "07",
          title: "Reporting and Trends",
          detail:
            "Monitor detection volumes, flagged patterns, and available outcomes.",
        },
        {
          icon: "08",
          title: "Integration Support",
          detail: "Connect with supported messaging workflows and systems.",
        },
      ],
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Why Teams Choose Spam Text Detection",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1618 12.4966C10.3854 12.273 10.4972 11.9959 10.4972 11.6654C10.4972 11.3348 10.3854 11.0577 10.1618 10.8341C9.9382 10.6105 9.66112 10.4987 9.33057 10.4987C9.00001 10.4987 8.72293 10.6105 8.49932 10.8341C8.2757 11.0577 8.1639 11.3348 8.1639 11.6654C8.1639 11.9959 8.2757 12.273 8.49932 12.4966C8.72293 12.7202 9.00001 12.832 9.33057 12.832C9.66112 12.832 9.9382 12.7202 10.1618 12.4966ZM14.8285 12.4966C15.0521 12.273 15.1639 11.9959 15.1639 11.6654C15.1639 11.3348 15.0521 11.0577 14.8285 10.8341C14.6049 10.6105 14.3278 10.4987 13.9972 10.4987C13.6667 10.4987 13.3896 10.6105 13.166 10.8341C12.9424 11.0577 12.8306 11.3348 12.8306 11.6654C12.8306 11.9959 12.9424 12.273 13.166 12.4966C13.3896 12.7202 13.6667 12.832 13.9972 12.832C14.3278 12.832 14.6049 12.7202 14.8285 12.4966ZM19.4951 12.4966C19.7188 12.273 19.8306 11.9959 19.8306 11.6654C19.8306 11.3348 19.7188 11.0577 19.4951 10.8341C19.2715 10.6105 18.9945 10.4987 18.6639 10.4987C18.3333 10.4987 18.0563 10.6105 17.8326 10.8341C17.609 11.0577 17.4972 11.3348 17.4972 11.6654C17.4972 11.9959 17.609 12.273 17.8326 12.4966C18.0563 12.7202 18.3333 12.832 18.6639 12.832C18.9945 12.832 19.2715 12.7202 19.4951 12.4966ZM2.33057 25.6654V4.66536C2.33057 4.0237 2.55904 3.47439 3.01598 3.01745C3.47293 2.5605 4.02223 2.33203 4.6639 2.33203H23.3306C23.9722 2.33203 24.5215 2.5605 24.9785 3.01745C25.4354 3.47439 25.6639 4.0237 25.6639 4.66536V18.6654C25.6639 19.307 25.4354 19.8563 24.9785 20.3133C24.5215 20.7702 23.9722 20.9987 23.3306 20.9987H6.99723L2.33057 25.6654ZM6.00557 18.6654H23.3306V4.66536H4.6639V19.9779L6.00557 18.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve visibility into potentially harmful messages.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 22.1667H22.1667V11.4625L16.5375 5.83333H5.83333V22.1667ZM5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H17.5L24.5 10.5V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM8.16667 19.8333H19.8333V17.5H8.16667V19.8333ZM8.16667 15.1667H19.8333V12.8333H8.16667V15.1667ZM8.16667 10.5H16.3333V8.16667H8.16667V10.5Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce exposure to unwanted or suspicious text.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00016 16.332H10.5585L16.3918 10.4987C16.5668 10.3237 16.6981 10.1244 16.7856 9.90078C16.8731 9.67717 16.9168 9.45842 16.9168 9.24453C16.9168 9.03064 16.8682 8.82161 16.771 8.61745C16.6738 8.41328 16.5474 8.2237 16.3918 8.0487L15.3418 6.94036C15.1668 6.76536 14.9724 6.63411 14.7585 6.54661C14.5446 6.45911 14.321 6.41536 14.0877 6.41536C13.8738 6.41536 13.655 6.45911 13.4314 6.54661C13.2078 6.63411 13.0085 6.76536 12.8335 6.94036L7.00016 12.7737V16.332ZM8.75016 14.582V13.4737L11.696 10.5279L12.2793 11.0529L12.8043 11.6362L9.8585 14.582H8.75016ZM12.2793 11.0529L12.8043 11.6362L11.696 10.5279L12.2793 11.0529ZM13.0377 16.332H21.0002V13.9987H15.371L13.0377 16.332ZM2.3335 25.6654V4.66536C2.3335 4.0237 2.56197 3.47439 3.01891 3.01745C3.47586 2.5605 4.02516 2.33203 4.66683 2.33203H23.3335C23.9752 2.33203 24.5245 2.5605 24.9814 3.01745C25.4384 3.47439 25.6668 4.0237 25.6668 4.66536V18.6654C25.6668 19.307 25.4384 19.8563 24.9814 20.3133C24.5245 20.7702 23.9752 20.9987 23.3335 20.9987H7.00016L2.3335 25.6654ZM6.0085 18.6654H23.3335V4.66536H4.66683V19.9779L6.0085 18.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Support consistent message review policies.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.854 23.332C13.9317 23.332 14.0095 23.3126 14.0873 23.2737C14.1651 23.2348 14.2234 23.1959 14.2623 23.157L23.829 13.5904C24.0623 13.357 24.2324 13.0945 24.3394 12.8029C24.4463 12.5112 24.4998 12.2195 24.4998 11.9279C24.4998 11.6168 24.4463 11.3202 24.3394 11.0383C24.2324 10.7563 24.0623 10.5084 23.829 10.2945L18.8706 5.3362C18.6567 5.10286 18.4088 4.93273 18.1269 4.82578C17.8449 4.71884 17.5484 4.66536 17.2373 4.66536C16.9456 4.66536 16.654 4.71884 16.3623 4.82578C16.0706 4.93273 15.8081 5.10286 15.5748 5.3362L15.254 5.65703L17.4123 7.84453C17.704 8.11675 17.9178 8.42786 18.054 8.77786C18.1901 9.12786 18.2581 9.49731 18.2581 9.8862C18.2581 10.7029 17.981 11.3883 17.4269 11.9424C16.8727 12.4966 16.1873 12.7737 15.3706 12.7737C14.9817 12.7737 14.6074 12.7056 14.2477 12.5695C13.888 12.4334 13.572 12.2293 13.2998 11.957L11.1123 9.7987L6.00812 14.9029C5.94978 14.9612 5.90603 15.0244 5.87687 15.0924C5.8477 15.1605 5.83312 15.2334 5.83312 15.3112C5.83312 15.4668 5.89145 15.6077 6.00812 15.7341C6.12478 15.8605 6.2609 15.9237 6.41645 15.9237C6.49423 15.9237 6.57201 15.9043 6.64978 15.8654C6.72756 15.8265 6.7859 15.7876 6.82478 15.7487L10.7915 11.782L12.4248 13.4154L8.48728 17.382C8.42895 17.4404 8.3852 17.5036 8.35603 17.5716C8.32687 17.6397 8.31228 17.7126 8.31228 17.7904C8.31228 17.9459 8.37062 18.082 8.48728 18.1987C8.60395 18.3154 8.74006 18.3737 8.89562 18.3737C8.9734 18.3737 9.05117 18.3543 9.12895 18.3154C9.20673 18.2765 9.26506 18.2376 9.30395 18.1987L13.2706 14.2612L14.904 15.8945L10.9665 19.8612C10.9081 19.9001 10.8644 19.9584 10.8352 20.0362C10.806 20.114 10.7915 20.1918 10.7915 20.2695C10.7915 20.4251 10.8498 20.5612 10.9665 20.6779C11.0831 20.7945 11.2192 20.8529 11.3748 20.8529C11.4526 20.8529 11.5255 20.8383 11.5935 20.8091C11.6616 20.7799 11.7248 20.7362 11.7831 20.6779L15.7498 16.7404L17.3831 18.3737L13.4165 22.3404C13.3581 22.3987 13.3144 22.4619 13.2852 22.5299C13.256 22.598 13.2415 22.6709 13.2415 22.7487C13.2415 22.9043 13.3046 23.0404 13.431 23.157C13.5574 23.2737 13.6984 23.332 13.854 23.332ZM13.8248 25.6654C13.1053 25.6654 12.4685 25.4272 11.9144 24.9508C11.3602 24.4744 11.0345 23.8765 10.9373 23.157C10.2762 23.0598 9.72201 22.7876 9.27478 22.3404C8.82756 21.8931 8.55534 21.339 8.45812 20.6779C7.79701 20.5806 7.2477 20.3036 6.8102 19.8466C6.3727 19.3897 6.10534 18.8404 6.00812 18.1987C5.26923 18.1015 4.66645 17.7806 4.19978 17.2362C3.73312 16.6918 3.49978 16.0501 3.49978 15.3112C3.49978 14.9223 3.5727 14.548 3.71853 14.1883C3.86437 13.8286 4.0734 13.5126 4.34562 13.2404L11.1123 6.50286L14.9331 10.3237C14.972 10.382 15.0303 10.4258 15.1081 10.4549C15.1859 10.4841 15.2637 10.4987 15.3415 10.4987C15.5165 10.4987 15.6623 10.4452 15.779 10.3383C15.8956 10.2313 15.954 10.0904 15.954 9.91536C15.954 9.83759 15.9394 9.75981 15.9102 9.68203C15.881 9.60425 15.8373 9.54592 15.779 9.50703L11.6081 5.3362C11.3942 5.10286 11.1463 4.93273 10.8644 4.82578C10.5824 4.71884 10.2859 4.66536 9.97478 4.66536C9.68312 4.66536 9.39145 4.71884 9.09978 4.82578C8.80812 4.93273 8.54562 5.10286 8.31228 5.3362L4.19978 9.47786C4.02479 9.65286 3.87895 9.85703 3.76228 10.0904C3.64562 10.3237 3.56784 10.557 3.52895 10.7904C3.49006 11.0237 3.49006 11.2619 3.52895 11.5049C3.56784 11.748 3.64562 11.9765 3.76228 12.1904L2.07062 13.882C1.74006 13.4348 1.49701 12.9438 1.34145 12.4091C1.1859 11.8744 1.12756 11.3348 1.16645 10.7904C1.20534 10.2459 1.34145 9.71606 1.57479 9.20078C1.80812 8.6855 2.12895 8.2237 2.53729 7.81536L6.64978 3.70286C7.11645 3.25564 7.63659 2.91536 8.2102 2.68203C8.78381 2.4487 9.37201 2.33203 9.97478 2.33203C10.5776 2.33203 11.1658 2.4487 11.7394 2.68203C12.313 2.91536 12.8234 3.25564 13.2706 3.70286L13.5915 4.0237L13.9123 3.70286C14.379 3.25564 14.8991 2.91536 15.4727 2.68203C16.0463 2.4487 16.6345 2.33203 17.2373 2.33203C17.8401 2.33203 18.4283 2.4487 19.0019 2.68203C19.5755 2.91536 20.0859 3.25564 20.5331 3.70286L25.4623 8.63203C25.9095 9.07925 26.2498 9.59453 26.4831 10.1779C26.7165 10.7612 26.8331 11.3543 26.8331 11.957C26.8331 12.5598 26.7165 13.148 26.4831 13.7216C26.2498 14.2952 25.9095 14.8056 25.4623 15.2529L15.8956 24.7904C15.6234 25.0626 15.3074 25.2765 14.9477 25.432C14.588 25.5876 14.2137 25.6654 13.8248 25.6654Z"
                fill="white"
              />
            </svg>
          ),
          title: "Help protect customer trust and communication quality.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.8335 18.6667H8.16683C8.16683 18.025 7.93836 17.4757 7.48141 17.0188C7.02447 16.5618 6.47516 16.3333 5.8335 16.3333V18.6667ZM9.97516 18.6667H11.6668C11.6668 17.0528 11.0981 15.6771 9.96058 14.5396C8.82308 13.4021 7.44738 12.8333 5.8335 12.8333V14.525C6.98072 14.525 7.9578 14.9285 8.76475 15.7354C9.57169 16.5424 9.97516 17.5194 9.97516 18.6667ZM13.4752 18.6667H15.1668C15.1668 17.3833 14.9238 16.1729 14.4377 15.0354C13.9516 13.8979 13.2856 12.9062 12.4397 12.0604C11.5939 11.2146 10.6022 10.5486 9.46475 10.0625C8.32725 9.57639 7.11683 9.33333 5.8335 9.33333V11.025C7.95294 11.025 9.75641 11.7688 11.2439 13.2563C12.7314 14.7437 13.4752 16.5472 13.4752 18.6667ZM9.3335 24.5V22.1667H4.66683C4.02516 22.1667 3.47586 21.9382 3.01891 21.4813C2.56197 21.0243 2.3335 20.475 2.3335 19.8333V5.83333C2.3335 5.19167 2.56197 4.64236 3.01891 4.18542C3.47586 3.72847 4.02516 3.5 4.66683 3.5H23.3335C23.9752 3.5 24.5245 3.72847 24.9814 4.18542C25.4384 4.64236 25.6668 5.19167 25.6668 5.83333V19.8333C25.6668 20.475 25.4384 21.0243 24.9814 21.4813C24.5245 21.9382 23.9752 22.1667 23.3335 22.1667H18.6668V24.5H9.3335ZM4.66683 19.8333H23.3335V5.83333H4.66683V19.8333Z"
                fill="white"
              />
            </svg>
          ),
          title: "Monitor emerging suspicious-message patterns.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Protect Every Message Before It Reaches Your Customers",
      description:
        "Detect and block suspicious text content across your messaging platforms, adding an extra layer of protection for enterprise communication teams.",
      tabs: [
        "💬 Messaging Platforms",
        "👥 Customer Outreach Teams & Operations",
        "🏢 Enterprise Messaging Teams",
        "🛡️ Organizations Seeking Spam & Fraud Protection",
      ],
      ctaTitle: "Strengthen Your Messaging Protection",
      ctaDesc:
        "Protect your brand reputation, reduce messaging risk and keep customer communication clean and reliable.",
      primaryBtnText: "Book Your Demo",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk To Our Team",
      secondaryBtnLink: "/contact-us",
    },
  },

  // ==========================================
  // 15. AI-POWERED TICKETING (Agentic AI)
  // ==========================================
  "ai-powered-ticketing": {
    banner: {
      videoSrc: "/images/aipoweredticketbanner.mp4",
    },
    metadata: {
      title: "AI-Powered Ticketing — Tubelight Communications",
      description:
        "Manage customer queries, automate ticket handling, and improve resolution times with AI-powered ticketing.",
    },
    benefits: {
      eyebrow: "BUSINESS BENEFITS",
      title: "Support That Scales With Accountability",
      cards: [
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3335 23.3327H4.66683C4.02516 23.3327 3.47586 23.1042 3.01891 22.6473C2.56197 22.1903 2.3335 21.641 2.3335 20.9993V16.3327C2.97516 16.3327 3.52447 16.1042 3.98141 15.6473C4.43836 15.1903 4.66683 14.641 4.66683 13.9993C4.66683 13.3577 4.43836 12.8084 3.98141 12.3514C3.52447 11.8945 2.97516 11.666 2.3335 11.666V6.99935C2.3335 6.35768 2.56197 5.80838 3.01891 5.35143C3.47586 4.89449 4.02516 4.66602 4.66683 4.66602H23.3335C23.9752 4.66602 24.5245 4.89449 24.9814 5.35143C25.4384 5.80838 25.6668 6.35768 25.6668 6.99935V11.666C25.0252 11.666 24.4759 11.8945 24.0189 12.3514C23.562 12.8084 23.3335 13.3577 23.3335 13.9993C23.3335 14.641 23.562 15.1903 24.0189 15.6473C24.4759 16.1042 25.0252 16.3327 25.6668 16.3327V20.9993C25.6668 21.641 25.4384 22.1903 24.9814 22.6473C24.5245 23.1042 23.9752 23.3327 23.3335 23.3327ZM23.3335 20.9993V18.0243C22.6141 17.5966 22.0453 17.0278 21.6272 16.3181C21.2092 15.6084 21.0002 14.8355 21.0002 13.9993C21.0002 13.1632 21.2092 12.3903 21.6272 11.6806C22.0453 10.9709 22.6141 10.4021 23.3335 9.97435V6.99935H4.66683V9.97435C5.38627 10.4021 5.95502 10.9709 6.37308 11.6806C6.79113 12.3903 7.00016 13.1632 7.00016 13.9993C7.00016 14.8355 6.79113 15.6084 6.37308 16.3181C5.95502 17.0278 5.38627 17.5966 4.66683 18.0243V20.9993H23.3335Z"
                fill="white"
              />
            </svg>
          ),
          title: "Reduce manual ticket management",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.3335 25.6673V4.66732C2.3335 4.02565 2.56197 3.47635 3.01891 3.0194C3.47586 2.56246 4.02516 2.33398 4.66683 2.33398H23.3335C23.9752 2.33398 24.5245 2.56246 24.9814 3.0194C25.4384 3.47635 25.6668 4.02565 25.6668 4.66732V11.6673H23.3335V4.66732H4.66683V19.9798L6.0085 18.6673H17.5002V21.0007H7.00016L2.3335 25.6673ZM22.1668 26.834V21.0007H19.8335V14.0007H25.6668L23.6835 18.6673H26.2502L22.1668 26.834Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve response and resolution times.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2778 18.6073L21.4694 16.799C22.325 16.0017 22.9958 15.0587 23.4819 13.9698C23.968 12.8809 24.2111 11.724 24.2111 10.499C24.2111 9.27396 23.968 8.12674 23.4819 7.05729C22.9958 5.98785 22.325 5.05451 21.4694 4.25729L23.2778 2.39062C24.3667 3.42118 25.2319 4.63646 25.8736 6.03646C26.5153 7.43646 26.8361 8.92396 26.8361 10.499C26.8361 12.074 26.5153 13.5615 25.8736 14.9615C25.2319 16.3615 24.3667 17.5767 23.2778 18.6073ZM19.5444 14.874L17.6778 13.0073C18.0278 12.6767 18.3097 12.3024 18.5236 11.8844C18.7375 11.4663 18.8444 11.0045 18.8444 10.499C18.8444 9.9934 18.7375 9.5316 18.5236 9.11354C18.3097 8.69549 18.0278 8.32118 17.6778 7.99062L19.5444 6.12396C20.1667 6.68785 20.6528 7.3441 21.0028 8.09271C21.3528 8.84132 21.5278 9.6434 21.5278 10.499C21.5278 11.3545 21.3528 12.1566 21.0028 12.9052C20.6528 13.6538 20.1667 14.3101 19.5444 14.874ZM10.5028 15.1656C9.21943 15.1656 8.12082 14.7087 7.20693 13.7948C6.29305 12.8809 5.8361 11.7823 5.8361 10.499C5.8361 9.21562 6.29305 8.11701 7.20693 7.20312C8.12082 6.28924 9.21943 5.83229 10.5028 5.83229C11.7861 5.83229 12.8847 6.28924 13.7986 7.20312C14.7125 8.11701 15.1694 9.21562 15.1694 10.499C15.1694 11.7823 14.7125 12.8809 13.7986 13.7948C12.8847 14.7087 11.7861 15.1656 10.5028 15.1656ZM1.16943 24.499V21.2323C1.16943 20.5906 1.33471 19.9878 1.66527 19.424C1.99582 18.8601 2.45277 18.4323 3.0361 18.1406C4.02777 17.6351 5.14582 17.2073 6.39027 16.8573C7.63471 16.5073 9.00555 16.3323 10.5028 16.3323C12 16.3323 13.3708 16.5073 14.6153 16.8573C15.8597 17.2073 16.9778 17.6351 17.9694 18.1406C18.5528 18.4323 19.0097 18.8601 19.3403 19.424C19.6708 19.9878 19.8361 20.5906 19.8361 21.2323V24.499H1.16943ZM3.50277 22.1656H17.5028V21.2323C17.5028 21.0184 17.4493 20.824 17.3424 20.649C17.2354 20.474 17.0944 20.3378 16.9194 20.2406C16.2194 19.8906 15.3201 19.5406 14.2215 19.1906C13.1229 18.8406 11.8833 18.6656 10.5028 18.6656C9.12221 18.6656 7.88263 18.8406 6.78402 19.1906C5.68541 19.5406 4.7861 19.8906 4.0861 20.2406C3.9111 20.3378 3.77013 20.474 3.66318 20.649C3.55624 20.824 3.50277 21.0184 3.50277 21.2323V22.1656ZM12.1507 12.1469C12.6076 11.6899 12.8361 11.1406 12.8361 10.499C12.8361 9.85729 12.6076 9.30799 12.1507 8.85104C11.6937 8.3941 11.1444 8.16563 10.5028 8.16563C9.8611 8.16563 9.3118 8.3941 8.85485 8.85104C8.39791 9.30799 8.16943 9.85729 8.16943 10.499C8.16943 11.1406 8.39791 11.6899 8.85485 12.1469C9.3118 12.6038 9.8611 12.8323 10.5028 12.8323C11.1444 12.8323 11.6937 12.6038 12.1507 12.1469Z"
                fill="white"
              />
            </svg>
          ),
          title: "Prioritize urgent customer issues.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16634 9.91797L10.4997 7.58464L8.16634 5.2513L5.83301 7.58464L8.16634 9.91797ZM4.66634 16.3346C4.02467 16.3346 3.47537 16.1062 3.01842 15.6492C2.56148 15.1923 2.33301 14.643 2.33301 14.0013V3.5013C2.33301 2.85964 2.56148 2.31033 3.01842 1.85339C3.47537 1.39644 4.02467 1.16797 4.66634 1.16797H23.333C23.9747 1.16797 24.524 1.39644 24.9809 1.85339C25.4379 2.31033 25.6663 2.85964 25.6663 3.5013V14.0013C25.6663 14.643 25.4379 15.1923 24.9809 15.6492C24.524 16.1062 23.9747 16.3346 23.333 16.3346H19.5705C19.6872 15.9457 19.765 15.5569 19.8038 15.168C19.8427 14.7791 19.8427 14.3902 19.8038 14.0013H23.333V3.5013H4.66634V14.0013H8.19551C8.15662 14.3902 8.15662 14.7791 8.19551 15.168C8.2344 15.5569 8.31217 15.9457 8.42884 16.3346H4.66634ZM19.2497 8.16797C19.7358 8.16797 20.149 7.99783 20.4893 7.65755C20.8295 7.31727 20.9997 6.90408 20.9997 6.41797C20.9997 5.93186 20.8295 5.51866 20.4893 5.17839C20.149 4.83811 19.7358 4.66797 19.2497 4.66797C18.7636 4.66797 18.3504 4.83811 18.0101 5.17839C17.6698 5.51866 17.4997 5.93186 17.4997 6.41797C17.4997 6.90408 17.6698 7.31727 18.0101 7.65755C18.3504 7.99783 18.7636 8.16797 19.2497 8.16797ZM5.83301 26.8346V24.3846C5.83301 23.7041 6.02259 23.0721 6.40176 22.4888C6.78092 21.9055 7.28162 21.468 7.90384 21.1763C8.85662 20.7291 9.84829 20.3937 10.8788 20.1701C11.9094 19.9464 12.9497 19.8346 13.9997 19.8346C15.0497 19.8346 16.09 19.9464 17.1205 20.1701C18.1511 20.3937 19.1427 20.7291 20.0955 21.1763C20.7177 21.468 21.2184 21.9055 21.5976 22.4888C21.9768 23.0721 22.1663 23.7041 22.1663 24.3846V26.8346H5.83301ZM8.16634 24.5013H19.833V24.3846C19.833 24.1513 19.765 23.9374 19.6288 23.743C19.4927 23.5485 19.3177 23.4027 19.1038 23.3055C18.2872 22.936 17.4511 22.6541 16.5955 22.4596C15.74 22.2652 14.8747 22.168 13.9997 22.168C13.1247 22.168 12.2594 22.2652 11.4038 22.4596C10.5483 22.6541 9.71217 22.936 8.89551 23.3055C8.68162 23.4027 8.50662 23.5485 8.37051 23.743C8.2344 23.9374 8.16634 24.1513 8.16634 24.3846V24.5013ZM11.1122 17.4721C10.315 16.6749 9.91634 15.7124 9.91634 14.5846C9.91634 13.4569 10.315 12.4944 11.1122 11.6971C11.9094 10.8999 12.8719 10.5013 13.9997 10.5013C15.1275 10.5013 16.09 10.8999 16.8872 11.6971C17.6844 12.4944 18.083 13.4569 18.083 14.5846C18.083 15.7124 17.6844 16.6749 16.8872 17.4721C16.09 18.2694 15.1275 18.668 13.9997 18.668C12.8719 18.668 11.9094 18.2694 11.1122 17.4721ZM15.2393 15.8242C15.5795 15.4839 15.7497 15.0707 15.7497 14.5846C15.7497 14.0985 15.5795 13.6853 15.2393 13.3451C14.899 13.0048 14.4858 12.8346 13.9997 12.8346C13.5136 12.8346 13.1004 13.0048 12.7601 13.3451C12.4198 13.6853 12.2497 14.0985 12.2497 14.5846C12.2497 15.0707 12.4198 15.4839 12.7601 15.8242C13.1004 16.1645 13.5136 16.3346 13.9997 16.3346C14.4858 16.3346 14.899 16.1645 15.2393 15.8242Z"
                fill="white"
              />
            </svg>
          ),
          title: "Increase agent productivity.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 24.5013C5.19167 24.5013 4.64236 24.2728 4.18542 23.8159C3.72847 23.3589 3.5 22.8096 3.5 22.168V5.83464C3.5 5.19297 3.72847 4.64366 4.18542 4.18672C4.64236 3.72977 5.19167 3.5013 5.83333 3.5013H10.7333C10.9861 2.8013 11.409 2.23741 12.0021 1.80964C12.5951 1.38186 13.2611 1.16797 14 1.16797C14.7389 1.16797 15.4049 1.38186 15.9979 1.80964C16.591 2.23741 17.0139 2.8013 17.2667 3.5013H22.1667C22.8083 3.5013 23.3576 3.72977 23.8146 4.18672C24.2715 4.64366 24.5 5.19297 24.5 5.83464V22.168C24.5 22.8096 24.2715 23.3589 23.8146 23.8159C23.3576 24.2728 22.8083 24.5013 22.1667 24.5013H5.83333ZM5.83333 22.168H22.1667V5.83464H5.83333V22.168ZM8.16667 19.8346H16.3333V17.5013H8.16667V19.8346ZM8.16667 15.168H19.8333V12.8346H8.16667V15.168ZM8.16667 10.5013H19.8333V8.16797H8.16667V10.5013ZM14.6271 4.71172C14.7924 4.54644 14.875 4.33741 14.875 4.08464C14.875 3.83186 14.7924 3.62283 14.6271 3.45755C14.4618 3.29227 14.2528 3.20964 14 3.20964C13.7472 3.20964 13.5382 3.29227 13.3729 3.45755C13.2076 3.62283 13.125 3.83186 13.125 4.08464C13.125 4.33741 13.2076 4.54644 13.3729 4.71172C13.5382 4.877 13.7472 4.95964 14 4.95964C14.2528 4.95964 14.4618 4.877 14.6271 4.71172Z"
                fill="white"
              />
            </svg>
          ),
          title: "Improve SLA visibility and accountability.",
        },
        {
          icon: (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1275_799)">
                <path
                  d="M4.6665 23.3346V20.068C4.6665 19.4069 4.83664 18.7992 5.17692 18.2451C5.5172 17.6909 5.96928 17.268 6.53317 16.9763C7.73873 16.3735 8.96373 15.9214 10.2082 15.6201C11.4526 15.3187 12.7165 15.168 13.9998 15.168C14.3887 15.168 14.7776 15.1826 15.1665 15.2117C15.5554 15.2409 15.9443 15.2846 16.3332 15.343V17.7055C15.9443 17.6277 15.5554 17.5742 15.1665 17.5451C14.7776 17.5159 14.3887 17.5013 13.9998 17.5013C12.9109 17.5013 11.8318 17.6326 10.7623 17.8951C9.69289 18.1576 8.63317 18.5513 7.58317 19.0763C7.40817 19.1735 7.2672 19.3096 7.16025 19.4846C7.05331 19.6596 6.99984 19.8541 6.99984 20.068V21.0013H16.3332V23.3346H4.6665ZM10.704 12.6305C9.79011 11.7166 9.33317 10.618 9.33317 9.33464C9.33317 8.0513 9.79011 6.95269 10.704 6.0388C11.6179 5.12491 12.7165 4.66797 13.9998 4.66797C15.2832 4.66797 16.3818 5.12491 17.2957 6.0388C18.2096 6.95269 18.6665 8.0513 18.6665 9.33464C18.6665 10.618 18.2096 11.7166 17.2957 12.6305C16.3818 13.5444 15.2832 14.0013 13.9998 14.0013C12.7165 14.0013 11.6179 13.5444 10.704 12.6305ZM15.6478 10.9826C16.1047 10.5256 16.3332 9.9763 16.3332 9.33464C16.3332 8.69297 16.1047 8.14366 15.6478 7.68672C15.1908 7.22977 14.6415 7.0013 13.9998 7.0013C13.3582 7.0013 12.8089 7.22977 12.3519 7.68672C11.895 8.14366 11.6665 8.69297 11.6665 9.33464C11.6665 9.9763 11.895 10.5256 12.3519 10.9826C12.8089 11.4395 13.3582 11.668 13.9998 11.668C14.6415 11.668 15.1908 11.4395 15.6478 10.9826ZM20.9998 28.0013V22.168H18.6665V15.168H25.6665L23.3332 19.8346H25.6665L20.9998 28.0013Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1275_799">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          title: "Build a consistent customer support experience.",
        },
      ],
    },
    platform: {
      eyebrow: "THE PLATFORM",
      title: "Built for Teams That Live in the Queue",
      description:
        "Customer support teams, IT helpdesks, telecom providers, e-commerce businesses, financial services, SaaS companies, and enterprises managing high volumes of customer requests.",
      tabs: [
        "🎧 Customer Support",
        "💻 IT Helpdesks",
        "📡 Telecom",
        "🛒 E-commerce",
        "💳 Financial Services",
        "☁️ SaaS",
        "🏢 Enterprises",
      ],
      ctaTitle: "Ready to Make Ticket Management Smarter?",
      ctaDesc:
        "Move from manual ticket handling to a more intelligent, accountable support operation.",
      primaryBtnText: "Book Your Demo",
      primaryBtnLink: "/contact-us",
      secondaryBtnText: "Talk To Our Team",
      secondaryBtnLink: "/contact-us",
    },
  },
};
