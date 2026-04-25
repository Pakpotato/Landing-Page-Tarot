import { useRef } from "react"
import Container from "../components/Container"
import Reveal from "../components/Reveal"
import { siteData } from "../data/siteData"

const videos = [
  { image: "/Tiktok1.jpeg", title: "Pesan tarot harian" },
  { image: "/Tiktok2.jpeg", title: "Bacaan energi" },
  { image: "/Tiktok3.jpeg", title: "Pesan semesta" },
  { image: "/Tiktok4.jpeg", title: "Kartu pilihan" },
  { image: "/Tiktok5.jpeg", title: "Renungan spiritual" },
]

export default function TikTok() {
  const carouselRef = useRef(null)
  const profileUrl = "https://www.tiktok.com/@ratukidul2111"

  function scrollCarousel(direction) {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollAmount = carousel.clientWidth * 0.75

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="tiktok" className="bg-[#02130f] py-20 text-white">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              TikTok
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Lihat pesan dan bacaan terbaru
            </h2>

            <p className="mt-5 text-base leading-8 text-emerald-50/70">
              Ikuti konten tarot harian, pesan semesta, dan bacaan energi dari{" "}
              {siteData.username}.
            </p>

            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Buka TikTok
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-10">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#031f18]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
              aria-label="Scroll TikTok kiri"
            >
              ‹
            </button>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {videos.map((video) => (
                <a
                  key={video.image}
                  href={profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-w-[210px] snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07] sm:min-w-[240px] lg:min-w-[260px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                      TikTok
                    </div>

                    <div className="absolute inset-x-4 bottom-4">
                      <h3 className="text-lg font-bold leading-snug text-white">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-emerald-100/80">
                        Klik untuk melihat profil
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#031f18]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
              aria-label="Scroll TikTok kanan"
            >
              ›
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}