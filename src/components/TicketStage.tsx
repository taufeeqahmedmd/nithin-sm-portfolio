"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Ticket } from "@/data/portfolio";
import { Eyebrow } from "./ui";

type Props = {
  brand: string;
  tickets: Ticket[];
};

const AUTO_MS = 4500;

/** Deterministic barcode widths (1–3px) seeded from a string, so SSR and client agree. */
function barcode(seed: string, count = 46) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const bars: number[] = [];
  for (let i = 0; i < count; i++) {
    h = (Math.imul(h, 1103515245) + 12345) >>> 0;
    bars.push(1 + ((h >>> 16) % 3));
  }
  return bars;
}

/**
 * "My Ticket" phone stage for Ticket Factory: a phone mock-up showing one cinema
 * ticket per film, auto-advancing, with a film picker beside it.
 */
export default function TicketStage({ brand, tickets }: Props) {
  const n = tickets.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % n), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, n]);

  /* swipe on the phone screen */
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className="np-stage-bg np-reveal relative overflow-hidden rounded-[32px] border border-white/8 px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative orbs, echoing the reference's floating circles */}
      <div className="pointer-events-none absolute -left-20 -bottom-24 size-72 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent-2/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[6%] top-[12%] size-3 rounded-full bg-accent-2/40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[11%] top-[20%] size-1.5 rounded-full bg-white/30" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] bottom-[16%] size-2 rounded-full bg-accent-2/50" aria-hidden="true" />

      <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
        {/* ---------------- phone ---------------- */}
        <div className="relative mx-auto w-[min(312px,100%)] min-w-0">
          <div className="pointer-events-none absolute inset-x-6 bottom-0 top-10 rounded-full bg-accent/30 blur-[60px]" aria-hidden="true" />

          <div className="relative rounded-[48px] border-[3px] border-[#2a2f2a] bg-[#0b0d0b] p-[9px] shadow-[0_50px_100px_rgba(0,0,0,.6),inset_0_0_0_1px_rgba(255,255,255,.08)]">
            {/* side buttons */}
            <span className="absolute -left-[5px] top-24 h-8 w-[3px] rounded-l bg-[#2a2f2a]" aria-hidden="true" />
            <span className="absolute -left-[5px] top-36 h-12 w-[3px] rounded-l bg-[#2a2f2a]" aria-hidden="true" />
            <span className="absolute -right-[5px] top-32 h-16 w-[3px] rounded-r bg-[#2a2f2a]" aria-hidden="true" />

            <div
              className="np-phone-screen relative flex aspect-[9/19] select-none flex-col overflow-hidden rounded-[39px] text-white"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={() => (startX.current = null)}
            >
              {/* notch */}
              <div className="absolute left-1/2 top-2 h-6 w-[38%] -translate-x-1/2 rounded-full bg-[#0b0d0b]" aria-hidden="true" />

              {/* status bar */}
              <div className="flex items-center justify-between px-6 pt-3.5 text-[11px] font-bold" aria-hidden="true">
                <span>9:41</span>
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 16 11" className="h-[10px] w-4" fill="currentColor">
                    <rect x="0" y="7" width="3" height="4" rx=".6" />
                    <rect x="4.3" y="5" width="3" height="6" rx=".6" />
                    <rect x="8.6" y="2.5" width="3" height="8.5" rx=".6" />
                    <rect x="12.9" y="0" width="3" height="11" rx=".6" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M3 9.5a13 13 0 0 1 18 0M6.5 13a8 8 0 0 1 11 0M10 16.5a3 3 0 0 1 4 0" />
                  </svg>
                  <span className="relative ml-0.5 h-[10px] w-[22px] rounded-[3px] border border-white/80">
                    <span className="absolute inset-[1.5px] right-[3px] rounded-[1.5px] bg-white" />
                    <span className="absolute -right-[3px] top-[2.5px] h-[4px] w-[2px] rounded-r bg-white/80" />
                  </span>
                </span>
              </div>

              {/* app chrome */}
              <div className="mt-3 flex items-center justify-between px-5">
                <button
                  type="button"
                  aria-label="Previous ticket"
                  onClick={() => go(active - 1)}
                  className="grid size-8 cursor-pointer place-items-center rounded-full transition-colors hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next ticket"
                  onClick={() => go(active + 1)}
                  className="grid size-8 cursor-pointer place-items-center rounded-full transition-colors hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </button>
              </div>

              <p className="mt-2 px-5 font-display text-[22px] font-bold tracking-[-0.01em]">My Ticket</p>

              {/* ticket track */}
              <div className="mt-4 w-full flex-1 overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 ease-expo"
                  style={{ transform: `translateX(-${active * 100}%)` }}
                >
                  {tickets.map((t, i) => (
                    <TicketCard key={t.title} ticket={t} index={i} brand={brand} active={i === active} />
                  ))}
                </div>
              </div>

              {/* dots */}
              <div className="flex items-center justify-center gap-1.5 pb-3 pt-3" role="tablist" aria-label="Tickets">
                {tickets.map((t, i) => (
                  <button
                    key={t.title}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Show ${t.title}`}
                    onClick={() => go(i)}
                    className={`h-1.5 cursor-pointer rounded-full transition-[width,background-color] duration-500 ease-expo ${
                      i === active ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* home indicator */}
              <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-white/60" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ---------------- film picker ---------------- */}
        <div className="min-w-0">
          <Eyebrow>Now showing</Eyebrow>
          <h4 className="font-display text-[clamp(24px,2.4vw,32px)] leading-[1.05] font-extrabold tracking-[-0.02em]">
            Five releases,
            <br />
            one ticket counter.
          </h4>
          <p className="mt-3 max-w-[440px] text-[14.5px] leading-[1.6] text-muted">
            Every film got its own digital campaign: scripts, teasers, reels and the social push around release week. Pick a
            film to pull its ticket.
          </p>

          <ul className="mt-6 grid gap-2">
            {tickets.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={t.title}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={isActive}
                    className={`group flex w-full cursor-pointer items-center gap-3.5 rounded-2xl border p-2 pr-4 text-left transition-[border-color,background-color,transform] duration-500 ease-expo ${
                      isActive
                        ? "border-accent-2/40 bg-white/8"
                        : "border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/6"
                    }`}
                  >
                    <span className="relative h-14 w-10 shrink-0 overflow-hidden rounded-lg bg-surface">
                      <Image src={t.src} alt="" fill sizes="40px" className="object-cover object-top" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block truncate text-[14px] font-bold ${isActive ? "text-white" : "text-[#dfe4dd]"}`}>{t.title}</span>
                      <span className="block truncate text-[12px] text-muted">
                        {t.language} · {t.year} · {t.format}
                      </span>
                      {isActive && (
                        <span className="mt-1.5 block h-[2px] overflow-hidden rounded-full bg-white/10">
                          <span
                            key={active}
                            className="block h-full rounded-full bg-accent-2 animate-progress"
                            style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                          />
                        </span>
                      )}
                    </span>
                    <span
                      className={`shrink-0 font-display text-[12px] font-extrabold tracking-[0.12em] ${
                        isActive ? "text-accent-2" : "text-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TicketCard({ ticket, index, brand, active }: { ticket: Ticket; index: number; brand: string; active: boolean }) {
  const bars = barcode(ticket.title);
  const serial = `TF ${ticket.year} ${String(index + 1).padStart(3, "0")} ${String(ticket.title.length * 37).padStart(4, "0")}`;
  return (
    <article
      className={`flex h-full w-full shrink-0 flex-col px-5 transition-[opacity,transform] duration-700 ease-expo ${
        active ? "opacity-100" : "scale-[.94] opacity-40"
      }`}
      aria-hidden={!active}
    >
      {/* upper stub */}
      <div className="rounded-t-[18px] bg-[#f4f7f3] text-ink shadow-[0_20px_40px_rgba(0,0,0,.35)]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[18px] bg-surface">
          <Image src={ticket.src} alt={`${ticket.title} poster`} fill sizes="280px" className="object-cover object-[50%_20%]" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent" aria-hidden="true" />
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2 py-[3px] text-[9px] font-extrabold uppercase tracking-[0.14em] text-ink">
            {brand}
          </span>
        </div>

        <div className="px-4 pb-3 pt-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/45">Movie</p>
          <p className="mt-0.5 line-clamp-2 font-display text-[16px] font-bold leading-[1.15] tracking-[-0.01em]">{ticket.title}</p>

          <dl className="mt-3 grid grid-cols-3 gap-x-2 gap-y-3">
            <Cell label="Language" value={ticket.language} />
            <Cell label="Release" value={ticket.year} center />
            <Cell label="Format" value={ticket.format} right />
            <Cell label="Platform" value={ticket.platform} />
            <Cell label="Role" value={ticket.role} right className="col-span-2" />
          </dl>
        </div>
      </div>

      {/* perforation with real cut-outs so the screen shows through */}
      <div className="np-ticket-notch relative h-5 bg-[#f4f7f3]" aria-hidden="true">
        <div className="absolute inset-x-5 top-1/2 border-t-2 border-dashed border-ink/15" />
      </div>

      {/* barcode stub with a torn edge */}
      <div className="np-ticket-tear rounded-b-[4px] bg-[#f4f7f3] px-4 pb-5 pt-1 text-ink">
        <div className="flex h-11 items-stretch justify-center gap-[2px]" aria-hidden="true">
          {bars.map((w, i) => (
            <span key={i} className="h-full rounded-[1px] bg-ink" style={{ width: w }} />
          ))}
        </div>
        <p className="mt-1.5 text-center font-mono text-[9.5px] font-semibold tracking-[0.32em] text-ink/70">{serial}</p>
      </div>
    </article>
  );
}

function Cell({
  label,
  value,
  center,
  right,
  className = "",
}: {
  label: string;
  value: string;
  center?: boolean;
  right?: boolean;
  className?: string;
}) {
  const align = right ? "text-right" : center ? "text-center" : "";
  return (
    <div className={`min-w-0 ${align} ${className}`}>
      <dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">{label}</dt>
      <dd className="mt-0.5 truncate text-[12px] font-bold leading-tight">{value}</dd>
    </div>
  );
}
