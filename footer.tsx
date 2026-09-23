"use client"

import { Droplets, LocateFixed } from "lucide-react"
import {
  enviarWhatsApp,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { InstagramIcon } from "@/components/instagram-icon"

export function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Droplets className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-lg font-extrabold">GS House Clean</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100">
            Limpieza que transforma, confianza que se siente. Equipo brasileño de
            confianza a tu servicio.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Cobertura
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-blue-100">
            <LocateFixed className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
            Atendemos en Santiago y alrededores
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Contacto
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => enviarWhatsApp()}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#16A34A]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <InstagramIcon className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-blue-200">
          © {new Date().getFullYear()} GS House Clean. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
