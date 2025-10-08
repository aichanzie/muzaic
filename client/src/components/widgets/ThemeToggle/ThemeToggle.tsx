import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/UseTheme';
import IconButton from '../../common/IconButton/IconButton';
const ThemeIcons = {
	light: Sun,
	dark: Moon,
};

interface ThemeToggleProps {
	buttonStyle: any;
}
const ThemeToggle = ({ buttonStyle }: ThemeToggleProps) => {
	const { theme, cycle } = useTheme();

	const themeIcon = ThemeIcons[theme] || Sun;
	return <IconButton icon={themeIcon} onClick={cycle} {...buttonStyle} />;
};

export default ThemeToggle;
