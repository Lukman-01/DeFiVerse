import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const YieldFarmingContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Core Yield Farming Contract",
      code: `contract YieldFarming {
    struct Pool {
        address stakingToken;
        address rewardToken;
        uint256 rewardRate; // Rewards per block
        uint256 lastUpdateBlock;
        uint256 rewardPerTokenStored;
        uint256 totalStaked;
    }

    mapping(address => Pool) public pools;
    mapping(address => mapping(address => uint256)) public userStakes; // user => pool => amount staked
    mapping(address => mapping(address => uint256)) public userRewards; // user => pool => reward
    mapping(address => mapping(address => uint256)) public userRewardPerTokenPaid; // user => pool => reward per token

    event Staked(address indexed user, address indexed pool, uint256 amount);
    event Withdrawn(address indexed user, address indexed pool, uint256 amount);
    event RewardClaimed(address indexed user, address indexed pool, uint256 reward);
}`,
      explanation: "Defines the core structures for yield farming pools, including staking and reward mechanisms."
    },
    {
      title: "Stake Tokens",
      code: `function stake(address pool, uint256 amount) external {
    Pool storage poolData = pools[pool];
    require(amount > 0, "Cannot stake zero");

    updateReward(msg.sender, pool);

    // Transfer staking tokens
    IERC20(poolData.stakingToken).transferFrom(msg.sender, address(this), amount);

    // Update user stake
    userStakes[msg.sender][pool] += amount;
    poolData.totalStaked += amount;

    emit Staked(msg.sender, pool, amount);
}

function updateReward(address user, address pool) internal {
    Pool storage poolData = pools[pool];
    poolData.rewardPerTokenStored = rewardPerToken(pool);
    poolData.lastUpdateBlock = block.number;

    if (user != address(0)) {
        userRewards[user][pool] = earned(user, pool);
        userRewardPerTokenPaid[user][pool] = poolData.rewardPerTokenStored;
    }
}

function rewardPerToken(address pool) public view returns (uint256) {
    Pool storage poolData = pools[pool];
    if (poolData.totalStaked == 0) return poolData.rewardPerTokenStored;

    return poolData.rewardPerTokenStored +
        ((block.number - poolData.lastUpdateBlock) * poolData.rewardRate * 1e18 / poolData.totalStaked);
}`,
      explanation: "Allows users to stake tokens in a yield farming pool and calculates rewards based on staked amounts and time."
    },
    {
      title: "Withdraw Staked Tokens",
      code: `function withdraw(address pool, uint256 amount) external {
    Pool storage poolData = pools[pool];
    require(userStakes[msg.sender][pool] >= amount, "Insufficient stake");

    updateReward(msg.sender, pool);

    // Update user stake
    userStakes[msg.sender][pool] -= amount;
    poolData.totalStaked -= amount;

    // Transfer staking tokens back
    IERC20(poolData.stakingToken).transfer(msg.sender, amount);

    emit Withdrawn(msg.sender, pool, amount);
}`,
      explanation: "Enables users to withdraw their staked tokens from a yield farming pool while maintaining reward calculations."
    },
    {
      title: "Claim Rewards",
      code: `function claimReward(address pool) external {
    updateReward(msg.sender, pool);

    uint256 reward = userRewards[msg.sender][pool];
    require(reward > 0, "No rewards available");

    userRewards[msg.sender][pool] = 0;

    Pool storage poolData = pools[pool];
    IERC20(poolData.rewardToken).transfer(msg.sender, reward);

    emit RewardClaimed(msg.sender, pool, reward);
}`,
      explanation: "Allows users to claim accumulated rewards from a yield farming pool."
    },
    {
      title: "Add New Pool",
      code: `function addPool(
    address stakingToken,
    address rewardToken,
    uint256 rewardRate
) external onlyOwner {
    require(pools[stakingToken].stakingToken == address(0), "Pool already exists");

    pools[stakingToken] = Pool({
        stakingToken: stakingToken,
        rewardToken: rewardToken,
        rewardRate: rewardRate,
        lastUpdateBlock: block.number,
        rewardPerTokenStored: 0,
        totalStaked: 0
    });
}`,
      explanation: "Allows the owner to add a new yield farming pool by specifying staking and reward tokens and the reward rate."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Yield Farming Contract Code Examples</h1>
      {codeExamples.map((example, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">{example.title}</h2>
          <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto my-2">
            <code>{example.code}</code>
          </pre>
          <p className="text-gray-700">{example.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default YieldFarmingContract;
