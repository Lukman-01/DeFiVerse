import React, { useState } from 'react';
import { Coins, ArrowRight, LockIcon, BarChart2, DollarSign, Repeat } from 'lucide-react';

const SyntheticAssetsAndSynthetix: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState<'sUSD' | 'sBTC' | 'sETH'>('sUSD');

  const StepCard = ({ 
    step, 
    title, 
    description, 
    icon: Icon 
  }: { 
    step: number; 
    title: string; 
    description: string; 
    icon: React.ElementType 
  }) => (
    <div 
      className={`p-6 rounded-lg cursor-pointer transition-all ${
        activeStep === step 
          ? 'bg-blue-50 border-2 border-blue-500 shadow-lg' 
          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
      }`}
      onClick={() => setActiveStep(step)}
    >
      <div className="flex items-center mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
          activeStep === step ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}>
          {step}
        </div>
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  const AssetCard = ({ 
    type, 
    name, 
    price, 
    change 
  }: { 
    type: 'sUSD' | 'sBTC' | 'sETH'; 
    name: string; 
    price: string; 
    change: string 
  }) => (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-all ${
        selectedAsset === type 
          ? 'bg-blue-50 border-2 border-blue-500' 
          : 'bg-white border-2 border-gray-200'
      }`}
      onClick={() => setSelectedAsset(type)}
    >
      <div className="flex justify-between items-center">
        <h5 className="font-bold">{name}</h5>
        <span className={`text-sm ${
          Number(change) >= 0 ? 'text-green-500' : 'text-red-500'
        }`}>
          {change}%
        </span>
      </div>
      <p className="text-lg font-semibold mt-2">{price}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Synthetic Assets & Synthetix</h2>
        <p className="text-gray-600 text-lg">
          Create and trade tokenized versions of real-world assets using the Synthetix protocol
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StepCard
          step={1}
          title="Collateral Deposit"
          description="Deposit SNX tokens as collateral with a minimum 400% collateralization ratio"
          icon={LockIcon}
        />
        <StepCard
          step={2}
          title="Mint Synths"
          description="Create synthetic assets like sUSD, sBTC, or sETH backed by your collateral"
          icon={Coins}
        />
        <StepCard
          step={3}
          title="Trade & Manage"
          description="Trade Synths with infinite liquidity using oracle-driven prices"
          icon={Repeat}
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-bold mb-4">Available Synthetic Assets</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <AssetCard type="sUSD" name="Synthetic USD" price="$1.00" change="+0.01" />
          <AssetCard type="sBTC" name="Synthetic Bitcoin" price="$45,000" change="+2.5" />
          <AssetCard type="sETH" name="Synthetic Ethereum" price="$2,500" change="-1.2" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-4">Key Benefits</h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <BarChart2 className="w-5 h-5 mr-3 mt-1" />
              <div>
                <h5 className="font-semibold">Infinite Liquidity</h5>
                <p className="text-sm text-gray-600">Trade any size without affecting market price</p>
              </div>
            </div>
            <div className="flex items-start">
              <DollarSign className="w-5 h-5 mr-3 mt-1" />
              <div>
                <h5 className="font-semibold">Global Market Access</h5>
                <p className="text-sm text-gray-600">Access any market through synthetic representation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-4">System Mechanics</h4>
          <div className="relative p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="font-semibold">SNX Stakers</p>
                  <p className="text-sm">Provide Collateral</p>
                </div>
              </div>
              <ArrowRight className="text-gray-400" />
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="font-semibold">Debt Pool</p>
                  <p className="text-sm">Shared Responsibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticAssetsAndSynthetix;