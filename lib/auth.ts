import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { connectDB } from "@/lib/db/connection"
import User from "@/lib/models/User"

// Type augmentation lives in /types/next-auth.d.ts

// ── Custom error codes returned to the client via result.error ─────────────────
class InvalidCredentials extends CredentialsSignin {
  code = "invalid_credentials" as const
}
class AccountSuspended extends CredentialsSignin {
  code = "Account suspended. Contact support." as const
}
class AccountInactive extends CredentialsSignin {
  code = "Account not found." as const
}
class EmailNotVerified extends CredentialsSignin {
  code = "Please verify your email before signing in." as const
}

const credentialsSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(1),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error:  "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials)
        if (!parsed.success) throw new InvalidCredentials()

        await connectDB()

        const user = await User.findOne({
          email: parsed.data.email.toLowerCase().trim(),
        })

        if (!user) throw new InvalidCredentials()

        const passwordValid = await bcrypt.compare(parsed.data.password, user.passwordHash)
        if (!passwordValid) throw new InvalidCredentials()

        // Shared guards — apply to both admin and user roles
        if (user.isSuspended)      throw new AccountSuspended()
        if (!user.isActive)        throw new AccountInactive()

        // User-specific: require email verification
        if (user.role === "user" && !user.emailVerified) throw new EmailNotVerified()

        return {
          id:          user._id.toString(),
          email:       user.email,
          role:        user.role        as "admin" | "user",
          firstName:   user.firstName,
          lastName:    user.lastName,
          kycStatus:   user.kycStatus   as "unverified" | "pending" | "verified" | "rejected",
          isActive:    user.isActive,
          isSuspended: user.isSuspended,
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger }) {
      if (user) {
        token.id          = user.id!
        token.role        = user.role
        token.firstName   = user.firstName
        token.lastName    = user.lastName
        token.kycStatus   = user.kycStatus
        token.isActive    = user.isActive
        token.isSuspended = user.isSuspended
      }
      return token
    },
    session({ session, token }) {
      session.user.id          = token.id
      session.user.role        = token.role
      session.user.firstName   = token.firstName
      session.user.lastName    = token.lastName
      session.user.kycStatus   = token.kycStatus
      session.user.isActive    = token.isActive
      session.user.isSuspended = token.isSuspended
      return session
    },
    redirect({ url, baseUrl }) {
      // After sign-in, route by role
      if (url === baseUrl || url === `${baseUrl}/`) {
        return `${baseUrl}/app/dashboard`
      }
      return url
    },
  },
})
