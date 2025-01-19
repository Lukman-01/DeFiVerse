import React, { useState } from 'react';
import { Shield, TrendingUp, TrendingDown, Activity, AlertTriangle, Info } from 'lucide-react';

interface Term {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: {
    explanation: string;
    examples: string[];
    riskLevel: 'low' | 'medium' | 'high';
  };
}

interface HealthFactorProps {
  value: number;
  className?: string;
}

const HealthFactorIndicator: React.FC<HealthFactorProps> = ({ value, className }) => {
  const getHealthColor = (health: number) => {
    if (health >= 2) return 'bg-green-500';
    if (health >= 1.5) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={`p-4 rounded-lg border ${className}`}>
      <h4 className="font-semibold mb-2">Health Factor</h4>
      <div className="flex items-center gap-2">
        <div className={`h-3 flex-grow rounded-full ${getHealthColor(value)}`} 
             style={{ width: `${Math.min(value * 50, 100)}%` }} />
        <span className="font-mono">{value.toFixed(2)}</span>
      </div>
    </div>
  );
};

const Terminologies: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [healthFactor, setHealthFactor] = useState<number>(2.0);

  const terms: Term[] = [
    {
      id: 'collateral',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Collateral',
      description: 'Assets that serve as a security deposit for loans',
      details: {
        explanation: 'Collateral is the backbone of DeFi lending, providing security for loans through smart contracts.',
        examples: [
          'ETH deposited to borrow DAI',
          'USDC locked to borrow other stablecoins',
          'Tokenized assets used as backing'
        ],
        riskLevel: 'low'
      }
    },
    {
      id: 'overcollateralization',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Over-collateralization',
      description: 'value(collateral assets) > value(granted loan)',
      details: {
        explanation: 'A safety mechanism requiring borrowers to deposit more value than they borrow',
        examples: [
          'Depositing $15,000 of ETH to borrow $10,000 DAI',
          'Maintaining 150% collateral ratio',
          'Multiple asset types as collateral'
        ],
        riskLevel: 'medium'
      }
    },
    {
      id: 'undercollateralization',
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      title: 'Under-collateralization',
      description: 'value(collateral) < value(debt)',
      details: {
        explanation: 'Riskier lending where borrowed amount exceeds collateral value',
        examples: [
          'Flash loans',
          'Protocol-specific farming',
          'Restricted usage loans'
        ],
        riskLevel: 'high'
      }
    },
    {
      id: 'liquidation',
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: 'Liquidation',
      description: 'Forced sale of collateral when value(collateral) <= 150% x value(debt)',
      details: {
        explanation: 'Automated process to protect lenders when collateral value falls too low',
        examples: [
          'ETH price drops trigger liquidation',
          'Health factor falls below 1',
          'Liquidator repays debt and receives collateral'
        ],
        riskLevel: 'high'
      }
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">DeFi Lending Terminology</h2>
        <p className="text-gray-600 mt-2">
          Understanding these key concepts is crucial for participating in decentralized lending markets.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {terms.map(term => (
            <div
              key={term.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedTerm === term.id ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-200'
              }`}
              onClick={() => setSelectedTerm(term.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                {term.icon}
                <h3 className="font-semibold">{term.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{term.description}</p>
            </div>
          ))}
        </div>

        {selectedTerm && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">
                  {terms.find(t => t.id === selectedTerm)?.title} Explained
                </h4>
                <p className="text-gray-600 mb-4">
                  {terms.find(t => t.id === selectedTerm)?.details.explanation}
                </p>
                <div className="space-y-2">
                  <h5 className="font-medium">Examples:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {terms.find(t => t.id === selectedTerm)?.details.examples.map((example, i) => (
                      <li key={i} className="text-gray-600">{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h4 className="font-semibold mb-4">Interactive Health Factor Simulator</h4>
          <HealthFactorIndicator value={healthFactor} className="mb-4" />
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={healthFactor}
            onChange={(e) => setHealthFactor(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2">
            {healthFactor < 1 ? 'Risk of liquidation!' : 
             healthFactor < 1.5 ? 'Caution: Low health factor' : 
             'Safe position'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminologies;