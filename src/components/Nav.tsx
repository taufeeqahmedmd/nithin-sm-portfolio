"use client";

import { useEffect, useState } from "react";
import { Btn } from "./ui";

const links = [
  { href: "#profile", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#spotlight", label: "Spotlight" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b py-[18px] transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-white/8 bg-bg/75 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="relative mx-auto flex w-[min(1240px,calc(100%-48px))] items-center justify-between gap-6">
        <a href="#top" className="font-display text-2xl font-extrabold tracking-[-0.02em]">
          Nithin<span className="text-accent">.</span>
        </a>

        <nav
          className={`${
            open
              ? "absolute inset-x-0 top-[calc(100%+16px)] flex flex-col gap-1.5 rounded-[20px] border border-white/15 bg-[#0e110e]/95 p-[18px] text-lg backdrop-blur-2xl"
              : "hidden"
          } md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-[14px] md:backdrop-blur-none`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group relative py-2.5 px-2 font-semibold text-[#cfd6cd] transition-colors hover:text-white md:p-0"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 hidden h-[1.5px] w-0 bg-accent transition-[width] duration-300 ease-expo group-hover:w-full md:block" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-2 py-2.5 font-semibold text-accent-2 md:hidden"
          >
            Get in touch
          </a>
        </nav>

        <div className="hidden md:block">
          <Btn href="#contact" variant="light" icon="→">
            Get in touch
          </Btn>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 md:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-0.5 w-[18px] bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-[18px] bg-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
    </header>
  );
}
