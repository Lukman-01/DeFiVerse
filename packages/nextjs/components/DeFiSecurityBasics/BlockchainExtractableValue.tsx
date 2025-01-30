"use client";

import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight, DollarSign } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const mockMEVData = [
  { month: "Jan", value: 2.1, liquidations: 0.8, arbitrage: 0.9, sandwichAttacks: 0.4 },
  { month: "Feb", value: 3.2, liquidations: 1.2, arbitrage: 1.4, sandwichAttacks: 0.6 },
  { month: "Mar", value: 2.8, liquidations: 1.0, arbitrage: 1.1, sandwichAttacks: 0.7 },
  { month: "Apr", value: 4.1, liquidations: 1.5, arbitrage: 1.8, sandwichAttacks: 0.8 },
];

interface MEVTypeCardProps {
  title: string;
  description: string;
  value: number;
  trend: "up" | "down";
}

const MEVTypeCard: React.FC<MEVTypeCardProps> = ({ title, description, value, trend }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {trend === "up" ? (
        <ArrowUpRight className="text-green-500" size={24} />
      ) : (
        <ArrowDownRight className="text-red-500" size={24} />
      )}
    </div>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <div className="mt-auto flex items-center">
      <DollarSign size={20} className="text-gray-500 mr-2" />
      <span className="text-2xl font-bold">{value}M</span>
    </div>
  </div>
);

const BlockchainExtractableValue: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  return (
    <div className="p-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Extractable Value (BEV)</h1>
        <p className="text-gray-600">
          Track and analyze value extraction through transaction ordering, inclusion, and censorship
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MEVTypeCard
          title="Arbitrage"
          description="Value extracted from price differences across markets"
          value={1.8}
          trend="up"
        />
        <MEVTypeCard
          title="Liquidations"
          description="Value from liquidating under-collateralized positions"
          value={1.5}
          trend="up"
        />
        <MEVTypeCard
          title="Sandwich Attacks"
          description="Value extracted through trade manipulation"
          value={0.8}
          trend="down"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">BEV Trends</h2>
          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="border rounded-md px-3 py-2 text-gray-700"
          >
            <option value="all">All Types</option>
            <option value="arbitrage">Arbitrage</option>
            <option value="liquidations">Liquidations</option>
            <option value="sandwichAttacks">Sandwich Attacks</option>
          </select>
        </div>

        <div className="w-full h-80">
          <LineChart data={mockMEVData} width={800} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedType === "all" || selectedType === "arbitrage" ? (
              <Line type="monotone" dataKey="arbitrage" stroke="#3B82F6" name="Arbitrage" />
            ) : null}
            {selectedType === "all" || selectedType === "liquidations" ? (
              <Line type="monotone" dataKey="liquidations" stroke="#10B981" name="Liquidations" />
            ) : null}
            {selectedType === "all" || selectedType === "sandwichAttacks" ? (
              <Line type="monotone" dataKey="sandwichAttacks" stroke="#EF4444" name="Sandwich Attacks" />
            ) : null}
          </LineChart>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Impact Analysis</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3" />
              <span className="text-gray-600">Reduced blockchain fairness and decentralization</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3" />
              <span className="text-gray-600">Increased transaction costs for users</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3" />
              <span className="text-gray-600">Risk of chain reorganization</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Mitigation Strategies</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3" />
              <span className="text-gray-600">Fair-ordering protocols implementation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3" />
              <span className="text-gray-600">MEV-aware DApp design patterns</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3" />
              <span className="text-gray-600">Cross-chain MEV protection mechanisms</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockchainExtractableValue;


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];