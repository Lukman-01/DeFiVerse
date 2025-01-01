import React from 'react';

const WhyLending: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Why Lending?</h3>
      <p>
        Lending is one of the fundamental building blocks of finance, and its importance extends to both traditional 
        and decentralized systems. In traditional finance, lending facilitates economic activities such as 
        purchasing homes, funding businesses, and providing emergency funds. In DeFi, lending takes a new form 
        by eliminating intermediaries like banks, ensuring accessibility, transparency, and efficiency.
      </p>
      <h4 className="text-lg font-semibold mt-4">The Importance of Lending</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Liquidity Provision:</strong> Lenders provide liquidity to protocols, enabling them to fund borrowers. 
          This creates a circular economy where everyone benefits—borrowers gain access to funds, and lenders earn interest.
        </li>
        <li>
          <strong>Access to Capital:</strong> Borrowers can use their crypto assets as collateral to secure loans, 
          avoiding the need to sell their holdings during market downturns.
        </li>
        <li>
          <strong>Financial Inclusion:</strong> In DeFi, anyone with an internet connection can participate in lending 
          or borrowing, bypassing traditional barriers like credit checks or regional restrictions.
        </li>
      </ul>
      <img 
        src="/why-lending.png" 
        alt="Lending in DeFi" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">A Simple Scenario</h4>
      <p>
        Imagine Alice has 5 ETH but needs 10,000 USDC for a short-term expense. Instead of selling her ETH, she deposits 
        it into a DeFi lending protocol as collateral. She borrows 10,000 USDC against her ETH. Once she repays the loan 
        with interest, she retrieves her ETH.
      </p>
      <p>
        This mechanism ensures that Alice retains exposure to ETH's potential price increase while meeting her financial needs.
      </p>
    </div>
  );
};

export default WhyLending;
