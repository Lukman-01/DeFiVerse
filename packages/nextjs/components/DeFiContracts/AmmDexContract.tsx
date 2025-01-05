import React from 'react';
import { BarChart2, Code, LightbulbIcon, ArrowLeftRight, Droplet } from 'lucide-react';

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

const AmmDexPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Understanding AMM DEX</h1>
        <p className="text-gray-600">Your Guide to Automated Market Makers and Decentralized Exchanges</p>
      </div>

      {/* Concept Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <BarChart2 className="w-6 h-6 text-blue-500" />
            <CardTitle>What is an AMM DEX?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              An AMM (Automated Market Maker) DEX is like a robot-powered trading post! 
              Instead of traditional order books with buyers and sellers, it uses a mathematical 
              formula (x * y = k) to automatically determine prices. Users can trade tokens 
              directly with a liquidity pool, and other users can earn fees by providing 
              liquidity to these pools.
            </p>
          </div>
          
          <h3 className="font-semibold text-lg mt-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Liquidity Pools</h4>
              <p className="text-gray-600">Paired token reserves that enable trading</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Price Formula</h4>
              <p className="text-gray-600">x * y = k determines trade prices</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">LP Tokens</h4>
              <p className="text-gray-600">Represents pool ownership shares</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Contract Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-500" />
            <CardTitle>Core AMM Contract</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// SPDX-License-Identifier: MIT
contract ConstantProductAMM {
    struct Pool {
        uint256 reserve0;      // First token reserve
        uint256 reserve1;      // Second token reserve
        uint256 totalShares;   // Total LP tokens
        uint256 kLast;         // Last K value (reserve0 * reserve1)
    }
    
    mapping(address => mapping(address => Pool)) public pools;
    mapping(address => mapping(address => uint256)) public userShares;
    
    uint256 public constant MINIMUM_LIQUIDITY = 1000;
    uint256 public constant FEE_DENOMINATOR = 1000;
    uint256 public constant LP_FEE = 3;  // 0.3%
    
    function addLiquidity(
        address token0,
        address token1,
        uint256 amount0Desired,
        uint256 amount1Desired,
        uint256 amount0Min,
        uint256 amount1Min
    ) external returns (uint256 shares) {
        // Add liquidity implementation
    }
    
    function swap(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 minAmountOut,
        address recipient
    ) external returns (uint256 amountOut) {
        // Swap implementation
    }
}`}
            </code>
          </pre>
        </CardContent>
      </Card>

      {/* Liquidity Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <Droplet className="w-6 h-6 text-purple-500" />
            <CardTitle>Understanding Liquidity</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="grid gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Providing Liquidity</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Must provide both tokens in the correct ratio</li>
                <li>Initial provider sets the price</li>
                <li>Minimum liquidity is locked forever</li>
                <li>Receive LP tokens representing your share</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">LP Token Mechanics</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>LP tokens track your portion of the pool</li>
                <li>Earn fees proportional to your share</li>
                <li>Can be withdrawn to reclaim tokens</li>
                <li>May be used in other DeFi protocols</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trading Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <ArrowLeftRight className="w-6 h-6 text-orange-500" />
            <CardTitle>Trading Mechanics</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">How Swaps Work</h3>
            <ul className="list-disc pl-6 space-y-2 text-orange-800">
              <li>Trades change the ratio of tokens in the pool</li>
              <li>Larger trades have higher price impact</li>
              <li>0.3% fee goes to liquidity providers</li>
              <li>Slippage protection through minAmountOut</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Price Impact Formula</h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <code>
                Δy = (y * Δx) / (x + Δx)
                Price Impact = (original K - new K) / original K
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Price Oracle Section */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <LightbulbIcon className="w-6 h-6 text-yellow-500" />
            <CardTitle>Price Oracle and Calculations</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Understanding Prices</h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-800">
              <li>Current price = reserve1 / reserve0</li>
              <li>Price impact increases with trade size</li>
              <li>K value tracks pool stability</li>
              <li>Oracle provides price data for other contracts</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AmmDexPlatform;