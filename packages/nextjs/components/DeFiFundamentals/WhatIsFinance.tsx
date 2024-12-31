import React from 'react';

export default function WhatIsFinance() {
  return (
    <div>
      <h3>Understanding Finance</h3>
      <p>
        Finance involves the creation, management, and investment of money and financial assets. It plays a critical role in our daily lives, from personal savings to global economic systems.
      </p>
      <h4>Key Concepts in Finance</h4>
      <ul className="list-disc pl-6">
        <li><strong>Financial Assets:</strong> Non-physical assets whose value is based on contractual claims, such as bank deposits, stocks, bonds, and derivatives.</li>
        <li><strong>Financial Services:</strong> Services provided by institutions like banks, including lending, borrowing, insurance, and fund management.</li>
        <li><strong>Financial Markets:</strong> Marketplaces where financial assets are traded, such as stock exchanges.</li>
      </ul>
      <img 
        src="/dex.jpg" 
        className="my-4 w-full max-w-lg mx-auto"
      />
      <p>
        Finance is divided into traditional centralized systems (CeFi) and emerging decentralized systems (DeFi), which we’ll explore further.
      </p>
    </div>
  );
}
