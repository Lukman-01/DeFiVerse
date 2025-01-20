import React, { useState } from 'react';
import { ChevronRight, Book } from 'lucide-react';
import VaultContract from '~~/components/DeFiContracts/VaultContract';
import LendingPoolContract from '~~/components/DeFiContracts/LendingPoolContract';
import StakingContract from '~~/components/DeFiContracts/StakingContract';
import EscrowContract from '~~/components/DeFiContracts/EscrowContract';
import BankWalletContract from '~~/components/DeFiContracts/BankWalletContract';
import AmmDexContract from '~~/components/DeFiContracts/AmmDexContract';
import YieldFarmingContract from '~~/components/DeFiContracts/YieldFarmingContract';

const ContentWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="text-sm text-black/60">Debug: Rendering {title}</div>
    {children}
  </div>
);

const sections = [
  {
    title: "VaultContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="VaultContract">
        <VaultContract />
      </ContentWrapper>
    ),
  },
  {
    title: "LendingPoolContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="LendingPoolContract">
        <LendingPoolContract />
      </ContentWrapper>
    ),
  },
  {
    title: "StakingContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="StakingContract">
        <StakingContract />
      </ContentWrapper>
    ),
  },
  {
    title: "EscrowContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="EscrowContract">
        <EscrowContract />
      </ContentWrapper>
    ),
  },
  {
    title: "BankWalletContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="BankWalletContract">
        <BankWalletContract />
      </ContentWrapper>
    ),
  },
  {
    title: "AmmDexContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="AmmDexContract">
        <AmmDexContract />
      </ContentWrapper>
    ),
  },
  {
    title: "YieldFarmingContract",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="YieldFarmingContract">
        <YieldFarmingContract />
      </ContentWrapper>
    ),
  },
];

export default function DeFiContracts() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black-500">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-0"} transition-all duration-300 bg-white border-r`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Derivatives Documentation</h1>
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
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 mr-4">
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : ""}`}
              />
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
