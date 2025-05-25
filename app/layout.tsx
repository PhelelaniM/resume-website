import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { MapPin, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Phelelani Mkhize | Data Scientist & Location Intelligence Specialist",
  description:
    "Professional portfolio of Phelelani Mkhize, specializing in Data Science, GIS Analysis, and Location Intelligence",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link href="/" className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6" />
                    <span className="font-bold">Phelelani Mkhize</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="/resume" className="text-sm font-medium transition-colors hover:text-primary">
                    Resume
                  </Link>
                  <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
                    Timeline
                  </Link>
                  <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
                    Projects
                  </Link>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                </nav>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                      <Link href="/" className="hover:text-primary">
                        Home
                      </Link>
                      <Link href="/resume" className="hover:text-primary">
                        Resume
                      </Link>
                      <Link href="/timeline" className="hover:text-primary">
                        Timeline
                      </Link>
                      <Link href="/projects" className="hover:text-primary">
                        Projects
                      </Link>
                      <Link href="/contact" className="hover:text-primary">
                        Contact
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Phelelani Mkhize. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
