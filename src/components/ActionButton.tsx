import { ActionButtonProps } from '../components/types.ts'
import { Button } from './Button'

export function ActionButton({ action, onClick, disabled }: ActionButtonProps) {
  // Determine the variant based on whether the action has been used
  const getVariant = () => {
    if (disabled) return 'disabled'
    if (action.used) return 'selected'
    return 'primary'
  }

  return (
    <Button
      onClick={() => onClick(action.action)}
      disabled={disabled}
      variant={getVariant()}
      className="w-full text-lg py-4 relative group transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-2xl">{action.label.split(' ')[0]}</span>
        <span>{action.label.split(' ').slice(1).join(' ')}</span>
      </div>
    </Button>
  )
}
