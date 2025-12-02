export const en = {
    header: {
        menu: {
            home: 'Home',
            products: 'Products',
            solutions: 'Solutions',
            rwa: 'RWA',
            cases: 'Cases',
            about: 'About',
        },
        logo: {
            title: 'Chuangdian Cloud',
            subtitle: 'scdc.cloud',
        }
    },
    hero: {
        badge: 'Smart Energy · Future Tech',
        title: 'Smart Energy Aggregation Provider',
        description: 'Practicing the mission of carbon reduction, building a low-carbon green energy environment.\nFocusing on BMS, EMS, Virtual Power Plants, and RWA energy asset digitization.',
        cta: 'Explore Solutions',
        scroll: 'Scroll Down',
    },
    products: {
        title: 'Core Products',
        subtitle: 'Full-stack energy management solutions, from hardware to software, from edge to cloud, empowering energy digital transformation.',
        viewDetails: 'View Details',
        hideDetails: 'Hide Details',
        coreFeatures: 'Core Features',
        items: {
            bms: {
                title: 'BMS Battery Management System',
                description: 'Three-level architecture design, millisecond-level fault isolation, achieving full lifecycle safety management from modules to battery stacks.',
                features: [
                    'Three-level Architecture: Cell -> Module -> Stack protection',
                    'Real-time Monitoring: Voltage, Current, Temperature, SOC/SOH',
                    'Fault Isolation: Millisecond response, automatic power-off protection',
                    'Thermal Management: Intelligent temperature control, extending battery life',
                    'Cloud Diagnosis: AI algorithms predicting battery health status',
                ],
                specs: {
                    accuracy: { label: 'Accuracy', value: '±0.1%' },
                    response: { label: 'Response', value: '<10ms' },
                    protocol: { label: 'Protocol', value: 'CAN/Modbus' },
                }
            },
            ems: {
                title: 'Chuangdian Cloud EMS Platform',
                description: 'Cloud-Edge-End integrated architecture. Supporting edge strategy control and cloud big data analysis, visualizing energy storage dynamic supervision.',
                features: [
                    'Cloud-Edge-End Synergy: Edge real-time control, cloud intelligent dispatch',
                    'Multi-scenario Strategies: Peak shaving, demand control, backup switching',
                    'Big Data Analysis: Mining and optimizing energy usage patterns',
                    'Visual Supervision: Real-time data dashboard, equipment operating status',
                    'Open Interface: Supporting third-party system integration',
                ],
                specs: {
                    concurrency: { label: 'Concurrency', value: '10000+' },
                    latency: { label: 'Latency', value: '<1s' },
                    availability: { label: 'Availability', value: '99.99%' },
                }
            },
            vpp: {
                title: 'Virtual Power Plant (VPP)',
                description: 'Aggregating distributed energy, energy storage, and controllable loads, participating in spot markets and ancillary services to maximize energy value.',
                features: [
                    'Resource Aggregation: Integrating PV, storage, charging piles, etc.',
                    'Market Trading: Participating in spot and ancillary service markets',
                    'Intelligent Dispatch: AI-based load forecasting and optimized dispatch',
                    'Revenue Maximization: Multi-market arbitrage, improving ROI',
                    'Compliance: Complying with national power market trading rules',
                ],
                specs: {
                    capacity: { label: 'Capacity', value: '100MW+' },
                    time: { label: 'Dispatch Time', value: '<5min' },
                    accuracy: { label: 'Accuracy', value: '>95%' },
                }
            },
            pcs: {
                title: 'PCS & Edge Gateway',
                description: 'High-performance PCS and intelligent gateway, supporting multi-scenario adaptation and weak grid operation guarantee.',
                features: [
                    'High Efficiency: >99% bidirectional conversion efficiency',
                    'Multi-scenario: Grid-tied/Off-grid/Microgrid automatic switching',
                    'Weak Grid Support: Adapting to grid fluctuations, ensuring stable operation',
                    'Edge Computing: Local strategy execution, reducing cloud dependence',
                    'Modular Design: Easy to expand and maintain',
                ],
                specs: {
                    efficiency: { label: 'Efficiency', value: '99.2%' },
                    power: { label: 'Power Range', value: '50kW-2MW' },
                    response: { label: 'Response', value: '<20ms' },
                }
            }
        }
    },
    solutions: {
        title: 'Solutions',
        subtitle: 'Providing customized energy management solutions for different scenarios, helping enterprises reduce costs, increase efficiency, and transform green.',
        benefitsTitle: 'Core Benefits',
        items: {
            commercial: {
                title: 'C&I Energy Storage',
                subtitle: 'Reducing electricity costs and improving energy management efficiency',
                features: ['Peak Shaving', 'Demand Control', 'Dynamic Expansion'],
                details: [
                    { title: 'Peak Shaving', description: 'Charging at low prices, discharging at peaks, saving up to 30% annually' },
                    { title: 'Demand Control', description: 'Dynamic load regulation to avoid exceeding demand limits' },
                    { title: 'Dynamic Expansion', description: 'Flexible capacity expansion without transformer upgrades' },
                ],
                benefits: [
                    'Annual cost saving 20-30%',
                    'Payback period 3-5 years',
                    'Supporting arbitrage strategies',
                    'Providing power backup'
                ]
            },
            charging: {
                title: 'PV-Storage-Charging Integration',
                subtitle: 'Comprehensive utilization of clean energy in multiple scenarios',
                features: ['Green Power', 'Super Charging', 'Battery Testing'],
                details: [
                    { title: 'Green Power', description: 'Local storage of PV power, improving utilization rate' },
                    { title: 'Super Charging', description: '360kW DC fast charging, full charge in 30 mins' },
                    { title: 'Battery Testing', description: 'Real-time battery health detection during charging' },
                ],
                benefits: [
                    'RE utilization up to 95%+',
                    'Charging speed up 5-10x',
                    'Supporting V2G',
                    'Carbon emission reduced 60%+'
                ]
            },
            offgrid: {
                title: 'Off-grid PV-Storage-Diesel',
                subtitle: 'Reliable energy solutions for remote areas',
                features: ['Island Power', 'Mining Power', 'Oilfield Power'],
                details: [
                    { title: 'Hybrid Power', description: 'PV+Storage+Diesel, smart switching for 24/7 power' },
                    { title: 'Cost Reduction', description: 'Fuel cost reduced by 50-70% compared to pure diesel' },
                    { title: 'Stable & Reliable', description: 'Multiple backups, 99.9% reliability' },
                ],
                benefits: [
                    'Fuel cost reduced 50-70%',
                    'Carbon emission reduced 60%+',
                    'Adapting to -40℃~60℃',
                    'Supporting island/microgrid'
                ]
            }
        }
    },
    rwa: {
        badge: 'Core Strategy',
        title: 'RWA Energy Asset Digitization',
        description: 'Achieving full-link digitization of energy assets through a three-layer architecture, seamless conversion from physical assets to financial value.',
        demoButton: 'View Demo Platform',
        footer: 'From physical assets to digital value, opening a new era of energy financialization.',
        layers: {
            physical: {
                title: 'Physical Layer',
                subtitle: 'Physical Layer',
                items: ['Charging Stations', 'C&I Storage', 'Distributed PV'],
                description: 'High IRR Quality Underlying Assets',
            },
            trust: {
                title: 'Trust Layer',
                subtitle: 'Trust Layer',
                items: ['BMS Monitoring', 'IoT Real-time Chain', 'Chuangdian Cloud EMS'],
                description: 'Ensuring Data Authenticity & Immutability',
            },
            value: {
                title: 'Value Layer',
                subtitle: 'Value Layer',
                items: ['Global Liquidity', 'Daily Instant Yield', 'Asset Refinancing'],
                description: 'Breaking Boundaries of Financing & Investment',
            }
        }
    },
    cases: {
        title: 'Success Cases',
        items: {
            pv: {
                title: '15MW/30MWh PV+Storage Project',
                location: 'Henan',
                highlight: 'Solving PV Curtailment',
                description: 'Solving PV curtailment issues and improving new energy utilization through large-scale storage systems.',
                stats: {
                    capacity: { label: 'Capacity', value: '15MW' },
                    storage: { label: 'Storage', value: '30MWh' },
                }
            },
            mining: {
                title: 'Indonesia Mining Charging Station',
                location: 'Indonesia',
                highlight: '10x 360kW DC Fast Chargers',
                description: 'Providing high-power fast charging for mining trucks, with significant annual returns.',
                stats: {
                    count: { label: 'Chargers', value: '10 Units' },
                    power: { label: 'Power', value: '360kW' },
                }
            },
            port: {
                title: 'Overseas Port Tugboat Electrification',
                location: 'Overseas Port',
                highlight: 'Reducing Carbon Emissions',
                description: 'Electrifying tugboats through diesel-to-storage retrofit, significantly reducing emissions and costs.',
                stats: {
                    emission: { label: 'Emission Reduction', value: '60%+' },
                    cost: { label: 'Cost Saving', value: '40%+' },
                }
            }
        }
    },
    about: {
        title: 'About Us',
        description1: 'Suzhou Chuangdianyun Technology Co., Ltd. is committed to becoming a global leading smart energy service provider. We provide full-link solutions from BMS, EMS to Virtual Power Plants, using AI and big data to help enterprises transform to low carbon.',
        description2: 'As an innovator in the energy industry, we focus on combining IoT, Blockchain, AI with traditional energy management to build a smart, digital energy ecosystem. Through RWA asset digitization technology, we open up the value chain from physical to financial layers.',
        advantagesTitle: 'Core Advantages',
        tags: {
            microgrid: 'Smart Microgrid',
            vpp: 'Virtual Power Plant',
            cloud: 'Storage Cloud',
            carbon: 'Carbon Neutral',
        },
        advantages: {
            tech: {
                title: 'Tech Innovation',
                description: 'Holding multiple core technology patents, self-developed BMS and EMS systems reaching international leading levels.'
            },
            team: {
                title: 'Expert Team',
                description: 'Gathering top scientists and industry experts from Stanford, IBM, HSBC and other renowned institutions.'
            },
            market: {
                title: 'Market Leading',
                description: 'Serving markets domestically and abroad, with over 100MW storage projects deployed.'
            },
            global: {
                title: 'Global Layout',
                description: 'Business covering China, Southeast Asia, Middle East, providing localized energy solutions.'
            }
        },
        stats: {
            project: { label: 'MW Storage Projects', value: '100+' },
            cases: { label: 'Success Cases', value: '50+' },
            patents: { label: 'Patents', value: '20+' },
            reliability: { label: 'System Reliability', value: '99.9%' },
        }
    },
    footer: {
        company: {
            name: 'Suzhou Chuangdianyun Technology Co., Ltd.',
            subtitle: 'Smart Energy Aggregation Provider',
            desc: 'Focusing on BMS, EMS, VPP and RWA Energy Asset Digitization',
        },
        links: {
            title: 'Quick Links',
            about: 'About Us',
            products: 'Products',
            solutions: 'Solutions',
            cases: 'Cases',
        },
        contact: {
            title: 'Contact Us',
            address: 'Suzhou, Jiangsu Province',
            phone: 'TBD',
        },
        copyright: '© {year} Suzhou Chuangdianyun Technology Co., Ltd. All rights reserved.',
        privacy: 'Privacy Policy',
        contactUs: 'Contact Us',
    }
}
