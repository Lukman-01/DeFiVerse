import React, { useState } from 'react';
import { ArrowRight, Copy, AlertTriangle, Shield, RefreshCw } from 'lucide-react';

const Timeline = ({ steps, activeStep }: { 
  steps: Array<{title: string, description: string}>;
  activeStep: number;
}) => (
  <div className="relative">
    {steps.map((step, index) => (
      <div key={index} className="flex mb-8">
        <div className="flex flex-col items-center mr-4">
          <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
            index <= activeStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}>
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="h-full w-0.5 bg-gray-200 my-2" />
          )}
        </div>
        <div className={`transition-opacity duration-300 ${
          index === activeStep ? 'opacity-100' : 'opacity-50'
        }`}>
          <h3 className="font-semibold">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const MetricCard = ({ title, value, trend }: { 
  title: string;
  value: string;
  trend: 'up' | 'down';
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold">{value}</span>
      <span className={trend === 'up' ? 'text-red-500' : 'text-green-500'}>
        {trend === 'up' ? '↑' : '↓'}
      </span>
    </div>
  </div>
);

const TransactionReplayAttacks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const attackSteps = [
    {
      title: "Original Transaction Observed",
      description: "Attacker monitors the mempool for profitable transactions"
    },
    {
      title: "Transaction Copied",
      description: "Transaction data is duplicated and modified"
    },
    {
      title: "Signature Manipulation",
      description: "Transaction signatures are adjusted for the target chain"
    },
    {
      title: "Replay Execution",
      description: "Modified transaction is broadcast to exploit cross-chain vulnerabilities"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % attackSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-xl text-white">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Transaction Replay Attacks</h1>
        </div>
        <p className="text-lg opacity-90">
          Cross-chain exploitation through transaction duplication
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <MetricCard
          title="Profitable Transactions"
          value="188,365"
          trend="up"
        />
        <MetricCard
          title="Success Rate"
          value="0.02%"
          trend="down"
        />
        <MetricCard
          title="Average Profit"
          value="35M USD"
          trend="up"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Copy className="text-red-500" />
            Attack Flow
          </h2>
          <Timeline steps={attackSteps} activeStep={activeStep} />
        </div>

        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              Security Implications
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Real-time detection algorithm (0.18s ± 0.29)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Cross-chain vulnerability exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Network-wide transaction monitoring required</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="text-green-500" />
              Mitigation Strategies
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Chain-specific transaction nonces</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Replay protection via unique identifiers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Cross-chain signature verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionReplayAttacks;