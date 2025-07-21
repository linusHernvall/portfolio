"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
  github?: string;
  learnings?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="card-modern group h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Floating action buttons */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden bg-muted/20">
            <Image
              src={project.image}
              alt={`${project.title} mockup`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight transition-colors duration-200">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0">
          {/* Technology Tags */}
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

          {/* Learnings */}
          {project.learnings && (
            <div className="mb-4">
              <div className="text-xs font-semibold text-muted-foreground mb-1">
                Learnings
              </div>
              <div className="text-sm text-foreground line-clamp-3">
                {project.learnings}
              </div>
            </div>
          )}

          {/* Click hint */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-tertiary-foreground transition-colors duration-200">
              <Eye className="w-4 h-4" />
              <span>Click to view details</span>
            </div>
          </div>
        </CardContent>

        {/* Shimmer effect on hover */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" /> */}
      </Card>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
