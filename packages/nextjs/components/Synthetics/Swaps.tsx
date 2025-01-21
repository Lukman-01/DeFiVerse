import React, { useState } from 'react';
import { ArrowDownUp, Percent, DollarSign, Shield, Repeat, AlertCircle } from 'lucide-react';

const Swaps: React.FC = () => {
  const [selectedSwap, setSelectedSwap] = useState<'fixed' | 'credit'>('fixed');
  const [showRateDetails, setShowRateDetails] = useState(false);

  const SwapCard = ({ 
    title, 
    description, 
    isActive, 
    onClick 
  }: { 
    title: string; 
    description: string; 
    isActive: boolean; 
    onClick: () => void 
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-lg text-left transition-all ${
        isActive 
          ? 'bg-blue-50 border-2 border-blue-500 shadow-lg' 
          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
      }`}
    >
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </button>
  );

  const SwapFlow = ({ type }: { type: 'fixed' | 'credit' }) => {
    if (type === 'fixed') {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold mb-4">Fixed-for-Floating Swap Flow</h4>
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold">Fixed Rate Payer</h5>
                  <p className="text-sm text-gray-600">Pays: {showRateDetails ? '5.7% × $1,000,000' : '5.7% Fixed'}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold">Floating Rate Payer</h5>
                  <p className="text-sm text-gray-600">Pays: {showRateDetails ? 'LIBOR × $1,000,000' : 'LIBOR Rate'}</p>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ArrowDownUp className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          <button 
            onClick={() => setShowRateDetails(!showRateDetails)}
            className="mt-4 text-blue-500 text-sm hover:underline"
          >
            {showRateDetails ? 'Hide Details' : 'Show Example Calculation'}
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-bold mb-4">Credit Default Swap Flow</h4>
        <div className="relative">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold">Protection Buyer</h5>
                <p className="text-sm text-gray-600">Pays periodic premium</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold">Protection Seller</h5>
                <p className="text-sm text-gray-600">Pays if credit event occurs</p>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Shield className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    );
  };

  const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
    <div className="flex items-start space-x-3 mb-4">
      <Icon className="w-5 h-5 mt-1 flex-shrink-0" />
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Swaps</h2>
        <p className="text-gray-600 text-lg">
          Financial instruments that enable parties to exchange streams of payments based on different variables
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <SwapCard
          title="Fixed-for-Floating Swap"
          description="Exchange fixed interest rate payments for floating rate payments"
          isActive={selectedSwap === 'fixed'}
          onClick={() => setSelectedSwap('fixed')}
        />
        <SwapCard
          title="Credit Default Swap"
          description="Protection against credit events in exchange for regular premium payments"
          isActive={selectedSwap === 'credit'}
          onClick={() => setSelectedSwap('credit')}
        />
      </div>

      <SwapFlow type={selectedSwap} />

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-bold mb-4">Key Benefits</h4>
          <Feature
            icon={Percent}
            title="Risk Management"
            description="Hedge against interest rate and credit risk exposure"
          />
          <Feature
            icon={DollarSign}
            title="Cost Efficiency"
            description="Lower transaction costs compared to cash market alternatives"
          />
          <Feature
            icon={Repeat}
            title="Flexibility"
            description="Customizable terms to match specific needs"
          />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-bold mb-4">Important Considerations</h4>
          <Feature
            icon={AlertCircle}
            title="Counterparty Risk"
            description="Risk of counterparty defaulting on payment obligations"
          />
          <Feature
            icon={AlertCircle}
            title="Market Risk"
            description="Exposure to changes in underlying rates or credit conditions"
          />
          <Feature
            icon={AlertCircle}
            title="Oracle Risk"
            description="Dependence on reliable rate benchmarks (e.g., LIBOR)"
          />
        </div>
      </div>
    </div>
  );
};

export default Swaps;