"use client";
import React, { useState } from 'react';
import WhatIsDeFi from '~~/components/DeFiFundamentals/WhatIsDeFi';
import WhyLearnDeFi from '~~/components/DeFiFundamentals/WhyLearnDeFi';
import WhatIsFinance from '~~/components/DeFiFundamentals/WhatIsFinance';
import TraditionalFinance from '~~/components/DeFiFundamentals/TraditionalFinance';
import DeFiStack from '~~/components/DeFiFundamentals/DeFiStack';
import RiskAndSecurity from '~~/components/DeFiFundamentals/RiskAndSecurity';

const sections = [
  {title: "WhatIsFinance?", component: <WhatIsFinance /> },
  {title: "TraditionalFinance", component: <TraditionalFinance  /> },
  { title: "What is DeFi?", component: <WhatIsDeFi /> },
  { title: "Why Learn DeFi?", component: <WhyLearnDeFi /> },
  {title: "DeFiStack", component: <DeFiStack /> },
  {title: "RiskAndSecurity", component: <RiskAndSecurity/> },
];

export default function DeFiDocumentation() {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">DeFi Documentation</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className={`text-left w-full p-2 rounded-lg 
                    ${selectedSection === index ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setSelectedSection(index)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold">{sections[selectedSection].title}</h2>
          </div>
        </header>

        <main className="p-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow p-6">
              {sections[selectedSection].component}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}