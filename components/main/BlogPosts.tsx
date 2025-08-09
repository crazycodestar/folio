import config from "@/config";
import Image from "next/image";
import { Container } from "../container";

export default function BlogPosts() {
  return (
    <section className="py-20" id="blog">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest{" "}
            <span className="bg-orange-600 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development and
            technology.
          </p>
        </div>

        <div className="space-y-8 md:space-y-2">
          {config.blogPosts.map((post, index) => (
            <BlogPostCard key={post.title + index} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BlogPostCard({ post }: { post: (typeof config.blogPosts)[0] }) {
  return (
    <article className="group cursor-pointer">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto md:max-w-xl"
      >
        <a className="grid grid-cols-4 lg:grid-cols-4 gap-2 items-center md:p-2 hover:bg-foreground/5 transition-colors">
          {/* Content Section - Takes up 3/5 of the width */}
          <div className="col-span-3 space-y-4">
            {/* Title */}
            <h3 className="sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Subtitle */}
            <p className="text-foreground/70 text-sm leading-relaxed">
              {post.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex items-center space-x-4 text-sm text-foreground/60">
              <span>{post.publishedAt}</span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>

          {/* Image Section - Takes up 2/5 of the width */}
          <div className="col-span-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-orange-600/10 to-transparent">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </a>
      </a>
    </article>
  );
}
