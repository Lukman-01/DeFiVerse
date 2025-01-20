import React, { useState } from 'react';
import { PiggyBank, ArrowRight, Lock, DollarSign, AlertTriangle } from 'lucide-react';

const OverCollateralizedBorrowing = () => {
  const [collateralAmount, setCollateralAmount] = useState(5);
  const [borrowAmount, setBorrowAmount] = useState(7500);
  const ethPrice = 2000; // Simulated ETH price

  const calculateHealthFactor = () => {
    const collateralValue = collateralAmount * ethPrice;
    return (collateralValue / borrowAmount).toFixed(2);
  };

  const ExampleScenario = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    
    const steps = [
      {
        title: "Initial Deposit",
        description: "Borrower deposits ETH as collateral",
        icon: <PiggyBank className="w-8 h-8 text-blue-500" />
      },
      {
        title: "Loan Issuance",
        description: "Borrower receives DAI loan",
        icon: <DollarSign className="w-8 h-8 text-green-500" />
      },
      {
        title: "Monitor Position",
        description: "System monitors collateral value",
        icon: <AlertTriangle className="w-8 h-8 text-orange-500" />
      },
      {
        title: "Repayment",
        description: "Repay DAI to retrieve ETH",
        icon: <Lock className="w-8 h-8 text-purple-500" />
      }
    ];

    return (
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Interactive Example</h4>
        <div className="flex items-center justify-between mb-6">
          {steps.map((s, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`rounded-full p-2 ${
                  index + 1 <= step ? 'bg-blue-100' : 'bg-gray-100'
                }`}
              >
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
          <h3 className="text-2xl font-bold">Over-Collateralized Borrowing</h3>
          <p className="mt-4 text-gray-600">
            In DeFi lending protocols, borrowers must deposit collateral that exceeds their loan value. 
            This mechanism ensures protocol safety and lender protection in volatile market conditions.
          </p>
        </div>

        <div className="p-6">
          {/* Interactive Collateral Calculator */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Live Collateral Calculator</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Collateral (ETH)</label>
                <input
                  type="number"
                  value={collateralAmount}
                  onChange={(e) => setCollateralAmount(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Borrow Amount (DAI)</label>
                <input
                  type="number"
                  value={borrowAmount}
                  onChange={(e) => setBorrowAmount(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  min="0"
                />
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold">Health Factor: {calculateHealthFactor()}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Health factor should stay above 1 to avoid liquidation
                </p>
              </div>
            </div>
          </div>

          {/* Aave Example from PDF */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Real-World Example (Aave)</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h5 className="font-medium">Collateral</h5>
                  <p>DAI is deposited as collateral</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h5 className="font-medium">Borrowing</h5>
                  <p>UNI is borrowed against the collateral</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                In Aave, the collateral also earns interest while being lent out
              </p>
            </div>
          </div>

          <ExampleScenario />
        </div>
      </div>
    </div>
  );
};

export default OverCollateralizedBorrowing;