import { AlertTriangle, Book } from "lucide-react";
import BlockchainExtractableValue from "~~/components/DeFiSecurityBasics/BlockchainExtractableValue";
import BlockchainLayerSecurity from "~~/components/DeFiSecurityBasics/BlockchainLayerSecurity";
import DeFiSecurityLayers from "~~/components/DeFiSecurityBasics/DeFiSecurityLayers";
import FlashLoanAttacks from "~~/components/DeFiSecurityBasics/FlashLoanAttacks";
import NetworkLayerSecurity from "~~/components/DeFiSecurityBasics/NetworkLayerSecurity";
import ReducingBEV from "~~/components/DeFiSecurityBasics/ReducingBEV";
import SandwichAttacks from "~~/components/DeFiSecurityBasics/SandwichAttacks";
import SmartContractLayerSecurity from "~~/components/DeFiSecurityBasics/SmartContractLayerSecurity";
import TransactionReplayAttacks from "~~/components/DeFiSecurityBasics/TransactionReplayAttacks";

export const DefiSecurity = [
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
];
