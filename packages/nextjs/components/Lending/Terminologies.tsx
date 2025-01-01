import React from 'react';

const Terminologies: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Key Terminologies in DeFi Lending</h3>
      <p>
        DeFi lending involves several unique concepts that distinguish it from traditional lending systems. Below are some of the 
        most important terms that every DeFi participant should understand.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Terms Explained</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Collateral:</strong> Assets pledged by a borrower as security for a loan. If the borrower fails to 
          repay the loan, the collateral is liquidated to cover the debt.
        </li>
        <li>
          <strong>Over-Collateralization:</strong> Borrowers must deposit assets worth more than the loan amount. 
          For example, to borrow $10,000 in DAI, a borrower might need to deposit $15,000 worth of ETH.
        </li>
        <li>
          <strong>Under-Collateralization:</strong> In some cases, borrowers can secure loans without fully collateralizing 
          them, but these loans are typically restricted to specific use cases or require additional risk management.
        </li>
        <li>
          <strong>Health Factor:</strong> A numeric representation of the borrower's risk of liquidation. A health factor 
          above 1 is safe, while anything below 1 risks liquidation.
        </li>
        <li>
          <strong>Liquidation:</strong> The process of selling a borrower's collateral when its value falls below a 
          specific threshold, ensuring lenders are repaid.
        </li>
      </ul>
      <img 
        src="/terminologies-diagram.png" 
        alt="Terminology Relationship" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        These terms provide the foundation for understanding how DeFi lending operates, allowing participants to 
        navigate the ecosystem with confidence.
      </p>
    </div>
  );
};

export default Terminologies;
