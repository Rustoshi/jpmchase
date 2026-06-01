import "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id:          string
      email:       string
      role:        "admin" | "user"
      firstName:   string
      lastName:    string
      kycStatus:   "unverified" | "pending" | "verified" | "rejected"
      isActive:    boolean
      isSuspended: boolean
    }
  }

  interface User {
    role:        "admin" | "user"
    firstName:   string
    lastName:    string
    kycStatus:   "unverified" | "pending" | "verified" | "rejected"
    isActive:    boolean
    isSuspended: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id:          string
    role:        "admin" | "user"
    firstName:   string
    lastName:    string
    kycStatus:   "unverified" | "pending" | "verified" | "rejected"
    isActive:    boolean
    isSuspended: boolean
  }
}
