import { brands } from "@/data/portfolio";

export default function Brands() {
  const track = [...brands, ...brands]; // duplicated for a seamless loop
  return (
    <section className="relative z-[2] mx-auto -mt-12 grid w-[min(1320px,calc(100%-32px))] grid-cols-1 items-center gap-4 border-b border-white/8 pb-8 pt-[72px] md:grid-cols-[200px_1fr] md:gap-8 md:pb-10 md:pt-[88px]">
      <p className="pl-2 text-[13px] leading-[1.35] font-bold text-[#e6ebe4] md:pl-[clamp(8px,2.5vw,32px)]">
        Brands &amp; teams <span className="md:block">I&apos;ve worked with</span>
      </p>
      <div className="np-marquee-mask overflow-hidden" aria-label="Brands worked with">
        <div className="flex w-max items-center gap-7 animate-marquee hover:[animation-play-state:paused]">
          {track.map((b, i) => (
            <span key={i} className="contents">
              <span className="whitespace-nowrap font-display text-[clamp(18px,1.7vw,24px)] font-bold tracking-[-0.01em] text-[#c8cfc6]">{b}</span>
              <i className="text-[14px] not-italic text-accent">✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
