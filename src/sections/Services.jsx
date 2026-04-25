import Container from "../components/Container"
import Reveal from "../components/Reveal"

const services = [
  "Percintaan & hubungan",
  "Karier & rezeki",
  "Keluarga & rumah tangga",
  "Keputusan penting",
  "Energi diri & spiritual",
  "Pesan semesta",
]

export default function Services() {
  return (
    <section id="services" className="bg-[#031f18] py-20 text-white">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              Layanan
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Topik yang bisa dikonsultasikan
            </h2>

            <p className="mt-5 text-base leading-8 text-emerald-50/70">
              Kamu bisa berkonsultasi tentang berbagai hal yang sedang
              mengganggu pikiran atau membutuhkan sudut pandang lebih dalam.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm font-medium text-emerald-50/90">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}