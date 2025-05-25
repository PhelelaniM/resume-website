"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PdfGenerator } from "@/app/components/pdf-generator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Phelelani Mkhize</h1>
                  <p className="text-xl text-muted-foreground">Data Scientist & Location Intelligence Specialist</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/resume">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      View Resume
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <PdfGenerator />
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/PhelelaniM" target="_blank">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/phelelani-mkhize/" target="_blank">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:Phelelanim8@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 p-2 dark:from-slate-800 dark:to-slate-900">
                  <img
                    alt="Phelelani Mkhize"
                    className="object-cover w-full h-full rounded-lg"
                    height="450"
                    src="/images/profile-photo.jpeg"
                    style={{
                      aspectRatio: "350/450",
                      objectFit: "cover",
                    }}
                    width="350"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Versatile Data Scientist and Location Intelligence Specialist with 6+ years of experience building
                  end-to-end data systems that cut across geospatial analysis, market feasibility, insurance risk, and
                  product innovation. I specialize in bridging exploratory analytics with product strategy, designing
                  solutions that translate complexity into actionable insights—particularly in emerging markets,
                  township economies, and urban planning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Location Intelligence</h3>
                      <p className="text-muted-foreground">
                        Expert in leveraging spatial data to drive business decisions and strategy, particularly in
                        retail, urban planning, and emerging markets.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">GIS & Spatial Analysis</h3>
                      <p className="text-muted-foreground">
                        Specialized in geospatial data processing, analysis, and visualization using ArcGIS Pro, QGIS,
                        and Python libraries like GeoPandas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cloud Architecture</h3>
                      <p className="text-muted-foreground">
                        AWS-certified in Architecture and Machine Learning, with expertise in both AWS and GCP
                        ecosystems.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Data Science</h3>
                      <p className="text-muted-foreground">
                        Skilled in machine learning, statistical modeling, and predictive analytics for solving complex
                        problems in retail, insurance, and urban planning.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Retail & Market Research</h3>
                      <p className="text-muted-foreground">
                        Specialized in market analysis, site selection, and consumer behavior insights for retail and
                        property sectors, with focus on emerging markets.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Product Discovery</h3>
                      <p className="text-muted-foreground">
                        Experience in product ownership, problem framing, and prototype shaping across informal retail,
                        logistics, and township data products.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent work in data science, GIS, and location intelligence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img
                    alt="UrbanMind AI Zoning Agent"
                    className="object-cover w-full h-full"
                    height="240"
                    src="/images/urbanmind-screenshot.png"
                    style={{
                      aspectRatio: "360/240",
                      objectFit: "cover",
                    }}
                    width="360"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">UrbanMind AI Zoning Agent</h3>
                  <p className="text-sm text-muted-foreground">
                    Bedrock-powered zoning rule interpreter for urban planning and development.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="/projects#urbanmind-ai">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                    </Link>
                    <Link href="https://github.com/PhelelaniM/UrbanMind" target="_blank">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img
                    alt="Hotel Strategy BI"
                    className="object-cover w-full h-full"
                    height="240"
                    src="/images/hotel-strategy-bi.png"
                    style={{
                      aspectRatio: "360/240",
                      objectFit: "cover",
                    }}
                    width="360"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Hotel Strategy BI</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive Power BI dashboard for hotel business performance analysis and insights.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="/projects#hotel-strategy-bi">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                    </Link>
                    <Link href="https://github.com/PhelelaniM/Happy_Holidays-Hotel-Business-Dashboard" target="_blank">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden relative">
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
                </div>
                <div className="h-60 overflow-hidden">
                  <img
                    alt="SAM Image Detection"
                    className="object-cover w-full h-full"
                    height="240"
                    src="/placeholder.svg?height=240&width=360"
                    style={{
                      aspectRatio: "360/240",
                      objectFit: "cover",
                    }}
                    width="360"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">SAM Image Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Informal settlement mapping using Meta's SAM and satellite imagery for urban planning.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="/projects#sam-detection">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" disabled>
                      <Github className="h-4 w-4 opacity-50" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
