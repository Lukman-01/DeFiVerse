// import React from "react";

// const keywords = [
//   { term: "Blockchain", description: "A distributed digital ledger used to record transactions across many computers." },
//   { term: "Cryptocurrency", description: "A digital or virtual currency secured by cryptography." },
//   { term: "DeFi", description: "Decentralized Finance - a blockchain-based form of finance that doesn’t rely on central financial intermediaries." },
//   { term: "Wallet", description: "A tool that allows users to store and interact with their digital assets." },
//   { term: "Token", description: "A digital representation of a value or asset on a blockchain." },
//   { term: "Smart Contract", description: "Self-executing contracts with the terms of the agreement directly written into code." },
//   { term: "Decentralized Exchange (DEX)", description: "A peer-to-peer marketplace where users trade cryptocurrencies without intermediaries." },
//   { term: "Stablecoin", description: "A cryptocurrency with a value pegged to a stable asset like USD or gold." },
//   { term: "Yield Farming", description: "The practice of staking or lending crypto assets to generate returns." },
//   { term: "Liquidity Pool", description: "A pool of funds locked in a smart contract used to facilitate trading on DEXs." },
//   { term: "Governance Token", description: "A token that grants holders voting rights in a DeFi protocol." },
//   { term: "Staking", description: "Locking up cryptocurrency to support a blockchain network and earn rewards." },
//   { term: "Impermanent Loss", description: "A temporary loss of funds occurring when providing liquidity." },
//   { term: "Flash Loan", description: "A type of loan that must be borrowed and repaid in the same transaction." },
//   { term: "Automated Market Maker (AMM)", description: "A protocol that automates the buying and selling of digital assets." },
//   { term: "Layer 2", description: "Solutions built on top of a blockchain to increase scalability and reduce costs." },
//   { term: "Zero-Knowledge Proofs", description: "A method by which one party can prove to another that something is true without revealing the actual information." },
//   { term: "Total Value Locked (TVL)", description: "The total value of assets locked in DeFi protocols." },
//   { term: "Collateral", description: "An asset pledged as security for a loan or other financial obligation." },
//   { term: "Liquidity Mining", description: "Earning rewards by providing liquidity to a protocol." },
//   { term: "Cross-Chain", description: "Interoperability between different blockchain networks." },
//   { term: "Decentralized Autonomous Organization (DAO)", description: "An organization managed by smart contracts and governed by token holders." },
//   { term: "Gas Fee", description: "A fee paid to miners for processing transactions on a blockchain." },
//   { term: "Oracles", description: "Services that provide external data to smart contracts." },
//   { term: "Synthetic Assets", description: "Tokenized derivatives that represent real-world assets." },
//   { term: "Bonding Curve", description: "A mathematical curve defining the price of a token relative to its supply." },
//   { term: "Slippage", description: "The difference between the expected and actual price during a trade." },
//   { term: "Arbitrage", description: "Taking advantage of price differences across markets for profit." },
//   { term: "Fork", description: "A split in a blockchain creating two separate versions of the network." },
//   { term: "Hard Fork", description: "A significant change to a blockchain protocol requiring all users to upgrade." },
//   { term: "Soft Fork", description: "A backward-compatible update to a blockchain protocol." },
//   { term: "Validator", description: "A participant responsible for verifying transactions on a blockchain." },
//   { term: "Delegated Proof of Stake (DPoS)", description: "A consensus mechanism where stakeholders vote for delegates to validate transactions." },
//   { term: "Proof of Stake (PoS)", description: "A consensus mechanism where validators are chosen based on their stake." },
//   { term: "Proof of Work (PoW)", description: "A consensus mechanism where miners solve computational puzzles to validate transactions." },
//   { term: "Composable", description: "The ability of DeFi protocols to interact and integrate seamlessly with each other." },
//   { term: "Airdrop", description: "The distribution of free tokens to users, often for promotional purposes." },
//   { term: "Tokenomics", description: "The economics and design of a token, including supply, demand, and utility." },
//   { term: "Utility Token", description: "A token that grants access to a product or service within a specific ecosystem." },
//   { term: "Security Token", description: "A token representing ownership or investment in a real-world asset." },
//   { term: "Non-Fungible Token (NFT)", description: "A unique digital asset that cannot be exchanged on a one-to-one basis." },
//   { term: "Gas Limit", description: "The maximum amount of gas a user is willing to spend on a transaction." },
//   { term: "Block Explorer", description: "A tool to view blockchain transactions and data." },
//   { term: "Sidechain", description: "A separate blockchain connected to the main chain, often for scalability." },
//   { term: "Liquidity Provider (LP) Token", description: "A token received for providing liquidity to a pool." },
//   { term: "Rebalancing", description: "Adjusting the composition of a portfolio or pool to maintain target ratios." },
//   { term: "Order Book", description: "A digital list of buy and sell orders for a specific asset." },
//   { term: "Market Order", description: "An order to buy or sell immediately at the best available price." },
//   { term: "Limit Order", description: "An order to buy or sell at a specific price or better." },
//   { term: "CeFi", description: "Centralized Finance - financial services offered by centralized organizations." },
//   { term: "Permissionless", description: "A system where anyone can participate without needing approval." },
//   { term: "P2P", description: "Peer-to-peer interactions without intermediaries." },
//   { term: "Collateralization Ratio", description: "The ratio of collateral to the amount borrowed in a loan." },
//   { term: "Interest Rate Swap", description: "A financial derivative where two parties exchange interest rate cash flows." },
//   { term: "Flash Swap", description: "A trade on a DEX allowing users to borrow tokens and return them in the same transaction." },
//   { term: "Fractional Ownership", description: "Dividing ownership of an asset into smaller, tokenized shares." },
//   { term: "MetaMask", description: "A popular browser extension wallet for interacting with Ethereum." },
//   { term: "Liquidity Depth", description: "The amount of liquidity available in a market or pool." },
//   { term: "Rebase", description: "An adjustment to the supply of a token to maintain its value." },
//   { term: "Wrapped Token", description: "A tokenized version of a cryptocurrency on another blockchain." },
//   { term: "Gas Price", description: "The amount of Ether a user pays per unit of gas for a transaction." },
//   { term: "Initial DEX Offering (IDO)", description: "A fundraising event held on a decentralized exchange." },
//   { term: "Token Burn", description: "Permanently removing tokens from circulation to reduce supply." },
//   { term: "HODL", description: "A term meaning to hold onto cryptocurrency rather than sell." },
//   { term: "Vault", description: "A smart contract storing funds for automated strategies." },
//   { term: "Bridge", description: "A tool for transferring assets between different blockchains." },
//   { term: "Gas Optimization", description: "Techniques to reduce the gas cost of a transaction or contract." },
//   { term: "Double Spend", description: "An attack where the same cryptocurrency is spent more than once." },
//   { term: "Block Reward", description: "The reward given to miners or validators for adding a block to the blockchain." },
//   { term: "Rollup", description: "A Layer 2 scaling solution aggregating transactions into batches." },
//   { term: "ZK-Rollup", description: "A rollup using zero-knowledge proofs to validate transactions." },
//   { term: "Optimistic Rollup", description: "A rollup assuming transactions are valid unless proven otherwise." },
//   { term: "MEV (Miner Extractable Value)", description: "The value miners can extract by reordering transactions in a block." },
//   { term: "Rug Pull", description: "A scam where developers abandon a project after taking users’ funds." },
//   { term: "Whale", description: "An individual or entity holding large amounts of cryptocurrency." },
//   { term: "Dusting Attack", description: "An attack involving sending small amounts of cryptocurrency to track a wallet’s activity." },
//   { term: "Halving", description: "A scheduled reduction in the block reward for mining a cryptocurrency." },
//   { term: "Epoch", description: "A set period in a blockchain system, often related to staking or mining." },
//   { term: "Atomic Swap", description: "A smart contract enabling the exchange of cryptocurrencies without intermediaries." },
//   { term: "Cryptographic Hash Function", description: "A function that converts input data into a fixed-length hash." },
//   { term: "Cold Wallet", description: "A wallet not connected to the internet, used for secure storage." },
//   { term: "Hot Wallet", description: "A wallet connected to the internet for active use." },
//   { term: "Mnemonic Phrase", description: "A sequence of words used to recover a wallet." },
//   { term: "Gas War", description: "Competition to include transactions in a block by paying higher gas fees." },
//   { term: "Farming", description: "Earning rewards by participating in DeFi activities like providing liquidity or staking." },
//   { term: "Aggregator", description: "A platform combining multiple services or data sources into one interface." },
//   { term: "Key Pair", description: "A cryptographic combination of a private key and a public key." },
//   { term: "Block Time", description: "The time it takes to create a new block on a blockchain." },
//   { term: "Genesis Block", description: "The first block in a blockchain." },
//   { term: "Nonce", description: "A random or sequential number used in cryptographic processes." }
// ];

// const DefiKeywordsPage: React.FC = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8 font-sans">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">100 DeFi Keywords Explained</h1>
//       <p className="text-center text-gray-600 mb-12">
//         Learn the essential terms in Decentralized Finance (DeFi) from basic to advanced concepts.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {keywords.map((keyword, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <h2 className="text-xl font-semibold text-blue-700 mb-2">{keyword.term}</h2>
//             <p className="text-gray-700 text-sm">{keyword.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DefiKeywordsPage;

import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

const keywords = [
  {
    term: "Blockchain",
    description: "A distributed digital ledger that records transactions across a network of computers. Think of it as a digital book where each page (block) contains a list of transactions, and once written, cannot be altered. Every participant in the network has a copy of this book, ensuring transparency and security.",
    example: "Like Bitcoin's blockchain, which records every Bitcoin transaction ever made."
  },
  {
    term: "Cryptocurrency",
    description: "A digital or virtual form of money that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies are typically decentralized systems based on blockchain technology.",
    example: "Bitcoin (BTC) and Ethereum (ETH) are the two most well-known cryptocurrencies."
  },
  {
    term: "DeFi (Decentralized Finance)",
    description: "A financial system built on blockchain technology that removes traditional intermediaries like banks and institutions. DeFi allows for lending, borrowing, trading, and earning interest on crypto assets through automated systems.",
    example: "Using Aave to lend your crypto and earn interest, or Uniswap to trade tokens directly."
  },
  {
    term: "Smart Contract",
    description: "Self-executing programs stored on a blockchain that automatically run when predetermined conditions are met. They automate agreements so all participants can be immediately certain of the outcome, without an intermediary's involvement.",
    example: "A smart contract that automatically sends payment to a seller when a courier confirms delivery."
  },
  {
    term: "Wallet",
    description: "A digital tool that allows users to store, send, and receive cryptocurrencies. It consists of a public address (like an email address) and a private key (like a password). There are hot wallets (connected to the internet) and cold wallets (offline storage).",
    example: "MetaMask is a popular hot wallet, while Ledger is a well-known cold wallet."
  },
  {
    term: "Token",
    description: "A digital unit of value created on an existing blockchain. Unlike coins, which have their own blockchain, tokens are built on top of existing platforms like Ethereum. They can represent assets, utilities, or governance rights.",
    example: "USDC is a token on Ethereum representing US dollars, while UNI tokens grant voting rights in Uniswap."
  },
  {
    term: "Decentralized Exchange (DEX)",
    description: "A peer-to-peer marketplace where users trade cryptocurrencies directly from their wallets, without a central authority. DEXs use smart contracts to execute trades automatically and maintain liquidity pools.",
    example: "Uniswap and SushiSwap are popular DEXs where users can trade any ERC-20 tokens."
  },
  {
    term: "Stablecoin",
    description: "A type of cryptocurrency designed to maintain a stable value by pegging it to an external asset, usually the US dollar. They provide stability in the volatile crypto market and serve as a bridge between traditional and crypto finance.",
    example: "USDC and USDT are stablecoins that maintain a 1:1 value with the US dollar."
  },
  {
    term: "Yield Farming",
    description: "A practice of maximizing returns by deploying crypto assets across various DeFi protocols. Farmers move their assets between different platforms to earn the highest possible combination of rewards and interest.",
    example: "Providing liquidity on Uniswap while staking the LP tokens on another platform for additional rewards."
  },
  {
    term: "Liquidity Pool",
    description: "A collection of crypto assets locked in a smart contract to facilitate trading on DEXs. Liquidity providers deposit token pairs and earn fees from trades that occur in their pool.",
    example: "The ETH/USDC pool on Uniswap where users can swap between ETH and USDC."
  },
  {
    term: "Governance Token",
    description: "Tokens that give holders voting rights in a protocol's decision-making process. These tokens allow communities to propose and vote on changes to the protocol's parameters, features, or treasury use.",
    example: "AAVE token holders can vote on protocol upgrades and risk parameters in the Aave ecosystem."
  },
  {
    term: "Staking",
    description: "The process of locking up cryptocurrency to support network operations and earn rewards. Stakers typically validate transactions and maintain network security in proof-of-stake systems.",
    example: "Staking 32 ETH to become a validator on Ethereum 2.0."
  },
  {
    term: "Impermanent Loss",
    description: "A temporary loss that liquidity providers experience when the price ratio of their deposited tokens changes compared to when they were deposited. The loss becomes permanent if withdrawn during this price divergence.",
    example: "Losing value when providing ETH/USDC liquidity and ETH price increases significantly."
  },
  {
    term: "Flash Loan",
    description: "An uncollateralized loan that must be borrowed and repaid within the same blockchain transaction. These loans are often used for arbitrage opportunities or refinancing existing positions.",
    example: "Borrowing millions in DAI to exploit price differences across exchanges, then repaying in the same transaction."
  },
  {
    term: "Automated Market Maker (AMM)",
    description: "A protocol that enables automatic trading using liquidity pools instead of traditional order books. AMMs use mathematical formulas to determine asset prices based on the ratio of tokens in the pool.",
    example: "Uniswap's x*y=k formula determining token prices based on pool reserves."
  },
  {
    term: "Layer 2",
    description: "Scaling solutions built on top of existing blockchains to increase transaction speed and reduce costs. These solutions process transactions off the main chain while inheriting its security.",
    example: "Optimism and Arbitrum processing Ethereum transactions at lower costs."
  },
  {
    term: "Zero-Knowledge Proofs",
    description: "A cryptographic method allowing one party to prove to another that a statement is true without revealing the underlying information. Essential for privacy and scaling solutions.",
    example: "Proving you have enough funds for a transaction without revealing your actual balance."
  },
  {
    term: "TVL (Total Value Locked)",
    description: "The total value of crypto assets deposited in a DeFi protocol. This metric is used to measure the overall adoption and trust in a protocol or the entire DeFi ecosystem.",
    example: "A lending protocol with $1 billion TVL has that amount of assets deposited as collateral."
  },
  {
    term: "Collateral",
    description: "Assets deposited as security against a loan in DeFi protocols. If the borrower defaults or their position becomes undercollateralized, the collateral is liquidated.",
    example: "Depositing ETH as collateral to borrow USDC on Aave."
  },
  {
    term: "Liquidity Mining",
    description: "A reward mechanism where users provide liquidity to a protocol and receive tokens as rewards. This incentivizes users to supply capital to new protocols.",
    example: "Earning SUSHI tokens for providing liquidity on SushiSwap."
  },
  {
    term: "Bridge",
    description: "A protocol that enables the transfer of assets between different blockchain networks. Bridges allow users to access different ecosystems and take advantage of their unique features.",
    example: "Using the Polygon Bridge to move assets from Ethereum to Polygon network."
  },
  {
    term: "DAO (Decentralized Autonomous Organization)",
    description: "An organization governed by smart contracts and token holders rather than traditional management structures. DAOs use blockchain technology to automate decision-making and resource allocation.",
    example: "MakerDAO governance deciding on stability fees and collateral types for DAI."
  },
  {
    term: "Gas Fee",
    description: "The cost paid to network validators for processing transactions on a blockchain. Gas fees vary based on network congestion and transaction complexity.",
    example: "Paying higher gas fees during peak trading times on Ethereum."
  },
  {
    term: "Oracle",
    description: "A service that provides external data to smart contracts. Oracles bridge the gap between blockchains and real-world information, enabling smart contracts to execute based on external events.",
    example: "Chainlink providing price feeds to DeFi protocols for accurate asset valuations."
  },
  {
    term: "Synthetic Asset",
    description: "A tokenized derivative that mimics the value of another asset. Synthetic assets allow exposure to traditional financial assets without owning them directly.",
    example: "Synthetix's synthetic assets tracking stocks, commodities, and forex markets."
  },
  {
    term: "Bonding Curve",
    description: "A mathematical formula that determines the price of a token based on its supply. As more tokens are minted, the price increases according to the curve.",
    example: "Olympus DAO using bonding curves to price OHM tokens."
  },
  {
    term: "Slippage",
    description: "The difference between expected and actual prices in a trade due to market movement or low liquidity. Higher slippage occurs in less liquid markets or during large trades.",
    example: "A 1% price impact when swapping large amounts of tokens on a DEX."
  },
  {
    term: "Arbitrage",
    description: "The practice of profiting from price differences of the same asset across different markets. Arbitrageurs help maintain price consistency across exchanges.",
    example: "Buying ETH on one exchange and selling it on another for a higher price."
  },
  {
    term: "Fork",
    description: "A copy of an existing blockchain or protocol with modified features or parameters. Forks can be either hard (incompatible) or soft (backward-compatible).",
    example: "SushiSwap forking Uniswap's code to create a new DEX with additional features."
  },
  {
    term: "Validator",
    description: "A network participant responsible for verifying transactions and maintaining consensus in proof-of-stake systems. Validators stake tokens as collateral for honest behavior.",
    example: "Running a validator node on Ethereum 2.0 by staking 32 ETH."
  },
  {
    term: "Liquidation",
    description: "The forced closing of a leveraged position or loan when it becomes undercollateralized. Liquidations help maintain protocol solvency.",
    example: "A CDP getting liquidated on MakerDAO when ETH price drops below the minimum collateral ratio."
  },
  {
    term: "Private Key",
    description: "A secure cryptographic code that gives access to cryptocurrency holdings. Private keys must be kept secret as they provide complete control over associated assets.",
    example: "Using a private key to sign transactions or recover a wallet."
  },
  {
    term: "Public Key",
    description: "A cryptographic code derived from a private key that creates public addresses for receiving cryptocurrency. Public keys can be freely shared without compromising security.",
    example: "Sharing your public key as an Ethereum address to receive payments."
  },
  {
    term: "Metamask",
    description: "A popular browser extension wallet that enables interaction with Ethereum-based applications. MetaMask serves as a bridge between web browsers and blockchain networks.",
    example: "Using MetaMask to connect to Uniswap and trade tokens."
  },
  {
    term: "Gas Limit",
    description: "The maximum amount of computational effort a user is willing to spend on a transaction. Setting appropriate gas limits prevents overspending on failed transactions.",
    example: "Setting a gas limit of 21,000 for a simple ETH transfer."
  },
  {
    term: "Block Explorer",
    description: "A web tool for viewing blockchain transactions, addresses, and smart contracts. Block explorers provide transparency and help users track their transactions.",
    example: "Using Etherscan to verify transaction status and contract interactions."
  },
  {
    term: "Sidechain",
    description: "A separate blockchain that runs parallel to a main chain, offering different features or improved scalability. Sidechains can process transactions more efficiently.",
    example: "Using Polygon as a sidechain to Ethereum for faster, cheaper transactions."
  },
  {
    term: "LP Token",
    description: "A token received for providing liquidity to a pool. LP tokens represent the provider's share of the pool and can often be staked for additional rewards.",
    example: "Receiving UNI-V2 LP tokens for providing ETH/USDC liquidity on Uniswap."
  },
  {
    term: "Rebalancing",
    description: "The process of adjusting portfolio allocations to maintain desired ratios. In DeFi, this often happens automatically through smart contracts.",
    example: "An index fund smart contract automatically maintaining equal weights of assets."
  },
  {
    term: "Order Book",
    description: "A list of open buy and sell orders for an asset. Traditional exchanges use order books to match trades, while most DEXs use AMMs instead.",
    example: "Viewing all limit orders for ETH/USDC on a centralized exchange."
  },
  {
    term: "Market Order",
    description: "An order to buy or sell an asset immediately at the best available price. Market orders provide quick execution but may result in higher slippage.",
    example: "Buying ETH immediately at market price regardless of small price movements."
  },
  {
    term: "Limit Order",
    description: "An order to buy or sell an asset at a specific price or better. Limit orders provide price certainty but may not execute immediately.",
    example: "Setting an order to buy ETH only if it falls below $2,000."
  },
  {
    term: "Gas Price",
    description: "The amount of cryptocurrency paid per unit of gas for transaction processing. Higher gas prices result in faster transaction confirmation.",
    example: "Setting a high gas price during network congestion to ensure quick confirmation."
  },
  {
    term: "IDO (Initial DEX Offering)",
    description: "A method of launching new tokens through decentralized exchanges. IDOs provide fair and transparent token distribution.",
    example: "A new project launching its token through Polkastarter IDO platform."
  },
  {
    term: "Token Burn",
    description: "The permanent removal of tokens from circulation to reduce supply. Token burns can increase scarcity and potentially value.",
    example: "Binance regularly burning BNB tokens to reduce total supply."
  },
  {
    term: "HODL",
    description: "A misspelling of 'hold' that became crypto slang for holding onto assets long-term regardless of market conditions. It represents a long-term investment strategy.",
    example: "HODLing Bitcoin through market volatility instead of trading."
  },
  {
    term: "Vault",
    description: "A smart contract that automatically manages assets according to a specific strategy. Vaults can automate yield farming and risk management.",
    example: "Yearn Finance vaults automatically moving assets to highest-yielding protocols."
  },
  {
    term: "Gas Optimization",
    description: "Techniques to reduce the computational cost of smart contract operations. Optimized contracts cost less to interact with.",
    example: "Batching multiple transactions together to save on gas fees."
  },
  {
    term: "Double Spend",
    description: "An attack where the same cryptocurrency is spent multiple times. Blockchain consensus mechanisms prevent double spending.",
    example: "Attempting to send the same Bitcoin to two different addresses simultaneously."
  },
  {
    term: "Block Reward",
    description: "The cryptocurrency awarded to miners or validators for successfully adding a new block to the blockchain. Block rewards incentivize network security.",
    example: "Miners receiving 6.25 BTC for mining a new Bitcoin block."
  },
  {
    term: "Rollup",
    description: "A scaling solution that processes transactions off the main chain and posts the results back to it. Rollups increase throughput while maintaining security.",
    example: "Using Optimism rollup to trade on Uniswap with lower fees."
  },
  {
    term: "MEV (Miner Extractable Value)",
    description: "The value miners can extract by reordering, including, or excluding transactions in blocks. MEV often comes from arbitrage opportunities.",
    example: "Miners front-running DEX trades to profit from price movements."
  },
  {
    term: "Rug Pull",
    description: "A scam where project developers abandon the project and steal investor funds. Rug pulls often occur in new, unaudited projects.",
    example: "Developers removing all liquidity from a pool";
  },
];

const KeywordCard = ({ keyword }:any) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
    <h2 className="text-2xl font-bold text-blue-700 mb-3">{keyword.term}</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">What is it?</h3>
        <p className="text-gray-600 leading-relaxed">{keyword.description}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Example</h3>
        <p className="text-gray-600 leading-relaxed italic">{keyword.example}</p>
      </div>
    </div>
  </div>
);

const DefiKeywordsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredKeywords = keywords.filter(keyword => 
    keyword.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    keyword.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            DeFi Terms Explained
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the essential terminology of decentralized finance (DeFi). Each term includes a detailed explanation and real-world example to help you understand these important concepts.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search DeFi terms..."
            className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredKeywords.map((keyword, index) => (
            <KeywordCard key={index} keyword={keyword} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Showing {filteredKeywords.length} of {keywords.length} DeFi terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefiKeywordsPage;
