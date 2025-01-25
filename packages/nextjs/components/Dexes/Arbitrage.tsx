"use client";

import React, { useState } from "react";
import { ArrowRight, DollarSign, RefreshCcw, TrendingUp } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ArbitrageOpportunity = ({ market1Price, market2Price, asset }: any) => (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div className="text-center p-4">
        <h3 className="font-semibold text-gray-700">Market 1</h3>
        <p className="text-2xl font-bold text-blue-600">${market1Price}</p>
      </div>
      <div className="flex flex-col items-center">
        <ArrowRight className="text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">Profit Opportunity:</p>
        <p className="font-bold text-green-500">${(market2Price - market1Price).toFixed(2)}</p>
      </div>
      <div className="text-center p-4">
        <h3 className="font-semibold text-gray-700">Market 2</h3>
        <p className="text-2xl font-bold text-purple-600">${market2Price}</p>
      </div>
    </div>
    <p className="text-center mt-2 text-sm text-gray-600">Asset: {asset}</p>
  </div>
);

const arbitrageData = [
  { time: "0s", market1: 100, market2: 102 },
  { time: "10s", market1: 101, market2: 103 },
  { time: "20s", market1: 102, market2: 101 },
  { time: "30s", market1: 103, market2: 100 },
  { time: "40s", market1: 102, market2: 101 },
  { time: "50s", market1: 101, market2: 102 },
];

const ArbitrageComponent = () => {
  const [showFlashLoan, setShowFlashLoan] = useState(false);

  const flashLoanSteps = [
    "1. Borrow assets through flash loan",
    "2. Buy at lower price market",
    "3. Sell at higher price market",
    "4. Repay flash loan + fee",
    "5. Keep the profit",
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Understanding DeFi Arbitrage</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Arbitrage in DeFi involves exploiting price differences across multiple markets to generate profits while
          helping maintain market efficiency.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-blue-500" />
          Live Arbitrage Opportunity
        </h2>
        <ArbitrageOpportunity market1Price={100.0} market2Price={102.5} asset="ETH/USDT" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Price Differences Over Time</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <LineChart data={arbitrageData}>
              <XAxis dataKey="time" />
              <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
              <Tooltip />
              <Line type="monotone" dataKey="market1" stroke="#3B82F6" name="Market 1" />
              <Line type="monotone" dataKey="market2" stroke="#8B5CF6" name="Market 2" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="mr-2 text-green-500" />
            Traditional Arbitrage
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Identify price differences across markets
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Buy at lower price market
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Sell at higher price market
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2
            className="text-xl font-semibold mb-4 flex items-center cursor-pointer"
            onClick={() => setShowFlashLoan(!showFlashLoan)}
          >
            <RefreshCcw className="mr-2 text-purple-500" />
            Flash Loan Arbitrage
            <span className="text-sm text-gray-500 ml-2">(Click to expand)</span>
          </h2>
          {showFlashLoan && (
            <ul className="space-y-2">
              {flashLoanSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  {step}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Detection Methods</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">Bellman-Ford Algorithm</h3>
            <p className="text-gray-600">
              Detects negative cycles in price graphs to identify arbitrage opportunities across multiple markets.
              Complexity: O(|N²| × |E|)
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-lg">DeFiPoser-SMT</h3>
            <p className="text-gray-600">
              Uses theorem solvers and path pruning to identify optimal arbitrage opportunities while reducing the
              search space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArbitrageComponent;
