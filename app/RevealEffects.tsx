"use client";

import { useEffect } from "react";

export default function RevealEffects() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(
      "[data-reveal], .hero-copy, .product-scene, .brand-statement, .problem-grid, .problem-strip, .section-heading, .step-card, .benefit-intro, .benefit-list article, .platform-card, .offline-section, .pricing-card, .faq-layout > div, .final-cta h2, .final-cta > p, .final-cta > .button, .cta-foot, .footer-inner"
    ));
    const motionSections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-motion]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible", "in-view"));
      motionSections.forEach((section) => section.classList.add("section-entered"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    items.forEach((item, index) => {
      item.setAttribute("data-reveal", "");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 75}ms`);
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.88 && rect.bottom >= window.innerHeight * 0.12) item.classList.add("is-visible", "in-view");
      else item.classList.add("will-reveal");
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible", "in-view");
        } else entry.target.classList.remove("in-view");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    items.forEach((item) => observer.observe(item));
    const sectionObserver = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("section-entered");
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    motionSections.forEach((section) => sectionObserver.observe(section));
    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
