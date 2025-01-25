import { AlertTriangle, Book, Shield } from "lucide-react";
import AmmDexContract from "~~/components/DeFiContracts/AmmDexContract";
import BankWalletContract from "~~/components/DeFiContracts/BankWalletContract";
import EscrowContract from "~~/components/DeFiContracts/EscrowContract";
import LendingPoolContract from "~~/components/DeFiContracts/LendingPoolContract";
import StakingContract from "~~/components/DeFiContracts/StakingContract";
import VaultContract from "~~/components/DeFiContracts/VaultContract";
import YieldFarmingContract from "~~/components/DeFiContracts/YieldFarmingContract";
import DeFiStack from "~~/components/DeFiFundamentals/DeFiStack";
import RiskAndSecurity from "~~/components/DeFiFundamentals/RiskAndSecurity";
import TraditionalFinance from "~~/components/DeFiFundamentals/TraditionalFinance";
import WhatIsDeFi from "~~/components/DeFiFundamentals/WhatIsDeFi";
import WhatIsFinance from "~~/components/DeFiFundamentals/WhatIsFinance";
import WhyLearnDeFi from "~~/components/DeFiFundamentals/WhyLearnDeFi";
import BlockchainExtractableValue from "~~/components/DeFiSecurityBasics/BlockchainExtractableValue";
import BlockchainLayerSecurity from "~~/components/DeFiSecurityBasics/BlockchainLayerSecurity";
import DeFiSecurityLayers from "~~/components/DeFiSecurityBasics/DeFiSecurityLayers";
import FlashLoanAttacks from "~~/components/DeFiSecurityBasics/FlashLoanAttacks";
import NetworkLayerSecurity from "~~/components/DeFiSecurityBasics/NetworkLayerSecurity";
import ReducingBEV from "~~/components/DeFiSecurityBasics/ReducingBEV";
import SandwichAttacks from "~~/components/DeFiSecurityBasics/SandwichAttacks";
import SmartContractLayerSecurity from "~~/components/DeFiSecurityBasics/SmartContractLayerSecurity";
import TransactionReplayAttacks from "~~/components/DeFiSecurityBasics/TransactionReplayAttacks";
import ArbitrageComponent from "~~/components/Dexes/Arbitrage";
import AutomatedMarketMaker from "~~/components/Dexes/AutomatedMakertMaker";
import DEXAggregator from "~~/components/Dexes/DEXAggregator";
import OrderBookModels from "~~/components/Dexes/DecentralizeExchange";
import ExchangeTransactionPropagation from "~~/components/Dexes/ExchangeTransactionPropagation";
import ImpermanentLoss from "~~/components/Dexes/ImpermanentLoss";
import LiquidityMining from "~~/components/Dexes/LiquidityMining";
import PeggedAndStablecoinAMM from "~~/components/Dexes/PeggedAndStablecoinAMM";
import ProfitableOpportunities from "~~/components/Dexes/ProfitableOpportunities";
import FlashLoans from "~~/components/Lending/FlashLoans";
import Liquidation from "~~/components/Lending/Liquidation";
import OverCollateralizedBorrowing from "~~/components/Lending/OverCollateralizedBorrowing";
import Terminologies from "~~/components/Lending/Terminologies";
import UnderCollateralizedBorrowing from "~~/components/Lending/UnderCollateralizedBorrowing";
import WhyLending from "~~/components/Lending/WhyLending";
import AdvancedOracleUseCases from "~~/components/Oracles/AdvancedOracleUseCases";
import BasicOracleDesignPart1 from "~~/components/Oracles/BasicOracleDesignPart1";
import BasicOracleDesignPart2 from "~~/components/Oracles/BasicOracleDesignPart2";
import IntroductionToOracles from "~~/components/Oracles/IntroductionToOracles";
import OraclePrivacy from "~~/components/Oracles/OraclePrivacy";
import PrivacyPreservingOracles from "~~/components/Oracles/PrivacyPreservingOracles";
import DeFiBankRun from "~~/components/StableCoins/DeFiBankRun";
import StablecoinTypes from "~~/components/StableCoins/StablecoinTypes";
import WhatIsStable from "~~/components/StableCoins/WhatIsStable";
import WhyStablecoins from "~~/components/StableCoins/WhyStablecoins";
import FuturesVsForwards from "~~/components/Synthetics/FuturesVsForwards";
import IntroductionToDerivatives from "~~/components/Synthetics/IntroductionToDerivatives";
import LeveragedDerivatives from "~~/components/Synthetics/LeveragedDerivatives";
import MarginAndMarkingToMarket from "~~/components/Synthetics/MarginAndMarkingToMarket";
import RiskManagementInDerivatives from "~~/components/Synthetics/RiskManagementInDerivatives";
import Swaps from "~~/components/Synthetics/Swaps";
import SyntheticAssetsAndSynthetix from "~~/components/Synthetics/SyntheticAssetsAndSynthetix";

export const courses: {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  data: {
    title: string;
    icon: JSX.Element;
    component: JSX.Element;
  }[];
}[] = [
  {
    id: 1,
    title: "DeFi Fundamentals",
    description:
      "Learn the foundations of decentralized finance, including key principles, concepts, and the structure of DeFi protocols like lending, borrowing, and automated market makers.",
    category: "Beginner",
    image: "/fundamental.jpg",
    data: [
      {
        title: "What is Finance?",
        icon: <Book className="w-5 h-5" />,
        component: <WhatIsFinance />,
      },
      {
        title: "Traditional Finance",
        icon: <Book className="w-5 h-5" />,
        component: <TraditionalFinance />,
      },
      {
        title: "What is DeFi?",
        icon: <Book className="w-5 h-5" />,
        component: <WhatIsDeFi />,
      },
      {
        title: "Why Learn DeFi?",
        icon: <Book className="w-5 h-5" />,
        component: <WhyLearnDeFi />,
      },
      {
        title: "DeFi Stack",
        icon: <Book className="w-5 h-5" />,
        component: <DeFiStack />,
      },
      {
        title: "Risk & Security",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <RiskAndSecurity />,
      },
    ],
  },
  {
    id: 2,
    title: "DeFi Contracts",
    description:
      "Dive into the workings of DeFi contracts, covering topics like smart contract development, yield farming mechanics, and liquidity provisioning strategies.",
    category: "Intermediate",
    image: "/contract.jpg",
    data: [
      {
        title: "VaultContract",
        icon: <Book className="w-5 h-5" />,
        component: <VaultContract />,
      },
      {
        title: "LendingPoolContract",
        icon: <Book className="w-5 h-5" />,
        component: <LendingPoolContract />,
      },
      {
        title: "StakingContract",
        icon: <Book className="w-5 h-5" />,
        component: <StakingContract />,
      },
      {
        title: "EscrowContract",
        icon: <Book className="w-5 h-5" />,
        component: <EscrowContract />,
      },
      {
        title: "BankWalletContract",
        icon: <Book className="w-5 h-5" />,
        component: <BankWalletContract />,
      },
      {
        title: "AmmDexContract",
        icon: <Book className="w-5 h-5" />,
        component: <AmmDexContract />,
      },
      {
        title: "YieldFarmingContract",
        icon: <Book className="w-5 h-5" />,
        component: <YieldFarmingContract />,
      },
    ],
  },
  {
    id: 3,
    title: "Lending and Borrowing",
    description:
      "Gain insights into decentralized lending and borrowing platforms, exploring how interest rates are determined and best practices for leveraging these tools.",
    category: "Intermediate",
    image: "/lend.jpg",
    data: [
      {
        title: "Why Lending?",
        icon: <Book className="w-5 h-5" />,
        component: <WhyLending />,
      },
      {
        title: "Terminologies",
        icon: <Book className="w-5 h-5" />,
        component: <Terminologies />,
      },
      {
        title: "Over-Collateralized",
        icon: <Book className="w-5 h-5" />,
        component: <OverCollateralizedBorrowing />,
      },
      {
        title: "Under-Collateralized",
        icon: <Book className="w-5 h-5" />,
        component: <UnderCollateralizedBorrowing />,
      },
      {
        title: "Liquidation",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <Liquidation />,
      },
      {
        title: "Flash Loans",
        icon: <Book className="w-5 h-5" />,
        component: <FlashLoans />,
      },
    ],
  },
  {
    id: 5,
    title: "Oracles",
    description:
      "Learn how blockchain oracles provide off-chain data to smart contracts, and discover their applications in DeFi, prediction markets, and more.",
    category: "Intermediate",
    image: "/Oracle.jpg",
    data: [
      {
        title: "Introduction to Oracles",
        icon: <Book className="w-5 h-5" />,
        component: <IntroductionToOracles />,
      },
      {
        title: "Basic Oracle Design (Part I)",
        icon: <Book className="w-5 h-5" />,
        component: <BasicOracleDesignPart1 />,
      },
      {
        title: "Basic Oracle Design (Part II)",
        icon: <Book className="w-5 h-5" />,
        component: <BasicOracleDesignPart2 />,
      },
      {
        title: "Advanced Oracle Use Cases",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <AdvancedOracleUseCases />,
      },
      {
        title: "Oracle Privacy",
        icon: <Shield className="w-5 h-5" />,
        component: <OraclePrivacy />,
      },
      {
        title: "DeFi Applications Using Privacy-Preserving Oracles",
        icon: <Shield className="w-5 h-5" />,
        component: <PrivacyPreservingOracles />,
      },
    ],
  },
  {
    id: 4,
    title: "Stablecoins",
    description:
      "Understand the role of stablecoins in DeFi, their mechanisms for maintaining price stability, and their importance in creating a robust financial ecosystem.",
    category: "Intermediate",
    image: "/stable.jpg",
    data: [
      {
        title: "What is Stable?",
        icon: <Book className="w-5 h-5" />,
        component: <WhatIsStable />,
      },
      {
        title: "Why Stablecoins?",
        icon: <Book className="w-5 h-5" />,
        component: <WhyStablecoins />,
      },
      {
        title: "Stablecoin Types",
        icon: <Book className="w-5 h-5" />,
        component: <StablecoinTypes />,
      },
      {
        title: "DeFi Bank Run",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <DeFiBankRun />,
      },
    ],
  },
  {
    id: 6,
    title: "Synthetics and Derivatives",
    description:
      "Explore synthetic assets and decentralized derivatives, understanding their role in DeFi markets and strategies for leveraging them to mitigate risks.",
    category: "Intermediate",
    image: "/synthetix.jpg",
    data: [
      {
        title: "Introduction to Derivatives",
        icon: <Book className="w-5 h-5" />,
        component: <IntroductionToDerivatives />,
      },
      {
        title: "Futures vs. Forwards",
        icon: <Book className="w-5 h-5" />,
        component: <FuturesVsForwards />,
      },
      {
        title: "Margin and Marking to Market",
        icon: <Book className="w-5 h-5" />,
        component: <MarginAndMarkingToMarket />,
      },
      {
        title: "Swaps",
        icon: <Book className="w-5 h-5" />,
        component: <Swaps />,
      },
      {
        title: "Synthetic Assets and Synthetix",
        icon: <Book className="w-5 h-5" />,
        component: <SyntheticAssetsAndSynthetix />,
      },
      {
        title: "Leveraged Derivatives",
        icon: <Book className="w-5 h-5" />,
        component: <LeveragedDerivatives />,
      },
      {
        title: "Risk Management in Derivatives",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <RiskManagementInDerivatives />,
      },
    ],
  },
  {
    id: 8,
    title: "DEXs",
    description:
      "Master the operation of decentralized exchanges (DEXs), covering automated market makers (AMMs), order books, and strategies for efficient trading.",
    category: "Advanced",
    image: "/dex.jpg",
    data: [
      {
        title: "Arbitrage",
        icon: <Book className="w-5 h-5" />,
        component: <ArbitrageComponent />,
      },
      {
        title: "Automated Market Maker",
        icon: <Book className="w-5 h-5" />,
        component: <AutomatedMarketMaker />,
      },
      {
        title: "DEX Aggregator",
        icon: <Book className="w-5 h-5" />,
        component: <DEXAggregator />,
      },
      {
        title: "Decentralized Exchange",
        icon: <Book className="w-5 h-5" />,
        component: <OrderBookModels />,
      },
      {
        title: "Exchange Transaction Propagation",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <ExchangeTransactionPropagation />,
      },
      {
        title: "Impermanent Loss",
        icon: <Book className="w-5 h-5" />,
        component: <ImpermanentLoss />,
      },
      {
        title: "Liquidity Mining",
        icon: <Book className="w-5 h-5" />,
        component: <LiquidityMining />,
      },
      {
        title: "Pegged and Stablecoin AMM",
        icon: <Book className="w-5 h-5" />,
        component: <PeggedAndStablecoinAMM />,
      },
      {
        title: "Profitable Opportunities",
        icon: <Book className="w-5 h-5" />,
        component: <ProfitableOpportunities />,
      },
    ],
  },
  {
    id: 7,
    title: "DeFi Security",
    description:
      "Understand the critical importance of security in DeFi, exploring smart contract vulnerabilities, best practices for audits, and how to secure your assets.",
    category: "Advanced",
    image: "/security.jpg",
    data: [
      {
        title: "DeFi Security Layers",
        icon: <Book className="w-5 h-5" />,
        component: <DeFiSecurityLayers />,
      },
      {
        title: "Network Layer Security",
        icon: <Book className="w-5 h-5" />,
        component: <NetworkLayerSecurity />,
      },
      {
        title: "Blockchain Layer Security",
        icon: <Book className="w-5 h-5" />,
        component: <BlockchainLayerSecurity />,
      },
      {
        title: "Smart Contract Security",
        icon: <Book className="w-5 h-5" />,
        component: <SmartContractLayerSecurity />,
      },
      {
        title: "Flash Loan Attacks",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <FlashLoanAttacks />,
      },
      {
        title: "Sandwich Attacks",
        icon: <AlertTriangle className="w-5 h-5" />,
        component: <SandwichAttacks />,
      },
      {
        title: "Blockchain Extractable Value (BEV)",
        icon: <Book className="w-5 h-5" />,
        component: <BlockchainExtractableValue />,
      },
      {
        title: "Transaction Replay Attacks",
        icon: <Book className="w-5 h-5" />,
        component: <TransactionReplayAttacks />,
      },
      {
        title: "Reducing BEV and Mitigation Solutions",
        icon: <Book className="w-5 h-5" />,
        component: <ReducingBEV />,
      },
    ],
  },
];
