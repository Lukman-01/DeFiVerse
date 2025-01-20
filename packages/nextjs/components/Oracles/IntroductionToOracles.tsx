import React, { useState, useEffect } from 'react';
import { Globe, Database, Link, RefreshCw, Shield, AlertTriangle } from 'lucide-react';

const IntroductionToOracles = () => {
  const [currentPrice, setCurrentPrice] = useState(2000);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const variation = Math.random() * 40 - 20;
      setCurrentPrice(prev => Number((prev + variation).toFixed(2)));
      setLastUpdate(new Date());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const OracleSimulator = () => {
    const [isHealthy, setIsHealthy] = useState(true);
    
    const toggleHealth = () => {
      setIsHealthy(!isHealthy);
    };

    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Live Oracle Simulator</h4>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <RefreshCw className={`w-6 h-6 ${isHealthy ? 'text-green-500' : 'text-red-500'}`} />
            <span className="font-medium">Oracle Status: {isHealthy ? 'Healthy' : 'Delayed'}</span>
          </div>
          <button
            onClick={toggleHealth}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Toggle Status
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">ETH Price</p>
              <p className="text-2xl font-bold">${currentPrice}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Update</p>
              <p className="text-sm">{lastUpdate.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DataFlowVisualizer = () => {
    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 4;

    const steps = [
      {
        title: "Off-chain Data Sources",
        description: "Multiple price feeds from exchanges",
        icon: <Globe className="w-8 h-8 text-blue-500" />
      },
      {
        title: "Oracle Network",
        description: "Data aggregation and validation",
        icon: <Database className="w-8 h-8 text-green-500" />
      },
      {
        title: "Smart Contract",
        description: "On-chain price reference",
        icon: <Link className="w-8 h-8 text-purple-500" />
      },
      {
        title: "DeFi Protocol",
        description: "Price-dependent operations",
        icon: <Shield className="w-8 h-8 text-orange-500" />
      }
    ];

    return (
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Oracle Data Flow</h4>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all"
            style={{ width: `${(activeStep / totalSteps) * 100}%` }}
          />
          
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center"
                onClick={() => setActiveStep(index + 1)}
              >
                <div className={`
                  rounded-full p-2 bg-white border-2 
                  ${index + 1 <= activeStep ? 'border-blue-500' : 'border-gray-200'}
                  cursor-pointer transition-colors
                `}>
                  {step.icon}
                </div>
                <div className="mt-2 text-center">
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h3 className="text-2xl font-bold">Introduction to Oracles</h3>
          <p className="mt-4 text-gray-600">
            Price oracles are critical infrastructure in DeFi lending, providing reliable price feeds 
            that enable key protocol functions like collateral valuation and liquidation triggers.
          </p>
        </div>

        <div className="p-6 space-y-8">
          {/* Key Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-3">Oracle Security</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span>Multiple data sources for accuracy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Cryptographic verification of data</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-3">DeFi Integration</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-500" />
                  <span>Real-time price updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link className="w-5 h-5 text-blue-500" />
                  <span>Smart contract compatibility</span>
                </li>
              </ul>
            </div>
          </div>

          <OracleSimulator />
          <DataFlowVisualizer />

        </div>
      </div>
    </div>
  );
};

export default IntroductionToOracles;