"use client";

import React, { useState } from "react";
import { InfoIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const WhatIsStable = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  // Sample data showing stability comparison
  const stabilityData = [
    { month: "Jan", stablecoin: 1.0, fiatEUR: 1.08, volatileCrypto: 1.4 },
    { month: "Feb", stablecoin: 1.01, fiatEUR: 1.12, volatileCrypto: 0.9 },
    { month: "Mar", stablecoin: 0.99, fiatEUR: 1.06, volatileCrypto: 1.2 },
    { month: "Apr", stablecoin: 1.0, fiatEUR: 1.09, volatileCrypto: 0.7 },
    { month: "May", stablecoin: 1.0, fiatEUR: 1.11, volatileCrypto: 1.3 },
    { month: "Jun", stablecoin: 0.99, fiatEUR: 1.07, volatileCrypto: 1.1 },
  ];

  const stabilityTypes = [
    {
      id: "metrics",
      title: "Stability Metrics",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">Stability is measured through multiple metrics:</p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                <span className="text-blue-600 text-sm">1</span>
              </div>
              <div>
                <span className="font-medium">Volatility:</span>
                <p className="text-gray-600">
                  Standard deviation of returns over time, showing how much the price fluctuates
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                <span className="text-blue-600 text-sm">2</span>
              </div>
              <div>
                <span className="font-medium">Worst Drop:</span>
                <p className="text-gray-600">Maximum price decline over a specific timeframe</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                <span className="text-blue-600 text-sm">3</span>
              </div>
              <div>
                <span className="font-medium">Price Range:</span>
                <p className="text-gray-600">
                  Total range of price movement, typically aimed to stay within 1% of the peg
                </p>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "comparison",
      title: "Price Stability Comparison",
      content: (
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <LineChart data={stabilityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0.5, 1.5]} />
              <Tooltip />
              <Line type="monotone" dataKey="stablecoin" stroke="#2563eb" name="Stablecoin" />
              <Line type="monotone" dataKey="fiatEUR" stroke="#059669" name="EUR/USD" />
              <Line type="monotone" dataKey="volatileCrypto" stroke="#dc2626" name="Volatile Crypto" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">What is "Stable"?</h2>
          <p className="mt-2 text-gray-600">
            Stability is a relative metric in the context of cryptocurrencies. Traditional fiat currencies like EUR and
            GBP show volatility of 6-12%, while stablecoins aim to maintain even tighter price ranges.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
          <InfoIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <p className="text-blue-700">
            "Stablecoins" are not perfectly stable, but rather designed to be more stable than traditional
            cryptocurrencies by maintaining a peg to another asset (usually USD).
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b">
          <nav className="flex space-x-4" aria-label="Tabs">
            {stabilityTypes.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm font-medium rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">{stabilityTypes.find(tab => tab.id === activeTab)?.content}</div>
      </div>
    </div>
  );
};

export default WhatIsStable;
