"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash navigation on the home page
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [pathname]);

  return null;
}
