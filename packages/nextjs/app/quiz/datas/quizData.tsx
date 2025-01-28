import { DexesQuestions } from "./DexesQuestions";
import { IntroDefiQuestions } from "./IntroDefiQuestions";
import { LendingQuestions } from "./LendingQuestions";
import { OraclesQuestions } from "./OracleQuestions";
import { SecurityQuestions } from "./SecurityQuestions";
import { StableCoinQuestions } from "./StableCoinQuestions";
import { SyntheticsQuestions } from "./SyntheticsQuestions";

export const quizData: {
  id: number;
  title: string;
  description: string;
  image: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}[] = [
  {
  id: 1,
  title: "DeFi Fundamentals",
  description:
  "Test your knowledge of the foundational principles and structures of decentralized finance.",
  image: "/fundamental.jpg",
  questions: IntroDefiQuestions,
  },
  {
  id: 2,
  title: "DeFi Contracts",
  description:
  "Assess your understanding of smart contracts and their role in DeFi mechanisms like yield farming and liquidity provision.",
  image: "/contract.jpg",
  questions: [],
  },
  {
  id: 3,
  title: "Lending and Borrowing",
  description:
  "Evaluate your knowledge of decentralized lending and borrowing platforms, including interest rate mechanics and strategies.",
  image: "/lend.jpg",
  questions: LendingQuestions,
  },
  {
  id: 5,
  title: "Oracles",
  description:
  "Test your understanding of how oracles provide off-chain data to smart contracts and their applications in DeFi.",
  image: "/Oracle.jpg",
  questions: OraclesQuestions,
  },
  {
  id: 4,
  title: "Stablecoins",
  description:
  "Assess your grasp of stablecoin mechanics and their role in maintaining price stability within DeFi ecosystems.",
  image: "/stable.jpg",
  questions: StableCoinQuestions,
  },
  {
  id: 6,
  title: "Synthetics and Derivatives",
  description:
  "Evaluate your knowledge of synthetic assets and decentralized derivatives within DeFi markets.",
  image: "/synthetix.jpg",
  questions: SyntheticsQuestions,
  },
  {
  id: 8,
  title: "DEXs",
  description:
  "Test your expertise on decentralized exchanges, including AMMs, order books, and trading strategies.",
  image: "/dex.jpg",
  questions: DexesQuestions,
  },
  {
  id: 7,
  title: "DeFi Security",
  description:
  "Assess your understanding of DeFi security, including smart contract vulnerabilities and asset protection strategies.",
  image: "/security.jpg",
  questions: SecurityQuestions,
  },
  ];