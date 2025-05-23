"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeDownloadButtonProps {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children?: React.ReactNode
}

export function ResumeDownloadButton({
  className,
  variant = "default",
  size = "default",
  children,
}: ResumeDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      // Fetch the PDF file
      const response = await fetch("/bhaskar-kumar-resume.pdf")
      const blob = await response.blob()

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob)

      // Create a temporary anchor element and trigger download
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = "bhaskar-kumar-resume.pdf"

      // Append to the document, click and cleanup
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button className={className} variant={variant} size={size} onClick={handleDownload} disabled={isDownloading}>
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Downloading..." : children || "Download Resume"}
    </Button>
  )
}
