"use client";

import { useRouter, usePathname } from "next/navigation";

export function useSectionNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (sectionId: string) => {
    // If we're already on the home page, just scroll to the section
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // If we're on another page, navigate to home page with the section hash
    router.push(`/#${sectionId}`);
  };

  return { navigateToSection };
}
