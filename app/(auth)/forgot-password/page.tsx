"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Loader2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BANK_NAME = process.env.NEXT_PUBLIC_BANK_NAME || "NovaPay"

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
})
type FormValues = z.infer<typeof schema>

export default function ForgotPasswordPage() {
  const [sent, setSent]           = useState(false)
  const [sentEmail, setSentEmail] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/auth/forgot-password", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ email: data.email }),
    })
    setSentEmail(data.email)
    setSent(true)
  }

  const tryDifferent = () => {
    setSent(false)
    setSentEmail("")
    reset()
  }

  return (
    <>
      <title>Forgot password — {BANK_NAME}</title>
      <div className="rounded-2xl p-8" style={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.06)" }}>
        {!sent ? (
          <>
            <h1 className="mb-1 text-xl font-semibold text-white">Forgot password?</h1>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Enter your email and we&apos;ll send a reset link.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[12px] font-medium uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>Email address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="you@example.com"
                    {...register("email")}
                    className="dark-input w-full"
                  />
                  {errors.email && (
                    <p className="text-xs" style={{ color: "#EF4444" }}>{errors.email.message}</p>
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
                      Sending...
                    </span>
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Link href="/login" className="font-medium hover:underline" style={{ color: "#3B9EFF" }}>
                Back to sign in
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(0,200,150,0.12)" }}>
              <Mail className="h-8 w-8" style={{ color: "#00C896" }} />
            </div>

            <h1 className="mb-2 text-xl font-semibold text-white">Check your email</h1>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              If <strong className="text-white">{sentEmail}</strong> is registered,
              a reset link has been sent. Check your inbox.
            </p>

            <div className="space-y-3">
              <Link href="/login">
                <button className="h-12 w-full rounded-xl text-[14px] font-medium transition-all active:scale-[0.98]" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                  Back to sign in
                </button>
              </Link>
              <button
                type="button"
                onClick={tryDifferent}
                className="block w-full text-sm hover:underline"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Try a different email
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
