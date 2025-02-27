import { ScoreDisplayProps } from './types';
export function ScoreDisplay({ points, totalPoints }: ScoreDisplayProps) {
  return (
    <div className="flex gap-4 justify-center">
      <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 px-6 py-3 rounded-xl backdrop-blur-sm">
        <span className="text-yellow-700 font-medium">Current: </span>
        <span className="text-yellow-600 font-bold">{points} pts</span>
      </div>
      <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 px-6 py-3 rounded-xl backdrop-blur-sm">
        <span className="text-purple-700 font-medium">Total: </span>
        <span className="text-purple-600 font-bold">{totalPoints} pts</span>
      </div>
    </div>
  )
}
