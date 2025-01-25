"use client";

import React, { useState } from "react";
import { Activity, AlertTriangle, Database, Shield } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const RiskManagementInDerivatives = () => {
  // Sample data for position simulation
  const [position] = useState({
    collateral: 1000,
    leverage: 10,
    positionSize: 10000,
    liquidationPrice: 9200,
    maintenanceMargin: 750,
  });

  // Price movement simulation data
  const [priceData] = useState([
    { time: "0h", price: 10000, equity: 1000, margin: 100 },
    { time: "4h", price: 9800, equity: 900, margin: 91.8 },
    { time: "8h", price: 9600, equity: 800, margin: 83.3 },
    { time: "12h", price: 9400, equity: 700, margin: 74.5 },
    { time: "16h", price: 9300, equity: 650, margin: 69.9 },
    { time: "20h", price: 9150, equity: 550, margin: 60.1 },
  ]);

  // Insurance fund data
  const [insuranceData] = useState([
    { month: "Jan", fundSize: 1000000, claims: 50000 },
    { month: "Feb", fundSize: 1200000, claims: 80000 },
    { month: "Mar", fundSize: 1500000, claims: 120000 },
    { month: "Apr", fundSize: 1800000, claims: 90000 },
    { month: "May", fundSize: 2000000, claims: 150000 },
    { month: "Jun", fundSize: 2300000, claims: 100000 },
  ]);

  const riskCategories = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Oracle Risk",
      description: "Risk of price manipulation or incorrect data feeds affecting derivative pricing",
      mitigation: "Multiple oracle sources, time-weighted average prices, circuit breakers",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Counterparty Risk",
      description: "Risk of counterparty defaulting on obligations",
      mitigation: "Overcollateralization, automated liquidations, insurance funds",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Market Risk",
      description: "Risk of adverse price movements affecting position value",
      mitigation: "Position limits, leverage caps, progressive margin requirements",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Liquidity Risk",
      description: "Risk of unable to close positions at fair prices",
      mitigation: "Liquidation incentives, dynamic funding rates, market maker incentives",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Risk Management in DeFi Derivatives</h2>
          <p className="mt-2 text-gray-600">
            Comprehensive overview of risk management mechanisms in decentralized derivatives
          </p>
        </div>

        {/* Risk Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskCategories.map((risk, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2 text-blue-600">
                {risk.icon}
                <h3 className="ml-2 font-semibold">{risk.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">{risk.description}</p>
              <div className="text-sm font-medium text-gray-900 bg-gray-100 p-2 rounded">
                Mitigation: {risk.mitigation}
              </div>
            </div>
          ))}
        </div>

        {/* Position Monitoring Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Position Health Monitoring</h3>
          <div className="h-64">
            <LineChart width={800} height={250} data={priceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#2563eb" name="Price" />
              <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#16a34a" name="Margin Ratio %" />
            </LineChart>
          </div>
        </div>

        {/* Liquidation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">Position Size</h3>
            <p className="text-2xl font-bold text-blue-700">${position.positionSize.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900">Collateral</h3>
            <p className="text-2xl font-bold text-green-700">${position.collateral.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-900">Leverage</h3>
            <p className="text-2xl font-bold text-yellow-700">{position.leverage}x</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-900">Liquidation Price</h3>
            <p className="text-2xl font-bold text-red-700">${position.liquidationPrice.toLocaleString()}</p>
          </div>
        </div>

        {/* Insurance Fund Stats */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Insurance Fund Performance</h3>
          <div className="h-64">
            <BarChart width={800} height={250} data={insuranceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="fundSize" fill="#2563eb" name="Fund Size" />
              <Bar dataKey="claims" fill="#dc2626" name="Claims" />
            </BarChart>
          </div>
        </div>

        {/* Risk Management Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Risk Management Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Position Management</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitor margin ratio regularly</li>
                <li>• Set stop-loss orders above liquidation price</li>
                <li>• Maintain adequate collateral buffer</li>
                <li>• Use appropriate leverage based on volatility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Platform Safety</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Verify oracle data sources</li>
                <li>• Check insurance fund coverage</li>
                <li>• Understand liquidation mechanisms</li>
                <li>• Review platform track record</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagementInDerivatives;
