import React from 'react';

const AutomatedMarketMaker: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Automated Market Maker (AMM)</h1>
      <p>
        Automated Market Makers (AMMs) are decentralized trading mechanisms that replace traditional order book systems
        with liquidity pools governed by smart contracts. They enable continuous and decentralized trading of assets.
      </p>

      <h2 className="text-xl font-semibold mt-4">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Instant liquidity, regardless of trade size.</li>
        <li>Prices are dynamically adjusted based on pool reserves using formulas like Constant Product (x * y = k).</li>
        <li>Eliminates the need for centralized intermediaries in trades.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Challenges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Impermanent loss when liquidity providers withdraw their funds.</li>
        <li>High slippage in low-liquidity pools.</li>
        <li>Susceptibility to arbitrage and sandwich attacks.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Popular Examples</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Uniswap:</strong> Pioneered the Constant Product Model.
        </li>
        <li>
          <strong>Curve Finance:</strong> Optimized for stablecoin trading with minimal slippage.
        </li>
        <li>
          <strong>Balancer:</strong> Supports multi-token pools with customizable ratios.
        </li>
      </ul>
    </div>
  );
};

export default AutomatedMarketMaker;
