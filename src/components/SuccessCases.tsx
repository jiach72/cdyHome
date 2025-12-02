import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, TrendingUp } from 'lucide-react'

import { useI18n } from '../i18n/i18n'

const SuccessCases = () => {
    const { t } = useI18n()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const cases = [
        {
            title: t.cases.items.pv.title,
            location: t.cases.items.pv.location,
            highlight: t.cases.items.pv.highlight,
            description: t.cases.items.pv.description,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
            stats: [
                t.cases.items.pv.stats.capacity,
                t.cases.items.pv.stats.storage,
            ],
        },
        {
            title: t.cases.items.mining.title,
            location: t.cases.items.mining.location,
            highlight: t.cases.items.mining.highlight,
            description: t.cases.items.mining.description,
            image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
            stats: [
                t.cases.items.mining.stats.count,
                t.cases.items.mining.stats.power,
            ],
        },
        {
            title: t.cases.items.port.title,
            location: t.cases.items.port.location,
            highlight: t.cases.items.port.highlight,
            description: t.cases.items.port.description,
            image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
            stats: [
                t.cases.items.port.stats.emission,
                t.cases.items.port.stats.cost,
            ],
        },
    ]

    return (
        <section id="cases" className="section-padding bg-white" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t.cases.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-white rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-transform duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={caseItem.image}
                                    alt={caseItem.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Location Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center">
                                    <MapPin className="w-4 h-4 text-primary mr-1" />
                                    <span className="text-sm font-medium text-gray-800">{caseItem.location}</span>
                                </div>

                                {/* Title */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                                    <div className="flex items-center text-secondary-300">
                                        <TrendingUp className="w-4 h-4 mr-2" />
                                        <span className="text-sm font-medium">{caseItem.highlight}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-4 leading-relaxed">{caseItem.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    {caseItem.stats.map((stat) => (
                                        <div key={stat.label} className="text-center p-3 bg-gray-50 rounded-lg">
                                            <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                                            <p className="text-xs text-gray-600">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessCases
