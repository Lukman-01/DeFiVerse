import React from 'react';

const StablecoinTypes: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Stablecoin Types</h3>
      <p>
        Stablecoins can be categorized based on their underlying mechanism for maintaining price stability. These include:
      </p>
      <h4 className="text-lg font-semibold mt-4">1. Reserve-Based Stablecoins</h4>
      <p>
        Backed by fiat reserves, such as USD, held in a centralized entity. Examples include USDT and USDC.
      </p>
      <h4 className="text-lg font-semibold mt-4">2. Collateral-Based Stablecoins</h4>
      <p>
        Over-collateralized by other cryptocurrencies. MakerDAO's DAI is a prominent example.
      </p>
      <h4 className="text-lg font-semibold mt-4">3. Algorithmic Stablecoins</h4>
      <p>
        Operate without collateral, relying on supply and demand adjustments. Ampleforth (AMPL) is a popular example.
      </p>
      <img 
        src="/stablecoin-types.png" 
        alt="Stablecoin Types" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Each type of stablecoin has its trade-offs, balancing decentralization, scalability, and stability.
      </p>
    </div>
  );
};

export default StablecoinTypes;
