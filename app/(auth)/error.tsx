"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[Auth Error]", error)
  }, [error])

  return (
    <div className="space-y-6 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
        <AlertTriangle className="h-7 w-7 text-red-500" />
      </div>
      
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Authentication Error</h1>
        <p className="text-white/50 text-sm">
          Something went wrong. Please try again.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 h-12 w-full rounded-xl bg-[#3B9EFF] text-white font-medium hover:bg-[#3B9EFF]/90 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
        
        <Link
          href="/login"
          className="text-sm text-[#3B9EFF] hover:text-[#3B9EFF]/80 transition-colors"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  )
}
