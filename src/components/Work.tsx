import Image from "next/image";
import { adityaMusic, compactChapters, kInnovative, ticketFactory } from "@/data/portfolio";
import FilmStage from "./FilmStage";
import TicketStage from "./TicketStage";
import { Eyebrow, Lead, LiveDot, NumList, Panel, SectionIntro, delay } from "./ui";

function ChapterHead({ num, title, role, period, blurb, live }: { num: string; title: string; role: string; period: string; blurb: string; live?: boolean }) {
  return (
    <header className="np-reveal mb-10 grid items-end gap-5 md:grid-cols-2 md:gap-10">
      <div>
        <span
          className={`mb-3.5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent ${
            live ? "rounded-full border border-accent/30 bg-accent/12 px-3 py-1.5" : ""
          }`}
        >
          {live && <LiveDot />}
          {num}
        </span>
        <h3 className="font-display text-[clamp(30px,3.8vw,52px)] leading-none font-extrabold tracking-[-0.025em]">{title}</h3>
        <p className="mt-3 text-[14px] font-semibold text-muted">
          {role} <span className="mx-2 text-accent">·</span> {period}
        </p>
      </div>
      <p className="max-w-[520px] text-[16px] leading-[1.65] text-[#c4ccc3] md:justify-self-end">{blurb}</p>
    </header>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative z-[2] py-[clamp(80px,10vw,140px)]">
      <div className="np-container">
        <SectionIntro
          eyebrow="03 / Selected work"
          tight
          title={
            <>
              Chapters
              <br />
              of work.
            </>
          }
        >
          <Lead className="np-reveal">Film campaigns, school storytelling and multi-brand social media. Here is what each chapter looked like on the ground.</Lead>
        </SectionIntro>

        {/* Chapter 01 */}
        <article id="aditya" className="mt-[clamp(40px,5vw,72px)] border-t border-white/8 pt-[clamp(32px,4vw,56px)]">
          <ChapterHead {...adityaMusic} />
          <FilmStage brand={adityaMusic.title} subtitle="Film promotion · Social Media Executive" posters={adityaMusic.posters} />
          <div className="mt-6 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <Panel className="np-reveal">
              <Eyebrow className="mb-5">{adityaMusic.listTitle}</Eyebrow>
              <NumList items={adityaMusic.list} />
            </Panel>
            <div className="np-highlight-bg np-reveal relative overflow-hidden rounded-3xl border border-accent-2/25 p-6 sm:p-8" style={delay(0.1)}>
              <Eyebrow>{adityaMusic.highlight.label}</Eyebrow>
              <p className="font-display text-[clamp(56px,6vw,84px)] leading-none font-extrabold tracking-[-0.04em] text-accent-2">{adityaMusic.highlight.big}</p>
              <p className="mt-2.5 text-[18px] font-bold">{adityaMusic.highlight.title}</p>
              <p className="mt-2.5 text-[14px] text-muted">{adityaMusic.highlight.desc}</p>
            </div>
          </div>
        </article>

        {/* Chapter 02 */}
        <article id="ticket-factory" className="mt-[clamp(40px,5vw,72px)] border-t border-white/8 pt-[clamp(32px,4vw,56px)]">
          <ChapterHead {...ticketFactory} />
          <TicketStage brand={ticketFactory.title} tickets={ticketFactory.tickets} />
          <Panel className="np-reveal mt-6">
            <Eyebrow className="mb-5">{ticketFactory.listTitle}</Eyebrow>
            <NumList items={ticketFactory.list} twoCol />
          </Panel>
        </article>

        {/* Chapters 03 + 04 */}
        <div className="mt-[clamp(40px,5vw,72px)] grid gap-5 md:grid-cols-2">
          {compactChapters.map((c, i) => (
            <article
              key={c.title}
              className="np-card-surface np-reveal rounded-3xl border border-white/8 p-6 transition-[transform,border-color] duration-500 ease-expo hover:-translate-y-1 hover:border-accent-2/35 sm:px-8 sm:py-9"
              style={delay(i * 0.1)}
            >
              <span className="mb-3.5 inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-accent">{c.num}</span>
              <h3 className="font-display text-[clamp(26px,2.6vw,34px)] leading-none font-extrabold tracking-[-0.025em]">{c.title}</h3>
              <p className="mt-3 text-[14px] font-semibold text-muted">
                {c.role} <span className="mx-2 text-accent">·</span> {c.period}
              </p>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.65] text-[#c4ccc3]">{c.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.pills.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/15 bg-white/3 px-3.5 py-2 text-[13px] font-semibold text-[#e1e6df] transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Chapter 05 */}
        <article id="kinnovative" className="mt-[clamp(40px,5vw,72px)] border-t border-white/8 pt-[clamp(32px,4vw,56px)]">
          <ChapterHead {...kInnovative} live />

          <div className="np-reveal mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kInnovative.logos.map((l) => (
              <div key={l.name} className="flex items-center gap-3.5 rounded-2xl border border-white/8 bg-white px-[18px] py-4 text-[14px] leading-[1.2] font-bold text-bg">
                <Image src={l.src} alt={l.name} width={48} height={48} className="size-12 rounded-lg object-contain" />
                <span>{l.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-3.5 rounded-2xl bg-accent px-[18px] py-4 text-[14px] leading-[1.2] font-bold text-ink">
              <strong className="w-12 text-center font-display text-[30px] font-extrabold">K</strong>
              <span>
                K-Innovative Hub
                <br />
                <small className="text-[11px] font-semibold uppercase tracking-[0.08em] opacity-75">Digital · Creative · Social</small>
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_.6fr_.6fr] lg:grid-rows-[auto_auto]">
            <Panel className="np-reveal md:col-span-2 lg:col-span-1 lg:row-span-2 transition-colors hover:border-white/15">
              <Eyebrow>What I managed</Eyebrow>
              <NumList items={kInnovative.managed} />
            </Panel>

            {kInnovative.impact.map((s, i) => (
              <div
                key={s.label}
                className={`np-reveal flex flex-col justify-end rounded-3xl border p-6 sm:p-8 ${
                  s.accent ? "border-accent bg-accent text-ink" : "border-white/8 bg-surface transition-colors hover:border-white/15"
                }`}
                style={delay(0.08 + i * 0.08)}
              >
                <p className="font-display text-[clamp(48px,5vw,72px)] leading-none font-extrabold tracking-[-0.04em]">
                  {s.big}
                  <em className={`not-italic ${s.accent ? "text-ink/60" : "text-accent-2"}`}>{s.suffix}</em>
                </p>
                <p className="mt-2.5 text-[15px] font-bold">{s.label}</p>
                <p className={`mt-1.5 text-[13px] ${s.accent ? "text-ink/70" : "text-muted"}`}>{s.desc}</p>
              </div>
            ))}

            <Panel className="np-reveal md:col-span-2 lg:col-start-2 lg:col-end-4 transition-colors hover:border-white/15" style={delay(0.1)}>
              <Eyebrow>Event storytelling</Eyebrow>
              <h4 className="mb-5 font-display text-2xl font-bold tracking-[-0.02em]">From campus moments to digital stories</h4>
              <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {kInnovative.events.map((e) => (
                  <li key={e.title} className="border-t border-white/8 py-3">
                    <strong className="block text-[14px] text-white">{e.title}</strong>
                    <span className="text-[12.5px] text-muted">{e.desc}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </article>
      </div>
    </section>
  );
}
