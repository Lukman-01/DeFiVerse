import React from 'react';

const MarginAndMarkingToMarket: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Margin and Marking to Market</h3>
      <p>
        Margin systems are essential for reducing default risks in derivatives markets. They involve the use of initial 
        and maintenance margins, where participants must deposit a percentage of the contract’s value upfront. The process 
        of marking to market ensures that positions are revalued daily to reflect the current market price, helping prevent 
        default by adjusting margins as necessary.
      </p>
      <h4 className="text-lg font-semibold mt-4">How It Works</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Initial Margin:</strong> The amount that needs to be deposited upfront to open a position.</li>
        <li><strong>Maintenance Margin:</strong> The minimum margin required to maintain the position. If it drops too low, a margin call is triggered.</li>
        <li><strong>Marking to Market:</strong> Daily adjustments to the contract’s value based on the market price, ensuring that profits and losses are immediately reflected in the account.</li>
      </ul>
      <img 
        src="/margin-marking-to-market.png" 
        alt="Margin and Marking to Market" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        These mechanisms provide stability to the markets by minimizing the risk of defaults and ensuring liquidity.
      </p>
    </div>
  );
};

export default MarginAndMarkingToMarket;
