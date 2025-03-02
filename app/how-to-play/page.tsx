"use client"

import { useRouter } from "next/navigation"
import { Moon, Brain, Activity, ArrowLeft } from "lucide-react"
import { Button } from "@/components/Button"

export default function HowToPlay() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-[#0d3c26] p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#daf2ce] rounded-full flex items-center justify-center mr-3">
              <Moon className="w-6 h-6 text-[#0d3c26]" />
            </div>
            <h1 className="text-2xl font-bold">How to Play Sleep Hero</h1>
          </div>
          <Button
            onClick={() => router.push("/main-menu")}
            variant="secondary"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Menu
          </Button>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Game Objective
            </h2>
            <p className="text-[#0d3c26]/80 leading-relaxed">
              Your goal is to reach 100% sleep progress by choosing the most effective sleep techniques. Each challenge
              presents you with different sleep obstacles to overcome.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              How to Play
            </h2>
            <div className="space-y-4">
              <div className="bg-[#daf2ce]/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">1. Choose Actions Carefully</h3>
                <p className="text-[#0d3c26]/80">
                  You'll see 5 different actions in each challenge. Three are helpful sleep techniques, while two might
                  actually harm your sleep. Choose wisely!
                </p>
              </div>

              <div className="bg-[#daf2ce]/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">2. Learn from Feedback</h3>
                <p className="text-[#0d3c26]/80">
                  After selecting an action, you'll see if it helps or hurts your sleep progress. Good choices turn
                  green, while counterproductive ones turn red.
                </p>
              </div>

              <div className="bg-[#daf2ce]/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">3. Reach 100% Progress</h3>
                <p className="text-[#0d3c26]/80">
                  To complete a challenge, you need to reach 100% sleep progress. The three helpful techniques will add
                  up to exactly 100% when used together.
                </p>
              </div>

              <div className="bg-[#daf2ce]/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">4. Watch Out for Setbacks</h3>
                <p className="text-[#0d3c26]/80">
                  Choosing unhelpful actions will reduce your sleep progress. If you make too many wrong choices, you'll
                  need to restart the challenge.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#0d3c26]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Tips for Success</h2>
            <ul className="space-y-2 text-[#0d3c26]/80">
              <li>• Think about which actions would genuinely help someone fall asleep</li>
              <li>• Learn from your mistakes - remember which actions were helpful</li>
              <li>• Try to complete challenges without using any negative actions</li>
              <li>• Pay attention to the feedback after each action</li>
            </ul>
          </section>

          <div className="flex justify-center pt-4">
            <Button onClick={() => router.push("/gameplay")} variant="primary">
              Start Playing
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

