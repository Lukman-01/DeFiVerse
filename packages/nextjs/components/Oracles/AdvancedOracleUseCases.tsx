import React from 'react';

const AdvancedOracleUseCases: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Advanced Oracle Use Cases</h3>
      <p>
        Oracles are central to enabling sophisticated DeFi applications. They provide external data that powers 
        functionalities like decentralized trading, insurance, and gaming.
      </p>
      <h4 className="text-lg font-semibold mt-4">Examples of Use Cases</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Price Oracles:</strong> Decentralized exchanges like Uniswap use oracles to determine asset prices, enabling 
          fair trading and arbitrage opportunities.
        </li>
        <li>
          <strong>Insurance Contracts:</strong> Parametric insurance relies on oracles for real-time event data, such as flight delays.
        </li>
      </ul>
      <img 
        src="/oracle-use-cases.png" 
        alt="Oracle Use Cases" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Despite their utility, oracles are vulnerable to manipulation, as evidenced by the bZx price oracle attack.
      </p>
    </div>
  );
};

export default AdvancedOracleUseCases;
