
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, ArrowDown, Users, Banknote } from 'lucide-react';

interface BankRunStage {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  impact: string;
}

interface PriceDataPoint {
  timestamp: number;
  price: number;
  liquidity: number;
}

const DeFiBankRun: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [priceData, setPriceData] = useState<PriceDataPoint[]>([]);

  const stages: BankRunStage[] = [
    {
      id: 1,
      title: "Trigger Event",
      description: "A significant event (e.g., USDT blacklist enforcement or loss of reserves) causes initial concern",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      impact: "Price begins to deviate from peg"
    },
    {
      id: 2,
      title: "Initial Exodus",
      description: "Early traders begin exiting pools, causing initial price pressure",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      impact: "Liquidity starts decreasing"
    },
    {
      id: 3,
      title: "Panic Selling",
      description: "Mass exodus from pools as users rush to exit positions",
      icon: <ArrowDown className="w-6 h-6 text-red-600" />,
      impact: "Sharp price decline and liquidity drain"
    },
    {
      id: 4,
      title: "Liquidity Crisis",
      description: "Pools become severely imbalanced, leading to extreme slippage",
      icon: <Banknote className="w-6 h-6 text-purple-600" />,
      impact: "Price discovery becomes difficult"
    }
  ];

  // Generate simulation data
  const generateSimulationData = (stage: number): PriceDataPoint[] => {
    const data: PriceDataPoint[] = [];
    const totalPoints = 50;
    
    for (let i = 0; i < totalPoints; i++) {
      let price = 1.0;
      let liquidity = 100;
      
      switch (stage) {
        case 1:
          price = 1.0 - (Math.random() * 0.02);
          liquidity = 100 - (i * 0.2);
          break;
        case 2:
          price = 0.98 - (Math.random() * 0.05);
          liquidity = 90 - (i * 0.5);
          break;
        case 3:
          price = 0.93 - (Math.random() * 0.1);
          liquidity = 70 - (i * 1);
          break;
        case 4:
          price = 0.83 - (Math.random() * 0.2);
          liquidity = 40 - (i * 1.5);
          break;
        default:
          break;
      }
      
      data.push({
        timestamp: i,
        price: Math.max(price, 0.5),
        liquidity: Math.max(liquidity, 0)
      });
    }
    
    return data;
  };

  useEffect(() => {
    setPriceData(generateSimulationData(currentStage));
  }, [currentStage]);

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentStage(1);
    
    const interval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev >= stages.length) {
          clearInterval(interval);
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">DeFi Bank Run Simulation</h2>
          <button
            onClick={startSimulation}
            disabled={isSimulating}
            className={`px-4 py-2 rounded-lg ${
              isSimulating 
                ? 'bg-gray-200 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isSimulating ? 'Simulating...' : 'Start Simulation'}
          </button>
        </div>
        <p className="mt-2 text-gray-600">
          Visualizing the stages and impact of a DeFi bank run event
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Stages */}
        <div className="md:col-span-1 space-y-4">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`p-4 rounded-lg border transition-all ${
                currentStage >= stage.id
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                {stage.icon}
                <h3 className="font-semibold">{stage.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{stage.description}</p>
              {currentStage >= stage.id && (
                <p className="text-sm text-red-600 mt-2">
                  Impact: {stage.impact}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Charts */}
        <div className="md:col-span-2 space-y-6">
          {/* Price Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-4">Price Impact</h4>
            <div className="h-48">
              <ResponsiveContainer>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" />
                  <YAxis domain={[0.5, 1.1]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Liquidity Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-4">Liquidity Drain</h4>
            <div className="h-48">
              <ResponsiveContainer>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="liquidity" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Management Section */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold mb-2">Risk Management Strategies</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Circuit Breakers",
              description: "Implement temporary trading halts during extreme volatility"
            },
            {
              title: "Liquidity Reserves",
              description: "Maintain emergency liquidity pools to stabilize prices"
            },
            {
              title: "Smart Contract Audits",
              description: "Regular security reviews to prevent technical failures"
            },
            {
              title: "Monitoring Systems",
              description: "Real-time tracking of key risk indicators"
            }
          ].map((strategy, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                <span className="text-blue-600 text-sm">{index + 1}</span>
              </div>
              <div>
                <h5 className="font-medium">{strategy.title}</h5>
                <p className="text-sm text-gray-600">{strategy.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeFiBankRun;