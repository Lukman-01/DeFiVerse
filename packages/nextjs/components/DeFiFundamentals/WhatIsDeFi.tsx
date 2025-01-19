import React, { useState } from 'react';
import { ChevronRight, Building2, ShieldCheck, Coins, ArrowRightLeft, Banknote, AlertTriangle } from 'lucide-react';

const Card = ({ children, onClick, isActive, className = '' }:any) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg p-6 ${isActive ? 'ring-2 ring-blue-500' : ''} ${className}`}
  >
    {children}
  </div>
);

const TabButton = ({ isActive, onClick, children }:any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-colors
      ${isActive 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
  >
    {children}
  </button>
);

const DeFiEducationalInterface = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeComparison, setActiveComparison] = useState('cefi');

  const comparisonData = {
    cefi: {
      title: 'Traditional Finance (CeFi)',
      points: [
        'Requires permissions and approvals',
        'Assets held by third-party institutions',
        'Centralized governance',
        'Identity verification required (KYC/AML)',
        'Limited operating hours',
        'Geographic restrictions'
      ]
    },
    defi: {
      title: 'Decentralized Finance (DeFi)',
      points: [
        'Permissionless and open to all',
        'Self-custody of assets',
        'Decentralized governance',
        'Pseudonymous participation',
        '24/7 operation',
        'Global accessibility'
      ]
    }
  };

  const defiServices = [
    {
      title: 'Asset Tokenization',
      icon: <Coins className="h-6 w-6" />,
      description: 'Convert real-world assets into digital tokens on the blockchain',
      examples: ['Stablecoins', 'NFTs', 'Security Tokens']
    },
    {
      title: 'Decentralized Exchange (DEX)',
      icon: <ArrowRightLeft className="h-6 w-6" />,
      description: 'Trade digital assets without intermediaries',
      examples: ['Automated Market Makers', 'Order Book DEXs', 'Liquidity Pools']
    },
    {
      title: 'Lending & Borrowing',
      icon: <Banknote className="h-6 w-6" />,
      description: 'Borrow assets or earn interest by lending',
      examples: ['Flash Loans', 'Collateralized Lending', 'Yield Farming']
    }
  ];

  const risks = [
    {
      title: 'Smart Contract Risks',
      description: 'Vulnerabilities in code could lead to loss of funds',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: 'Oracle Attacks',
      description: 'Manipulation of price feeds affecting protocol operations',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: 'Front-running',
      description: 'Transaction ordering exploitation by miners or traders',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">Understanding DeFi: The Future of Finance</h1>
          <p className="mt-4 text-lg text-gray-600">
            Decentralized Finance (DeFi) represents a paradigm shift in financial services, 
            leveraging blockchain technology to create an open, permissionless, and 
            transparent financial system.
          </p>
        </div>

        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <TabButton 
              isActive={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </TabButton>
            <TabButton 
              isActive={activeTab === 'services'} 
              onClick={() => setActiveTab('services')}
            >
              Services
            </TabButton>
            <TabButton 
              isActive={activeTab === 'risks'} 
              onClick={() => setActiveTab('risks')}
            >
              Risks
            </TabButton>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">CeFi vs DeFi Comparison</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(comparisonData).map(([key, data]) => (
                  <Card 
                    key={key}
                    isActive={activeComparison === key}
                    onClick={() => setActiveComparison(key)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center mb-4">
                      {key === 'cefi' ? <Building2 className="mr-2" /> : <ShieldCheck className="mr-2" />}
                      <h3 className="text-lg font-semibold">{data.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {data.points.map((point, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid md:grid-cols-3 gap-4">
              {defiServices.map((service, index) => (
                <Card key={index}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold ml-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'risks' && (
            <div className="grid md:grid-cols-3 gap-4">
              {risks.map((risk, index) => (
                <Card key={index}>
                  <div className="flex items-center mb-4">
                    {risk.icon}
                    <h3 className="text-lg font-semibold ml-2">{risk.title}</h3>
                  </div>
                  <p className="text-gray-600">{risk.description}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeFiEducationalInterface;