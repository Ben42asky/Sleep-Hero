import { AchievementPopupProps } from '../components/types.ts'

export function AchievementPopup({ achievement }: AchievementPopupProps) {
  return (
    <div className="animate-[slideIn_0.5s_ease-out] transform hover:scale-105 transition-transform">
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-[2px] rounded-2xl shadow-lg">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center text-3xl bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl">
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Achievement Unlocked!</h3>
              <p className="text-sm text-gray-600">{achievement.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
