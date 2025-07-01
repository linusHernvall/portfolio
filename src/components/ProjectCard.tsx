import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
  github?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="card-modern group h-full flex flex-col overflow-hidden">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-muted/20 ">
          <Image
            src={project.image}
            alt={`${project.title} mockup`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pt-0">
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-medium px-2.5 py-1 bg-secondary/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
            >
              <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-200" />
              Code
            </Link>
          )}

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group/link ml-auto"
            >
              <span>View Project</span>
              <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
