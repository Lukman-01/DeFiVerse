import React from 'react';

const SyntheticAssetsAndSynthetix: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Synthetic Assets and Synthetix</h3>
      <p>
        Synthetic assets are tokenized representations of real-world assets or financial positions, allowing users to gain 
        exposure to various markets without directly holding the underlying asset. Platforms like Synthetix facilitate the 
        creation and trading of synthetic assets in DeFi.
      </p>
      <h4 className="text-lg font-semibold mt-4">How Synthetix Works</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Users deposit SNX as collateral to mint synthetic assets (Synths) such as sUSD, sBTC, or sETH, maintaining a 
          collateralization ratio (e.g., 400%).
        </li>
        <li>
          Synths are traded using oracle-driven prices, ensuring liquidity and price accuracy.
        </li>
        <li>
          Collateral is unlocked by burning the Synths, repaying the debt.
        </li>
      </ul>
      <img 
        src="/synthetic-assets.png" 
        alt="Synthetix Mechanism" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Synthetic assets democratize access to global markets while minimizing counterparty risk and maximizing liquidity.
      </p>
    </div>
  );
};

export default SyntheticAssetsAndSynthetix;
