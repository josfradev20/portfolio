import { IconButtonProps } from './iconButton.interface'

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const Icon = icon
  return (
    <button
      className="flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] border-fuchsia-500 rounded-[50%] text-[2rem] text-fuchsia-500 hover:bg-fuchsia-500 hover:text-slate-900 hover:shadow-[0_0_1rem_#d946ef] transition duration-[.5s] ease-out"
      {...props}
    >
      <Icon />
    </button>
  )
}
