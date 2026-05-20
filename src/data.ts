/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, CaseStudy, Testimonial, ProcessStep, ToolCategory } from "./types";

export const OWNER_INFO = {
  name: "Md. Ahsan Atif",
  title: "Digital Marketer & Social Media Strategist",
  tagline: "Helping Brands Grow Through Strategic Digital Marketing",
  shortBio: "I am a performance-driven Digital Marketer & Social Media Strategist specializing in building high-ROI organic systems, premium advertising, laser-targeted lead generation, and cohesive social growth strategies that turn attention into recurring revenue.",
  personalImage: "https://dev-newsiteeeee.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-21-at-12.30.31-AM.jpeg",
  email: "ahsanatif.work@gmail.com",
  phone: "+8801936231615", // Representative premium portfolio layout
  location: "Dhaka, Bangladesh",
  whatsapp: "https://wa.me/8801936231615",
  socials: {
    linkedin: "https://www.linkedin.com/in/md-ahsan-atif?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv5xKnJtkSSaR93Q8r6ngdQ%3D%3D",
    facebook: "https://www.facebook.com/share/18sCkN8Gcs/",
    instagram: "https://www.instagram.com/atif__forever?igsh=MWh3MmRiZ2NkYnNjaw==",
    twitter: "https://twitter.com"
  }
};

export const CORE_STATS = [
  { label: "Years of Experience", value: "5+", suffix: "Years" },
  { label: "Successful Campaigns", value: "150+", suffix: "Projects" },
  { label: "Aggregated Audience Reach", value: "5M+", suffix: "Impressions" },
  { label: "Average Campaign ROI", value: "3.5x+", suffix: "Return" },
  { label: "Client Retention Rate", value: "98%", suffix: "Satisfaction" }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "social-organic",
    title: "Social Media Organic Marketing",
    description: "Build a highly engaged audience without ad spend. I design cohesive organic frameworks focused on viral reels, content scheduling, community development, and brand storytelling.",
    benefits: [
      "Viral-optimized video content loops (Reels, TikToks, Shorts)",
      "Niche community establishment and active engagement setups",
      "Algorithmic distribution hacking and timing analytics",
      "Authentic relationship workflows designed to turn followers into advocates"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "social-management",
    title: "Social Media Management",
    description: "End-to-end management of your digital storefronts. From strategic content calendars and copy writing to visual curation and direct response comment handling.",
    benefits: [
      "Premium, curated visual grid planning & custom copywriting",
      "Interactive social calendars matching brand launch campaigns",
      "Profile SEO optimization across Instagram, LinkedIn, and Facebook",
      "Daily community interaction & response protocols"
    ],
    iconName: "Instagram"
  },
  {
    id: "canva-design",
    title: "Canva & Visual Content Design",
    description: "Visually stunning, high-converting social designs that command thumb-stops. Customized brand kits, carousel slides, and cinematic storytelling graphics designed to build authority.",
    benefits: [
      "Custom reusable typography guidelines and Canva templates",
      "Educational, swipe-worthy informational carousel decks",
      "High-contrast, thumb-stopping story structures & story covers",
      "Conversion-focused promotional visual mockups"
    ],
    iconName: "Palette"
  },
  {
    id: "email-marketing",
    title: "High-Converting Email Marketing",
    description: "Own your audience by implementing automated lifecycle sequences that generate recurring sales. Focused on lead magnets, warm welcomes, abandons, and editorial newsletters.",
    benefits: [
      "Automated automated customer journey & welcome cascades",
      "Cart abandonment & checkout sequence recovery engines",
      "Weekly/bi-weekly value-rich editorial newsletter curation",
      "High deliverability optimization & advanced segment tagging"
    ],
    iconName: "Mail"
  },
  {
    id: "lead-generation",
    title: "Performance Lead Generation",
    description: "Fill your sales pipeline with premium B2B and B2C clients. We build optimized landing pages, lead capture funnels, and targeted paid ads designed for maximal qualified appointments.",
    benefits: [
      "Hyper-targeted Facebook, Instagram & LinkedIn Lead Ads",
      "Custom pre-qualification survey pathways to filter warm prospects",
      "Instant automated calendar syncing (Calendly, CRM setups)",
      "A/B testing of messaging, copywriting, and custom offers"
    ],
    iconName: "Users"
  },
  {
    id: "influencer-marketing",
    title: "Targeted Influencer Partnerships",
    description: "Leverage other people's built-in trust to scale your brand. I handle full-cycle micro-influencer recruitment, visual briefing, negotiations, contract management, and ROI tracking.",
    benefits: [
      "Data-backed creator matchmaking based on target visual demographics",
      "Clear campaign briefs guaranteeing messaging compliance",
      "Affiliate links, discount distribution, and UTM analytics",
      "End-to-end relations management and contract negotiation"
    ],
    iconName: "Sparkles"
  }
];

export const WORKFLOW_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call & Account Audit",
    description: "We analyze your existing marketing channels, pinpoint leaks in your sales funnel, and define ambitious growth goals aligned with your business structure.",
    details: [
      "Comprehensive social account audit checking visual tone and SEO",
      "Analysis of competitive benchmarks and audience positioning",
      "Detailed 30-minute strategic consultation outlining low-hanging fruit"
    ]
  },
  {
    step: 2,
    title: "Data-Backed Strategy & Planning",
    description: "I draft a bespoke, multi-channel blueprint. This includes custom target avatar profiles, visual style direction, specific advertising structures, and a 30-day content roadmap.",
    details: [
      "Custom customer avatar matrix pinpointing pain points and desires",
      "Content pillars outline specifying narrative types (educational, trust-building, promotional)",
      "Performance marketing budgeting blueprints with granular KPI metrics"
    ]
  },
  {
    step: 3,
    title: "Execute, Design & Launch",
    description: "Our plans turn into visual reality. I orchestrate copy creation, custom asset design, performance layout setup, email logic triggers, and target ad launch workflows.",
    details: [
      "High-converting copywriting and premium visual designs",
      "System integration of lead flows with designated CRM platforms",
      "Pixel tracker calibration and campaign activation schedules"
    ]
  },
  {
    step: 4,
    title: "Optimize, Scale & Report",
    description: "We analyze tracking data and refine setups. This includes active A/B testing of ad assets, audience scale expansions, flow optimization, and rich monthly KPI reporting.",
    details: [
      "Frequent optimization cycles to reduce Cost Per Lead (CPL)",
      "Scaling winner campaigns while maintaining stable Return On Ad Spend (ROAS)",
      "Transparent transparent dashboard reporting highlighting direct business revenue"
    ]
  }
];

export const TOOLS_PLATFORMS: ToolCategory[] = [
  {
    category: "Social Platforms",
    tools: [
      { name: "Meta Ads Manager", level: "Expert", usage: "Scaling Facebook & IG Campaigns" },
      { name: "Instagram Business", level: "Expert", usage: "Organic Branding & Reels Hype" },
      { name: "LinkedIn Professional", level: "Advanced", usage: "Corporate B2B Growth & Lead Gen" },
      { name: "TikTok Business", level: "Expert", usage: "Viral Video & Trends Optimization" },
      { name: "Pinterest Business", level: "Advanced", usage: "Visual Organic Traffic Funneling" }
    ]
  },
  {
    category: "Marketing & Creative Tools",
    tools: [
      { name: "Canva Pro", level: "Expert", usage: "Rapid Premium Brand Kit & Visual Layouts" },
      { name: "CapCut Pro", level: "Expert", usage: "Dynamic Cinematic Video & Reel Assembly" },
      { name: "SEMrush", level: "Advanced", usage: "SEO Keyword Curation & Competitor Intel" },
      { name: "BuzzSumo", level: "Advanced", usage: "Influencer Search & Viral Trend Analysis" }
    ]
  },
  {
    category: "Email Platforms",
    tools: [
      { name: "Klaviyo", level: "Expert", usage: "E-commerce CRM Flow & Cart Recovery Automation" },
      { name: "Mailchimp", level: "Expert", usage: "Subscriber Segment Management & Newsletters" },
      { name: "ActiveCampaign", level: "Advanced", usage: "Contextual Segment Tagging & Complex Journeys" }
    ]
  },
  {
    category: "Analytics & Tracking Tools",
    tools: [
      { name: "Google Analytics 4", level: "Expert", usage: "Behavior Tracking & Direct Sales Attribution" },
      { name: "Google Tag Manager", level: "Expert", usage: "Pixel Management & Custom Event Recording" },
      { name: "Looker Studio", level: "Advanced", usage: "Custom Dashboard Visualizer for Client Reports" },
      { name: "Hotjar", level: "Advanced", usage: "Landing Page Heatmaps & Click Funnel Auditing" }
    ]
  },
  {
    category: "CRM & Automation",
    tools: [
      { name: "HubSpot", level: "Expert", usage: "Pipeline Management, Filters & Form Captures" },
      { name: "Zoho CRM", level: "Advanced", usage: "Lead Ownership Handshakes & Action Triggers" },
      { name: "Zapier", level: "Expert", usage: "Automating Lead Delivery & Instant Notification Pings" },
      { name: "ManyChat", level: "Expert", usage: "IG & Messenger DM Direct Reply Automation Funnels" }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ecommerce-scale",
    title: "E-Commerce Boot Brand Scaling Campaign",
    client: "UrbanStrider Footwear",
    category: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "ROAS Boost", value: "4.8x ROAS" },
      { label: "Revenue Surge", value: "+$124K" },
      { label: "Cost Per Purchase", value: "-34% CPP" }
    ],
    challenge: "UrbanStrider had high product appeal but suffered from high user drop-offs at checkout and inefficient ad bidding structures, limiting their growth to a break-even 1.5x ROAS.",
    solution: "We restructured Meta Campaign Architecture using a 3-tier funnel: broad awareness videos, advantage+ shopping retargeting, and cart recovery Klaviyo automated flows. Creatives were rebuilt using dynamic, customer-centric reels.",
    results: [
      "Attained stable 4.8x return on ad spend across consecutive scale-up months.",
      "Recovered 22% of abandoned checkouts within 4 hours using multi-step automated emails.",
      "Scaled monthly profit margins by 60%+ while keeping customer acquisition cost optimized."
    ],
    launchDate: "Jan 2026"
  },
  {
    id: "b2b-lead-gen",
    title: "SaaS Pipeline Acceleration & Lead Gen Setup",
    client: "TalentGrid AI",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Booked Demos", value: "320+ Qualified" },
      { label: "Lead Magnets", value: "+210% Ctr" },
      { label: "Cost Per Demo", value: "-45% Cost" }
    ],
    challenge: "TalentGrid's B2B software had an ambiguous value proposition on LinkedIn, making direct demos expensive ($180 per demo) and low-convertible.",
    solution: "We engineered a premium lead magnet (State of AI Recruiting whitepaper), built a customized HubSpot survey landing page, and launched LinkedIn Retargeting ads filtering exclusively for enterprise decision makers.",
    results: [
      "Slashed demo booking price from $180 down to $99 without compromising lead qualification levels.",
      "Supplied their sales team with 320+ high-intent booking appointments in under 90 days.",
      "Developed an organic LinkedIn network expansion script feeding 1,200 newsletter subscribers."
    ],
    launchDate: "Nov 2025"
  },
  {
    id: "organic-viral-loop",
    title: "0 to 120K Organic Instagram Community Loop",
    client: "Zenith Activewear",
    category: "Organic Marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Followers Gained", value: "120K organically" },
      { label: "Reels Impressions", value: "8.4 Million" },
      { label: "Direct Web Clicks", value: "14,500+" }
    ],
    challenge: "Zenith Activewear was stuck with less than 2,000 idle followers, lacking clear brand persona, aesthetic direction, and a structured posting rhythm.",
    solution: "We defined a clean, luxury aesthetic direction. Implemented a strict 3x daily reel framework combining high-end typography, educational fitness trends, and interactive ManyChat comment automations ('Comment CODE for original guide').",
    results: [
      "Attained viral reach of 8.4M+ visual impressions within 4 months.",
      "Accumulated 120,000 highly targeted active lifestyle followers with 10% engagement rate.",
      "Automated ManyChat setup delivered 14.5K leads directly to their Shopify collection discount page."
    ],
    launchDate: "Mar 2026"
  },
  {
    id: "realestate-leads",
    title: "Luxury Real Estate Lead Generation Funnel",
    client: "Prestige Heights Living",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Exclusive Leads", value: "145 High-Net" },
      { label: "Conversion Rate", value: "+18.2% Book" },
      { label: "Return on Spend", value: "12.5x ROAS" }
    ],
    challenge: "Prestige Heights needed high-net-worth buyers for luxury residential units starting at $1.5M, but generic Facebook lead forms kept pulling in low-interest unqualified inquiries.",
    solution: "We designed a multi-step luxury qualification survey detailing pricing structures early. Applied Meta custom audience targeting utilizing zip-code clusters and lifestyle hobby filters, leading to pre-qualified prospects.",
    results: [
      "Secured 145 enterprise level, fully certified leads who declared explicit funding capability.",
      "Facilitated 8 residential unit sales directly attributed to the target marketing campaigns.",
      "Achieved an exceptional 12.5x ROI calculated directly from agent commission payouts."
    ],
    launchDate: "August 2025"
  },
  {
    id: "email-newsletter",
    title: "Symphony Skincare Email Revenue Activation",
    client: "Symphony Cosmetics",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Email Revenue Share", value: "38% of Sales" },
      { label: "Subscribers Added", value: "+28,000" },
      { label: "Open Rate Peak", value: "42.5% Avg" }
    ],
    challenge: "Symphony had a database of 40,000 inactive customers they only emailed on Christmas, missing out on hundreds of daily checkout sessions and community sales.",
    solution: "We segment-audited their database, established clean custom deliverability warmups, set up custom Klaviyo templates, and delivered 3 cohesive automated marketing channels: cart recovery, brand storytelling, and localized product tips.",
    results: [
      "Shifted email-owned revenue from a low 4% up to representing 38% of total e-commerce monthly bookings.",
      "Drove $48K in back-to-back attributed sales in the first 60 days of campaigns launch.",
      "Maintained a continuous average open rate parameter of 42.5% through targeted segment personalization."
    ],
    launchDate: "Feb 2026"
  },
  {
    id: "influencer-campaign",
    title: "Smart Ring Brand Influencer Ambassador Scale",
    client: "Aura Metrics Ring",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Creator Network", value: "12 partners" },
      { label: "User Content Views", value: "4.2M views" },
      { label: "Sales Reached", value: "+$85,000" }
    ],
    challenge: "Aura Metrics could not explain their new smart health device effectively via generic ad images, requiring trusted creators to explain, unbox, and demonstrate day-to-day wearing benefit.",
    solution: "We sourced and negotiated terms with 12 micro-influencers (10K - 150K followers) focused on sleep science & micro-habits. Deployed highly-guided aesthetic creative video templates that combined lifestyle benefits with custom code codes.",
    results: [
      "Generated 120+ custom high-aesthetic visual video clips used as ad assets alongside campaigns.",
      "Acquired 4.2M views across Instagram and TikTok videos in just 6 weeks.",
      "Direct promo codes generated $85,000 in immediate sales, returning 4.5x the influencer package cost."
    ],
    launchDate: "Dec 2025"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Benjamin Vance",
    role: "Founder & Creative Director",
    company: "UrbanStrider Footwear",
    feedback: "Ahsan completely transformed our scaling operations. We were stuck at a high cost-per-purchase, but his data-driven visual funnels drove our ROAS to 4.8x. He doesn't just manage advertisements; he acts as a genuine growth partner who understands visual luxury positioning perfectly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    highlightMetric: "4.8x Paid Ad ROAS"
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "VP of Product and Marketing",
    company: "TalentGrid AI",
    feedback: "Working with Ahsan Atif was our best marketing decision of 2025. Our dashboard lead flows have increased by 210%. His structured process, from precise audits to Calendly system connections, brought us 320 pre-qualified sales calls within normal costs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    highlightMetric: "+210% Pipeline Volume"
  },
  {
    id: "t3",
    name: "Marcus Sterling",
    role: "CEO & Growth VP",
    company: "Symphony Cosmetics Group",
    feedback: "His automated email marketing strategy is flawless. Our skincare database which was sitting completely dormant is now producing 38% of total e-commerce monthly income. High deliverability, stunning Canva edits, and responsive layouts.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    highlightMetric: "38% Recurring Email Revenue"
  }
];
