import React from 'react';

const BasicOracleDesignPart2: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Basic Oracle Design (Part II)</h3>
      <p>
        Building a robust oracle system involves solving critical challenges like decentralization, data heterogeneity, 
        and combining reports from multiple sources. This ensures that the data provided to smart contracts is accurate 
        and resistant to manipulation.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Aspects of Design</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Decentralization:</strong> Oracles must source data from multiple independent nodes to avoid a single 
          point of failure.
        </li>
        <li>
          <strong>Data Heterogeneity:</strong> Combining data from various providers helps ensure accuracy and reduces 
          bias in the system.
        </li>
        <li>
          <strong>Report Aggregation:</strong> Techniques like median computation are often used to combine multiple 
          data reports. This minimizes the influence of outliers or malicious nodes.
        </li>
      </ul>
      <img 
        src="/oracle-design-part2.png" 
        alt="Decentralized Oracle Design" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        Imagine an oracle fetching ETH/USD prices. It collects data from 10 different providers, calculates the median 
        price, and feeds it to a DeFi protocol. This ensures that no single data source can manipulate the price.
      </p>
      <p>
        By implementing redundancy and robust aggregation techniques, oracles can provide reliable data for critical 
        applications.
      </p>
    </div>
  );
};

export default BasicOracleDesignPart2;
