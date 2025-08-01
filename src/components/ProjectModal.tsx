"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/modal";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  isOpen,
  onOpenChange,
}: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Project Image */}
        {project.image && (
          <div className="relative h-64 overflow-hidden rounded-top-lg bg-muted/20">
            <Image
              src={project.image}
              alt={`${project.title} mockup`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        )}
        <div className="space-y-6 p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {project.description || `Details about ${project.title}`}
            </DialogDescription>
          </DialogHeader>

          {/* Learnings */}
          {project.learnings && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Learnings</h3>
              <div className="text-base text-foreground whitespace-pre-line">
                {project.learnings}
              </div>
            </div>
          )}

          {/* Technology Tags */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-sm font-medium px-3 py-1.5 bg-secondary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {/* Project Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-tertiary-foreground hover:text-tertiary-foreground/80 transition-colors duration-200 group/link"
              >
                <ExternalLink className="h-5 w-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                <span>Visit Live Project</span>
              </Link>
            )}

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-tertiary-foreground hover:text-tertiary-foreground/80 transition-colors duration-200 group/link"
              >
                <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-200" />
                View Source Code
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
