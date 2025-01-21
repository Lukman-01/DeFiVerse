import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Book, ArrowRight, TrendingUp, Shield, LucideIcon } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface RiskCard {
  title: string;
  desc: string;
}

interface DerivativeType {
  title: string;
  desc: string;
}

interface ChartDataPoint {
  price: number;
  profit: number;
}

const IntroductionToDerivatives: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('overview');

  // Sample data for futures profit chart
  const futuresProfitData: ChartDataPoint[] = [
    { price: 15, profit: -5 },
    { price: 17.5, profit: -2.5 },
    { price: 20, profit: 0 },
    { price: 22.5, profit: 2.5 },
    { price: 25, profit: 5 }
  ];

  const tabs: TabItem[] = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'futures', label: 'Futures & Forwards', icon: ArrowRight },
    { id: 'trading', label: 'Trading Mechanics', icon: TrendingUp },
    { id: 'risk', label: 'Risk Management', icon: Shield }
  ];

  const derivativeTypes: DerivativeType[] = [
    { title: 'Futures', desc: 'Standardized contracts traded on exchanges' },
    { title: 'Forwards', desc: 'Custom OTC contracts between parties' },
    { title: 'Swaps', desc: 'Exchange of future cash flows' },
    { title: 'Options', desc: 'Right but not obligation to trade' }
  ];

  const risks: RiskCard[] = [
    {
      title: 'Counterparty Risk',
      desc: 'Risk of default by trading counterpart'
    },
    {
      title: 'Market Risk',
      desc: 'Risk from adverse price movements'
    },
    {
      title: 'Liquidity Risk',
      desc: 'Risk of inability to exit positions'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction to Derivatives</h2>
        <p className="text-lg text-gray-600">
          Derivatives are financial instruments whose value is derived from the performance 
          of underlying assets, indices, or entities. They play a crucial role in both 
          traditional finance and DeFi ecosystems.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors ${
              selectedTab === tab.id 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {selectedTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <span>Conditional payments based on future asset prices</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <span>Risk transfer between market participants</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <span>Leverage and hedging capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Types of Derivatives</h4>
              <div className="space-y-3">
                {derivativeTypes.map((type, idx) => (
                  <div key={idx} className="bg-white p-3 rounded shadow-sm">
                    <h5 className="font-semibold text-blue-600">{type.title}</h5>
                    <p className="text-sm text-gray-600">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'futures' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Futures Contract Profit/Loss</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <LineChart width={600} height={300} data={futuresProfitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="price" label={{ value: 'Market Price', position: 'bottom' }} />
                <YAxis label={{ value: 'Profit/Loss', angle: -90, position: 'left' }} />
                <Tooltip />
                <Line type="monotone" dataKey="profit" stroke="#2563eb" />
              </LineChart>
              <p className="mt-4 text-sm text-gray-600">
                This chart shows the profit/loss for a long futures position with a strike price of $20
              </p>
            </div>
          </div>
        )}

        {selectedTab === 'trading' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Trading Mechanics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Traditional Markets</h4>
                <ul className="space-y-2">
                  <li>• Exchange-based trading</li>
                  <li>• Centralized clearing</li>
                  <li>• Margin requirements</li>
                  <li>• Daily settlement</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">DeFi Markets</h4>
                <ul className="space-y-2">
                  <li>• Smart contract execution</li>
                  <li>• Automated market making</li>
                  <li>• Collateralization requirements</li>
                  <li>• Oracle price feeds</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'risk' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Risk Management</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                {risks.map((risk, idx) => (
                  <div key={idx} className="bg-white p-4 rounded shadow-sm">
                    <h5 className="font-semibold text-blue-600 mb-2">{risk.title}</h5>
                    <p className="text-sm text-gray-600">{risk.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Note: This is an educational overview. Trading derivatives involves significant risk 
          and requires thorough understanding of the instruments and market mechanics.
        </p>
      </div>
    </div>
  );
};

export default IntroductionToDerivatives;