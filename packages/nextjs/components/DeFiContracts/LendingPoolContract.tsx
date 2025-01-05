import React from 'react';
import { Coins, Code, LightbulbIcon, ShieldAlert } from 'lucide-react';

// Custom Card Components
const Card = ({ children, className = '' }:any) => (
  <div className={`bg-white rounded-lg shadow-md border ${className}`}>
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

const LendingPoolPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding DeFi Lending Pools</h1>
        <p className="text-gray-600">Your Guide to Digital Banking Without Banks</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-blue-500" />
            <CardTitle>What is a Lending Pool?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Think of a lending pool like a community piggy bank where everyone can participate! 
              Some people put money in to earn interest (like a savings account), while others can 
              borrow from it by putting up collateral (like getting a loan from a bank, but using 
              other crypto as security). The more people borrow, the more interest lenders earn!
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does It Work?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">For Lenders</h4>
              <p className="text-gray-600">Deposit crypto and earn interest based on how much others borrow</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">For Borrowers</h4>
              <p className="text-gray-600">Lock some crypto as collateral and borrow other types of crypto</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Interest Rates</h4>
              <p className="text-gray-600">Change automatically based on how much of the pool is being used</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Lending Pool Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// SPDX-License-Identifier: MIT
contract LendingPool {
    // Think of Market like a piggy bank's status report
    struct Market {
        uint256 totalDeposits;     // How much money is in the piggy bank
        uint256 totalBorrows;      // How much has been borrowed
        uint256 utilizationRate;   // How much of the money is being used
        uint256 borrowAPY;         // Yearly interest rate for borrowers
        uint256 supplyAPY;         // Yearly interest rate for lenders
        uint256 collateralFactor;  // How much you can borrow against your deposit
    }
    
    // Think of UserAccount like your personal bank statement
    struct UserAccount {
        uint256 deposited;        // How much you've put in
        uint256 borrowed;         // How much you've borrowed
        uint256 lastUpdateTime;   // When was your last transaction
        bool isCollateral;        // Are you using this as collateral?
    }
    
    // Keep track of everyone's accounts and all markets
    mapping(address => mapping(address => UserAccount)) public userAccounts;
    mapping(address => Market) public markets;
    
    // Basic functions
    function deposit(address token, uint256 amount) external {
        // Check if the deposit is valid
        require(amount > 0, "Please deposit something!");
        
        // Update their account
        UserAccount storage account = userAccounts[msg.sender][token];
        account.deposited += amount;
        
        // Update the market totals
        Market storage market = markets[token];
        market.totalDeposits += amount;
        
        // Take their tokens and put them in the pool
        IERC20(token).transferFrom(msg.sender, address(this), amount);
    }
    
    function borrow(address token, uint256 amount) external {
        // Make sure they have enough collateral
        require(getHealthFactor(msg.sender) >= 1e18, "Need more collateral!");
        
        // Update their loan amount
        UserAccount storage account = userAccounts[msg.sender][token];
        account.borrowed += amount;
        
        // Update the market totals
        Market storage market = markets[token];
        market.totalBorrows += amount;
        
        // Send them the borrowed tokens
        IERC20(token).transfer(msg.sender, amount);
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
            {/* Market Structure */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Market Structure</h3>
              <p className="text-gray-600">
                Think of each Market like a dashboard for a specific cryptocurrency pool:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>It tracks how much money is in the pool (totalDeposits)</li>
                <li>It knows how much has been borrowed (totalBorrows)</li>
                <li>It calculates interest rates based on usage</li>
                <li>It sets rules for how much you can borrow</li>
              </ul>
            </div>

            {/* User Account */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Your Personal Account</h3>
              <p className="text-gray-600">
                Each user has their own account that tracks:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>How much you've deposited (like savings)</li>
                <li>How much you've borrowed (like loans)</li>
                <li>Whether you're using your deposits as collateral</li>
                <li>When you last made any changes</li>
              </ul>
            </div>

            {/* Interest Rates */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Smart Interest Rates</h3>
              <p className="text-gray-600">
                The pool automatically adjusts interest rates:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>When more people borrow, rates go up</li>
                <li>When fewer people borrow, rates go down</li>
                <li>Lenders earn more when demand is high</li>
                <li>Borrowers pay more when supply is low</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <CardTitle>Safety Features</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Built-in Protections</h3>
            <ul className="list-disc pl-6 space-y-2 text-red-800">
              <li>You must have more collateral than loans (like a safety deposit)</li>
              <li>Interest rates adjust to prevent the pool from running dry</li>
              <li>Each token type has its own risk settings</li>
              <li>All transactions are recorded on the blockchain</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LendingPoolPlatform;