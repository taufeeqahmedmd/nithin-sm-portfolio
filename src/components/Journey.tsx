import { timeline } from "@/data/portfolio";
import { Lead, LiveDot, SectionIntro } from "./ui";

export default function Journey() {
  return (
    <section id="journey" className="relative z-[2] py-[clamp(80px,10vw,140px)]">
      <div className="np-container">
        <SectionIntro
          eyebrow="02 / Career journey"
          tight
          title={
            <>
              Five chapters.
              <br />
              One evolving
              <br />
              skill set.
            </>
          }
        >
          <Lead className="np-reveal">
            From music-led film promotion to multi-brand social media management. Each chapter added a new layer: scripts, shoots, paid media,
            SEO and event storytelling.
          </Lead>
        </SectionIntro>

        <ol className="border-t border-white/8">
          {timeline.map((t, i) => (
            <li
              key={t.company}
              className="np-reveal group relative grid grid-cols-1 items-start gap-2.5 border-b border-white/8 py-9 transition-[padding] duration-500 ease-expo before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-gradient-to-r before:from-accent/10 before:to-transparent before:transition-[width] before:duration-500 before:ease-expo hover:pl-4 hover:before:w-full md:grid-cols-[180px_1fr_auto] md:gap-8"
            >
              <span className={`flex items-center gap-2 pt-1.5 text-[13px] font-bold uppercase tracking-[0.12em] ${t.current ? "text-accent-2" : "text-muted"}`}>
                {t.current && <LiveDot />}
                {t.years}
              </span>
              <div>
                <h3 className="font-display text-[clamp(22px,2.4vw,32px)] font-bold tracking-[-0.02em]">{t.company}</h3>
                <p className="mb-2.5 mt-1.5 text-[14px] font-semibold text-accent-2">{t.role}</p>
                <p className="max-w-[560px] text-muted">{t.desc}</p>
              </div>
              <span className="absolute right-0 top-7 font-display text-[clamp(32px,4vw,56px)] leading-none font-extrabold tracking-[-0.04em] text-white/5 transition-colors duration-300 group-hover:text-accent-2/35 md:static">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
