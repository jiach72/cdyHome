import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';

// 1. 15个项目资产分布饼图
export function AssetDistributionChart() {
    const data = [
        { name: '高端制造', value: 6.0, projects: 5, color: '#10b981' },
        { name: '传统高耗能', value: 8.0, projects: 4, color: '#3b82f6' },
        { name: '纺织印染', value: 4.5, projects: 3, color: '#f59e0b' },
        { name: '冷链/食品', value: 3.0, projects: 3, color: '#8b5cf6' },
    ];

    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }: any) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `${Number(value)} MW / ${Number(value) * 2} MWh`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

// 2. 三驾马车收入结构对比图
export function RevenueStructureChart() {
    const data = [
        { name: 'EMC电费差价', amount: 1800, color: '#10b981' },
        { name: 'VPP补贴', amount: 360, color: '#3b82f6' },
        { name: '数据贷融资', amount: 2000, color: '#f59e0b' },
    ];

    return (
        <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" label={{ value: '万元 RMB', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#10b981">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

// 3. 双重收入流瀑布图
export function DualRevenueStreamChart() {
    const data = [
        { category: '国内-EMC', RMB: 1800, USD: 0 },
        { category: '国内-VPP', RMB: 360, USD: 0 },
        { category: '国内-数据贷', RMB: 2000, USD: 0 },
        { category: '海外-RWA发行', RMB: 0, USD: 5 },
        { category: '海外-管理费', RMB: 0, USD: 2 },
        { category: '海外-超额分成', RMB: 0, USD: 3 },
    ];

    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9ca3af" />
                    <YAxis type="category" dataKey="category" stroke="#9ca3af" width={120} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="RMB" fill="#10b981" name="人民币(万元)" />
                    <Bar dataKey="USD" fill="#3b82f6" name="美元(百万)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

// 4. KPI预测趋势图2025-2027
export function KPITrendChart() {
    const data = [
        { year: '2025', 装机量: 50, RWA规模: 5, 营收: 35, 净利润率: 15 },
        { year: '2026', 装机量: 200, RWA规模: 50, 营收: 150, 净利润率: 25 },
        { year: '2027', 装机量: 500, RWA规模: 200, 营收: 500, 净利润率: 35 },
    ];

    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="装机量" stroke="#10b981" strokeWidth={2} name="装机量(MWh)" />
                    <Line type="monotone" dataKey="RWA规模" stroke="#3b82f6" strokeWidth={2} name="RWA规模($Mn)" />
                    <Line type="monotone" dataKey="营收" stroke="#f59e0b" strokeWidth={2} name="营收(CNY Mn)" />
                    <Line type="monotone" dataKey="净利润率" stroke="#8b5cf6" strokeWidth={2} name="净利润率(%)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

// 5. 电价峰谷时段Timeline
export function ElectricityPriceTimeline() {
    const timeSlots = [
        { start: 0, end: 8, label: '谷价时段', price: '0.25-0.3元', color: '#10b981' },
        { start: 8, end: 10, label: '平价', price: '0.6元', color: '#6b7280' },
        { start: 10, end: 12, label: '峰价', price: '1.25-1.4元', color: '#ef4444' },
        { start: 12, end: 14, label: '平价', price: '0.6元', color: '#6b7280' },
        { start: 14, end: 19, label: '峰价', price: '1.25-1.4元', color: '#ef4444' },
        { start: 19, end: 24, label: '平价', price: '0.6元', color: '#6b7280' },
    ];

    return (
        <div className="w-full py-8">
            <div className="flex flex-col gap-4">
                <div className="flex h-16 rounded-lg overflow-hidden border border-gray-600">
                    {timeSlots.map((slot, idx) => (
                        <div
                            key={idx}
                            style={{
                                width: `${((slot.end - slot.start) / 24) * 100}%`,
                                backgroundColor: slot.color,
                            }}
                            className="flex flex-col items-center justify-center text-white text-xs font-semibold"
                        >
                            <span>{slot.label}</span>
                            <span className="text-[10px] opacity-80">{slot.start}:00-{slot.end}:00</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-green-500"></div>
                        <span>谷价: 0.25-0.3元/kWh</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gray-500"></div>
                        <span>平价: 0.6元/kWh</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-red-500"></div>
                        <span>峰价: 1.25-1.4元/kWh</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
