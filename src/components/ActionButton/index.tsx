import { ActionButtonProps } from './types'
import { Button } from '../Button'

export function ActionButton({ action, onClick, disabled }: ActionButtonProps) {
  return (
    <Button
      onClick={() => onClick(action.action)}
      disabled={disabled}
      className={`w-full text-lg ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {action.label}
    </Button>
  )
}
