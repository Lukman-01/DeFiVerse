import React from 'react';

const OverCollateralizedBorrowing: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Over-Collateralized Borrowing</h3>
      <p>
        Over-collateralized borrowing is a cornerstone of DeFi lending protocols. It requires borrowers to deposit 
        more collateral than the value of the loan they wish to take. This mechanism ensures lenders are protected, 
        even in volatile market conditions.
      </p>
      <h4 className="text-lg font-semibold mt-4">How It Works</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          A borrower deposits collateral (e.g., ETH) into a DeFi lending protocol.
        </li>
        <li>
          The borrower receives a loan in the form of a stablecoin (e.g., DAI) or another crypto asset.
        </li>
        <li>
          The value of the collateral is continuously monitored. If its value drops significantly, the borrower's 
          position may be liquidated to protect the lender.
        </li>
      </ol>
      <img 
        src="/over-collateralized-borrowing.png" 
        alt="Over-Collateralized Borrowing Process" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        Bob deposits 10 ETH (worth $30,000) as collateral to borrow 15,000 DAI. If the value of ETH drops to $2,000 
        per ETH, Bob's health factor might fall below 1, triggering liquidation. To avoid this, Bob can add more collateral.
      </p>
      <p>
        This approach ensures the lending pool remains solvent while giving borrowers flexibility.
      </p>
    </div>
  );
};

export default OverCollateralizedBorrowing;
