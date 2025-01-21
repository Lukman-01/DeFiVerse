import React from 'react';

const ImpermanentLoss: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Impermanent Loss</h1>
      <p>
        Impermanent loss occurs when the value of assets provided to a liquidity pool changes relative to their value
        if held outside the pool. It is a significant challenge for liquidity providers in decentralized finance (DeFi).
      </p>

      <h2 className="text-xl font-semibold mt-4">Key Characteristics</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Losses are <strong>impermanent</strong> because they materialize only when liquidity is withdrawn.
        </li>
        <li>Trading fees and liquidity mining rewards can offset the loss.</li>
        <li>Severe losses occur during high volatility or a stablecoin de-peg.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Example Scenario</h2>
      <p>
        A liquidity provider deposits 1 ETH and 100 DAI into a pool. If the price of ETH increases significantly, the
        liquidity provider receives fewer ETH and DAI upon withdrawal than they would have held outside the pool.
      </p>

      <h2 className="text-xl font-semibold mt-4">Mitigation Strategies</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Using stablecoin-only pools to minimize volatility.</li>
        <li>Optimizing bonding curves to reduce loss exposure.</li>
        <li>Providing liquidity only in high-volume pools with low slippage risks.</li>
      </ul>
    </div>
  );
};

export default ImpermanentLoss;
