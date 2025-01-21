import React from 'react';

const PeggedAndStablecoinAMM: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pegged and Stablecoin AMM</h1>
      <p>
        Pegged and Stablecoin AMMs are specialized decentralized exchanges designed to facilitate efficient trading of
        assets with stable values, such as stablecoins.
      </p>

      <h2 className="text-xl font-semibold mt-4">Unique Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Maintains low slippage for large trades due to deep liquidity pools.</li>
        <li>
          Supports stablecoin trading pairs like USDC/DAI and derivative assets like WBTC/renBTC.
        </li>
        <li>Prices typically remain close to 1:1 ratios for stablecoins.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Challenges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Higher gas costs for trades compared to standard AMMs.</li>
        <li>Risk of de-pegging due to external market factors.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Example Protocols</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Curve Finance:</strong> Optimized for stablecoins with reduced slippage and arbitrage opportunities.
        </li>
      </ul>
    </div>
  );
};

export default PeggedAndStablecoinAMM;
