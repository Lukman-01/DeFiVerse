import { AlertTriangle, Book } from "lucide-react";
import ArbitrageComponent from "~~/components/Dexes/Arbitrage";
import AutomatedMarketMaker from "~~/components/Dexes/AutomatedMakertMaker";
import OrderBookModels from "~~/components/Dexes/DecentralizeExchange";
import DEXAggregator from "~~/components/Dexes/DEXAggregator";
import ExchangeTransactionPropagation from "~~/components/Dexes/ExchangeTransactionPropagation";
import ImpermanentLoss from "~~/components/Dexes/ImpermanentLoss";
import LiquidityMining from "~~/components/Dexes/LiquidityMining";
import PeggedAndStablecoinAMM from "~~/components/Dexes/PeggedAndStablecoinAMM";
import ProfitableOpportunities from "~~/components/Dexes/ProfitableOpportunities";

export const Dexs = [
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
];