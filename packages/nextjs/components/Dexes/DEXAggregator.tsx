import React from 'react';

const DEXAggregator: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">DEX Aggregator</h1>
      <p>
        DEX Aggregators are platforms or smart contracts that aggregate liquidity from multiple decentralized exchanges
        (DEXs) to provide users with the best prices for their trades.
      </p>

      <h2 className="text-xl font-semibold mt-4">Why Use DEX Aggregators?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provides the best prices by analyzing liquidity across multiple DEXs.</li>
        <li>Minimizes slippage for large trades.</li>
        <li>Saves time by routing trades automatically.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Types of Aggregators</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Off-Chain Aggregators:</strong> Platforms like 1inch and Paraswap that operate off-chain for flexibility
          but may introduce trust concerns.
        </li>
        <li>
          <strong>On-Chain Aggregators:</strong> Protocols like SwapSwap that execute trades atomically on-chain for
          increased trustlessness.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Popular Examples</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>1inch: A leading off-chain aggregator with deep liquidity pools.</li>
        <li>SwapSwap: On-chain aggregator focused on atomic routing and arbitrage.</li>
      </ul>
    </div>
  );
};

export default DEXAggregator;
