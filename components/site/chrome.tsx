import { ThemeToggle } from "./theme-toggle";

export const CONTACT_EMAIL = "hello@maoni.store"; // TODO: confirm with Sion
export const INSTAGRAM_URL = "https://www.instagram.com/maoni.world/";
export const BLOG_URL = "https://blog.mylabproject.com/";

const NAV_LINKS = [
  { href: "#proof", label: "Proof" },
  { href: "#maoni", label: "Maoni" },
  { href: "#tools", label: "Tools" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Maoni <span className="font-normal text-muted">· Sion Wu</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Instagram ↗
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-display max-w-2xl text-2xl leading-snug">
          Built by Sion Wu in Shanghai — 16 years writing code, 8 years keeping
          industrial machines alive. This site runs on his own stack.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
            Instagram ↗
          </a>
          <a href={BLOG_URL} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
            Blog ↗
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted hover:text-ink">
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="mt-12 text-xs text-muted">© 2026 Sion Wu · Maoni</p>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </p>
  );
}
