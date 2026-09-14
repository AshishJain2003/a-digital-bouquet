import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
  { src: fRose, name: "Rose" },
  { src: fPinkRose, name: "Pink Rose" },
  { src: fWhiteRose, name: "White Rose" },
  { src: fBougainvillea, name: "Bougainvillea" },
  { src: fIxoraRed, name: "Red Ixora" },
  { src: fIxoraPink, name: "Pink Ixora" },
  { src: fIxoraPale, name: "Pale Ixora" },
  { src: fLantana, name: "Lantana" },
  { src: fJatropha, name: "Jatropha" },
  { src: fOleander, name: "Oleander" },
  { src: fOleanderHand, name: "Oleander" },
  { src: fGardenia, name: "Gardenia" },
  { src: fPlumeria, name: "Plumeria" },
  { src: fCanna, name: "Canna" },
  { src: fDesertRose, name: "Desert Rose" },
  { src: fDaisy, name: "Daisy" },
];

const petals = Array.from({ length: 24 }, (_, i) => ({
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

function SparkleField() {
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    left: `${10 + (i * 73) % 80}%`,
    top: `${5 + (i * 37) % 85}%`,
    delay: `${(i * 0.4) % 3}s`,
    size: 3 + (i % 3),
  }));

  return (
    <>
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle-dot"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
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

function MessageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const messageLines = [
    {
      text: "These are all the flowers that I clicked and gave to you.",
      delay: "0.3s",
    },
    {
      text: "This is my last gift for you on this day — hopefully, I would have contributed a little to bringing a smile to your face",
      delay: "0.8s",
      heart: true,
    },
    {
      text: "Always want you to smile like this only, Manyaaaa.",
      delay: "1.4s",
    },
    {
      text: "Once again, Happy Birthday to you!!",
      delay: "2.0s",
      highlight: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      {/* Decorative top divider */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div
          className={`h-px bg-gradient-to-r from-transparent via-petal to-transparent ${isVisible ? "divider-animated" : ""}`}
          style={{ maxWidth: "120px" }}
        />
        <span className="text-petal text-2xl soft-float">✿</span>
        <div
          className={`h-px bg-gradient-to-r from-transparent via-petal to-transparent ${isVisible ? "divider-animated" : ""}`}
          style={{ maxWidth: "120px" }}
        />
      </div>

      {/* The letter */}
      <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card via-cream to-card p-8 sm:p-12 shadow-xl">
        <SparkleField />

        {/* Decorative quote marks */}
        <span className="absolute -top-4 left-8 text-6xl text-petal/30 font-serif-display select-none">
          "
        </span>

        <div className="space-y-6 sm:space-y-8">
          {messageLines.map((line, i) => (
            <p
              key={i}
              className={`font-serif-display text-xl sm:text-2xl leading-relaxed text-plum/90 ${isVisible ? "message-line" : "opacity-0"} ${line.highlight ? "font-semibold" : ""}`}
              style={{
                animationDelay: isVisible ? line.delay : "0s",
              }}
            >
              {line.text}
              {line.heart && (
                <span className="heartbeat inline-block ml-1 text-2xl">
                  ❤️
                </span>
              )}
              {line.highlight && (
                <span className="inline-block ml-1 text-2xl">🎂</span>
              )}
            </p>
          ))}
        </div>

        {/* Decorative closing quote mark */}
        <span className="absolute -bottom-4 right-8 text-6xl text-petal/30 font-serif-display select-none rotate-180">
          "
        </span>
      </div>

      {/* Signature */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <p
          className={`font-serif-display text-lg italic text-muted-foreground ${isVisible ? "message-line" : "opacity-0"}`}
          style={{ animationDelay: isVisible ? "2.6s" : "0s" }}
        >
          — with love 💐
        </p>
      </div>

      {/* Decorative bottom divider */}
      <div className="flex items-center justify-center gap-4 mt-16">
        <div
          className={`h-px bg-gradient-to-r from-transparent via-petal to-transparent ${isVisible ? "divider-animated" : ""}`}
          style={{ maxWidth: "120px", animationDelay: "2.8s" }}
        />
        <span className="text-petal text-2xl soft-float" style={{ animationDelay: "1s" }}>❀</span>
        <div
          className={`h-px bg-gradient-to-r from-transparent via-petal to-transparent ${isVisible ? "divider-animated" : ""}`}
          style={{ maxWidth: "120px", animationDelay: "2.8s" }}
        />
      </div>
    </section>
  );
}

function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-clip bg-background">
      <Petals />

      {/* ── Hero Section ── */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <SparkleField />

        <p
          className="reveal font-serif-display text-lg sm:text-xl tracking-widest uppercase text-muted-foreground mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          A Digital Bouquet
        </p>

        <h1 className="reveal font-serif-display max-w-4xl text-6xl leading-[1.05] font-semibold text-plum sm:text-8xl">
          Happy
          <br />
          <em className="gradient-text not-italic">Birthday</em>
        </h1>

        <p
          className="reveal font-serif-display mt-6 text-2xl sm:text-3xl text-primary/80 italic"
          style={{ animationDelay: "0.15s" }}
        >
          Manya ✨
        </p>

        <div className="reveal mt-14" style={{ animationDelay: "0.3s" }}>
          <div className="bloom overflow-hidden rounded-full border-4 border-card shadow-2xl ring-4 ring-petal/20">
            <img
              src={fRose}
              alt="A beautiful rose for your birthday"
              className="h-48 w-48 object-cover sm:h-64 sm:w-64"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="reveal absolute bottom-10 flex flex-col items-center gap-2"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Scroll down
          </p>
          <span className="soft-float text-petal text-xl">↓</span>
        </div>
      </header>

      {/* ── Gallery Intro ── */}
      <section className="relative mx-auto max-w-3xl px-6 py-16 text-center">
        <p
          className="reveal font-serif-display text-2xl sm:text-3xl leading-relaxed text-plum/80 italic"
        >
          Each flower here was found, photographed, and collected — just for you.
        </p>
      </section>

      {/* ── Flower Gallery ── */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {flowers.map((flower, i) => (
            <div
              key={flower.src}
              className="reveal group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-500 hover:shadow-xl"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={flower.src}
                  alt={flower.name}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Flower name overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-plum/70 to-transparent px-4 py-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="font-serif-display text-sm text-white/90 tracking-wider">
                    {flower.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Personal Message ── */}
      <MessageSection />

      {/* ── Footer ── */}
      <footer className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 pb-16 text-center">
        <div className="reveal bloom overflow-hidden rounded-full border-4 border-card shadow-2xl ring-4 ring-petal/20">
          <img
            src={fPinkRose}
            alt="A pink rose for you"
            className="h-40 w-40 object-cover sm:h-52 sm:w-52"
          />
        </div>

        <p
          className="reveal font-serif-display mt-10 text-xl sm:text-2xl text-plum/70 italic"
          style={{ animationDelay: "0.2s" }}
        >
          Made with all my love 🤍
        </p>

        <p
          className="reveal mt-3 text-sm text-muted-foreground tracking-widest uppercase"
          style={{ animationDelay: "0.4s" }}
        >
          A Digital Bouquet • 2026
        </p>
      </footer>
    </div>
  );
}

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Happy Birthday Manya — A Digital Bouquet For You" },
        {
          name: "description",
          content: "A birthday garden of real flowers, photographed and sent with love for Manya.",
        },
        { property: "og:title", content: "Happy Birthday Manya — A Digital Bouquet For You" },
        {
          property: "og:description",
          content: "Real flowers, photographed for a birthday across the miles.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    }),
    component: Index,
  }
);
