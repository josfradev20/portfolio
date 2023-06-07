import { IconType } from 'react-icons'

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: IconType
}
