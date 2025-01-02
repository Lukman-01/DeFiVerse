import React from 'react';

const WhyStablecoins: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Why Stablecoins?</h3>
      <p>
        Stablecoins play a crucial role in the cryptocurrency ecosystem, providing a bridge between the highly volatile 
        crypto world and the relative stability of fiat currencies. They enable seamless trading, lending, and payments 
        without exposing users to extreme price fluctuations.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Benefits</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Hedging Against Volatility:</strong> Traders and investors use stablecoins to protect their assets 
          during periods of market instability.
        </li>
        <li>
          <strong>Cross-Border Transactions:</strong> Stablecoins allow fast and cost-effective international payments.
        </li>
        <li>
          <strong>DeFi Applications:</strong> Lending, borrowing, and liquidity provision are often anchored by stablecoins.
        </li>
      </ul>
      <img 
        src="/why-stablecoins.png" 
        alt="Stablecoins Benefits" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        By reducing exposure to volatility, stablecoins act as a foundation for many decentralized finance (DeFi) protocols.
      </p>
    </div>
  );
};

export default WhyStablecoins;
