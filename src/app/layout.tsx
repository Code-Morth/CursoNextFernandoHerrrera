import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "@/Redux"
import Navbar from "@/components/global/Navbar"

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Todos los pokemons",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
