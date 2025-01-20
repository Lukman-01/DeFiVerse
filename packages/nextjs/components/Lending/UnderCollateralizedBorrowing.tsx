import React, { useState } from 'react';
import { TrendingUp, ArrowRight, Lock, BarChart, Wallet } from 'lucide-react';

const UnderCollateralizedBorrowing = () => {
  const [multiplier, setMultiplier] = useState(2.0);
  
  // Statistics from PDF slide 20
  const stats = {
    totalBorrowers: 3800,
    totalPositions: 10430,
    avgLeverageV1: 2.01,
    avgLeverageV2: 3.07,
    stablecoinLeverage: 5.39
  };

  const ExamplePosition = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    
    const steps = [
      {
        title: "Initial Deposit",
        description: "Deposit collateral (e.g., ETH)",
        icon: <Wallet className="w-8 h-8 text-blue-500" />
      },
      {
        title: "Leverage Setup",
        description: "Protocol enables higher borrowing power",
        icon: <TrendingUp className="w-8 h-8 text-green-500" />
      },
      {
        title: "Automated Strategy",
        description: "Funds are allocated to yield farming",
        icon: <BarChart className="w-8 h-8 text-orange-500" />
      },
      {
        title: "Protocol Control",
        description: "Assets managed by smart contracts",
        icon: <Lock className="w-8 h-8 text-purple-500" />
      }
    ];

    return (
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Position Lifecycle</h4>
        <div className="flex items-center justify-between mb-6">
          {steps.map((s, index) => (
            <div key={index} className="flex items-center">
              <div className={`rounded-full p-2 ${
                index + 1 <= step ? 'bg-blue-100' : 'bg-gray-100'
              }`}>
                {s.icon}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="mx-2 text-gray-400" />
              )}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h5 className="font-semibold">{steps[step - 1].title}</h5>
          <p className="mt-2 text-gray-600">{steps[step - 1].description}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            disabled={step === 1}
            onClick={() => setStep(s => Math.max(1, s - 1))}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h3 className="text-2xl font-bold">Under-Collateralized Borrowing</h3>
          <p className="mt-4 text-gray-600">
            Under-collateralized borrowing enables users to borrow more than their collateral value,
            but with restricted usage through pre-designed smart contracts, typically for farming strategies.
          </p>
        </div>

        <div className="p-6">
          {/* Leverage Simulator */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Leverage Simulator</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Leverage Multiplier (1x - 6x)
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.1"
                  value={multiplier}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-center font-semibold">{multiplier}x</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p>With {multiplier}x leverage:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• ${1000} deposit → ${1000 * multiplier} position size</li>
                  <li>• Potential yield is multiplied by {multiplier}x</li>
                  <li>• Higher risk of liquidation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Protocol Statistics */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Alpha Homora Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{stats.totalBorrowers.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Borrowers</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{stats.totalPositions.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Positions</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{stats.stablecoinLeverage}x</p>
                <p className="text-sm text-gray-600">Max Stablecoin Leverage</p>
              </div>
            </div>
          </div>

          {/* Version Comparison */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Protocol Evolution</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-medium">Alpha Homora V1</h5>
                <p className="text-2xl font-bold mt-2">{stats.avgLeverageV1}x</p>
                <p className="text-sm text-gray-600">Average Leverage</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-medium">Alpha Homora V2</h5>
                <p className="text-2xl font-bold mt-2">{stats.avgLeverageV2}x</p>
                <p className="text-sm text-gray-600">Average Leverage</p>
              </div>
            </div>
          </div>

          <ExamplePosition />
        </div>
      </div>
    </div>
  );
};

export default UnderCollateralizedBorrowing;