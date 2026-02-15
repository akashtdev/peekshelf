import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window === 'undefined') return 'system';
		return (localStorage.getItem('theme') as Theme) || 'system';
	});

	const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

	useEffect(() => {
		const root = document.documentElement;

		const applyTheme = (newTheme: Theme) => {
			let resolved: 'light' | 'dark';

			if (newTheme === 'system') {
				resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
			} else {
				resolved = newTheme;
			}

			setResolvedTheme(resolved);

			if (resolved === 'dark') {
				root.classList.add('dark');
			} else {
				root.classList.remove('dark');
			}
		};

		applyTheme(theme);

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			if (theme === 'system') {
				applyTheme('system');
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [theme]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return {
		theme,
		resolvedTheme,
		setTheme,
		isDark: resolvedTheme === 'dark',
		isLight: resolvedTheme === 'light',
	};
}
