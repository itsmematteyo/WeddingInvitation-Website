"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-in";
  className?: string;
  delayMs?: number;
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  className = "",
  delayMs = 0,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), delayMs);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setIsVisible(true), delayMs);
            } else {
              setIsVisible(true);
            }
          } else {
            // When scrolled off screen, reset so it animates each time you scroll to it!
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        root: null,
        // Triggers smoothly before reaching the element
        rootMargin: "0px 0px -70px 0px",
        threshold: 0.12,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`scroll-animate scroll-${animation} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
