"use client";

import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  Coins,
  PlayCircle,
  RefreshCcw,
  TrendingUp,
  Zap,
} from "lucide-react";

interface FlashLoanCase {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
  steps: Array<{
    description: string;
    action: string;
  }>;
  example: {
    scenario: string;
    profit: string;
    risks: string[];
  };
}

interface AnimatedTransactionProps {
  steps: Array<{
    description: string;
    action: string;
  }>;
  isPlaying: boolean;
}

const AnimatedTransaction: React.FC<AnimatedTransactionProps> = ({ steps, isPlaying }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, steps.length]);

  return (
    <div className="relative p-4 bg-gray-50 rounded-lg border">
      <div className="flex items-center justify-between mb-6">
        {steps.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className={`mx-2 ${index < currentStep ? "text-blue-500" : "text-gray-300"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="min-h-[100px] flex flex-col items-center justify-center">
        <p className="font-semibold text-lg mb-2">{steps[currentStep].action}</p>
        <p className="text-gray-600">{steps[currentStep].description}</p>
      </div>
    </div>
  );
};

const FlashLoans: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [poolSize, setPoolSize] = useState("5B");
  const [fee, setFee] = useState("0.09");

  const cases: FlashLoanCase[] = [
    {
      id: "arbitrage",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Arbitrage Trading",
      description: "Profit from price differences across exchanges",
      riskLevel: "low",
      steps: [
        {
          description: "Borrow 1000 ETH from Aave",
          action: "Flash Loan Initiated",
        },
        {
          description: "Sell ETH on Exchange A at $2000",
          action: "Execute Trade 1",
        },
        {
          description: "Buy ETH on Exchange B at $1950",
          action: "Execute Trade 2",
        },
        {
          description: "Repay 1000 ETH + 0.09% fee",
          action: "Repay Flash Loan",
        },
      ],
      example: {
        scenario: "Profit from $50 price difference per ETH across exchanges",
        profit: "$50,000 - fees on 1000 ETH trade",
        risks: ["Slippage", "Front-running", "Failed transaction"],
      },
    },
    {
      id: "liquidation",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: "Liquidation Helper",
      description: "Participate in liquidations without upfront capital",
      riskLevel: "medium",
      steps: [
        {
          description: "Borrow 2000 DAI via flash loan",
          action: "Get Liquidation Capital",
        },
        {
          description: "Repay underwater position debt",
          action: "Execute Liquidation",
        },
        {
          description: "Receive 1.5 ETH collateral (10% discount)",
          action: "Claim Collateral",
        },
        {
          description: "Sell ETH and repay flash loan",
          action: "Complete Transaction",
        },
      ],
      example: {
        scenario: "Liquidate a 2000 DAI position backed by 1.5 ETH",
        profit: "10% discount on acquired ETH - fees",
        risks: ["Price movement", "Competition", "Gas costs"],
      },
    },
    {
      id: "collateral-swap",
      icon: <ArrowRightLeft className="w-6 h-6 text-blue-500" />,
      title: "Collateral Swapping",
      description: "Change collateral type without closing position",
      riskLevel: "low",
      steps: [
        {
          description: "Borrow 1000 DAI through flash loan",
          action: "Initialize Swap",
        },
        {
          description: "Repay existing ETH-backed loan",
          action: "Close Old Position",
        },
        {
          description: "Deposit USDC as new collateral",
          action: "Open New Position",
        },
        {
          description: "Borrow DAI and repay flash loan",
          action: "Complete Swap",
        },
      ],
      example: {
        scenario: "Switch from ETH to USDC collateral in one transaction",
        profit: "Savings on gas and slippage",
        risks: ["Price fluctuation", "Contract risks"],
      },
    },
  ];

  const pools = [
    { name: "Uniswap V2", size: "5B USD", fee: "0.3%" },
    { name: "Uniswap V3", size: "2.2B USD", fee: "0.3%" },
    { name: "Aave", size: "10B USD", fee: "0.09%" },
    { name: "dYdX", size: "100M USD", fee: "1 Wei" },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl font-bold">Flash Loans Explained</h2>
        </div>
        <p className="text-gray-600 mt-2">
          Unlock the power of uncollateralized loans within a single transaction. Flash loans enable complex DeFi
          operations without upfront capital.
        </p>
      </div>

      <div className="p-6">
        {/* Pool Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Available Pools</h3>
            <div className="space-y-2">
              {pools.map((pool, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>{pool.name}</span>
                  <span className="text-gray-600">{pool.size}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Protocol Fees</h3>
            <div className="space-y-2">
              {pools.map((pool, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>{pool.name}</span>
                  <span className="text-gray-600">{pool.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <h3 className="font-semibold mb-4">Popular Flash Loan Strategies</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {cases.map(case_ => (
            <div
              key={case_.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedCase === case_.id ? "border-blue-500 bg-blue-50" : "hover:border-blue-200"
              }`}
              onClick={() => {
                setSelectedCase(case_.id);
                setIsPlaying(false);
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {case_.icon}
                <h3 className="font-semibold">{case_.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{case_.description}</p>
              <div
                className={`mt-2 text-xs px-2 py-1 rounded-full inline-block
                ${
                  case_.riskLevel === "low"
                    ? "bg-green-100 text-green-700"
                    : case_.riskLevel === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {case_.riskLevel.charAt(0).toUpperCase() + case_.riskLevel.slice(1)} Risk
              </div>
            </div>
          ))}
        </div>

        {/* Selected Case Animation */}
        {selectedCase && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Transaction Simulation</h4>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <>
                    <RefreshCcw className="w-4 h-4" />
                    Reset
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    Start
                  </>
                )}
              </button>
            </div>
            <AnimatedTransaction steps={cases.find(c => c.id === selectedCase)?.steps || []} isPlaying={isPlaying} />

            {/* Example Details */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold mb-2">Example Scenario</h5>
              <p className="text-gray-600 mb-2">{cases.find(c => c.id === selectedCase)?.example.scenario}</p>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-700">
                  Potential Profit: {cases.find(c => c.id === selectedCase)?.example.profit}
                </span>
              </div>
              <div className="mt-2">
                <h6 className="font-medium mb-1">Risk Factors:</h6>
                <ul className="list-disc pl-5 space-y-1">
                  {cases
                    .find(c => c.id === selectedCase)
                    ?.example.risks.map((risk, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {risk}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashLoans;
