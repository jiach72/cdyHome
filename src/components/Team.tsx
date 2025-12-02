import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, User } from 'lucide-react'

const Team = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const members = [
        {
            name: '邓业林',
            role: 'CSO',
            title: '首席战略官',
            bio: '全球前 2% 顶尖科学家，电池热管理专家',
            specialty: '电池热管理',
        },
        {
            name: '李佳琛',
            role: 'CEO',
            title: '首席执行官',
            bio: '挪威纳尔维克大学计算机背景，跨领域综合管理',
            specialty: '综合管理',
        },
        {
            name: '刘永川',
            role: '首席专家',
            title: '首席数据科学家',
            bio: '斯坦福统计学博士，IBM 前首席数据科学家',
            specialty: '数据科学',
        },
        {
            name: '杨家滔',
            role: '区块链专家',
            title: '金融科技专家',
            bio: '曾任职汇丰香港，金融科技与智能合约专家',
            specialty: '区块链 & 金融科技',
        },
    ]

    return (
        <section id="team" className="section-padding bg-gray-50" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        专家团队
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        汇聚全球顶尖人才，打造世界级智慧能源解决方案
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-transform duration-300"
                        >
                            {/* Avatar */}
                            <div className="relative h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px',
                                    }}></div>
                                </div>
                                <div className="relative z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center">
                                    <User className="w-16 h-16 text-primary" />
                                </div>

                                {/* Role Badge */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-sm font-bold text-primary">{member.role}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{member.title}</p>

                                <div className="flex items-start mb-4">
                                    <Award className="w-4 h-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                                    <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1">专业领域</p>
                                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 rounded-full">
                                        <span className="text-sm font-medium text-primary">{member.specialty}</span>
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

export default Team
