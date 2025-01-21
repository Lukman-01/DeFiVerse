import React from 'react';

const DeFiSecurityLayers: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">DeFi Security Affects Multiple Layers</h1>
      <p>
        Security in decentralized finance (DeFi) spans several layers, each with its vulnerabilities and attack surfaces:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Network Layer:</strong> Involves DNS, IP, BGP, and data propagation protocols.</li>
        <li><strong>Blockchain Layer:</strong> Includes consensus mechanisms, incentive protocols, and data integrity.</li>
        <li><strong>Smart Contract Layer:</strong> Focuses on vulnerabilities in contract execution and state transitions.</li>
        <li><strong>DeFi Protocol Layer:</strong> Comprises decentralized exchanges, loans, and mixers.</li>
        <li><strong>Third-Party Layer:</strong> Includes oracles, governance systems, and UI components.</li>
      </ul>
    </div>
  );
};

export default DeFiSecurityLayers;
