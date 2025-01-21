import React from 'react';

const ExchangeTransactionPropagation: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exchange Transaction Propagation</h1>
      <p>
        Exchange transaction propagation involves the distribution and execution of transactions across a blockchain
        network. It ensures trades are visible, verified, and executed in a decentralized manner.
      </p>

      <h2 className="text-xl font-semibold mt-4">Key Aspects</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Asynchronous Blockchain P2P Network:</strong> Transactions are propagated via peer-to-peer networks
          without a central coordinator.
        </li>
        <li>
          <strong>Best Effort Propagation:</strong> Transactions are propagated with no guarantee of instant finality.
        </li>
        <li>
          <strong>Fee Auctions:</strong> Inclusion in blocks is determined by fees:
          <ul className="list-disc pl-8">
            <li>
              <strong>Price Gas Auction (PGA):</strong> Public auction where higher fees increase inclusion probability.
            </li>
            <li>
              <strong>Sealed Bid Gas Auction (SGA):</strong> Used by centralized relay services to prevent front-running.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Challenges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>High-frequency trading impacts network transparency and fairness.</li>
        <li>Front-running risks arise from fee auctions on public networks.</li>
      </ul>
    </div>
  );
};

export default ExchangeTransactionPropagation;
