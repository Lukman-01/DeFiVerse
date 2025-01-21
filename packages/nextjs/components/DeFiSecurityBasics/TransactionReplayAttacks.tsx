import React from 'react';

const TransactionReplayAttacks: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transaction Replay Attacks</h1>
      <p>
        Transaction replay attacks involve duplicating a transaction from one chain or layer to another, causing unintended
        consequences or losses for users.
      </p>

      <h2 className="text-xl font-semibold mt-4">How It Works</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          A transaction on one blockchain or layer is observed and copied, with modifications to data or signatures, and
          replayed on another blockchain or layer.
        </li>
        <li>This can lead to duplicate transactions or exploit vulnerabilities in cross-chain protocols.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Impact</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Financial losses for users.</li>
        <li>Breaks the trust in multi-chain systems.</li>
        <li>Creates inefficiencies in the blockchain ecosystem.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Mitigation</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Use unique transaction identifiers to prevent replay across chains.</li>
        <li>Implement chain-specific signatures for transactions.</li>
      </ul>
    </div>
  );
};

export default TransactionReplayAttacks;
