import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Professional Journey</h1>
          <p className="mt-4 text-muted-foreground">
            A timeline of my educational and professional experiences in data science, GIS, and location intelligence.
          </p>
        </div>

        <div className="relative border-l border-muted pl-6 ml-4 space-y-10">
          {/* Current Position */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-primary bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Oct 2024 - Present</CardDescription>
                <CardTitle>Business Data Scientist (SME)</CardTitle>
                <CardDescription>Timbuk2.ai, Remote</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Product-facing data scientist driving innovation through exploration, analytics, and use-case
                  discovery. Acting as product owner and analyst, prioritizing problem framing, insight generation, and
                  prototype shaping across informal retail, logistics, and township data products.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Product Discovery</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Location Intelligence</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">AWS</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">GCP</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Previous Position */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2023 - 2024</CardDescription>
                <CardTitle>Analyst – Risk Management (Group UW)</CardTitle>
                <CardDescription>Santam Insurance, Cape Town</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Led spatial exposure modeling and geo-risk profiling for group commercial underwriting. Integrated
                  ArcGIS datasets with internal claim and asset data to support strategic underwriting decisions.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Geo-risk Intelligence</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">ArcGIS</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Insurance</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Spatial Analysis</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Earlier Position */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2021 - 2023</CardDescription>
                <CardTitle>Associate Analyst</CardTitle>
                <CardDescription>Fernridge Solutions, Johannesburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Provided location intelligence and business analytics for major South African retail chains. Created
                  dashboards, gap analyses, and spatial feasibility reports using Power BI, Tableau, Alteryx, and SQL.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Location Intelligence</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Retail Analytics</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Power BI</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Tableau</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* First Job */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2020 - 2021</CardDescription>
                <CardTitle>Development Economist</CardTitle>
                <CardDescription>Urban-Econ, Pretoria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Performed feasibility studies and economic modeling for real estate and infrastructure development.
                  Used ArcGIS and national datasets to advise local governments and private developers.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Planning</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Economic Modeling</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">ArcGIS</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Feasibility Studies</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education - Masters */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2019</CardDescription>
                <CardTitle>Master's in Urban & Regional Planning</CardTitle>
                <CardDescription>University of the Free State</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Focused on urban planning, spatial analysis, and development economics. Received Dean's Merit Bursary
                  for academic excellence.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Planning</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Spatial Analysis</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Development Economics</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Research</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education - Honours */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2018</CardDescription>
                <CardTitle>BSc Honours in Spatial Planning</CardTitle>
                <CardDescription>University of the Free State</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Specialized in spatial planning methodologies, GIS applications, and urban development frameworks.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Spatial Planning</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">GIS</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Urban Development</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education - Bachelors */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>2017</CardDescription>
                <CardTitle>Bachelor of Science</CardTitle>
                <CardDescription>University of the Free State</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Studied Geography and Geology, developing a strong foundation in spatial analysis, earth sciences, and
                  environmental systems.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Geography</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Geology</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Spatial Analysis</div>
                  <div className="rounded-md bg-muted px-2 py-1 text-xs">Environmental Systems</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Starting Point */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-muted"></div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>The Beginning</CardDescription>
                <CardTitle>The Journey Begins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Developed an early interest in geography, spatial patterns, and urban development. Began exploring GIS
                  tools and data analysis techniques before pursuing formal education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
