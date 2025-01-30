import { DefiContracts } from "./DefiContracts";
import { DefiFundamentals } from "./DefiFundamentals";
import { Dexs } from "./Dexs";
import { Lending } from "./Lending";
import { Oracles } from "./Oracles";
import { StableCoin } from "./StableCoin";
import { Synthetics } from "./Synthetics";
import { DefiSecurity } from "./DefiSecurity";


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
    data: DefiFundamentals,
  },
  {
    id: 2,
    title: "DeFi Contracts",
    description:
      "Dive into the workings of DeFi contracts, covering topics like smart contract development, yield farming mechanics, and liquidity provisioning strategies.",
    category: "Intermediate",
    image: "/contract.jpg",
    data: DefiContracts,
  },
  {
    id: 3,
    title: "Lending and Borrowing",
    description:
      "Gain insights into decentralized lending and borrowing platforms, exploring how interest rates are determined and best practices for leveraging these tools.",
    category: "Intermediate",
    image: "/lend.jpg",
    data: Lending,
  },
  {
    id: 5,
    title: "Oracles",
    description:
      "Learn how blockchain oracles provide off-chain data to smart contracts, and discover their applications in DeFi, prediction markets, and more.",
    category: "Intermediate",
    image: "/Oracle.jpg",
    data: Oracles,
  },
  {
    id: 4,
    title: "Stablecoins",
    description:
      "Understand the role of stablecoins in DeFi, their mechanisms for maintaining price stability, and their importance in creating a robust financial ecosystem.",
    category: "Intermediate",
    image: "/stable.jpg",
    data: StableCoin,
  },
  {
    id: 6,
    title: "Synthetics and Derivatives",
    description:
      "Explore synthetic assets and decentralized derivatives, understanding their role in DeFi markets and strategies for leveraging them to mitigate risks.",
    category: "Intermediate",
    image: "/synthetix.jpg",
    data: Synthetics,
  },
  {
    id: 8,
    title: "DEXs",
    description:
      "Master the operation of decentralized exchanges (DEXs), covering automated market makers (AMMs), order books, and strategies for efficient trading.",
    category: "Advanced",
    image: "/dex.jpg",
    data: Dexs,
  },
  {
    id: 7,
    title: "DeFi Security",
    description:
      "Understand the critical importance of security in DeFi, exploring smart contract vulnerabilities, best practices for audits, and how to secure your assets.",
    category: "Advanced",
    image: "/security.jpg",
    data: DefiSecurity,
  },
];