"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Moon, Brain, Activity } from "lucide-react"
import { Button } from "@/components/Button"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Add animation classes
    document.documentElement.classList.add("bg-[#f0f7ff]")
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f0f7ff]">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-[#daf2ce] rounded-full flex items-center justify-center">
              <Moon className="w-12 h-12 text-[#0d3c26]" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#0d3c26] rounded-full flex items-center justify-center animate-pulse">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#0d3c26] rounded-full flex items-center justify-center animate-bounce">
              <Activity className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#0d3c26] mb-2">Sleep Hero</h1>
        <p className="text-[#0d3c26]/70 mb-8">
          Battle sleep obstacles and learn techniques to improve your sleep quality
        </p>

        <div className="space-y-4">
          <Button onClick={() => router.push("/main-menu")} variant="primary">
            Start Your Sleep Journey
          </Button>

          <p className="text-xs text-[#0d3c26]/60">Learn effective sleep techniques while having fun!</p>
        </div>
      </div>
    </div>
  )
}

