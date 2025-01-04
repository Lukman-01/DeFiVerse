import React from 'react';

const IntroductionToDerivatives: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Introduction to Derivatives</h3>
      <p>
        Derivatives are financial instruments whose value is dependent on the performance of an underlying asset, such as 
        commodities, stocks, or cryptocurrencies. These instruments are widely used in both traditional finance and DeFi 
        for hedging, speculation, and risk management.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Types of Derivatives</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Futures:</strong> Standardized contracts to buy/sell an asset at a predetermined price on a future date.</li>
        <li><strong>Forwards:</strong> Custom contracts with terms agreed between two parties.</li>
        <li><strong>Options:</strong> Contracts giving the holder the right, but not the obligation, to buy/sell an asset.</li>
      </ul>
      <img 
        src="/introduction-derivatives.png" 
        alt="Derivatives Overview" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Derivatives provide a mechanism for participants to transfer risk and gain exposure to assets without directly 
        owning them.
      </p>
    </div>
  );
};

export default IntroductionToDerivatives;
