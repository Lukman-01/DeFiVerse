import React from 'react';
import { Coins, Code, LightbulbIcon, TrendingUp } from 'lucide-react';

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

const YieldFarmingPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding Yield Farming</h1>
        <p className="text-gray-600">Your Guide to Earning Rewards in DeFi</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-blue-500" />
            <CardTitle>What is Yield Farming?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Yield farming is like a high-tech savings account for cryptocurrency! 
              Instead of just holding your tokens, you can "stake" them in special pools 
              to earn additional rewards. Think of it as putting your money to work - 
              you deposit tokens, and in return, you earn more tokens as rewards over time.
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">How Does It Work?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stake Tokens</h4>
              <p className="text-gray-600">Deposit your tokens into farming pools</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Earn Rewards</h4>
              <p className="text-gray-600">Accumulate rewards based on your stake</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Claim & Withdraw</h4>
              <p className="text-gray-600">Collect rewards and withdraw anytime</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>The Code: Yield Farming Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// SPDX-License-Identifier: MIT
contract YieldFarming {
    struct Pool {
        address stakingToken;      // Token you deposit
        address rewardToken;       // Token you earn
        uint256 rewardRate;        // Rewards per block
        uint256 lastUpdateBlock;   // Last reward update
        uint256 rewardPerTokenStored;
        uint256 totalStaked;       // Total tokens in pool
    }
    
    mapping(address => Pool) public pools;
    mapping(address => mapping(address => uint256)) public userStakes;
    mapping(address => mapping(address => uint256)) public userRewards;
    
    function stake(address pool, uint256 amount) external {
        Pool storage poolData = pools[pool];
        require(amount > 0, "Cannot stake zero");
        
        updateReward(msg.sender, pool);
        IERC20(poolData.stakingToken).transferFrom(msg.sender, address(this), amount);
        
        userStakes[msg.sender][pool] += amount;
        poolData.totalStaked += amount;
    }
    
    function withdraw(address pool, uint256 amount) external {
        require(userStakes[msg.sender][pool] >= amount, "Insufficient stake");
        
        updateReward(msg.sender, pool);
        userStakes[msg.sender][pool] -= amount;
        poolData.totalStaked -= amount;
        
        IERC20(poolData.stakingToken).transfer(msg.sender, amount);
    }
    
    function claimReward(address pool) external {
        updateReward(msg.sender, pool);
        uint256 reward = userRewards[msg.sender][pool];
        userRewards[msg.sender][pool] = 0;
        IERC20(poolData.rewardToken).transfer(msg.sender, reward);
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
            {/* Pool Structure */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Pool Structure</h3>
              <p className="text-gray-600">
                Each yield farming pool tracks:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Which token you can stake (stakingToken)</li>
                <li>Which token you earn as rewards (rewardToken)</li>
                <li>How many rewards are given per block (rewardRate)</li>
                <li>Total amount of tokens staked by all users</li>
              </ul>
            </div>

            {/* Staking Process */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Staking Process</h3>
              <p className="text-gray-600">
                When you stake tokens:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Your rewards are calculated and updated</li>
                <li>Tokens are transferred to the contract</li>
                <li>Your stake is recorded in the pool</li>
                <li>Total staked amount is increased</li>
              </ul>
            </div>

            {/* Rewards System */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Rewards System</h3>
              <p className="text-gray-600">
                The rewards system:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Calculates rewards based on blocks passed</li>
                <li>Tracks individual user rewards</li>
                <li>Allows claiming of earned rewards</li>
                <li>Updates rewards automatically on stake/withdraw</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earnings Calculator */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-purple-500" />
            <CardTitle>How Rewards Are Calculated</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Reward Formula</h3>
            <ul className="list-disc pl-6 space-y-2 text-purple-800">
              <li>Rewards per token = (blocks passed × reward rate) ÷ total staked</li>
              <li>Your rewards = your stake × (current rewards per token - last rewards per token)</li>
              <li>Rewards update every block while you're staked</li>
              <li>Claim rewards anytime without affecting your stake</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YieldFarmingPlatform;