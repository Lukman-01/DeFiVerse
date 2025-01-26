import { questionsExample } from "./questionsExample";

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
      "Learn the foundations of decentralized finance, including key principles, concepts, and the structure of DeFi protocols like lending, borrowing, and automated market makers.",
    image: "/fundamental.jpg",
    questions: questionsExample,
  },
  {
    id: 2,
    title: "DeFi Contracts",
    description:
      "Dive into the workings of DeFi contracts, covering topics like smart contract development, yield farming mechanics, and liquidity provisioning strategies.",
    image: "/contract.jpg",
    questions: [],
  },
  {
    id: 3,
    title: "Lending and Borrowing",
    description:
      "Gain insights into decentralized lending and borrowing platforms, exploring how interest rates are determined and best practices for leveraging these tools.",
    image: "/lend.jpg",
    questions: [],
  },
  {
    id: 5,
    title: "Oracles",
    description:
      "Learn how blockchain oracles provide off-chain data to smart contracts, and discover their applications in DeFi, prediction markets, and more.",
    image: "/Oracle.jpg",
    questions: [],
  },
  {
    id: 4,
    title: "Stablecoins",
    description:
      "Understand the role of stablecoins in DeFi, their mechanisms for maintaining price stability, and their importance in creating a robust financial ecosystem.",
    image: "/stable.jpg",
    questions: [],
  },
  {
    id: 6,
    title: "Synthetics and Derivatives",
    description:
      "Explore synthetic assets and decentralized derivatives, understanding their role in DeFi markets and strategies for leveraging them to mitigate risks.",
    image: "/synthetix.jpg",
    questions: [],
  },
  {
    id: 8,
    title: "DEXs",
    description:
      "Master the operation of decentralized exchanges (DEXs), covering automated market makers (AMMs), order books, and strategies for efficient trading.",
    image: "/dex.jpg",
    questions: [],
  },
  {
    id: 7,
    title: "DeFi Security",
    description:
      "Understand the critical importance of security in DeFi, exploring smart contract vulnerabilities, best practices for audits, and how to secure your assets.",
    image: "/security.jpg",
    questions: [],
  },
];
