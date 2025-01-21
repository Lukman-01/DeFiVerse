import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, DollarSign, Lock, ArrowUpRight,} from 'lucide-react';

interface LeverageExample {
  initialMargin: number;
  position: number;
  leverage: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface PerpetualData {
  time: string;
  price: number;
  fundingRate: number;
}

interface RiskMetric {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
}

const LeveragedDerivatives: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'repos' | 'perpetuals' | 'risks'>('overview');

  // Sample data for perpetual funding rates
  const perpetualData: PerpetualData[] = [
    { time: '00:00', price: 2000, fundingRate: 0.01 },
    { time: '04:00', price: 2050, fundingRate: 0.015 },
    { time: '08:00', price: 2100, fundingRate: 0.02 },
    { time: '12:00', price: 2080, fundingRate: 0.018 },
    { time: '16:00', price: 2120, fundingRate: 0.022 },
    { time: '20:00', price: 2150, fundingRate: 0.025 },
  ];

  // Example leverage scenarios
  const leverageExamples: LeverageExample[] = [
    { initialMargin: 100, position: 1000, leverage: 10, riskLevel: 'Medium' },
    { initialMargin: 100, position: 2000, leverage: 20, riskLevel: 'High' },
    { initialMargin: 100, position: 500, leverage: 5, riskLevel: 'Low' },
  ];

  const riskMetrics: RiskMetric[] = [
    {
      title: 'Liquidation Risk',
      description: 'Position closed if margin falls below maintenance requirement',
      icon: <AlertTriangle className="text-red-500" size={24} />,
      value: 'High Impact'
    },
    {
      title: 'Margin Requirements',
      description: 'Initial margin: 10%, Maintenance margin: 7.5%',
      icon: <Lock className="text-blue-500" size={24} />,
      value: '10% / 7.5%'
    },
    {
      title: 'Funding Rate',
      description: 'Hourly rate paid between longs and shorts',
      icon: <DollarSign className="text-green-500" size={24} />,
      value: '0.01% avg'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="text-blue-600" size={24} />
          <h2 className="text-3xl font-bold text-gray-800">Leveraged Derivatives</h2>
        </div>
        <p className="text-lg text-gray-600">
          Advanced financial instruments that amplify market exposure through borrowed capital,
          enabling traders to control larger positions with smaller capital requirements.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4 mb-6 border-b">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'repos', label: 'Repos' },
          { id: 'perpetuals', label: 'Perpetuals' },
          { id: 'risks', label: 'Risk Management' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
            className={`px-4 py-2 border-b-2 transition-colors ${
              selectedTab === tab.id
                ? 'border-blue-500 text-blue-600 font-semibold'
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {selectedTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="text-blue-500 mt-1" size={16} />
                  <span>Increased market exposure through borrowed capital</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="text-blue-500 mt-1" size={16} />
                  <span>Multiple leverage levels available (up to 20x)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="text-blue-500 mt-1" size={16} />
                  <span>Automatic liquidation mechanisms for risk management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Leverage Examples</h3>
              <div className="space-y-3">
                {leverageExamples.map((example, idx) => (
                  <div key={idx} className="bg-white p-3 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{example.leverage}x Leverage</span>
                      <span className={`px-2 py-1 rounded text-sm ${
                        example.riskLevel === 'High' ? 'bg-red-100 text-red-700' :
                        example.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {example.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      ${example.initialMargin} controls ${example.position} position
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'perpetuals' && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Perpetual Funding Rates</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={perpetualData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="price" stroke="#2563eb" name="Price" />
                  <Line yAxisId="right" type="monotone" dataKey="fundingRate" stroke="#16a34a" name="Funding Rate" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedTab === 'repos' && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Repurchase Agreements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Traditional Repos</h4>
                  <ul className="space-y-2">
                    <li>• Over-collateralized loans</li>
                    <li>• Used by institutions for short-term funding</li>
                    <li>• Typically involves government securities</li>
                    <li>• Market size: ~$12 trillion USD</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">DeFi Repos</h4>
                  <ul className="space-y-2">
                    <li>• Smart contract-based lending</li>
                    <li>• Automated liquidation mechanisms</li>
                    <li>• Cryptocurrency collateral</li>
                    <li>• Transparent on-chain execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'risks' && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {riskMetrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    {metric.icon}
                    <h4 className="font-semibold">{metric.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{metric.description}</p>
                  <div className="text-lg font-semibold text-blue-600">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Warning Footer */}
      <div className="mt-8 p-4 bg-red-50 rounded-lg flex items-start space-x-3">
        <AlertTriangle className="text-red-500 mt-1" size={20} />
        <p className="text-sm text-red-800">
          Warning: Leveraged trading involves substantial risk of loss. Only trade with capital you can afford to lose.
          Ensure you fully understand the mechanics and risks before trading.
        </p>
      </div>
    </div>
  );
};

export default LeveragedDerivatives;