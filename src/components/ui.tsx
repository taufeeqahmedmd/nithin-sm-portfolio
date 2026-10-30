import type { CSSProperties, ReactNode } from "react";

/** Reveal delay helper: `style={delay(0.1)}` */
export const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-[18px] text-[12px] font-bold uppercase tracking-[0.18em] text-accent ${className}`}>
      {children}
    </p>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(36px,4.6vw,64px)] leading-[0.98] font-extrabold tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "accent" | "ghost";
  size?: "md" | "lg";
  icon?: string;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
};

export function Btn({ href, children, variant = "accent", size = "md", icon, className = "", style, external }: BtnProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full border font-bold whitespace-nowrap transition-[transform,background-color,color,border-color] duration-300 ease-expo hover:-translate-y-0.5";
  const sizes = size === "lg" ? "px-[26px] py-4 text-[16px]" : "px-5 py-[13px] text-[14px]";
  const variants = {
    light: "bg-white text-bg border-transparent",
    accent: "bg-accent text-ink border-transparent",
    ghost: "bg-white/5 text-text border-white/15 backdrop-blur-md hover:bg-white/10",
  }[variant];
  const iconBg = {
    light: "bg-accent-deep text-white",
    accent: "bg-ink text-accent-2",
    ghost: "bg-accent text-ink",
  }[variant];
  return (
    <a
      href={href}
      className={`${base} ${sizes} ${variants} ${className}`}
      style={style}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
      {icon && (
        <span
          className={`grid size-6 place-items-center rounded-full text-[13px] transition-transform duration-300 ease-expo group-hover:translate-x-[3px] ${iconBg}`}
        >
          {icon}
        </span>
      )}
    </a>
  );
}

export function Panel({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`rounded-3xl border border-white/8 bg-surface p-6 sm:p-8 ${className}`} style={style}>
      {children}
    </div>
  );
}

type NumItem = string | { title: string; desc: string };

export function NumList({ items, twoCol = false }: { items: NumItem[]; twoCol?: boolean }) {
  return (
    <ul className={twoCol ? "grid gap-x-10 md:grid-cols-2" : ""}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-4 border-t border-white/8 py-3.5 text-[15px] text-[#dfe4dd] first:border-t-0 first:pt-0 ${
            twoCol ? "md:nth-[2]:border-t-0 md:nth-[2]:pt-0" : ""
          }`}
        >
          <span className="shrink-0 pt-1 font-display text-[12px] font-extrabold tracking-[0.1em] text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          {typeof item === "string" ? (
            <span>{item}</span>
          ) : (
            <div className="text-[14px] text-muted">
              <strong className="mb-0.5 block font-bold text-white">{item.title}</strong>
              {item.desc}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  tight,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  tight?: boolean;
}) {
  return (
    <div className={`grid items-end gap-6 md:grid-cols-[1.05fr_1fr] md:gap-12 ${tight ? "mb-10 md:mb-14" : "mb-10 md:mb-16"}`}>
      <div>
        <Eyebrow className="np-reveal">{eyebrow}</Eyebrow>
        <H2 className="np-reveal" >
          {title}
        </H2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-[560px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[#d9ded8] ${className}`}>{children}</p>
  );
}

export function LiveDot() {
  return <span className="inline-block size-2 rounded-full bg-accent-2 animate-pulse-ring" />;
}
