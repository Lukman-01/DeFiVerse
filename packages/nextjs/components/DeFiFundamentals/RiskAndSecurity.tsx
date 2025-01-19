import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Bug, 
  Database, 
  TrendingDown, 
  Network, 
  FastForward,
  Check,
  Info
} from 'lucide-react';

const RiskCard = ({ icon, title, description, example, isActive, onClick }:any) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-lg shadow p-6 cursor-pointer transition-all
      ${isActive ? 'ring-2 ring-red-500 shadow-xl' : 'hover:shadow-lg'}`}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {isActive && (
      <div className="bg-red-50 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="h-4 w-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
          <span className="text-red-800">{example}</span>
        </div>
      </div>
    )}
  </div>
);

const SecurityPractice = ({ title, description }:any) => (
  <div className="bg-green-50 rounded-lg p-4 flex items-start">
    <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold text-green-900">{title}</h4>
      <p className="text-green-800">{description}</p>
    </div>
  </div>
);

const RiskAndSecurity = () => {
  const [activeRisk, setActiveRisk] = useState('smart_contract');

  const risks = {
    smart_contract: {
      icon: <Bug className="h-6 w-6 text-red-500" />,
      title: "Smart Contract Vulnerabilities",
      description: "Smart contracts are prone to bugs and exploits if not properly audited.",
      example: "The 2020 DAO exploit resulted in $60M loss due to a reentrancy vulnerability."
    },
    oracle: {
      icon: <Database className="h-6 w-6 text-orange-500" />,
      title: "Oracle Manipulation",
      description: "Price oracles can be manipulated to exploit DeFi protocols.",
      example: "Attackers can fake price spikes to trigger unfair liquidations."
    },
    economic: {
      icon: <TrendingDown className="h-6 w-6 text-yellow-500" />,
      title: "Economic Risks",
      description: "Financial risks including impermanent loss and insufficient collateral.",
      example: "Liquidity providers in AMMs often face impermanent loss during market volatility."
    },
    systemic: {
      icon: <Network className="h-6 w-6 text-purple-500" />,
      title: "Systemic Risks",
      description: "Interconnected protocols can create cascade effects across the ecosystem.",
      example: "The 2022 Luna-Terra crash affected multiple DeFi platforms across the ecosystem."
    },
    frontrunning: {
      icon: <FastForward className="h-6 w-6 text-blue-500" />,
      title: "Front-Running and MEV",
      description: "Transaction reordering can be exploited for profit at users' expense.",
      example: "Sandwich attacks in DEX trades lead to higher costs for regular users."
    }
  };

  const securityPractices = [
    {
      title: "Regular Smart Contract Audits",
      description: "Multiple independent audits from reputable firms before deployment."
    },
    {
      title: "Use of Trusted Protocols",
      description: "Stick to well-established platforms with proven track records."
    },
    {
      title: "Risk Assessment",
      description: "Thorough research and understanding of protocol-specific risks."
    },
    {
      title: "DeFi Insurance Coverage",
      description: "Protection against smart contract failures through insurance protocols."
    },
    {
      title: "Portfolio Management",
      description: "Diversification across multiple protocols to minimize risk exposure."
    }
  ];

  const metrics = [
    { value: "$2.5B+", label: "Lost to DeFi Hacks (2022)" },
    { value: "200+", label: "Major Security Audits" },
    { value: "$500M+", label: "DeFi Insurance Coverage" },
    { value: "1000+", label: "Known Vulnerabilities" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-red-800 to-red-600 text-white">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 mr-3" />
            <h1 className="text-2xl font-bold">Risks and Security in DeFi</h1>
          </div>
          <p className="text-lg">
            Understanding and managing risks is crucial for safely participating in the 
            DeFi ecosystem. Learn about key vulnerabilities and protection strategies.
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-red-600">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(risks).map(([key, risk]) => (
              <RiskCard
                key={key}
                {...risk}
                isActive={activeRisk === key}
                onClick={() => setActiveRisk(key)}
              />
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold">Security Best Practices</h3>
            </div>
            <div className="space-y-4">
              {securityPractices.map((practice, index) => (
                <SecurityPractice key={index} {...practice} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAndSecurity;