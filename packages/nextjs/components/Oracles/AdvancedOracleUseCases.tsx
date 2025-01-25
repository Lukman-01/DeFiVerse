"use client";

import React, { useState } from "react";
import { AlertTriangle, Clock, DollarSign, Gamepad2, LineChart, Shield, TrendingUp, Umbrella } from "lucide-react";

// Types and interfaces
interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: Example[];
  risks: Risk[];
}

interface Example {
  name: string;
  description: string;
  implementation: string;
}

interface Risk {
  type: string;
  description: string;
  mitigation: string;
}

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

const AdvancedOracleUseCases: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>("price");

  // Define use cases data
  const useCases: UseCase[] = [
    {
      id: "price",
      title: "Price Feeds",
      description: "Providing real-time asset prices for DeFi applications",
      icon: <DollarSign className="w-6 h-6" />,
      examples: [
        {
          name: "Uniswap V3",
          description: "Time-weighted average prices (TWAP) for spot trading",
          implementation: "Uses historical price accumulator pattern",
        },
        {
          name: "Aave",
          description: "Asset prices for lending and liquidations",
          implementation: "Multiple price feeds with fallback mechanisms",
        },
      ],
      risks: [
        {
          type: "Flash Loan Attacks",
          description: "Price manipulation through flash loans",
          mitigation: "Time-weighted average prices (TWAP)",
        },
      ],
    },
    {
      id: "insurance",
      title: "Insurance",
      description: "Parametric insurance powered by real-world data",
      icon: <Umbrella className="w-6 h-6" />,
      examples: [
        {
          name: "Flight Insurance",
          description: "Automatic payouts for flight delays",
          implementation: "Multiple airport data feeds",
        },
        {
          name: "Crop Insurance",
          description: "Weather-based agricultural insurance",
          implementation: "Decentralized weather data network",
        },
      ],
      risks: [
        {
          type: "Data Accuracy",
          description: "Incorrect or delayed real-world data",
          mitigation: "Multiple independent data sources",
        },
      ],
    },
    {
      id: "gaming",
      title: "Gaming & NFTs",
      description: "Random number generation and game state verification",
      icon: <Gamepad2 className="w-6 h-6" />,
      examples: [
        {
          name: "Chainlink VRF",
          description: "Verifiable random numbers for gaming",
          implementation: "Proof of randomness with on-chain verification",
        },
        {
          name: "Dynamic NFTs",
          description: "NFTs that evolve based on real-world data",
          implementation: "External data feeds update metadata",
        },
      ],
      risks: [
        {
          type: "Manipulation",
          description: "Gaming the random number generation",
          mitigation: "Verifiable random function (VRF)",
        },
      ],
    },
  ];

  const UseCaseCard: React.FC<{ useCase: UseCase }> = ({ useCase }) => (
    <div
      className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setSelectedCase(useCase.id)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">{useCase.icon}</div>
        <h4 className="text-lg font-semibold">{useCase.title}</h4>
      </div>
      <p className="text-gray-600 mb-4">{useCase.description}</p>
      <div className={`border-t pt-4 ${selectedCase === useCase.id ? "block" : "hidden"}`}>
        <h5 className="font-medium mb-2">Implementation Examples:</h5>
        <ul className="space-y-2">
          {useCase.examples.map(example => (
            <li key={example.name} className="text-sm">
              <span className="font-medium">{example.name}:</span> {example.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const RiskAssessment: React.FC<{ risks: Risk[] }> = ({ risks }) => (
    <div className="bg-red-50 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-red-500" />
        Risk Assessment
      </h4>
      <div className="space-y-4">
        {risks.map(risk => (
          <div key={risk.type} className="border-b border-red-100 pb-4">
            <h5 className="font-medium text-red-700">{risk.type}</h5>
            <p className="text-sm text-gray-600 mb-2">{risk.description}</p>
            <div className="flex items-center gap-2 text-sm text-green-700">
              <Shield className="w-4 h-4" />
              Mitigation: {risk.mitigation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MetricsDisplay: React.FC = () => {
    const metrics: MetricCard[] = [
      {
        title: "Total Value Secured",
        value: "$5.2B",
        change: 12.5,
        icon: <LineChart className="w-5 h-5" />,
      },
      {
        title: "Active Oracle Networks",
        value: 180,
        change: 8.3,
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        title: "Average Response Time",
        value: "2.3s",
        change: -15.4,
        icon: <Clock className="w-5 h-5" />,
      },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map(metric => (
          <div key={metric.title} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              {metric.icon}
              <span className="text-sm">{metric.title}</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span className={`text-sm ${metric.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {metric.change >= 0 ? "+" : ""}
                {metric.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Advanced Oracle Use Cases</h2>
          <p className="mt-4 text-gray-600">
            Oracles are central to enabling sophisticated DeFi applications by providing external data that powers
            functionalities like decentralized trading, insurance, and gaming.
          </p>
        </div>

        <div className="p-6 space-y-8">
          <MetricsDisplay />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map(useCase => (
              <UseCaseCard key={useCase.id} useCase={useCase} />
            ))}
          </div>

          {selectedCase && (
            <div className="mt-8">
              <RiskAssessment risks={useCases.find(uc => uc.id === selectedCase)?.risks || []} />
            </div>
          )}

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Best Practices & Considerations</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <span>Always use multiple independent data sources for critical applications</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <span>Implement proper time delays and validation mechanisms</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <span>Consider economic incentives and game theory in oracle design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedOracleUseCases;
