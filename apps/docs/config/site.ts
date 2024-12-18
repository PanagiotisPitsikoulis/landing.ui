export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NextUI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://landing-ui.vercel.app/twitter-cards/nextui.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://landing-ui.vercel.app",
  creator: "@getnextui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://landing-ui.vercel.app",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://landing-ui.vercel.app/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description: "Make beautiful websites regardless of your design experience.",
    image: "https://landing-ui.vercel.app/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/PanagiotisPitsikoulis/landing.ui",
    twitter: "https://x.com/getnextui",
    docs: "https://landing-ui.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
};
