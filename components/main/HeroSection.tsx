import config from "@/config";
import Image from "next/image";
import { Container } from "../container";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <main className="flex flex-col items-center md:justify-center min-h-screen pt-24 pb-12">
      <Container className="md:grid md:grid-cols-2 md:gap-8 items-center">
        <div>
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Hi, I&apos;m{" "}
            <span className="bg-orange-600 bg-clip-text text-transparent">
              {config.personal.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-2 max-w-3xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-foreground">
              {config.personal.title}
            </span>{" "}
            {config.personal.subtitle}
          </p>
          {/* Experience */}
          <div className="border-b border-t border-foreground/10 my-4 py-2">
            <p className="text-sm sm:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {config.personal.experience}
            </p>
          </div>
          <div className="flex flex-wrap justify-center mb-6">
            {config.techStack.map((tech) => (
              <span
                key={tech}
                className="grow text-center px-4 py-2 bg-foreground/5 dark:bg-foreground/10 text-xs sm:text-sm font-medium text-foreground/80 border border-foreground/10"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Socials + Resume */}
          <div className="flex flex-col md:flex-row pb-6 w-full md:w-fit items-center justify-center md:justify-start gap-4">
            {config.resume && (
              <a
                href={config.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-600 text-white font-medium text-sm hover:scale-105 transition-all w-full md:w-fit text-center"
              >
                {config.resume.text}
              </a>
            )}
            <HeroSocialIcons />
          </div>
        </div>

        <ProfileImage className="ml-auto" />
        <ScrollIndicator />
      </Container>
      <BackgroundDecorations />
    </main>
  );
}

function BackgroundDecorations() {
  return (
    <>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
    </>
  );
}

function HeroSocialIcons() {
  const { social } = config;

  if (!social) return null;

  return (
    <div className="flex items-center space-x-4">
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      )}

      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}

      {social.twitter && (
        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      )}

      {social.email && (
        <a
          href={`mailto:${social.email}`}
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2"></div>
      </div>
    </div>
  );
}

function ProfileImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full md:max-w-96 aspect-[5/7] bg-gradient-to-b from-orange-600 via-transparent to-transparent overflow-hidden",
        className
      )}
    >
      <Image
        src={config.personal.image}
        alt="Profile"
        width={447}
        height={559}
        className="object-cover object-bottom w-full h-full"
      />
    </div>
  );
}
