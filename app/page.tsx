import { Nav, Footer, Eyebrow, CONTACT_EMAIL } from "@/components/site/chrome";

/* ————————————————— Image manifest · swap freely —————————————————
   PROOF: same twin characters across different scenes (the "zero drift" evidence)
   MAONI: Maoni watercolor series (black long hair · cat ears · amber eyes)
   CARDS: m2v card examples (added in phase 2)                                    */
const HERO_TRIO = [
  { src: "/proof/twins-1.jpg", caption: "By the window" },
  { src: "/proof/twins-2.jpg", caption: "Café afternoon" },
  { src: "/proof/twins-3.png", caption: "Rooftop sunset" },
];

const PROOF_GRID = [
  { src: "/proof/twins-4.jpg", caption: "Midnight noodles" },
  { src: "/proof/twins-5.png", caption: "Santorini" },
  { src: "/proof/twins-6.png", caption: "Under the stars" },
  { src: "/proof/twins-7.png", caption: "The Bund, Shanghai" },
  { src: "/proof/twins-8.jpg", caption: "Tree-lined road" },
  { src: "/proof/twins-9.jpg", caption: "Maple walk" },
];

const MAONI_FEATURE = {
  src: "/maoni/maoni-1.png",
  caption: "Rainy night — the wandering signature",
};

const STATS = [
  ["02", "characters"],
  ["09", "scenes"],
  ["01", "locked pipeline"],
  ["00", "drift"],
];

function Portrait({
  src,
  caption,
  masonry = false,
}: {
  src: string;
  caption: string;
  masonry?: boolean;
}) {
  return (
    <figure className={masonry ? "mb-6 break-inside-avoid" : "group"}>
      <div className="overflow-hidden rounded-xl bg-card shadow-[0_2px_16px_rgba(27,24,21,0.06)]">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Nav />

      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <Eyebrow>Sion Wu · Independent developer · Shanghai</Eyebrow>
        <h1 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
          I make AI visuals that{" "}
          <em className="text-accent">don&apos;t drift.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Illustrators go from 0 to 1. I take it from 1 to 100 —
          character-locked pipelines and batch production for AI imagery.
          Engineered, not prompted.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#proof"
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            See the proof
          </a>
          <a
            href="#services"
            className="rounded-full border border-ink/20 px-7 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            Work with me
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {HERO_TRIO.map((p) => (
            <Portrait key={p.src} src={p.src} caption={p.caption} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          The same two characters, three different scenes. One locked pipeline
          — zero drift.
        </p>
      </section>

      {/* ————— Proof ————— */}
      <section id="proof" className="border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Eyebrow>The proof</Eyebrow>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">
            Same characters. Every scene.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Most AI images are lottery tickets — same prompt, a different face
            every time. My pipeline locks the character first: a line-art
            reference with fixed anchors for hair, eyes, and features, verified
            scene by scene. The twins below were generated weeks apart, in
            different settings. They don&apos;t drift.
          </p>

          <div className="mt-12 columns-2 gap-6 md:columns-3">
            {PROOF_GRID.map((p) => (
              <Portrait key={p.src} src={p.src} caption={p.caption} masonry />
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
            {STATS.map(([n, label]) => (
              <div key={label} className="bg-paper px-6 py-8 text-center">
                <p className="font-display text-4xl font-medium text-accent">{n}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Maoni ————— */}
      <section id="maoni" className="border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Eyebrow>The quiet line</Eyebrow>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">
            Meanwhile, a girl wanders.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Maoni （猫娘 — &ldquo;cat girl&rdquo;) is my watercolor character IP: a
            quiet girl drifting softly between light and imagination, made for
            the global feed. Same engineering underneath — locked anchors,
            consistent in every scene.
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <Portrait
              src={MAONI_FEATURE.src}
              caption={MAONI_FEATURE.caption}
            />
          </div>
          <a
            href="https://www.instagram.com/maoni.world/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            Follow @maoni.world on Instagram ↗
          </a>
        </div>
      </section>

      {/* ————— Tools ————— */}
      <section id="tools" className="border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Eyebrow>Tools I ship</Eyebrow>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">
            m2v — Markdown in, beautiful cards out.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            The tool behind my daily card series. Paste Markdown, get a
            publish-ready visual card — built for creators who publish every
            day.
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {[
              ["LaTeX math,", "beautifully set"],
              ["Code highlighting", "in every major language"],
              ["A growing matrix", "of curated themes & templates"],
            ].map(([a, b]) => (
              <li key={a} className="bg-paper px-6 py-8">
                <p className="font-medium">{a}</p>
                <p className="text-muted">{b}</p>
              </li>
            ))}
          </ul>
          <figure className="mt-12">
            <div className="overflow-hidden rounded-xl border border-line bg-card shadow-[0_2px_16px_rgba(27,24,21,0.06)]">
              <img
                src="/tools/m2v-editor.png"
                alt="m2v in action: Markdown on the left, publish-ready card on the right"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
              m2v in action — Markdown on the left, publish-ready card on the
              right
            </figcaption>
          </figure>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=m2v%20early%20access`}
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            Get early access
          </a>
        </div>
      </section>

      {/* ————— Services ————— */}
      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Eyebrow>Work with me</Eyebrow>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">
            You design. I ship it at scale.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Batch production",
                d: "One character, one template — rendered 100× with zero drift. For creators and brands who need a series, not a single image.",
              },
              {
                t: "Custom pipeline",
                d: "Character lock + style lock + verification, then produce on demand. Your IP, my engineering. From 1 to 100.",
              },
              {
                t: "Self-hosting setup",
                d: "Your own media cloud — photos, video, notes — on hardware you own. No subscriptions, no lock-in.",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-xl border border-line bg-card p-8"
              >
                <h3 className="font-display text-xl font-medium">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`}
            className="mt-10 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Start with an email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
