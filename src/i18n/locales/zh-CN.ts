export const zhCN = {
    header: {
        menu: {
            home: '首页',
            products: '核心产品',
            solutions: '解决方案',
            rwa: 'RWA资产数字化',
            cases: '成功案例',
            about: '关于我们',
        },
        logo: {
            title: '创电云',
            subtitle: 'scdc.cloud',
        }
    },
    hero: {
        badge: '智慧能源·科技未来',
        title: '智慧能源聚合方案商',
        description: '减碳践行使命，构建低碳绿能环境。\n专注于 BMS、EMS、虚拟电厂及 RWA 能源资产数字化。',
        cta: '探索解决方案',
        scroll: '向下滚动',
    },
    products: {
        title: '核心产品',
        subtitle: '全栈式能源管理解决方案，从硬件到软件，从边缘到云端，助力能源数字化转型',
        viewDetails: '查看详情',
        hideDetails: '收起详情',
        coreFeatures: '核心特性',
        items: {
            bms: {
                title: 'BMS 电池管理系统',
                description: '三级架构设计，毫秒级故障隔离，实现从模组到电池堆的全生命周期安全管理。',
                features: [
                    '三级架构：单体→模组→电池堆，层级保护',
                    '实时监控：电压、电流、温度、SOC/SOH',
                    '故障隔离：毫秒级响应，自动断电保护',
                    '热管理：智能温控，延长电池寿命',
                    '云端诊断：AI 算法预测电池健康状态',
                ],
                specs: {
                    accuracy: { label: '采样精度', value: '±0.1%' },
                    response: { label: '响应时间', value: '<10ms' },
                    protocol: { label: '通信协议', value: 'CAN/Modbus' },
                }
            },
            ems: {
                title: '创电云 EMS 平台',
                description: '云-边-端一体化架构。支持边缘策略控制与云端大数据分析，可视化储能动态监管。',
                features: [
                    '云-边-端协同：边缘实时控制，云端智能调度',
                    '多场景策略：削峰填谷、需量控制、备电切换',
                    '大数据分析：能源使用模式挖掘与优化',
                    '可视化监管：实时数据大屏，设备运行状态',
                    '开放接口：支持第三方系统集成',
                ],
                specs: {
                    concurrency: { label: '并发设备', value: '10000+' },
                    latency: { label: '数据延迟', value: '<1s' },
                    availability: { label: '系统可用性', value: '99.99%' },
                }
            },
            vpp: {
                title: '虚拟电厂 (VPP)',
                description: '聚合分布式能源、储能与可控负荷，参与电力现货市场与辅助服务，实现能源价值最大化。',
                features: [
                    '资源聚合：整合光伏、储能、充电桩等分布式能源',
                    '市场交易：参与电力现货、辅助服务市场',
                    '智能调度：基于 AI 的负荷预测与优化调度',
                    '收益最大化：多市场套利，提升投资回报率',
                    '监管合规：符合国家电力市场交易规则',
                ],
                specs: {
                    capacity: { label: '聚合容量', value: '100MW+' },
                    time: { label: '调度时间', value: '<5min' },
                    accuracy: { label: '预测精度', value: '>95%' },
                }
            },
            pcs: {
                title: '储能变流器 & 边缘网关',
                description: '高性能 PCS 与智能网关，支持多场景自适应与弱网运行保障。',
                features: [
                    '高效转换：99% 以上的双向转换效率',
                    '多场景适配：并网/离网/微网自动切换',
                    '弱网支持：适应电网波动，保障稳定运行',
                    '边缘计算：本地策略执行，降低云端依赖',
                    '模块化设计：易于扩展与维护',
                ],
                specs: {
                    efficiency: { label: '转换效率', value: '99.2%' },
                    power: { label: '功率范围', value: '50kW-2MW' },
                    response: { label: '响应时间', value: '<20ms' },
                }
            }
        }
    },
    solutions: {
        title: '解决方案',
        subtitle: '针对不同应用场景，提供定制化的能源管理解决方案，助力企业降本增效、绿色转型',
        benefitsTitle: '核心优势',
        items: {
            commercial: {
                title: '工商业储能',
                subtitle: '降低用电成本，提升能源管理效率',
                features: ['削峰填谷', '需量控制', '动态扩容'],
                details: [
                    { title: '削峰填谷', description: '在电价低谷时充电，高峰时放电，年节省电费可达 30%' },
                    { title: '需量控制', description: '动态调节负荷，避免需量超标，降低基本电费' },
                    { title: '动态扩容', description: '灵活扩展储能容量，无需增容变压器，节省投资' },
                ],
                benefits: [
                    '年均节省电费 20-30%',
                    '投资回收期 3-5 年',
                    '支持峰谷套利策略',
                    '提供电力备用保障'
                ]
            },
            charging: {
                title: '光储充检一体化',
                subtitle: '清洁能源多场景综合利用',
                features: ['绿电消纳', '超级快充', '电池检测'],
                details: [
                    { title: '绿电消纳', description: '光伏发电就地存储，提高新能源利用率，降低弃光率' },
                    { title: '超级快充', description: '360kW 直流快充，30 分钟充满电，支持重卡、物流车' },
                    { title: '电池检测', description: '充电过程实时检测电池健康，预警安全隐患' },
                ],
                benefits: [
                    '新能源利用率提升至 95%+',
                    '充电速度提升 5-10 倍',
                    '支持 V2G 双向充电',
                    '碳排放减少 60%+'
                ]
            },
            offgrid: {
                title: '离网光储柴供电',
                subtitle: '偏远地区可靠的能源解决方案',
                features: ['海岛供电', '矿山供电', '油田供电'],
                details: [
                    { title: '混合供电', description: '光伏+储能+柴发，智能切换，确保 24 小时不间断供电' },
                    { title: '降低成本', description: '相比纯柴发，燃油成本降低 50-70%，运维成本显著下降' },
                    { title: '稳定可靠', description: '多重备份，系统可靠性 99.9%，适应极端环境' },
                ],
                benefits: [
                    '燃油成本降低 50-70%',
                    '碳排放减少 60%+',
                    '适应 -40℃~60℃ 极端温度',
                    '支持孤岛/微网运行'
                ]
            }
        }
    },
    rwa: {
        badge: '核心战略',
        title: 'RWA 能源资产数字化全景',
        description: '通过三层架构实现能源资产的全链路数字化，从物理资产到金融价值的无缝转换',
        demoButton: '查看演示平台',
        footer: '从物理资产到数字价值，开启能源金融化新纪元',
        layers: {
            physical: {
                title: '物理资产层',
                subtitle: 'Physical Layer',
                items: ['充电场站', '工商业储能', '分布式光伏'],
                description: '高 IRR 优质底层资产',
            },
            trust: {
                title: '数据信任层',
                subtitle: 'Trust Layer',
                items: ['BMS 状态监测', 'IoT 实时上链', '创电云 EMS'],
                description: '确保数据真实不可篡改',
            },
            value: {
                title: '金融价值层',
                subtitle: 'Value Layer',
                items: ['全球流动性', '每日即时收益', '资产再融资'],
                description: '打破融资与投资的边界',
            }
        }
    },
    cases: {
        title: '成功案例',
        items: {
            pv: {
                title: '15MW/30MWh 光伏配储项目',
                location: '河南',
                highlight: '解决弃光问题',
                description: '通过大规模储能系统配合光伏发电，有效解决弃光问题，提升新能源利用率。',
                stats: {
                    capacity: { label: '装机容量', value: '15MW' },
                    storage: { label: '储能容量', value: '30MWh' },
                }
            },
            mining: {
                title: '印尼矿区重卡充电站',
                location: '印度尼西亚',
                highlight: '10台 360kW 直流快充',
                description: '为矿区重卡提供高功率快速充电服务，年收益率可观，助力矿区电动化转型。',
                stats: {
                    count: { label: '充电桩数量', value: '10台' },
                    power: { label: '充电功率', value: '360kW' },
                }
            },
            port: {
                title: '海外港口拖船油改电',
                location: '海外港口',
                highlight: '降低碳排放',
                description: '通过柴油机配储改装，实现港口拖船电动化，显著降低碳排放和运营成本。',
                stats: {
                    emission: { label: '减排效果', value: '60%+' },
                    cost: { label: '成本节省', value: '40%+' },
                }
            }
        }
    },
    about: {
        title: '关于我们',
        description1: '苏州创电云科技有限公司致力于成为全球领先的智慧能源服务商。我们提供从 BMS 电池管理、EMS 能源管理到虚拟电厂的全链路解决方案，利用 AI 和大数据技术助力企业低碳转型。',
        description2: '作为能源行业的创新者，我们专注于将物联网、区块链、人工智能等前沿技术与传统能源管理相结合,构建智慧化、数字化的能源生态系统。通过 RWA 资产数字化技术，我们打通了能源资产从物理层到金融层的价值链条，为投资者和运营商创造全新的商业模式。',
        advantagesTitle: '核心优势',
        tags: {
            microgrid: '智慧微网',
            vpp: '虚拟电厂',
            cloud: '储能云平台',
            carbon: '双碳目标',
        },
        advantages: {
            tech: {
                title: '技术创新',
                description: '拥有多项核心技术专利，自主研发的BMS和EMS系统达到国际领先水平'
            },
            team: {
                title: '专家团队',
                description: '汇聚全球顶尖科学家和行业专家，团队成员来自斯坦福、IBM、汇丰等知名机构'
            },
            market: {
                title: '市场领先',
                description: '服务覆盖国内外多个市场，累计部署超过100MW储能项目，市场占有率持续增长'
            },
            global: {
                title: '全球布局',
                description: '业务遍及中国、东南亚、中东等地区，为全球客户提供本地化的能源解决方案'
            }
        },
        stats: {
            project: { label: 'MW 储能项目', value: '100+' },
            cases: { label: '成功案例', value: '50+' },
            patents: { label: '技术专利', value: '20+' },
            reliability: { label: '系统可靠性', value: '99.9%' },
        }
    },
    footer: {
        company: {
            name: '苏州创电云科技有限公司',
            subtitle: '智慧能源聚合方案商',
            desc: '专注于 BMS、EMS、虚拟电厂及 RWA 能源资产数字化',
        },
        links: {
            title: '快速链接',
            about: '关于我们',
            products: '核心产品',
            solutions: '解决方案',
            cases: '成功案例',
        },
        contact: {
            title: '联系我们',
            address: '江苏省苏州市',
            phone: '联系电话待添加',
        },
        copyright: '© {year} 苏州创电云科技有限公司 (Suzhou Chuangdianyun Technology Co., Ltd.) All rights reserved.',
        privacy: '隐私政策',
        contactUs: '联系我们',
    }
}
