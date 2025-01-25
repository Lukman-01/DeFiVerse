"use client";

import React, { useState } from "react";
import { AlertCircle, ArrowRight, DollarSign, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AttackStep = ({ step, description, amount }: { step: number; description: string; amount: string }) => (
  <div className="flex items-center mb-4">
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">{step}</div>
    <ArrowRight className="mx-4 text-gray-400" />
    <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
      <p className="text-gray-700">{description}</p>
      <p className="text-blue-600 font-semibold mt-2">{amount}</p>
    </div>
  </div>
);

const ProfitMetric = ({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center mb-2">
      <Icon className="w-5 h-5 text-blue-500 mr-2" />
      <span className="text-gray-600">{label}</span>
    </div>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

const mockPriceData = [
  { time: "0s", price: 100 },
  { time: "10s", price: 171 },
  { time: "20s", price: 176 },
  { time: "30s", price: 268 },
  { time: "40s", price: 106 },
];

const FlashLoanAttacks = () => {
  const [selectedAttack, setSelectedAttack] = useState("bZx");

  const attackSteps = [
    { step: 1, description: "Borrow 7,500 ETH via flash loan", amount: "7,500 ETH" },
    { step: 2, description: "Convert ETH to sUSD via Uniswap", amount: "92,419.70 sUSD" },
    { step: 3, description: "Manipulate price feed through Kyber", amount: "151,021.42 sUSD" },
    { step: 4, description: "Execute profitable trade on Synthetix", amount: "943,837.59 sUSD" },
    { step: 5, description: "Repay flash loan and profit", amount: "350,000 USD profit" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-4">DeFi Flash Loan Attacks</h1>
        <p className="text-lg opacity-90">
          Complex attacks leveraging uncollateralized loans to exploit market inefficiencies
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <ProfitMetric label="Input Cost" value="130 USD" icon={DollarSign} />
        <ProfitMetric label="Attack Profit" value="350,000 USD" icon={TrendingUp} />
        <ProfitMetric label="Optimal Profit" value="830,000 USD" icon={AlertCircle} />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-6">Price Manipulation Timeline</h2>
        <LineChart width={800} height={300} data={mockPriceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" />
        </LineChart>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-6">Attack Flow: bZx Oracle Manipulation</h2>
        <div className="space-y-4">
          {attackSteps.map(step => (
            <AttackStep key={step.step} step={step.step} description={step.description} amount={step.amount} />
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-lg font-bold mb-4">Security Implications</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
            <span>Price oracle manipulation vulnerability</span>
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
            <span>Cross-protocol dependency risks</span>
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
            <span>Market liquidity exploitation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlashLoanAttacks;
