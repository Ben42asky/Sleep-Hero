interface ScoreDisplayProps {
    points: number
  }
  
  export function ScoreDisplay({ points }: ScoreDisplayProps) {
    return (
      <div className="flex justify-center">
        <div className="bg-[#0d3c26]/10 rounded-lg px-4 py-2">
          <div className="text-sm text-[#0d3c26]/70">Current Score</div>
          <div className="text-2xl font-bold text-[#0d3c26]">{points} pts</div>
        </div>
      </div>
    )
  }
  
  