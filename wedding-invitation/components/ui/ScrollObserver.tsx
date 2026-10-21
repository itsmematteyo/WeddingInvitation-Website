"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, make everything visible immediately
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".scroll-animate").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Optional: reset if scrolled far past so it re-animates when scrolling back
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight) {
              entry.target.classList.remove("is-visible");
            }
          }
        });
      },
      {
        root: null,
        // Triggers before the element fully enters (60px before bottom of viewport)
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.12,
      }
    );

    const observeElements = () => {
      const targets = document.querySelectorAll(".scroll-animate");
      targets.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check after dynamic renders
    const timer = setTimeout(observeElements, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
