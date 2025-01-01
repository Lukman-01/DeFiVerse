import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const VaultContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Basic Vault Structure",
      code: `contract Vault {
    mapping(address => uint256) private balances;
    address public owner;
    IERC20 public token;
    
    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }
}`,
      explanation: "This is the basic structure of a vault contract. It tracks user balances, defines an owner, and specifies which token it manages."
    },
    {
      title: "Deposit Function",
      code: `function deposit(uint256 amount) external {
    require(amount > 0, "Amount must be greater than 0");
    require(token.transferFrom(msg.sender, address(this), amount), 
            "Transfer failed");
    balances[msg.sender] += amount;
    emit Deposit(msg.sender, amount);
}`,
      explanation: "The deposit function allows users to deposit tokens into the vault. It includes safety checks and updates the user's balance."
    },
    {
      title: "Withdrawal Function",
      code: `function withdraw(uint256 amount) external {
    require(amount > 0, "Amount must be greater than 0");
    require(balances[msg.sender] >= amount, 
            "Insufficient balance");
    balances[msg.sender] -= amount;
    require(token.transfer(msg.sender, amount), 
            "Transfer failed");
    emit Withdrawal(msg.sender, amount);
}`,
      explanation: "Users can withdraw their tokens using this function. It includes balance checks and handles the token transfer."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Vault Smart Contract</h2>
        <p className="mt-2 text-gray-600">
          A vault contract is a fundamental DeFi building block that safely stores user tokens
          while allowing for additional functionality like yield generation, lending, or staking.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Secure token storage with individual balance tracking</li>
          <li>Controlled access to deposited funds</li>
          <li>Support for ERC20 tokens</li>
          <li>Event emission for important actions</li>
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
          <li>Input validation for all user-supplied data</li>
          <li>Reentrancy protection for withdrawals</li>
          <li>Access control for administrative functions</li>
          <li>Safe token transfer handling</li>
        </ul>
      </div>
    </div>
  );
};

export default VaultContract;