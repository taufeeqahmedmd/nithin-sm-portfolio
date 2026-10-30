import { profileCards, stats } from "@/data/portfolio";
import { Btn, Lead, SectionIntro, delay } from "./ui";

export default function Profile() {
  return (
    <section id="profile" className="relative z-[2] py-[clamp(80px,10vw,140px)]">
      <div className="np-container">
        <SectionIntro
          eyebrow="01 / Profile"
          title={
            <>
              Content.
              <br />
              Campaigns.
              <br />
              Community.
            </>
          }
        >
          <Lead className="np-reveal">
            A career built across content, campaigns and audiences. Social media management and digital marketing experience across
            entertainment, education and brand-led businesses.
          </Lead>
          <p className="np-reveal mt-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted" style={delay(0.08)}>
            Strategy / Content / Campaigns / Growth
          </p>
          <Btn href="#contact" icon="→" className="np-reveal mt-7" style={delay(0.16)}>
            Get in touch
          </Btn>
        </SectionIntro>

        <div className="grid gap-5 md:grid-cols-3">
          {profileCards.map((c, i) => (
            <article
              key={c.title}
              className="np-card np-card-surface np-reveal overflow-hidden rounded-3xl border border-white/8 px-7 pb-7 pt-8 transition-[transform,border-color] duration-500 ease-expo hover:-translate-y-1.5 hover:border-white/15"
              style={delay(i * 0.1)}
            >
              <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-2.5 mt-5 font-display text-[26px] font-bold tracking-[-0.02em]">{c.title}</h3>
              <p className="text-[15px] text-muted">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-[#d6dcd4]">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="np-reveal mt-16 grid grid-cols-2 gap-x-6 border-y border-white/8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 lg:py-8 lg:pr-6 ${i < stats.length - 1 ? "lg:border-r lg:border-white/8" : ""} ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <span className="block font-display text-[clamp(36px,4vw,56px)] leading-none font-extrabold tracking-[-0.03em] text-white" data-count={s.value} data-suffix={s.suffix}>
                0{s.suffix}
              </span>
              <span className="mt-2.5 block text-[13px] text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
