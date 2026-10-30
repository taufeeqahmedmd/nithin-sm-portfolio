"use client";

import Image from "next/image";
import { useState } from "react";
import { person } from "@/data/portfolio";

/**
 * Portrait slot. Drop a photo at public/assets/nithin.jpg and it replaces the monogram placeholder.
 */
export default function HeroPortrait() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full max-w-[300px] justify-self-center sm:max-w-[360px] lg:max-w-[400px] md:col-start-2 md:row-start-1 md:row-span-2 lg:col-start-2 lg:row-span-1 np-reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
      {!missing ? (
        <Image
          src={person.photo}
          alt={person.fullName}
          fill
          priority
          sizes="(max-width: 640px) 300px, 400px"
          className="np-img-fade object-cover object-top contrast-[1.05] saturate-[.9]"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
          <span className="np-ring-inner absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-[52%] rounded-full border border-white/15 animate-breathe" />
          <span className="absolute left-1/2 top-1/2 aspect-square w-[94%] -translate-x-1/2 -translate-y-[52%] rounded-full border border-dashed border-white/10 animate-spin-slow" />
          <span className="np-monogram relative z-[1] font-display text-[clamp(90px,12vw,150px)] leading-none font-extrabold tracking-[-0.05em]">
            NR
          </span>
        </div>
      )}

      <Badge className="-left-[4px] bottom-[14%] sm:-left-[10%] sm:bottom-[12%]" num="6+" label={<>Years of<br />experience</>} />
      <Badge className="-right-[4px] top-[52%] sm:-right-[10%] sm:top-[50%] lg:right-[2%]" num="300+" label={<>Reels<br />created</>} delayed />
    </div>
  );
}

function Badge({ num, label, className, delayed }: { num: string; label: React.ReactNode; className: string; delayed?: boolean }) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-[18px] border border-white/12 bg-bg/55 px-3 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,.35)] backdrop-blur-lg animate-float sm:px-4 sm:py-3 ${className}`}
      style={delayed ? { animationDelay: "1.2s" } : undefined}
    >
      <span className="font-display text-[22px] leading-none font-extrabold tracking-[-0.03em] text-accent-2 sm:text-[28px]">{num}</span>
      <span className="text-[11px] leading-[1.25] font-semibold uppercase tracking-[0.08em] text-[#d2dad2]">{label}</span>
    </div>
  );
}
