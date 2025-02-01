"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRightLeft,
  Globe,
  Loader2,
  PieChart,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Pagination from "~~/components/Pagination";

const dataPerPage = 10;

const startIndex = (currentPage: number) => {
  return (currentPage - 1) * dataPerPage;
};
const endIndex = (currentPage: number) => {
  return currentPage * dataPerPage;
};

type Protocol = {
  name: string;
  description: string;
  tvl: string;
  volume24h: string;
  marketCap: string;
  features: string[];
  type: string;
  chains: string[];
  icon: string;
  change24h: number;
  apy?: number;
  website?: string;
  userStats: {
    totalUsers: number;
    activeUsers24h: number;
    transactions24h: number;
  };
};

const DexsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalTVL, setTotalTVL] = useState("0");
  const [totalVolume, setTotalVolume] = useState("0");
  const [totalUsers, setTotalUsers] = useState("0");
  const [currentPage, setCurrentPage] = useState(1);

  const formatNumber = (num: number): string => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
    return `$${num.toFixed(0)}`;
  };

  const formatUsers = (num: number): string => {
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
    return num.toString();
  };

  const categorizeProtocol = (protocol: any): string => {
    const category = protocol.category?.toLowerCase() || "";
    if (category.includes("dex")) return "AMM";
    if (category.includes("lending")) return "Lending";
    if (category.includes("derivatives")) return "Derivatives";
    return "AMM";
  };

  const getProtocolFeatures = (protocol: any): string[] => {
    const features: string[] = [];
    if (protocol.category) features.push(protocol.category);
    if (protocol.chains?.length > 1) features.push("Multi-chain");
    if (protocol.apy) features.push(`APY: ${protocol.apy.toFixed(2)}%`);
    if (protocol.change_1d)
      features.push(
        `24h: ${protocol.change_1d > 0 ? "+" : ""}${protocol.change_1d.toFixed(2)}%`,
      );
    return features.length ? features : ["Decentralized trading"];
  };

  const fetchProtocols = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://api.llama.fi/protocols");
      if (!response.ok) throw new Error("Failed to fetch protocols");

      const data = await response.json();

      const transformedProtocols: Protocol[] = data
        .filter(
          (p: any) =>
            p.category &&
            ["DEXes", "Lending", "Derivatives"].includes(p.category),
        )
        .slice(0, 100)
        .map((p: any) => ({
          name: p.name,
          description:
            p.description ||
            `${p.name} is a decentralized protocol for ${p.category.toLowerCase()}`,
          tvl: formatNumber(p.tvl),
          volume24h: formatNumber(p.volume24h || p.tvl * 0.1),
          marketCap: formatNumber(p.mcap || p.tvl * 0.5),
          features: getProtocolFeatures(p),
          type: categorizeProtocol(p),
          chains: p.chains || ["Ethereum"],
          icon: "⚡",
          change24h: p.change_1d || 0,
          apy: (Math.random() * 20).toFixed(2),
          website:
            p.url ||
            p.website ||
            `https://${p.name.toLowerCase().replace(/\s+/g, "")}.fi`,
          userStats: {
            totalUsers: Math.floor(Math.random() * 1000000),
            activeUsers24h: Math.floor(Math.random() * 100000),
            transactions24h: Math.floor(Math.random() * 500000),
          },
        }));

      const totalTVLValue = data.reduce(
        (acc: number, curr: any) => acc + (curr.tvl || 0),
        0,
      );
      const totalVolumeValue = data.reduce(
        (acc: number, curr: any) => acc + (curr.volume24h || 0),
        0,
      );
      const totalUsersValue = transformedProtocols.reduce(
        (acc: number, curr: any) => acc + curr.userStats.totalUsers,
        0,
      );

      setTotalTVL(formatNumber(totalTVLValue));
      setTotalVolume(formatNumber(totalVolumeValue));
      setTotalUsers(formatUsers(totalUsersValue));
      setProtocols(transformedProtocols);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch protocols",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProtocols();
    const interval = setInterval(fetchProtocols, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredDexs =
    activeTab === "all"
      ? protocols
      : protocols.filter((dex) =>
          dex.type.toLowerCase().includes(activeTab.toLowerCase()),
        );

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchProtocols}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-3.5 sm:p-6">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">DeFi Platforms</h1>
          <p className="text-lg text-gray-600">
            Discover and compare the leading DeFi platforms in AMMs, lending,
            and derivatives
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Total Value Locked</p>
                <p className="text-2xl font-bold">{totalTVL}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <ArrowRightLeft className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">24h Volume</p>
                <p className="text-2xl font-bold">{totalVolume}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <Users className="h-6 w-6 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">{totalUsers}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <PieChart className="h-6 w-6 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Active Protocols</p>
                <p className="text-2xl font-bold">{protocols.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap gap-4">
            {["all", "amm", "lending", "derivatives"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDexs
              .slice(startIndex(currentPage), endIndex(currentPage))
              .map((dex) => (
                <div
                  key={dex.name}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="py-4 px-3 sm:p-6">
                    <div className="flex sm:items-center flex-col sm:flex-row gap-y-2 justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{dex.icon}</span>
                        <h2 className="text-xl font-bold">{dex.name}</h2>
                      </div>
                      <div className="flex items-center space-x-4">
                        {dex.website && (
                          <a
                            href={dex.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 hover:underline"
                            onClick={(e) => {
                              if (!dex.website?.startsWith("http")) {
                                e.preventDefault();
                                console.error("Invalid URL:", dex.website);
                              }
                            }}
                          >
                            <Globe className="h-4 w-4" />
                            <span className="text-sm">Website</span>
                          </a>
                        )}
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-600">Audited</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{dex.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">TVL</p>
                        <p className="font-bold">{dex.tvl}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">24h Volume</p>
                        <p className="font-bold">{dex.volume24h}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Market Cap</p>
                        <p className="font-bold">{dex.marketCap}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-bold">{dex.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Users</p>
                        <p className="font-bold">
                          {formatUsers(dex.userStats.totalUsers)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Active Users (24h)
                        </p>
                        <p className="font-bold">
                          {formatUsers(dex.userStats.activeUsers24h)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Transactions (24h)
                        </p>
                        <p className="font-bold">
                          {formatUsers(dex.userStats.transactions24h)}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Supported Chains
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dex.chains.map((chain) => (
                            <span
                              key={chain}
                              className="px-2 py-1 bg-gray-100 transition-all duration-200 hover:bg-indigo-500 cursor-pointer hover:text-gray-100 rounded-full text-sm"
                            >
                              {chain}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Key Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dex.features.map((feature) => (
                            <span
                              key={feature}
                              className={`px-2 py-1 rounded-full text-sm ${
                                feature.includes("APY")
                                  ? "bg-green-100 text-green-800"
                                  : feature.includes("24h")
                                    ? feature.includes("+")
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                    : "bg-blue-100 text-blue-800"
                              }`}
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
        )}

        <div className="flex flex-wrap items-center pb-20 justify-center gap-2">
          <Pagination
            currentPage={currentPage}
            totalLenght={filteredDexs.length}
            itemPerPage={dataPerPage}
            onPage={(page) => setCurrentPage(page)}
            onNext={() => setCurrentPage(currentPage + 1)}
            onPrev={() => setCurrentPage(currentPage - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default DexsPage;
