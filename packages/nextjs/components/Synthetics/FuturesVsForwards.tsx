"use client";

import React, { useState } from "react";
import { AlertTriangle, ArrowRight, BarChart3, Building2, CheckSquare, Repeat } from "lucide-react";

const FuturesVsForwards: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"features" | "example">("features");

  const ComparisonCard = ({
    title,
    children,
    className,
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`p-6 rounded-lg shadow-lg ${className}`}>
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      {children}
    </div>
  );

  const Feature = ({
    icon: Icon,
    title,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
  }) => (
    <div className="flex items-start space-x-3 mb-4">
      <Icon className="w-5 h-5 mt-1 flex-shrink-0" />
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Futures vs. Forwards</h2>
        <p className="text-gray-600 text-lg">
          Understanding the key differences between standardized futures and customizable forward contracts in
          derivative trading
        </p>
      </div>

      <div className="flex mb-6 border-b">
        <button
          className={`px-6 py-3 font-medium ${
            selectedTab === "features" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("features")}
        >
          Key Features
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            selectedTab === "example" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("example")}
        >
          Example Trade
        </button>
      </div>

      {selectedTab === "features" && (
        <div className="grid md:grid-cols-2 gap-6">
          <ComparisonCard title="Futures Contracts" className="bg-blue-50">
            <Feature
              icon={CheckSquare}
              title="Standardized"
              description="Contracts are standardized and traded on exchanges"
            />
            <Feature
              icon={Repeat}
              title="Daily Settlement"
              description="Marked to market daily with margin requirements"
            />
            <Feature
              icon={Building2}
              title="Exchange Traded"
              description="All contracts cleared through exchange clearinghouse"
            />
            <Feature
              icon={BarChart3}
              title="High Liquidity"
              description="Easy to trade due to standardization and exchange backing"
            />
          </ComparisonCard>

          <ComparisonCard title="Forward Contracts" className="bg-gray-50">
            <Feature
              icon={CheckSquare}
              title="Customizable"
              description="Bespoke contracts tailored to specific needs"
            />
            <Feature
              icon={AlertTriangle}
              title="Settlement at Maturity"
              description="No money changes hands until contract maturity"
            />
            <Feature icon={Building2} title="OTC Trading" description="Traded over-the-counter between parties" />
            <Feature
              icon={AlertTriangle}
              title="Counterparty Risk"
              description="Higher risk due to no intermediary guarantee"
            />
          </ComparisonCard>
        </div>
      )}

      {selectedTab === "example" && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Example Trade Flow</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-1 p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Day 0: Contract Agreement</h4>
                <p>Agree to trade asset at $20 in 10 days</p>
              </div>
              <ArrowRight className="mx-4" />
              <div className="flex-1 p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Day 10: Settlement</h4>
                <p>Trade executed at agreed $20 regardless of current price</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2">Profit/Loss Calculation</h4>
              <p>Buy Forward: Spot Price - $20</p>
              <p>Sell Forward: $20 - Spot Price</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuturesVsForwards;
