import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const EscrowContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Escrow State Management",
      code: `contract Escrow {
    struct Deal {
        address payer;
        address payee;
        uint256 amount;
        bool isPaid;
        bool isReleased;
        uint256 deadline;
    }
    
    mapping(uint256 => Deal) public deals;
    uint256 public dealCount;
}`,
      explanation: "The escrow contract maintains deals between parties, tracking the payment status and release conditions."
    },
    {
      title: "Create Escrow Deal",
      code: `function createDeal(
    address payee, 
    uint256 deadline
) external payable returns (uint256 dealId) {
    require(msg.value > 0, "Amount must be greater than 0");
    require(payee != address(0), "Invalid payee address");
    require(deadline > block.timestamp, "Invalid deadline");
    
    dealId = dealCount++;
    deals[dealId] = Deal({
        payer: msg.sender,
        payee: payee,
        amount: msg.value,
        isPaid: true,
        isReleased: false,
        deadline: deadline
    });
    
    emit DealCreated(dealId, msg.sender, payee, msg.value);
}`,
      explanation: "This function creates a new escrow deal, setting up the payment terms and conditions between parties."
    },
    {
      title: "Release Funds",
      code: `function releaseFunds(uint256 dealId) external {
    Deal storage deal = deals[dealId];
    require(msg.sender == deal.payer, "Only payer can release");
    require(deal.isPaid, "Deal not paid");
    require(!deal.isReleased, "Already released");
    
    deal.isReleased = true;
    (bool success, ) = deal.payee.call{value: deal.amount}("");
    require(success, "Transfer failed");
    
    emit FundsReleased(dealId, deal.payee, deal.amount);
}`,
      explanation: "The release function allows the payer to release funds to the payee once conditions are met."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Escrow Smart Contract</h2>
        <p className="mt-2 text-gray-600">
          An escrow contract acts as a trusted intermediary between parties,
          holding funds until specific conditions are met. It ensures secure
          and trustless transactions in decentralized environments.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Secure fund holding between parties</li>
          <li>Deadline-based execution</li>
          <li>Support for multiple simultaneous deals</li>
          <li>Clear state management</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Implementation Details</h3>
        {codeExamples.map((example, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <h4 className="font-semibold">{example.title}</h4>
            <pre className="bg-gray-50 p-3 rounded overflow-x-auto">
              <code>{example.code}</code>
            </pre>
            <p className="text-gray-600">{example.explanation}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Security Considerations</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Proper access control for fund release</li>
          <li>Deadline validation</li>
          <li>Safe fund transfer handling</li>
          <li>State management security</li>
        </ul>
      </div>
    </div>
  );
};

export default EscrowContract;