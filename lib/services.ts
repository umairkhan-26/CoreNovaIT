export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  showPlatforms?: boolean;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Custom-built or platform-based sites, engineered to convert.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Whether you need a fast Shopify storefront, a content-driven WordPress site, or a fully custom web application, every build follows the same staging-first, documented process — so nothing is ever a black box for you or your client.",
    highlights: [
      "Shopify, WordPress, WooCommerce, Wix & Squarespace builds",
      "Fully custom web development with sprint-based delivery",
      "Staging environment before anything goes live",
      "Documented plugin/app stack — no hidden dependencies",
      "Cross-browser and cross-device QA on every build",
      "Post-launch bug-fix window on every project",
    ],
    showPlatforms: true,
  },
  {
    slug: "app-development",
    title: "App Development",
    tagline: "Native and cross-platform apps built for scale.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    overview:
      "From a first MVP to a full production release, app builds follow the same sprint-based process as our web work — technical architecture proposed up front, visible progress every sprint, and full documentation on handover.",
    highlights: [
      "Technical architecture & stack proposal before development starts",
      "Sprint-based development with visible progress each sprint",
      "API and integration development, fully documented",
      "QA across devices and platforms before release",
      "Codebase docs and architecture diagram on handover",
      "Post-launch bug-fix window and optional SLA support",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    tagline: "Brand identity and visual assets that hold up everywhere.",
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Logos, brand systems, UI design, and marketing assets — designed to stay consistent whether they're on a website, a pitch deck, or a billboard.",
    highlights: [
      "Brand identity & logo design",
      "UI design for web and app products",
      "Marketing and social assets",
      "Style guides so any team can stay on-brand",
      "Source files handed over — fully yours, no lock-in",
    ],
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    tagline: "Animated content that brings a brand to life.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Short-form video, animated logos, product explainers, and social-ready motion content — built to fit the same brand system as everything else we produce.",
    highlights: [
      "Animated logo stings & brand intros",
      "Product explainer videos",
      "Social-first short-form motion content",
      "Ad creative built for paid campaigns",
      "Delivered in every format and aspect ratio you need",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "SEO, paid campaigns, and growth built around measurable results.",
    heroImage:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Marketing work is scoped and reported the same way everything else is — clear deliverables, clean monthly reporting you can forward as-is, and no vanity metrics.",
    highlights: [
      "SEO audits and on-page/technical optimization",
      "Paid search and paid social campaign management",
      "Conversion rate optimization",
      "Monthly reporting you can forward straight to your client",
      "Growth strategy tied to business goals, not just traffic",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    tagline: "Content and community management that stays consistent.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Content calendars, scheduling, and community management handled so a brand shows up consistently across every platform — without eating your team's time.",
    highlights: [
      "Content calendar planning & scheduling",
      "Platform-native content creation",
      "Community management & response handling",
      "Performance reporting each month",
      "Coordinated with design and motion for consistent output",
    ],
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    tagline: "Intelligence layered onto whatever platform you're already on.",
    heroImage:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    overview:
      "AI features are added as a modular layer on top of any platform we build, or one you already have — scoped, tested, and documented before launch, with no hidden API costs.",
    highlights: [
      "AI chatbots and virtual assistants for support & lead capture",
      "AI-powered product recommendations for Shopify/WooCommerce",
      "Content and copy generation embedded into CMS workflows",
      "Natural-language, AI-driven search",
      "Workflow automation connecting your site to internal tools",
      "Analytics and predictive insight dashboards",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
