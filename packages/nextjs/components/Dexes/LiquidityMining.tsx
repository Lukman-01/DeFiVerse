import React from 'react';

const LiquidityMining: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liquidity Mining</h1>
      <p>
        Liquidity mining incentivizes users to provide liquidity to decentralized exchanges by offering rewards in
        addition to trading fees.
      </p>

      <h2 className="text-xl font-semibold mt-4">How It Works</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Liquidity providers deposit assets into a pool, enabling traders to swap tokens efficiently.
        </li>
        <li>
          Rewards are proportional to the amount of liquidity provided and may include:
          <ul className="list-disc pl-8">
            <li>Trading fees (e.g., 0.03% on Curve pools).</li>
            <li>Liquidity mining rewards in the platform’s native tokens.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Advantages</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Encourages liquidity provision in nascent DeFi protocols.</li>
        <li>Boosts user engagement through rewards.</li>
        <li>Retroactive rewards (airdrops) incentivize long-term participation.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Challenges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Rewards may attract short-term speculators rather than long-term liquidity providers.</li>
        <li>High gas costs can diminish returns for smaller liquidity providers.</li>
      </ul>
    </div>
  );
};

export default LiquidityMining;
