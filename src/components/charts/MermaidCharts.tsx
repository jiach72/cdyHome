import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
    chart: string;
    id: string;
}

// 初始化 Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
});

export function MermaidChart({ chart, id }: MermaidChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
                if (chartRef.current) {
                    chartRef.current.innerHTML = svg;
                }
            });
        }
    }, [chart, id]);

    return <div ref={chartRef} className="flex justify-center my-8" />;
}

// 1. 双轨战略架构图
export function DualTrackArchitecture() {
    const chart = `
graph TB
    A[创电云技术底座<br/>BMS + EMS + 边缘网关] --> B[内轨: 国内能源数字化]
    A --> C[外轨: 海外RWA平台]
    
    B --> B1[VPP虚拟电厂<br/>峰谷套利]
    B --> B2[数据资产化<br/>银行低息贷]
    B --> B3[EMC合同能源<br/>稳定现金流]
    
    C --> C1[STO发行<br/>USDC募资]
    C --> C2[资产管理费<br/>1-2% AUM]
    C --> C3[超额分成<br/>20% Carry]
    
    B1 --> D1[人民币收入<br/>稳健增长]
    B2 --> D1
    B3 --> D1
    
    C1 --> D2[美元收入<br/>爆发增长]
    C2 --> D2
    C3 --> D2
    
    D1 --> E[双币种收入模型<br/>风险对冲 + 高估值]
    D2 --> E
    
    style A fill:#1e3a8a,stroke:#3b82f6,stroke-width:3px,color:#fff
    style B fill:#047857,stroke:#10b981,stroke-width:2px,color:#fff
    style C fill:#7c2d12,stroke:#f59e0b,stroke-width:2px,color:#fff
    style E fill:#581c87,stroke:#a855f7,stroke-width:3px,color:#fff
  `;

    return <MermaidChart chart={chart} id="dual-track" />;
}

// 2. BMS→EMS→区块链数据流图
export function TechStackDataFlow() {
    const chart = `
flowchart TD
    A[BMS电池管理系统] -->|电芯数据<br/>SOC/SOH/温度| B[边缘计算网关]
    A1[EMS能量管理系统] -->|充放电策略<br/>VPP响应| B
    
    B -->|数据指纹<br/>哈希签名| C{双向协议适配}
    
    C -->|国密算法<br/>MQTT/CoAP| D[长安链<br/>ChainMaker]
    C -->|Chainlink预言机<br/>ZKP零知识证明| E[Solana/Ethereum<br/>公链]
    
    D --> F1[国内应用]
    F1 --> F11[电网可信调节凭证]
    F1 --> F12[银行数据资产贷]
    
    E --> F2[海外应用]
    F2 --> F21[DeFi协议自动分红]
    F2 --> F22[投资者实时透明度]
    
    style A fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style A1 fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style B fill:#7c2d12,stroke:#f59e0b,stroke-width:3px,color:#fff
    style D fill:#047857,stroke:#10b981,color:#fff
    style E fill:#581c87,stroke:#a855f7,color:#fff
  `;

    return <MermaidChart chart={chart} id="tech-flow" />;
}

// 3. 数据贷实施流程
export function DataLoanProcess() {
    const chart = `
flowchart LR
    A[15个项目<br/>运营数据] --> B[数据清洗<br/>聚合处理]
    B --> C[广州数据交易所<br/>数据确权登记]
    C --> D[第三方评估<br/>律所+会计所]
    D --> E[数据资产<br/>估值5000-8000万]
    E --> F[银行授信<br/>2000-3000万]
    F --> G[年化3.2%-3.8%<br/>低息资金]
    G --> H[新项目投资<br/>飞轮效应]
    
    style A fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style C fill:#047857,stroke:#10b981,color:#fff
    style E fill:#7c2d12,stroke:#f59e0b,stroke-width:2px,color:#fff
    style F fill:#581c87,stroke:#a855f7,stroke-width:2px,color:#fff
  `;

    return <MermaidChart chart={chart} id="data-loan" />;
}

// 4. 离岸架构组织图
export function OffshoreStructure() {
    const chart = `
graph TB
    A[开曼群岛<br/>IPC Green Energy Fund SPC] --> B[香港 SPV<br/>PowerToken Assets Ltd]
    A --> C[新加坡<br/>IPC Global Tech Pte. Ltd]
    
    B --> B1[RWA代币发行<br/>申请VASP牌照]
    B --> B2[底层资产<br/>收益权持有]
    
    C --> C1[BMS/EMS海外版<br/>软件开发]
    C --> C2[全球市场推广<br/>技术支持]
    
    D[国内运营实体<br/>创电云科技WFOE] -.->|技术服务费<br/>收益权转让| B
    
    B2 --> E[全球投资者<br/>USDC/USDT]
    E -.->|募集资金| F[QFLP/FDI<br/>合规回流]
    F -.->|结汇投资| D
    
    style A fill:#1e3a8a,stroke:#3b82f6,stroke-width:3px,color:#fff
    style B fill:#047857,stroke:#10b981,stroke-width:2px,color:#fff
    style C fill:#7c2d12,stroke:#f59e0b,stroke-width:2px,color:#fff
    style D fill:#581c87,stroke:#a855f7,stroke-width:2px,color:#fff
  `;

    return <MermaidChart chart={chart} id="offshore" />;
}

// 5. STO发行序列图
export function STOIssuanceFlow() {
    const chart = `
sequenceDiagram
    participant Asset as 帕尔福项目<br/>收益权
    participant Lawyer as 香港律所<br/>法律意见
    participant Auditor as 审计机构<br/>数据审计
    participant Chain as Solana链<br/>ERC-3643
    participant Oracle as Chainlink<br/>预言机
    participant Investor as 全球投资者<br/>KYC白名单
    
    Asset->>Lawyer: 收益权转让协议
    Lawyer->>Auditor: 法律确权完成
    Auditor->>Chain: 历史数据审计报告
    Chain->>Chain: 铸造RWA Token
    Chain->>Investor: STO发售(USDC支付)
    
    loop 每日自动分红
        Asset->>Oracle: 推送发电量/收益数据
        Oracle->>Chain: 触发智能合约
        Chain->>Investor: USDC分红空投
    end
    
    Note over Asset,Investor: T+0级收益分配,完全透明
  `;

    return <MermaidChart chart={chart} id="sto-flow" />;
}

// 6. 合规防火墙架构图
export function ComplianceFirewall() {
    const chart = `
graph TD
    A[创电云集团] --> B[境内实体<br/>创电云科技]
    A --> C[境外实体<br/>离岸架构]
    
    B --> B1[资金隔离]
    B1 --> B11[严禁直接持有加密货币]
    B1 --> B12[QFLP/FDI合规通道]
    B1 --> B13[远期外汇锁汇]
    
    B --> B2[数据隔离]
    B2 --> B21[敏感数据境内存储]
    B2 --> B22[仅传输数据指纹]
    B2 --> B23[符合出境安全评估]
    
    B --> B3[法律实体隔离]
    B3 --> B31[姊妹公司结构]
    B3 --> B32[离岸信托持股]
    
    C --> C1[合规运营]
    C1 --> C11[香港SFC监管]
    C1 --> C12[KYC/AML白名单]
    C1 --> C13[稳定币合规渠道]
    
    style B fill:#047857,stroke:#10b981,stroke-width:2px,color:#fff
    style C fill:#7c2d12,stroke:#f59e0b,stroke-width:2px,color:#fff
    style B1 fill:#991b1b,stroke:#ef4444,stroke-width:2px,color:#fff
    style B2 fill:#991b1b,stroke:#ef4444,stroke-width:2px,color:#fff
    style B3 fill:#991b1b,stroke:#ef4444,stroke-width:2px,color:#fff
  `;

    return <MermaidChart chart={chart} id="firewall" />;
}
