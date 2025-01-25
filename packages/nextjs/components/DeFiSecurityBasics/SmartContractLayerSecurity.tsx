"use client";

import React, { useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, Code, Shield } from "lucide-react";

const SecurityExample = ({ title, code, explanation }: { title: string; code: string; explanation: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
      >
        <span className="font-medium">{title}</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">{code}</pre>
          <p className="mt-4 text-gray-600">{explanation}</p>
        </div>
      )}
    </div>
  );
};

const VulnerabilityCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-red-500 mr-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SmartContractLayerSecurity = () => {
  const vulnerabilityExamples = [
    {
      title: "Reentrancy Attack Example",
      code: `contract Wallet {
  uint balance = 10;
  function withdraw() {
    if(balance > 0)
      msg.sender.call.value(balance)();
    balance = 0;
  }
}`,
      explanation:
        "In this vulnerable code, an attacker contract can recursively call withdraw() before the balance is set to 0, draining more funds than they should be able to.",
    },
    {
      title: "Unprivileged Write Example",
      code: `address owner = ...;
function initWallet(address _owner) {
  owner = _owner;
}
function withdraw(uint amount) {
  if (msg.sender == owner) {
    owner.send(amount);
  }
}`,
      explanation:
        "This code allows any user to change the wallet's owner due to missing access control on initWallet().",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Smart Contract Layer Security</h1>
        </div>
        <p className="text-lg text-gray-600">
          Smart contracts are programs that handle digital assets on the blockchain. Their immutable nature means
          security vulnerabilities can have severe consequences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <VulnerabilityCard
          icon={Code}
          title="Reentrancy Vulnerabilities"
          description="Occurs when external contract calls are made before state updates, allowing malicious contracts to recursively drain funds."
        />
        <VulnerabilityCard
          icon={AlertTriangle}
          title="Storage Write Vulnerabilities"
          description="Improper access control allowing unauthorized modification of contract state variables."
        />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Security Testing Approaches</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Static Analysis - Automated code scanning</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Dynamic Analysis - Runtime behavior testing</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Formal Verification - Mathematical proof of correctness</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Vulnerability Examples</h2>
        {vulnerabilityExamples.map((example, index) => (
          <SecurityExample key={index} title={example.title} code={example.code} explanation={example.explanation} />
        ))}
      </div>
    </div>
  );
};

export default SmartContractLayerSecurity;
