import React from 'react';

const SandwichAttacks: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sandwich Attacks</h1>
      <p>
        Sandwich attacks exploit price slippage in Automated Market Makers (AMMs) by placing transactions around a victim’s
        trade.
      </p>

      <h2 className="text-xl font-semibold mt-4">How Sandwich Attacks Work</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          The attacker observes a pending transaction and places a buy order just before it to raise the price of the
          asset.
        </li>
        <li>
          After the victim’s trade executes at the inflated price, the attacker sells their assets at a profit, causing
          price slippage.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Consequences</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Victims experience worse execution prices and incur financial losses.</li>
        <li>Exacerbates network congestion and increases transaction costs.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Mitigation Strategies</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Implement slippage protection thresholds to reject trades with excessive slippage.</li>
        <li>Design AMMs with front-running-resistant architectures.</li>
        <li>Use private transaction relays to hide pending trades.</li>
      </ul>
    </div>
  );
};

export default SandwichAttacks;
