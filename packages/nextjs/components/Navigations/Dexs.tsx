"use client";
import React, { useState } from 'react';
import { Search, TrendingUp, ArrowRightLeft, PieChart, Shield } from 'lucide-react';

const DexsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const dexData = [
    {
      name: "Uniswap",
      description: "Leading AMM DEX with concentrated liquidity",
      tvl: "$3.5B",
      volume24h: "$1.2B",
      features: ["Multiple chains support", "Concentrated liquidity", "Low slippage"],
      type: "AMM",
      chains: ["Ethereum", "Polygon", "Arbitrum", "Optimism"],
      icon: "🦄"
    },
    {
      name: "Curve",
      description: "Specialized in stablecoin and like-kind asset swaps",
      tvl: "$2.8B",
      volume24h: "$800M",
      features: ["Low slippage", "Stable asset focus", "High efficiency"],
      type: "Stableswap AMM",
      chains: ["Ethereum", "Polygon", "Avalanche"],
      icon: "⚡"
    },
    {
      name: "dYdX",
      description: "Leading derivatives DEX with perpetual contracts",
      tvl: "$1.5B",
      volume24h: "$2.1B",
      features: ["Perpetual trading", "High leverage", "Professional tools"],
      type: "Derivatives",
      chains: ["Ethereum", "StarkNet"],
      icon: "📈"
    },
    {
      name: "Aave",
      description: "Decentralized protocol for lending and borrowing assets",
      tvl: "$4.7B",
      volume24h: "$400M",
      features: ["Flash Loans", "Flexible interest rates", "Multi-chain support"],
      type: "Lending",
      chains: ["Ethereum", "Polygon", "Avalanche", "Arbitrum"],
      icon: "🏦"
    },
    {
      name: "Compound",
      description: "Algorithmic, autonomous interest rate protocol",
      tvl: "$2.1B",
      volume24h: "$350M",
      features: ["Lending and borrowing", "Governance token (COMP)", "Decentralized governance"],
      type: "Lending",
      chains: ["Ethereum"],
      icon: "📊"
    },
    {
      name: "Balancer",
      description: "Automated portfolio manager and trading platform",
      tvl: "$1.3B",
      volume24h: "$600M",
      features: ["Custom AMM pools", "Smart pools", "Multi-asset support"],
      type: "AMM",
      chains: ["Ethereum", "Polygon", "Arbitrum"],
      icon: "⚖️"
    }
  ];

  const filteredDexs = activeTab === 'all' 
    ? dexData
    : dexData.filter(dex => dex.type.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">DeFi Platforms</h1>
          <p className="text-lg text-gray-600">
            Discover and compare the leading DeFi platforms in AMMs, lending, and derivatives
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Total Value Locked</p>
                <p className="text-2xl font-bold">$15.9B</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2">
              <ArrowRightLeft className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">24h Volume</p>
                <p className="text-2xl font-bold">$4.7B</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2">
              <PieChart className="h-6 w-6 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold">300K+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-4">
            {['all', 'amm', 'lending', 'derivatives'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Cards */}
        <div className="space-y-4">
          {filteredDexs.map((dex) => (
            <div key={dex.name} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{dex.icon}</span>
                    <h2 className="text-xl font-bold">{dex.name}</h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Audited</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{dex.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">TVL</p>
                    <p className="font-bold">{dex.tvl}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">24h Volume</p>
                    <p className="font-bold">{dex.volume24h}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-bold">{dex.type}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Supported Chains</p>
                    <div className="flex flex-wrap gap-2">
                      {dex.chains.map((chain) => (
                        <span
                          key={chain}
                          className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {chain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {dex.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexsPage;
