import React, { useState } from 'react';
import { Shield, Network, Database, Code, Layout, ExternalLink } from 'lucide-react';

interface LayerInfo {
  title: string;
  description: string;
  components: string[];
  icon: React.ReactNode;
}

const DeFiSecurityLayers: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers: LayerInfo[] = [
    {
      title: "Network Layer",
      description: "Foundation layer handling information dissemination and propagation where latency is critical",
      components: [
        "DNS Services",
        "IP Protocols",
        "BGP Routing",
        "P2P Overlay",
        "Peer Discovery",
        "Data Propagation"
      ],
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Blockchain Layer",
      description: "Core blockchain infrastructure managing consensus and incentives",
      components: [
        "Proof-of-Work",
        "Proof-of-Stake",
        "Block Rewards",
        "MEV Rewards",
        "Transaction Fees",
        "Block Data"
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Smart Contract Layer",
      description: "Programmable layer executing financial logic and state transitions",
      components: [
        "Contract Execution",
        "State Transitions",
        "Virtual Machine",
        "Asset Management",
        "Security Checks",
        "Contract Storage"
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "DeFi Protocol Layer",
      description: "Application layer providing financial services and composability",
      components: [
        "Decentralized Exchange",
        "Lending Protocols",
        "Token Mixers",
        "Liquidity Pools",
        "Yield Farming",
        "Asset Swaps"
      ],
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Third Party Layer",
      description: "External services and interfaces interacting with the protocol",
      components: [
        "Oracle Data Feeds",
        "Governance Systems",
        "User Interfaces",
        "Wallet Integration",
        "APIs",
        "External Tools"
      ],
      icon: <ExternalLink className="w-6 h-6" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">DeFi Security Architecture</h1>
        <p className="text-gray-600">
          Security in decentralized finance spans multiple interconnected layers,
          each presenting unique challenges and attack vectors.
        </p>
      </div>

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <div
            key={layer.title}
            className={`
              border rounded-lg p-4 cursor-pointer
              transform transition-all duration-200
              ${activeLayer === index ? 'bg-white shadow-lg' : 'bg-white hover:shadow'}
            `}
            onClick={() => setActiveLayer(activeLayer === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {layer.icon}
                </div>
                <h2 className="text-xl font-semibold">{layer.title}</h2>
              </div>
              <Shield className={`w-5 h-5 transition-transform duration-200 
                ${activeLayer === index ? 'rotate-180' : ''}`} 
              />
            </div>

            {activeLayer === index && (
              <div className="mt-4 pl-12">
                <p className="text-gray-600 mb-3">{layer.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {layer.components.map((component) => (
                    <div 
                      key={component}
                      className="bg-gray-50 p-2 rounded text-sm"
                    >
                      {component}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          Each layer represents a potential attack surface. Understanding these layers
          is crucial for implementing comprehensive security measures in DeFi applications.
        </p>
      </div>
    </div>
  );
};

export default DeFiSecurityLayers;