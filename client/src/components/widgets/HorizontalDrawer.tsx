import { Maximize2, Minimize2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

type DrawerProps = {
	size: 'default' | 'compact' | 'full';
	title: string;
	position: 'left' | 'right' | 'top' | 'bottom' | 'center';
	onClick: () => void;
	children: React.ReactNode;
};

const HorizontalDrawer = ({ size, title, position, children }: DrawerProps) => {
	const variants = {
		// left: 'pl-4 border-l',
	};
	const borderOptions = {
		left: 'border-r pr-4',
		right: 'border-l pl-4',
		top: 'border-b pb-4',
		bottom: 'border-t pt-4',
		center: '',
	};
	const sizes = {
		default: 'w-80',
		compact: 'w-60',
		full: 'w-full',
	};

	return (
		<div className={`${borderOptions[position]} ${sizes[size]} p-4 h-full`}>
			<header className="flex">
				{size === 'default' ? (
					<PanelLeftClose className="w-6 h-6 mr-2 cursor-pointer" onClick={() => {}} strokeWidth={1.5} />
				) : size === 'compact' ? (
					<PanelLeftOpen className="w-5 h-5 mr-2 cursor-pointer" onClick={() => {}} />
				) : null}
				<h2 className="text-lg font-semibold">{title}</h2>
				{size === 'full' ? (
					<Minimize2 className="w-6 h-6 ml-2 cursor-pointer" onClick={() => {}} />
				) : size === 'default' ? (
					<Maximize2 className="w-5 h-5 ml-2 cursor-pointer" onClick={() => {}} />
				) : null}
			</header>
			{children}
		</div>
	);
};

export default HorizontalDrawer;
