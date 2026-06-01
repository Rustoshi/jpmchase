"use client"

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react"
import { formatCurrency, formatCentsAsCurrency, getCurrencySymbol } from "@/lib/utils/currency"

interface PlatformSettings {
  defaultCurrency: string
  supportedCurrencies: string[]
  maintenanceMode: boolean
  maintenanceMessage: string | null
}

interface PlatformSettingsContextValue extends PlatformSettings {
  loading: boolean
  currencySymbol: string
  formatAmount: (amount: number) => string
  formatCents: (amountInCents: number) => string
}

const defaultSettings: PlatformSettings = {
  defaultCurrency: "USD",
  supportedCurrencies: ["USD"],
  maintenanceMode: false,
  maintenanceMessage: null,
}

const PlatformSettingsContext = createContext<PlatformSettingsContextValue>({
  ...defaultSettings,
  loading: true,
  currencySymbol: "$",
  formatAmount: (n) => `$${n.toLocaleString()}`,
  formatCents: (n) => `$${(n / 100).toLocaleString()}`,
})

export function PlatformSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<PlatformSettings>(defaultSettings)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/public/settings")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) {
          setSettings({
            defaultCurrency: data.defaultCurrency || "USD",
            supportedCurrencies: data.supportedCurrencies || ["USD"],
            maintenanceMode: data.maintenanceMode || false,
            maintenanceMessage: data.maintenanceMessage || null,
          })
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const currencySymbol = getCurrencySymbol(settings.defaultCurrency)

  const formatAmount = useCallback(
    (amount: number) => formatCurrency(amount, settings.defaultCurrency),
    [settings.defaultCurrency]
  )

  const formatCents = useCallback(
    (amountInCents: number) => formatCentsAsCurrency(amountInCents, settings.defaultCurrency),
    [settings.defaultCurrency]
  )

  return (
    <PlatformSettingsContext.Provider
      value={{
        ...settings,
        loading,
        currencySymbol,
        formatAmount,
        formatCents,
      }}
    >
      {children}
    </PlatformSettingsContext.Provider>
  )
}

/**
 * Hook to access platform settings and currency formatting
 */
export function usePlatformSettings() {
  return useContext(PlatformSettingsContext)
}

/**
 * Hook for just currency formatting (convenience)
 */
export function useCurrency() {
  const { defaultCurrency, currencySymbol, formatAmount, formatCents } = useContext(PlatformSettingsContext)
  return { currency: defaultCurrency, symbol: currencySymbol, formatAmount, formatCents }
}
