import clsx from 'clsx'

export function getButtonClass({ color, size, shape, fullWidth, disabled }) {
  const classes = clsx(
    'font-bold transition inline-flex justify-center items-center gap-2',
    {
      'bg-fuchsia-600 hover:bg-fuchsia-700 hover:shadow-none shadow-[0_0_1rem_#a21caf] text-white':
        color === 'primary' && !disabled,
      'bg-violet-700 hover:bg-violet-800 text-white':
        color === 'accent' && !disabled,
      'bg-gray-500 hover:bg-gray-600 text-white':
        color === 'secondary' && !disabled,
      'bg-green-700 hover:bg-green-800 text-white':
        color === 'success' && !disabled,
      'bg-red-700 hover:bg-red-800 text-white': color === 'danger' && !disabled,
      'bg-amber-400 hover:bg-amber-300 text-black':
        color === 'warning' && !disabled,
      'bg-cyan-500 hover:bg-cyan-400 text-black': color === 'info' && !disabled,
      'bg-gray-50 hover:bg-gray-300 text-black': color === 'light' && !disabled,
      'bg-black hover:opacity-80 text-white': color === 'dark' && !disabled,
      'py-3.5 px-9 text-2xl': size === 'sm',
      'py-4 px-[2.8rem] text-[1.6rem]': size === 'md',
      'py-6 px-14 text-[1.6rem]': size === 'lg',
      'rounded-[40px]': shape === 'pill',
      'rounded-lg': shape === 'rounded',
      'rounded-none': shape === 'square',
      'cursor-pointer': !disabled,
      'bg-gray-300 text-gray-600 cursor-not-allowed': disabled,
      'w-full': fullWidth
    }
  )
  return classes
}
