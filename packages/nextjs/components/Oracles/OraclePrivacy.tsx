import React from 'react';

const OraclePrivacy: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Oracle Privacy</h3>
      <p>
        Privacy is a significant concern in oracle systems, particularly for sensitive applications like insurance, 
        identity verification, and private transactions. Traditional oracles expose raw data, which can compromise 
        user privacy.
      </p>
      <h4 className="text-lg font-semibold mt-4">Techniques for Privacy-Preserving Oracles</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trusted Execution Environments (TEEs):</strong> Hardware solutions like Intel SGX allow oracles to 
          process data securely without revealing it to external parties.
        </li>
        <li>
          <strong>Cryptographic Solutions:</strong> Tools like DECO enable oracles to prove the validity of data 
          without exposing the raw information.
        </li>
        <li>
          <strong>Zero-Knowledge Proofs:</strong> These enable oracles to verify data integrity without revealing 
          the data itself.
        </li>
      </ul>
      <img 
        src="/oracle-privacy.png" 
        alt="Privacy-Preserving Oracle Techniques" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        For flight insurance, a privacy-preserving oracle could verify whether a flight was delayed using a secure 
        data source without revealing flight details to the smart contract or third parties.
      </p>
      <p>
        These privacy solutions enable sensitive use cases while maintaining the trust and transparency of DeFi systems.
      </p>
    </div>
  );
};

export default OraclePrivacy;
