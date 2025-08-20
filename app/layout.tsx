import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import config from "../config";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: [
    config.personal.title,
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Frontend Development",
    "Backend Development",
    "Software Engineer",
    "Portfolio",
    ...config.techStack,
  ],
  authors: [{ name: config.personal.name }],
  creator: config.personal.name,
  publisher: config.personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.metadata.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.metadata.siteUrl,
    siteName: config.personal.name,
    title: config.metadata.title,
    description: config.metadata.description,
    images: [
      {
        url: config.personal.image,
        width: 447,
        height: 559,
        alt: `${config.personal.name} - ${config.personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.metadata.title,
    description: config.metadata.description,
    creator: "@_xyzl3kan",
    images: [config.personal.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#ea580c", // Orange-600
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": config.personal.name,
    "application-name": config.personal.name,
    "msapplication-TileColor": "#ea580c",
    "msapplication-config": "/browserconfig.xml",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    referrer: "origin-when-cross-origin",
    "X-UA-Compatible": "IE=edge",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.personal.name,
    jobTitle: config.personal.title,
    description: config.metadata.description,
    url: config.metadata.siteUrl,
    image: config.personal.image,
    sameAs: [
      config.social?.github,
      config.social?.linkedin,
      config.social?.twitter,
    ].filter(Boolean),
    email: config.social?.email,
    knowsAbout: config.techStack,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Self-Taught Developer",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: config.personal.title,
      description: config.personal.description,
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.personal.name,
    description: config.metadata.description,
    url: config.metadata.siteUrl,
    author: {
      "@type": "Person",
      name: config.personal.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.metadata.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${config.personal.name} Portfolio`,
    description: config.metadata.description,
    author: {
      "@type": "Person",
      name: config.personal.name,
    },
    creator: {
      "@type": "Person",
      name: config.personal.name,
    },
    dateCreated: new Date().toISOString(),
    genre: "Portfolio",
    keywords: config.techStack.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioStructuredData),
          }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
