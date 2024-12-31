import React from 'react';

export default function IntroductionToDeFi() {
  return (
    <div>
      <h3>What is Decentralized Finance (DeFi)?</h3>
      <p>
        DeFi, or Decentralized Finance, is an alternative financial system that operates on blockchain technology. Unlike CeFi, DeFi eliminates intermediaries and gives users full control over their assets.
      </p>
      <h4>Key Principles of DeFi</h4>
      <ul className="list-disc pl-6">
        <li><strong>Permissionless:</strong> Open to anyone with internet access.</li>
        <li><strong>Non-Custodial:</strong> Users retain control of their funds.</li>
        <li><strong>Programmable:</strong> Automated processes through smart contracts.</li>
      </ul>
      <img 
        src="/defi-diagram.png" 
        alt="DeFi Structure" 
        className="my-4 w-full max-w-lg mx-auto"
      />
      <p>
        DeFi is built on public blockchain platforms, such as Ethereum, and powers applications like lending, borrowing, and trading without the need for banks or traditional institutions.
      </p>
    </div>
  );
}
