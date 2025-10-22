import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: LucideIcon;
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
	badge?: number | string | null;
	tooltip?: string;
	className?: string;
}

const IconButton = ({ icon: Icon, variant = 'default', size = 'md', rounded = 'md', badge = null, tooltip = '', className = '', ...props }: IconButtonProps) => {
	const variants = {
		default: 'hover:bg-white-300 dark:hover:bg-black-100 text-text',
		primary: 'bg-primary hover:bg-carrot-500 text-white-100',
		secondary: 'bg-secondary hover:bg-plum-500 text-white-100',
		ghost: 'hover:bg-white-200 dark:hover:bg-black-300 text-text-muted hover:text-text',
		danger: 'hover:bg-red-100 dark:hover:bg-red-900/20 text-text hover:text-red-500',
		success: 'hover:bg-green-100 dark:hover:bg-green-900/20 text-text hover:text-green-500',
	};

	const sizes = {
		xs: 'p-1',
		sm: 'p-1.5',
		md: 'p-2',
		lg: 'p-3',
		xl: 'p-4',
	};

	const iconSizes = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8',
	};

	const roundedOptions = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		xl: 'rounded-xl',
		full: 'rounded-full',
	};

	return (
		<button
			title={tooltip}
			className={`
				relative
				${sizes[size]}
				${variants[variant]}
				${roundedOptions[rounded]}
				transition-all
				duration-200
				hover:scale-105
				active:scale-95
				disabled:opacity-50
				disabled:cursor-not-allowed
				disabled:hover:scale-100
				${className}
			`}
			{...props}
		>
			<Icon className={iconSizes[size]} strokeWidth={1.5} />

			{badge && <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-carrot-400 text-white-100 text-xs font-bold rounded-full px-1">{badge}</span>}
		</button>
	);
};

export default IconButton;
