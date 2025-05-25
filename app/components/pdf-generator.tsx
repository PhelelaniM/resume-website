"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PdfGenerator() {
  return (
    <a href="/Phelelani-Mkhize-CV.pdf" target="_blank" rel="noopener noreferrer" download>
      <Button
        variant="outline"
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Download CV
        <Download className="ml-2 h-4 w-4" />
      </Button>
    </a>
  )
}
