import { AlertTriangle, Book } from "lucide-react";
import FlashLoans from "~~/components/Lending/FlashLoans";
import Liquidation from "~~/components/Lending/Liquidation";
import OverCollateralizedBorrowing from "~~/components/Lending/OverCollateralizedBorrowing";
import Terminologies from "~~/components/Lending/Terminologies";
import UnderCollateralizedBorrowing from "~~/components/Lending/UnderCollateralizedBorrowing";
import WhyLending from "~~/components/Lending/WhyLending";

export const Lending = [
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
];
