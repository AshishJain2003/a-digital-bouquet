import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import fDaisy from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.53.jpg.asset.json";
import fBougainvillea from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.54.jpg.asset.json";
import fIxoraPink from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56.jpg.asset.json";
import fIxoraPale from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_1.jpg.asset.json";
import fOleander from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_2.jpg.asset.json";
import fRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_3.jpg.asset.json";
import fIxoraRed from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.55.jpg.asset.json";
import fJatropha from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.55_1.jpg.asset.json";
import fWhiteRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.57_1.jpg.asset.json";
import fLantana from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.57_2.jpg.asset.json";

const flowers = [
  { img: fIxoraRed, name: "Red Ixora", note: "for the warmth you bring into every one of my days" },
  { img: fBougainvillea, name: "Bougainvillea", note: "bright and unstoppable, just like you" },
  { img: fRose, name: "The Red Rose", note: "because some feelings never needed new words" },
  { img: fWhiteRose, name: "White Rose", note: "for the calm I feel whenever I think of you" },
  { img: fLantana, name: "Lantana", note: "little suns, for the girl who lights up everything" },
  { img: fJatropha, name: "Peregrina", note: "a rare bloom for the rarest person I know" },
  { img: fIxoraPink, name: "Pink Ixora", note: "soft, sweet, and impossible to forget" },
  { img: fOleander, name: "Oleander", note: "grace that turns an ordinary street into a garden" },
  { img: fIxoraPale, name: "Blush Ixora", note: "the colour your name paints on my cheeks" },
  { img: fDaisy, name: "Little Sun", note: "one small flower, one enormous smile" },
];

const petals = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 71) % 100}%`,
  size: 10 + ((i * 13) % 12),
  duration: 11 + ((i * 7) % 9),
  sway: 3 + ((i * 5) % 4),
  delay: -((i * 1.7) % 14),
}));

function Petals() {
  return (
    <>
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.8,
            animationDuration: `${p.duration}s, ${p.sway}s`,
            animationDelay: `${p.delay}s, ${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-clip bg-background">
      <Petals />

      {/* Hero */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="reveal mb-6 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
          A garden, sent across the miles
        </p>
        <h1
          className="reveal font-serif-display max-w-4xl text-5xl leading-[1.05] font-medium text-foreground sm:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          Happy Birthday,
          <br />
          <em className="text-primary">my love</em>
        </h1>
        <p
          className="reveal mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          We haven't met yet — so until I can hand these to you in person,
          I grew you a garden out of photographs and everything I couldn't say out loud.
        </p>
        <div className="reveal mt-14" style={{ animationDelay: "0.45s" }}>
          <div className="bloom overflow-hidden rounded-full border-4 border-card shadow-2xl" style={{ animationDelay: "0.5s" }}>
            <img
              src={fRose.url}
              alt="A red rose, grown and photographed just for you"
              className="h-44 w-44 object-cover sm:h-56 sm:w-56"
            />
          </div>
        </div>
        <p className="reveal mt-12 text-xs tracking-[0.3em] text-muted-foreground uppercase" style={{ animationDelay: "0.6s" }}>
          Scroll to walk the garden ↓
        </p>
      </header>

      {/* Letter */}
      <section className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <div className="reveal">
          <span className="font-serif-display text-6xl text-petal">❝</span>
          <p className="font-serif-display -mt-4 text-2xl leading-relaxed text-foreground italic sm:text-3xl">
            Every flower here was real. I found them, stopped, and thought of you —
            each one a small wish for your year ahead. Distance kept my hands empty today,
            so I filled your screen instead.
          </p>
          <p className="mt-8 text-sm font-semibold tracking-[0.25em] text-primary uppercase">
            — yours, always
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative mx-auto max-w-6xl px-6 pb-32">
        <div className="reveal mb-16 text-center">
          <h2 className="font-serif-display text-4xl font-medium text-foreground sm:text-5xl">
            Ten blooms, ten reasons
          </h2>
          <p className="mt-4 text-muted-foreground">
            each one picked the moment it reminded me of you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {flowers.map((f, i) => (
            <figure
              key={f.name}
              className={`reveal group ${i % 3 === 1 ? "sm:translate-y-10" : ""}`}
              style={{ animationDelay: `${(i % 3) * 0.12}s` }}
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
                <img
                  src={f.img.url}
                  alt={`${f.name} — a flower photographed for her birthday`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 px-1 text-center">
                <p className="font-serif-display text-2xl text-foreground italic">{f.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Closing */}
      <footer className="relative bg-secondary px-6 py-28 text-center sm:py-36">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-serif-display text-4xl leading-tight font-medium text-foreground sm:text-5xl">
            Next year, I'll hand them to you
            <br />
            <em className="text-primary">in person.</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Until then — happiest of birthdays. May your year bloom brighter
            than every flower on this page.
          </p>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-border" />
            <span className="text-2xl">🌸</span>
            <span className="h-px w-12 bg-border" />
          </div>
          <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            made with love, across the miles
          </p>
        </div>
      </footer>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Love — A Garden For You" },
      {
        name: "description",
        content:
          "A birthday garden of real flowers, photographed and sent across the miles — ten blooms, ten reasons, all for her.",
      },
      { property: "og:title", content: "Happy Birthday, My Love — A Garden For You" },
      {
        property: "og:description",
        content: "Ten real flowers, photographed just for her birthday. A garden sent across the miles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});
