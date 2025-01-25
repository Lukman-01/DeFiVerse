"use client";

import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MarginAndMarkingToMarket = () => {
  const [contractSize] = useState(5000); // 5,000 oz of silver per contract
  const [initialMargin] = useState(5000); // Initial margin requirement
  const [maintenanceMargin] = useState(3000); // Maintenance margin requirement

  const [tradingData] = useState([
    { day: 0, price: 5.1, profit: 0, balance: 5000 },
    { day: 1, price: 5.2, profit: 500, balance: 5500 },
    { day: 2, price: 5.25, profit: 250, balance: 5750 },
    { day: 3, price: 5.18, profit: -350, balance: 5400 },
    { day: 4, price: 5.18, profit: 0, balance: 5400 },
    { day: 5, price: 5.21, profit: 150, balance: 5550 },
  ]);

  const renderMarginCall = (balance: number) => {
    if (balance < maintenanceMargin) {
      return (
        <div className="flex items-center p-4 mt-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
          <span className="text-red-700">Margin Call! Account balance below maintenance margin requirement.</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="space-y-6">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Margin Trading & Mark-to-Market</h2>
          <p className="mt-2 text-gray-600">
            Live demonstration of how futures margin and mark-to-market works using a CME Silver contract example
          </p>
        </div>

        {/* Contract Details Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">Contract Size</h3>
            <p className="text-2xl font-bold text-blue-700">{contractSize.toLocaleString()} oz</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900">Initial Margin</h3>
            <p className="text-2xl font-bold text-green-700">${initialMargin.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900">Maintenance Margin</h3>
            <p className="text-2xl font-bold text-purple-700">${maintenanceMargin.toLocaleString()}</p>
          </div>
        </div>

        {/* Price Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Price Movement & Balance History</h3>
          <div className="h-64">
            <LineChart width={800} height={250} data={tradingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Trading Day", position: "bottom" }} />
              <YAxis yAxisId="left" label={{ value: "Price ($)", angle: -90, position: "insideLeft" }} />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{ value: "Balance ($)", angle: 90, position: "insideRight" }}
              />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#2563eb" name="Silver Price" />
              <Line yAxisId="right" type="monotone" dataKey="balance" stroke="#16a34a" name="Account Balance" />
            </LineChart>
          </div>
        </div>

        {/* Daily Trading Table */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Daily Mark-to-Market</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Daily P/L
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tradingData.map(day => (
                  <tr key={day.day}>
                    <td className="px-6 py-4 whitespace-nowrap">{day.day}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${day.price.toFixed(2)}</td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${day.profit > 0 ? "text-green-600" : day.profit < 0 ? "text-red-600" : ""}`}
                    >
                      ${day.profit.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">${day.balance.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational Notes */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Concepts</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Initial Margin</h4>
              <p className="text-gray-600">
                Set by the exchange based on asset volatility. This is the minimum deposit required to open a position.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Maintenance Margin</h4>
              <p className="text-gray-600">
                If account value falls below this threshold, a margin call is triggered requiring additional deposits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Mark-to-Market</h4>
              <p className="text-gray-600">
                Daily process of adjusting the account value based on current market prices, ensuring transparency and
                risk management.
              </p>
            </div>
          </div>
        </div>

        {renderMarginCall(tradingData[tradingData.length - 1].balance)}
      </div>
    </div>
  );
};

export default MarginAndMarkingToMarket;
