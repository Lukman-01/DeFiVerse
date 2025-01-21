import React from 'react';

const BlockchainLayerSecurity: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blockchain Layer Security</h1>
      <p>
        Blockchain security issues often arise from consensus and incentive structures. Common attacks include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Double-Spending:</strong> Spending the same funds multiple times.</li>
        <li><strong>Selfish Mining:</strong> Withholding blocks to gain a competitive advantage.</li>
        <li><strong>Bribery Attacks:</strong> Influencing miners to act against the network.</li>
      </ul>
    </div>
  );
};

export default BlockchainLayerSecurity;
