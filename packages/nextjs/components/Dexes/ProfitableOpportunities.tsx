"use client";

// ProfitableOpportunities.tsx
import React, { useState } from "react";
import { ArrowRight, BarChart2, DollarSign, GitBranch, RefreshCw, TrendingUp } from "lucide-react";

interface Strategy {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  details: {
    how: string;
    when: string;
    risks: string;
  };
}

interface Impact {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: string[];
}

interface ExampleCase {
  id: number;
  title: string;
  description: string;
  profit: string;
  steps: string[];
}

export const ProfitableOpportunities: React.FC = (): JSX.Element => {
  const [selectedStrategy, setSelectedStrategy] = useState<number>(1);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const strategies: Strategy[] = [
    {
      id: 1,
      name: "Bellman-Ford Algorithm",
      description: "Detects negative price cycles to find arbitrage opportunities",
      icon: <GitBranch className="w-5 h-5" />,
      details: {
        how: "Systematically evaluates all possible trading paths to find negative cycles",
        when: "Best used in markets with multiple connected exchanges",
        risks: "High gas costs may eat into profits, timing risks",
      },
    },
    {
      id: 2,
      name: "DeFiPoser-SMT",
      description: "Uses symbolic modeling and heuristics to optimize profitable trades",
      icon: <BarChart2 className="w-5 h-5" />,
      details: {
        how: "Models complex trading strategies using symbolic mathematics",
        when: "Useful for complex multi-step transactions across protocols",
        risks: "Model assumptions may not match real-world conditions",
      },
    },
    {
      id: 3,
      name: "Flash Loan Arbitrage",
      description: "Leverages flash loans to execute profitable arbitrage trades",
      icon: <RefreshCw className="w-5 h-5" />,
      details: {
        how: "Borrows and repays assets within single transaction",
        when: "Price discrepancies exist between different protocols",
        risks: "High competition, complex execution requirements",
      },
    },
  ];

  const impacts: Impact[] = [
    {
      id: 1,
      title: "Market Efficiency",
      description: "Enhances efficiency in decentralized markets",
      icon: <TrendingUp className="w-5 h-5" />,
      metrics: ["Reduced price discrepancies", "Increased liquidity flow", "Better price discovery"],
    },
    {
      id: 2,
      title: "Price Equilibrium",
      description: "Balances asset prices across platforms",
      icon: <DollarSign className="w-5 h-5" />,
      metrics: ["Consistent pricing", "Lower spreads", "Improved market stability"],
    },
  ];

  const exampleCases: ExampleCase[] = [
    {
      id: 1,
      title: "Cross-DEX Arbitrage",
      description: "USDC/ETH price difference between Uniswap and SushiSwap",
      profit: "0.5% per trade",
      steps: ["Buy ETH on Uniswap", "Sell ETH on SushiSwap", "Profit from price difference"],
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Profitable Opportunities</h1>

      <div className="mb-8 text-gray-600">
        <p>
          Identifying profitable opportunities in DeFi involves leveraging arbitrage, algorithmic strategies, and other
          techniques to maximize returns while maintaining market efficiency.
        </p>
      </div>

      {/* Strategies Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Trading Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strategies.map(strategy => (
            <div
              key={strategy.id}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selectedStrategy === strategy.id ? "bg-blue-100 shadow-md" : "bg-gray-50 hover:shadow-md"
              }`}
              onClick={() => {
                setSelectedStrategy(strategy.id);
                setShowDetails(true);
              }}
            >
              <div className="flex items-center mb-2">
                <div className="text-blue-500 mr-2">{strategy.icon}</div>
                <h3 className="font-semibold">{strategy.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>

        {/* Strategy Details */}
        {showDetails && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">{strategies[selectedStrategy - 1].name} Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">How it works:</p>
                <p className="text-gray-600">{strategies[selectedStrategy - 1].details.how}</p>
              </div>
              <div>
                <p className="font-medium">When to use:</p>
                <p className="text-gray-600">{strategies[selectedStrategy - 1].details.when}</p>
              </div>
              <div>
                <p className="font-medium">Risks:</p>
                <p className="text-gray-600">{strategies[selectedStrategy - 1].details.risks}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Impact Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Market Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {impacts.map(impact => (
            <div key={impact.id} className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-green-500 mr-2">{impact.icon}</div>
                <h3 className="font-semibold">{impact.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">{impact.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {impact.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Example Cases */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Example Case</h2>
        {exampleCases.map(example => (
          <div key={example.id} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{example.description}</p>
            <p className="text-sm font-medium text-green-600 mb-2">Potential Profit: {example.profit}</p>
            <div className="space-y-2">
              {example.steps.map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfitableOpportunities;
