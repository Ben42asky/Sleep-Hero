import { AchievementPopupProps } from './types'

export function AchievementPopup({ achievement }: AchievementPopupProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg animate-[slideIn_0.5s_ease-out]">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{achievement.icon}</span>
        <div>
          <h3 className="font-bold">Achievement Unlocked!</h3>
          <p className="text-sm">{achievement.title}</p>
        </div>
      </div>
    </div>
  )
}
