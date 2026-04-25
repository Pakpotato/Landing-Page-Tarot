import { useRef } from "react"
import Container from "../components/Container"
import Reveal from "../components/Reveal"
import { testimonials } from "../data/siteData"

export default function Testimonials() {
  const carouselRef = useRef(null)

  function scrollCarousel(direction) {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.scrollBy({
      left:
        direction === "left"
          ? -carousel.clientWidth * 0.75
          : carousel.clientWidth * 0.75,
      behavior: "smooth",
    })
  }

  return (
    <section id="testimonials" className="bg-[#031f18] py-20 text-white">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              Testimoni
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Cerita dari yang sudah berkonsultasi
            </h2>

            <p className="mt-5 text-base leading-8 text-emerald-50/70">
              Beberapa pesan dan pengalaman dari klien setelah melakukan sesi
              konsultasi maupun live dari Ratu Kidul Tarot.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-10">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#02130f]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
              aria-label="Geser testimoni ke kiri"
            >
              ‹
            </button>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item) => (
                <article
                  key={item.image}
                  className="min-w-[260px] snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 sm:min-w-[300px] lg:min-w-[320px]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[420px] w-full rounded-2xl object-cover sm:h-[460px]"
                  />
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#02130f]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
              aria-label="Geser testimoni ke kanan"
            >
              ›
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}