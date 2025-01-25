"use client";

import React, { useState } from "react";
import { AlertCircle, Building2, ChevronRight, Clock, Eye, Scale, ShieldCheck } from "lucide-react";

const FeatureCard = ({ icon, title, description, details, isActive, onClick }: any) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all
      ${isActive ? "ring-2 ring-blue-500 shadow-xl" : "hover:shadow-lg"}`}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {isActive && (
      <div className="bg-blue-50 rounded-lg p-4 space-y-3">
        {details.map((detail: any, idx: any) => (
          <div key={idx} className="flex items-start">
            <ChevronRight className="h-4 w-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
            <span className="text-blue-800">{detail}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const TraditionalFinance = () => {
  const [activeFeature, setActiveFeature] = useState("custody");

  const features = {
    custody: {
      icon: <Building2 className="h-6 w-6 text-blue-500" />,
      title: "Custodial Services",
      description: "Financial institutions legally hold and manage customer funds and assets.",
      details: [
        "Banks maintain physical and digital storage of assets",
        "Government insurance protection (e.g., FDIC)",
        "Regular audits and compliance checks",
        "Institutional responsibility for asset security",
      ],
    },
    mediation: {
      icon: <Scale className="h-6 w-6 text-purple-500" />,
      title: "Transaction Mediation",
      description: "Intermediaries facilitate and verify all financial transactions.",
      details: [
        "Payment processing and verification",
        "Dispute resolution mechanisms",
        "Fraud prevention systems",
        "International transfer networks (SWIFT)",
      ],
    },
    regulation: {
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
      title: "Regulatory Compliance",
      description: "Strict adherence to financial regulations and security standards.",
      details: [
        "KYC (Know Your Customer) verification",
        "AML (Anti-Money Laundering) checks",
        "CFT (Counter Financing of Terrorism)",
        "Regular regulatory reporting",
      ],
    },
    privacy: {
      icon: <Eye className="h-6 w-6 text-red-500" />,
      title: "Limited Privacy",
      description: "Financial institutions maintain detailed records of all customer activities.",
      details: [
        "Complete transaction history tracking",
        "Identity verification requirements",
        "Data sharing with authorities",
        "Credit history monitoring",
      ],
    },
  };

  const statistics = [
    { value: "$468T", label: "Global Banking Assets" },
    { value: "150+", label: "Countries with Central Banks" },
    { value: "$7T", label: "Daily Transaction Volume" },
    { value: "26,000", label: "Banks Worldwide" },
  ];

  const limitations = [
    {
      title: "High Fees",
      description: "Transaction and service fees can be substantial, especially for international transfers.",
    },
    {
      title: "Processing Time",
      description: "Transactions can take days to settle, particularly across borders.",
    },
    {
      title: "Limited Access",
      description: "Many people worldwide remain unbanked or underbanked.",
    },
    {
      title: "Centralized Control",
      description: "Users have limited control over their assets and transaction approval.",
    },
  ];

  return (
    <div className="space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b bg-gradient-to-r from-gray-800 to-gray-600 text-white">
          <div className="flex items-center mb-4">
            <Building2 className="h-8 w-8 mr-3" />
            <h1 className="text-2xl font-bold">Traditional Finance (CeFi)</h1>
          </div>
          <p className="text-lg">
            The established financial system that powers global commerce through regulated institutions and standardized
            processes. Understanding CeFi is crucial for appreciating both its strengths and limitations.
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(features).map(([key, feature]) => (
              <FeatureCard
                key={key}
                {...feature}
                isActive={activeFeature === key}
                onClick={() => setActiveFeature(key)}
              />
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold">Limitations of Traditional Finance</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {limitations.map((limitation, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                    {limitation.title}
                  </h4>
                  <p className="text-gray-600">{limitation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalFinance;
