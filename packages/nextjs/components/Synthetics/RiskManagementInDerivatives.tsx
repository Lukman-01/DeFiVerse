import React from 'react';

const RiskManagementInDerivatives: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Risk Management in Derivatives</h3>
      <p>
        Derivatives involve substantial risks, including counterparty risk, market risk, and liquidity risk. Effective risk 
        management strategies are essential to mitigate these risks. In decentralized finance, solutions such as oracles, 
        insurance funds, and liquidation mechanisms are employed to manage risks.
      </p>
      <h4 className="text-lg font-semibold mt-4">Key Risk Management Techniques</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Oracle Attacks:</strong> Derivatives reliant on oracles must ensure the integrity and reliability of data feeds.</li>
        <li><strong>Insurance Funds:</strong> DeFi platforms use insurance funds to backstop losses in case of liquidation failures.</li>
        <li><strong>Liquidation Mechanisms:</strong> Automated liquidation of positions when margin requirements are not met to prevent default.</li>
      </ul>
      <img 
        src="/risk-management-derivatives.png" 
        alt="Risk Management" 
        className="my-4 w-full max-w-md mx-auto"
      />
      <p>
        Effective risk management allows participants to engage in derivatives markets safely, even in volatile environments.
      </p>
    </div>
  );
};

export default RiskManagementInDerivatives;
