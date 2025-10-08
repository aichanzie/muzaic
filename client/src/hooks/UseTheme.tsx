import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
const THEME_KEY = 'theme-preference';

function getSystemTheme(): 'light' | 'dark' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): 'light' | 'dark' {
	const root = document.documentElement;

	if (theme === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}

	return theme;
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		const stored = localStorage.getItem(THEME_KEY) as Theme | null;
		return stored ?? getSystemTheme();
	});

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	const cycle = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return { theme, setTheme, cycle };
}
