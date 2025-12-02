export const zhTW = {
    header: {
        menu: {
            home: '首頁',
            products: '核心產品',
            solutions: '解決方案',
            rwa: 'RWA資產數位化',
            cases: '成功案例',
            about: '關於我們',
        },
        logo: {
            title: '創電雲',
            subtitle: 'scdc.cloud',
        }
    },
    hero: {
        badge: '智慧能源·科技未來',
        title: '智慧能源聚合方案商',
        description: '減碳踐行使命，構建低碳綠能環境。\n專注於 BMS、EMS、虛擬電廠及 RWA 能源資產數位化。',
        cta: '探索解決方案',
        scroll: '向下滾動',
    },
    products: {
        title: '核心產品',
        subtitle: '全棧式能源管理解決方案，從硬體到軟體，從邊緣到雲端，助力能源數位化轉型',
        viewDetails: '查看詳情',
        hideDetails: '收起詳情',
        coreFeatures: '核心特性',
        items: {
            bms: {
                title: 'BMS 電池管理系統',
                description: '三級架構設計，毫秒級故障隔離，實現從模組到電池堆的全生命週期安全管理。',
                features: [
                    '三級架構：單體→模組→電池堆，層級保護',
                    '即時監控：電壓、電流、溫度、SOC/SOH',
                    '故障隔離：毫秒級響應，自動斷電保護',
                    '熱管理：智慧溫控，延長電池壽命',
                    '雲端診斷：AI 演算法預測電池健康狀態',
                ],
                specs: {
                    accuracy: { label: '採樣精度', value: '±0.1%' },
                    response: { label: '響應時間', value: '<10ms' },
                    protocol: { label: '通信協議', value: 'CAN/Modbus' },
                }
            },
            ems: {
                title: '創電雲 EMS 平台',
                description: '雲-邊-端一體化架構。支持邊緣策略控制與雲端大數據分析，可視化儲能動態監管。',
                features: [
                    '雲-邊-端協同：邊緣即時控制，雲端智慧調度',
                    '多場景策略：削峰填谷、需量控制、備電切換',
                    '大數據分析：能源使用模式挖掘與優化',
                    '可視化監管：即時數據大屏，設備運行狀態',
                    '開放接口：支持第三方系統集成',
                ],
                specs: {
                    concurrency: { label: '併發設備', value: '10000+' },
                    latency: { label: '數據延遲', value: '<1s' },
                    availability: { label: '系統可用性', value: '99.99%' },
                }
            },
            vpp: {
                title: '虛擬電廠 (VPP)',
                description: '聚合分佈式能源、儲能與可控負荷，參與電力現貨市場與輔助服務，實現能源價值最大化。',
                features: [
                    '資源聚合：整合光伏、儲能、充電樁等分佈式能源',
                    '市場交易：參與電力現貨、輔助服務市場',
                    '智慧調度：基於 AI 的負荷預測與優化調度',
                    '收益最大化：多市場套利，提升投資回報率',
                    '監管合規：符合國家電力市場交易規則',
                ],
                specs: {
                    capacity: { label: '聚合容量', value: '100MW+' },
                    time: { label: '調度時間', value: '<5min' },
                    accuracy: { label: '預測精度', value: '>95%' },
                }
            },
            pcs: {
                title: '儲能變流器 & 邊緣網關',
                description: '高性能 PCS 與智慧網關，支持多場景自適應與弱網運行保障。',
                features: [
                    '高效轉換：99% 以上的雙向轉換效率',
                    '多場景適配：併網/離網/微網自動切換',
                    '弱網支持：適應電網波動，保障穩定運行',
                    '邊緣計算：本地策略執行，降低雲端依賴',
                    '模組化設計：易於擴展與維護',
                ],
                specs: {
                    efficiency: { label: '轉換效率', value: '99.2%' },
                    power: { label: '功率範圍', value: '50kW-2MW' },
                    response: { label: '響應時間', value: '<20ms' },
                }
            }
        }
    },
    solutions: {
        title: '解決方案',
        subtitle: '針對不同應用場景，提供定制化的能源管理解決方案，助力企業降本增效、綠色轉型',
        benefitsTitle: '核心優勢',
        items: {
            commercial: {
                title: '工商業儲能',
                subtitle: '降低用電成本，提升能源管理效率',
                features: ['削峰填谷', '需量控制', '動態擴容'],
                details: [
                    { title: '削峰填谷', description: '在電價低谷時充電，高峰時放電，年節省電費可達 30%' },
                    { title: '需量控制', description: '動態調節負荷，避免需量超標，降低基本電費' },
                    { title: '動態擴容', description: '靈活擴展儲能容量，無需增容變壓器，節省投資' },
                ],
                benefits: [
                    '年均節省電費 20-30%',
                    '投資回收期 3-5 年',
                    '支持峰谷套利策略',
                    '提供電力備用保障'
                ]
            },
            charging: {
                title: '光儲充檢一體化',
                subtitle: '清潔能源多場景綜合利用',
                features: ['綠電消納', '超級快充', '電池檢測'],
                details: [
                    { title: '綠電消納', description: '光伏發電就地存儲，提高新能源利用率，降低棄光率' },
                    { title: '超級快充', description: '360kW 直流快充，30 分鐘充滿電，支持重卡、物流車' },
                    { title: '電池檢測', description: '充電過程即時檢測電池健康，預警安全隱患' },
                ],
                benefits: [
                    '新能源利用率提升至 95%+',
                    '充電速度提升 5-10 倍',
                    '支持 V2G 雙向充電',
                    '碳排放減少 60%+'
                ]
            },
            offgrid: {
                title: '離網光儲柴供電',
                subtitle: '偏遠地區可靠的能源解決方案',
                features: ['海島供電', '礦山供電', '油田供電'],
                details: [
                    { title: '混合供電', description: '光伏+儲能+柴發，智慧切換，確保 24 小時不間斷供電' },
                    { title: '降低成本', description: '相比純柴發，燃油成本降低 50-70%，運維成本顯著下降' },
                    { title: '穩定可靠', description: '多重備份，系統可靠性 99.9%，適應極端環境' },
                ],
                benefits: [
                    '燃油成本降低 50-70%',
                    '碳排放減少 60%+',
                    '適應 -40℃~60℃ 極端溫度',
                    '支持孤島/微網運行'
                ]
            }
        }
    },
    rwa: {
        badge: '核心戰略',
        title: 'RWA 能源資產數位化全景',
        description: '通過三層架構實現能源資產的全鏈路數位化，從物理資產到金融價值的無縫轉換',
        demoButton: '查看演示平台',
        footer: '從物理資產到數位價值，開啟能源金融化新紀元',
        layers: {
            physical: {
                title: '物理資產層',
                subtitle: 'Physical Layer',
                items: ['充電場站', '工商業儲能', '分佈式光伏'],
                description: '高 IRR 優質底層資產',
            },
            trust: {
                title: '數據信任層',
                subtitle: 'Trust Layer',
                items: ['BMS 狀態監測', 'IoT 即時上鏈', '創電云 EMS'],
                description: '確保數據真實不可篡改',
            },
            value: {
                title: '金融價值層',
                subtitle: 'Value Layer',
                items: ['全球流動性', '每日即時收益', '資產再融資'],
                description: '打破融資與投資的邊界',
            }
        }
    },
    cases: {
        title: '成功案例',
        items: {
            pv: {
                title: '15MW/30MWh 光伏配儲項目',
                location: '河南',
                highlight: '解決棄光問題',
                description: '通過大規模儲能系統配合光伏發電，有效解決棄光問題，提升新能源利用率。',
                stats: {
                    capacity: { label: '裝機容量', value: '15MW' },
                    storage: { label: '儲能容量', value: '30MWh' },
                }
            },
            mining: {
                title: '印尼礦區重卡充電站',
                location: '印度尼西亞',
                highlight: '10台 360kW 直流快充',
                description: '為礦區重卡提供高功率快速充電服務，年收益率可觀，助力礦區電動化轉型。',
                stats: {
                    count: { label: '充電樁數量', value: '10台' },
                    power: { label: '充電功率', value: '360kW' },
                }
            },
            port: {
                title: '海外港口拖船油改電',
                location: '海外港口',
                highlight: '降低碳排放',
                description: '通過柴油機配儲改裝，實現港口拖船電動化，顯著降低碳排放和運營成本。',
                stats: {
                    emission: { label: '減排效果', value: '60%+' },
                    cost: { label: '成本節省', value: '40%+' },
                }
            }
        }
    },
    about: {
        title: '關於我們',
        description1: '蘇州創電雲科技有限公司致力於成為全球領先的智慧能源服務商。我們提供從 BMS 電池管理、EMS 能源管理到虛擬電廠的全鏈路解決方案，利用 AI 和大數據技術助力企業低碳轉型。',
        description2: '作為能源行業的創新者，我們專注於將物聯網、區塊鏈、人工智慧等前沿技術與傳統能源管理相結合,構建智慧化、數位化的能源生態系統。通過 RWA 資產數位化技術，我們打通了能源資產從物理層到金融層的價值鏈條，為投資者和運營商創造全新的商業模式。',
        advantagesTitle: '核心優勢',
        tags: {
            microgrid: '智慧微網',
            vpp: '虛擬電廠',
            cloud: '儲能雲平台',
            carbon: '雙碳目標',
        },
        advantages: {
            tech: {
                title: '技術創新',
                description: '擁有多項核心技術專利，自主研發的BMS和EMS系統達到國際領先水平'
            },
            team: {
                title: '專家團隊',
                description: '匯聚全球頂尖科學家和行業專家，團隊成員來自斯坦福、IBM、匯豐等知名機構'
            },
            market: {
                title: '市場領先',
                description: '服務覆蓋國內外多個市場，累計部署超過100MW儲能項目，市場佔有率持續增長'
            },
            global: {
                title: '全球佈局',
                description: '業務遍及中國、東南亞、中東等地區，為全球客戶提供本地化的能源解決方案'
            }
        },
        stats: {
            project: { label: 'MW 儲能項目', value: '100+' },
            cases: { label: '成功案例', value: '50+' },
            patents: { label: '技術專利', value: '20+' },
            reliability: { label: '系統可靠性', value: '99.9%' },
        }
    },
    footer: {
        company: {
            name: '蘇州創電雲科技有限公司',
            subtitle: '智慧能源聚合方案商',
            desc: '專注於 BMS、EMS、虛擬電廠及 RWA 能源資產數位化',
        },
        links: {
            title: '快速鏈接',
            about: '關於我們',
            products: '核心產品',
            solutions: '解決方案',
            cases: '成功案例',
        },
        contact: {
            title: '聯繫我們',
            address: '江蘇省蘇州市',
            phone: '聯繫電話待添加',
        },
        copyright: '© {year} 蘇州創電雲科技有限公司 (Suzhou Chuangdianyun Technology Co., Ltd.) All rights reserved.',
        privacy: '隱私政策',
        contactUs: '聯繫我們',
    }
}
