"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Expand,
} from "lucide-react";

const photos = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Sly'D live performance",
    tag: "Live",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
    tag: "Portrait",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
    tag: "Editorial",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "Club performance",
    tag: "Club",
    size: "md:col-span-2",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,31,36,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">
                Gallery
              </div>
              <h1 className="text-4xl font-black uppercase leading-none md:text-6xl">
                Captured in Motion
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                A curated visual selection from performances, portraits and club
                moments. Click any image to open it full screen.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">
                {photos.length}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                visuals
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">Live</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                performance-driven
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">
                Portraits
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                artist identity
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left ${photo.size}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
                {photo.tag}
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {photo.alt}
                  </div>
                </div>

                <div className="rounded-full border border-white/15 bg-black/40 p-2 backdrop-blur-sm transition group-hover:scale-105">
                  <Expand className="h-4 w-4 text-white/90" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="mx-auto flex max-h-full w-full max-w-6xl flex-col items-center">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-2xl">
              <img
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-5 flex w-full max-w-4xl items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#ff7a7e]">
                  {photos[activeIndex].tag}
                </div>
                <div className="mt-2 text-lg font-bold uppercase tracking-[0.08em] text-white">
                  {photos[activeIndex].alt}
                </div>
              </div>

              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                {activeIndex + 1} / {photos.length}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  );
}