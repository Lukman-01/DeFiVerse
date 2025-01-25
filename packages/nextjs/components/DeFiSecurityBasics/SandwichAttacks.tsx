"use client";

import React, { useState } from "react";
import { AlertCircle, ArrowBigDown, ArrowBigUp, Shield } from "lucide-react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const priceData = [
  { time: 0, price: 100, label: "Initial" },
  { time: 1, price: 120, label: "Front-run Buy" },
  { time: 2, price: 115, label: "Victim Trade" },
  { time: 3, price: 95, label: "Back-run Sell" },
  { time: 4, price: 100, label: "Final" },
];

const StepCard = ({
  title,
  description,
  icon: Icon,
  active,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  active: boolean;
}) => (
  <div
    className={`p-4 rounded-lg transition-all duration-300 ${
      active ? "bg-blue-50 border-blue-500" : "bg-white"
    } border`}
  >
    <div className="flex items-center gap-3 mb-2">
      <Icon className={active ? "text-blue-500" : "text-gray-400"} />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const SandwichAttacks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Front-running Buy",
      description: "Attacker buys asset before victim's transaction, driving price up",
      icon: ArrowBigUp,
    },
    {
      title: "Victim's Trade",
      description: "Victim's trade executes at inflated price with high slippage",
      icon: AlertCircle,
    },
    {
      title: "Back-running Sell",
      description: "Attacker sells asset immediately after, profiting from price movement",
      icon: ArrowBigDown,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-4">Sandwich Attacks in DeFi</h1>
        <p className="text-lg opacity-90">Advanced MEV exploitation targeting AMM price slippage</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Attack Simulation</h2>
          <LineChart width={400} height={300} data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8b5cf6" strokeWidth={2} />
          </LineChart>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} active={currentStep === index} />
          ))}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentStep === index ? "bg-purple-500" : "bg-gray-300"}`}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="text-red-500" />
            Impact Analysis
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span>Average victim slippage: 2-5%</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span>Network congestion increase: 15-30%</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span>Profitable in 66% of attempts</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="text-green-500" />
            Protection Measures
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Set maximum slippage tolerance: 1%</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Use private transaction relays</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Implement time-weighted average pricing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SandwichAttacks;
