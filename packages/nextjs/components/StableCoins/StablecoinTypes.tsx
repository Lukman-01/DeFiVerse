import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight, DollarSign, Shield, Cpu } from 'lucide-react';

interface StablecoinTypeDetails {
  icon: JSX.Element;
  title: string;
  description: string;
  examples: string[];
  pros: string[];
  cons: string[];
  mechanism: string;
  collateralRatio: string;
}

interface StablecoinTypesMap {
  [key: string]: StablecoinTypeDetails;
}

interface StabilityDataPoint {
  day: number;
  reserve: number;
  collateral: number;
  algorithmic: number;
  [key: string]: number;
}

const StablecoinTypes: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'reserve' | 'collateral' | 'algorithmic'>('reserve');

  const stablecoinTypes: StablecoinTypesMap = {
    reserve: {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Reserve-Based Stablecoins',
      description: 'Backed by fiat reserves held in a centralized entity',
      examples: ['USDC', 'USDT'],
      pros: ['High stability', 'Easy to understand', 'Regulated'],
      cons: ['Centralized', 'Requires trust in custodian', 'Regular audits needed'],
      mechanism: 'Each token is backed 1:1 by fiat currency reserves (typically USD) held by a centralized entity.',
      collateralRatio: '100%'
    },
    collateral: {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Collateral-Based Stablecoins',
      description: 'Over-collateralized by other cryptocurrencies',
      examples: ['DAI', 'sUSD'],
      pros: ['Decentralized', 'Transparent', 'Crypto native'],
      cons: ['Capital inefficient', 'Complex liquidation', 'Vulnerable to crypto volatility'],
      mechanism: 'Users lock cryptocurrency as collateral to mint stablecoins, typically requiring over-collateralization.',
      collateralRatio: '150%+'
    },
    algorithmic: {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: 'Algorithmic Stablecoins',
      description: 'Maintain stability through supply and demand adjustments',
      examples: ['AMPL'],
      pros: ['No collateral needed', 'Highly scalable', 'Fully decentralized'],
      cons: ['More volatile', 'Complex mechanism', 'Potential for failure'],
      mechanism: 'Price stability is maintained through automatic supply adjustments based on demand.',
      collateralRatio: '0%'
    }
  };

  const stabilityData: StabilityDataPoint[] = [
    { day: 1, reserve: 1.00, collateral: 1.01, algorithmic: 0.98 },
    { day: 2, reserve: 1.00, collateral: 0.99, algorithmic: 1.03 },
    { day: 3, reserve: 1.00, collateral: 1.02, algorithmic: 0.95 },
    { day: 4, reserve: 1.00, collateral: 0.98, algorithmic: 1.04 },
    { day: 5, reserve: 1.00, collateral: 1.01, algorithmic: 0.97 }
  ];

  const getStrokeColor = (type: string): string => {
    switch(type) {
      case 'reserve':
        return '#16a34a';
      case 'collateral':
        return '#2563eb';
      case 'algorithmic':
        return '#9333ea';
      default:
        return '#000000';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Stablecoin Types</h2>
        <p className="mt-2 text-gray-600">
          Understanding the different mechanisms used to maintain price stability in stablecoins
        </p>
      </div>

      {/* Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {(Object.entries(stablecoinTypes) as [keyof typeof stablecoinTypes, StablecoinTypeDetails][]).map(([key, type]) => (
          <button
            key={key}
            onClick={() => setSelectedType(key as typeof selectedType)}
            className={`p-4 rounded-lg border transition-all ${
              selectedType === key
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              {type.icon}
              <div className="text-left">
                <h3 className="font-semibold">{type.title}</h3>
                <p className="text-sm text-gray-500">
                  {type.examples.join(', ')}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Type Details */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{stablecoinTypes[selectedType].title}</h3>
              <p className="text-gray-700">{stablecoinTypes[selectedType].description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How it works</h4>
              <p className="text-gray-700">{stablecoinTypes[selectedType].mechanism}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pros</h4>
                <ul className="space-y-2">
                  {stablecoinTypes[selectedType].pros.map((pro, index) => (
                    <li key={index} className="flex items-center text-green-700 text-sm">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cons</h4>
                <ul className="space-y-2">
                  {stablecoinTypes[selectedType].cons.map((con, index) => (
                    <li key={index} className="flex items-center text-red-700 text-sm">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Price Stability Chart */}
          <div>
            <h4 className="font-semibold mb-4">Price Stability Comparison</h4>
            <div className="h-64">
              <ResponsiveContainer>
                <LineChart data={stabilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0.9, 1.1]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey={selectedType} 
                    stroke={getStrokeColor(selectedType)}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              Collateral Ratio: {stablecoinTypes[selectedType].collateralRatio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StablecoinTypes;