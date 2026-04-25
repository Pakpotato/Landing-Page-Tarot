import Container from "../components/Container"
import Reveal from "../components/Reveal"
import { siteData } from "../data/siteData"

export default function CTA() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    "Halo Bunda Ratu, saya ingin konsultasi tarot."
  )}`

  return (
    <section className="bg-[#031f18] py-20 text-white">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-[radial-gradient(circle_at_top,#34d39922,transparent_35%),linear-gradient(135deg,#064e3b,#02130f)] px-6 py-12 text-center shadow-2xl shadow-black/20 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              Siap Konsultasi?
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Mulai dari pertanyaan kecil yang sedang mengganggu hatimu
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-emerald-50/70">
              Konsultasi dilakukan melalui WhatsApp agar lebih mudah, personal,
              dan nyaman.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-emerald-400 px-8 py-3.5 font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}