import { AlertTriangle, Book } from "lucide-react";
import DeFiBankRun from "~~/components/StableCoins/DeFiBankRun";
import StablecoinTypes from "~~/components/StableCoins/StablecoinTypes";
import WhatIsStable from "~~/components/StableCoins/WhatIsStable";
import WhyStablecoins from "~~/components/StableCoins/WhyStablecoins";

export const StableCoin = [
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
];
