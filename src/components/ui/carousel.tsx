"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  children,
  className,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  interval = 10000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Create infinite loop by duplicating slides
  const createInfiniteSlides = () => {
    if (totalSlides === 0) return [];

    // Add the last slide at the beginning and first slide at the end
    const firstSlide = childrenArray[0];
    const lastSlide = childrenArray[totalSlides - 1];

    return [lastSlide, ...childrenArray, firstSlide];
  };

  const infiniteSlides = createInfiniteSlides();
  const totalInfiniteSlides = infiniteSlides.length;
  const [infiniteIndex, setInfiniteIndex] = React.useState(1); // Start at index 1 (first real slide)

  const nextSlideInfinite = () => {
    setIsTransitioning(true);
    setInfiniteIndex((prev) => {
      const nextIndex = prev + 1;

      // If we're at the last real slide, continue to the cloned first slide
      if (nextIndex === totalInfiniteSlides - 1) {
        return nextIndex;
      }

      return nextIndex;
    });
  };

  const prevSlideInfinite = () => {
    setIsTransitioning(true);
    setInfiniteIndex((prev) => {
      const prevIndex = prev - 1;

      // If we're at the first real slide, go to the cloned last slide
      if (prevIndex === 0) {
        return prevIndex;
      }

      return prevIndex;
    });
  };

  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [currentX, setCurrentX] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isResetting, setIsResetting] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle drag start
  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
    setDragOffset(0);
  };

  // Handle drag move
  const handleDragMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    setCurrentX(clientX);
    setDragOffset(clientX - startX);
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 100; // Minimum drag distance to trigger navigation

    if (dragOffset > threshold) {
      // Dragged right - go to previous slide
      setIsDragging(false);
      prevSlideInfinite();
    } else if (dragOffset < -threshold) {
      // Dragged left - go to next slide
      setIsDragging(false);
      nextSlideInfinite();
    } else {
      // No navigation, reset to original position
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Handle infinite loop reset without animation
  React.useEffect(() => {
    if (infiniteIndex === totalInfiniteSlides - 1) {
      // We're at the cloned first slide, reset to real first slide without animation
      const timer = setTimeout(() => {
        setIsResetting(true);
        setInfiniteIndex(1);
        setTimeout(() => {
          setIsResetting(false);
          setIsTransitioning(false);
        }, 50);
      }, 500);
      return () => clearTimeout(timer);
    } else if (infiniteIndex === 0) {
      // We're at the cloned last slide, reset to real last slide without animation
      const timer = setTimeout(() => {
        setIsResetting(true);
        setInfiniteIndex(totalInfiniteSlides - 2);
        setTimeout(() => {
          setIsResetting(false);
          setIsTransitioning(false);
        }, 50);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Reset transitioning state after normal transitions
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [infiniteIndex, totalInfiniteSlides]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isPlaying || !autoPlay) return;

    const timer = setInterval(() => {
      nextSlideInfinite();
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, autoPlay, interval, infiniteIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  if (totalSlides === 0) return null;

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${infiniteIndex * 100}%)`,
            transition: isResetting ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {infiniteSlides.map((child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 cursor-grab active:cursor-grabbing select-none"
              style={{
                width: "100%",
                transform:
                  isDragging && index === infiniteIndex && !isTransitioning
                    ? `translateX(${dragOffset}px)`
                    : "translateX(0)",
                transition: isDragging ? "none" : "transform 0.5s ease-in-out",
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 hidden lg:flex"
            onClick={prevSlideInfinite}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 hidden lg:flex"
            onClick={nextSlideInfinite}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === (infiniteIndex - 1) % totalSlides
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => setInfiniteIndex(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
