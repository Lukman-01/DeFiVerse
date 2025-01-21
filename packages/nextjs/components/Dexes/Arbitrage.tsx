import React from 'react';

const Arbitrage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Arbitrage</h1>
      <p>
        Arbitrage involves exploiting price differences for the same asset across multiple markets to generate profits. 
        It plays a critical role in synchronizing prices and enhancing market efficiency.
      </p>

      <h2 className="text-xl font-semibold mt-4">How Arbitrage Works</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Traders identify assets with different prices across exchanges or liquidity pools.</li>
        <li>Buy the asset at a lower price on one platform and sell it at a higher price on another.</li>
        <li>Arbitrage opportunities arise due to inefficiencies or delays in price updates.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Advanced Techniques</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Flash Loans:</strong> Enable arbitrage without requiring upfront capital by borrowing funds for the
          duration of the transaction.
        </li>
        <li>
          <strong>Algorithmic Approaches:</strong> Techniques like the Bellman-Ford algorithm are used to detect negative
          price cycles across multiple markets.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Impact of Arbitrage</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Balances prices across decentralized and centralized exchanges.</li>
        <li>Enhances liquidity and trading volume.</li>
        <li>Provides profits to traders while maintaining market efficiency.</li>
      </ul>
    </div>
  );
};

export default Arbitrage;
