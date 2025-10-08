import { Bell, Home, Library, Settings } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../../common/IconButton/IconButton';
import ThemeToggle from '../../widgets/ThemeToggle/ThemeToggle';

const NavigationBar: React.FC = () => {
	const logoStyle = 'text-2xl font-bold text-primary hover:text-primary-dark transition-colors';
	const buttonStyles = {
		size: 'md',
		variant: 'default',
		rounded: 'full',
	};
	return (
		<nav className="flex gap-6">
			<div className="w-full px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex gap-4 items-start">
						<IconButton icon={Library} size="md" variant="default" rounded="full" />
						<Link to="/" className={logoStyle}>
							muzaic
						</Link>
					</div>
					<div className="flex gap-8 items-center">
						<div>Search</div>
					</div>
					<div className="flex gap-4 items-center">
						<ThemeToggle buttonStyle={buttonStyles} />
						<IconButton icon={Bell} size="md" variant="default" rounded="full" />
						<IconButton icon={Settings} size="md" variant="default" rounded="full" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
