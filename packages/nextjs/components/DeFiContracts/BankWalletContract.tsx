"use client";
import React from 'react';
import { Wallet, Code, LightbulbIcon, ShieldCheck } from 'lucide-react';

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

const BankWalletPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding Smart Contract Wallets</h1>
        <p className="text-gray-600">Your Guide to Digital Banking on the Blockchain</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Wallet className="w-6 h-6 text-blue-500" />
            <CardTitle>What is a Smart Contract Wallet?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Think of a smart contract wallet as your personal digital bank account with superpowers! 
              Just like a regular bank account lets you store money and set spending limits, this digital 
              wallet lets you do all that and more. You can set daily spending limits, authorize other 
              people to spend on your behalf (like giving someone a debit card), and keep your funds 
              secure with automatic safety features.
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does It Work?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Store Money</h4>
              <p className="text-gray-600">Deposit and store your digital currency safely</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Set Limits</h4>
              <p className="text-gray-600">Control how much can be spent each day</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Share Access</h4>
              <p className="text-gray-600">Let trusted friends or family spend from your account</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Smart Wallet Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// SPDX-License-Identifier: MIT
contract SmartWallet {
    // Think of Account like your bank account details
    struct Account {
        uint256 balance;           // How much money you have
        mapping(address => bool) approvedSpenders;  // Who can spend your money
        uint256 dailyLimit;        // How much can be spent per day
        uint256 lastWithdrawal;    // When was the last withdrawal
        uint256 withdrawnToday;    // How much spent today
    }
    
    // Keep track of everyone's accounts
    mapping(address => Account) public accounts;
    
    // Deposit money into your account
    function deposit() external payable {
        require(msg.value > 0, "Please send some money!");
        accounts[msg.sender].balance += msg.value;
    }
    
    // Withdraw money with daily limit check
    function withdraw(uint256 amount) external {
        Account storage account = accounts[msg.sender];
        
        // Make sure you have enough money
        require(account.balance >= amount, "Not enough money!");
        
        // Check if we need to reset the daily counter
        if (block.timestamp - account.lastWithdrawal >= 1 days) {
            account.withdrawnToday = 0;
            account.lastWithdrawal = block.timestamp;
        }
        
        // Make sure we haven't exceeded daily limit
        require(account.withdrawnToday + amount <= account.dailyLimit,
                "You've spent too much today!");
                
        // Update balances and send money
        account.withdrawnToday += amount;
        account.balance -= amount;
        payable(msg.sender).transfer(amount);
    }
    
    // Let someone else spend from your account
    function addApprovedSpender(address spender) external {
        accounts[msg.sender].approvedSpenders[spender] = true;
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
            {/* Account Structure */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Your Account Details</h3>
              <p className="text-gray-600">
                Each account keeps track of:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Your current balance (like a bank statement)</li>
                <li>Who you've allowed to spend your money (like sharing a debit card)</li>
                <li>Your daily spending limit (like a card limit)</li>
                <li>How much you've spent today (to stay within limits)</li>
              </ul>
            </div>

            {/* Deposit and Withdrawal */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Managing Your Money</h3>
              <p className="text-gray-600">
                The wallet lets you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Put money in at any time (deposit)</li>
                <li>Take money out within your daily limits (withdraw)</li>
                <li>Check your balance at any time</li>
                <li>Reset your spending limit each day</li>
              </ul>
            </div>

            {/* Approved Spenders */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Sharing Access</h3>
              <p className="text-gray-600">
                You can safely share your wallet by:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Adding trusted spenders to your account</li>
                <li>Letting them spend within your daily limits</li>
                <li>Removing access whenever you want</li>
                <li>Tracking who spent what and when</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-red-500" />
            <CardTitle>Safety Features</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Built-in Protections</h3>
            <ul className="list-disc pl-6 space-y-2 text-red-800">
              <li>Daily spending limits protect your money</li>
              <li>Only approved people can spend from your account</li>
              <li>All transactions are recorded on the blockchain</li>
              <li>Emergency freeze option if something goes wrong</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankWalletPlatform;