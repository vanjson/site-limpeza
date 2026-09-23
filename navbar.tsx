"use client"

import { Droplets, BadgeCheck } from "lucide-react"
import { enviarWhatsApp } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB] text-white">
            <Droplets className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-[#1E3A8A]">
              GS House Clean
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block">
              Limpieza profesional en Santiago
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-3 py-1.5 text-xs font-semibold text-[#1E3A8A] md:inline-flex">
            <BadgeCheck className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            Equipo Brasileño de confianza
          </span>

          <button
            type="button"
            onClick={() => enviarWhatsApp()}
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#16A34A]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Contactar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
