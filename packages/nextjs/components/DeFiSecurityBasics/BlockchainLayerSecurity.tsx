"use client";

import React, { useState } from "react";
import { AlertTriangle, ArrowRight, ChevronDown, Copy, DollarSign, Server } from "lucide-react";

interface AttackScenario {
  id: string;
  title: string;
  description: string;
  consequences: string[];
  icon: React.ReactNode;
  diagram: React.ReactNode;
}

const BlockchainLayerSecurity: React.FC = () => {
  const [selectedAttack, setSelectedAttack] = useState<string | null>(null);

  // Mining power visualization helper
  const MiningPowerBar: React.FC<{ percentage: number; color: string }> = ({ percentage, color }) => (
    <div className="w-full h-4 bg-gray-200 rounded">
      <div className={`h-full rounded ${color}`} style={{ width: `${percentage}%` }} />
    </div>
  );

  // Blockchain visualization component
  const BlockchainDiagram: React.FC<{ type: string }> = ({ type }) => {
    const Block: React.FC<{ label: string; variant?: string }> = ({ label, variant = "normal" }) => (
      <div
        className={`
        w-16 h-16 flex items-center justify-center rounded
        ${variant === "hidden" ? "bg-red-100 border-red-300" : "bg-blue-100 border-blue-300"}
        border-2 relative
      `}
      >
        <span className="text-sm font-medium">{label}</span>
        <ArrowRight className="absolute -right-4 z-10 w-4 h-4 text-gray-500" />
      </div>
    );

    switch (type) {
      case "double-spending":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Block label="B1" />
              <Block label="B2" />
              <Block label="B3" />
            </div>
            <div className="flex items-center gap-2">
              <Block label="B1" />
              <Block label="B2'" variant="hidden" />
              <Block label="B3'" variant="hidden" />
            </div>
          </div>
        );
      case "selfish-mining":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Block label="B1" />
              <Block label="B2" />
              <Block label="B3" variant="hidden" />
            </div>
          </div>
        );
      case "bribery":
        return (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Block label="B1" />
              <Block label="B2" />
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
            <div className="flex items-center gap-2">
              <Block label="B2'" variant="hidden" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const attackScenarios: AttackScenario[] = [
    {
      id: "double-spending",
      title: "Double-Spending Attack",
      description:
        "An attacker attempts to spend the same funds multiple times by creating a parallel chain and convincing recipients that a transaction was confirmed.",
      consequences: [
        "Loss of funds for merchants",
        "Reduced trust in the network",
        "Economic damage to the ecosystem",
        "Potential market price impact",
      ],
      icon: <Copy className="w-6 h-6" />,
      diagram: <BlockchainDiagram type="double-spending" />,
    },
    {
      id: "selfish-mining",
      title: "Selfish Mining",
      description:
        "Miners withhold discovered blocks to gain an unfair advantage, potentially forcing other miners to waste computational power on already-solved blocks.",
      consequences: [
        "Increased mining advantage",
        "Waste of network resources",
        "Centralization risks",
        "Reduced mining profitability for honest miners",
      ],
      icon: <Server className="w-6 h-6" />,
      diagram: <BlockchainDiagram type="selfish-mining" />,
    },
    {
      id: "bribery",
      title: "Bribery Attacks",
      description:
        "Attackers offer financial incentives to miners to reorganize the blockchain or include specific transactions, undermining network security.",
      consequences: [
        "Compromised consensus",
        "Transaction censorship",
        "Network instability",
        "Manipulation of transaction ordering",
      ],
      icon: <DollarSign className="w-6 h-6" />,
      diagram: <BlockchainDiagram type="bribery" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blockchain Layer Security</h1>
        <p className="text-gray-600">
          The blockchain layer manages consensus and incentive mechanisms, making it crucial for network security and
          stability. Various attack vectors target these mechanisms to undermine network integrity.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Network Mining Power Distribution</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Honest Miners</span>
              <span>75%</span>
            </div>
            <MiningPowerBar percentage={75} color="bg-green-500" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Potential Attacker</span>
              <span>25%</span>
            </div>
            <MiningPowerBar percentage={25} color="bg-red-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {attackScenarios.map(attack => (
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

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-4">Attack Visualization:</h3>
                    {attack.diagram}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Consequences:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {attack.consequences.map(consequence => (
                        <li key={consequence} className="flex items-center space-x-2 text-sm">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span>{consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          <p className="text-sm text-yellow-800">
            Blockchain layer attacks can severely impact network security and require significant mining power or
            financial resources to execute. Proper monitoring and defensive measures are essential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainLayerSecurity;
