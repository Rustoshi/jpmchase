"use client"

import { useState, useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import {
  Eye, 
  EyeOff, 
  Loader2, 
  AlertCircle, 
  Mail, 
  XCircle,
  User,
  Phone,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Sparkles,
  Hash
} from "lucide-react"
import { BANK_NAME } from "@/lib/brand"

const registerSchema = z.object({
  firstName:       z.string().min(2, "At least 2 characters").max(50, "Max 50 characters"),
  lastName:        z.string().min(2, "At least 2 characters").max(50, "Max 50 characters"),
  email:           z.string().email("Enter a valid email address"),
  phone:           z.string().optional(),
  password:        z.string().min(8, "At least 8 characters"),
  confirmPassword: z.string(),
  pin:             z.string().length(4, "PIN must be exactly 4 digits").regex(/^\d{4}$/, "PIN must contain only numbers"),
  confirmPin:      z.string(),
  agreeToTerms:    z.literal(true, {
    errorMap: () => ({ message: "You must agree to the Terms of Service" }),
  }),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path:    ["confirmPassword"],
}).refine((d) => d.pin === d.confirmPin, {
  message: "PINs do not match",
  path:    ["confirmPin"],
})

type RegisterValues = z.infer<typeof registerSchema>

const STEPS = [
  { label: "Personal Info", icon: User },
  { label: "Security", icon: Shield },
  { label: "Verify", icon: Mail },
]

function getPasswordStrength(pw: string): { score: number; label: string; color: string; tips: string[] } {
  let score = 0
  const tips: string[] = []
  
  if (pw.length >= 8) score++
  else tips.push("At least 8 characters")
  
  if (/[A-Z]/.test(pw)) score++
  else tips.push("One uppercase letter")
  
  if (/\d/.test(pw)) score++
  else tips.push("One number")
  
  if (/[^a-zA-Z0-9]/.test(pw)) score++
  else tips.push("One special character")

  const MAP: Record<number, { label: string; color: string }> = {
    0: { label: "",       color: "rgba(255,255,255,0.08)" },
    1: { label: "Weak",   color: "#EF4444" },
    2: { label: "Fair",   color: "#F59E0B" },
    3: { label: "Good",   color: "#3B9EFF" },
    4: { label: "Strong", color: "#00C896" },
  }

  return { score, tips, ...MAP[score] }
}

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-between mb-8">
      {STEPS.map((step, i) => {
        const Icon = step.icon
        const isActive = i === current
        const isCompleted = i < current
        
        return (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isCompleted 
                    ? "bg-[#00C896] text-white" 
                    : isActive 
                      ? "bg-[#3B9EFF] text-white shadow-lg shadow-[#3B9EFF]/30" 
                      : "bg-white/[0.03] border border-white/[0.08] text-white/30"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <Icon className="w-6 h-6" />
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium transition-colors ${
                  isActive ? "text-[#3B9EFF]" : isCompleted ? "text-[#00C896]" : "text-white/30"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-1 mx-4 mb-6">
                <div 
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    isCompleted ? "bg-[#00C896]" : "bg-white/[0.08]"
                  }`}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function RegisterPage() {
  const [step, setStep]                     = useState(0)
  const [showPassword, setShowPassword]     = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [apiError, setApiError]             = useState<string | null>(null)
  const [registeredEmail, setRegisteredEmail] = useState("")
  const [resendCooldown, setResendCooldown] = useState(0)
  const [registrationDisabled, setRegistrationDisabled] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/registration-status")
        if (res.ok) {
          const data = await res.json()
          setRegistrationDisabled(!data.allowRegistration)
        }
      } catch { /* ignore */ }
      setCheckingStatus(false)
    })()
  }, [])

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "",
      password: "", confirmPassword: "", pin: "", confirmPin: "",
    },
  })

  const password = watch("password")
  const confirmPassword = watch("confirmPassword")
  const pin = watch("pin")
  const confirmPin = watch("confirmPin")
  const strength = getPasswordStrength(password || "")
  const passwordsMatch = password && confirmPassword && password === confirmPassword
  const pinsMatch = pin && confirmPin && pin === confirmPin

  const goToStep2 = useCallback(async () => {
    setApiError(null)
    const valid = await trigger(["firstName", "lastName", "email", "phone"])
    if (valid) setStep(1)
  }, [trigger])

  const onSubmit = async (data: RegisterValues) => {
    setApiError(null)

    try {
      const res = await fetch("/api/auth/register", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        if (res.status === 409) {
          setStep(0)
          setError("email", { message: "An account with this email already exists" })
          return
        }
        if (res.status === 429) {
          setApiError("Too many attempts. Please wait before trying again.")
          return
        }
        if (json.errors) {
          for (const [field, msgs] of Object.entries(json.errors)) {
            setError(field as keyof RegisterValues, {
              message: (msgs as string[])[0],
            })
          }
          return
        }
        setApiError(json.error || "Something went wrong. Please try again.")
        return
      }

      setRegisteredEmail(data.email)
      setStep(2)
      startResendCooldown()
    } catch {
      setApiError("Something went wrong. Please try again.")
    }
  }

  const startResendCooldown = () => {
    setResendCooldown(60)
    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResend = async () => {
    if (resendCooldown > 0) return
    try {
      await fetch("/api/auth/resend-verification", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email: registeredEmail }),
      })
      startResendCooldown()
    } catch { /* swallow */ }
  }

  if (checkingStatus) {
    return (
      <>
        <title>{`Create account — ${BANK_NAME}`}</title>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-[#3B9EFF]/20 flex items-center justify-center mb-4">
            <Loader2 className="w-8 h-8 text-[#3B9EFF] animate-spin" />
          </div>
          <p className="text-white/50">Loading...</p>
        </div>
      </>
    )
  }

  if (registrationDisabled) {
    return (
      <>
        <title>{`Registration Disabled — ${BANK_NAME}`}</title>
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Registration Disabled</h1>
          <p className="text-white/50 mb-8 max-w-sm mx-auto">
            New account registration is currently disabled. Please contact support for assistance.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl text-[15px] font-semibold text-white bg-[#3B9EFF] hover:bg-[#3B9EFF]/90 transition-all"
          >
            Go to Login
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <title>{`Create account — ${BANK_NAME}`}</title>
      
      <div className="space-y-6">
        <StepIndicator current={step} />

        {apiError && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-sm text-red-500">{apiError}</p>
          </div>
        )}

        {/* STEP 1: Personal Info */}
        {step === 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
              <p className="text-white/50">Start banking with {BANK_NAME} in minutes</p>
            </div>

            <div className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label 
                    htmlFor="firstName" 
                    className={`text-sm font-medium transition-colors ${
                      focusedField === "firstName" ? "text-[#3B9EFF]" : "text-white/60"
                    }`}
                  >
                    First name
                  </label>
                  <div className="relative">
                    <input
                      id="firstName"
                      autoFocus
                      placeholder="John"
                      {...register("firstName")}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full h-14 px-4 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                        errors.firstName 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label 
                    htmlFor="lastName" 
                    className={`text-sm font-medium transition-colors ${
                      focusedField === "lastName" ? "text-[#3B9EFF]" : "text-white/60"
                    }`}
                  >
                    Last name
                  </label>
                  <div className="relative">
                    <input
                      id="lastName"
                      placeholder="Doe"
                      {...register("lastName")}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full h-14 px-4 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                        errors.lastName 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className={`text-sm font-medium transition-colors ${
                    focusedField === "email" ? "text-[#3B9EFF]" : "text-white/60"
                  }`}
                >
                  Email address
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === "email" ? "text-[#3B9EFF]" : "text-white/30"
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full h-14 pl-12 pr-4 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                      errors.email 
                        ? "border-red-500/50 focus:border-red-500" 
                        : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label 
                  htmlFor="phone" 
                  className={`text-sm font-medium transition-colors ${
                    focusedField === "phone" ? "text-[#3B9EFF]" : "text-white/60"
                  }`}
                >
                  Phone number <span className="text-white/30">(optional)</span>
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === "phone" ? "text-[#3B9EFF]" : "text-white/30"
                  }`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 transition-all duration-200 outline-none focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={goToStep2}
                className="relative w-full h-14 rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] hover:from-[#3B9EFF]/90 hover:to-[#2563EB]/90 transition-all duration-200 active:scale-[0.98] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="inline-flex items-center gap-2">
                  Continue
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <p className="text-center text-sm text-white/50">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#3B9EFF] hover:text-[#3B9EFF]/80 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        )}

        {/* STEP 2: Security */}
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Secure your account</h1>
              <p className="text-white/50">Choose a strong password to protect your funds</p>
            </div>

            <div className="space-y-4">
              {/* Password */}
              <div className="space-y-2">
                <label 
                  htmlFor="password" 
                  className={`text-sm font-medium transition-colors ${
                    focusedField === "password" ? "text-[#3B9EFF]" : "text-white/60"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === "password" ? "text-[#3B9EFF]" : "text-white/30"
                  }`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
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

                {/* Password strength */}
                {password && (
                  <div className="space-y-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Password strength</span>
                      <span className="text-xs font-medium" style={{ color: strength.color }}>
                        {strength.label}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((seg) => (
                        <div
                          key={seg}
                          className="h-1.5 flex-1 rounded-full transition-all duration-300"
                          style={{ 
                            background: seg <= strength.score ? strength.color : "rgba(255,255,255,0.08)"
                          }}
                        />
                      ))}
                    </div>
                    {strength.tips.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {strength.tips.map((tip, i) => (
                          <span key={i} className="text-xs text-white/40 px-2 py-1 rounded-md bg-white/[0.03]">
                            {tip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div className="space-y-2">
                <label 
                  htmlFor="confirmPassword" 
                  className={`text-sm font-medium transition-colors ${
                    focusedField === "confirmPassword" ? "text-[#3B9EFF]" : "text-white/60"
                  }`}
                >
                  Confirm password
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === "confirmPassword" ? "text-[#3B9EFF]" : "text-white/30"
                  }`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    {...register("confirmPassword")}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full h-14 pl-12 pr-12 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                      errors.confirmPassword 
                        ? "border-red-500/50 focus:border-red-500" 
                        : passwordsMatch
                          ? "border-[#00C896]/50"
                          : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                    }`}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {passwordsMatch && (
                    <div className="absolute right-12 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-5 h-5 text-[#00C896]" />
                    </div>
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* PIN Section */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
                    <Hash className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Transaction PIN</p>
                    <p className="text-xs text-white/40">4-digit PIN for authorizing transactions</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* PIN */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="pin" 
                      className={`text-sm font-medium transition-colors ${
                        focusedField === "pin" ? "text-[#3B9EFF]" : "text-white/60"
                      }`}
                    >
                      PIN
                    </label>
                    <input
                      id="pin"
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="••••"
                      {...register("pin")}
                      onFocus={() => setFocusedField("pin")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full h-14 px-4 text-center text-xl tracking-[0.5em] rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                        errors.pin 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                      }`}
                    />
                    {errors.pin && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.pin.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm PIN */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="confirmPin" 
                      className={`text-sm font-medium transition-colors ${
                        focusedField === "confirmPin" ? "text-[#3B9EFF]" : "text-white/60"
                      }`}
                    >
                      Confirm PIN
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPin"
                        type="password"
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="••••"
                        {...register("confirmPin")}
                        onFocus={() => setFocusedField("confirmPin")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full h-14 px-4 text-center text-xl tracking-[0.5em] rounded-xl bg-white/[0.03] border text-white placeholder:text-white/30 transition-all duration-200 outline-none ${
                          errors.confirmPin 
                            ? "border-red-500/50 focus:border-red-500" 
                            : pinsMatch
                              ? "border-[#00C896]/50"
                              : "border-white/[0.08] focus:border-[#3B9EFF] focus:bg-white/[0.05]"
                        }`}
                      />
                      {pinsMatch && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <CheckCircle2 className="w-5 h-5 text-[#00C896]" />
                        </div>
                      )}
                    </div>
                    {errors.confirmPin && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.confirmPin.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.03] transition-all">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    {...register("agreeToTerms")}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-md border border-white/20 bg-white/[0.03] peer-checked:bg-[#3B9EFF] peer-checked:border-[#3B9EFF] transition-all flex items-center justify-center">
                    <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm text-white/60 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#3B9EFF] hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-[#3B9EFF] hover:underline">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.agreeToTerms.message}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="h-14 flex-1 rounded-xl text-[15px] font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.03] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative h-14 flex-[2] rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] hover:from-[#3B9EFF]/90 hover:to-[#2563EB]/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creating account...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Create account
                      <Sparkles className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 3: Verification */}
        {step === 2 && (
          <div className="text-center py-8 space-y-6">
            <div className="relative mx-auto w-24 h-24">
              <div className="absolute inset-0 bg-[#3B9EFF]/20 rounded-full animate-ping" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#3B9EFF]/20 to-[#00C896]/20 flex items-center justify-center">
                <Mail className="w-12 h-12 text-[#3B9EFF]" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Check your inbox</h1>
              <p className="text-white/50 max-w-sm mx-auto">
                We sent a verification link to{" "}
                <span className="text-white font-medium">{registeredEmail}</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left space-y-3">
              <p className="text-sm text-white/60">What to do next:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-6 h-6 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center text-[#3B9EFF] text-xs font-bold">1</div>
                  <span>Open your email inbox</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-6 h-6 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center text-[#3B9EFF] text-xs font-bold">2</div>
                  <span>Click the verification link</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-6 h-6 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center text-[#3B9EFF] text-xs font-bold">3</div>
                  <span>Start banking!</span>
                </div>
              </div>
            </div>

            <button
              disabled={resendCooldown > 0}
              onClick={handleResend}
              className="w-full h-12 rounded-xl text-[14px] font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.03] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendCooldown > 0 ? `Resend email in ${resendCooldown}s` : "Resend verification email"}
            </button>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => { setStep(0); setRegisteredEmail("") }}
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                Wrong email? Start over
              </button>
              <Link 
                href="/login" 
                className="block text-sm font-medium text-[#3B9EFF] hover:text-[#3B9EFF]/80 transition-colors"
              >
                Already verified? Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
