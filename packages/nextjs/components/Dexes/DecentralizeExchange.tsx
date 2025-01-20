import React from 'react';

const DecentralizedExchanges: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Decentralized Exchanges (DEX)</h1>
      <p>
        Decentralized Exchanges (DEXs) are platforms that enable peer-to-peer trading of cryptocurrencies and other assets
        without requiring a central authority or intermediary. They leverage smart contracts to automate and enforce trade
        settlements, ensuring transparency and trustlessness.
      </p>

      <h2 className="text-xl font-semibold mt-4">Why DEXs Matter</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Eliminates the need for intermediaries, reducing counterparty risks.</li>
        <li>Provides global and permissionless access to trading markets.</li>
        <li>Enhances user privacy by avoiding Know Your Customer (KYC) requirements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Key Components of DEXs</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trade Matching:</strong> Orders are matched using on-chain or off-chain mechanisms, depending on the
          design of the DEX.
        </li>
        <li>
          <strong>Trade Settlement:</strong> Smart contracts are used to facilitate and finalize transactions securely
          on-chain.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Advantages</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>No custodial risks—users retain control of their private keys.</li>
        <li>Transparent operations with auditable smart contracts.</li>
        <li>Supports decentralized finance (DeFi) protocols and interoperability.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Challenges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lower trading volume and liquidity compared to centralized exchanges (CEXs).</li>
        <li>Susceptibility to miner/trader front-running and sandwich attacks.</li>
        <li>Limited support for fiat currency trading.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Examples of DEXs</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uniswap: A leading Automated Market Maker (AMM) platform.</li>
        <li>Sushiswap: A community-driven DEX with additional DeFi features.</li>
        <li>Balancer: A multi-token AMM designed for flexible liquidity pools.</li>
      </ul>

      <img
        src="/dex-system-architecture.png"
        alt="DEX System Architecture"
        className="my-4 w-full max-w-lg mx-auto"
      />

      <p>
        DEXs represent a critical innovation in blockchain technology, enabling secure and decentralized trading without
        reliance on centralized authorities. They empower users to take full control of their assets and participate in a
        truly decentralized financial ecosystem.
      </p>
    </div>
  );
};

export default DecentralizedExchanges;
