import { person } from "@/data/portfolio";
import { Btn, delay } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="relative z-[2] pb-[clamp(80px,10vw,140px)] pt-10">
      <div className="np-container">
        <div className="np-contact-bg relative overflow-hidden rounded-[32px] px-6 py-12 text-center text-ink sm:px-[clamp(24px,6vw,80px)] sm:py-[clamp(48px,7vw,96px)]">
          <div
            className="pointer-events-none absolute -right-[200px] -top-[300px] size-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.35),transparent_60%)]"
            aria-hidden="true"
          />
          <p className="np-reveal relative mb-[18px] text-[12px] font-bold uppercase tracking-[0.18em] text-ink/70">Let&apos;s work together</p>
          <h2
            className="np-reveal relative mx-auto max-w-[900px] font-display text-[clamp(36px,5.6vw,76px)] leading-none font-extrabold tracking-[-0.03em]"
            style={delay(0.08)}
          >
            Let&apos;s create something <em className="not-italic text-white">meaningful</em> together.
          </h2>
          <p className="np-reveal relative mt-[22px] text-[13px] font-bold uppercase tracking-[0.18em] opacity-75" style={delay(0.16)}>
            Content / Campaigns / Community / Growth
          </p>
          <div className="np-reveal relative mt-9 flex flex-wrap justify-center gap-3.5" style={delay(0.24)}>
            <Btn href={`mailto:${person.email}`} variant="light" size="lg" icon="→" className="max-sm:w-full max-sm:justify-center">
              {person.email}
            </Btn>
            <Btn
              href={person.phoneHref}
              variant="ghost"
              size="lg"
              className="border-ink/30 bg-white/20 text-ink hover:bg-white/30 max-sm:w-full max-sm:justify-center"
            >
              {person.phone}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
