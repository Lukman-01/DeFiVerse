import React from 'react';

const FlashLoanAttacks: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">DeFi Flash Loan Attacks</h1>
      <p>
        Flash loan attacks leverage unsecured loans to manipulate markets or protocols. Key examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Pump and Arbitrage:</strong> Manipulating prices for arbitrage opportunities.</li>
        <li><strong>Oracle Manipulation:</strong> Exploiting price feeds to execute profitable trades.</li>
      </ul>
    </div>
  );
};

export default FlashLoanAttacks;
