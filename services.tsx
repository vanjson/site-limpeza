"use client"

import { Home, BedDouble, Droplets } from "lucide-react"
import { enviarWhatsApp } from "@/lib/whatsapp"

const servicios = [
  {
    icon: Home,
    title: "Limpieza Residencial",
    description: "Deja tu hogar impecable.",
  },
  {
    icon: BedDouble,
    title: "Limpieza de Airbnb",
    description: "Excelente impresión, mejores reseñas.",
  },
  {
    icon: Droplets,
    title: "Limpieza Profunda",
    description: "Cada detalle importa.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1E3A8A] sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Soluciones de limpieza pensadas para cada espacio y necesidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB] transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A]">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.description}</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  enviarWhatsApp(
                    `¡Hola GS House Clean! Me interesa el servicio de ${s.title}. ¿Me pueden dar más información?`,
                  )
                }
                className="mt-auto text-sm font-semibold text-[#22C55E] transition-colors hover:text-[#16A34A]"
              >
                Cotizar este servicio →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
