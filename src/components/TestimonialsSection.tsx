"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Quote, User, Building } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const formatContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => (
      <p
        key={index}
        className="text-sm text-muted-foreground mb-3 last:mb-0 leading-relaxed"
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <Card className="card-modern md:px-4 py-8 mb-10 hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
      <CardHeader className="pb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Quote className="h-8 w-8 text-primary" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl">{testimonial.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="font-medium">{testimonial.position}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="h-3 w-3" />
                {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="text-sm text-muted-foreground pb-4">
          {formatContent(testimonial.content)}
        </div>
      </CardContent>
    </Card>
  );
};

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials">
      <div className="container-modern section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            showArrows={true}
            showDots={true}
            autoPlay={true}
            interval={10000}
          >
            {data.testimonials
              .sort((a, b) => b.id.localeCompare(a.id))
              .map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
