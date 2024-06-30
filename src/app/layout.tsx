import type { Metadata } from "next"
import "./globals.css"
import Dashboard from "@/components/global/Dashboard"


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
        <Dashboard />
        {children}
      </body>
    </html>
  )
}
