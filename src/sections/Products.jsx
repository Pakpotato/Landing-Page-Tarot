import { useRef } from "react"
import Container from "../components/Container"
import { products, siteData } from "../data/siteData"

export default function Products() {
  const carouselRef = useRef(null)

  function getWhatsappUrl(productName) {
    return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
      `Halo Bunda Ratu, saya ingin order / tanya tentang ${productName}.`
    )}`
  }

  function scrollCarousel(direction) {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth * 0.75 : carousel.clientWidth * 0.75,
      behavior: "smooth",
    })
  }

  return (
    <section id="products" className="bg-[#02130f] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
            Produk & Paket
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Pilih layanan yang sesuai kebutuhanmu
          </h2>

          <p className="mt-5 text-base leading-8 text-emerald-50/70">
            Pilih paket konsultasi atau produk yang tersedia, lalu lanjutkan
            pemesanan melalui WhatsApp.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#02130f]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
            aria-label="Geser produk ke kiri"
          >
            ‹
          </button>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <article
                key={product.name}
                className="min-w-[280px] snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:min-w-[330px] lg:min-w-[360px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold">{product.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-emerald-50/65">
                    {product.description}
                  </p>

                  <p className="mt-4 font-semibold text-emerald-300">
                    {product.price}
                  </p>

                  <a
                    href={getWhatsappUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
                  >
                    Tanya via WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#02130f]/90 text-xl text-white shadow-lg transition hover:bg-emerald-400 hover:text-emerald-950 lg:flex"
            aria-label="Geser produk ke kanan"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  )
}