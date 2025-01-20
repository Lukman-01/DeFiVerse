import React, { useState, useEffect } from 'react';
import { Server, Shield, AlertTriangle, XCircle, CheckCircle, Radio, Network } from 'lucide-react';

const BasicOracleDesign = () => {
  const [networkHealth, setNetworkHealth] = useState(100);
  const [activeNodes, setActiveNodes] = useState(5);
  const [isAttackSimulated, setIsAttackSimulated] = useState(false);

  // Simulate network health fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAttackSimulated) {
        setNetworkHealth(prev => Math.min(100, Math.max(0, prev + Math.random() * 10 - 5)));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isAttackSimulated]);

  const NetworkVisualizer = () => {
    const totalNodes = 5;

    const simulateAttack = () => {
      setIsAttackSimulated(true);
      setNetworkHealth(40);
      setActiveNodes(2);
      setTimeout(() => {
        setIsAttackSimulated(false);
        setNetworkHealth(100);
        setActiveNodes(5);
      }, 3000);
    };

    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-semibold">Oracle Network Simulator</h4>
          <button
            onClick={simulateAttack}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            disabled={isAttackSimulated}
          >
            Simulate Attack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Network Status */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h5 className="font-medium mb-4">Network Status</h5>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Health</span>
                  <span>{networkHealth.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${networkHealth}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Active Nodes</span>
                  <span>{activeNodes}/{totalNodes}</span>
                </div>
                <div className="flex space-x-2">
                  {[...Array(totalNodes)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < activeNodes ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Attack Vector Display */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h5 className="font-medium mb-4">Current Threats</h5>
            <div className="space-y-3">
              <div className={`flex items-center gap-2 ${
                isAttackSimulated ? 'text-red-500' : 'text-gray-600'
              }`}>
                <AlertTriangle className="w-5 h-5" />
                <span>Miner Manipulation Risk</span>
              </div>
              <div className={`flex items-center gap-2 ${
                activeNodes < totalNodes ? 'text-red-500' : 'text-gray-600'
              }`}>
                <Radio className="w-5 h-5" />
                <span>Node Liveness Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SecurityMeasures = () => {
    const measures = [
      {
        icon: <Shield className="w-6 h-6 text-green-500" />,
        title: "Decentralized Network",
        description: "Multiple independent nodes validate data feeds"
      },
      {
        icon: <Network className="w-6 h-6 text-blue-500" />,
        title: "Redundancy",
        description: "Multiple data sources ensure reliability"
      },
      {
        icon: <Server className="w-6 h-6 text-purple-500" />,
        title: "Consensus Mechanism",
        description: "Node agreement required for data updates"
      }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {measures.map((measure, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              {measure.icon}
              <h5 className="font-medium">{measure.title}</h5>
            </div>
            <p className="text-sm text-gray-600">{measure.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h3 className="text-2xl font-bold">Basic Oracle Design (Part I)</h3>
          <p className="mt-4 text-gray-600">
            The foundation of oracle design focuses on maintaining data integrity while 
            addressing key challenges in decentralized environments. Understanding these 
            challenges is crucial for building robust DeFi applications.
          </p>
        </div>

        <div className="p-6 space-y-8">
          {/* Challenge Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold mb-3">Primary Challenges</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>Miner manipulation of data feeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>Node availability issues</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>Data feed reliability</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-3">Solution Approaches</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Decentralized oracle networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Multiple data sources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Consensus mechanisms</span>
                </li>
              </ul>
            </div>
          </div>

          <NetworkVisualizer />
          
          <div className="border-t pt-8">
            <h4 className="text-lg font-semibold mb-6">Security Measures</h4>
            <SecurityMeasures />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicOracleDesign;