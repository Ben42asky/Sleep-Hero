import { Action } from '../types'
import { ActionButton } from './ActionButton'

interface ActionContainerProps {
  actions: Action[]
  onAction: (actionId: string) => void
  disabled?: boolean
}

export function ActionContainer({ actions, onAction, disabled }: ActionContainerProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-white/90 text-center">
        Available Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action) => (
          <ActionButton
            key={action.action}
            action={action}
            onClick={onAction}
            disabled={disabled || (action.used && action.sleepEffect > 0)}
          />
        ))}
      </div>
    </div>
  )
}
