"use client";

import React, { useState } from "react";
import { AlertTriangle, Calculator, Coins, Info, TrendingUp } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

interface Pool {
  id: string;
  name: string;
  token1: string;
  token2: string;
  apr: number;
  tvl: number;
  dailyVolume: number;
  rewards: {
    tradingFees: number;
    tokenRewards: number;
  };
}

interface UserPosition {
  poolId: string;
  stakedAmount: number;
  pendingRewards: number;
  value: number;
}

const LiquidityMining = () => {
  const [selectedPool, setSelectedPool] = useState<string>("");
  const [stakeAmount, setStakeAmount] = useState<string>("");

  // Sample historical APR data for chart
  const aprHistory = [
    { date: "1 Week Ago", apr: 45 },
    { date: "6 Days Ago", apr: 42 },
    { date: "5 Days Ago", apr: 48 },
    { date: "4 Days Ago", apr: 52 },
    { date: "3 Days Ago", apr: 49 },
    { date: "2 Days Ago", apr: 51 },
    { date: "Yesterday", apr: 47 },
    { date: "Today", apr: 45 },
  ];

  // Sample pools data
  const pools: Pool[] = [
    {
      id: "1",
      name: "ETH-USDC",
      token1: "ETH",
      token2: "USDC",
      apr: 45.2,
      tvl: 10500000,
      dailyVolume: 2500000,
      rewards: {
        tradingFees: 0.03,
        tokenRewards: 25,
      },
    },
    {
      id: "2",
      name: "BTC-ETH",
      token1: "BTC",
      token2: "ETH",
      apr: 38.5,
      tvl: 15800000,
      dailyVolume: 3200000,
      rewards: {
        tradingFees: 0.03,
        tokenRewards: 20,
      },
    },
  ];

  // Sample user positions
  const userPositions: UserPosition[] = [
    {
      poolId: "1",
      stakedAmount: 5000,
      pendingRewards: 125.5,
      value: 5250,
    },
  ];

  const PoolCard = ({ pool }: { pool: Pool }) => (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold">{pool.name} Pool</h3>
          <p className="text-gray-600 text-sm">Total Value Locked: ${pool.tvl.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{pool.apr}% APR</div>
          <p className="text-gray-600 text-sm">Daily Volume: ${pool.dailyVolume.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Trading Fee Rewards</div>
          <div className="text-lg font-semibold">{pool.rewards.tradingFees}%</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Token Rewards</div>
          <div className="text-lg font-semibold">{pool.rewards.tokenRewards} tokens/day</div>
        </div>
      </div>

      <button
        onClick={() => setSelectedPool(pool.id)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Provide Liquidity
      </button>
    </div>
  );

  const RewardsCalculator = () => {
    const pool = pools.find(p => p.id === selectedPool);
    const estimatedDailyReward = pool && stakeAmount ? (Number(stakeAmount) * (pool.apr / 100)) / 365 : 0;

    return (
      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Rewards Calculator
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stake Amount (USD)</label>
            <input
              type="number"
              value={stakeAmount}
              onChange={e => setStakeAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount..."
            />
          </div>

          {stakeAmount && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Estimated Daily Rewards</div>
              <div className="text-xl font-bold">${estimatedDailyReward.toFixed(2)}</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const UserDashboard = () => (
    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <Coins className="w-5 h-5 mr-2" />
        Your Positions
      </h3>

      {userPositions.map(position => {
        const pool = pools.find(p => p.id === position.poolId);
        return (
          <div key={position.poolId} className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Staked in {pool?.name}</div>
                <div className="text-lg font-semibold">${position.stakedAmount.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Pending Rewards</div>
                <div className="text-lg font-semibold text-green-600">${position.pendingRewards.toLocaleString()}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Liquidity Mining</h1>
        <p className="text-gray-600">Earn rewards by providing liquidity to our decentralized exchange pools.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Available Pools
          </h2>
          {pools.map(pool => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>

        <div>
          <UserDashboard />
          <RewardsCalculator />

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Historical APR
            </h2>
            <LineChart width={500} height={300} data={aprHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="apr" stroke="#2563eb" />
            </LineChart>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
          Important Notes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>APR rates are variable and not guaranteed</li>
          <li>Consider gas costs when depositing or withdrawing liquidity</li>
          <li>Impermanent loss may affect your returns</li>
          <li>Always research pools and tokens before providing liquidity</li>
        </ul>
      </div>
    </div>
  );
};

export default LiquidityMining;
