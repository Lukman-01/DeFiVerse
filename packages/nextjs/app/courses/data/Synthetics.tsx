import { AlertTriangle, Book } from "lucide-react";
import FuturesVsForwards from "~~/components/Synthetics/FuturesVsForwards";
import IntroductionToDerivatives from "~~/components/Synthetics/IntroductionToDerivatives";
import LeveragedDerivatives from "~~/components/Synthetics/LeveragedDerivatives";
import MarginAndMarkingToMarket from "~~/components/Synthetics/MarginAndMarkingToMarket";
import RiskManagementInDerivatives from "~~/components/Synthetics/RiskManagementInDerivatives";
import Swaps from "~~/components/Synthetics/Swaps";
import SyntheticAssetsAndSynthetix from "~~/components/Synthetics/SyntheticAssetsAndSynthetix";

export const Synthetics = [
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
];