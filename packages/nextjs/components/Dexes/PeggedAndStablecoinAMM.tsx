"use client";

// PeggedAndStablecoinAMM.tsx
import React, { useState } from "react";
import { Activity, AlertTriangle, ArrowUpDown, DollarSign } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Protocol {
  id: number;
  name: string;
  description: string;
  tradingPairs: string[];
}

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const PeggedAndStablecoinAMM: React.FC = (): JSX.Element => {
  const [selectedProtocol, setSelectedProtocol] = useState<number>(0);

  const features: Feature[] = [
    {
      id: 1,
      title: "Deep Liquidity Pools",
      description: "Maintains low slippage for large trades due to deep liquidity pools",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Stablecoin Support",
      description: "Supports trading pairs like USDC/DAI and derivative assets like WBTC/renBTC",
      icon: <ArrowUpDown className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Price Stability",
      description: "Prices typically remain close to 1:1 ratios for stablecoins",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Gas Costs",
      description: "Higher gas costs for trades compared to standard AMMs",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "De-pegging Risk",
      description: "Risk of de-pegging due to external market factors",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
  ];

  const protocols: Protocol[] = [
    {
      id: 1,
      name: "Curve Finance",
      description: "Optimized for stablecoins with reduced slippage and arbitrage opportunities",
      tradingPairs: ["USDC/DAI", "USDT/USDC", "WBTC/renBTC"],
    },
    {
      id: 2,
      name: "mStable",
      description: "Meta-stablecoin protocol with basket-backed stablecoins",
      tradingPairs: ["mUSD/USDC", "mBTC/WBTC"],
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Pegged and Stablecoin AMM</h1>

      <div className="mb-8 text-gray-600">
        <p>
          Specialized decentralized exchanges designed to facilitate efficient trading of assets with stable values,
          such as stablecoins.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Unique Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map(feature => (
            <div key={feature.id} className="p-4 bg-blue-50 rounded-lg transition-all hover:shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-blue-500 mr-2">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map(challenge => (
            <div key={challenge.id} className="p-4 bg-red-50 rounded-lg transition-all hover:shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-red-500 mr-2">{challenge.icon}</div>
                <h3 className="font-semibold">{challenge.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Protocols Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Example Protocols</h2>
        <div className="space-y-4">
          {protocols.map(protocol => (
            <div
              key={protocol.id}
              className="p-4 bg-gray-50 rounded-lg cursor-pointer transition-all hover:shadow-md"
              onClick={() => setSelectedProtocol(protocol.id)}
            >
              <h3 className="font-semibold text-lg mb-2">{protocol.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{protocol.description}</p>
              <div className="flex flex-wrap gap-2">
                {protocol.tradingPairs.map((pair, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeggedAndStablecoinAMM;
