import React from 'react';

export default function RiskAndSecurity() {
  return (
    <div>
      <h3>Risks and Security in DeFi</h3>
      <p>
        While Decentralized Finance (DeFi) offers many advantages, it also comes with a variety of risks that users must understand to safely navigate the ecosystem. These risks can be broadly categorized into technical, economic, and systemic risks.
      </p>

      <h4>Types of Risks in DeFi</h4>
      <ul className="list-disc pl-6">
        <li>
          <strong>Smart Contract Vulnerabilities:</strong> DeFi platforms rely on smart contracts, which are prone to bugs and exploits if not audited properly.
          <ul className="list-disc pl-10">
            <li>Example: The 2020 DAO exploit, where attackers drained $60M due to a reentrancy vulnerability.</li>
          </ul>
        </li>
        <li>
          <strong>Oracle Manipulation:</strong> DeFi protocols often depend on oracles to fetch off-chain data. Attackers can exploit oracles to manipulate prices.
          <ul className="list-disc pl-10">
            <li>Example: An attacker could fake a price spike to liquidate positions unfairly.</li>
          </ul>
        </li>
        <li>
          <strong>Economic Risks:</strong> Risks such as impermanent loss in liquidity pools, high slippage in trades, or insufficient collateral leading to liquidations.
          <ul className="list-disc pl-10">
            <li>Example: Impermanent loss affects liquidity providers in automated market makers (AMMs).</li>
          </ul>
        </li>
        <li>
          <strong>Systemic Risks:</strong> Interconnected DeFi protocols amplify risks; a failure in one protocol can cascade into others.
          <ul className="list-disc pl-10">
            <li>Example: The 2022 Luna-Terra crash caused ripple effects across multiple DeFi platforms.</li>
          </ul>
        </li>
        <li>
          <strong>Front-Running and MEV:</strong> Miners or bots can reorder transactions to maximize profits, often at the expense of users.
          <ul className="list-disc pl-10">
            <li>Example: Sandwich attacks in DEX trades result in higher costs for users.</li>
          </ul>
        </li>
      </ul>

      <h4>DeFi Security Practices</h4>
      <p>
        Users and developers can mitigate risks in DeFi by adopting the following best practices:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Auditing:</strong> Ensure smart contracts are audited by reputable firms before deployment.</li>
        <li><strong>Using Reputable Protocols:</strong> Engage with well-established and transparent DeFi platforms.</li>
        <li><strong>Understanding Risks:</strong> Research the risks of participating in specific DeFi activities like yield farming or staking.</li>
        <li><strong>Insurance:</strong> Some DeFi protocols, like Nexus Mutual, offer insurance against smart contract failures.</li>
        <li><strong>Portfolio Diversification:</strong> Avoid putting all funds into a single protocol to minimize potential losses.</li>
      </ul>

      <h4>DeFi Security in Action</h4>
      <p>
        DeFi security is an ongoing challenge, but the community is constantly innovating to improve protocol safety. Initiatives like bug bounty programs, formal verification, and decentralized governance help create a more secure ecosystem.
      </p>

      <img
        src="/defi-risks.png"
        alt="Types of Risks in DeFi"
        className="my-4 w-full max-w-lg mx-auto"
      />

      <p>
        As a participant in DeFi, always conduct due diligence before using a protocol and stay updated on emerging risks and solutions. 
      </p>
    </div>
  );
}
