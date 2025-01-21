import React from 'react';

const BlockchainExtractableValue: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blockchain Extractable Value (BEV)</h1>
      <p>
        BEV (formerly known as Miner Extractable Value) refers to the profit miners or validators can extract by reordering,
        including, or censoring transactions within blocks.
      </p>

      <h2 className="text-xl font-semibold mt-4">Types of BEV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Arbitrage:</strong> Exploiting price discrepancies across different platforms or liquidity pools.
        </li>
        <li>
          <strong>Liquidations:</strong> Targeting leveraged positions that fall below collateralization thresholds.
        </li>
        <li>
          <strong>Sandwich Attacks:</strong> Manipulating trades around a victim’s transaction.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Impact of BEV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Reduces trust in blockchain fairness and decentralization.</li>
        <li>Increases transaction costs for users.</li>
        <li>Can incentivize chain reorganization and centralization risks.</li>
      </ul>
    </div>
  );
};

export default BlockchainExtractableValue;
