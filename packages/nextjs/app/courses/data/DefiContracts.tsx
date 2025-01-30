import { Book } from "lucide-react";
import AmmDexContract from "~~/components/DeFiContracts/AmmDexContract";
import BankWalletContract from "~~/components/DeFiContracts/BankWalletContract";
import EscrowContract from "~~/components/DeFiContracts/EscrowContract";
import LendingPoolContract from "~~/components/DeFiContracts/LendingPoolContract";
import StakingContract from "~~/components/DeFiContracts/StakingContract";
import VaultContract from "~~/components/DeFiContracts/VaultContract";
import YieldFarmingContract from "~~/components/DeFiContracts/YieldFarmingContract";

export const DefiContracts = [
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
];
