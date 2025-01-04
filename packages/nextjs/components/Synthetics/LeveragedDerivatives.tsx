import React from 'react';

const LeveragedDerivatives: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Leveraged Derivatives</h3>
      <p>
        Leveraged derivatives allow participants to amplify their exposure to market movements by using borrowed funds. 
        Common examples include repos, perpetuals, and margin trading.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Mechanisms</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Repos:</strong> Overcollateralized loans where securities are used as collateral to borrow cash.
        </li>
        <li>
          <strong>Perpetuals:</strong> Synthetic assets with no expiry date, where funding rates align prices with the spot market.
        </li>
      </ul>
      <img 
        src="/leveraged-derivatives.png" 
        alt="Leveraged Derivatives" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Leveraged derivatives increase potential gains but also amplify risks, making risk management crucial.
      </p>
    </div>
  );
};

export default LeveragedDerivatives;
