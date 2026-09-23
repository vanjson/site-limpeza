"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Box, BadgeCheck, Clock } from "lucide-react"
import { enviarWhatsApp, INSTAGRAM_URL } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { InstagramIcon } from "@/components/instagram-icon"

// Adicione aqui os caminhos das fotos que deseja no slide
const heroImages = [
  {
    src: "/hero-limpieza.png",
    alt: "Sala de estar impecable tras una limpieza profesional de GS House Clean",
  },
  {
    src: "/hero-limpieza2.png", // Exemplo (substitua pelas suas imagens)
    alt: "Limpieza profunda de espacios",
  },
  {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800", // Exemplo (substitua pelas suas imagens)
    alt: "Equipo de limpieza trabajando",
  },
]

const destaques = [
  {
    icon: Box,
    text: "Llevamos todos los productos y equipos (¡Tú no te preocupes por nada!)",
  },
  {
    icon: BadgeCheck,
    text: "Equipo Brasileño de confianza",
  },
  {
    icon: Clock,
    text: "Responsabilidad y puntualidad",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Troca a imagem automaticamente a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        {/* Lado Esquerdo - Conteúdo e Ações */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#22C55E]/25 bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold text-[#16A34A]">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Equipo Brasileño de confianza
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-[#1E3A8A] sm:text-5xl">
            Limpieza que transforma, confianza que se siente.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Deja la limpieza en nuestras manos y disfruta tu tiempo. Atendemos en
            Santiago y alrededores con calidad, dedicación y puntualidad.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => enviarWhatsApp()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#16A34A]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Cotizar por WhatsApp
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-6 py-3 text-base font-semibold text-[#1E3A8A] transition-colors hover:bg-[#1E3A8A]/5"
            >
              <InstagramIcon className="h-5 w-5" />
              Ver Instagram (@limpiezaimpecablebrasil)
            </a>
          </div>

          <ul className="mt-2 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {destaques.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-slate-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lado Direito - Imagem em Slider Fade */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Indicadores de bolinhas na imagem */}
            <div className="absolute bottom-3 right-3 z-10 flex gap-1.5 rounded-full bg-black/30 p-1.5 backdrop-blur-sm">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-[#1E3A8A] px-5 py-3 text-white shadow-lg sm:block z-10">
            <p className="text-xs font-medium text-blue-200">Cobertura</p>
            <p className="text-sm font-bold">Santiago y alrededores</p>
          </div>
        </div>
      </div>
    </section>
  )
}
