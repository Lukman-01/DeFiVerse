import React from 'react';

const UnderCollateralizedBorrowing: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Under-Collateralized Borrowing</h3>
      <p>
        Unlike over-collateralized borrowing, under-collateralized borrowing allows borrowers to secure loans with 
        collateral valued less than the loan amount. This approach often requires additional risk mitigation strategies, 
        such as smart contract restrictions or specific use cases.
      </p>
      <h4 className="text-lg font-semibold mt-4">How It Works</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Borrowers deposit a small amount of collateral or no collateral at all, but the loan is restricted to specific use cases.
        </li>
        <li>
          The protocol often enforces the use of the borrowed funds through pre-designed smart contracts, such as 
          yield farming or liquidity provision contracts.
        </li>
        <li>
          The vault or protocol controls both the collateral and the borrowed funds, reducing risks of default.
        </li>
      </ol>
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        Alice deposits 1 ETH (worth $2,000) to borrow 3,000 DAI. However, Alice cannot freely use the borrowed DAI. 
        Instead, the protocol automatically allocates it to a yield farming contract to generate returns.
      </p>
      <img 
        src="/under-collateralized-borrowing.png" 
        alt="Under-Collateralized Borrowing Process" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        While under-collateralized borrowing is riskier, it opens opportunities for higher leverage and targeted 
        financial activities.
      </p>
    </div>
  );
};

export default UnderCollateralizedBorrowing;
