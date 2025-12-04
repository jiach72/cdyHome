import { useState, useEffect } from 'react';
import { useTheme, themeStyles } from '../contexts/ThemeContext';
import {
    ContentSection1,
    ContentSection2,
    ContentSection3,
    ContentSection4,
    ContentSection5,
    ContentSection6,
} from './BusinessPlanContent';

interface TOCItem {
    id: string;
    title: string;
    children?: { id: string; title: string }[];
}

const tableOfContents: TOCItem[] = [
    {
        id: 'summary',
        title: '1. 执行摘要',
        children: [
            { id: 'summary-1-1', title: '1.1 宏观背景' },
            { id: 'summary-1-2', title: '1.2 战略愿景' },
            { id: 'summary-1-3', title: '1.3 战略价值' },
        ],
    },
    {
        id: 'tech',
        title: '2. 核心技术底座',
        children: [
            { id: 'tech-2-1', title: '2.1 硬件即信任' },
            { id: 'tech-2-2', title: '2.2 技术适配性' },
        ],
    },
    {
        id: 'domestic',
        title: '3. 国内数据资产运营',
        children: [
            { id: 'domestic-3-1', title: '3.1 资产端深度分析' },
            { id: 'domestic-3-2', title: '3.2 变现模式' },
        ],
    },
    {
        id: 'overseas',
        title: '4. 海外RWA平台',
        children: [
            { id: 'overseas-4-1', title: '4.1 独立架构' },
            { id: 'overseas-4-2', title: '4.2 实施路径' },
            { id: 'overseas-4-3', title: '4.3 发行模式' },
        ],
    },
    {
        id: 'financial',
        title: '5. 财务与运营规划',
        children: [
            { id: 'financial-5-1', title: '5.1 双重收入流' },
            { id: 'financial-5-2', title: '5.2 合规防火墙' },
        ],
    },
    {
        id: 'conclusion',
        title: '6. 结论',
    },
];

export default function BusinessPlan() {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('summary');
    const styles = themeStyles[theme];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className={`min-h-screen ${styles.background} ${styles.text} transition-colors duration-300`}>
            {/* 主题切换按钮 - 响应式优化 */}
            <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-8 z-50 flex gap-1 sm:gap-2">
                <button
                    onClick={() => setTheme('reading')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${theme === 'reading'
                        ? 'bg-amber-500 text-white shadow-lg scale-105'
                        : 'bg-white/20 hover:bg-white/30'
                        }`}
                    title="阅读模式"
                >
                    📖
                </button>
                <button
                    onClick={() => setTheme('dark')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${theme === 'dark'
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 hover:bg-white/30'
                        }`}
                    title="深色模式"
                >
                    🌙
                </button>
                <button
                    onClick={() => setTheme('light')}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${theme === 'light'
                        ? 'bg-gray-200 text-gray-900 shadow-lg scale-105'
                        : 'bg-white/20 hover:bg-white/30'
                        }`}
                    title="浅色模式"
                >
                    ☀️
                </button>
            </div>

            <div className="flex pt-20">
                {/* 侧边栏目录 - 在移动端隐藏 */}
                <aside className="hidden lg:block w-64 h-screen sticky top-20 overflow-y-auto border-r border-gray-700 px-6 py-8">
                    <h2 className="text-xl font-bold mb-6">目录</h2>
                    <nav className="space-y-2">
                        {tableOfContents.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${activeSection === item.id
                                        ? `${styles.accent} font-semibold bg-white/10`
                                        : 'hover:bg-white/5'
                                        }`}
                                >
                                    {item.title}
                                </button>
                                {item.children && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.id}
                                                onClick={() => scrollToSection(child.id)}
                                                className={`w-full text-left px-3 py-1.5 text-sm rounded transition-all ${activeSection === child.id
                                                    ? `${styles.accent} font-medium`
                                                    : 'opacity-70 hover:opacity-100 hover:bg-white/5'
                                                    }`}
                                            >
                                                {child.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* 主内容区域 - 响应式优化 */}
                <main className="flex-1 px-4 sm:px-8 md:px-12 py-8 max-w-5xl mx-auto">
                    <header className="mb-8 sm:mb-12 text-center">
                        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${styles.heading}`}>
                            创电云:全球双引擎RWA战略商业计划书
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg opacity-80">发布: scdc.cloud | 日期: 2025年12月4日</p>
                    </header>

                    <ContentSection1 styles={styles} />
                    <ContentSection2 styles={styles} />
                    <ContentSection3 styles={styles} />
                    <ContentSection4 styles={styles} />
                    <ContentSection5 styles={styles} />
                    <ContentSection6 styles={styles} />
                </main>
            </div>
        </div>
    );
}
