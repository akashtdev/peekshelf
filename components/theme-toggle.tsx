import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
	const { isDark, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className={cn(
				'inline-flex items-center justify-center size-9 rounded-md',
				'bg-secondary hover:bg-accent transition-colors',
				'text-secondary-foreground hover:text-accent-foreground',
				className
			)}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} size={18} />
		</button>
	);
}
