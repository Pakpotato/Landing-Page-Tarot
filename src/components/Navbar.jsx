import { useState } from "react"
import { siteData } from "../data/siteData"

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "TikTok", href: "#tiktok" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Produk", href: "#products" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    "Halo Bunda Ratu, saya ingin konsultasi tarot."
  )}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#02130f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src="/ProfilePicture.jpeg"
            alt="Ratu Kidul Tarot"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-emerald-300/30"
          />
          <span className="truncate text-sm font-bold text-white sm:text-base">
            {siteData.brandName}
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-emerald-50/70 transition hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300 sm:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#02130f]/95 px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-emerald-50/80 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-emerald-950 sm:hidden"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}