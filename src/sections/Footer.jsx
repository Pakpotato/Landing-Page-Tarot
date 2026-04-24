import Container from "../components/Container"
import { siteData } from "../data/siteData"

const footerLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "TikTok", href: "#tiktok" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Produk", href: "#products" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    "Halo Bunda Ratu, saya ingin konsultasi tarot."
  )}`

  return (
    <footer className="border-t border-white/10 bg-[#010d0a] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/ProfilePicture.jpeg"
                alt="Ratu Kidul Tarot"
                className="h-11 w-11 rounded-full object-cover ring-1 ring-emerald-300/30"
              />

              <div>
                <p className="font-bold">{siteData.brandName}</p>
                <p className="text-sm text-emerald-50/55">
                  {siteData.username}
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-50/60">
              Konsultasi tarot dan bimbingan energi untuk membantu membaca
              situasi, memahami pesan, dan mengambil keputusan dengan lebih
              tenang.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navigasi</h3>

            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-emerald-50/60 transition hover:text-emerald-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Hubungi</h3>

            <div className="mt-4 grid gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-50/60 transition hover:text-emerald-300"
              >
                WhatsApp Consultation
              </a>

              <a
                href="https://www.tiktok.com/@ratukidul2111"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-50/60 transition hover:text-emerald-300"
              >
                TikTok {siteData.username}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-emerald-50/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteData.brandName}. All rights reserved.</p>
          <p>Konsultasi dilakukan secara personal melalui WhatsApp.</p>
        </div>
      </Container>
    </footer>
  )
}