import React from 'react';

const PrivacyPreservingOracles: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">DeFi Applications Using Privacy-Preserving Oracles</h3>
      <p>
        Privacy-preserving oracles expand the possibilities of DeFi by enabling applications that require sensitive 
        or personal data without compromising user privacy.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Applications</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tokenizing Digital Assets:</strong> Privacy-preserving oracles can securely fetch data about 
          real-world assets (e.g., stock prices or property values) for tokenization on the blockchain.
        </li>
        <li>
          <strong>Private DeFi:</strong> Enables private lending, borrowing, and trading by concealing sensitive 
          user data while maintaining protocol transparency.
        </li>
        <li>
          <strong>Decentralized Identity:</strong> Oracles can verify personal identity attributes without exposing 
          unnecessary details, paving the way for secure KYC in DeFi.
        </li>
      </ul>
      <img 
        src="/privacy-preserving-oracles.png" 
        alt="Privacy-Preserving Oracle Applications" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <h4 className="text-lg font-semibold mt-4">Example Scenario</h4>
      <p>
        A user tokenizes their home value by using a privacy-preserving oracle that fetches the property’s appraisal 
        data. The oracle proves the value to the DeFi protocol without exposing the address or detailed property information.
      </p>
      <p>
        These applications enhance user trust and bring new industries into the DeFi ecosystem.
      </p>
    </div>
  );
};

export default PrivacyPreservingOracles;
