
import {
    AssetDistributionChart,
    RevenueStructureChart,
    DualRevenueStreamChart,
    KPITrendChart,
    ElectricityPriceTimeline,
} from './charts/BusinessPlanCharts';
import {
    DualTrackArchitecture,
    TechStackDataFlow,
    DataLoanProcess,
    OffshoreStructure,
    STOIssuanceFlow,
    ComplianceFirewall,
} from './charts/MermaidCharts';

interface SectionProps {
    styles: any;
}

// 第1章:执行摘要
export function ContentSection1({ styles }: SectionProps) {
    return (
        <section id="summary" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>1. 执行摘要</h2>

            <div id="summary-1-1" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">1.1 宏观背景:能源转型与资本效率的时代错配</h3>
                <div className="space-y-4 leading-relaxed">
                    <p>
                        站在2025年年末的时间节点回望,全球能源格局正在经历一场深刻的结构性重塑。中国作为全球新能源产业链的绝对核心,其产能与装机量已占据统治地位。根据国家统计局及行业数据,2024年中国新能源汽车产量达到<span className={`font-bold text-2xl ${styles.accent}`}>944.3万辆</span>,太阳能电池产量增长<span className={`font-bold text-xl ${styles.accent}`}>54%</span>,清洁能源发电量达到<span className={`font-bold text-2xl ${styles.accent}`}>31,906亿千瓦时</span>。
                    </p>
                    <p>
                        然而,在这一宏大的产业升级背后,资产端的"流动性陷阱"日益凸显。海量的分布式光伏与工商业储能资产,受限于国内传统金融体系对抵押物的僵化要求(偏好土地与房产,轻视运营现金流),面临着严重的融资难、融资贵问题。大量优质的、具备稳定现金流的能源资产沉淀在资产负债表上,无法释放其应有的金融属性。
                    </p>
                    <p>
                        与此同时,全球资本市场,特别是以Web3为代表的数字金融领域,正面临着截然相反的困境——"资产荒"。随着加密货币市场总市值突破数万亿美元大关,DeFi(去中心化金融)协议中锁仓了数千亿美元的稳定币资金。这些资金迫切寻找能够提供真实收益(Real Yield)、具备抗通胀属性且符合ESG(环境、社会与治理)标准的优质底层资产(RWA)。
                    </p>
                    <p className="text-lg font-semibold mt-6">
                        创电云(scdc.cloud)正是在这一历史性的供需错配中找到了独特的生态位。我们不再仅仅将自己定义为一家能源科技公司,而是定位为连接中国优质实体能源资产与全球数字金融资本的"价值路由器"。
                    </p>
                </div>
            </div>

            <div id="summary-1-2" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">1.2 战略愿景:"一个技术底座,两个独立市场"</h3>
                <div className="space-y-4 leading-relaxed">
                    <p>
                        基于公司在新能源领域的积累与沉淀,我们正式确立<strong>"双轨并行,独立运营"(Parallel Dual-Track)</strong>的核心战略。这一战略的核心逻辑在于:利用技术的可复用性降低边际成本,利用市场的差异化隔离政策风险并最大化收益。
                    </p>

                    <div className={`${styles.card} p-6 rounded-xl my-8`}>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">内轨(Domestic Track):能源数字化专家</h4>
                        <p>
                            在国内市场,我们紧跟"电改"与"数改"的双重红利。依托广东(特别是佛山)成熟的电力现货市场与制造业基础,深耕工商业储能与虚拟电厂(VPP)业务。我们的目标不是简单的卖设备,而是成为资产的全生命周期运营商。通过VPP响应、峰谷套利及EMC(合同能源管理)获取稳定的人民币现金流;更关键的是,我们将利用"数据要素"改革的契机,将电站运营数据转化为可融资的"数据资产",打通国内银行的低息信贷通道。
                        </p>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl my-8`}>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">外轨(Overseas Track):Web3 RWA创新者</h4>
                        <p>
                            在海外市场,我们立足香港与新加坡,构建合规的RWA发行平台。我们将国内经过验证的优质资产(如帕尔福电机项目的收益权)进行结构化打包,通过区块链技术发行STO(Security Token Offering)。这不仅能为公司获取低成本的美元/稳定币融资,更能通过RWA代币的流动性溢价,实现资产价值的重估。海外业务将完全遵循当地金融监管(如香港SFC),与国内业务在法律实体、资金流向及数据存储上实现物理隔离。
                        </p>
                    </div>
                </div>

                {/* 双轨战略架构图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">双轨战略架构图</h4>
                    <DualTrackArchitecture />
                </div>
            </div>

            <div id="summary-1-3" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">1.3 战略价值与路线图</h3>
                <p className="leading-relaxed mb-6">
                    本计划书将详细阐述如何通过一套共用的底层软硬件体系(BMS+EMS+边缘网关)同时支撑这两套截然不同的商业逻辑。这套体系在国内对接"长安链"以满足国资监管与数据资产确权需求;在海外对接Solana或Ethereum公链以满足全球投资者的透明度与流动性需求。
                </p>

                <div className={`${styles.card} p-6 rounded-xl`}>
                    <h4 className="text-xl font-semibold mb-4">我们预计,通过这一战略的实施,创电云将在未来三年内实现:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className={`${styles.accent} font-bold mr-3`}>▸</span>
                            <span><strong>管理资产规模(AUM)</strong>:突破<span className={`text-2xl font-bold ${styles.accent}`}>500MW/1GWh</span></span>
                        </li>
                        <li className="flex items-start">
                            <span className={`${styles.accent} font-bold mr-3`}>▸</span>
                            <span><strong>收入结构优化</strong>:形成"人民币稳健运营+美元高增长发行"的双币种收入模型</span>
                        </li>
                        <li className="flex items-start">
                            <span className={`${styles.accent} font-bold mr-3`}>▸</span>
                            <span><strong>估值体系重塑</strong>:从传统的重资产能源企业(10-15倍PE)向金融科技与RWA平台型企业(30-50倍PE)转型</span>
                        </li>
                    </ul>
                </div>

                <p className="text-lg font-semibold mt-6 text-center opacity-90">
                    这不仅仅是一次商业模式的调整,更是一场关于资产定义权的革命。
                </p>
            </div>
        </section>
    );
}

// 第2章:核心技术底座 
export function ContentSection2({ styles }: SectionProps) {
    return (
        <section id="tech" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>2. 核心技术底座</h2>

            <div id="tech-2-1" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">2.1 硬件即信任:BMS+EMS+边缘计算网关</h3>
                <p className="leading-relaxed mb-6">
                    在RWA商业模式中,最核心的风险在于"信任脱节"——即链上数字资产与链下物理资产的映射关系是否真实可靠。如果底层数据造假,一切金融衍生品都将成为空中楼阁。因此,创电云的硬件体系不仅仅是能源管理工具,更是资产信用的物理锚点。
                </p>

                <div className={`${styles.card} p-6 rounded-xl mb-6`}>
                    <h4 className="text-2xl font-semibold mb-4">2.1.1 智能电池管理系统(BMS):资产健康的守门人</h4>
                    <p className="mb-4">传统的BMS仅负责充放电保护,而创电云的BMS被重新定义为资产估值的数据源头。</p>
                    <ul className="space-y-2 ml-6">
                        <li>• <strong>全生命周期数据采集</strong>:以毫秒级频率采集电芯电压、电流、温度等原始数据,实时计算SOH(健康状态)与RUL(剩余使用寿命)</li>
                        <li>• <strong>主动均衡技术</strong>:采用主动均衡电路,动态调整电池包内电芯的一致性,经实测可延长电池循环寿命<span className={`font-bold ${styles.accent}`}>20%</span>以上</li>
                    </ul>
                </div>

                <div className={`${styles.card} p-6 rounded-xl mb-6`}>
                    <h4 className="text-2xl font-semibold mb-4">2.1.2 能量管理系统(EMS):策略执行的大脑</h4>
                    <ul className="space-y-2 ml-6">
                        <li>• <strong>多策略智能调度</strong>:内置削峰填谷、需量控制、防逆流等多种运行策略,在佛山地区针对"两充两放"电价政策进行算法优化</li>
                        <li>• <strong>本地边缘计算</strong>:即使与云端断连,本地策略也能确保电站按预设逻辑运行,保障收益不中断</li>
                    </ul>
                </div>

                <div className={`${styles.card} p-6 rounded-xl`}>
                    <h4 className="text-2xl font-semibold mb-4">2.1.3 可信边缘计算网关:区块链的物理接口</h4>
                    <ul className="space-y-2 ml-6">
                        <li>• <strong>数据指纹上链</strong>:网关内置安全芯片(SE),在数据采集源头对关键运营数据进行哈希签名,不可逆且无法篡改</li>
                        <li>• <strong>双向协议适配</strong>:支持国密算法对接长安链(国内),以及Chainlink预言机对接Solana/Ethereum(海外)</li>
                    </ul>
                </div>
            </div>

            <div id="tech-2-2" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">2.2 技术适配性分析:国内与海外的"同源异构"</h3>

                {/* 技术栈数据流图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">BMS→EMS→区块链数据流架构</h4>
                    <TechStackDataFlow />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">国内适配:长安链(ChainMaker)</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• <strong>合规性</strong>:符合国密标准(SM2/SM3/SM4算法)</li>
                            <li>• <strong>场景落地</strong>:向电网公司提供可信调节凭证,向银行提供不可篡改的经营流水证明</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">海外适配:Solana/Ethereum</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• <strong>高频上链</strong>:Solana的高TPS和低Gas费实现"分钟级"资产状态更新</li>
                            <li>• <strong>智能合约互操作性</strong>:EMS数据直接触发链上DeFi协议的USDC自动分红</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 第3章:国内业务
export function ContentSection3({ styles }: SectionProps) {
    return (
        <section id="domestic" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>3. 业务线A:国内数据资产运营</h2>

            <div id="domestic-3-1" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">3.1 资产端深度分析:华核佛山项目集群</h3>

                <div className={`${styles.card} p-6 rounded-xl mb-6`}>
                    <h4 className="text-2xl font-semibold mb-4">核心资产画像:帕尔福电机(Palfu Motor)</h4>
                    <ul className="space-y-2">
                        <li>• <strong>项目规模</strong>:<span className={`font-bold text-xl ${styles.accent}`}>1.2MW / 2.4MWh</span>,标准中型工商业储能项目</li>
                        <li>• <strong>用电特性</strong>:年用电量约<span className={`font-bold ${styles.accent}`}>850万kWh</span>,消纳比例接近<span className={`font-bold ${styles.accent}`}>100%</span></li>
                        <li>• <strong>数据价值</strong>:"专精特新"企业,信用评级高,经营存续期长,是银行眼中的优质信贷资产</li>
                    </ul>
                </div>

                {/* 15个项目资产表格 */}
                <div className="overflow-x-auto my-8 -mx-3 sm:mx-0">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-xl">
                            <table className={`min-w-full divide-y ${styles.card}`}>
                                <thead className={styles.tableHeader}>
                                    <tr>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">项目分类</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">数量</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">典型代表</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">总容量</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">行业属性</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">消纳能力</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.tableRow}>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">高端制造</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-base">5</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">帕尔福电机</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">6.0/12.0 MW/MWh</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs">负荷稳定,电能质量敏感</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-green-500 font-bold text-xs sm:text-base">98%+</td>
                                    </tr>
                                    <tr className={styles.tableRow}>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">传统高耗能</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-base">4</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">南海陶瓷一厂</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">8.0/16.0 MW/MWh</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs">24小时连续生产,基荷大</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-green-500 font-bold text-xs sm:text-base">100%</td>
                                    </tr>
                                    <tr className={styles.tableRow}>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">纺织印染</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-base">3</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">佛山纺织B区</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">4.5/9.0 MW/MWh</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs">峰谷明显,调节潜力大</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-green-400 font-bold text-xs sm:text-base">90%</td>
                                    </tr>
                                    <tr className={styles.tableRow}>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">冷链/食品</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-base">3</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">高明食品基地</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">3.0/6.0 MW/MWh</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs">热惯性调节能力强</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-yellow-400 font-bold text-xs sm:text-base">85%</td>
                                    </tr>
                                    <tr className={`${styles.tableRow} border-t-2 ${styles.border}`}>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-lg">合计</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">15</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">--</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-sm sm:text-xl text-green-400">21.5/43.0 MW/MWh</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">多样化互补</td>
                                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-xs sm:text-base">Avg 95%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 资产分布饼图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">15个项目按类型资产分布</h4>
                    <AssetDistributionChart />
                </div>

                <div className={`${styles.card} p-6 rounded-xl mt-8`}>
                    <h4 className="text-xl font-semibold mb-3">作为"数据要素"试点的价值:</h4>
                    <p className="text-sm leading-relaxed">
                        这21.5MW/43.0MWh的资产池不仅仅是产生电费差价的工具,更是一个巨大的"数据工厂"。15个项目每日产生约<span className={`font-bold ${styles.accent}`}>400万条</span>BMS/EMS运行数据,覆盖离散制造、流程制造、温控负荷等多种典型工业场景。这套数据集对于电网公司进行区域负荷建模、对于保险公司设计储能安全险、对于金融机构评估企业经营状况,都具有极高的商业价值。
                    </p>
                </div>
            </div>

            <div id="domestic-3-2" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">3.2 变现模式:人民币营收的三驾马车</h3>

                {/* 三驾马车收入结构图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">三驾马车收入结构对比</h4>
                    <RevenueStructureChart />
                </div>

                <div className="space-y-6">
                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-2xl font-semibold mb-3">3.2.1 EMC合同能源管理</h4>
                        <p className="mb-3">最基础的现金流来源,基于峰谷价差套利。</p>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• 高峰电价:1.25~1.4元/kWh,低谷电价:0.25~0.3元/kWh,价差约<span className={`font-bold ${styles.accent}`}>1.0元/kWh</span></li>
                            <li>• 年营收预估:约<span className={`font-bold text-2xl ${styles.accent}`}>1,800万元RMB</span>,构成公司基本盘</li>
                        </ul>
                    </div>

                    {/* 电价时段Timeline */}
                    <div className="my-8">
                        <h4 className="text-xl font-semibold mb-4">佛山电价峰谷时段分布(24小时)</h4>
                        <ElectricityPriceTimeline />
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-2xl font-semibold mb-3">3.2.2 VPP虚拟电厂补贴</h4>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• 将15个项目聚合成<span className={`font-bold ${styles.accent}`}>21.5MW</span>虚拟电厂资源池,接入南方电网广东中调系统</li>
                            <li>• 补贴标准:2-5元/kWh(视响应紧迫程度)</li>
                            <li>• VPP收入预估:约<span className={`font-bold text-xl ${styles.accent}`}>360万元RMB/年</span></li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-2xl font-semibold mb-3">3.2.3 数据贷与数据资产化</h4>
                        <p className="mb-4 text-sm">创电云区别于传统能源投资商的核心差异化优势,利用佛山试点政策打通"数据变现"最后一公里。</p>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• <strong>数据确权</strong>:在广州数据交易所登记获得《数据资产登记证书》</li>
                            <li>• <strong>价值评估</strong>:预计数据资产评估值<span className={`font-bold ${styles.accent}`}>5000-8000万元</span></li>
                            <li>• <strong>银行授信</strong>:可获得<span className={`font-bold text-xl ${styles.accent}`}>2000-3000万元</span>授信额度,年化<span className={`font-bold ${styles.accent}`}>3.2%-3.8%</span></li>
                            <li>• <strong>飞轮效应</strong>:低息贷款用于新项目设备采购,形成"数据-资产-资金-新资产"的良性循环</li>
                        </ul>
                    </div>

                    {/* 数据贷流程图 */}
                    <div className="my-12">
                        <h4 className="text-xl font-semibold mb-4 text-center">数据贷实施流程</h4>
                        <DataLoanProcess />
                    </div>
                </div>
            </div>
        </section>
    );
}

// 第4章:海外业务
export function ContentSection4({ styles }: SectionProps) {
    return (
        <section id="overseas" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>4. 业务线B:海外RWA平台</h2>

            <div id="overseas-4-1" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">4.1 独立架构:离岸合规设计的艺术</h3>
                <p className="leading-relaxed mb-6">
                    为了在合规的前提下连接全球资本,必须在法律架构上进行精巧设计,确保"双轨"在物理和法律上的绝对隔离。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">🏝️ 基金主体(Cayman/BVI)</h4>
                        <p className="text-sm mb-2">设立"IPC Green Energy Fund SPC"于开曼群岛。</p>
                        <ul className="space-y-1 text-sm ml-4">
                            <li>• 功能:面向全球Web3投资者的募资载体</li>
                            <li>• 优势:SPC结构实现资产风险隔离,税务透明</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">🏙️ 运营主体(Hong Kong/Singapore)</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• <strong>香港SPV</strong>:"PowerToken Assets Ltd",持有底层资产经济权益,申请VASP牌照</li>
                            <li>• <strong>新加坡Tech Co.</strong>:"IPC Global Tech Pte. Ltd",负责BMS/EMS海外版开发、全球推广</li>
                        </ul>
                    </div>
                </div>

                {/* 离岸架构组织图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">离岸架构组织图</h4>
                    <OffshoreStructure />
                </div>
            </div>

            <div id="overseas-4-2" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">4.2 实施路径:能力出海而非简单的资产出海</h3>
                <p className="leading-relaxed mb-6">
                    我们清醒地认识到,直接将中国境内的物理资产所有权转移到海外发行Token面临着外汇管制(SAFE)、外商投资(FDI)及数据出境(PIPL)的多重合规障碍。因此,我们的实施路径是<strong>"能力出海"与"权益出海"</strong>相结合。
                </p>

                <div className="space-y-6">
                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">阶段一:权益映射(Income Right Mirroring)</h4>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• <strong>核心逻辑</strong>:不转移物理资产所有权,仅转移"收益权"</li>
                            <li>• <strong>操作</strong>:国内实体与香港SPV签署《技术服务协议》或《收益权转让协议》,将部分净利润以"技术服务费"名义合规支付给香港SPV</li>
                            <li>• <strong>合规要点</strong>:严格遵守《外汇管理条例》及跨境服务贸易税务规定</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl`}>
                        <h4 className="text-xl font-semibold mb-3">阶段二:数据模型复制(Model Replication)</h4>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• <strong>核心逻辑</strong>:将国内验证过的"资产管理经验"和"数据风控模型"输出到海外</li>
                            <li>• <strong>操作</strong>:利用国内积累的AI预测模型和VPP算法,直接应用到东南亚(泰国、越南)或非洲的分布式光储项目,这些海外原生资产可直接进行100% RWA Tokenization</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="overseas-4-3" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">4.3 发行模式:全球公链上的STO</h3>

                {/* STO发行流程序列图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">STO发行全流程序列图</h4>
                    <STOIssuanceFlow />
                </div>

                <div className={`${styles.card} p-6 rounded-xl mt-8`}>
                    <h4 className="text-xl font-semibold mb-4">4.3.1 发行流程</h4>
                    <ol className="space-y-3 ml-6">
                        <li className="flex">
                            <span className={`font-bold ${styles.accent} mr-3`}>1.</span>
                            <span><strong>资产筛选与打包</strong>:选定"帕尔福电机"等项目的未来3-5年收益权,由香港律师事务所出具法律意见书,第三方审计机构确立基准收益率</span>
                        </li>
                        <li className="flex">
                            <span className={`font-bold ${styles.accent} mr-3`}>2.</span>
                            <span><strong>链上铸造</strong>:选择Solana或Ethereum L2作为发行公链,通过ERC-3643合规代币标准铸造RWA Token,支持KYC/AML白名单</span>
                        </li>
                        <li className="flex">
                            <span className={`font-bold ${styles.accent} mr-3`}>3.</span>
                            <span><strong>预言机数据喂送</strong>:边缘网关通过Chainlink每日推送发电量、收益数据到链上,哈希验真确保不可篡改</span>
                        </li>
                        <li className="flex">
                            <span className={`font-bold ${styles.accent} mr-3`}>4.</span>
                            <span><strong>募集与分红</strong>:面向全球合格投资者进行STO发售,接受USDC/USDT支付,智能合约自动计算应分红金额并空投到投资者钱包,实现T+0级收益分配</span>
                        </li>
                    </ol>
                </div>

                <div className={`${styles.card} p-6 rounded-xl mt-6`}>
                    <h4 className="text-xl font-semibold mb-3">4.3.2 募集资金用途</h4>
                    <p className="text-sm leading-relaxed">
                        募集到的稳定币资金(USDC),一部分留存香港用于海外市场拓展;另一部分通过QFLP或FDI渠道合规回流至中国境内,结汇为人民币用于建设新储能电站。形成完美闭环:<strong>海外低成本资金→入境投资实体资产→实体资产产生人民币收益→收益出境分红→吸引更多海外资金</strong>。
                    </p>
                </div>
            </div>
        </section>
    );
}

// 第5章:财务规划
export function ContentSection5({ styles }: SectionProps) {
    return (
        <section id="financial" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>5. 财务与运营规划</h2>

            <div id="financial-5-1" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">5.1 双重收入流模型</h3>
                <p className="leading-relaxed mb-6">
                    创电云的独特之处在于构建了互不依赖、互为对冲的双重收入结构。
                </p>

                {/* 双重收入流对比表格 */}
                <div className="overflow-x-auto my-8">
                    <table className={`w-full ${styles.card} rounded-xl overflow-hidden`}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th className="px-4 py-3 text-left">收入板块</th>
                                <th className="px-4 py-3 text-left">细分来源</th>
                                <th className="px-4 py-3 text-center">货币属性</th>
                                <th className="px-4 py-3 text-left">风险特征</th>
                                <th className="px-4 py-3 text-left">增长潜力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-bold text-green-400" rowSpan={3}>国内收入<br />(实体侧)</td>
                                <td className="px-4 py-3">EMC电费差价</td>
                                <td className="px-4 py-3 text-center">RMB</td>
                                <td className="px-4 py-3 text-sm">低风险,现金流稳健</td>
                                <td className="px-4 py-3 text-sm">线性增长(随装机量)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3">VPP辅助服务补贴</td>
                                <td className="px-4 py-3 text-center">RMB</td>
                                <td className="px-4 py-3 text-sm">政策依赖,波动中等</td>
                                <td className="px-4 py-3 text-sm">高(随现货市场开放)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3">技术服务费(SaaS)</td>
                                <td className="px-4 py-3 text-center">RMB</td>
                                <td className="px-4 py-3 text-sm">高毛利,客户粘性强</td>
                                <td className="px-4 py-3 text-sm">中高(随客户数)</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-bold text-blue-400" rowSpan={4}>海外收入<br />(金融侧)</td>
                                <td className="px-4 py-3">RWA发行费(Underwriting)</td>
                                <td className="px-4 py-3 text-center">USD/USDC</td>
                                <td className="px-4 py-3 text-sm">前端一次性收入</td>
                                <td className="px-4 py-3 text-sm">爆发式增长</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3">资产管理费(1-2% AUM)</td>
                                <td className="px-4 py-3 text-center">USD/USDC</td>
                                <td className="px-4 py-3 text-sm">经常性收入</td>
                                <td className="px-4 py-3 text-sm">线性增长</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3">超额收益分成(20% Carry)</td>
                                <td className="px-4 py-3 text-center">USD/USDC</td>
                                <td className="px-4 py-3 text-sm">绩效激励</td>
                                <td className="px-4 py-3 text-sm">极高</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3">Token增值</td>
                                <td className="px-4 py-3 text-center">Token</td>
                                <td className="px-4 py-3 text-sm">市场波动大</td>
                                <td className="px-4 py-3 text-sm">极高(资本溢价)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 双重收入流瀑布图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">双重收入流结构对比</h4>
                    <DualRevenueStreamChart />
                </div>

                <div className={`${styles.card} p-6 rounded-xl mt-6`}>
                    <h4 className="text-lg font-semibold mb-3">财务协同分析</h4>
                    <p className="text-sm leading-relaxed">
                        国内业务提供坚实的"底座",覆盖公司基础运营成本与研发投入,确保在任何资本寒冬下都能生存;海外业务提供高爆发的"增长极",通过金融杠杆放大资产价值,为股东创造超额回报。
                    </p>
                </div>

                {/* KPI预测趋势图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">核心KPI预测趋势(2025-2027)</h4>
                    <KPITrendChart />
                </div>

                {/* KPI数据表格 */}
                <div className="overflow-x-auto my-8">
                    <table className={`w-full ${styles.card} rounded-xl overflow-hidden`}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th className="px-4 py-3 text-left">指标 (单位)</th>
                                <th className="px-4 py-3 text-center">2025 (E)</th>
                                <th className="px-4 py-3 text-center">2026 (E)</th>
                                <th className="px-4 py-3 text-center">2027 (E)</th>
                                <th className="px-4 py-3 text-left">备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-semibold">国内装机量 (MWh)</td>
                                <td className="px-4 py-3 text-center font-bold">50</td>
                                <td className="px-4 py-3 text-center font-bold">200</td>
                                <td className="px-4 py-3 text-center font-bold text-green-400">500</td>
                                <td className="px-4 py-3 text-sm">重点拓展大湾区</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-semibold">RWA发行规模 ($Mn)</td>
                                <td className="px-4 py-3 text-center font-bold">5</td>
                                <td className="px-4 py-3 text-center font-bold">50</td>
                                <td className="px-4 py-3 text-center font-bold text-blue-400">200</td>
                                <td className="px-4 py-3 text-sm">首年试点,次年放量</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-semibold">综合营收 (CNY Mn)</td>
                                <td className="px-4 py-3 text-center font-bold">35</td>
                                <td className="px-4 py-3 text-center font-bold">150</td>
                                <td className="px-4 py-3 text-center font-bold text-yellow-400">500</td>
                                <td className="px-4 py-3 text-sm">含RWA发行收入折算</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-semibold">净利润率 (%)</td>
                                <td className="px-4 py-3 text-center font-bold">15%</td>
                                <td className="px-4 py-3 text-center font-bold">25%</td>
                                <td className="px-4 py-3 text-center font-bold text-green-400">35%</td>
                                <td className="px-4 py-3 text-sm">技术服务与金融占比提升</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className="px-4 py-3 font-semibold">数据资产融资额 (CNY Mn)</td>
                                <td className="px-4 py-3 text-center font-bold">20</td>
                                <td className="px-4 py-3 text-center font-bold">80</td>
                                <td className="px-4 py-3 text-center font-bold text-purple-400">200</td>
                                <td className="px-4 py-3 text-sm">随资产规模线性增长</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="financial-5-2" className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">5.2 合规防火墙:互不交叉的生命线</h3>
                <p className="leading-relaxed mb-6">
                    鉴于境内外监管环境的巨大差异,特别是中国大陆对加密货币交易的严格禁止,我们必须建立严密的防火墙。
                </p>

                <div className="space-y-6">
                    <div className={`${styles.card} p-6 rounded-xl border-l-4 border-red-500`}>
                        <h4 className="text-xl font-semibold mb-3 text-red-400">🔒 资金隔离(Capital Firewall)</h4>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• <strong className="text-red-400">严禁直接兑换</strong>:境内主体绝不直接持有、交易或兑换任何加密货币</li>
                            <li>• <strong>通道合规</strong>:跨境资金流动必须通过QFLP或资本金账户;境内收益出境必须基于真实贸易背景或利润汇出申报,完税后进行</li>
                            <li>• <strong>币种错配管理</strong>:通过银行远期外汇合约锁定汇率风险</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl border-l-4 border-red-500`}>
                        <h4 className="text-xl font-semibold mb-3 text-red-400">🔒 数据隔离(Data Firewall)</h4>
                        <ul className="space-y-2 text-sm ml-6">
                            <li>• <strong className="text-red-400">物理隔离</strong>:国内电网敏感数据必须存储在中国境内服务器(阿里云/国资云),严禁直接出境</li>
                            <li>• <strong>数据脱敏与验真</strong>:向海外传输数据必须经过严格脱敏(只传输聚合数据),利用区块链哈希传输"数据指纹"而非"原始数据"</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} p-6 rounded-xl border-l-4 border-red-500`}>
                        <h4 className="text-xl font-semibold mb-3 text-red-400">🔒 法律实体隔离(Entity Firewall)</h4>
                        <p className="text-sm leading-relaxed">
                            境内外主体在股权上应设计为互不隶属的"姊妹公司"结构,或通过离岸信托持股,避免因单一主体的法律纠纷波及整个集团。
                        </p>
                    </div>
                </div>

                {/* 合规防火墙架构图 */}
                <div className="my-12">
                    <h4 className="text-xl font-semibold mb-4 text-center">合规防火墙架构图</h4>
                    <ComplianceFirewall />
                </div>
            </div>
        </section>
    );
}

// 第6章:结论
export function ContentSection6({ styles }: SectionProps) {
    return (
        <section id="conclusion" className="mb-16">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 ${styles.heading}`}>6. 结论</h2>

            <div className="space-y-6 leading-relaxed">
                <p className="text-lg">
                    创电云提出的<strong>"全球双引擎RWA战略"</strong>,是在当前地缘政治复杂、能源转型加速、金融科技爆发的时代背景下,经过深思熟虑的最优解。
                </p>

                <p>
                    通过<strong>"双轨并行"</strong>模式,我们最大化利用了创电云的技术优势——同一套BMS/EMS/IoT体系,既是国内赚取电费差价和数据贷的生产工具,又是海外发行RWA资产的信用机器。这种复用极大地摊薄了研发成本,建立了极高的竞争壁垒。
                </p>

                <p>
                    同时,我们有效分散了单一市场的政策风险。国内的"电改"红利为我们提供了稳健的基本盘,确保了企业的生存与抗风险能力;海外的"Web3"红利为我们提供了无限的想象空间与资本杠杆,确保了企业的高速增长与高估值。
                </p>

                <div className={`${styles.card} p-8 rounded-xl my-8 text-center`}>
                    <p className="text-2xl font-bold mb-4">
                        创电云不只是一家能源公司,<br />
                        我们正在重新定义能源资产的属性。
                    </p>
                    <p className="text-lg opacity-90">
                        从佛山的帕尔福电机工厂,到香港的RWA交易终端,<br />
                        我们正在构建一条看不见的数字能量传输线,<br />
                        将中国的绿色产能转化为全球的金融动能。
                    </p>
                </div>

                <p className="text-lg font-semibold text-center mt-8">
                    这不仅是创电云的胜利,<br />
                    更是中国能源资产全球化配置的范式创新。
                </p>

                <div className="text-center mt-12 pt-8 border-t border-gray-600">
                    <p className="text-xl font-bold opacity-80">(全文完)</p>
                </div>
            </div>
        </section>
    );
}
