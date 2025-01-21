"use client";

import React, { useState } from "react";
import { ChevronRight, Book, AlertTriangle } from "lucide-react";
import DeFiSecurityLayers from "~~/components/DeFiSecurityBasics/DeFiSecurityLayers";
import NetworkLayerSecurity from "~~/components/DeFiSecurityBasics/NetworkLayerSecurity";
import BlockchainLayerSecurity from "~~/components/DeFiSecurityBasics/BlockchainLayerSecurity";
import SmartContractLayerSecurity from "~~/components/DeFiSecurityBasics/SmartContractLayerSecurity";
import FlashLoanAttacks from "~~/components/DeFiSecurityBasics/FlashLoanAttacks";
import SandwichAttacks from "~~/components/DeFiSecurityBasics/SandwichAttacks";
import BlockchainExtractableValue from "~~/components/DeFiSecurityBasics/BlockchainExtractableValue";
import TransactionReplayAttacks from "~~/components/DeFiSecurityBasics/TransactionReplayAttacks";
import ReducingBEV from "~~/components/DeFiSecurityBasics/ReducingBEV";

const ContentWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="text-sm text-gray-500">Debug: Rendering {title}</div>
    {children}
  </div>
);

const sections = [
  {
    title: "DeFi Security Layers",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="DeFi Security Layers">
        <DeFiSecurityLayers />
      </ContentWrapper>
    ),
  },
  {
    title: "Network Layer Security",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Network Layer Security">
        <NetworkLayerSecurity />
      </ContentWrapper>
    ),
  },
  {
    title: "Blockchain Layer Security",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Blockchain Layer Security">
        <BlockchainLayerSecurity />
      </ContentWrapper>
    ),
  },
  {
    title: "Smart Contract Security",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Smart Contract Security">
        <SmartContractLayerSecurity />
      </ContentWrapper>
    ),
  },
  {
    title: "Flash Loan Attacks",
    icon: <AlertTriangle className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Flash Loan Attacks">
        <FlashLoanAttacks />
      </ContentWrapper>
    ),
  },
  {
    title: "Sandwich Attacks",
    icon: <AlertTriangle className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Sandwich Attacks">
        <SandwichAttacks />
      </ContentWrapper>
    ),
  },
  {
    title: "Blockchain Extractable Value (BEV)",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Blockchain Extractable Value (BEV)">
        <BlockchainExtractableValue />
      </ContentWrapper>
    ),
  },
  {
    title: "Transaction Replay Attacks",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Transaction Replay Attacks">
        <TransactionReplayAttacks />
      </ContentWrapper>
    ),
  },
  {
    title: "Reducing BEV and Mitigation Solutions",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Reducing BEV and Mitigation Solutions">
        <ReducingBEV />
      </ContentWrapper>
    ),
  },
];

export default function DeFiSecurityPage() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const [error, setError] = useState<null | string>(null);

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600">
        Error loading content: {error}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-0"} transition-all duration-300 bg-white border-r`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">DeFi Security Documentation</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                    selectedSection === index
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSection(index)}
                >
                  <span className="mr-3">{section.icon}</span>
                  <span>{section.title}</span>
                  {selectedSection === index && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 mr-4"
            >
              <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : ""}`} />
            </button>
            <h2 className="text-xl font-semibold">{sections[selectedSection].title}</h2>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="min-h-[200px]">{sections[selectedSection].component}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
