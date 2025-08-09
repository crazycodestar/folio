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
