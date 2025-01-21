import React, { useState } from 'react';
import { Shield, Home, Banknote, UserCheck, LockKeyhole, DatabaseIcon, ExternalLink } from 'lucide-react';

const PrivacyPreservingOracles: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);

  const applications = [
    {
      title: "Asset Tokenization",
      icon: <Home className="w-6 h-6" />,
      description: "Securely tokenize real-world assets while preserving sensitive details",
      benefits: [
        "Private property valuation",
        "Confidential asset verification",
        "Secure ownership proof"
      ],
      example: {
        title: "Real Estate Tokenization",
        flow: [
          "Property appraisal data is encrypted",
          "Oracle validates property value in TEE",
          "Issues zero-knowledge proof of valuation",
          "Asset token minted with verified backing"
        ]
      }
    },
    {
      title: "Private DeFi Protocols",
      icon: <Banknote className="w-6 h-6" />,
      description: "Enable private financial transactions while maintaining protocol transparency",
      benefits: [
        "Private lending positions",
        "Confidential trading history",
        "Protected collateral data"
      ],
      example: {
        title: "Private Lending Protocol",
        flow: [
          "User encrypts collateral data",
          "Oracle verifies creditworthiness privately",
          "Generates proof of sufficient collateral",
          "Protocol executes loan based on proof"
        ]
      }
    },
    {
      title: "Decentralized Identity",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Verify identity attributes without exposing personal information",
      benefits: [
        "Selective attribute disclosure",
        "Privacy-preserving KYC",
        "Credential verification"
      ],
      example: {
        title: "Private KYC Verification",
        flow: [
          "User submits encrypted credentials",
          "Oracle validates with trusted sources",
          "Creates zero-knowledge identity proof",
          "DeFi protocol verifies eligibility"
        ]
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold">Privacy-Preserving Oracles in DeFi</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Privacy-preserving oracles expand the possibilities of DeFi by enabling applications 
          that require sensitive or personal data without compromising user privacy.
        </p>
      </div>

      {/* Application Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {applications.map((app, index) => (
          <div 
            key={app.title}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setActiveExample(index)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                {app.icon}
              </div>
              <h3 className="font-semibold text-lg">{app.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{app.description}</p>
            
            <ul className="space-y-2">
              {app.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <LockKeyhole className="w-4 h-4 text-blue-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interactive Example Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">
          {applications[activeExample].example.title} Example
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flow Visualization */}
          <div className="space-y-4">
            {applications[activeExample].example.flow.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>

          {/* Visualization Placeholder */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <DatabaseIcon className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Interactive visualization coming soon
            </p>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <ExternalLink className="w-5 h-5 text-blue-500" />
          <h4 className="font-semibold">Learn More</h4>
        </div>
        <p className="text-sm text-gray-600">
          Explore technical documentation and implementation guides for integrating 
          privacy-preserving oracles into your DeFi applications.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPreservingOracles;