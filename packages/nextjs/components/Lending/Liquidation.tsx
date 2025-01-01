import React from 'react';

const Liquidation: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Liquidation</h3>
      <p>
        Liquidation occurs when a borrower’s collateral value falls below the required threshold. It ensures the lending 
        protocol remains solvent by selling the borrower’s collateral to repay the outstanding debt.
      </p>
      <h4 className="text-lg font-semibold mt-4">Types of Liquidation</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Fixed Spread Liquidation:</strong> The liquidator repays the debt and receives the collateral at a 
          predefined discount (e.g., 5-15% in Aave).
        </li>
        <li>
          <strong>Auction-Based Liquidation:</strong> Multiple liquidators bid for the collateral in an auction, which 
          could be either an English or Dutch auction.
        </li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        Bob borrows 10,000 DAI by depositing 15 ETH (worth $30,000). If the price of ETH drops to $1,500, his 
        collateral value falls to $22,500, which is below the liquidation threshold. A liquidator repays Bob’s debt 
        and receives the ETH at a discounted price.
      </p>
      <img 
        src="/liquidation-process.png" 
        alt="Liquidation Process" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Why Liquidation Matters</h4>
      <p>
        Liquidation protects the protocol’s solvency, ensuring that lenders can reclaim their funds even in volatile 
        market conditions.
      </p>
    </div>
  );
};

export default Liquidation;
