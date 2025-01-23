import React, { useState } from 'react';
import { Shield, Lock, Settings, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const mevData = [
  { month: 'Jan', value: 100, withSolution: 20 },
  { month: 'Feb', value: 120, withSolution: 15 },
  { month: 'Mar', value: 140, withSolution: 10 },
  { month: 'Apr', value: 160, withSolution: 8 },
  { month: 'May', value: 180, withSolution: 5 }
];

const Solution = ({ title, description, icon: Icon, expanded, onClick }: {
  title: string;
  description: string;
  icon: React.ElementType;
  expanded: boolean;
  onClick: () => void;
}) => (
  <div className="bg-white rounded-lg shadow-sm">
    <button 
      className="w-full p-4 flex items-center justify-between"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon className="text-blue-500" />
        <span className="font-semibold">{title}</span>
      </div>
      {expanded ? <ChevronUp /> : <ChevronDown />}
    </button>
    {expanded && (
      <div className="px-4 pb-4 text-gray-600 border-t">
        {description}
      </div>
    )}
  </div>
);

const ImpactMetric = ({ label, value, trend }: {
  label: string;
  value: string;
  trend: 'positive' | 'negative';
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold">{value}</span>
      <span className={trend === 'positive' ? 'text-green-500' : 'text-red-500'}>
        {trend === 'positive' ? '↓' : '↑'}
      </span>
    </div>
  </div>
);

const ReducingBEV = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      title: "Fair-Ordering Protocol",
      description: "Aequitas Protocol Family ensures transaction ordering fairness, reducing MEV extraction opportunities by implementing time-based sequencing.",
      icon: Layers
    },
    {
      title: "MEV-Mindful dApp Design",
      description: "Design protocols that minimize MEV opportunities through immediate liquidations and unified liquidity pools, reducing cross-protocol arbitrage.",
      icon: Settings
    },
    {
      title: "Private Transaction Relay",
      description: "Secure transaction submission pathway that prevents front-running by hiding pending transactions until block inclusion.",
      icon: Lock
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 rounded-xl text-white">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Reducing Blockchain Extractable Value</h1>
        </div>
        <p className="text-lg opacity-90">
          Comprehensive strategies to minimize MEV impact and enhance network security
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <ImpactMetric 
          label="MEV Impact Reduction"
          value="874x"
          trend="positive"
        />
        <ImpactMetric 
          label="Network Security"
          value="10%"
          trend="positive"
        />
        <ImpactMetric 
          label="Block Reward Impact"
          value="4x"
          trend="negative"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6">MEV Reduction Impact</h2>
          <LineChart width={400} height={300} data={mevData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ef4444" 
              name="Without Solution"
            />
            <Line 
              type="monotone" 
              dataKey="withSolution" 
              stroke="#22c55e" 
              name="With Solution"
            />
          </LineChart>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Mitigation Solutions</h2>
          {solutions.map((solution, index) => (
            <Solution
              key={index}
              {...solution}
              expanded={expandedSolution === index}
              onClick={() => setExpandedSolution(expandedSolution === index ? null : index)}
            />
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Implementation Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Network-wide protocol adoption requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Balancing transparency with privacy</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Cross-chain MEV complexity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Existing protocol dependencies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReducingBEV;