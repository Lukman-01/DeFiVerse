"use client";
import React, { useState } from 'react';
import { ChevronRight, Book, AlertTriangle } from 'lucide-react';
import WhyLending from '~~/components/Lending/WhyLending';
import Terminologies from '~~/components/Lending/Terminologies';
import OverCollateralizedBorrowing from '~~/components/Lending/OverCollateralizedBorrowing';
import UnderCollateralizedBorrowing from '~~/components/Lending/UnderCollateralizedBorrowing';
import Liquidation from '~~/components/Lending/Liquidation';
import FlashLoans from '~~/components/Lending/FlashLoans';

// Debug wrapper to verify component rendering
const ContentWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="text-sm text-gray-500">Debug: Rendering {title}</div>
    {children}
  </div>
);

const sections = [
  {
    title: "Why Lending?",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Why Lending">
        <WhyLending />
      </ContentWrapper>
    ),
  },
  {
    title: "Terminologies",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Terminologies">
        <Terminologies />
      </ContentWrapper>
    ),
  },
  {
    title: "Over-Collateralized Borrowing",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Over-Collateralized Borrowing">
        <OverCollateralizedBorrowing />
      </ContentWrapper>
    ),
  },
  {
    title: "Under-Collateralized Borrowing",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Under-Collateralized Borrowing">
        <UnderCollateralizedBorrowing />
      </ContentWrapper>
    ),
  },
  {
    title: "Liquidation",
    icon: <AlertTriangle className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Liquidation">
        <Liquidation />
      </ContentWrapper>
    ),
  },
  {
    title: "Flash Loans",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Flash Loans">
        <FlashLoans />
      </ContentWrapper>
    ),
  },
];

export default function LendingPage() {
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
          <h1 className="text-xl font-bold">Lending Documentation</h1>
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
