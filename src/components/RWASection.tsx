import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Shield, TrendingUp, ArrowRight, Zap } from 'lucide-react'

import { useI18n } from '../i18n/i18n'

const RWASection = () => {
    const { t } = useI18n()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const layers = [
        {
            icon: Layers,
            title: t.rwa.layers.physical.title,
            subtitle: t.rwa.layers.physical.subtitle,
            items: t.rwa.layers.physical.items,
            description: t.rwa.layers.physical.description,
            color: 'from-blue-500 to-blue-600',
            delay: 0,
        },
        {
            icon: Shield,
            title: t.rwa.layers.trust.title,
            subtitle: t.rwa.layers.trust.subtitle,
            items: t.rwa.layers.trust.items,
            description: t.rwa.layers.trust.description,
            color: 'from-green-500 to-green-600',
            delay: 0.2,
        },
        {
            icon: TrendingUp,
            title: t.rwa.layers.value.title,
            subtitle: t.rwa.layers.value.subtitle,
            items: t.rwa.layers.value.items,
            description: t.rwa.layers.value.description,
            color: 'from-purple-500 to-purple-600',
            delay: 0.4,
        },
    ]

    return (
        <section id="rwa" className="section-padding relative overflow-hidden" ref={ref}>
            {/* 背景装饰 */}
            <div className="absolute inset-0 gradient-bg opacity-95"></div>
            <div className="absolute inset-0 grid-background opacity-10"></div>

            {/* 浮动装饰元素 */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* 装饰标签 */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-effect border border-white/30"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <Zap className="w-4 h-4 text-yellow-300" />
                        <span className="text-white/90 text-sm font-medium">{t.rwa.badge}</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-glow">
                        {t.rwa.title}
                    </h2>
                    <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        {t.rwa.description}
                    </p>

                    {/* 按钮组 */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto px-4 sm:px-0">
                        {/* 演示平台按钮 */}
                        <motion.a
                            href="https://rwademo.scdc.cloud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full border border-white/30 transition-all duration-300 group w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-white font-medium text-sm sm:text-base">{t.rwa.demoButton}</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        {/* 商业计划书按钮 */}
                        <motion.a
                            href="/business-plan.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 backdrop-blur-lg rounded-full border border-purple-300/50 transition-all duration-300 group shadow-lg shadow-purple-500/20 w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="text-white font-medium text-sm sm:text-base">商业计划书</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: layer.delay }}
                            className="relative group"
                        >
                            <motion.div
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* 卡片发光效果 */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* 层级编号 - 3D效果 */}
                                <motion.div
                                    className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12"
                                    whileHover={{ rotate: 0, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className={`text-2xl font-bold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent`}>
                                        {index + 1}
                                    </span>
                                </motion.div>

                                {/* 图标 */}
                                <motion.div
                                    className={`w-20 h-20 bg-gradient-to-br ${layer.color} rounded-2xl flex items-center justify-center mb-6 mx-auto relative`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <layer.icon className="w-10 h-10 text-white" />

                                    {/* 图标光环 */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layer.color} blur-xl opacity-50`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.div>

                                {/* 标题 */}
                                <h3 className="text-2xl font-bold text-white text-center mb-2">
                                    {layer.title}
                                </h3>
                                <p className="text-sm text-white/70 text-center mb-6">{layer.subtitle}</p>

                                {/* 项目列表 */}
                                <div className="space-y-3 mb-6">
                                    {layer.items.map((item, idx) => (
                                        <motion.div
                                            key={item}
                                            className="flex items-center justify-center group/item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: layer.delay + 0.6 + idx * 0.1 }}
                                        >
                                            <motion.div
                                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${layer.color} mr-3`}
                                                whileHover={{ scale: 1.5 }}
                                            />
                                            <span className="text-white/90 text-sm group-hover/item:text-white transition-colors">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* 描述卡片 */}
                                <motion.div
                                    className={`bg-gradient-to-r ${layer.color} rounded-xl p-4 text-center relative overflow-hidden`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* 扫描线效果 */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                    <p className="text-white font-medium relative z-10">{layer.description}</p>
                                </motion.div>
                            </motion.div>

                            {/* 连接箭头 - 增强效果 */}
                            {index < 2 && (
                                <motion.div
                                    className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.8 + index * 0.2 }}
                                >
                                    <motion.div
                                        animate={{
                                            x: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ArrowRight className="w-12 h-12 text-white drop-shadow-lg" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* 底部装饰文字 */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <p className="text-white/60 text-sm">
                        {t.rwa.footer}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default RWASection
