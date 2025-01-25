"use client";

// ExchangeTransactionPropagation.tsx
import React, { useEffect, useState } from "react";
import { Activity, AlertTriangle, ArrowRight, Database } from "lucide-react";

interface Node {
  id: number;
  label: string;
}

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ExchangeTransactionPropagation: React.FC = (): JSX.Element => {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setActiveNode(prev => (prev + 1) % 5);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const nodes: Node[] = [
    { id: 0, label: "Transaction Initiated" },
    { id: 1, label: "P2P Propagation" },
    { id: 2, label: "Fee Auction" },
    { id: 3, label: "Block Inclusion" },
    { id: 4, label: "Transaction Confirmed" },
  ];

  const challenges: Challenge[] = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "High-Frequency Impact",
      description: "Trading volume can affect network transparency",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Front-Running Risks",
      description: "Fee auction vulnerability on public networks",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Exchange Transaction Propagation</h1>

      {/* Main description */}
      <p className="text-gray-600 mb-8">
        A decentralized system for distributing and executing blockchain transactions, ensuring trades are visible,
        verified, and executed without central coordination.
      </p>

      {/* Propagation visualization */}
      <div className="mb-12">
        <div className="flex justify-between items-center">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index === activeNode ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                <Database className="w-6 h-6" />
              </div>
              <div className="mt-2 text-sm text-center max-w-[120px]">{node.label}</div>
              {index < nodes.length - 1 && <ArrowRight className="absolute ml-14 text-gray-400" />}
            </div>
          ))}
        </div>
      </div>

      {/* Key aspects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Key Aspects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Asynchronous P2P Network</h3>
            <p className="text-sm text-gray-600">
              Transactions propagate through peer-to-peer networks without central coordination
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Fee Auction Mechanisms</h3>
            <p className="text-sm text-gray-600">PGA and SGA systems determine transaction inclusion based on fees</p>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center mb-2">
                {challenge.icon}
                <h3 className="font-semibold ml-2">{challenge.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeTransactionPropagation;
