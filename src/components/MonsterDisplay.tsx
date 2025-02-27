import { MonsterDisplayProps } from '../components/types.ts'

export function MonsterDisplay({ monster, isAttacked }: MonsterDisplayProps) {
  const [emoji, ...nameParts] = monster.split(' ')
  const name = nameParts.join(' ')

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {/* Background glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          style={{
            animation: 'pulse 3s ease-in-out infinite',
            transform: 'scale(1.5)'
          }}
        />
        
        {/* Monster emoji with animations */}
        <div
          className={`
            relative text-8xl md:text-9xl
            transition-all duration-300
            ${isAttacked ? 'animate-[shake_0.5s_ease-in-out]' : 'animate-float'}
            hover:scale-110
            cursor-pointer
          `}
        >
          {emoji}
        </div>
      </div>
      
      {/* Monster name with gradient text */}
      {name && (
        <div
          className={`
            text-2xl font-bold
            bg-clip-text text-transparent
            bg-gradient-to-r from-blue-600 to-purple-600
            animate-[slideIn_0.5s_ease-out]
            hover:scale-105
            transition-transform
          `}
        >
          {name}
        </div>
      )}
    </div>
  )
}
