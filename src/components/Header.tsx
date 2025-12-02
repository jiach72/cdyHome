import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useI18n } from '../i18n/i18n'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
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
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
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
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a
                                href="#hero"
                                onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
                                className="text-lg md:text-2xl font-bold gradient-text relative group"
                            >
                                {t.header.logo.title} | {t.header.logo.subtitle}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary hidden md:block"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
