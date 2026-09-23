"use client"

import { enviarWhatsApp } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function FloatingWhatsApp() {
  return (
    <button
      type="button"
      onClick={() => enviarWhatsApp()}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#16A34A]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  )
}
