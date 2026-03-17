import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const photos = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Sly'D behind the decks",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "Live performance",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">
              Gallery
            </div>
            <h1 className="text-4xl font-black uppercase md:text-6xl">
              Captured in Motion
            </h1>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
              />
              <div className="border-t border-white/10 px-5 py-4 text-sm uppercase tracking-[0.18em] text-white/75">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}