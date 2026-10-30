import { person, services } from "@/data/portfolio";
import HeroPortrait from "./HeroPortrait";
import { Btn, delay } from "./ui";

export default function Hero() {
  return (
    <section className="relative z-[2] pt-2">
      <div className="np-hero-bg relative mx-auto flex min-h-[clamp(560px,86vh,820px)] w-[min(1320px,calc(100%-32px))] flex-col justify-between gap-10 overflow-hidden rounded-[26px] px-5 pb-6 pt-9 max-sm:min-h-0 max-sm:w-[calc(100%-16px)] sm:rounded-[32px] sm:px-[clamp(24px,4.5vw,64px)] sm:pb-[clamp(28px,4vw,48px)] sm:pt-[clamp(40px,6vw,88px)]">
        <div className="np-hero-glow pointer-events-none absolute left-1/2 top-[-10%] size-[760px] -translate-x-1/2" aria-hidden="true" />

        <div className="relative grid flex-1 grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.15fr_minmax(260px,360px)_1fr] lg:gap-6">
          {/* Left */}
          <div className="relative z-[2] md:col-start-1 md:row-start-1">
            <p className="np-reveal mb-3.5 text-[clamp(18px,1.6vw,22px)] font-semibold text-[#cfe9d8]">Hey, I&apos;m</p>
            <h1
              className="np-reveal font-display text-[clamp(52px,6.8vw,98px)] leading-[0.92] font-extrabold tracking-[-0.035em] text-white [text-shadow:0_10px_50px_rgba(0,0,0,.35)] max-[380px]:text-[50px]"
              style={delay(0.08)}
            >
              {person.firstName}
              <br />
              {person.lastName}
            </h1>
            <p className="np-reveal mt-6 flex items-start gap-2.5 text-[15px] font-semibold tracking-[0.02em] text-[#dbe7de]" style={delay(0.16)}>
              <span className="mt-[7px] size-[9px] shrink-0 rounded-full bg-accent-2 shadow-[0_0_0_5px_rgba(74,222,128,.18)]" />
              <span>
                {person.role} <span className="mx-1.5 text-accent">·</span> {person.field}
              </span>
            </p>
          </div>

          {/* Portrait */}
          <HeroPortrait />

          {/* Right */}
          <div className="md:col-start-1 md:row-start-2 md:max-w-[460px] lg:col-start-3 lg:row-start-1 lg:max-w-[340px] lg:justify-self-end">
            <h2 className="np-reveal font-display text-[clamp(22px,2.1vw,30px)] leading-[1.15] font-bold tracking-[-0.02em] text-white" style={delay(0.2)}>
              {person.tagline}
            </h2>
            <p className="np-reveal mt-4 text-[15px] leading-[1.65] text-[#c6d0c8]" style={delay(0.28)}>
              {person.intro}
            </p>
            <div className="np-reveal mt-6 flex flex-wrap gap-3" style={delay(0.36)}>
              <Btn href="#work" variant="accent" icon="↓">
                See my work
              </Btn>
              <Btn href="#contact" variant="ghost">
                Let&apos;s talk
              </Btn>
            </div>
          </div>
        </div>

        <ul className="relative grid grid-cols-1 gap-4 border-t border-white/12 pt-7 min-[380px]:grid-cols-2 md:grid-cols-4 md:gap-6">
          {services.map((s, i) => (
            <li key={s} className="np-reveal text-[13px] font-semibold text-[#cfe3d6]" style={delay(0.3 + i * 0.08)}>
              <span className="mr-0.5 text-accent-2">#</span>
              {String(i + 1).padStart(2, "0")}
              <strong className="mt-1.5 block text-[15px] font-semibold text-white">{s}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
