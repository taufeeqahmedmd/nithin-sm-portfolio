import Image from "next/image";
import { spotlight } from "@/data/portfolio";
import { Eyebrow, Lead, NumList, Panel, SectionIntro, delay } from "./ui";

export default function Spotlight() {
  return (
    <section id="spotlight" className="np-spotlight-bg relative z-[2] py-[clamp(80px,10vw,140px)]">
      <div className="np-container">
        <SectionIntro
          eyebrow={spotlight.eyebrow}
          tight
          title={
            <>
              Yuva Bharat
              <br />
              Run.
            </>
          }
        >
          <Lead className="np-reveal">
            {spotlight.lead} <strong className="font-bold text-accent-2">{spotlight.motto}</strong>
          </Lead>
          <p className="np-reveal mt-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted" style={delay(0.08)}>
            {spotlight.tags}
          </p>
        </SectionIntro>

        <div className="np-reveal relative overflow-hidden rounded-[32px] border border-white/8">
          <Image src={spotlight.image} alt="Yuva Bharat Run campaign visual" width={1600} height={900} className="h-auto w-full" sizes="(max-width: 1240px) 100vw, 1240px" />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <Panel className="np-reveal">
            <Eyebrow className="mb-5">Campaign focus</Eyebrow>
            <NumList items={spotlight.focus} />
          </Panel>
          <Panel className="np-reveal" style={delay(0.1)}>
            {spotlight.facts.map((f) => (
              <div key={f.label} className="grid gap-1 border-t border-white/8 py-4 first:border-t-0 first:pt-0 sm:grid-cols-[110px_1fr] sm:gap-4">
                <span className="pt-[3px] text-[12px] font-bold uppercase tracking-[0.14em] text-muted">{f.label}</span>
                <span className="font-semibold text-white">
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noopener" className="border-b border-accent-2/30 text-accent-2">
                      {f.value} ↗
                    </a>
                  ) : (
                    f.value
                  )}
                </span>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </section>
  );
}
