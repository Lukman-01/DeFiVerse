"use client";
import React, { useState } from 'react';

const sections = [
  {
    title: "What is DeFi?",
    content: (
      <p>
        DeFi (Decentralized Finance) refers to a new financial system built on blockchain technology that operates without intermediaries. DeFi enables peer-to-peer financial services, such as lending, borrowing, trading, and more, using smart contracts and decentralized protocols.
      </p>
    ),
  },
  {
    title: "Why Learn DeFi?",
    content: (
      <p>
        Learning DeFi allows individuals to understand and participate in a new financial ecosystem that removes traditional intermediaries like banks. It empowers individuals with greater control over their financial transactions and assets, fostering a more inclusive and efficient global financial system.
      </p>
    ),
  },
  {
    title: "How DeFi Works",
    content: (
      <p>
        DeFi operates on public blockchain networks, most commonly Ethereum, where smart contracts are used to enforce financial agreements. Users interact with these smart contracts via decentralized applications (dApps) to lend, borrow, and trade assets without relying on banks or centralized institutions.
      </p>
    ),
  },
  {
    title: "DeFi Risks",
    content: (
      <p>
        Like all financial systems, DeFi comes with risks such as smart contract vulnerabilities, hacking, impermanent loss, and price volatility. Users must carefully assess and manage these risks when participating in DeFi protocols and investments.
      </p>
    ),
  },
  {
    title: "DeFi Use Cases",
    content: (
      <p>
        DeFi has various use cases, including decentralized exchanges (DEXs), liquidity pools, lending protocols, yield farming, and synthetic assets. These use cases enable users to participate in financial markets without relying on traditional financial institutions.
      </p>
    ),
  },
];

export default function DeFiDocumentation() {
  const [selectedSection, setSelectedSection] = useState(0); // Default to the first section

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
              {sections[selectedSection].content}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
