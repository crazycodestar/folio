import config from "@/config";
import Image from "next/image";
import { Container } from "../container";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-orange-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            building innovative digital experiences.
          </p>
        </div>

        <div className="space-y-20">
          {config.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof config.projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "grid gap-8 items-center",
        "lg:grid-cols-2",
        !isEven && "lg:grid-cols-2"
      )}
    >
      {/* Images Bento Grid */}
      <div className={cn("order-1", !isEven && "lg:order-2")}>
        <BentoGrid images={project.image} />
      </div>

      {/* Project Details */}
      <div className={cn("order-2 space-y-6", !isEven && "lg:order-1")}>
        {/* Title and Description */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-foreground/80"
              >
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 pt-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center w-full md:w-auto items-center space-x-2 px-4 py-2 bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
            >
              <WebsiteIcon />
              <span>Visit Website</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center w-full md:w-auto items-center space-x-2 px-4 py-2 border border-foreground/20 text-foreground font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all"
            >
              <GitHubIcon />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function BentoGrid({ images }: { images: [string, string, string] }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Large image - spans 2x2 */}

      <Image
        src={images[0]}
        alt="Project screenshot"
        width={1600}
        height={900}
        className="object-cover w-full"
      />

      <div className="flex flex-row gap-2">
        {/* Medium image - spans 2x1 */}
        <div>
          <Image
            src={images[1]}
            alt="Project screenshot"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
        {/* Small image - spans 1x1 */}
        <div>
          <Image
            src={images[2]}
            alt="Project screenshot"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function WebsiteIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
