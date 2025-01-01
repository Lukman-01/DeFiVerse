import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const StakingContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Staking Contract Structure",
      code: `contract Staking {
    IERC20 public stakingToken;    // Token that can be staked
    IERC20 public rewardToken;     // Token given as reward
    
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime;
    }
    
    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 100;  // Reward tokens per day per token staked
    uint256 public minimumStake = 100 * 10**18;  // Minimum stake amount
}`,
      explanation: "The base structure defines the staking and reward tokens, tracks user stakes, and sets basic parameters like reward rate and minimum stake amount."
    },
    {
      title: "Stake Function",
      code: `function stake(uint256 amount) external {
    require(amount >= minimumStake, "Below minimum stake");
    require(stakingToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed");
            
    // If user has existing stake, claim rewards first
    if (stakes[msg.sender].amount > 0) {
        claimRewards();
    }
    
    stakes[msg.sender].amount += amount;
    stakes[msg.sender].startTime = block.timestamp;
    stakes[msg.sender].lastClaimTime = block.timestamp;
    
    emit Staked(msg.sender, amount);
}`,
      explanation: "Users can stake tokens through this function. It handles the token transfer, updates stake information, and ensures minimum stake requirements are met."
    },
    {
      title: "Calculate and Claim Rewards",
      code: `function calculateRewards(address user) public view returns (uint256) {
    Stake memory stake = stakes[user];
    if (stake.amount == 0) return 0;
    
    uint256 duration = block.timestamp - stake.lastClaimTime;
    return (stake.amount * rewardRate * duration) / (1 days * 10**18);
}

function claimRewards() public {
    uint256 rewards = calculateRewards(msg.sender);
    require(rewards > 0, "No rewards to claim");
    
    stakes[msg.sender].lastClaimTime = block.timestamp;
    require(rewardToken.transfer(msg.sender, rewards),
            "Reward transfer failed");
            
    emit RewardsClaimed(msg.sender, rewards);
}`,
      explanation: "These functions calculate and distribute rewards based on stake amount and duration. Rewards are calculated proportionally to the time passed since last claim."
    },
    {
      title: "Unstake Function",
      code: `function unstake() external {
    Stake memory stake = stakes[msg.sender];
    require(stake.amount > 0, "No stake found");
    
    // Claim any pending rewards first
    claimRewards();
    
    uint256 amount = stake.amount;
    stakes[msg.sender].amount = 0;
    
    require(stakingToken.transfer(msg.sender, amount),
            "Transfer failed");
            
    emit Unstaked(msg.sender, amount);
}`,
      explanation: "Allows users to withdraw their staked tokens and claim final rewards. Ensures all rewards are paid before unstaking."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Staking Smart Contract</h2>
        <p className="mt-2 text-gray-600">
          A staking contract enables users to lock up tokens in return for rewards.
          This mechanism helps secure networks, provide liquidity, and incentivize
          long-term token holding.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Flexible reward distribution system</li>
          <li>Customizable staking periods</li>
          <li>Support for different reward tokens</li>
          <li>Real-time reward calculation</li>
          <li>Minimum stake requirements</li>
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
          <li>Protect against reward calculation overflow</li>
          <li>Ensure proper token transfer handling</li>
          <li>Implement emergency withdrawal mechanisms</li>
          <li>Consider front-running protection</li>
          <li>Regular reward token balance checks</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Common Use Cases</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Token distribution programs</li>
          <li>Liquidity mining</li>
          <li>Governance participation incentives</li>
          <li>Network security staking</li>
        </ul>
      </div>
    </div>
  );
};

export default StakingContract;