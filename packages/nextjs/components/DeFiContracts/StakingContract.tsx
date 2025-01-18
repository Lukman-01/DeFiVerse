"use client";
import React from 'react';
import { BookOpen, Code, LightbulbIcon } from 'lucide-react';

// Simple Card Components
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

const StakingLearningPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding Staking Contracts</h1>
        <p className="text-gray-600">Learn How Token Staking Works in DeFi</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <CardTitle>What is Token Staking?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Think of staking like putting money in a special savings account. When you stake tokens, 
              you're essentially saying "I'll lock up my tokens for a while" and in return, you earn 
              rewards. It's like earning interest, but in the crypto world! The longer you keep your 
              tokens locked up, the more rewards you can earn.
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does Staking Work?</h3>
          <p className="text-gray-600">
            The staking process is straightforward:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>You deposit (stake) your tokens into the contract</li>
            <li>The contract keeps track of how much you've staked and when</li>
            <li>You earn rewards over time based on your staked amount</li>
            <li>You can claim your rewards whenever you want</li>
            <li>You can unstake your tokens when you're ready</li>
          </ul>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Simple Staking Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// Our Staking Contract
contract Staking {
    // The token that users can stake
    IERC20 public stakingToken;
    // The token given as rewards
    IERC20 public rewardToken;
    
    // Information about each person's stake
    struct Stake {
        uint256 amount;         // How much they staked
        uint256 startTime;      // When they started staking
        uint256 lastClaimTime;  // When they last claimed rewards
    }
    
    // Keep track of everyone's stakes
    mapping(address => Stake) public stakes;
    
    // How many reward tokens given per day per token staked
    uint256 public rewardRate = 100;
    
    // Minimum amount that can be staked
    uint256 public minimumStake = 100 * 10**18;  // 100 tokens

    // Function to stake tokens
    function stake(uint256 amount) external {
        require(amount >= minimumStake, "Need to stake more!");
        require(stakingToken.transferFrom(msg.sender, address(this), amount),
                "Transfer failed");
                
        // Get any rewards from previous stake
        if (stakes[msg.sender].amount > 0) {
            claimRewards();
        }
        
        // Update their stake info
        stakes[msg.sender].amount += amount;
        stakes[msg.sender].startTime = block.timestamp;
        stakes[msg.sender].lastClaimTime = block.timestamp;
    }

    // Calculate rewards earned
    function calculateRewards(address user) public view returns (uint256) {
        Stake memory stake = stakes[user];
        if (stake.amount == 0) return 0;
        
        uint256 duration = block.timestamp - stake.lastClaimTime;
        return (stake.amount * rewardRate * duration) / (1 days * 10**18);
    }

    // Claim earned rewards
    function claimRewards() public {
        uint256 rewards = calculateRewards(msg.sender);
        require(rewards > 0, "No rewards yet");
        
        stakes[msg.sender].lastClaimTime = block.timestamp;
        require(rewardToken.transfer(msg.sender, rewards),
                "Reward transfer failed");
    }

    // Withdraw staked tokens
    function unstake() external {
        Stake memory stake = stakes[msg.sender];
        require(stake.amount > 0, "Nothing staked");
        
        // Get final rewards
        claimRewards();
        
        // Return staked tokens
        uint256 amount = stake.amount;
        stakes[msg.sender].amount = 0;
        require(stakingToken.transfer(msg.sender, amount),
                "Transfer failed");
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
            {/* Basic Structure */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Basic Setup</h3>
              <p className="text-gray-600">
                The contract keeps track of two main things:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>The token you can stake (like putting money in a bank)</li>
                <li>The reward token you earn (like earning interest)</li>
                <li>How much each person has staked (like your account balance)</li>
                <li>When each person started staking (to calculate rewards)</li>
              </ul>
            </div>

            {/* Staking Process */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">How Staking Works</h3>
              <p className="text-gray-600">
                When you stake tokens:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>The contract checks if you're staking enough tokens (minimum amount)</li>
                <li>Your tokens are transferred to the contract for safekeeping</li>
                <li>The contract remembers how much you staked and when</li>
                <li>If you had tokens staked before, you get your rewards first</li>
              </ul>
            </div>

            {/* Rewards */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Earning and Claiming Rewards</h3>
              <p className="text-gray-600">
                The reward system works like this:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Rewards are calculated based on how many tokens you staked and for how long</li>
                <li>You can check your rewards at any time</li>
                <li>When you claim rewards, they're sent to your wallet</li>
                <li>The contract remembers when you last claimed, so you can earn more</li>
              </ul>
            </div>

            {/* Unstaking */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Getting Your Tokens Back</h3>
              <p className="text-gray-600">
                When you want to unstake:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>The contract first gives you any final rewards you've earned</li>
                <li>Then it returns all your staked tokens</li>
                <li>Your staking balance goes back to zero</li>
                <li>You can stake again whenever you want</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StakingLearningPlatform;