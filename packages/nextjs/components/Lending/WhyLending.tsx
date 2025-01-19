import React, { useState } from 'react';
import { Coins, ArrowRight, PiggyBank, Globe, Lock, LucideIcon } from 'lucide-react';

interface Benefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface LendingExampleProps {
  className?: string;
}

const WhyLending: React.FC = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const benefits: Benefit[] = [
    {
      id: 'liquidity',
      icon: <Coins className="w-6 h-6 text-blue-500" />,
      title: 'Liquidity Provision',
      description: 'Lenders provide liquidity to protocols, enabling borrowers to access funds while earning interest on their deposits.'
    },
    {
      id: 'capital',
      icon: <PiggyBank className="w-6 h-6 text-green-500" />,
      title: 'Access to Capital',
      description: 'Use crypto assets as collateral to secure loans without selling, maintaining long-term investment positions.'
    },
    {
      id: 'inclusion',
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: 'Financial Inclusion',
      description: 'Anyone with an internet connection can participate, bypassing traditional banking restrictions.'
    },
    {
      id: 'security',
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: 'Trustless Security',
      description: 'Smart contracts automatically handle loan terms and collateral, eliminating the need for traditional intermediaries.'
    }
  ];

  const LendingExample: React.FC<LendingExampleProps> = ({ className }) => {
    const [step, setStep] = useState<number>(1);
    const totalSteps = 4;

    const steps: Step[] = [
      {
        title: 'Initial State',
        description: 'Alice has 5 ETH but needs 10,000 USDC'
      },
      {
        title: 'Collateral Deposit',
        description: 'Alice deposits her 5 ETH as collateral'
      },
      {
        title: 'Borrowing',
        description: 'Alice borrows 10,000 USDC against her ETH'
      },
      {
        title: 'Repayment',
        description: 'Alice repays 10,000 USDC + interest to retrieve her ETH'
      }
    ];

    return (
      <div className={`mt-8 border rounded-lg p-4 bg-gray-50 ${className}`}>
        <h4 className="text-lg font-semibold mb-4">Interactive Lending Example</h4>
        <div className="flex items-center justify-between mb-4">
          {steps.map((s, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center ${
                  index + 1 <= step ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="mx-2 text-gray-400" />
              )}
            </div>
          ))}
        </div>
        <div className="min-h-[120px] p-4 bg-white rounded border">
          <h5 className="font-semibold">{steps[step - 1].title}</h5>
          <p className="mt-2 text-gray-600">{steps[step - 1].description}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={step === 1}
            onClick={() => setStep(s => Math.max(1, s - 1))}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={step === totalSteps}
            onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Why Lending in DeFi?</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Lending is a cornerstone of both traditional and decentralized finance, enabling capital efficiency
          and economic growth through a trustless, automated system.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {benefits.map(benefit => (
            <div
              key={benefit.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedBenefit === benefit.id ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-200'
              }`}
              onClick={() => setSelectedBenefit(benefit.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <LendingExample />
      </div>
    </div>
  );
};

export default WhyLending;