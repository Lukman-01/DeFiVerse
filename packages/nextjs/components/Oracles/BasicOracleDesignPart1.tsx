import React from 'react';

const BasicOracleDesignPart1: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Basic Oracle Design (Part I)</h3>
      <p>
        Designing oracles involves ensuring that they provide accurate, reliable data while maintaining the integrity 
        of smart contracts. The simplest oracle model connects a data provider to a smart contract, but challenges 
        arise due to the decentralized nature of blockchains.
      </p>
      <h4 className="text-lg font-semibold mt-4">Challenges</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Miner Cheating:</strong> Miners can manipulate data feeds if oracles are embedded into consensus protocols.
        </li>
        <li>
          <strong>Node Liveness:</strong> If oracle nodes go offline, smart contracts lose access to critical data.
        </li>
      </ul>
      <img 
        src="/oracle-design-part1.png" 
        alt="Oracle Challenges" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        These challenges necessitate decentralized and redundant oracle networks for greater reliability.
      </p>
    </div>
  );
};

export default BasicOracleDesignPart1;
