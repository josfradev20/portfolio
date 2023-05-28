import {clsx} from 'clsx';
import {BiLoaderAlt} from 'react-icons/bi';

import {ButtonProps} from './button.interface';

export const Button: React.FC<ButtonProps> = ({
	children,
	color = 'primary',
	size = 'md',
	shape = 'rounded',
	loading,
	fullWidth,
	...props
}) => {
	const classes = clsx(
		'font-bold transition inline-flex justify-center items-center gap-2',
		{
			'bg-sky-600 hover:bg-sky-700 text-white':
				color === 'primary' && !props.disabled,
			'bg-violet-700 hover:bg-violet-800 text-white':
				color === 'accent' && !props.disabled,
			'bg-gray-500 hover:bg-gray-600 text-white':
				color === 'secondary' && !props.disabled,
			'bg-green-700 hover:bg-green-800 text-white':
				color === 'success' && !props.disabled,
			'bg-red-700 hover:bg-red-800 text-white':
				color === 'danger' && !props.disabled,
			'bg-amber-400 hover:bg-amber-300 text-black':
				color === 'warning' && !props.disabled,
			'bg-cyan-500 hover:bg-cyan-400 text-black':
				color === 'info' && !props.disabled,
			'bg-gray-50 hover:bg-gray-300 text-black':
				color === 'light' && !props.disabled,
			'bg-black hover:opacity-80 text-white':
				color === 'dark' && !props.disabled,
			'py-2 px-5 text-sm': size === 'sm',
			'py-2.5 px-6 text-base': size === 'md',
			'py-3.5 px-8 text-base': size === 'lg',
			'rounded-[40px]': shape === 'pill',
			'rounded-lg': shape === 'rounded',
			'rounded-none': shape === 'square',
			'cursor-pointer': !props.disabled,
			'bg-gray-300 text-gray-600 cursor-not-allowed': props.disabled,
			'w-full': fullWidth,
		}
	);

	return (
		<button className={classes} {...props}>
			{loading && <BiLoaderAlt className='animate-spin text-xl' />}
			{children}
		</button>
	);
};
