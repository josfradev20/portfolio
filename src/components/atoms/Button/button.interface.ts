export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: BtnColorType;
	size?: BtnSizeType;
	shape?: BtnShapeType;
	loading?: boolean;
	fullWidth?: boolean;
}

type BtnColorType =
	| 'primary'
	| 'accent'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark';

type BtnSizeType = 'sm' | 'md' | 'lg';
type BtnShapeType = 'rounded' | 'pill' | 'square';
