import React from 'react';

const SmartContractLayerSecurity: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Smart Contract Layer Security</h1>
      <p>
        Smart contracts automate DeFi but are vulnerable to various attacks:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Reentrancy:</strong> Exploiting recursive calls to drain funds.</li>
        <li><strong>Unprivileged Write:</strong> Unauthorized changes to contract state.</li>
        <li><strong>Unexpected Ether Flows:</strong> Mishandling external calls or fund transfers.</li>
      </ul>
    </div>
  );
};

export default SmartContractLayerSecurity;
