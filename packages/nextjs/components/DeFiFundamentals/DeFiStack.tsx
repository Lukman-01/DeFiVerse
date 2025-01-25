"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Code, Database, Info, Layers, Layout } from "lucide-react";

const LayerCard = ({ layer, isActive, onClick }: any) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all
      ${isActive ? "ring-2 ring-blue-500 shadow-xl" : "hover:shadow-lg"}`}
  >
    <div className="flex items-center mb-4">
      {layer.icon}
      <h3 className="text-lg font-semibold ml-2">{layer.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{layer.description}</p>
    {isActive && (
      <div className="space-y-3">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Key Components:</h4>
          <ul className="space-y-2">
            {layer.components.map((component: any, idx: any) => (
              <li key={idx} className="flex items-center text-blue-800">
                <ChevronRight className="h-4 w-4 mr-2" />
                {component}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Examples:</h4>
          <ul className="space-y-2">
            {layer.examples.map((example: any, idx: any) => (
              <li key={idx} className="flex items-center text-green-800">
                <ChevronRight className="h-4 w-4 mr-2" />
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
);

const DeFiStack = () => {
  const [activeLayer, setActiveLayer] = useState("blockchain");

  const layers = {
    blockchain: {
      title: "Blockchain Layer",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      description: "The foundation that provides decentralized, secure, and transparent infrastructure.",
      components: ["Consensus Mechanism", "Network Security", "Native Cryptocurrency", "Transaction Processing"],
      examples: ["Ethereum", "Binance Smart Chain", "Solana", "Polygon"],
    },
    protocol: {
      title: "Protocol Layer",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      description: "Smart contracts that define the rules and mechanics of financial operations.",
      components: ["Smart Contracts", "Token Standards", "Financial Logic", "Protocol Governance"],
      examples: ["Uniswap Protocol", "Aave Lending Protocol", "Compound Protocol", "MakerDAO Protocol"],
    },
    application: {
      title: "Application Layer",
      icon: <Layout className="h-6 w-6 text-green-500" />,
      description: "User interfaces and tools that enable interaction with DeFi protocols.",
      components: ["Web Interface", "Mobile Apps", "Aggregators", "Analytics Dashboards"],
      examples: ["MetaMask", "1inch Exchange", "Zapper", "DeFi Pulse"],
    },
  };

  const interactions = [
    "User interactions start at the Application Layer",
    "Requests are processed through Protocol Layer smart contracts",
    "Transactions are settled on the Blockchain Layer",
    "Results propagate back up through the stack",
  ];

  return (
    <div className="space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Layers className="h-8 w-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold">The DeFi Stack Architecture</h1>
            <p className="text-gray-600 mt-2">
              Understanding how different layers work together to enable decentralized financial services.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(layers).map(([key, layer], index) => (
            <div key={key} className="relative">
              {index < Object.entries(layers).length - 1 && (
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
                </div>
              )}
              <LayerCard layer={layer} isActive={activeLayer === key} onClick={() => setActiveLayer(key)} />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold">How Layers Interact</h3>
          </div>
          <div className="space-y-3">
            {interactions.map((interaction, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  {index + 1}
                </div>
                {interaction}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFiStack;
