import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Zap, Database, Cloud, Target, Award, Users, TrendingUp, Globe } from 'lucide-react'

// 数字动画组件
function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLParagraphElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // 提取数字部分
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const prefix = value.match(/[^0-9.]+$/)?.[0] || ''

    const springValue = useSpring(0, {
        bounce: 0,
        duration: 2000,
    })

    const displayValue = useTransform(springValue, (latest) => {
        if (value.includes('.')) {
            return latest.toFixed(1) + prefix
        }
        return Math.floor(latest) + prefix
    })

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue)
        }
    }, [isInView, numericValue, springValue])

    return (
        <motion.p
            ref={ref}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {isInView ? displayValue : '0' + prefix}
        </motion.p>
    )
}

import { useI18n } from '../i18n/i18n'

const About = () => {
    const { t } = useI18n()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const tags = [
        { icon: Zap, text: t.about.tags.microgrid },
        { icon: Database, text: t.about.tags.vpp },
        { icon: Cloud, text: t.about.tags.cloud },
        { icon: Target, text: t.about.tags.carbon },
    ]

    const advantages = [
        {
            icon: Award,
            title: t.about.advantages.tech.title,
            description: t.about.advantages.tech.description
        },
        {
            icon: Users,
            title: t.about.advantages.team.title,
            description: t.about.advantages.team.description
        },
        {
            icon: TrendingUp,
            title: t.about.advantages.market.title,
            description: t.about.advantages.market.description
        },
        {
            icon: Globe,
            title: t.about.advantages.global.title,
            description: t.about.advantages.global.description
        },
    ]

    const stats = [
        t.about.stats.project,
        t.about.stats.cases,
        t.about.stats.patents,
        t.about.stats.reliability,
    ]

    return (
        <section id="about" className="section-padding bg-gray-50" ref={ref}>
            <div className="section-container">
                {/* 标题和简介 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t.about.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                        {t.about.description1}
                    </p>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t.about.description2}
                    </p>
                </motion.div>

                {/* 关键标签 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
                >
                    {tags.map((tag, index) => (
                        <motion.div
                            key={tag.text}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl card-shadow"
                        >
                            <tag.icon className="w-12 h-12 text-primary mb-4" />
                            <p className="text-gray-800 font-semibold text-center">{tag.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 核心优势 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
                        {t.about.advantagesTitle}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={advantage.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                className="bg-white p-4 md:p-6 rounded-xl card-shadow w-full"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                                    <advantage.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 数据统计 - 带数字滚动动画 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 overflow-hidden"
                >
                    {/* 背景装饰 */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 1.5 + index * 0.15 }}
                                className="text-center"
                            >
                                <AnimatedNumber value={stat.value} />
                                <motion.p
                                    className="text-white/90 text-sm md:text-base"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 1.8 + index * 0.15 }}
                                >
                                    {stat.label}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
