import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Zap, Globe, DollarSign, TrendingUp, Clock, Shield } from 'lucide-react'

import { useI18n } from '../i18n/i18n'

const Solutions = () => {
    const { t } = useI18n()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const solutions = [
        {
            icon: Building2,
            title: t.solutions.items.commercial.title,
            subtitle: t.solutions.items.commercial.subtitle,
            features: t.solutions.items.commercial.features,
            image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
            gradient: 'from-blue-500 to-blue-600',
            details: [
                {
                    icon: DollarSign,
                    ...t.solutions.items.commercial.details[0]
                },
                {
                    icon: TrendingUp,
                    ...t.solutions.items.commercial.details[1]
                },
                {
                    icon: Clock,
                    ...t.solutions.items.commercial.details[2]
                }
            ],
            benefits: t.solutions.items.commercial.benefits
        },
        {
            icon: Zap,
            title: t.solutions.items.charging.title,
            subtitle: t.solutions.items.charging.subtitle,
            features: t.solutions.items.charging.features,
            image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
            gradient: 'from-green-500 to-green-600',
            details: [
                {
                    icon: Zap,
                    ...t.solutions.items.charging.details[0]
                },
                {
                    icon: TrendingUp,
                    ...t.solutions.items.charging.details[1]
                },
                {
                    icon: Shield,
                    ...t.solutions.items.charging.details[2]
                }
            ],
            benefits: t.solutions.items.charging.benefits
        },
        {
            icon: Globe,
            title: t.solutions.items.offgrid.title,
            subtitle: t.solutions.items.offgrid.subtitle,
            features: t.solutions.items.offgrid.features,
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            gradient: 'from-orange-500 to-orange-600',
            details: [
                {
                    icon: Zap,
                    ...t.solutions.items.offgrid.details[0]
                },
                {
                    icon: DollarSign,
                    ...t.solutions.items.offgrid.details[1]
                },
                {
                    icon: Shield,
                    ...t.solutions.items.offgrid.details[2]
                }
            ],
            benefits: t.solutions.items.offgrid.benefits
        },
    ]

    return (
        <section id="solutions" className="section-padding bg-gray-50" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t.solutions.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t.solutions.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-2xl overflow-hidden card-shadow"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-70`}></div>
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                                            <solution.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{solution.title}</h3>
                                        <p className="text-white/90 text-lg">{solution.subtitle}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {solution.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    {/* Details */}
                                    <div className="space-y-6 mb-8">
                                        {solution.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className={`w-10 h-10 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                                                    <detail.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{detail.title}</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">{detail.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Benefits */}
                                    <div className={`bg-gradient-to-r ${solution.gradient} rounded-xl p-6`}>
                                        <h4 className="font-bold text-white mb-4 flex items-center">
                                            <TrendingUp className="w-5 h-5 mr-2" />
                                            {t.solutions.benefitsTitle}
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {solution.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-center text-white">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                                                    <span className="text-sm">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solutions
