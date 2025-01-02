import React from 'react';

const IntroductionToOracles: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Introduction to Oracles</h3>
      <p>
        Oracles serve as bridges between blockchains and the real world, allowing smart contracts to interact with 
        off-chain data. They are essential for enabling a wide variety of DeFi applications that rely on external 
        information, such as asset prices, weather data, or sports results.
      </p>
      <h4 className="text-lg font-semibold mt-4">Why Oracles Matter</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>DeFi applications like lending and insurance rely heavily on real-time data feeds.</li>
        <li>Without oracles, blockchains are isolated and cannot access external information.</li>
      </ul>
      <img 
        src="/oracles-introduction.png" 
        alt="Role of Oracles in DeFi" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Oracles ensure the reliability and accuracy of data, enabling trustless execution of smart contracts.
      </p>
    </div>
  );
};

export default IntroductionToOracles;
