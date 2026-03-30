"use client"

import { useEffect, useMemo, useState } from "react"

const PROGRAM_URL = process.env.NEXT_PUBLIC_VIAPET_APP_URL || "https://app.viapet.app"
const API_URL = process.env.NEXT_PUBLIC_VIAPET_API_URL || "https://api.viapet.app"
const DEFAULT_WHATSAPP = process.env.NEXT_PUBLIC_DEFAULT_CONSULTANT_WHATSAPP || "551120977579"

function normalizeWhatsapp(value?: string) {
  return String(value || "").replace(/\D/g, "")
}

export function useProgramLinks() {
  const [consultantWhatsapp, setConsultantWhatsapp] = useState(DEFAULT_WHATSAPP)

  useEffect(() => {
    let active = true

    async function loadPublicContact() {
      try {
        const response = await fetch(`${API_URL}/public/site-contact`, {
          cache: "no-store",
        })
        const payload = await response.json()
        const nextWhatsapp = normalizeWhatsapp(payload?.data?.siteConsultantWhatsapp || DEFAULT_WHATSAPP)
        if (active && nextWhatsapp) {
          setConsultantWhatsapp(nextWhatsapp)
        }
      } catch {
        if (active) {
          setConsultantWhatsapp(DEFAULT_WHATSAPP)
        }
      }
    }

    loadPublicContact()

    return () => {
      active = false
    }
  }, [])

  return useMemo(
    () => ({
      loginUrl: `${PROGRAM_URL}/login`,
      registerUrl: `${PROGRAM_URL}/register`,
      consultantUrl: `https://wa.me/${normalizeWhatsapp(consultantWhatsapp || DEFAULT_WHATSAPP)}`,
    }),
    [consultantWhatsapp],
  )
}
