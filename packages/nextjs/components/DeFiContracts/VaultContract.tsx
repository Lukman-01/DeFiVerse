import React from 'react';
import { BookOpen, Code, LightbulbIcon } from 'lucide-react';

const Card = ({ children, className = '' }:any) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }:any) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }:any) => (
  <h2 className={`text-xl font-semibold ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = '' }:any) => (
  <div className={`px-6 pb-6 ${className}`}>
    {children}
  </div>
);

const DeFiLearningPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Rest of the component remains exactly the same... */}
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding DeFi Vaults</h1>
        <p className="text-gray-600">A Complete Guide from Concept to Code</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <CardTitle>What is a DeFi Vault?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Imagine a super-smart digital piggy bank. Just like a regular piggy bank holds your coins, 
              a DeFi vault holds your digital money (tokens). But it's much more powerful! It can automatically 
              grow your money by investing it in different opportunities, all while keeping it safe and secure.
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does It Work?</h3>
          <p className="text-gray-600">
            When you put tokens into a vault:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>The vault remembers exactly how much you deposited</li>
            <li>Only you can access your tokens (like having your personal locker)</li>
            <li>A smart contract keeps track of everyone's deposits</li>
            <li>Your tokens are secured by blockchain technology</li>
          </ul>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Simple DeFi Vault</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// This is our digital vault
contract SimpleVault {
    // Keep track of everyone's tokens
    mapping(address => uint256) userBalances;
    
    // Remember who owns the vault
    address vaultOwner;
    
    // Remember which type of token we're storing
    IERC20 token;
    
    // Set up the vault
    constructor(address tokenAddress) {
        vaultOwner = msg.sender;
        token = IERC20(tokenAddress);
    }
    
    // Let people check their balance
    function checkBalance() external view returns (uint256) {
        return userBalances[msg.sender];
    }
    
    // Let people add tokens
    function deposit(uint256 amount) external {
        // Make sure they're actually depositing something
        require(amount > 0, "Please deposit some tokens!");
        
        // Move their tokens into the vault
        token.transferFrom(msg.sender, address(this), amount);
        
        // Update their balance
        userBalances[msg.sender] += amount;
    }
    
    // Let people withdraw their tokens
    function withdraw(uint256 amount) external {
        // Make sure they have enough tokens
        require(userBalances[msg.sender] >= amount, 
                "You don't have enough tokens!");
        
        // Update their balance
        userBalances[msg.sender] -= amount;
        
        // Send them their tokens
        token.transfer(msg.sender, amount);
    }
}`}
            </code>
          </pre>
        </CardContent>
      </Card>

      {/* Explanation Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <LightbulbIcon className="w-6 h-6 text-yellow-500" />
            <CardTitle>Understanding the Code</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="grid gap-6">
            {/* User Balances */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Keeping Track of Tokens</h3>
              <p className="text-gray-600">
                <code className="bg-gray-200 px-1">userBalances</code> works like a spreadsheet:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Each user has their own row in the spreadsheet</li>
                <li>The spreadsheet shows how many tokens they have</li>
                <li>When they deposit, their number goes up</li>
                <li>When they withdraw, their number goes down</li>
              </ul>
            </div>

            {/* Deposit Function */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Deposit Function</h3>
              <p className="text-gray-600">
                Think of this like putting money in a piggy bank:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>First, it checks if you're actually putting something in</li>
                <li>Then it moves your tokens from your wallet to the vault</li>
                <li>Finally, it writes down how much you deposited</li>
              </ul>
            </div>

            {/* Withdraw Function */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Withdraw Function</h3>
              <p className="text-gray-600">
                This is like taking money out of your piggy bank:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>First, it checks if you have enough tokens to withdraw</li>
                <li>Then it updates your balance in the vault</li>
                <li>Finally, it sends the tokens back to your wallet</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeFiLearningPlatform;