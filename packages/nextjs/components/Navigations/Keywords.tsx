import React from "react";

const keywords = [
  { term: "Blockchain", description: "A distributed digital ledger used to record transactions across many computers." },
  { term: "Cryptocurrency", description: "A digital or virtual currency secured by cryptography." },
  { term: "DeFi", description: "Decentralized Finance - a blockchain-based form of finance that doesn’t rely on central financial intermediaries." },
  { term: "Wallet", description: "A tool that allows users to store and interact with their digital assets." },
  { term: "Token", description: "A digital representation of a value or asset on a blockchain." },
  { term: "Smart Contract", description: "Self-executing contracts with the terms of the agreement directly written into code." },
  { term: "Decentralized Exchange (DEX)", description: "A peer-to-peer marketplace where users trade cryptocurrencies without intermediaries." },
  { term: "Stablecoin", description: "A cryptocurrency with a value pegged to a stable asset like USD or gold." },
  { term: "Yield Farming", description: "The practice of staking or lending crypto assets to generate returns." },
  { term: "Liquidity Pool", description: "A pool of funds locked in a smart contract used to facilitate trading on DEXs." },
  { term: "Governance Token", description: "A token that grants holders voting rights in a DeFi protocol." },
  { term: "Staking", description: "Locking up cryptocurrency to support a blockchain network and earn rewards." },
  { term: "Impermanent Loss", description: "A temporary loss of funds occurring when providing liquidity." },
  { term: "Flash Loan", description: "A type of loan that must be borrowed and repaid in the same transaction." },
  { term: "Automated Market Maker (AMM)", description: "A protocol that automates the buying and selling of digital assets." },
  { term: "Layer 2", description: "Solutions built on top of a blockchain to increase scalability and reduce costs." },
  { term: "Zero-Knowledge Proofs", description: "A method by which one party can prove to another that something is true without revealing the actual information." },
  { term: "Total Value Locked (TVL)", description: "The total value of assets locked in DeFi protocols." },
  { term: "Collateral", description: "An asset pledged as security for a loan or other financial obligation." },
  { term: "Liquidity Mining", description: "Earning rewards by providing liquidity to a protocol." },
  { term: "Cross-Chain", description: "Interoperability between different blockchain networks." },
  { term: "Decentralized Autonomous Organization (DAO)", description: "An organization managed by smart contracts and governed by token holders." },
  { term: "Gas Fee", description: "A fee paid to miners for processing transactions on a blockchain." },
  { term: "Oracles", description: "Services that provide external data to smart contracts." },
  { term: "Synthetic Assets", description: "Tokenized derivatives that represent real-world assets." },
  { term: "Bonding Curve", description: "A mathematical curve defining the price of a token relative to its supply." },
  { term: "Slippage", description: "The difference between the expected and actual price during a trade." },
  { term: "Arbitrage", description: "Taking advantage of price differences across markets for profit." },
  { term: "Fork", description: "A split in a blockchain creating two separate versions of the network." },
  { term: "Hard Fork", description: "A significant change to a blockchain protocol requiring all users to upgrade." },
  { term: "Soft Fork", description: "A backward-compatible update to a blockchain protocol." },
  { term: "Validator", description: "A participant responsible for verifying transactions on a blockchain." },
  { term: "Delegated Proof of Stake (DPoS)", description: "A consensus mechanism where stakeholders vote for delegates to validate transactions." },
  { term: "Proof of Stake (PoS)", description: "A consensus mechanism where validators are chosen based on their stake." },
  { term: "Proof of Work (PoW)", description: "A consensus mechanism where miners solve computational puzzles to validate transactions." },
  { term: "Composable", description: "The ability of DeFi protocols to interact and integrate seamlessly with each other." },
  { term: "Airdrop", description: "The distribution of free tokens to users, often for promotional purposes." },
  { term: "Tokenomics", description: "The economics and design of a token, including supply, demand, and utility." },
  { term: "Utility Token", description: "A token that grants access to a product or service within a specific ecosystem." },
  { term: "Security Token", description: "A token representing ownership or investment in a real-world asset." },
  { term: "Non-Fungible Token (NFT)", description: "A unique digital asset that cannot be exchanged on a one-to-one basis." },
  { term: "Gas Limit", description: "The maximum amount of gas a user is willing to spend on a transaction." },
  { term: "Block Explorer", description: "A tool to view blockchain transactions and data." },
  { term: "Sidechain", description: "A separate blockchain connected to the main chain, often for scalability." },
  { term: "Liquidity Provider (LP) Token", description: "A token received for providing liquidity to a pool." },
  { term: "Rebalancing", description: "Adjusting the composition of a portfolio or pool to maintain target ratios." },
  { term: "Order Book", description: "A digital list of buy and sell orders for a specific asset." },
  { term: "Market Order", description: "An order to buy or sell immediately at the best available price." },
  { term: "Limit Order", description: "An order to buy or sell at a specific price or better." },
  { term: "CeFi", description: "Centralized Finance - financial services offered by centralized organizations." },
  { term: "Permissionless", description: "A system where anyone can participate without needing approval." },
  { term: "P2P", description: "Peer-to-peer interactions without intermediaries." },
  { term: "Collateralization Ratio", description: "The ratio of collateral to the amount borrowed in a loan." },
  { term: "Interest Rate Swap", description: "A financial derivative where two parties exchange interest rate cash flows." },
  { term: "Flash Swap", description: "A trade on a DEX allowing users to borrow tokens and return them in the same transaction." },
  { term: "Fractional Ownership", description: "Dividing ownership of an asset into smaller, tokenized shares." },
  { term: "MetaMask", description: "A popular browser extension wallet for interacting with Ethereum." },
  { term: "Liquidity Depth", description: "The amount of liquidity available in a market or pool." },
  { term: "Rebase", description: "An adjustment to the supply of a token to maintain its value." },
  { term: "Wrapped Token", description: "A tokenized version of a cryptocurrency on another blockchain." },
  { term: "Gas Price", description: "The amount of Ether a user pays per unit of gas for a transaction." },
  { term: "Initial DEX Offering (IDO)", description: "A fundraising event held on a decentralized exchange." },
  { term: "Token Burn", description: "Permanently removing tokens from circulation to reduce supply." },
  { term: "HODL", description: "A term meaning to hold onto cryptocurrency rather than sell." },
  { term: "Vault", description: "A smart contract storing funds for automated strategies." },
  { term: "Bridge", description: "A tool for transferring assets between different blockchains." },
  { term: "Gas Optimization", description: "Techniques to reduce the gas cost of a transaction or contract." },
  { term: "Double Spend", description: "An attack where the same cryptocurrency is spent more than once." },
  { term: "Block Reward", description: "The reward given to miners or validators for adding a block to the blockchain." },
  { term: "Rollup", description: "A Layer 2 scaling solution aggregating transactions into batches." },
  { term: "ZK-Rollup", description: "A rollup using zero-knowledge proofs to validate transactions." },
  { term: "Optimistic Rollup", description: "A rollup assuming transactions are valid unless proven otherwise." },
  { term: "MEV (Miner Extractable Value)", description: "The value miners can extract by reordering transactions in a block." },
  { term: "Rug Pull", description: "A scam where developers abandon a project after taking users’ funds." },
  { term: "Whale", description: "An individual or entity holding large amounts of cryptocurrency." },
  { term: "Dusting Attack", description: "An attack involving sending small amounts of cryptocurrency to track a wallet’s activity." },
  { term: "Halving", description: "A scheduled reduction in the block reward for mining a cryptocurrency." },
  { term: "Epoch", description: "A set period in a blockchain system, often related to staking or mining." },
  { term: "Atomic Swap", description: "A smart contract enabling the exchange of cryptocurrencies without intermediaries." },
  { term: "Cryptographic Hash Function", description: "A function that converts input data into a fixed-length hash." },
  { term: "Cold Wallet", description: "A wallet not connected to the internet, used for secure storage." },
  { term: "Hot Wallet", description: "A wallet connected to the internet for active use." },
  { term: "Mnemonic Phrase", description: "A sequence of words used to recover a wallet." },
  { term: "Gas War", description: "Competition to include transactions in a block by paying higher gas fees." },
  { term: "Farming", description: "Earning rewards by participating in DeFi activities like providing liquidity or staking." },
  { term: "Aggregator", description: "A platform combining multiple services or data sources into one interface." },
  { term: "Key Pair", description: "A cryptographic combination of a private key and a public key." },
  { term: "Block Time", description: "The time it takes to create a new block on a blockchain." },
  { term: "Genesis Block", description: "The first block in a blockchain." },
  { term: "Nonce", description: "A random or sequential number used in cryptographic processes." }
];

const DefiKeywordsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">100 DeFi Keywords Explained</h1>
      <p className="text-center text-gray-600 mb-12">
        Learn the essential terms in Decentralized Finance (DeFi) from basic to advanced concepts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {keywords.map((keyword, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{keyword.term}</h2>
            <p className="text-gray-700 text-sm">{keyword.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefiKeywordsPage;
