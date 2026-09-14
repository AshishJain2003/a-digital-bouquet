import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import fDaisy from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.53.jpg";
import fBougainvillea from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.54.jpg";
import fIxoraPink from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56.jpg";
import fIxoraPale from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_1.jpg";
import fOleander from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_2.jpg";
import fRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.56_3.jpg";
import fIxoraRed from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.55.jpg";
import fJatropha from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.55_1.jpg";
import fWhiteRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.57_1.jpg";
import fLantana from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.57_2.jpg";
import fPinkRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.57.jpeg";
import fGardenia from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.58_1.jpeg";
import fPlumeria from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.58_2.jpeg";
import fCanna from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.58_3.jpeg";
import fDesertRose from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.58.jpeg";
import fOleanderHand from "../assets/flowers/WhatsApp_Image_2026-09-14_at_18.27.59.jpeg";

const flowers = [
  fRose,
  fPinkRose,
  fWhiteRose,
  fBougainvillea,
  fIxoraRed,
  fIxoraPink,
  fIxoraPale,
  fLantana,
  fJatropha,
  fOleander,
  fOleanderHand,
  fGardenia,
  fPlumeria,
  fCanna,
  fDesertRose,
  fDaisy,
];

const petals = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 8 + ((i * 17) % 18),
  duration: 9 + ((i * 11) % 11),
  sway: 3 + ((i * 7) % 5),
  delay: -((i * 2.3) % 16),
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
      { threshold: 0.1 }
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

      <header className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="reveal font-serif-display max-w-4xl text-6xl leading-[1.05] font-semibold text-plum sm:text-8xl">
          Happy
          <br />
          <em className="text-primary">Birthday</em>
        </h1>
        <div className="reveal mt-16" style={{ animationDelay: "0.2s" }}>
          <div className="bloom overflow-hidden rounded-full border-4 border-card shadow-2xl">
            <img
              src={fRose.url}
              alt="Birthday flower"
              className="h-48 w-48 object-cover sm:h-64 sm:w-64"
            />
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-4 pb-32 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {flowers.map((img, i) => (
            <div
              key={img.asset_id}
              className="reveal mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <img
                src={img.url}
                alt="Birthday flower"
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div className="reveal bloom overflow-hidden rounded-full border-4 border-card shadow-2xl">
          <img
            src={fPinkRose.url}
            alt="Birthday flower"
            className="h-40 w-40 object-cover sm:h-52 sm:w-52"
          />
        </div>
      </footer>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday — A Garden For You" },
      {
        name: "description",
        content: "A birthday garden of real flowers, photographed and sent with love.",
      },
      { property: "og:title", content: "Happy Birthday — A Garden For You" },
      {
        property: "og:description",
        content: "Real flowers, photographed for a birthday across the miles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});
