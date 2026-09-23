export const WHATSAPP_NUMBER = "56978882381"
export const WHATSAPP_DISPLAY = "+56 9 7888 2381"
export const INSTAGRAM_URL = "https://www.instagram.com/limpiezaimpecablebrasil?stkn=MW11bHBtbGNmZGEw"
export const INSTAGRAM_HANDLE = "@gslimpiezaimpecablebrasil"

export function enviarWhatsApp(mensaje?: string) {
  const texto =
    mensaje ??
    "¡Hola GS House Clean! Quiero cotizar un servicio de limpieza."
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer")
  }
}
