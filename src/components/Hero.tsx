import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useI18n } from '../i18n/i18n'

const Hero = () => {
    const { t } = useI18n()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // 生成星星
    const stars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        size: Math.random() * 3 + 1,
    }))

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
                    alt="智慧能源"
                    className="w-full h-full object-cover"
                />
                {/* 动态渐变遮罩 */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/80"
                    animate={{
                        background: [
                            'linear-gradient(120deg, rgba(0, 86, 179, 0.9) 0%, rgba(40, 167, 69, 0.8) 100%)',
                            'linear-gradient(240deg, rgba(0, 86, 179, 0.85) 0%, rgba(40, 167, 69, 0.85) 100%)',
                            'linear-gradient(120deg, rgba(0, 86, 179, 0.9) 0%, rgba(40, 167, 69, 0.8) 100%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* 网格背景 */}
            <div className="absolute inset-0 z-0 grid-background opacity-30"></div>

            {/* 星星装饰 */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white twinkle"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}

            {/* 浮动光球 */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    left: '10%',
                    top: '20%',
                }}
            />
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    right: '10%',
                    bottom: '20%',
                }}
            />

            {/* 鼠标跟随光效 */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* 标题装饰 */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-effect border border-white/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-white/90 text-sm font-medium">{t.hero.badge}</span>
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {t.hero.title}
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <motion.button
                            onClick={() => scrollToSection('#solutions')}
                            className="group relative bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-xl overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* 按钮光效 */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.cta}
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>

                            {/* 脉冲波纹 */}
                            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/70 text-sm">{t.hero.scroll}</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
                        whileHover={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
