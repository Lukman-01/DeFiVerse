"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Droplet,
  RefreshCcw,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Helper function to calculate constant product curve points
const generatePoolData = (
  initialX: number,
  initialY: number,
  points: number,
) => {
  const k = initialX * initialY;
  const data = [];
  for (let x = initialX * 0.5; x <= initialX * 1.5; x += initialX / points) {
    const y = k / x;
    data.push({ x, y });
  }
  return data;
};

// Props for LiquidityPool component
interface LiquidityPoolProps {
  tokenA: string;
  tokenB: string;
  amountA: number;
  amountB: number;
}

// Component for displaying liquidity pool
const LiquidityPool: React.FC<LiquidityPoolProps> = ({
  tokenA,
  tokenB,
  amountA,
  amountB,
}) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Liquidity Pool</h3>
      <span className="text-sm text-gray-500">k = x * y</span>
    </div>
    <div className="flex justify-around items-center">
      <div className="text-center">
        <Droplet className="w-8 h-8 text-blue-500 mx-auto mb-2" />
        <p className="font-semibold">{tokenA}</p>
        <p className="text-2xl font-bold text-blue-600">
          {amountA.toLocaleString()}
        </p>
      </div>
      <div className="text-center">
        <Droplet className="w-8 h-8 text-purple-500 mx-auto mb-2" />
        <p className="font-semibold">{tokenB}</p>
        <p className="text-2xl font-bold text-purple-600">
          {amountB.toLocaleString()}
        </p>
      </div>
    </div>
  </div>
);

// Props for SlippageSimulator component
interface SlippageSimulatorProps {
  poolSize: number;
}

// Slippage simulator component
const SlippageSimulator: React.FC<SlippageSimulatorProps> = ({ poolSize }) => {
  const [tradeAmount, setTradeAmount] = useState(100);
  const k = poolSize * poolSize; // Assuming equal initial liquidity

  const calculateSlippage = () => {
    const newY = k / (poolSize + tradeAmount);
    const idealPrice = poolSize / poolSize;
    const actualPrice = newY / (poolSize + tradeAmount);
    return ((1 - actualPrice / idealPrice) * 100).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Slippage Simulator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Trade Amount
          </label>
          <input
            type="range"
            min="0"
            max={poolSize}
            value={tradeAmount}
            onChange={(e) => setTradeAmount(Number(e.target.value))}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>0</span>
            <span>{tradeAmount}</span>
            <span>{poolSize}</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-700">Expected Slippage:</p>
          <p className="text-2xl font-bold text-blue-600">
            {calculateSlippage()}%
          </p>
        </div>
      </div>
    </div>
  );
};

const AutomatedMarketMaker = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const poolData = generatePoolData(1000, 1000, 50);

  const tabs = [
    { id: "overview", name: "Overview", icon: TrendingUp },
    { id: "impermanentLoss", name: "Impermanent Loss", icon: AlertTriangle },
    { id: "liquidity", name: "Liquidity", icon: Wallet },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Automated Market Maker (AMM)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Smart contracts that enable automated trading through liquidity pools,
          replacing traditional order books with mathematical price formulas.
        </p>
      </div>

      <div className="flex space-x-4 border-b">
        {tabs.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 
              ${
                activeTab === id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Icon className="w-4 h-4" />
            <span>{name}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <LiquidityPool
          tokenA="Token A"
          tokenB="Token B"
          amountA={1000}
          amountB={1000}
        />
        <SlippageSimulator poolSize={1000} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Constant Product Curve</h2>
        <div className="h-64">
          <ResponsiveContainer>
            <LineChart data={poolData}>
              <XAxis
                dataKey="x"
                label={{ value: "Token A Amount", position: "bottom" }}
              />
              <YAxis
                dataKey="y"
                label={{
                  value: "Token B Amount",
                  angle: -90,
                  position: "left",
                }}
              />
              <Tooltip formatter={(value) => Number(value).toFixed(2)} />
              <Line type="monotone" dataKey="y" stroke="#3B82F6" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Additional Components */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <RefreshCcw className="w-5 h-5 mr-2 text-blue-500" />
            Constant Product
          </h3>
          <p className="text-gray-600">
            AMMs maintain a constant product (k) between token reserves: x * y =
            k. This ensures liquidity is always available at some price.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
            Price Impact
          </h3>
          <p className="text-gray-600">
            Larger trades have higher price impact due to the constant product
            formula. This is known as slippage and affects trading efficiency.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
            Impermanent Loss
          </h3>
          <p className="text-gray-600">
            LP tokens may be worth less than holding assets separately due to
            price changes, resulting in impermanent loss upon withdrawal.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Popular AMM Protocols</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">Uniswap</h3>
            <p className="text-gray-600">
              Pioneered the x*y=k formula for DEXes. Simple and efficient design
              for general token pairs.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold">Curve Finance</h3>
            <p className="text-gray-600">
              Specialized for stable assets with low slippage and high
              efficiency trading between similar-priced assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedMarketMaker;
