import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const BankWalletContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Bank Contract Structure",
      code: `contract BankWallet {
    struct Account {
        uint256 balance;
        mapping(address => bool) approvedSpenders;
        uint256 dailyLimit;
        uint256 lastWithdrawal;
        uint256 withdrawnToday;
    }
    
    mapping(address => Account) public accounts;
    mapping(address => bool) public frozenAccounts;
    
    uint256 public defaultDailyLimit = 1 ether;
    address public admin;
}`,
      explanation: "The bank contract maintains user accounts with balances, spending limits, and approved spenders. It includes basic security features like account freezing."
    },
    {
      title: "Deposit and Balance Management",
      code: `function deposit() external payable {
    require(msg.value > 0, "Amount must be positive");
    require(!frozenAccounts[msg.sender], "Account frozen");
    
    accounts[msg.sender].balance += msg.value;
    emit Deposit(msg.sender, msg.value);
}

function getBalance() external view returns (uint256) {
    return accounts[msg.sender].balance;
}

function setDailyLimit(uint256 newLimit) external {
    require(newLimit > 0, "Invalid limit");
    accounts[msg.sender].dailyLimit = newLimit;
    emit DailyLimitUpdated(msg.sender, newLimit);
}`,
      explanation: "These functions handle deposits, balance checking, and daily limit management. Includes safety checks and event emission."
    },
    {
      title: "Withdrawal and Spending",
      code: `function withdraw(uint256 amount) external {
    Account storage account = accounts[msg.sender];
    require(amount > 0, "Amount must be positive");
    require(!frozenAccounts[msg.sender], "Account frozen");
    require(account.balance >= amount, "Insufficient balance");
    
    // Check daily limit
    if (block.timestamp - account.lastWithdrawal >= 1 days) {
        account.withdrawnToday = 0;
        account.lastWithdrawal = block.timestamp;
    }
    
    require(account.withdrawnToday + amount <= account.dailyLimit,
            "Daily limit exceeded");
            
    account.withdrawnToday += amount;
    account.balance -= amount;
    
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    
    emit Withdrawal(msg.sender, amount);
}`,
      explanation: "The withdrawal function includes daily limit checks, balance validation, and secure transfer handling."
    },
    {
      title: "Spender Management",
      code: `function addApprovedSpender(address spender) external {
    require(spender != address(0), "Invalid address");
    accounts[msg.sender].approvedSpenders[spender] = true;
    emit SpenderApproved(msg.sender, spender);
}

function removeApprovedSpender(address spender) external {
    accounts[msg.sender].approvedSpenders[spender] = false;
    emit SpenderRemoved(msg.sender, spender);
}

function spendFrom(
    address from,
    uint256 amount
) external {
    require(accounts[from].approvedSpenders[msg.sender],
            "Not approved");
    require(accounts[from].balance >= amount,
            "Insufficient balance");
    
    accounts[from].balance -= amount;
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    
    emit SpenderWithdrawal(from, msg.sender, amount);
}`,
      explanation: "These functions manage approved spenders who can access the account, implementing a delegation system for spending."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Bank/Wallet Smart Contract</h2>
        <p className="mt-2 text-gray-600">
          A decentralized bank/wallet contract provides secure storage and management
          of funds with features like spending limits, approved spenders, and
          basic banking functionality.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Secure fund storage and management</li>
          <li>Daily withdrawal limits</li>
          <li>Delegated spending system</li>
          <li>Account freezing capability</li>
          <li>Transaction history tracking</li>
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
          <li>Secure withdrawal processes</li>
          <li>Access control for administrative functions</li>
          <li>Rate limiting for transactions</li>
          <li>Emergency freeze functionality</li>
          <li>Proper handling of delegated access</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Common Use Cases</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personal wallet management</li>
          <li>Corporate treasury management</li>
          <li>Multi-user accounts</li>
          <li>Controlled spending accounts</li>
        </ul>
      </div>
    </div>
  );
};

export default BankWalletContract;