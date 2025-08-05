"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionNavigation } from "@/lib/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigateToSection } = useSectionNavigation();

  const contactInfo = {
    email: "linus.hernvall@gmail.com",
    phone: "+46 706 50 57 54",
    location: "Gothenburg, Sweden",
    linkedin: "https://www.linkedin.com/in/linus-hernvall-babb673a/",
    github: "https://github.com/linusHernvall",
  };

  return (
    <footer
      id="footer"
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t"
    >
      <div className="container-modern section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => navigateToSection("home")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-full cursor-pointer"
              >
                Home
              </button>
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <button
                onClick={() => navigateToSection("resume")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-full cursor-pointer"
              >
                Resume
              </button>
              <button
                onClick={() => navigateToSection("testimonials")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-full cursor-pointer"
              >
                Testimonials
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="h-10 w-10 p-0"
              >
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="h-10 w-10 p-0"
              >
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="h-10 w-10 p-0"
              >
                <a href={`mailto:${contactInfo.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 w-full flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Linus Hernvall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
