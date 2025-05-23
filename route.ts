import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // In a real implementation, you might generate a PDF dynamically here
    // For now, we'll redirect to the static PDF file
    return NextResponse.redirect(new URL("/bhaskar-kumar-resume.pdf", request.url))
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
