
import React, { useState } from 'react';
import { ArrowRight, Server, Database, CheckCircle, XCircle, Clock, AlertTriangle, Shield, DollarSign } from 'lucide-react';

interface Feature {
  feature: string;
  value: string;
  icon: React.ElementType;
}

interface ModelFeatures {
  onchain: Feature[];
  server: Feature[];
}

interface ModelCardProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface FeatureComparisonProps {
  feature: string;
  value: string;
  Icon: React.ElementType;
}

const modelFeatures: ModelFeatures = {
  onchain: [
    { feature: 'Matching Speed', value: 'Slow matching', icon: Clock },
    { feature: 'Censorship Resistance', value: 'High resistance', icon: CheckCircle },
    { feature: 'Front Running', value: 'Miner/trader front running possible', icon: AlertTriangle },
    { feature: 'Order Fees', value: 'Blockchain fees for all orders', icon: DollarSign },
    { feature: 'Robustness', value: 'Highly robust', icon: Shield },
  ],
  server: [
    { feature: 'Matching Speed', value: 'Fast matching', icon: Clock },
    { feature: 'Censorship Resistance', value: 'No resistance', icon: XCircle },
    { feature: 'Front Running', value: 'Exchange front running possible', icon: AlertTriangle },
    { feature: 'Order Fees', value: 'No fees for canceled orders', icon: DollarSign },
    { feature: 'Control', value: 'Centralized control', icon: Server },
  ]
};

const ModelCard: React.FC<ModelCardProps> = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`p-6 rounded-lg transition-all duration-200 w-full 
      ${isActive 
        ? 'bg-blue-50 border-2 border-blue-500 shadow-md' 
        : 'bg-white border border-gray-200 hover:shadow-md'
      }`}
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className={`text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
        {title}
      </h3>
      {isActive && (
        <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Active
        </div>
      )}
    </div>
    <div className="flex items-center text-sm text-gray-600">
      {title === 'On-Chain Order Book' ? <Database className="w-4 h-4 mr-2" /> : <Server className="w-4 h-4 mr-2" />}
      {title === 'On-Chain Order Book' ? 'Fully decentralized' : 'Hybrid approach'}
    </div>
  </button>
);

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ feature, value, Icon }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="flex-shrink-0">
      <Icon className="w-5 h-5 text-gray-500" />
    </div>
    <div className="ml-4">
      <div className="text-sm font-medium text-gray-600">{feature}</div>
      <div className="text-sm text-gray-500">{value}</div>
    </div>
  </div>
);

const EtherDeltaExample: React.FC = () => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
    <h3 className="text-lg font-semibold mb-4">EtherDelta: Lessons Learned</h3>
    
    <div className="grid gap-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>No KYC/AML requirements</span>
          </li>
          <li className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>No exchange fees</span>
          </li>
          <li className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>No impermanent loss</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-medium text-red-700 mb-2">Disadvantages</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-red-600">
            <XCircle className="w-4 h-4 mr-2" />
            <span>Fees for deposit, withdraw, trade creation/cancel</span>
          </li>
          <li className="flex items-center text-red-600">
            <XCircle className="w-4 h-4 mr-2" />
            <span>Slow execution</span>
          </li>
          <li className="flex items-center text-red-600">
            <XCircle className="w-4 h-4 mr-2" />
            <span>Not fully decentralized (mediating server)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const OrderBookModels: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'onchain' | 'server'>('onchain');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Order Book Models</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the two main approaches to implementing order books in decentralized exchanges:
          on-chain and server-based models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ModelCard
          title="On-Chain Order Book"
          isActive={selectedModel === 'onchain'}
          onClick={() => setSelectedModel('onchain')}
        />
        <ModelCard
          title="Server-Based Order Book"
          isActive={selectedModel === 'server'}
          onClick={() => setSelectedModel('server')}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {modelFeatures[selectedModel].map((item, index) => (
            <FeatureComparison
              key={index}
              feature={item.feature}
              value={item.value}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>

      <EtherDeltaExample />

      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-semibold mb-4">Trade Flow Process</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Order Submission</h4>
            <p className="text-sm text-gray-600">Users submit trade orders</p>
          </div>
          <ArrowRight className="hidden md:block text-gray-400" />
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Order Matching</h4>
            <p className="text-sm text-gray-600">
              {selectedModel === 'onchain' ? 'On-chain matching' : 'Server-side matching'}
            </p>
          </div>
          <ArrowRight className="hidden md:block text-gray-400" />
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Settlement</h4>
            <p className="text-sm text-gray-600">On-chain settlement via smart contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBookModels;