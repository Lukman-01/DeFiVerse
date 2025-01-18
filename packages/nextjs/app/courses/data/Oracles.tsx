"use client";
import React, { useState } from 'react';
import { ChevronRight, Book, AlertTriangle, Shield } from 'lucide-react';
import IntroductionToOracles from '~~/components/Oracles/IntroductionToOracles';
import BasicOracleDesignPart1 from '~~/components/Oracles/BasicOracleDesignPart1';
import BasicOracleDesignPart2 from '~~/components/Oracles/BasicOracleDesignPart2';
import AdvancedOracleUseCases from '~~/components/Oracles/AdvancedOracleUseCases';
import OraclePrivacy from '~~/components/Oracles/OraclePrivacy';
import PrivacyPreservingOracles from '~~/components/Oracles/PrivacyPreservingOracles';

const ContentWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="text-sm text-gray-500">Debug: Rendering {title}</div>
    {children}
  </div>
);

const sections = [
  {
    title: "Introduction to Oracles",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Introduction to Oracles">
        <IntroductionToOracles />
      </ContentWrapper>
    ),
  },
  {
    title: "Basic Oracle Design (Part I)",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Basic Oracle Design (Part I)">
        <BasicOracleDesignPart1 />
      </ContentWrapper>
    ),
  },
  {
    title: "Basic Oracle Design (Part II)",
    icon: <Book className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Basic Oracle Design (Part II)">
        <BasicOracleDesignPart2 />
      </ContentWrapper>
    ),
  },
  {
    title: "Advanced Oracle Use Cases",
    icon: <AlertTriangle className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Advanced Oracle Use Cases">
        <AdvancedOracleUseCases />
      </ContentWrapper>
    ),
  },
  {
    title: "Oracle Privacy",
    icon: <Shield className="w-5 h-5" />,
    component: (
      <ContentWrapper title="Oracle Privacy">
        <OraclePrivacy />
      </ContentWrapper>
    ),
  },
  {
    title: "DeFi Applications Using Privacy-Preserving Oracles",
    icon: <Shield className="w-5 h-5" />,
    component: (
      <ContentWrapper title="DeFi Applications Using Privacy-Preserving Oracles">
        <PrivacyPreservingOracles />
      </ContentWrapper>
    ),
  },
];

export default function Oracles() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-0"} transition-all duration-300 bg-white border-r`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Oracles Documentation</h1>
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
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-sm rounded-lg p-6">{sections[selectedSection].component}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
