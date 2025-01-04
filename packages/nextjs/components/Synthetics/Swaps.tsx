import React from 'react';

const Swaps: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Swaps</h3>
      <p>
        Swaps are bilateral agreements where two parties exchange financial obligations, typically based on 
        interest rates, currencies, or other variables.
      </p>
      <h4 className="text-lg font-semibold mt-4">Types of Swaps</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Fixed-for-Floating Swaps:</strong> One party pays a fixed interest rate, while the other pays a floating rate.
        </li>
        <li>
          <strong>Credit Default Swaps (CDS):</strong> A type of insurance contract where the seller compensates the buyer 
          in case of a credit event, such as default.
        </li>
      </ul>
      <img 
        src="/swaps.png" 
        alt="Swaps in Derivatives" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Swaps are widely used in risk management, allowing participants to hedge or gain exposure to specific economic risks.
      </p>
    </div>
  );
};

export default Swaps;
