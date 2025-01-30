"use client";

import React, { useState } from "react";
import { Activity, AlertTriangle, Calculator, ShieldCheck } from "lucide-react";

// Types and interfaces
interface DataProvider {
  id: number;
  name: string;
  value: number;
  reliability: number;
  lastUpdate: string;
}

interface DemoType {
  id: "price" | "weather" | "sports";
  label: string;
}

interface AggregationMethod {
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface Challenge {
  challenge: string;
  solution: string;
  icon: React.ReactNode;
}

const BasicOracleDesignPart2: React.FC = () => {
  // State with type definitions
  const [dataProviders, setDataProviders] = useState<DataProvider[]>([]);
  const [activeDemo, setActiveDemo] = useState<"price" | "weather" | "sports">("price");

  // Helper function with type definitions
  const generateProviderData = (type: "price" | "weather" | "sports"): DataProvider[] => {
    const baseValue = type === "price" ? 2000 : 25;
    const variance = type === "price" ? 40 : 5;

    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Provider ${i + 1}`,
      value: baseValue + (Math.random() - 0.5) * variance,
      reliability: Math.random() * 100,
      lastUpdate: new Date().toISOString(),
    }));
  };

  // Sub-components with type definitions
  const DataSourceVisualizer: React.FC = () => {
    const demoTypes: DemoType[] = [
      { id: "price", label: "Price Feed" },
      { id: "weather", label: "Weather Data" },
      { id: "sports", label: "Sports Results" },
    ];

    return (
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Data Heterogeneity Demonstration</h3>

        <div className="flex gap-4 mb-6">
          {demoTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setActiveDemo(type.id)}
              className={`px-4 py-2 rounded-lg ${
                activeDemo === type.id ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataProviders.map(provider => (
            <div key={provider.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{provider.name}</span>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    provider.reliability > 80
                      ? "bg-green-100 text-green-800"
                      : provider.reliability > 60
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {provider.reliability.toFixed(1)}% reliable
                </span>
              </div>
              <div className="font-mono text-sm">
                {activeDemo === "price" && `$${provider.value.toFixed(2)}`}
                {activeDemo === "weather" && `${provider.value.toFixed(1)}°C`}
                {activeDemo === "sports" && `Score: ${Math.round(provider.value)}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const AggregationMethods: React.FC = () => {
    const methods: AggregationMethod[] = [
      {
        name: "Median Calculation",
        icon: <Calculator className="w-6 h-6 text-blue-500" />,
        description: "Takes the middle value after sorting all data points, resistant to outliers.",
      },
      {
        name: "Weighted Average",
        icon: <Activity className="w-6 h-6 text-green-500" />,
        description: "Considers provider reliability scores when aggregating data.",
      },
      {
        name: "Consensus Mechanism",
        icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
        description: "Requires agreement from a majority of providers before accepting data.",
      },
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Aggregation Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map(method => (
            <div key={method.name} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-3 mb-2">
                {method.icon}
                <h4 className="font-medium">{method.name}</h4>
              </div>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ChallengesAndSolutions: React.FC = () => {
    const items: Challenge[] = [
      {
        challenge: "Single Point of Failure",
        solution: "Implement multiple independent data sources and nodes",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      },
      {
        challenge: "Data Manipulation",
        solution: "Use robust aggregation methods and outlier detection",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      },
      {
        challenge: "Network Latency",
        solution: "Implement timeout mechanisms and fallback providers",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      },
    ];

    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.challenge} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h4 className="font-medium">{item.challenge}</h4>
                <p className="text-sm text-gray-600">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Basic Oracle Design (Part II)</h2>
          <p className="mt-4 text-gray-600">
            Building a robust oracle system involves solving critical challenges like decentralization, data
            heterogeneity, and combining reports from multiple sources. This ensures that the data provided to smart
            contracts is accurate and resistant to manipulation.
          </p>
        </div>

        <div className="p-6 space-y-8">
          <DataSourceVisualizer />

          <div className="border-t pt-8">
            <AggregationMethods />
          </div>

          <div className="border-t pt-8">
            <ChallengesAndSolutions />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Example Scenario: ETH/USD Price Feed</h3>
            <div className="space-y-4">
              <p>Consider an oracle fetching ETH/USD prices from 10 different providers:</p>
              <div className="pl-4">
                1. Each provider reports price data every block
                <br />
                2. The oracle calculates the median price
                <br />
                3. Outliers beyond 2 standard deviations are excluded
                <br />
                4. The final price is used by DeFi protocols
              </div>
              <p>This approach ensures reliability and resistance to manipulation attempts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicOracleDesignPart2;
