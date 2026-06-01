import { Navbar } from "@/components/homepage"
import { SmartsuppChat } from "@/components/user/SmartsuppChat"
import { GTranslate } from "@/components/GTranslate"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <SmartsuppChat />
      <GTranslate />
    </div>
  )
}
