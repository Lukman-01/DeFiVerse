import React from 'react';

const WhatIsStable: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">What is "Stable"?</h3>
      <p>
        Stability in the context of stablecoins refers to their ability to maintain a consistent value relative to 
        a reference asset, such as the US dollar. However, it is important to note that stablecoins are not perfectly 
        stable but are relatively more stable than cryptocurrencies like Bitcoin or Ethereum.
      </p>
      <h4 className="text-lg font-semibold mt-4">Metrics of Stability</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Volatility:</strong> Measured as the standard deviation of returns over a period.</li>
        <li><strong>Worst Drop:</strong> The maximum loss over a specific timeframe.</li>
      </ul>
      <img 
        src="/stablecoin-stability.png" 
        alt="Stability Metrics" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        For example, fiat currencies like EUR or GBP exhibit a volatility of 6-12%, while stablecoins aim to minimize 
        these fluctuations even further.
      </p>
    </div>
  );
};

export default WhatIsStable;
