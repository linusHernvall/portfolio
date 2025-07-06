"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ResumeData {
  experience: Experience[];
  education: Education[];
}

interface ResumeSectionProps {
  data: ResumeData;
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="card-modern pt-4 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg">{experience.position}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {experience.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {experience.location}
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 h-auto"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-3">
          {experience.description}
        </p>

        {isExpanded && (
          <div className="space-y-4 animate-slide-down">
            <div>
              <h5 className="font-semibold text-sm mb-2">Key Achievements:</h5>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-sm mb-2">Technologies:</h5>
              <div className="flex flex-wrap gap-1">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <Card className="card-modern pt-4 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{education.degree}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          <span className="font-medium">{education.institution}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {education.duration}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {education.location}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-3">
          {education.description}
        </p>

        <div>
          <h5 className="font-semibold text-sm mb-2">Achievements:</h5>
          <ul className="space-y-1">
            {education.achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ResumeSection({ data }: ResumeSectionProps) {
  return (
    <section className="">
      <div className="container-modern section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background in software
            development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-4">
              {/* map the expericence based on id */}
              {data.experience
                .sort((a, b) => b.id.localeCompare(a.id))
                .map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {data.education
                  .sort((a, b) => b.id.localeCompare(a.id))
                  .map((education) => (
                    <EducationCard key={education.id} education={education} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
