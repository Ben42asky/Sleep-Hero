interface ProgressBarProps {
    value: number
    max: number
    label: string
    color: string
  }
  
  export function ProgressBar({ value, max, label, color }: ProgressBarProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-[#0d3c26]">{label}</span>
          <span className="text-sm font-medium text-[#0d3c26]">{Math.round(percentage)}%</span>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-500 ease-out`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    )
  }
  
  