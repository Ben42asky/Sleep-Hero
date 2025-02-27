import { PointsPopupProps } from '../types/components'

export function PointsPopup({ points, position, variant = 'action' }: PointsPopupProps) {
  const variants = {
    action: "text-yellow-400",
    victory: "text-green-400 text-2xl"
  }

  return (
    <div
      className={`fixed pointer-events-none font-bold animate-[floatUp_1s_ease-out] ${variants[variant]}`}
      style={{ left: position.x, top: position.y }}
    >
      +{points}
    </div>
  )
}
