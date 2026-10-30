"use client";

import { useEffect } from "react";

/**
 * Page-wide interactions for the static one-pager:
 * scroll reveal, animated counters, cursor glow and poster tilt.
 */
export default function Effects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- reveal on scroll ---------- */
    const revealEls = document.querySelectorAll<HTMLElement>(".np-reveal");
    if (!reduceMotion && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---------- counters ---------- */
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const run = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!reduceMotion && "IntersectionObserver" in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run(entry.target as HTMLElement);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    } else {
      counters.forEach((el) => {
        el.textContent = (el.dataset.count || "") + (el.dataset.suffix || "");
      });
    }

    /* ---------- cursor glow ---------- */
    const glow = document.querySelector<HTMLElement>(".np-cursor-glow");
    if (glow && finePointer && !reduceMotion) {
      let tx = 0, ty = 0, cx = 0, cy = 0, raf: number | null = null;
      const tick = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        glow.style.transform = `translate(${cx - 260}px, ${cy - 260}px)`;
        if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(tick);
        else raf = null;
      };
      const onMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        glow.style.opacity = "1";
        if (raf === null) raf = requestAnimationFrame(tick);
      };
      const onLeave = () => { glow.style.opacity = "0"; };
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeave);
        if (raf !== null) cancelAnimationFrame(raf);
      });
    }

    /* ---------- poster tilt ---------- */
    if (finePointer && !reduceMotion) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `translateY(-8px) scale(1.02) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;
        };
        const onLeave = () => { card.style.transform = ""; };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="np-cursor-glow" aria-hidden="true" />
      <div className="np-grain" aria-hidden="true" />
    </>
  );
}
