import { NextResponse } from "next/server"

// Add these exports to make the route compatible with static export
export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  try {
    // For static export, we'll just redirect to the pre-built PDF
    // This won't actually run in the static export, but it's needed for the build
    const baseUrl = process.env.RENDER_EXTERNAL_URL || process.env.VERCEL_URL ? `https://${process.env.RENDER_EXTERNAL_URL || process.env.VERCEL_URL}` : 'http://localhost:10000';
    return NextResponse.redirect(`${baseUrl}/Phelelani-Mkhize-CV.pdf`)
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
