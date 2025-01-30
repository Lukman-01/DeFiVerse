import { AlertTriangle, Book, Shield } from "lucide-react";
import AdvancedOracleUseCases from "~~/components/Oracles/AdvancedOracleUseCases";
import BasicOracleDesignPart1 from "~~/components/Oracles/BasicOracleDesignPart1";
import BasicOracleDesignPart2 from "~~/components/Oracles/BasicOracleDesignPart2";
import IntroductionToOracles from "~~/components/Oracles/IntroductionToOracles";
import OraclePrivacy from "~~/components/Oracles/OraclePrivacy";
import PrivacyPreservingOracles from "~~/components/Oracles/PrivacyPreservingOracles";

export const Oracles = [
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
];
