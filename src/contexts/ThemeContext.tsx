import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'reading' | 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        // 从 localStorage 读取主题设置
        const saved = localStorage.getItem('business-plan-theme');
        return (saved as Theme) || 'dark';
    });

    useEffect(() => {
        // 持久化主题设置
        localStorage.setItem('business-plan-theme', theme);
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// 主题样式配置
export const themeStyles = {
    reading: {
        background: 'bg-amber-50',
        text: 'text-gray-900',
        heading: 'text-amber-900',
        card: 'bg-white/60 backdrop-blur-sm',
        border: 'border-amber-200',
        accent: 'text-amber-700',
        tableHeader: 'bg-amber-100/50',
        tableRow: 'hover:bg-amber-100/30',
    },
    dark: {
        background: 'bg-gradient-to-br from-slate-900 to-slate-800',
        text: 'text-gray-300',
        heading: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500',
        card: 'bg-white/10 backdrop-blur-md border border-white/20',
        border: 'border-cyan-500/30',
        accent: 'text-cyan-400',
        tableHeader: 'bg-white/10',
        tableRow: 'hover:bg-white/5',
    },
    light: {
        background: 'bg-white',
        text: 'text-gray-700',
        heading: 'text-blue-900',
        card: 'bg-gray-50 border border-gray-200',
        border: 'border-gray-300',
        accent: 'text-blue-600',
        tableHeader: 'bg-gray-100',
        tableRow: 'hover:bg-gray-50',
    },
};
