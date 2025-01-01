import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const LendingPoolContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Lending Pool Core Structure",
      code: `contract LendingPool {
    struct Market {
        uint256 totalDeposits;
        uint256 totalBorrows;
        uint256 utilizationRate;
        uint256 borrowAPY;
        uint256 supplyAPY;
        uint256 collateralFactor;  // % of deposit that can be borrowed (scaled by 1e18)
    }
    
    struct UserAccount {
        uint256 deposited;
        uint256 borrowed;
        uint256 lastUpdateTime;
        bool isCollateral;
    }
    
    mapping(address => mapping(address => UserAccount)) public userAccounts;  // user => token => account
    mapping(address => Market) public markets;  // token => market
    mapping(address => bool) public supportedTokens;
    
    uint256 public constant UTILIZATION_OPTIMAL = 80 * 1e18 / 100;  // 80%
    uint256 public constant BASE_RATE = 2 * 1e18 / 100;            // 2%
    uint256 public constant SLOPE1 = 10 * 1e18 / 100;             // 10%
    uint256 public constant SLOPE2 = 100 * 1e18 / 100;            // 100%
}`,
      explanation: "The core structure defines markets for different assets, tracks user positions, and sets interest rate parameters based on utilization."
    },
    {
      title: "Interest Rate Model",
      code: `function calculateInterestRates(
    address token
) public view returns (uint256 borrowRate, uint256 supplyRate) {
    Market storage market = markets[token];
    
    // Calculate utilization rate
    if (market.totalDeposits == 0) return (0, 0);
    uint256 utilization = (market.totalBorrows * 1e18) / market.totalDeposits;
    
    // Two-slope interest rate model
    if (utilization <= UTILIZATION_OPTIMAL) {
        // First slope: gradual increase
        borrowRate = BASE_RATE + 
            (utilization * SLOPE1) / 1e18;
    } else {
        // Second slope: sharp increase
        uint256 extraUtil = utilization - UTILIZATION_OPTIMAL;
        borrowRate = BASE_RATE + 
            (UTILIZATION_OPTIMAL * SLOPE1) / 1e18 +
            (extraUtil * SLOPE2) / 1e18;
    }
    
    // Supply rate = borrow rate * utilization * (1 - reserve factor)
    supplyRate = (borrowRate * utilization * 9) / (10 * 1e18);
    
    return (borrowRate, supplyRate);
}`,
      explanation: "Implements a two-slope interest rate model where rates increase sharply after optimal utilization to maintain liquidity."
    },
    {
      title: "Deposit and Collateral Management",
      code: `function deposit(
    address token,
    uint256 amount
) external {
    require(supportedTokens[token], "Token not supported");
    require(amount > 0, "Amount must be positive");
    
    Market storage market = markets[token];
    UserAccount storage account = userAccounts[msg.sender][token];
    
    // Update market state
    updateInterest(token);
    
    // Transfer tokens
    IERC20(token).transferFrom(msg.sender, address(this), amount);
    
    // Update user account
    account.deposited += amount;
    market.totalDeposits += amount;
    
    emit Deposit(msg.sender, token, amount);
}

function setAsCollateral(address token, bool useAsCollateral) external {
    UserAccount storage account = userAccounts[msg.sender][token];
    require(account.deposited > 0, "No deposits");
    
    account.isCollateral = useAsCollateral;
    emit CollateralSet(msg.sender, token, useAsCollateral);
}`,
      explanation: "Handles deposits and collateral designation with proper market updates and safety checks."
    },
    {
      title: "Borrowing with Health Factor",
      code: `function borrow(
    address token,
    uint256 amount
) external {
    require(supportedTokens[token], "Token not supported");
    Market storage market = markets[token];
    UserAccount storage borrower = userAccounts[msg.sender][token];
    
    // Update market state
    updateInterest(token);
    
    // Check borrowing capacity
    require(getHealthFactor(msg.sender) >= 1e18, "Insufficient collateral");
    
    // Update state
    borrower.borrowed += amount;
    market.totalBorrows += amount;
    
    // Transfer tokens
    IERC20(token).transfer(msg.sender, amount);
    
    emit Borrow(msg.sender, token, amount);
}

function getHealthFactor(address user) public view returns (uint256) {
    uint256 totalCollateralUSD = 0;
    uint256 totalBorrowsUSD = 0;
    
    for (uint i = 0; i < supportedTokens.length; i++) {
        address token = supportedTokens[i];
        UserAccount storage account = userAccounts[user][token];
        Market storage market = markets[token];
        
        if (account.isCollateral) {
            uint256 tokenPrice = getPrice(token);  // from oracle
            totalCollateralUSD += 
                (account.deposited * tokenPrice * market.collateralFactor) / 1e36;
        }
        
        if (account.borrowed > 0) {
            uint256 tokenPrice = getPrice(token);
            totalBorrowsUSD += (account.borrowed * tokenPrice) / 1e18;
        }
    }
    
    if (totalBorrowsUSD == 0) return type(uint256).max;
    return (totalCollateralUSD * 1e18) / totalBorrowsUSD;
}`,
      explanation: "Implements borrowing logic with health factor calculations to ensure loans remain safely collateralized."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Lending Pool Smart Contract</h2>
        <p className="mt-2 text-gray-600">
          A lending pool enables users to deposit assets for earning interest and
          borrow assets against collateral. It uses dynamic interest rates based
          on pool utilization and maintains borrower solvency through collateral requirements.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Multi-asset lending and borrowing</li>
          <li>Dynamic interest rate model</li>
          <li>Collateral management system</li>
          <li>Health factor monitoring</li>
          <li>Risk parameters per asset</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Implementation Details</h3>
        {codeExamples.map((example, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <h4 className="font-semibold">{example.title}</h4>
            <pre className="bg-gray-50 p-3 rounded overflow-x-auto">
              <code>{example.code}</code>
            </pre>
            <p className="text-gray-600">{example.explanation}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Security Considerations</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Oracle manipulation protection</li>
          <li>Interest rate calculation precision</li>
          <li>Collateral liquidation mechanisms</li>
          <li>Emergency pause functionality</li>
          <li>Proper decimal handling for different tokens</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Integration Requirements</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Price oracle implementation</li>
          <li>Interest rate model configuration</li>
          <li>Risk parameter calibration</li>
          <li>Liquidation bot infrastructure</li>
        </ul>
      </div>
    </div>
  );
};

export default LendingPoolContract;