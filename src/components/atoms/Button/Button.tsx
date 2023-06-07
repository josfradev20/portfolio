import { BiLoaderAlt } from 'react-icons/bi'

import { ButtonProps } from './button.interface'
import { getButtonClass } from './button.styles'

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  shape = 'rounded',
  loading,
  fullWidth,
  disabled,
  ...props
}) => {
  return (
    <button
      className={getButtonClass({ color, size, shape, fullWidth, disabled })}
      disabled={disabled}
      {...props}
    >
      {loading && <BiLoaderAlt className="animate-spin text-xl" />}
      {children}
    </button>
  )
}
