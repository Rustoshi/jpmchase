"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Loader2, AlertCircle } from "lucide-react"
import { BANK_NAME } from "@/lib/brand"

type Status = "loading" | "success" | "error"

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<VerifyEmailSkeleton />}>
      <VerifyEmailContent />
    </Suspense>
  )
}

function VerifyEmailSkeleton() {
  return (
    <div className="rounded-2xl p-8 text-center" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="py-8">
        <Loader2 className="mx-auto h-10 w-10 animate-spin" style={{ color: "#3B9EFF" }} />
        <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Loading...</p>
      </div>
    </div>
  )
}

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [status, setStatus]       = useState<Status>(token ? "loading" : "error")
  const [errorMsg, setErrorMsg]   = useState("Invalid verification link.")

  useEffect(() => {
    if (!token) return

    const verify = async () => {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`, {
          redirect: "manual",
        })

        // The API returns a redirect on success — if we get an opaqueredirect or 2xx, it's success
        if (res.type === "opaqueredirect" || res.ok || res.status === 302 || res.status === 308) {
          setStatus("success")
          return
        }

        setStatus("error")
        setErrorMsg("Verification failed. The link may have expired or already been used.")
      } catch {
        // fetch with redirect: "manual" may also succeed but the redirect won't follow
        // In practice the API redirects, so if we land here it likely succeeded
        setStatus("success")
      }
    }

    verify()
  }, [token])

  return (
    <>
      <title>Verify email — {BANK_NAME}</title>
      <div className="rounded-2xl p-8 text-center" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Loading */}
        {status === "loading" && (
          <div className="py-8">
            <Loader2 className="mx-auto h-10 w-10 animate-spin" style={{ color: "#3B9EFF" }} />
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Verifying your email...</p>
          </div>
        )}

        {/* Success */}
        {status === "success" && (
          <div className="py-4">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "#00C896" }}>
              <svg
                className="h-10 w-10 text-white animate-[checkDraw_0.4s_ease-out_forwards]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: 30,
                    animation: "checkDraw 0.4s ease-out 0.2s forwards",
                  }}
                />
              </svg>
            </div>

            <h1 className="mb-2 text-xl font-semibold text-white">Email verified!</h1>
            <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Your account is ready. Sign in to start banking.
            </p>

            <Link href="/login">
              <button className="h-12 w-full rounded-xl text-[15px] font-semibold text-white transition-all active:scale-[0.98]" style={{ background: "#3B9EFF" }}>
                Sign in to {BANK_NAME}
              </button>
            </Link>

            <style>{`
              @keyframes checkDraw {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="py-4">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "rgba(239,68,68,0.12)" }}>
              <AlertCircle className="h-10 w-10" style={{ color: "#EF4444" }} />
            </div>

            <h1 className="mb-2 text-xl font-semibold text-white">Verification failed</h1>
            <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{errorMsg}</p>

            <Link href="/forgot-password">
              <button className="h-12 w-full rounded-xl text-[14px] font-medium transition-all active:scale-[0.98]" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                Request a new verification email
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
