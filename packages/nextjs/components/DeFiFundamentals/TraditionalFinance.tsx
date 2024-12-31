import React from 'react';

export default function TraditionalFinance() {
  return (
    <div>
      <h3>What is Traditional Finance (CeFi)?</h3>
      <p>
        Centralized Finance (CeFi) relies on intermediaries such as banks and financial institutions to manage money, assets, and transactions.
      </p>
      <h4>Features of CeFi</h4>
      <ul className="list-disc pl-6">
        <li><strong>Custodial Services:</strong> Funds are held by licensed entities.</li>
        <li><strong>Transaction Mediation:</strong> Intermediaries facilitate and verify transactions.</li>
        <li><strong>Regulation:</strong> Compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations.</li>
        <li><strong>Lack of Privacy:</strong> Customers' identities and transaction histories are fully visible to service providers.</li>
      </ul>
      <img 
        src="/traditional-finance.png" 
        alt="Traditional Finance Workflow" 
        className="my-4 w-full max-w-lg mx-auto"
      />
      <p>
        CeFi is essential for the current global financial system but has limitations such as high fees, slow transactions, and a lack of user control.
      </p>
    </div>
  );
}
