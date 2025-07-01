"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="card-modern group h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden bg-muted/20">
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

          {/* Click hint */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              Click to view details
            </p>
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
