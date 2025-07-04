import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Images } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container-modern section-padding">
        <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                Linus Hernvall
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up [animation-delay:0.1s]">
              Fullstack Developer crafting modern web experiences with
              cutting-edge technologies
            </p>

            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s]">
              I build scalable applications using Next.js, TypeScript, and
              modern development practices. Passionate about clean code, user
              experience, and continuous learning.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:0.3s]">
            <Button asChild size="lg" className="btn-modern group">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View My Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="group">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>

          {/* Skills Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl w-full animate-slide-up [animation-delay:0.4s]">
            <div className="card-modern p-6 text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">
                React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML,
                CSS, PHP
              </p>
            </div>

            <div className="card-modern p-6 text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">
                Node.js, MongoDB, GraphQL, Supabase
              </p>
            </div>

            <div className="card-modern p-6 text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <Images className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Web Design</h3>
              <p className="text-sm text-muted-foreground">
                Figma, Accessibility (WCAG etc), Adobe CS
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
