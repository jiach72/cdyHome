import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Battery, Cloud, Zap, Server, ChevronDown, ChevronUp } from 'lucide-react'

import { useI18n } from '../i18n/i18n'

const CoreProducts = () => {
    const { t } = useI18n()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null)

    const products = [
        {
            icon: Battery,
            title: t.products.items.bms.title,
            description: t.products.items.bms.description,
            gradient: 'from-blue-500 to-blue-600',
            features: t.products.items.bms.features,
            specs: [
                t.products.items.bms.specs.accuracy,
                t.products.items.bms.specs.response,
                t.products.items.bms.specs.protocol,
            ]
        },
        {
            icon: Cloud,
            title: t.products.items.ems.title,
            description: t.products.items.ems.description,
            gradient: 'from-green-500 to-green-600',
            features: t.products.items.ems.features,
            specs: [
                t.products.items.ems.specs.concurrency,
                t.products.items.ems.specs.latency,
                t.products.items.ems.specs.availability,
            ]
        },
        {
            icon: Zap,
            title: t.products.items.vpp.title,
            description: t.products.items.vpp.description,
            gradient: 'from-yellow-500 to-orange-500',
            features: t.products.items.vpp.features,
            specs: [
                t.products.items.vpp.specs.capacity,
                t.products.items.vpp.specs.time,
                t.products.items.vpp.specs.accuracy,
            ]
        },
        {
            icon: Server,
            title: t.products.items.pcs.title,
            description: t.products.items.pcs.description,
            gradient: 'from-purple-500 to-purple-600',
            features: t.products.items.pcs.features,
            specs: [
                t.products.items.pcs.specs.efficiency,
                t.products.items.pcs.specs.power,
                t.products.items.pcs.specs.response,
            ]
        },
    ]

    const toggleProduct = (index: number) => {
        setExpandedProduct(expandedProduct === index ? null : index)
    }

    return (
        <section id="products" className="section-padding bg-white" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t.products.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t.products.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-2xl card-shadow overflow-hidden w-full"
                        >
                            {/* Header */}
                            <div className="p-4 md:p-6 pb-4">
                                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-4`}>
                                    <product.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>

                                {/* Specs */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {product.specs.map((spec) => (
                                        <div key={spec.label} className="text-center p-2 bg-gray-50 rounded-lg">
                                            <p className="text-sm font-bold text-primary">{spec.value}</p>
                                            <p className="text-xs text-gray-600">{spec.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Expand Button */}
                                <button
                                    onClick={() => toggleProduct(index)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${expandedProduct === index
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="font-medium">
                                        {expandedProduct === index ? t.products.hideDetails : t.products.viewDetails}
                                    </span>
                                    {expandedProduct === index ? (
                                        <ChevronUp className="w-5 h-5" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            {/* Expandable Content */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: expandedProduct === index ? 'auto' : 0,
                                    opacity: expandedProduct === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3">{t.products.coreFeatures}</h4>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2 mr-3 flex-shrink-0`}></div>
                                                <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreProducts
