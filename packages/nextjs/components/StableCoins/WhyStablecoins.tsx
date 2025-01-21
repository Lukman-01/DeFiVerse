
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Globe, Banknote, ChevronRight, DollarSign, Wallet, Zap } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  benefits: string[];
  examples: string[];
}

interface MarketData {
  date: string;
  bitcoin: number;
  ethereum: number;
  stablecoin: number;
}

const WhyStablecoins: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<string>('trading');

  const useCases: Record<string, UseCase> = {
    trading: {
      id: 'trading',
      title: 'Trading & Hedging',
      description: 'Protect assets during market volatility and facilitate efficient trading',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      benefits: [
        'Quick market entry and exit',
        'Reduced exposure to volatility',
        'Efficient price discovery',
        'Lower trading fees'
      ],
      examples: [
        'Traders moving to USDT during bearish trends',
        'Using DAI as trading pair collateral',
        'Arbitrage opportunities across exchanges'
      ]
    },
    payments: {
      id: 'payments',
      title: 'Cross-Border Payments',
      description: 'Fast and cost-effective international transactions',
      icon: <Globe className="w-6 h-6 text-green-500" />,
      benefits: [
        'Near-instant settlements',
        'Lower transaction fees',
        '24/7 availability',
        'No currency conversion losses'
      ],
      examples: [
        'Remittances using USDC',
        'B2B payments via stablecoins',
        'International payroll processing'
      ]
    },
    defi: {
      id: 'defi',
      title: 'DeFi Applications',
      description: 'Foundation for decentralized financial services',
      icon: <Banknote className="w-6 h-6 text-purple-500" />,
      benefits: [
        'Stable lending collateral',
        'Predictable yield generation',
        'Liquidity pool stability',
        'Risk management'
      ],
      examples: [
        'Aave stable rate lending',
        'Curve stablecoin pools',
        'Yield farming strategies'
      ]
    }
  };

  // Sample market volatility data
  const marketData: MarketData[] = [
    { date: 'Day 1', bitcoin: 100, ethereum: 100, stablecoin: 100 },
    { date: 'Day 2', bitcoin: 95, ethereum: 92, stablecoin: 100.1 },
    { date: 'Day 3', bitcoin: 105, ethereum: 98, stablecoin: 99.9 },
    { date: 'Day 4', bitcoin: 90, ethereum: 85, stablecoin: 100.2 },
    { date: 'Day 5', bitcoin: 110, ethereum: 105, stablecoin: 99.8 },
    { date: 'Day 6', bitcoin: 85, ethereum: 80, stablecoin: 100 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Why Stablecoins?</h2>
        <p className="mt-2 text-gray-600">
          Stablecoins bridge the gap between traditional finance and the cryptocurrency ecosystem, 
          offering stability in a volatile market while enabling innovative financial applications.
        </p>
      </div>

      {/* Market Volatility Comparison */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Price Stability Comparison</h3>
        <div className="h-64 bg-gray-50 p-4 rounded-lg">
          <ResponsiveContainer>
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[70, 120]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="bitcoin" 
                stroke="#f7931a" 
                name="Bitcoin"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="ethereum" 
                stroke="#627eea" 
                name="Ethereum"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="stablecoin" 
                stroke="#16a34a" 
                name="Stablecoin"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.values(useCases).map((useCase) => (
          <button
            key={useCase.id}
            onClick={() => setSelectedUseCase(useCase.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedUseCase === useCase.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              {useCase.icon}
              <div className="text-left">
                <h3 className="font-semibold">{useCase.title}</h3>
                <p className="text-sm text-gray-500">{useCase.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Use Case Details */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Key Benefits</h4>
            <ul className="space-y-3">
              {useCases[selectedUseCase].benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Real-World Examples</h4>
            <ul className="space-y-3">
              {useCases[selectedUseCase].examples.map((example, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          {
            icon: <DollarSign className="w-8 h-8 text-green-500" />,
            title: "Market Cap",
            value: "$180B+",
            subtitle: "Total stablecoin value"
          },
          {
            icon: <Wallet className="w-8 h-8 text-blue-500" />,
            title: "Daily Volume",
            value: "$50B+",
            subtitle: "Trading volume"
          },
          {
            icon: <Zap className="w-8 h-8 text-purple-500" />,
            title: "DeFi TVL",
            value: "$40B+",
            subtitle: "Total Value Locked"
          }
        ].map((stat, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {stat.icon}
              <div>
                <h4 className="font-semibold">{stat.title}</h4>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyStablecoins;