import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useI18n } from '../i18n/i18n'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
    onNavigate: (page: 'home' | 'business-plan') => void;
    currentPage?: 'home' | 'business-plan';
}

const Header = ({ onNavigate, currentPage = 'home' }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const { t } = useI18n()

    const menuItems = [
        { name: t.header.menu.home, href: '#hero' },
        { name: t.header.menu.products, href: '#products' },
        { name: t.header.menu.solutions, href: '#solutions' },
        { name: t.header.menu.rwa, href: '#rwa' },
        { name: t.header.menu.cases, href: '#cases' },
        { name: t.header.menu.about, href: '#about' },
    ]

    const scrollToSection = (href: string) => {
        if (currentPage !== 'home') {
            // 如果当前在商业计划书页面,先返回首页
            onNavigate('home');
            // 等待页面切换和DOM更新后再滚动
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            // 如果已经在首页,直接滚动
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 锁定/解锁页面滚动
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            {/* 滚动进度条 */}
            <motion.div
                className="scroll-progress"
                style={{ scaleX }}
            />

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-lg'
                : 'bg-white/95 backdrop-blur-sm shadow-sm'
                }`}>
                <nav className="section-container">
                    <div className="flex items-center justify-between h-14 md:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a
                                href="#hero"
                                onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
                                className="text-base sm:text-lg md:text-2xl font-bold gradient-text relative group"
                            >
                                <span className="inline sm:hidden">{t.header.logo.title}</span>
                                <span className="hidden sm:inline">{t.header.logo.title} | {t.header.logo.subtitle}</span>
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary hidden md:block"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                                    className="relative text-gray-700 hover:text-primary transition-colors duration-200 font-medium group text-sm lg:text-base"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.name}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                            {/* 商业计划书特殊按钮 */}
                            <motion.button
                                onClick={() => onNavigate('business-plan')}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium text-sm lg:text-base"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                商业计划
                            </motion.button>
                        </div>

                        {/* Language Switcher (Desktop) */}
                        <div className="hidden md:block ml-4">
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <LanguageSwitcher />
                            <motion.button
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative overflow-hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden bg-white border-t border-gray-100"
                            >
                                <motion.div
                                    className="py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: {
                                            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                                        },
                                        closed: {
                                            transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                        }
                                    }}
                                >
                                    {menuItems.map((item) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                                            className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-lg transition-all relative overflow-hidden group text-base font-medium"
                                            variants={{
                                                open: { y: 0, opacity: 1 },
                                                closed: { y: 20, opacity: 0 }
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {item.name}
                                            <motion.div
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"
                                                initial={{ scaleY: 0 }}
                                                whileHover={{ scaleY: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.a>
                                    ))}
                                    {/* 商业计划书按钮（移动端） */}
                                    <motion.button
                                        onClick={() => { onNavigate('business-plan'); setIsMenuOpen(false); }}
                                        className="block mx-4 mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
                                        variants={{
                                            open: { y: 0, opacity: 1 },
                                            closed: { y: 20, opacity: 0 }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        商业计划
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>
        </>
    )
}

export default Header
