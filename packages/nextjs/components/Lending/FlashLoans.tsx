import React from 'react';

const FlashLoans: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Flash Loans</h3>
      <p>
        Flash loans are an innovative feature of DeFi that allow users to borrow funds without collateral, provided 
        that the loan is repaid within a single blockchain transaction. This atomicity ensures that the loan is risk-free 
        for the lender.
      </p>
      <h4 className="text-lg font-semibold mt-4">How Flash Loans Work</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          A borrower requests a flash loan from a protocol like Aave or dYdX.
        </li>
        <li>
          The borrower uses the funds for operations such as arbitrage, collateral swapping, or liquidation.
        </li>
        <li>
          The loan, along with a small fee, is repaid in the same transaction. If the loan cannot be repaid, 
          the entire transaction is reverted.
        </li>
      </ol>
      <h4 className="text-lg font-semibold mt-4">Use Cases</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Arbitrage:</strong> Leveraging price differences between exchanges to make risk-free profits.
        </li>
        <li>
          <strong>Collateral Swapping:</strong> Replacing an existing collateral type with another without liquidation.
        </li>
        <li>
          <strong>Liquidation:</strong> Using a flash loan to repay a borrower's debt and acquire their collateral at a discount.
        </li>
      </ul>
      <img 
        src="/flash-loans-diagram.png" 
        alt="Flash Loans Process" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        Charlie identifies a price discrepancy for ETH on two DEXs. He takes a flash loan of 100 ETH, buys ETH at a lower price 
        on DEX A, sells it at a higher price on DEX B, and repays the loan in the same transaction. The profit is his to keep.
      </p>
      <p>
        Flash loans unlock complex financial strategies and enhance market efficiency but require careful planning to execute successfully.
      </p>
    </div>
  );
};

export default FlashLoans;
