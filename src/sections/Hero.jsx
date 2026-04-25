import Container from "../components/Container"
import Reveal from "../components/Reveal"
import { siteData } from "../data/siteData"

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    "Halo Bunda Ratu, saya ingin konsultasi tarot."
  )}`

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#031f18] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f7a5a33,transparent_35%),linear-gradient(180deg,#04291f_0%,#031f18_55%,#02130f_100%)]" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

      <Container className="relative flex min-h-dvh items-center pt-28 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-sm text-emerald-100">
                {siteData.tagline}
              </p>

              <h1 className="mx-auto max-w-3xl text-[clamp(2.25rem,8vw,4.5rem)] font-bold leading-tight tracking-tight lg:mx-0">
                {siteData.headline}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-50/75 sm:text-lg lg:mx-0">
                {siteData.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-400 px-7 py-3.5 text-center font-semibold text-emerald-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300"
                >
                  Konsultasi via WhatsApp
                </a>

                <a
                  href="#tiktok"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Lihat TikTok
                </a>
              </div>

              <div className="mx-auto mt-8 grid w-full max-w-sm grid-cols-2 gap-3 sm:max-w-md lg:mx-0 lg:max-w-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-emerald-300">
                    {siteData.tiktokFollowers}
                  </p>
                  <p className="mt-1 text-sm text-emerald-50/60">
                    Followers TikTok
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-emerald-300">
                    {siteData.tiktokLikes}
                  </p>
                  <p className="mt-1 text-sm text-emerald-50/60">
                    Total Likes
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-emerald-300/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#062b20] p-5">
                  <div className="aspect-[4/5] rounded-[1.25rem] border border-yellow-200/20 bg-[radial-gradient(circle_at_top,#d7b46a33,transparent_32%),linear-gradient(160deg,#0b4f3a,#031d16)] p-5">
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-yellow-100/20 p-5 text-center">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-yellow-100/70">
                          Tarot Reading
                        </p>
                        <h2 className="mt-6 text-3xl font-bold text-yellow-50">
                          {siteData.brandName}
                        </h2>
                      </div>

                      <img
                        src="/ProfilePicture.jpeg"
                        alt="Ratu Kidul Tarot"
                        className="mx-auto h-24 w-24 rounded-full border border-yellow-100/30 object-cover shadow-inner"
                      />

                      <div>
                        <p className="text-sm text-emerald-50/70">
                          Membaca energi, arah, dan pesan semesta
                        </p>
                        <p className="mt-3 font-semibold text-emerald-200">
                          {siteData.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}