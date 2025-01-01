import React from 'react';

type NewsArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const DeFiNews: React.FC = () => {
    const news: NewsArticle[] = [
        {
          id: 1,
          title: "Ethereum Upgrades Improve Scalability",
          description: "The latest Ethereum upgrade focuses on reducing gas fees and improving transaction speeds.",
          url: "https://example.com/ethereum-upgrades",
        },
        {
          id: 2,
          title: "DeFi Market Hits New Highs",
          description: "The total value locked in DeFi protocols has surpassed $100 billion.",
          url: "https://example.com/defi-market-highs",
        },
        {
          id: 3,
          title: "Uniswap Launches New Feature",
          description: "Uniswap introduces limit orders, enhancing user trading experience.",
          url: "https://example.com/uniswap-limit-orders",
        },
        {
          id: 4,
          title: "Aave Expands Into Real-World Assets",
          description: "Aave is now providing liquidity for tokenized real-world assets such as real estate.",
          url: "https://example.com/aave-rwa-expansion",
        },
        {
          id: 5,
          title: "Regulation Looms Over DeFi",
          description: "Global regulators are considering frameworks to regulate decentralized finance.",
          url: "https://example.com/defi-regulation",
        },
        {
          id: 6,
          title: "Polygon Partners with Major Companies",
          description: "Polygon announces partnerships with major firms to enhance blockchain adoption.",
          url: "https://example.com/polygon-partnerships",
        },
        {
          id: 7,
          title: "DeFi Security Breaches: A Wake-Up Call",
          description: "Recent hacks in DeFi protocols raise concerns about security practices.",
          url: "https://example.com/defi-security-breaches",
        },
        {
          id: 8,
          title: "Stablecoins Gain Popularity",
          description: "The usage of stablecoins like USDC and DAI is growing rapidly in DeFi markets.",
          url: "https://example.com/stablecoins-popularity",
        },
        {
          id: 9,
          title: "Yield Farming Trends in 2024",
          description: "A deep dive into the latest trends in yield farming and liquidity mining.",
          url: "https://example.com/yield-farming-trends",
        },
        {
          id: 10,
          title: "Cross-Chain Bridges Revolutionize DeFi",
          description: "New cross-chain solutions enable seamless asset transfers between blockchains.",
          url: "https://example.com/cross-chain-bridges",
        },
    ];
      

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">DeFi News</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {news.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeFiNews;
