"use client";
import React from 'react';
import { Shield, Code, LightbulbIcon, Lock } from 'lucide-react';

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

const EscrowLearningPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding Digital Escrow</h1>
        <p className="text-gray-600">Your Guide to Secure Digital Transactions</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <CardTitle>What is a Digital Escrow?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Think of a digital escrow like a trusted middleman for online transactions. Just like when 
              buying a house, where a third party holds the money until all paperwork is complete, a digital 
              escrow holds cryptocurrency or digital assets until both parties fulfill their agreements. It's 
              like a digital safety deposit box with smart rules!
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does It Work?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Step 1: Deposit</h4>
              <p className="text-gray-600">The buyer puts their money in the escrow contract</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Step 2: Lock</h4>
              <p className="text-gray-600">The money is locked until conditions are met</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Step 3: Release</h4>
              <p className="text-gray-600">Once everyone's happy, the money goes to the seller</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Simple Escrow Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// SPDX-License-Identifier: MIT
contract SimpleEscrow {
    // Structure to track each deal
    struct Deal {
        address buyer;      // Who's paying
        address seller;     // Who's getting paid
        uint256 amount;     // How much money
        bool isComplete;    // Is the deal done?
        uint256 deadline;   // When does it expire?
    }
    
    // Keep track of all deals
    mapping(uint256 => Deal) public deals;
    uint256 public dealCount;
    
    // Create a new deal
    function createDeal(address seller, uint256 deadline) 
        external 
        payable 
        returns (uint256) 
    {
        require(msg.value > 0, "Please send some money!");
        require(deadline > block.timestamp, "Deadline must be in future!");
        
        uint256 dealId = dealCount++;
        deals[dealId] = Deal({
            buyer: msg.sender,
            seller: seller,
            amount: msg.value,
            isComplete: false,
            deadline: deadline
        });
        
        return dealId;
    }
    
    // Complete the deal and send money to seller
    function completeDeal(uint256 dealId) external {
        Deal storage deal = deals[dealId];
        require(msg.sender == deal.buyer, "Only buyer can complete!");
        require(!deal.isComplete, "Deal already done!");
        require(block.timestamp <= deal.deadline, "Deal expired!");
        
        deal.isComplete = true;
        (bool sent,) = deal.seller.call{value: deal.amount}("");
        require(sent, "Failed to send money!");
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
            {/* Deal Structure */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Deal Structure</h3>
              <p className="text-gray-600">
                Think of each Deal like a digital receipt that contains:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Who's paying (the buyer)</li>
                <li>Who's getting paid (the seller)</li>
                <li>How much money is involved</li>
                <li>Whether the deal is finished or not</li>
                <li>When the deal expires</li>
              </ul>
            </div>

            {/* Creating a Deal */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Creating a New Deal</h3>
              <p className="text-gray-600">
                When someone creates a deal:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>They must send some money (no empty deals allowed!)</li>
                <li>They set a future deadline (can't expire immediately)</li>
                <li>The contract remembers all the deal details</li>
                <li>The money is safely locked in the contract</li>
              </ul>
            </div>

            {/* Completing a Deal */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Completing the Deal</h3>
              <p className="text-gray-600">
                When it's time to complete the deal:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Only the buyer can complete the deal (safety first!)</li>
                <li>The deal must not be already completed</li>
                <li>It must not be expired</li>
                <li>The money automatically goes to the seller</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Lock className="w-6 h-6 text-red-500" />
            <CardTitle>Safety Features</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Built-in Protections</h3>
            <ul className="list-disc pl-6 space-y-2 text-red-800">
              <li>Money can't disappear - it's either with the contract or with the seller</li>
              <li>Only the buyer can release the funds</li>
              <li>Deals have deadlines to prevent money being locked forever</li>
              <li>Each deal is separate and secure from others</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EscrowLearningPlatform;