import { person } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/8 pb-11 pt-9">
      <div className="np-container flex flex-col items-start gap-4 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <strong className="text-white">{person.fullName}</strong> · {person.role} · {person.field}
        </p>
        <p>
          Portfolio · {new Date().getFullYear()} · {person.city}
        </p>
        <a href="#top" className="font-bold text-accent-2">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
