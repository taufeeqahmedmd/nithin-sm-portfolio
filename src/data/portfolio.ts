/* All portfolio copy lives here so the components stay purely presentational. */

export const person = {
  firstName: "Nithin",
  lastName: "Reddy",
  fullName: "Nithin Reddy",
  role: "Social Media Manager",
  field: "Digital Marketing",
  tagline: "I turn attention into action.",
  intro:
    "Building digital presence through content, campaigns and community across entertainment, education and brand marketing.",
  phone: "+91 91139 55857",
  phoneHref: "tel:+919113955857",
  email: "nithinreddy370@gmail.com",
  city: "Hyderabad",
  // Background-removed cutout generated from public/assets/images/Nithin.png
  photo: "/assets/images/nithin-cutout.png",
};

export const services = [
  "Social Media Management",
  "Content & Reels",
  "Paid Media & SEO",
  "Campaign Strategy",
];

export const brands = [
  "Aditya Music",
  "Ticket Factory",
  "Sreenidhi International School",
  "Golden Shutter Studio",
  "K-Innovative Hub",
  "Delhi Public School",
  "Pallavi Group of Schools",
  "EcoBharat",
  "Yuva Bharat Run",
];

export const profileCards = [
  {
    title: "Entertainment",
    desc: "Film and music promotions, social-first content and audience engagement.",
    tags: ["Aditya Music", "Ticket Factory"],
  },
  {
    title: "Education",
    desc: "School campaigns, sports promotions, admissions and event content.",
    tags: ["Sreenidhi", "DPS", "Pallavi"],
  },
  {
    title: "Brand Marketing",
    desc: "Organic marketing, paid media, SEO and digital presence.",
    tags: ["Golden Shutter", "K-Innovative Hub"],
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 300, suffix: "+", label: "Reels created" },
  { value: 200, suffix: "+", label: "Influencers brought together" },
  { value: 130, suffix: "K", label: "Followers grown on a music page" },
  { value: 25, suffix: "K+", label: "Participants, Yuva Bharat Run" },
];

export const timeline = [
  {
    years: "2020 — 2021",
    company: "Aditya Music",
    role: "Social Media Executive",
    desc: "Film and music promotions, social channels, audience development.",
  },
  {
    years: "2021 — 2022",
    company: "Ticket Factory",
    role: "Digital Marketing Executive",
    desc: "Movie promotion, scripts, short-form shoots and channel growth.",
  },
  {
    years: "2022 — 2023",
    company: "Sreenidhi International School",
    role: "Digital Marketing Executive",
    desc: "Sports campaigns, admissions and content production.",
  },
  {
    years: "2023 — 2024",
    company: "Golden Shutter Studio",
    role: "Digital Marketing Manager · Freelance",
    desc: "Paid media, SEO, website upkeep and social calendars.",
  },
  {
    years: "2024 — Present",
    company: "K-Innovative Hub Pvt Ltd",
    role: "Social Media Manager",
    desc: "Organic marketing, content operations and multi-brand social media.",
    current: true,
  },
];

export type Poster = { title: string; src: string };

export const adityaMusic = {
  num: "Chapter 01",
  title: "Aditya Music",
  role: "Social Media Executive",
  period: "March 2020 — May 2021",
  blurb:
    "Worked across social media promotions for major Telugu film projects, including campaign creatives, music-led content, short-form video and audience engagement.",
  posters: [
    { title: "Pushpa: The Rise", src: "/assets/posters/pushpa.jpg" },
    { title: "Vakeel Saab", src: "/assets/posters/vakeel-saab.jpg" },
    { title: "Love Story", src: "/assets/posters/love-story.jpg" },
    { title: "Most Eligible Bachelor", src: "/assets/posters/most-eligible-bachelor.jpg" },
    { title: "The Warrior", src: "/assets/posters/the-warrior.jpg" },
  ] as Poster[],
  listTitle: "Film & music promotion",
  list: [
    "Social media promotional posts and creative campaigns",
    "Song promotions and lyrical video promotion",
    "Teaser and trailer promotions",
    "Reels and short-form video content",
    "Captions, copywriting and campaign execution",
    "Audience engagement and social media growth",
  ],
  highlight: {
    label: "Community highlight",
    big: "130K",
    title: "Maa Paata Mee Nota",
    desc: "Social page creation, audience development and Facebook revenue activity for a music-led community page.",
  },
};

/** A film shown as a cinema ticket in the Ticket Factory stage. */
export type Ticket = Poster & {
  language: string;
  year: string;
  format: string;
  platform: string;
  role: string;
};

export const ticketFactory = {
  num: "Chapter 02",
  title: "Ticket Factory",
  role: "Digital Marketing Executive",
  period: "June 2021 — July 2022",
  blurb:
    "Movie marketing from the idea up: promotional scripts, campaign concepts, short-form shoots and channel growth for film releases.",
  tickets: [
    {
      title: "Laththi",
      src: "/assets/posters/laththi.jpg",
      language: "Tamil",
      year: "2022",
      format: "Teasers",
      platform: "Instagram",
      role: "Promo scripts",
    },
    {
      title: "Itlu Maredumilli Prajaneekam",
      src: "/assets/posters/itlu-maredumilli-prajaneekam.jpg",
      language: "Telugu",
      year: "2022",
      format: "Posters",
      platform: "Facebook",
      role: "Campaign concepts",
    },
    {
      title: "Panchathantram",
      src: "/assets/posters/panchathantram.jpg",
      language: "Telugu",
      year: "2022",
      format: "Reels",
      platform: "Instagram",
      role: "Scripts & shoots",
    },
    {
      title: "Bedurulanka 2012",
      src: "/assets/posters/bedurulanka-2012.jpg",
      language: "Telugu",
      year: "2023",
      format: "Promos",
      platform: "Instagram",
      role: "Campaign coordination",
    },
    {
      title: "Swathimuthyam",
      src: "/assets/posters/swathimuthyam.jpg",
      language: "Telugu",
      year: "2022",
      format: "Reels",
      platform: "YouTube",
      role: "Content execution",
    },
  ] as Ticket[],
  listTitle: "Film & digital promotion",
  list: [
    "Movie promotional script writing",
    "Social media campaigns for film releases",
    "Promotional concepts and creative ideas",
    "Short-form promotional content and shoot support",
    "Digital channel growth and audience engagement",
    "Campaign coordination and content execution",
  ],
};

export const compactChapters = [
  {
    num: "Chapter 03",
    title: "Sreenidhi International School",
    role: "Digital Marketing Executive",
    period: "June 2022 — June 2023",
    blurb: "Supporting the school's digital presence through content, communication and marketing execution.",
    pills: [
      "Social media content",
      "Content coordination",
      "School activities & events",
      "Creative support",
      "Publishing & scheduling",
      "Digital presence",
    ],
  },
  {
    num: "Chapter 04",
    title: "Golden Shutter Studio",
    role: "Digital Marketing Manager · Freelance",
    period: "July 2023 — July 2024",
    blurb: "Freelance digital marketing focused on planning, content coordination and online brand communication.",
    pills: [
      "Marketing planning",
      "Social media management",
      "Content development",
      "Campaign coordination",
      "Brand communication",
      "Execution & follow-up",
    ],
  },
];

export const kInnovative = {
  num: "Chapter 05 · Current",
  title: "K-Innovative Hub",
  role: "Social Media Manager",
  period: "August 2024 — Present",
  blurb:
    "A multi-brand social media chapter across education, events and sustainable products. Day-to-day page management combined with event-led storytelling and campaign execution.",
  logos: [
    { name: "Delhi Public School", src: "/assets/logos/dps.png" },
    { name: "Pallavi Group of Schools", src: "/assets/logos/pallavi-group.jpg" },
    { name: "EcoBharat", src: "/assets/logos/ecobharat.png" },
  ],
  managed: [
    { title: "Page management", desc: "Publishing and maintaining active social media pages across the brand portfolio." },
    { title: "Content planning", desc: "Planning posts and reels around events, campaigns and brand communication needs." },
    { title: "Reel production", desc: "Coordinating reel concepts, footage, editing requirements and publishing." },
    { title: "Event coverage", desc: "Turning school functions and large events into social-first content." },
    { title: "Community growth", desc: "Monitoring engagement and supporting follower and audience growth." },
    { title: "Cross-team coordination", desc: "Working with school teams, designers, photographers, videographers and stakeholders." },
  ],
  impact: [
    { big: "200", suffix: "+", label: "Influencers brought together", desc: "Coordinated influencer participation across campaigns and brand activity." },
    { big: "300", suffix: "+", label: "Reels created", desc: "Short-form video output across school events and brand pages.", accent: true },
  ],
  events: [
    { title: "Annual Days", desc: "Performances · highlights · school pride" },
    { title: "Glow Peace", desc: "Peace · wellbeing · participation" },
    { title: "Investiture Ceremonies", desc: "Leadership · oath-taking · student voice" },
    { title: "Feriya Y Fiesta · DPS Nacharam", desc: "Multi-day inter-school fest coverage" },
    { title: "Sports & School Events", desc: "Reels and posts beyond the campus" },
    { title: "Always-on Content", desc: "Planning · reels · engagement across pages" },
  ],
};

export const spotlight = {
  eyebrow: "04 / Special campaign",
  title: "Yuva Bharat Run",
  lead: "A large-scale youth and community fitness event in Hyderabad.",
  motto: "Run · Bond · Build.",
  tags: "Fitness / Youth / Community",
  image: "/assets/campaigns/ybr.jpeg",
  focus: [
    "Promotional content for a youth-focused community event",
    "Event storytelling through short-form video and social content",
    "Visibility around participation, fitness and community spirit",
    "Special presentation and campaign communication support",
  ],
  facts: [
    { label: "Participants", value: "25,000+" },
    { label: "Date", value: "29 March 2026" },
    { label: "Venue", value: "People's Plaza, Necklace Road, Hyderabad" },
    { label: "Categories", value: "500m · 2K · 5K" },
    { label: "Website", value: "yuvabharatrun.com", href: "https://yuvabharatrun.com" },
  ],
};
