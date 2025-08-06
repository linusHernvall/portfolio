"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Images } from "lucide-react";
import ResumeSection from "@/components/ResumeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import resumeData from "@/data/resume.json";
import testimonialsData from "@/data/testimonials.json";
import Image from "next/image";
import { useSectionNavigation } from "@/lib/navigation";

export default function Home() {
  const { navigateToSection } = useSectionNavigation();

  return (
    <main id="home" className="min-h-screen gradient-bg">
      <div className="container-modern section-padding">
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
            <div className="flex-1 flex md:w-40% justify-center lg:justify-end animate-slide-up [animation-delay:0.2s]">
              <div className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-full lg:h-120 ">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-xl"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/new-profile-2.png"
                    alt="Linus Hernvall - Fullstack Developer"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 600px, (min-width: 640px) 400px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left md:w-60%">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
                Hi, I&apos;m{" "}
                <span className="text-primary">Linus Hernvall</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed animate-slide-up [animation-delay:0.1s]">
                A Fullstack Developer passionate about design, user experience,
                and building meaningful digital solutions.
              </p>

              <p className="text-lg text-muted-foreground/80 leading-relaxed animate-slide-up [animation-delay:0.2s]">
                I value quality, collaboration and continuous growth - and
                I&apos;m always looking to create web experiences that make an
                impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:0.3s] pt-4">
                <Button asChild size="lg" className="group">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2"
                  >
                    View My Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" className="group">
                  <Link
                    href="#footer"
                    onClick={() => navigateToSection("footer")}
                    className="inline-flex items-center gap-2"
                  >
                    Get In Touch
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mx-auto max-w-4xl w-full animate-slide-up [animation-delay:0.4s]">
          <div className="card-modern p-6 text-center group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">
              HTML, CSS, React, Next.js, JavaScript, TypeScript, Tailwind CSS,
              PHP, Bliss, WordPress, Sanity
            </p>
          </div>

          <div className="card-modern p-6 text-center group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">
              Node.js, Express, MongoDB, GraphQL, Supabase
            </p>
          </div>

          <div className="card-modern p-6 text-center group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
              <Images className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Web Design</h3>
            <p className="text-sm text-muted-foreground">
              Figma, Accessibility (WCAG etc), Photoshop, Illustrator, Premiere
              Pro
            </p>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <ResumeSection data={resumeData} />

      {/* Testimonials Section */}
      <TestimonialsSection data={testimonialsData} />
    </main>
  );
}
