import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
            A collection of my work in data analysis, GIS, spatial analysis, and data science. These projects showcase
            my skills and expertise in solving real-world problems.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="gis">GIS & Spatial</TabsTrigger>
            <TabsTrigger value="data-science">Data Science</TabsTrigger>
            <TabsTrigger value="retail">Retail Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {/* UrbanMind AI Project */}
            <Card id="urbanmind-ai" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="UrbanMind AI Zoning Agent"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/urbanmind-screenshot.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>UrbanMind AI Zoning Agent</CardTitle>
                    <CardDescription>Bedrock-powered zoning rule interpreter for urban planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed an AI-powered zoning rule interpreter using AWS Bedrock to automate and streamline urban
                      planning processes. The system interprets complex zoning regulations, provides recommendations,
                      and assists planners and developers in navigating regulatory requirements.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AWS Bedrock</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Planning</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Zoning</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link href="https://github.com/PhelelaniM/UrbanMind" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Link href="https://urbanmind.onrender.com/" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* Hotel Strategy BI Project */}
            <Card id="hotel-strategy-bi" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="Hotel Strategy BI"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/hotel-strategy-bi.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>Hotel Strategy BI</CardTitle>
                    <CardDescription>Interactive Power BI dashboard for hotel business analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Created a comprehensive Power BI dashboard for Happy Holidays Hotel group to analyze business
                      performance metrics including year-on-year growth, parking impact, client demographics, and
                      cost-saving opportunities. The dashboard provides interactive visualizations and actionable
                      insights to support strategic decision-making.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Power BI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Data Visualization</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Hospitality Analytics</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SQL</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Business Intelligence</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/PhelelaniM/Happy_Holidays-Hotel-Business-Dashboard"
                        target="_blank"
                      >
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* SAM Image Detection Project */}
            <Card id="sam-detection" className="overflow-hidden relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="SAM Image Detection"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>SAM Image Detection</CardTitle>
                    <CardDescription>
                      Informal settlement mapping using Meta's SAM and satellite imagery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implementing Meta's Segment Anything Model (SAM) to detect and map informal settlements from
                      satellite imagery. This project will help urban planners and government agencies identify and
                      monitor informal settlements for better resource allocation and service delivery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Computer Vision</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SAM</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">GIS</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Remote Sensing</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="gis" className="space-y-8">
            {/* SAM Image Detection Project */}
            <Card id="sam-detection" className="overflow-hidden relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="SAM Image Detection"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>SAM Image Detection</CardTitle>
                    <CardDescription>
                      Informal settlement mapping using Meta's SAM and satellite imagery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implementing Meta's Segment Anything Model (SAM) to detect and map informal settlements from
                      satellite imagery. This project will help urban planners and government agencies identify and
                      monitor informal settlements for better resource allocation and service delivery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Computer Vision</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SAM</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">GIS</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Remote Sensing</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* UrbanMind AI Project */}
            <Card id="urbanmind-ai" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="UrbanMind AI Zoning Agent"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/urbanmind-screenshot.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>UrbanMind AI Zoning Agent</CardTitle>
                    <CardDescription>Bedrock-powered zoning rule interpreter for urban planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed an AI-powered zoning rule interpreter using AWS Bedrock to automate and streamline urban
                      planning processes. The system interprets complex zoning regulations, provides recommendations,
                      and assists planners and developers in navigating regulatory requirements.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AWS Bedrock</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Planning</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Zoning</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link href="https://github.com/PhelelaniM/UrbanMind" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Link href="https://urbanmind.onrender.com/" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="data-science" className="space-y-8">
            {/* UrbanMind AI Project */}
            <Card id="urbanmind-ai" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="UrbanMind AI Zoning Agent"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/urbanmind-screenshot.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>UrbanMind AI Zoning Agent</CardTitle>
                    <CardDescription>Bedrock-powered zoning rule interpreter for urban planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed an AI-powered zoning rule interpreter using AWS Bedrock to automate and streamline urban
                      planning processes. The system interprets complex zoning regulations, provides recommendations,
                      and assists planners and developers in navigating regulatory requirements.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AWS Bedrock</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">AI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Planning</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Zoning</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link href="https://github.com/PhelelaniM/UrbanMind" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Link href="https://urbanmind.onrender.com/" target="_blank">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* SAM Image Detection Project */}
            <Card id="sam-detection" className="overflow-hidden relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="SAM Image Detection"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>SAM Image Detection</CardTitle>
                    <CardDescription>
                      Informal settlement mapping using Meta's SAM and satellite imagery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implementing Meta's Segment Anything Model (SAM) to detect and map informal settlements from
                      satellite imagery. This project will help urban planners and government agencies identify and
                      monitor informal settlements for better resource allocation and service delivery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Computer Vision</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SAM</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">GIS</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Remote Sensing</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* Hotel Strategy BI Project */}
            <Card id="hotel-strategy-bi" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="Hotel Strategy BI"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/hotel-strategy-bi.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>Hotel Strategy BI</CardTitle>
                    <CardDescription>Interactive Power BI dashboard for hotel business analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Created a comprehensive Power BI dashboard for Happy Holidays Hotel group to analyze business
                      performance metrics including year-on-year growth, parking impact, client demographics, and
                      cost-saving opportunities. The dashboard provides interactive visualizations and actionable
                      insights to support strategic decision-making.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Power BI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Data Visualization</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Hospitality Analytics</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SQL</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Business Intelligence</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/PhelelaniM/Happy_Holidays-Hotel-Business-Dashboard"
                        target="_blank"
                      >
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="retail" className="space-y-8">
            {/* Hotel Strategy BI Project */}
            <Card id="hotel-strategy-bi" className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    alt="Hotel Strategy BI"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/images/hotel-strategy-bi.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>Hotel Strategy BI</CardTitle>
                    <CardDescription>Interactive Power BI dashboard for hotel business analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Created a comprehensive Power BI dashboard for Happy Holidays Hotel group to analyze business
                      performance metrics including year-on-year growth, parking impact, client demographics, and
                      cost-saving opportunities. The dashboard provides interactive visualizations and actionable
                      insights to support strategic decision-making.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Power BI</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Data Visualization</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Hospitality Analytics</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">SQL</div>
                      <div className="rounded-md bg-muted px-2 py-1 text-xs">Business Intelligence</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/PhelelaniM/Happy_Holidays-Hotel-Business-Dashboard"
                        target="_blank"
                      >
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="gap-1" disabled>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
