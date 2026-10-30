"use client";

import Image from "next/image";
import { useCallback, useState, type CSSProperties } from "react";
import type { Poster } from "@/data/portfolio";

type Props = {
  brand: string;      // wordmark above the stage, e.g. "Aditya Music"
  subtitle: string;   // second line in the player, e.g. "Film promotion · Aditya Music"
  posters: Poster[];
};

/**
 * Spotify-style "now playing" stage: a fanned 3D carousel of posters with a player bar.
 * Auto-advances while playing; clicking a side card or the controls jumps to it.
 */
export default function FilmStage({ brand, subtitle, posters }: Props) {
  const n = posters.length;
  const [active, setActive] = useState(0);
  // Auto-advance is driven by the progress bar's CSS animation, which globals.css disables
  // under prefers-reduced-motion, so no JS media-query check is needed here.
  const [playing, setPlaying] = useState(true);

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  const current = posters[active];

  return (
    <div className="np-stage-bg np-reveal relative overflow-hidden rounded-[32px] border border-white/8 px-3 pb-6 pt-7 sm:px-6 sm:pb-8 sm:pt-9">
      {/* floor glow */}
      <div
        className="pointer-events-none absolute bottom-[-60px] left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,.28),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />

      {/* wordmark */}
      <div className="relative flex items-center justify-center gap-2 text-[14px] font-bold text-[#e6ebe4]">
        <span className="grid size-6 place-items-center rounded-full bg-accent text-ink">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M5 9.5c4.5-2 9.5-2 14 0" />
            <path d="M6.5 13c3.5-1.4 7.5-1.4 11 0" />
            <path d="M8 16.3c2.6-1 5.4-1 8 0" />
          </svg>
        </span>
        {brand}
      </div>

      {/* carousel */}
      <div className="relative mt-4 h-[300px] sm:h-[380px] lg:h-[400px] [perspective:1400px]">
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {posters.map((p, i) => {
            let o = i - active;
            if (o > n / 2) o -= n;
            if (o < -n / 2) o += n;
            const d = Math.abs(o);
            const isActive = o === 0;
            const style: CSSProperties = {
              transform: `translate(calc(-50% + ${o * 72}%), -50%) rotateY(${-o * 13}deg) scale(${1 - d * 0.13})`,
              zIndex: 10 - d,
              opacity: 1 - d * 0.28,
              filter: `brightness(${1 - d * 0.28})`,
            };
            return (
              <button
                key={p.title}
                type="button"
                onClick={() => (isActive ? setPlaying((v) => !v) : go(i))}
                aria-label={isActive ? (playing ? "Pause" : "Play") : `Show ${p.title}`}
                aria-current={isActive}
                style={style}
                className={`absolute left-1/2 top-1/2 w-[min(230px,46vw)] cursor-pointer overflow-hidden rounded-[22px] border bg-surface-2 p-2 text-left transition-[transform,opacity,filter,border-color,box-shadow] duration-700 ease-expo ${
                  isActive
                    ? "border-accent-2/40 shadow-[0_40px_80px_rgba(0,0,0,.55),0_0_0_1px_rgba(74,222,128,.25)]"
                    : "border-white/10 shadow-[0_20px_50px_rgba(0,0,0,.4)]"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-surface">
                  <Image src={p.src} alt={`${p.title} poster`} fill sizes="230px" className="object-cover object-top" />
                </div>
                <div className="px-1.5 pb-1 pt-2.5">
                  <p className="truncate text-[13px] font-bold text-white sm:text-[14px]">{p.title}</p>
                  <p className="truncate text-[11px] text-muted">{brand}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* player bar */}
      <div className="relative mx-auto mt-5 flex w-full max-w-[780px] items-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-2 backdrop-blur-xl sm:gap-4 sm:py-2.5 sm:pl-5 sm:pr-3">
        <div className="flex items-center gap-1 sm:gap-2">
          <Ctl label="Previous" onClick={prev}>
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <path d="M6 5h2v14H6zM20 5.5v13L9.5 12z" />
            </svg>
          </Ctl>
          <Ctl label={playing ? "Pause" : "Play"} onClick={() => setPlaying((v) => !v)} primary>
            {playing ? (
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-4 translate-x-[1px]" fill="currentColor">
                <path d="M7 4.5v15L20 12z" />
              </svg>
            )}
          </Ctl>
          <Ctl label="Next" onClick={next}>
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <path d="M16 5h2v14h-2zM4 5.5v13L14.5 12z" />
            </svg>
          </Ctl>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-white/10">
            <Image key={current.src} src={current.src} alt="" fill sizes="40px" className="object-cover object-top" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-bold leading-tight text-white">{current.title}</p>
            <p className="truncate text-[11px] leading-tight text-muted">{subtitle}</p>
            <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div
                key={active}
                className="h-full rounded-full bg-accent-2 animate-progress"
                style={{ animationPlayState: playing ? "running" : "paused" }}
                onAnimationEnd={next}
              />
            </div>
          </div>
          <span className="hidden shrink-0 text-[11px] font-bold tracking-[0.12em] text-muted sm:block">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>

        <div className="hidden items-center gap-1 text-muted md:flex">
          <Icon label="Cast">
            <path d="M2 16.5v3h3M2 12.5a7.5 7.5 0 0 1 7.5 7M2 8.5A11.5 11.5 0 0 1 13.5 20M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
          </Icon>
          <Icon label="Equaliser">
            <path d="M4 7h16M4 12h16M4 17h16M9 5v4M15 10v4M7 15v4" />
          </Icon>
          <Icon label="Volume">
            <path d="M4 10v4h3l4 3.5v-11L7 10zM15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10" />
          </Icon>
        </div>
      </div>
    </div>
  );
}

function Ctl({ children, label, onClick, primary }: { children: React.ReactNode; label: string; onClick: () => void; primary?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`grid size-9 cursor-pointer place-items-center rounded-full transition-[transform,background-color] duration-300 ease-expo hover:scale-105 sm:size-10 ${
        primary ? "bg-white text-bg hover:bg-accent-2" : "text-[#e6ebe4] hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function Icon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10 hover:text-white" aria-label={label} role="img">
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}
