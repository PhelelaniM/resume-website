import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PdfGenerator } from "@/app/components/pdf-generator"

export default function ResumePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <img
                    alt="Phelelani Mkhize"
                    className="object-cover"
                    height="160"
                    src="/images/profile-photo.jpeg"
                    style={{
                      aspectRatio: "160/160",
                      objectFit: "cover",
                    }}
                    width="160"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <h1 className="text-2xl font-bold">Phelelani Mkhize</h1>
                  <p className="text-muted-foreground">Data Scientist & Location Intelligence Specialist</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Contact Information</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>Phelelanim8@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>+27 76 173 5130</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>South Africa</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Skills</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Location Intelligence</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>GIS & Spatial Analysis</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Data Science</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Cloud Architecture</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Retail Analytics</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">Python</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">SQL</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">ArcGIS Pro</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">QGIS</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">AWS</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">GCP</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">Power BI</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">Tableau</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">Alteryx</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">GeoPandas</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">Folium</div>
                    <div className="rounded-md bg-muted px-2 py-1 text-xs">MapboxGL</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Certifications</h3>
                  <div className="space-y-1 text-sm">
                    <p>AWS Certified Machine Learning Engineer – Associate</p>
                    <p>AWS Certified Solutions Architect – Associate</p>
                    <p>AWS Certified Cloud Practitioner</p>
                    <p>FinOps Certified Practitioner</p>
                    <p>Google Data Analytics Professional Certificate</p>
                  </div>
                </div>
                <div className="pt-4">
                  <PdfGenerator />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-2/3" id="printable-resume">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Business Data Scientist (SME)</h3>
                        <div className="text-sm text-muted-foreground">Oct 2024 - Present</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Timbuk2.ai, Remote</div>
                      <ul className="list-disc pl-5 text-sm space-y-1 pt-2">
                        <li>
                          Product-facing data scientist driving innovation through exploration, analytics, and use-case
                          discovery
                        </li>
                        <li>
                          Act as product owner and analyst, prioritizing problem framing, insight generation, and
                          prototype shaping across informal retail, logistics, and township data products
                        </li>
                        <li>
                          Collaborate across data, business, and tech teams to generate and test hypotheses using
                          cloud-native tools (AWS + GCP)
                        </li>
                        <li>
                          Built internal research systems for AI-powered catchments, economic clustering, and spaza shop
                          viability
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Analyst – Risk Management (Group UW)</h3>
                        <div className="text-sm text-muted-foreground">2023 - 2024</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Santam Insurance, Cape Town</div>
                      <ul className="list-disc pl-5 text-sm space-y-1 pt-2">
                        <li>Led spatial exposure modeling and geo-risk profiling for group commercial underwriting</li>
                        <li>
                          Integrated ArcGIS datasets with internal claim and asset data to support strategic
                          underwriting decisions
                        </li>
                        <li>
                          Contributed to cross-disciplinary work linking actuarial, underwriting, and spatial insights
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Associate Analyst</h3>
                        <div className="text-sm text-muted-foreground">2021 - 2023</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Fernridge Solutions, Johannesburg</div>
                      <ul className="list-disc pl-5 text-sm space-y-1 pt-2">
                        <li>
                          Provided location intelligence and business analytics for major South African retail chains
                        </li>
                        <li>
                          Created dashboards, gap analyses, and spatial feasibility reports using Power BI, Tableau,
                          Alteryx, and SQL
                        </li>
                        <li>
                          Delivered market strategies that saved clients millions in CAPEX and guided expansion into new
                          trade areas
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Development Economist</h3>
                        <div className="text-sm text-muted-foreground">2020 - 2021</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Urban-Econ, Pretoria</div>
                      <ul className="list-disc pl-5 text-sm space-y-1 pt-2">
                        <li>
                          Performed feasibility studies and economic modeling for real estate and infrastructure
                          development
                        </li>
                        <li>Used ArcGIS and national datasets to advise local governments and private developers</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Master's in Urban & Regional Planning</h3>
                        <div className="text-sm text-muted-foreground">2019</div>
                      </div>
                      <div className="text-sm text-muted-foreground">University of the Free State</div>
                      <ul className="list-disc pl-5 text-sm space-y-1 pt-2">
                        <li>Masters by coursework and Research</li>
                        <li>Faculty of Natural and Agricultural Sciences Dean's Merit Bursary – Awarded to Top 15%</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">BSc Honours in Spatial Planning</h3>
                        <div className="text-sm text-muted-foreground">2018</div>
                      </div>
                      <div className="text-sm text-muted-foreground">University of the Free State</div>
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold">
                          Urban and Regional Planning Student Council - Chairperson
                        </h4>
                        <p className="text-xs text-muted-foreground">Jan 2019 - Nov 2019 · 11 mos</p>
                        <ul className="list-disc pl-5 text-sm space-y-1 pt-1">
                          <li>
                            Providing strategy and representation for students to faculty and departmental structures
                          </li>
                          <li>Develop and oversee departmental cohesion and academic projects</li>
                        </ul>
                        <h4 className="text-sm font-semibold mt-3">Social Media and Marketing</h4>
                        <p className="text-xs text-muted-foreground">2018</p>
                        <ul className="list-disc pl-5 text-sm space-y-1 pt-1">
                          <li>Responsible for the URP Student Council Newsletter and Social Calendar</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="font-bold">Bachelor of Science</h3>
                        <div className="text-sm text-muted-foreground">2017</div>
                      </div>
                      <div className="text-sm text-muted-foreground">University of the Free State</div>
                      <p className="text-sm pt-2">Geography and Geology</p>
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold">
                          SRC Student Development and Environmental Affairs - Executive Committee
                        </h4>
                        <p className="text-xs text-muted-foreground">Sep 2016 - Apr 2017 · 8 mos</p>
                        <ul className="list-disc pl-5 text-sm space-y-1 pt-1">
                          <li>Overseeing the Environmental Impacts on Campus along with Campus Management</li>
                          <li>
                            Facilitate Environmental Awareness and water shortage awareness during drought season in FS
                          </li>
                          <li>Facilitate student development workshops for career building</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Certifications</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">AWS Certified Machine Learning Engineer – Associate</h3>
                      <p className="text-sm text-muted-foreground">Mar 2025 – Mar 2028</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">AWS Certified Solutions Architect – Associate</h3>
                      <p className="text-sm text-muted-foreground">Jan 2025 – Jan 2028</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">AWS Certified Cloud Practitioner</h3>
                      <p className="text-sm text-muted-foreground">Dec 2024 – Dec 2027</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">FinOps Certified Practitioner</h3>
                      <p className="text-sm text-muted-foreground">FinOps Foundation</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Google Data Analytics Professional Certificate</h3>
                      <p className="text-sm text-muted-foreground">Coursera, Jan 2022</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Esri: Spatial Data Science – The New Frontier</h3>
                      <p className="text-sm text-muted-foreground">Jan 2022</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Certificate in Property Development & Investment</h3>
                      <p className="text-sm text-muted-foreground">University of Cape Town</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">AWS Partner: Technical Accredited</h3>
                      <p className="text-sm text-muted-foreground">Oct 2024</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
