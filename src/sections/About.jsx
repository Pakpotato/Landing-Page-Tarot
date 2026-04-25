import Container from "../components/Container"
import Reveal from "../components/Reveal"

export default function About() {
  return (
    <section id="about" className="bg-[#02130f] py-20 text-white">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              Tentang Konsultasi
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Membantu membaca arah dengan lebih tenang
            </h2>

            <p className="mt-5 text-base leading-8 text-emerald-50/70 sm:text-lg">
              Ratu Kidul Tarot hadir sebagai ruang konsultasi spiritual untuk
              membantu memahami energi, situasi, dan pesan yang sedang kamu
              hadapi. Setiap sesi diarahkan untuk memberi ketenangan, sudut
              pandang baru, dan dorongan agar kamu bisa mengambil keputusan
              dengan lebih bijak.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-2xl">🌙</p>
              <h3 className="mt-4 font-semibold">Intuitif</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/60">
                Pembacaan dilakukan dengan rasa, intuisi, dan energi yang
                tenang.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-2xl">🍃</p>
              <h3 className="mt-4 font-semibold">Menenangkan</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/60">
                Cocok untuk kamu yang sedang bingung, cemas, atau butuh arahan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-2xl">✨</p>
              <h3 className="mt-4 font-semibold">Personal</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/60">
                Konsultasi disesuaikan dengan pertanyaan dan kondisi
                masing-masing.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}