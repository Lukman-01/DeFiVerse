import React, { useState } from 'react';
import { 
  Coins, 
  Users, 
  Zap, 
  Globe, 
  Lock, 
  TrendingUp,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const BenefitCard = ({ icon, title, description, stats }:any) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {stats && (
      <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
        {stats}
      </div>
    )}
  </div>
);

const FeaturePoint = ({ children }:any) => (
  <div className="flex items-center space-x-2 text-gray-700">
    <ChevronRight className="h-4 w-4 text-blue-500" />
    <span>{children}</span>
  </div>
);

const WhyLearnDeFi = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Financial Inclusion",
      description: "Access financial services without traditional banking requirements or geographical restrictions.",
      stats: "Over 1.7 billion people globally are unbanked and could benefit from DeFi access"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Innovation & Efficiency",
      description: "Experience faster, automated financial services with reduced fees and intermediaries.",
      stats: "DeFi protocols can settle transactions in minutes vs. traditional banking's days"
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Global Accessibility",
      description: "Participate in global markets 24/7 without traditional market hours or boundaries.",
      stats: "DeFi platforms operate 24/7/365, unlike traditional 9-5 banking hours"
    },
    {
      icon: <Lock className="h-6 w-6 text-purple-500" />,
      title: "Financial Sovereignty",
      description: "Maintain full control over your assets without relying on third-party custodians.",
      stats: "Self-custody eliminates the risk of bank runs and account freezes"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      title: "Investment Opportunities",
      description: "Access new investment strategies and yield-generating opportunities.",
      stats: "DeFi protocols offer various yield opportunities beyond traditional savings rates"
    },
    {
      icon: <Coins className="h-6 w-6 text-orange-500" />,
      title: "Financial Innovation",
      description: "Experiment with new financial instruments and business models.",
      stats: "Flash loans and automated market makers represent entirely new financial primitives"
    }
  ];

  const learningPath = [
    "Understanding blockchain fundamentals",
    "Learning about smart contracts",
    "Exploring DeFi protocols and applications",
    "Practicing with small amounts",
    "Keeping up with industry developments"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Why Learn DeFi?
          </h1>
          <p className="mt-4 text-lg">
            Decentralized Finance is revolutionizing the financial world, offering unprecedented 
            opportunities for financial innovation, inclusion, and sovereignty. Understanding DeFi 
            is becoming essential for anyone interested in the future of finance.
          </p>
        </div>

        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            {['benefits', 'learning'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${activeTab === tab 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              >
                {tab === 'benefits' ? 'Key Benefits' : 'Learning Journey'}
              </button>
            ))}
          </div>

          {activeTab === 'benefits' && (
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Your DeFi Learning Journey</h3>
              <div className="space-y-4">
                {learningPath.map((step, index) => (
                  <FeaturePoint key={index}>
                    <span className="font-semibold">Step {index + 1}:</span> {step}
                  </FeaturePoint>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
                <p className="text-yellow-700">
                  Start with small amounts when experimenting with DeFi protocols. 
                  Always research thoroughly and understand the risks before committing 
                  significant resources.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyLearnDeFi;