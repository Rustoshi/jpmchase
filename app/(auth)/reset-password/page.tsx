"use client"

import { useState, Suspense } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"

const BANK_NAME = process.env.NEXT_PUBLIC_BANK_NAME || "NovaPay"

const schema = z.object({
  password:        z.string().min(8, "At least 8 characters"),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path:    ["confirmPassword"],
})
type FormValues = z.infer<typeof schema>

function getPasswordStrength(pw: string) {
  let score = 0
  if (pw.length >= 8)          score++
  if (/[A-Z]/.test(pw))       score++
  if (/\d/.test(pw))           score++
  if (/[^a-zA-Z0-9]/.test(pw)) score++

  const MAP: Record<number, { label: string; color: string }> = {
    0: { label: "",       color: "rgba(255,255,255,0.08)" },
    1: { label: "Weak",   color: "#EF4444" },
    2: { label: "Fair",   color: "#F59E0B" },
    3: { label: "Good",   color: "#F59E0B" },
    4: { label: "Strong", color: "#00C896" },
  }
  return { score, ...MAP[score] }
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordSkeleton />}>
      <ResetPasswordContent />
    </Suspense>
  )
}

function ResetPasswordSkeleton() {
  return (
    <div className="rounded-2xl p-8 animate-pulse" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="h-6 w-40 bg-white/10 rounded mb-2" />
      <div className="h-4 w-64 bg-white/5 rounded mb-6" />
      <div className="space-y-4">
        <div className="h-12 bg-white/5 rounded-xl" />
        <div className="h-12 bg-white/5 rounded-xl" />
        <div className="h-12 bg-white/10 rounded-xl" />
      </div>
    </div>
  )
}

function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess]           = useState(false)
  const [apiError, setApiError]         = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const password = watch("password")
  const strength = getPasswordStrength(password || "")

  if (!token) {
    return (
      <>
        <title>Reset password — {BANK_NAME}</title>
        <div className="rounded-2xl p-8 text-center" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "rgba(239,68,68,0.12)" }}>
            <AlertCircle className="h-7 w-7" style={{ color: "#EF4444" }} />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-white">Invalid reset link</h1>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            This link is invalid or has expired. Request a new one.
          </p>
          <Link href="/forgot-password">
            <button className="h-12 w-full rounded-xl text-[15px] font-semibold text-white transition-all active:scale-[0.98]" style={{ background: "#3B9EFF" }}>
              Request new reset link
            </button>
          </Link>
        </div>
      </>
    )
  }

  if (success) {
    return (
      <>
        <title>Password reset — {BANK_NAME}</title>
        <div className="rounded-2xl p-8 text-center" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "rgba(0,200,150,0.12)" }}>
            <CheckCircle2 className="h-7 w-7" style={{ color: "#00C896" }} />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-white">Password reset</h1>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Your password has been updated. Sign in with your new password.
          </p>
          <Link href="/login">
            <button className="h-12 w-full rounded-xl text-[15px] font-semibold text-white transition-all active:scale-[0.98]" style={{ background: "#3B9EFF" }}>
              Sign in with new password
            </button>
          </Link>
        </div>
      </>
    )
  }

  const onSubmit = async (data: FormValues) => {
    setApiError(null)
    try {
      const res = await fetch("/api/auth/reset-password", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          token,
          password:        data.password,
          confirmPassword: data.confirmPassword,
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        setApiError(json.error || "Reset failed. Please try again.")
        return
      }

      setSuccess(true)
    } catch {
      setApiError("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      <title>Reset password — {BANK_NAME}</title>
      <div className="rounded-2xl p-8" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h1 className="mb-1 text-xl font-semibold text-white">Set new password</h1>
        <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Choose a strong password for your account.</p>

        {apiError && (
          <div className="mb-5 flex items-center gap-2 rounded-lg px-4 py-3" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <AlertCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#EF4444" }} />
            <p className="text-sm" style={{ color: "#EF4444" }}>{apiError}</p>
            {apiError.includes("expired") && (
              <Link href="/forgot-password" className="ml-auto text-xs font-medium hover:underline" style={{ color: "#EF4444" }}>
                Request new link
              </Link>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-[12px] font-medium uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>New password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  autoFocus
                  placeholder="Min. 8 characters"
                  {...register("password")}
                  className="dark-input w-full pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs" style={{ color: "#EF4444" }}>{errors.password.message}</p>
              )}

              {password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((seg) => (
                      <div
                        key={seg}
                        className="h-1 flex-1 rounded-full transition-colors"
                        style={{ background: seg <= strength.score ? strength.color : "rgba(255,255,255,0.08)" }}
                      />
                    ))}
                  </div>
                  {strength.label && (
                    <p className="mt-1 text-xs font-medium" style={{ color: strength.color }}>
                      {strength.label}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="confirmPassword" className="text-[12px] font-medium uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>Confirm new password</label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter password"
                {...register("confirmPassword")}
                className="dark-input w-full"
              />
              {errors.confirmPassword && (
                <p className="text-xs" style={{ color: "#EF4444" }}>{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl text-[15px] font-semibold text-white transition-all active:scale-[0.98]"
              style={{ background: "#3B9EFF", opacity: isSubmitting ? 0.6 : 1 }}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Resetting...
                </span>
              ) : (
                "Reset password"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
