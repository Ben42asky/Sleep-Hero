import { Action } from '../../types/Challenge'

export interface ActionButtonProps {
  action: Action
  onClick: (action: string) => void
  disabled?: boolean
}
