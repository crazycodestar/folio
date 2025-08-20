import Projects from "@/components/main/Projects";
import HeroSection from "../components/main/HeroSection";
import Navigation from "../components/main/Navigation";
// import BlogPosts from "@/components/main/BlogPosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gray-50 dark:to-gray-900">
      <Navigation />
      <HeroSection />
      <Projects />
      {/* <BlogPosts /> */}
    </div>
  );
}
