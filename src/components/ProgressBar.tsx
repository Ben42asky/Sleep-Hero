import { ProgressBarProps } from './types'

export function ProgressBar({ value, max, label, color }: ProgressBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100))
  
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">
          {value}/{max}
        </span>
      </div>
      <div className="relative w-full h-6 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        {/* Background pulse effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        
        {/* Progress bar */}
        <div
          className={`h-full ${color} transition-all duration-500 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            style={{
              animation: 'slideIn 2s linear infinite'
            }}
          />
          
          {/* Glow effect at the end of the progress */}
          {percentage > 0 && (
            <div
              className="absolute right-0 inset-y-0 w-4 bg-gradient-to-r from-transparent to-white/30"
              style={{
                animation: 'glowPulse 1.5s ease-in-out infinite'
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
