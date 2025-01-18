"use client";
import React, { useState } from 'react';
import { ChevronRight, Book, AlertTriangle } from 'lucide-react';
import IntroductionToDerivatives from '~~/components/Synthetics/IntroductionToDerivatives';
import FuturesVsForwards from '~~/components/Synthetics/FuturesVsForwards';
import MarginAndMarkingToMarket from '~~/components/Synthetics/MarginAndMarkingToMarket';
import Swaps from '~~/components/Synthetics/Swaps';
import SyntheticAssetsAndSynthetix from '~~/components/Synthetics/SyntheticAssetsAndSynthetix';
import LeveragedDerivatives from '~~/components/Synthetics/LeveragedDerivatives';
import RiskManagementInDerivatives from '~~/components/Synthetics/RiskManagementInDerivatives';

const ContentWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="text-sm text-gray-500">Debug: Rendering {title}</div>
    {children}
  </div>
);

const sections = [
  {
    title: "Introduction to Derivatives",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Introduction to Derivatives">
        <IntroductionToDerivatives />
      </ContentWrapper>
    ),
  },
  {
    title: "Futures vs. Forwards",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Futures vs. Forwards">
        <FuturesVsForwards />
      </ContentWrapper>
    ),
  },
  {
    title: "Margin and Marking to Market",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Margin and Marking to Market">
        <MarginAndMarkingToMarket />
      </ContentWrapper>
    ),
  },
  {
    title: "Swaps",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Swaps">
        <Swaps />
      </ContentWrapper>
    ),
  },
  {
    title: "Synthetic Assets and Synthetix",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Synthetic Assets and Synthetix">
        <SyntheticAssetsAndSynthetix />
      </ContentWrapper>
    ),
  },
  {
    title: "Leveraged Derivatives",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Leveraged Derivatives">
        <LeveragedDerivatives />
      </ContentWrapper>
    ),
  },
  {
    title: "Risk Management in Derivatives",
    icon: <AlertTriangle className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Risk Management in Derivatives">
        <RiskManagementInDerivatives />
      </ContentWrapper>
    ),
  },
];

export default function Synthetics() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
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
    </div>
  );
}
