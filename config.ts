export interface PortfolioConfig {
  personal: {
    name: string;
    initials: string;
    title: string;
    description: string;
    subtitle: string;
    experience: string;
    image: string;
  };
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    brand: string;
    links: Array<{
      href: string;
      label: string;
    }>;
  };
  techStack: string[];
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  resume?: {
    url: string;
    text: string;
  };
  projects: {
    title: string;
    description: string;
    image: [string, string, string];
    website?: string;
    github?: string;
    features: string[];
  }[];
  blogPosts: {
    title: string;
    subtitle: string;
    image: string;
    publishedAt: string;
    readTime?: string;
    url?: string;
  }[];
}

const config: PortfolioConfig = {
  personal: {
    name: "Olalekan Adekanmbi",
    initials: "OA",
    title: "Full-Stack Developer",
    description:
      "Full-stack developer passionate about creating innovative digital experiences",
    subtitle: "I love building innovative digital experiences",
    experience: "5+ years of experience in fullstack development",
    image: "/profile.png",
  },
  metadata: {
    title: "Portfolio | Olalekan Adekanmbi",
    description:
      "Full-stack developer passionate about creating innovative digital experiences",
  },
  navigation: {
    brand: "Portfolio",
    links: [
      { href: "#", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#blog", label: "Blog" },
    ],
  },
  techStack: [
    "Nextjs",
    "Nodejs",
    "Hono",
    "express",
    "Prisma",
    "Drizzle",
    "Postgres",
    "Mysql",
    "MongoDB",
    "AWS",
    "Clouldflare",
  ],
  cta: {
    primary: {
      text: "View My Work",
      href: "#projects",
    },
    secondary: {
      text: "Get In Touch",
      href: "#contact",
    },
  },
  social: {
    github: "https://github.com/crazycodestar",
    linkedin: "https://www.linkedin.com/in/olalekan-adekanmbi-a8623a246/",
    twitter: "https://x.com/_xyzl3kan",
    email: "olamilekanadekanmbi@gmail.com",
  },
  resume: {
    url: "/resume.pdf",
    text: "View Resume",
  },
  projects: [
    {
      title: "ConvertlyKit",
      description:
        "A set of tools for converting views into customers. I work on the backend and frontend of the project.",
      image: [
        "/convertlykit-large.png",
        "/convertlykit-small-1.png",
        "/convertlykit-small-2.png",
      ],
      website: "https://convertlykit.com",
      // github: "https://github.com/convertlykit/convertlykit",
      features: [
        "Multi-tenant Architecture",
        "Builtin Website builder",
        "Email Integration",
        "AI Powered Chatbot that integrates with Instagram and WhatsApp",
        "Payment Integration",
      ],
    },
    {
      title: "Tenant Management System",
      description:
        "An app that helps tenants and landlords communicate seamlessly. I was responsible for the app development using React Native and Expo",
      image: [
        "/tenant-large.png",
        "/tenant-small-1.png",
        "/tenant-small-2.png",
      ],
      // website: "https://tenant-management.com",
      // github: "https://github.com/tenant-management/tenant-management",
      features: [
        "Application Development",
        "Database Architecture",
        "UI/UX Design",
      ],
    },
    {
      title: "Ribara LMS",
      description:
        "A Learning Management System. Extended their PHP based Career management tool to integrate with a custom LMS I built with Nextjs",
      image: [
        "/ribara-large.png",
        "/ribara-small-1.png",
        "/ribara-small-2.png",
      ],
      website: "https://platform.ribara.com",
      // github: "https://github.com/ribara/ribara",
      features: [
        "Custom Learning Management System",
        "Integration with PHP based internal system",
        "Payment Integration",
      ],
    },
    {
      title: "Careersuitsme",
      description:
        "A tool that tests your temperament to help you find the best career path for you. I was responsible for the backend and frontend and integration with the AI model built by my colleague",
      image: [
        "/career-suit-large.png",
        "/career-suit-small-1.png",
        "/career-suit-small-2.png",
      ],
      website: "https://careersuitsme.com",
      // github: "https://github.com/careersuitsme/careersuitsme",
      features: [
        "AI Powered Temperament Test",
        "Integration with custom AI model",
        "Payment Integration",
      ],
    },
  ],
  blogPosts: [
    {
      title: "Resumes Are Dying—Here's What's Replacing Them",
      subtitle: "How modern hiring is leaving resumes behind",
      image: "/blog-resume.jpg",
      publishedAt: "4d ago",
      readTime: "5 min read",
      url: "https://blog.example.com/resumes-are-dying",
    },
    {
      title: "How We Fixed a Poorly Performing React Native App",
      subtitle:
        "Over the past year, our squad has been focused on transforming a sluggish app into a faster, more reliable React Native app. I'm...",
      image: "/blog-react-native.jpg",
      publishedAt: "4d ago",
      readTime: "8 min read",
      url: "https://blog.example.com/fixing-react-native-app",
    },
    {
      title: "Do Hard Things if You Want an Easy Life",
      subtitle: "The one skill that changes everything",
      image: "/blog-mountains.jpg",
      publishedAt: "4d ago",
      readTime: "6 min read",
      url: "https://blog.example.com/do-hard-things",
    },
  ],
};

export default config;
