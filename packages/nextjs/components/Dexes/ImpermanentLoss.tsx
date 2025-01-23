// ImpermanentLoss.tsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, AlertTriangle, TrendingUp, DollarSign, Info } from 'lucide-react';

interface PoolState {
  ethAmount: number;
  daiAmount: number;
  ethPrice: number;
  totalValue: number;
  impermanentLoss: number;
}

interface PoolSimulationProps {
  initialEthPrice: number;
  newEthPrice: number;
}

interface ILCalculatorProps {
  onCalculate: (loss: number) => void;
}

const PoolSimulation: React.FC<PoolSimulationProps> = ({ initialEthPrice, newEthPrice }) => {
  const calculatePoolState = (ethPrice: number): PoolState => {
    const initialEth = 10;
    const initialDai = 1000;
    const k = initialEth * initialDai;
    
    const newEth = Math.sqrt(k / ethPrice);
    const newDai = k / newEth;
    
    const hodlValue = initialEth * ethPrice + initialDai;
    const poolValue = newEth * ethPrice + newDai;
    const impermanentLoss = ((poolValue / hodlValue) - 1) * 100;
    
    return {
      ethAmount: newEth,
      daiAmount: newDai,
      ethPrice: ethPrice,
      totalValue: poolValue,
      impermanentLoss: impermanentLoss
    };
  };

  const generateChartData = () => {
    const data = [];
    const priceRange = newEthPrice - initialEthPrice;
    for (let i = 0; i <= 10; i++) {
      const currentPrice = initialEthPrice + (priceRange * (i / 10));
      const state = calculatePoolState(currentPrice);
      data.push({
        price: currentPrice,
        impermanentLoss: state.impermanentLoss.toFixed(2)
      });
    }
    return data;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Pool Value Simulation</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={generateChartData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="price" 
              label={{ value: 'ETH Price (DAI)', position: 'bottom' }} 
            />
            <YAxis 
              label={{ value: 'Impermanent Loss (%)', angle: -90, position: 'insideLeft' }} 
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="impermanentLoss" 
              stroke="#2563eb" 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ILCalculator: React.FC<ILCalculatorProps> = ({ onCalculate }) => {
  const [initialPrice, setInitialPrice] = useState<number>(100);
  const [finalPrice, setFinalPrice] = useState<number>(400);
  const [initialLiquidity, setInitialLiquidity] = useState<number>(1000);

  const calculateIL = () => {
    const priceRatio = finalPrice / initialPrice;
    const sqrtPriceRatio = Math.sqrt(priceRatio);
    const il = 2 * (sqrtPriceRatio / (1 + sqrtPriceRatio)) - 1;
    onCalculate(il * 100);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Impermanent Loss Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial ETH Price (DAI)</label>
          <input
            type="number"
            value={initialPrice}
            onChange={(e) => setInitialPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Final ETH Price (DAI)</label>
          <input
            type="number"
            value={finalPrice}
            onChange={(e) => setFinalPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={calculateIL}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Calculate Loss
        </button>
      </div>
    </div>
  );
};

const Example: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Real-World Example</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-medium mb-2">Initial State</h4>
          <p className="text-sm text-gray-600">
            1 ETH = 100 DAI
            Pool Share: 10%
            Assets: 1 ETH + 100 DAI
            Value: 200 USD
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-medium mb-2">Price Change</h4>
          <p className="text-sm text-gray-600">
            1 ETH = 400 DAI
            Arbitrage occurs
            Assets rebalanced
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-medium mb-2">Final State</h4>
          <p className="text-sm text-gray-600">
            0.5 ETH + 200 DAI
            Value: 400 USD
            IL Loss: 100 USD vs. HODL
          </p>
        </div>
      </div>
    </div>
  );
};

const ImpermanentLoss: React.FC = () => {
  const [calculatedLoss, setCalculatedLoss] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Impermanent Loss</h1>
          <div className="flex items-start space-x-2">
            <Info className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600">
              Impermanent loss occurs when the value of assets provided to a liquidity pool changes
              relative to their value if held outside the pool. The loss becomes permanent only when
              liquidity is withdrawn from the pool.
            </p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Considerations</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Impermanent loss can result in total loss of funds. Trading fees and liquidity mining
                rewards may help offset losses, but risks remain significant during high volatility periods.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="grid md:grid-cols-2 gap-8">
          <ILCalculator onCalculate={setCalculatedLoss} />
          {calculatedLoss !== null && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Calculated Impact</h3>
              <div className="text-3xl font-bold text-blue-600">
                {calculatedLoss.toFixed(2)}% Loss
              </div>
              <p className="text-sm text-gray-600 mt-2">
                This represents the percentage loss compared to holding the assets.
              </p>
            </div>
          )}
        </div>

        {/* Pool Simulation */}
        <PoolSimulation initialEthPrice={100} newEthPrice={400} />

        {/* Example Scenario */}
        <Example />

        {/* Mitigation Strategies */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Mitigation Strategies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <DollarSign className="w-6 h-6 text-green-500" />
              <h3 className="font-medium">Stablecoin Pools</h3>
              <p className="text-sm text-gray-600">
                Provide liquidity in stablecoin-only pools to minimize price volatility risks.
              </p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              <h3 className="font-medium">Optimize Curves</h3>
              <p className="text-sm text-gray-600">
                Use pools with optimized bonding curves designed to reduce impermanent loss exposure.
              </p>
            </div>
            <div className="space-y-2">
              <Calculator className="w-6 h-6 text-purple-500" />
              <h3 className="font-medium">Fee Analysis</h3>
              <p className="text-sm text-gray-600">
                Calculate potential returns from trading fees and rewards to offset impermanent loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpermanentLoss;