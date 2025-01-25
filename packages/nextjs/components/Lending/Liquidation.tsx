"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, ArrowRight, DollarSign, Gavel, Info } from "lucide-react";

interface LiquidationMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  exampleScenario: {
    setup: string;
    process: string[];
    outcome: string;
  };
}

interface PriceSimulatorProps {
  initialPrice: number;
  collateralAmount: number;
  debtAmount: number;
  liquidationThreshold: number;
  onLiquidation: () => void;
}

const PriceSimulator: React.FC<PriceSimulatorProps> = ({
  initialPrice,
  collateralAmount,
  debtAmount,
  liquidationThreshold,
  onLiquidation,
}) => {
  const [currentPrice, setCurrentPrice] = useState(initialPrice);
  const [isLiquidated, setIsLiquidated] = useState(false);

  const collateralValue = currentPrice * collateralAmount;
  const healthFactor = collateralValue / debtAmount;
  const liquidationPrice = (debtAmount * liquidationThreshold) / collateralAmount;

  useEffect(() => {
    if (healthFactor < liquidationThreshold && !isLiquidated) {
      setIsLiquidated(true);
      onLiquidation();
    }
  }, [healthFactor, liquidationThreshold, isLiquidated, onLiquidation]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <h4 className="font-semibold">ETH Price Simulator</h4>
          <p className="text-sm text-gray-600">Adjust price to see liquidation in action</p>
        </div>
        <div className="text-right">
          <p className="font-mono">${currentPrice.toFixed(2)}</p>
          <p className={`text-sm ${healthFactor < 1.5 ? "text-red-500" : "text-green-500"}`}>
            Health Factor: {healthFactor.toFixed(2)}
          </p>
        </div>
      </div>

      <input
        type="range"
        min={liquidationPrice * 0.5}
        max={initialPrice * 1.5}
        value={currentPrice}
        onChange={e => setCurrentPrice(Number(e.target.value))}
        className="w-full mb-4"
      />

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-2 bg-white rounded">
          <p className="text-gray-600">Collateral Value</p>
          <p className="font-semibold">${collateralValue.toFixed(2)}</p>
        </div>
        <div className="p-2 bg-white rounded">
          <p className="text-gray-600">Liquidation Price</p>
          <p className="font-semibold">${liquidationPrice.toFixed(2)}</p>
        </div>
      </div>

      {isLiquidated && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Position Liquidated! Collateral value fell below threshold.
        </div>
      )}
    </div>
  );
};

const Liquidation: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showStats, setShowStats] = useState(false);

  const liquidationMethods: LiquidationMethod[] = [
    {
      id: "fixed-spread",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Fixed Spread Liquidation",
      description: "Instant liquidation with predetermined discount",
      advantages: [
        "Immediate execution",
        "Predictable liquidation price",
        "Lower gas costs",
        "Simple to understand and implement",
      ],
      disadvantages: [
        "May not maximize collateral value",
        "Fixed discount might be suboptimal",
        "High competition among liquidators",
      ],
      exampleScenario: {
        setup: "Borrower has 2 ETH collateral ($4000) backing 2000 DAI loan",
        process: [
          "ETH price drops to $1500, triggering liquidation",
          "Liquidator repays 1000 DAI",
          "Receives 0.75 ETH at 5% discount",
        ],
        outcome: "Liquidator profits from the 5% discount on acquired ETH",
      },
    },
    {
      id: "auction",
      icon: <Gavel className="w-6 h-6 text-blue-500" />,
      title: "Auction Liquidation",
      description: "Competitive bidding process for collateral",
      advantages: [
        "Potentially better price discovery",
        "More fair for borrowers",
        "Reduced impact of MEV",
        "Lower likelihood of cascade liquidations",
      ],
      disadvantages: [
        "Slower execution",
        "Higher gas costs",
        "More complex implementation",
        "Requires active participation",
      ],
      exampleScenario: {
        setup: "MakerDAO vault with 100 ETH collateral becomes unsafe",
        process: [
          "Dutch auction starts with high price",
          "Price decreases over time",
          "Liquidators bid for portions of collateral",
          "Auction ends when debt is covered",
        ],
        outcome: "Collateral sold at market-determined price through auction",
      },
    },
  ];

  const stats = {
    totalLiquidations: "28,138",
    totalVolume: "$807.46M",
    averageProfit: "$2,260",
    successRate: "94.5%",
    timeframe: "April 2019 - April 2021",
  };

  const [simulationConfig] = useState({
    initialPrice: 2000,
    collateralAmount: 5,
    debtAmount: 5000,
    liquidationThreshold: 1.5,
  });

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold">Liquidation Mechanics</h2>
        </div>
        <p className="text-gray-600 mt-2">
          Understanding how DeFi protocols maintain solvency through automated liquidation processes.
        </p>
      </div>

      <div className="p-6">
        {/* Market Statistics */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg cursor-pointer" onClick={() => setShowStats(!showStats)}>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Historical Liquidation Statistics</h3>
            <Info className="w-5 h-5 text-blue-500" />
          </div>
          {showStats && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-white rounded">
                <p className="text-sm text-gray-600">Total Liquidations</p>
                <p className="font-semibold">{stats.totalLiquidations}</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="text-sm text-gray-600">Total Volume</p>
                <p className="font-semibold">{stats.totalVolume}</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="text-sm text-gray-600">Average Profit</p>
                <p className="font-semibold">{stats.averageProfit}</p>
              </div>
            </div>
          )}
        </div>

        {/* Price Simulator */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Interactive Liquidation Simulator</h3>
          <PriceSimulator {...simulationConfig} onLiquidation={() => console.log("Position liquidated")} />
        </div>

        {/* Liquidation Methods */}
        <h3 className="font-semibold mb-4">Liquidation Methods</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {liquidationMethods.map(method => (
            <div
              key={method.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedMethod === method.id ? "border-blue-500 bg-blue-50" : "hover:border-blue-200"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                {method.icon}
                <h3 className="font-semibold">{method.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{method.description}</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                  {method.advantages.length} Advantages
                </span>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                  {method.disadvantages.length} Disadvantages
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Method Details */}
        {selectedMethod && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-4">
              {liquidationMethods.find(m => m.id === selectedMethod)?.title} Details
            </h4>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-medium mb-2">Advantages</h5>
                <ul className="space-y-1">
                  {liquidationMethods
                    .find(m => m.id === selectedMethod)
                    ?.advantages.map((adv, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        {adv}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Disadvantages</h5>
                <ul className="space-y-1">
                  {liquidationMethods
                    .find(m => m.id === selectedMethod)
                    ?.disadvantages.map((dis, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-red-500" />
                        {dis}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded">
              <h5 className="font-medium mb-2">Example Scenario</h5>
              <p className="text-sm text-gray-600 mb-2">
                {liquidationMethods.find(m => m.id === selectedMethod)?.exampleScenario.setup}
              </p>
              <ol className="list-decimal list-inside space-y-1">
                {liquidationMethods
                  .find(m => m.id === selectedMethod)
                  ?.exampleScenario.process.map((step, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {step}
                    </li>
                  ))}
              </ol>
              <p className="text-sm font-medium mt-2">
                Outcome: {liquidationMethods.find(m => m.id === selectedMethod)?.exampleScenario.outcome}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Liquidation;
