"use client";

import React, { useState } from "react";
import { AlertTriangle, ChevronDown, Clock, Eye, FastForward, Network, Rewind, Shield } from "lucide-react";

interface AttackVector {
  id: string;
  title: string;
  description: string;
  implications: string[];
  icon: React.ReactNode;
  timeoutInfo?: {
    type: string;
    duration: string;
  }[];
}

const NetworkLayerSecurity: React.FC = () => {
  const [selectedAttack, setSelectedAttack] = useState<string | null>(null);
  const [showTimeouts, setShowTimeouts] = useState(false);

  const attackVectors: AttackVector[] = [
    {
      id: "spy-nodes",
      title: "Spy Nodes",
      description: "Malicious nodes that monitor and manipulate transaction propagation across the network",
      implications: [
        "Information gathering about transaction flows",
        "Network topology mapping",
        "Transaction source identification",
        "Strategic position for other attacks",
      ],
      icon: <Eye className="w-6 h-6" />,
    },
    {
      id: "front-running",
      title: "Front-Running",
      description: "Observing pending transactions and inserting competing transactions with higher gas prices",
      implications: [
        "MEV extraction",
        "Transaction ordering manipulation",
        "Price manipulation in DEX",
        "Unfair advantage in trading",
      ],
      icon: <FastForward className="w-6 h-6" />,
    },
    {
      id: "back-running",
      title: "Back-Running",
      description: "Deliberately delaying transactions to exploit time-sensitive opportunities",
      implications: [
        "Arbitrage exploitation",
        "Sandwich attacks",
        "Liquidation manipulation",
        "Market impact exploitation",
      ],
      icon: <Rewind className="w-6 h-6" />,
    },
    {
      id: "eclipse",
      title: "Eclipse Attacks",
      description: "Isolating nodes from the honest network by monopolizing their peer connections",
      implications: [
        "Double spending attacks",
        "Network partitioning",
        "Selective transaction filtering",
        "Block withholding",
      ],
      icon: <Shield className="w-6 h-6" />,
      timeoutInfo: [
        {
          type: "Block timeout",
          duration: "20 minutes",
        },
        {
          type: "Transaction timeout",
          duration: "2 minutes",
        },
      ],
    },
  ];

  const NetworkDiagram: React.FC = () => (
    <div className="relative h-48 mb-8 bg-blue-50 rounded-lg p-4">
      <div className="absolute w-full h-full flex items-center justify-center">
        <Network className="w-12 h-12 text-blue-500" />
      </div>
      <div className="absolute inset-0 flex items-center justify-around">
        {attackVectors.map(attack => (
          <div
            key={attack.id}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-all duration-300
              ${selectedAttack === attack.id ? "bg-red-500" : "bg-gray-200"}
            `}
          >
            {React.cloneElement(attack.icon as React.ReactElement, {
              className: `w-5 h-5 ${selectedAttack === attack.id ? "text-white" : "text-gray-600"}`,
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Network Layer Security</h1>
        <p className="text-gray-600">
          The network layer forms the foundation of blockchain communication, handling data propagation and peer-to-peer
          interactions. However, it presents various attack vectors that can compromise network integrity.
        </p>
      </div>

      <NetworkDiagram />

      <div className="space-y-4">
        {attackVectors.map(attack => (
          <div
            key={attack.id}
            className={`
              border rounded-lg transition-all duration-200
              ${selectedAttack === attack.id ? "bg-white shadow-lg" : "bg-white hover:shadow"}
            `}
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setSelectedAttack(selectedAttack === attack.id ? null : attack.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">{attack.icon}</div>
                  <h2 className="text-xl font-semibold">{attack.title}</h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 
                    ${selectedAttack === attack.id ? "rotate-180" : ""}`}
                />
              </div>

              {selectedAttack === attack.id && (
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">{attack.description}</p>
                  <div className="space-y-2">
                    <h3 className="font-medium">Security Implications:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {attack.implications.map(implication => (
                        <li key={implication} className="flex items-center space-x-2 text-sm">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span>{implication}</span>
                        </li>
                      ))}
                    </ul>

                    {attack.timeoutInfo && (
                      <div className="mt-4">
                        <div
                          className="flex items-center space-x-2 cursor-pointer text-blue-600"
                          onClick={e => {
                            e.stopPropagation();
                            setShowTimeouts(!showTimeouts);
                          }}
                        >
                          <Clock className="w-4 h-4" />
                          <span>Network Timeouts</span>
                        </div>

                        {showTimeouts && (
                          <div className="mt-2 pl-6 space-y-2">
                            {attack.timeoutInfo.map(timeout => (
                              <div key={timeout.type} className="text-sm">
                                <span className="font-medium">{timeout.type}:</span>
                                <span className="ml-2">{timeout.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-red-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <p className="text-sm text-red-800">
            Network layer attacks can have cascading effects on higher layers of the DeFi stack. Implementing proper
            monitoring and protection mechanisms is crucial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkLayerSecurity;
