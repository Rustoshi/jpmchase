"use client"

import { useState, Suspense } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { 
  Eye, 
  EyeOff, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  AlertTriangle,
  Mail,
  Lock,
  ArrowRight
} from "lucide-react"
import { BANK_NAME } from "@/lib/brand"

const loginSchema = z.object({
  email:    z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})
type LoginValues = z.infer<typeof loginSchema>

const AUTH_ERROR_MAP: Record<string, string> = {
  invalid_credentials:                             "Invalid email or password.",
  "Account suspended. Contact support.":           "Account suspended. Contact support.",
  "Account not found.":                            "Account not found.",
  "Please verify your email before signing in.":   "Please verify your email before signing in.",
  CredentialsSignin:                               "Invalid email or password.",
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginContent />
    </Suspense>
  )
}

function LoginSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="text-center">
        <div className="h-9 w-48 bg-white/10 rounded mx-auto mb-2" />
        <div className="h-5 w-64 bg-white/5 rounded mx-auto" />
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-white/10 rounded" />
          <div className="h-14 bg-white/5 rounded-xl" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-20 bg-white/10 rounded" />
          <div className="h-14 bg-white/5 rounded-xl" />
        </div>
        <div className="h-14 bg-white/10 rounded-xl" />
      </div>
    </div>
  )
}

function LoginContent() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError]       = useState<string | null>(null)
  const [rememberMe, setRememberMe]     = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const verified    = searchParams.get("verified") === "true"
  const registered  = searchParams.get("registered") === "true"
  const errorParam  = searchParams.get("error")
  const callbackUrl = searchParams.get("callbackUrl")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) })

  const emailValue = watch("email")
  const passwordValue = watch("password")

  const onSubmit = async (data: LoginValues) => {
    setAuthError(null)

    const result = await signIn("credentials", {
      redirect: false,
      email:    data.email,
      password: data.password,
    })

    if (result?.error) {
      setAuthError(AUTH_ERROR_MAP[result.error] ?? "Something went wrong. Please try again.")
      return
    }

    if (result?.ok) {
      router.push(callbackUrl || "/app/dashboard")
      router.refresh()
    }
  }

  return (
    <>
      <title>{`Sign in — ${BANK_NAME}`}</title>
      
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-white/50">
            Sign in to access your account
          </p>
        </div>

        {/* Status banners */}
        {(verified || registered) && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#00C896]/10 border border-[#00C896]/20">
            <div className="w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#00C896]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#00C896]">
                {registered ? "Account created successfully" : "Email verified successfully"}
              </p>
              <p className="text-xs text-[#00C896]/70">You can now sign in to your account</p>
            </div>
          </div>
        )}

        {errorParam && !verified && (
          <div className={`flex items-center gap-3 p-4 rounded-xl ${
            errorParam.includes("verify") 
              ? "bg-[#F59E0B]/10 border border-[#F59E0B]/20" 
              : "bg-red-500/10 border border-red-500/20"
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              errorParam.includes("verify") ? "bg-[#F59E0B]/20" : "bg-red-500/20"
            }`}>
              {errorParam.includes("verify") ? (
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
            <p className={`text-sm ${errorParam.includes("verify") ? "text-[#F59E0B]" : "text-red-500"}`}>
              {decodeURIComponent(errorParam)}
            </p>
          </div>
        )}

        {authError && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-sm text-red-500">{authError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className={`text-sm font-medium transition-colors ${
                focusedField === "email" ? "text-[#3B9EFF]" : "text-white/60"
              }`}
            >
              Email address
            </label>
            <div className="relative group">
              <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                focusedField === "email" ? "text-[#3B9EFF]" : "text-white/30"
              }`}>
                <Mail className="w-5 h-5" />
              </div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                autoFocus
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full h-14 pl-12 pr-4 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                  errors.email 
                    ? "border-red-500/50 focus:border-red-500" 
                    : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                }`}
              />
              {emailValue && !errors.email && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <CheckCircle2 className="w-5 h-5 text-[#00C896]" />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="password" 
                className={`text-sm font-medium transition-colors ${
                  focusedField === "password" ? "text-[#3B9EFF]" : "text-white/60"
                }`}
              >
                Password
              </label>
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#3B9EFF] hover:text-[#3B9EFF]/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative group">
              <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                focusedField === "password" ? "text-[#3B9EFF]" : "text-white/30"
              }`}>
                <Lock className="w-5 h-5" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                aria-invalid={!!errors.password}
                {...register("password")}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`w-full h-14 pl-12 pr-12 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                  errors.password 
                    ? "border-red-500/50 focus:border-red-500" 
                    : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                }`}
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-5 h-5 rounded-md border border-white/20 bg-white/[0.03] peer-checked:bg-[#3B9EFF] peer-checked:border-[#3B9EFF] transition-all flex items-center justify-center">
                {rememberMe && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
              Keep me signed in for 30 days
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full h-14 rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] hover:from-[#3B9EFF]/90 hover:to-[#2563EB]/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                Sign in
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-white/50">
          Don&apos;t have an account?{" "}
          <Link 
            href="/register" 
            className="font-semibold text-[#3B9EFF] hover:text-[#3B9EFF]/80 transition-colors"
          >
            Create an account
          </Link>
        </p>
      </div>
    </>
  )
}
