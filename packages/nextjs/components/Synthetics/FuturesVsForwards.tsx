import React from 'react';

const FuturesVsForwards: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Futures vs. Forwards</h3>
      <p>
        Futures and forwards are both derivatives contracts that enable participants to trade assets at a predetermined 
        price on a future date. However, they differ significantly in terms of structure, risk, and trading mechanisms.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Differences</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Futures:</strong> Standardized contracts traded on exchanges, marked to market daily to minimize 
          counterparty risk.
        </li>
        <li>
          <strong>Forwards:</strong> Custom contracts traded over-the-counter (OTC), with high counterparty risk as no 
          collateral is exchanged until settlement.
        </li>
      </ul>
      <img 
        src="/futures-vs-forwards.png" 
        alt="Futures vs. Forwards" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Futures contracts are more liquid and accessible due to their standardized nature, whereas forwards offer 
        flexibility at the cost of increased risk.
      </p>
    </div>
  );
};

export default FuturesVsForwards;
