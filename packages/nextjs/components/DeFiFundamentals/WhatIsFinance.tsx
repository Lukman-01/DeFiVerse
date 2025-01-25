"use client";

import React, { useState } from "react";
import { BarChart2, Briefcase, Building, ChevronRight, DollarSign, ExternalLink } from "lucide-react";

const Section = ({ title, icon, children, isActive, onClick }: any) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all
      ${isActive ? "ring-2 ring-blue-500" : "hover:shadow-xl"}`}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <div className={`transition-all ${isActive ? "block" : "hidden md:block"}`}>{children}</div>
  </div>
);

const WhatIsFinance = () => {
  const [activeSection, setActiveSection] = useState("basics");

  const financialConcepts = [
    {
      id: "basics",
      title: "Financial Basics",
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      content:
        "Finance is the backbone of modern economy, involving the creation, management, and investment of money and assets. It encompasses everything from personal savings to complex international trading systems.",
      examples: ["Personal Banking", "Business Finance", "Investment Management"],
    },
    {
      id: "assets",
      title: "Financial Assets",
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      content:
        "Financial assets are non-physical assets whose value comes from contractual claims. They represent the building blocks of modern financial systems.",
      examples: ["Stocks", "Bonds", "Bank Deposits", "Derivatives"],
    },
    {
      id: "services",
      title: "Financial Services",
      icon: <Building className="h-6 w-6 text-purple-500" />,
      content:
        "Financial services are provided by institutions to help individuals and organizations manage their financial activities and achieve their financial goals.",
      examples: ["Banking", "Insurance", "Investment Management", "Lending"],
    },
    {
      id: "markets",
      title: "Financial Markets",
      icon: <Briefcase className="h-6 w-6 text-orange-500" />,
      content:
        "Financial markets are where assets are traded between parties. They provide essential liquidity and price discovery mechanisms for the economy.",
      examples: ["Stock Exchanges", "Bond Markets", "Forex Markets", "Commodity Markets"],
    },
  ];

  const statistics = [
    { label: "Global Stock Market Cap", value: "$100T+" },
    { label: "Daily Forex Trading", value: "$6.6T" },
    { label: "Global Bond Market", value: "$130T+" },
    { label: "Financial Services GDP", value: "20-25%" },
  ];

  return (
    <div className="space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Understanding Finance</h1>
        <p className="text-lg text-gray-600 mb-6">
          Finance is the cornerstone of modern economic systems, facilitating the flow of money and resources throughout
          the global economy. Let's explore its key components and significance.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {financialConcepts.map(concept => (
            <Section
              key={concept.id}
              title={concept.title}
              icon={concept.icon}
              isActive={activeSection === concept.id}
              onClick={() => setActiveSection(concept.id)}
            >
              <p className="text-gray-600 mb-4">{concept.content}</p>
              <div className="space-y-2">
                {concept.examples.map((example, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                    {example}
                  </div>
                ))}
              </div>
            </Section>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <ExternalLink className="h-5 w-5 mr-2" />
            Evolution of Finance
          </h3>
          <p className="text-gray-600">
            The financial world is evolving rapidly with the emergence of new technologies. Traditional centralized
            finance (CeFi) is being complemented by decentralized finance (DeFi), offering new possibilities for
            financial innovation and inclusion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsFinance;
