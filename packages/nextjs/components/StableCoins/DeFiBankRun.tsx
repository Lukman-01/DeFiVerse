import React from 'react';

const DeFiBankRun: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">DeFi Bank Run</h3>
      <p>
        A DeFi bank run occurs when a stablecoin loses its peg, causing panic among users who rush to exit liquidity 
        pools or redeem their tokens. This is akin to a traditional bank run but amplified by the speed of blockchain transactions.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Characteristics</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>De-Pegging Event:</strong> A trigger event, such as blacklist enforcement or loss of reserves.</li>
        <li><strong>Panic Selling:</strong> Traders rapidly exit pools, leading to price instability.</li>
      </ul>
      <img 
        src="/defi-bank-run.png" 
        alt="DeFi Bank Run" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        DeFi protocols must implement robust risk management strategies to mitigate the effects of bank runs.
      </p>
    </div>
  );
};

export default DeFiBankRun;
