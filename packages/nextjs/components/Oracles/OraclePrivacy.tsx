"use client";

import React, { useState, useEffect } from 'react';
import {Shield, Key, CheckCircle, AlertTriangle, Cpu} from 'lucide-react';

// Types and interfaces
interface PrivacyTechnique {
  id: string;
  name: string;
  description: string;
  advantages: string[];
  limitations: string[];
  icon: React.ReactNode;
  useCases: string[];
}

interface PrivacyMetric {
  name: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

interface DemoStep {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

const OraclePrivacy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tee');
  const [demoSteps, setDemoSteps] = useState<DemoStep[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const privacyTechniques: PrivacyTechnique[] = [
    {
      id: 'tee',
      name: 'Trusted Execution Environments (TEEs)',
      description: 'Hardware-based secure enclaves for private data processing',
      advantages: [
        'Hardware-level security guarantees',
        'High performance',
        'Remote attestation capability'
      ],
      limitations: [
        'Reliance on hardware manufacturer',
        'Potential side-channel attacks',
        'Limited processing capacity'
      ],
      icon: <Cpu className="w-6 h-6" />,
      useCases: [
        'Private identity verification',
        'Confidential transaction processing',
        'Secure multi-party computation'
      ]
    },
    {
      id: 'deco',
      name: 'DECO Cryptographic Proofs',
      description: 'TLS-based oracle protocol for private data attestation',
      advantages: [
        'No hardware requirements',
        'Works with existing TLS infrastructure',
        'Flexible proof generation'
      ],
      limitations: [
        'Computational overhead',
        'TLS dependency',
        'Complex implementation'
      ],
      icon: <Key className="w-6 h-6" />,
      useCases: [
        'Private API data verification',
        'Selective disclosure proofs',
        'Cross-chain privacy'
      ]
    },
    {
      id: 'zkp',
      name: 'Zero-Knowledge Proofs',
      description: 'Cryptographic methods to prove data validity without revealing it',
      advantages: [
        'Mathematical privacy guarantees',
        'No trusted hardware needed',
        'Flexible proof composition'
      ],
      limitations: [
        'High computational cost',
        'Complex setup process',
        'Proof size challenges'
      ],
      icon: <Shield className="w-6 h-6" />,
      useCases: [
        'Private identity verification',
        'Compliance verification',
        'Private data aggregation'
      ]
    }
  ];

  // Interactive demonstration steps
  const initializeDemoSteps = (): DemoStep[] => [
    {
      id: 1,
      title: 'Data Encryption',
      description: 'Sensitive data is encrypted before processing',
      isActive: false
    },
    {
      id: 2,
      title: 'Secure Processing',
      description: 'Data is processed in a secure enclave',
      isActive: false
    },
    {
      id: 3,
      title: 'Proof Generation',
      description: 'Generate proof of valid computation',
      isActive: false
    },
    {
      id: 4,
      title: 'Verification',
      description: 'Verify proof without accessing raw data',
      isActive: false
    }
  ];

  const startDemo = () => {
    setIsSimulating(true);
    setDemoSteps(initializeDemoSteps());
    
    // Simulate step-by-step process
    const interval = setInterval(() => {
      setDemoSteps(prev => {
        const currentStep = prev.findIndex(step => !step.isActive);
        if (currentStep === -1) {
          clearInterval(interval);
          setIsSimulating(false);
          return prev;
        }
        return prev.map((step, idx) => ({
          ...step,
          isActive: idx <= currentStep ? true : false
        }));
      });
    }, 1500);
  };

  const PrivacyTechniqueCard: React.FC<{ technique: PrivacyTechnique }> = ({ technique }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          {technique.icon}
        </div>
        <h4 className="text-lg font-semibold">{technique.name}</h4>
      </div>
      <p className="text-gray-600 mb-4">{technique.description}</p>
      
      <div className="space-y-4">
        <div>
          <h5 className="font-medium mb-2">Advantages</h5>
          <ul className="space-y-1">
            {technique.advantages.map((adv, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {adv}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Limitations</h5>
          <ul className="space-y-1">
            {technique.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                {lim}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const PrivacyDemo: React.FC = () => (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold">Interactive Privacy Demo</h4>
        <button
          onClick={startDemo}
          disabled={isSimulating}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isSimulating ? 'Simulating...' : 'Start Demo'}
        </button>
      </div>

      <div className="space-y-4">
        {demoSteps.map(step => (
          <div
            key={step.id}
            className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
              step.isActive ? 'bg-green-50 border border-green-200' : 'bg-white'
            }`}
          >
            {step.isActive ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            )}
            <div>
              <h5 className="font-medium">{step.title}</h5>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Oracle Privacy</h2>
          <p className="mt-4 text-gray-600">
            Privacy is a critical concern in oracle systems, particularly for sensitive applications.
            Learn about various techniques used to maintain data privacy while ensuring oracle reliability.
          </p>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {privacyTechniques.map(technique => (
              <PrivacyTechniqueCard key={technique.id} technique={technique} />
            ))}
          </div>

          <PrivacyDemo />

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Real-World Implementation Example</h4>
            <p className="mb-4">
              Consider a flight insurance system using TEE-based privacy:
            </p>
            <ol className="space-y-2 pl-4">
              <li>1. Flight data is encrypted and sent to TEE</li>
              <li>2. TEE verifies flight status privately</li>
              <li>3. Only delay confirmation is published on-chain</li>
              <li>4. Smart contract executes based on verified result</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              This ensures that sensitive flight details remain private while maintaining
              system transparency and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OraclePrivacy;