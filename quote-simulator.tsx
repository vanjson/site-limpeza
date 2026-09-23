"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { enviarWhatsApp } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const tiposServicio = [
  "Limpieza Residencial",
  "Limpieza de Airbnb",
  "Limpieza Profunda",
]
const dormitorios = ["1", "2", "3", "4+"]
const banos = ["1", "2", "3+"]

export function QuoteSimulator() {
  const [servicio, setServicio] = useState(tiposServicio[0])
  const [dorms, setDorms] = useState(dormitorios[0])
  const [bath, setBath] = useState(banos[0])
  const [comuna, setComuna] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mensaje = [
      "¡Hola GS House Clean! Quiero cotizar una limpieza:",
      "",
      `• Tipo de servicio: ${servicio}`,
      `• Dormitorios: ${dorms}`,
      `• Baños: ${bath}`,
      `• Comuna / Sector: ${comuna.trim() || "No especificado"}`,
      "",
      "¿Me pueden enviar una cotización? ¡Gracias!",
    ].join("\n")
    enviarWhatsApp(mensaje)
  }

  return (
    <section id="cotizar" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Cotización rápida
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E3A8A]">
            Simula tu Cotización
          </h2>
          <p className="mt-2 text-slate-600">
            Cuéntanos qué necesitas y recibe tu cotización directo por WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8"
        >
          <Field label="Tipo de Servicio">
            <select
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
            >
              {tiposServicio.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Dormitorios">
              <select
                value={dorms}
                onChange={(e) => setDorms(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
              >
                {dormitorios.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Baños">
              <select
                value={bath}
                onChange={(e) => setBath(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
              >
                {banos.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Comuna / Sector">
            <input
              type="text"
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
              placeholder="Ej: Las Condes, Providencia, Santiago Centro..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
            />
          </Field>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#16A34A]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar cotización por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-[#1E3A8A]">{label}</span>
      {children}
    </label>
  )
}
