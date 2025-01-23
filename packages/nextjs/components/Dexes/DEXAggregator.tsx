import React, { useState } from 'react';
import { ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';

interface Route {
  path: string[];
  expectedOutput: number;
  slippage: number;
  gasCost: number;
}

interface Token {
  symbol: string;
  name: string;
  balance: number;
}

const DEXAggregator = () => {
  const [inputAmount, setInputAmount] = useState<string>('');
  const [selectedInputToken, setSelectedInputToken] = useState<string>('ETH');
  const [selectedOutputToken, setSelectedOutputToken] = useState<string>('DAI');
  
  // Sample tokens - in production this would come from an API
  const tokens: Token[] = [
    { symbol: 'ETH', name: 'Ethereum', balance: 1.5 },
    { symbol: 'DAI', name: 'Dai Stablecoin', balance: 1000 },
    { symbol: 'USDC', name: 'USD Coin', balance: 1000 },
  ];

  // Sample routes - in production this would be calculated based on current market data
  const routes: Route[] = [
    {
      path: ['Uniswap V3', 'SushiSwap'],
      expectedOutput: 1950.75,
      slippage: 0.1,
      gasCost: 0.005
    },
    {
      path: ['Curve', 'Balancer'],
      expectedOutput: 1945.50,
      slippage: 0.15,
      gasCost: 0.004
    }
  ];

  const TokenSelector = ({ 
    selected, 
    onChange, 
    tokens 
  }: { 
    selected: string; 
    onChange: (value: string) => void; 
    tokens: Token[] 
  }) => (
    <div className="w-full">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        {tokens.map((token) => (
          <option key={token.symbol} value={token.symbol}>
            {token.symbol} - {token.name}
          </option>
        ))}
      </select>
      {tokens.find(t => t.symbol === selected) && (
        <div className="text-sm text-gray-600 mt-1">
          Balance: {tokens.find(t => t.symbol === selected)?.balance} {selected}
        </div>
      )}
    </div>
  );

  const RouteCard = ({ route }: { route: Route }) => (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="flex items-center space-x-2 mb-3">
        {route.path.map((dex, index) => (
          <React.Fragment key={dex}>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {dex}
            </span>
            {index < route.path.length - 1 && (
              <ArrowRight className="w-4 h-4 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-gray-600">Expected Output</div>
          <div className="font-semibold">{route.expectedOutput} {selectedOutputToken}</div>
        </div>
        <div>
          <div className="text-gray-600">Slippage</div>
          <div className="font-semibold">{route.slippage}%</div>
        </div>
        <div>
          <div className="text-gray-600">Gas Cost</div>
          <div className="font-semibold">{route.gasCost} ETH</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">DEX Aggregator</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <AlertCircle className="w-4 h-4" />
          <span>We aggregate liquidity from multiple DEXs to find you the best price</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">You Pay</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="0.0"
                className="flex-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <TokenSelector
                selected={selectedInputToken}
                onChange={setSelectedInputToken}
                tokens={tokens}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <RefreshCw className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">You Receive</label>
            <div className="flex space-x-4">
              <input
                type="number"
                readOnly
                value={inputAmount ? Number(inputAmount) * 1950.75 : ''}
                placeholder="0.0"
                className="flex-1 p-3 rounded-lg bg-gray-100 border border-gray-300"
              />
              <TokenSelector
                selected={selectedOutputToken}
                onChange={setSelectedOutputToken}
                tokens={tokens}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Routes</h2>
        {routes.map((route, index) => (
          <RouteCard key={index} route={route} />
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Why Use Our DEX Aggregator?</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Best prices through smart routing across multiple DEXs</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Minimized slippage for large trades through route splitting</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Gas-optimized transactions with efficient routing</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DEXAggregator;