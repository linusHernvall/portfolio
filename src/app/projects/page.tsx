import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container-modern section-padding">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my work showcasing modern web development, clean
            architecture and user-focused design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {projects
            .sort((a, b) => b.id.localeCompare(a.id))
            .map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up"
              >
                <ProjectCard project={project} />
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up [animation-delay:0.5s]">
          <p className="text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-tertiary-foreground hover:text-tertiary-foreground/80 font-medium transition-colors duration-200"
          >
            Let's discuss your project
          </Link>
        </div>
      </div>
    </main>
  );
}
