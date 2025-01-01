import React from 'react';

interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

const AmmDexContract = () => {
  const codeExamples: CodeExample[] = [
    {
      title: "Constant Product AMM Core",
      code: `contract ConstantProductAMM {
    struct Pool {
        uint256 reserve0;
        uint256 reserve1;
        uint256 totalShares;
        uint256 kLast;  // Last K value (reserve0 * reserve1)
    }
    
    mapping(address => mapping(address => Pool)) public pools;  // token0 => token1 => pool
    mapping(address => mapping(address => uint256)) public userShares;  // user => pool => shares
    
    uint256 public constant MINIMUM_LIQUIDITY = 1000;
    uint256 public constant FEE_DENOMINATOR = 1000;
    uint256 public constant LP_FEE = 3;  // 0.3%
}`,
      explanation: "Implements the core constant product AMM formula (x * y = k) with liquidity pools and LP token accounting."
    },
    {
      title: "Add Liquidity",
      code: `function addLiquidity(
    address token0,
    address token1,
    uint256 amount0Desired,
    uint256 amount1Desired,
    uint256 amount0Min,
    uint256 amount1Min
) external returns (uint256 shares) {
    require(amount0Desired > 0 && amount1Desired > 0, "Invalid amounts");
    
    Pool storage pool = pools[token0][token1];
    
    // Calculate optimal amounts
    uint256 amount0;
    uint256 amount1;
    
    if (pool.reserve0 == 0 && pool.reserve1 == 0) {
        amount0 = amount0Desired;
        amount1 = amount1Desired;
        
        // Lock minimum liquidity forever
        shares = sqrt(amount0 * amount1);
        require(shares > MINIMUM_LIQUIDITY, "Insufficient liquidity minted");
        shares -= MINIMUM_LIQUIDITY;
    } else {
        amount1 = (amount0Desired * pool.reserve1) / pool.reserve0;
        
        if (amount1 <= amount1Desired) {
            require(amount1 >= amount1Min, "Insufficient amount1");
            amount0 = amount0Desired;
        } else {
            amount0 = (amount1Desired * pool.reserve0) / pool.reserve1;
            require(amount0 <= amount0Desired);
            require(amount0 >= amount0Min, "Insufficient amount0");
            amount1 = amount1Desired;
        }
        
        shares = min(
            (amount0 * pool.totalShares) / pool.reserve0,
            (amount1 * pool.totalShares) / pool.reserve1
        );
    }
    
    // Transfer tokens
    IERC20(token0).transferFrom(msg.sender, address(this), amount0);
    IERC20(token1).transferFrom(msg.sender, address(this), amount1);
    
    // Update pool state
    pool.reserve0 += amount0;
    pool.reserve1 += amount1;
    pool.totalShares += shares;
    pool.kLast = pool.reserve0 * pool.reserve1;
    
    // Update user shares
    userShares[msg.sender][getPoolKey(token0, token1)] += shares;
    
    emit LiquidityAdded(msg.sender, token0, token1, amount0, amount1, shares);
}`,
      explanation: "Handles liquidity provision with optimal amount calculation and minimum liquidity locking."
    },
    {
      title: "Swap Implementation",
      code: `function swap(
    address tokenIn,
    address tokenOut,
    uint256 amountIn,
    uint256 minAmountOut,
    address recipient
) external returns (uint256 amountOut) {
    require(amountIn > 0, "Invalid amount");
    Pool storage pool = pools[tokenIn][tokenOut];
    
    // Calculate amount out using constant product formula
    uint256 reserveIn = pool.reserve0;
    uint256 reserveOut = pool.reserve1;
    
    if (tokenIn > tokenOut) {
        (reserveIn, reserveOut) = (reserveOut, reserveIn);
    }
    
    uint256 amountInWithFee = amountIn * (FEE_DENOMINATOR - LP_FEE);
    amountOut = (amountInWithFee * reserveOut) / 
                (reserveIn * FEE_DENOMINATOR + amountInWithFee);
                
    require(amountOut >= minAmountOut, "Insufficient output amount");
    
    // Transfer tokens
    IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
    IERC20(tokenOut).transfer(recipient, amountOut);
    
    // Update reserves
    if (tokenIn < tokenOut) {
        pool.reserve0 += amountIn;
        pool.reserve1 -= amountOut;
    } else {
        pool.reserve0 -= amountOut;
        pool.reserve1 += amountIn;
    }
    
    pool.kLast = pool.reserve0 * pool.reserve1;
    
    emit Swap(msg.sender, recipient, tokenIn, tokenOut, amountIn, amountOut);
}`,
      explanation: "Implements token swaps using the constant product formula with fees and slippage protection."
    },
    {
      title: "Price Impact and Oracle",
      code: `function getPrice(
    address token0,
    address token1,
    uint256 amountIn
) external view returns (uint256 priceImpact, uint256 amountOut) {
    Pool storage pool = pools[token0][token1];
    require(pool.reserve0 > 0 && pool.reserve1 > 0, "Pool not initialized");
    
    uint256 reserveIn = pool.reserve0;
    uint256 reserveOut = pool.reserve1;
    
    if (token0 > token1) {
        (reserveIn, reserveOut) = (reserveOut, reserveIn);
    }
    
    // Calculate amount out
    uint256 amountInWithFee = amountIn * (FEE_DENOMINATOR - LP_FEE);
    amountOut = (amountInWithFee * reserveOut) / 
                (reserveIn * FEE_DENOMINATOR
                                + amountInWithFee);
    
    // Calculate price impact
    uint256 newReserveIn = reserveIn + amountIn;
    uint256 newReserveOut = reserveOut - amountOut;
    uint256 newK = newReserveIn * newReserveOut;
    uint256 originalK = reserveIn * reserveOut;
    
    priceImpact = ((originalK - newK) * 1e18) / originalK;
}`,
      explanation: "Calculates the price impact and output amount for a given trade using reserves and the constant product formula."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AMM DEX Contract Code Examples</h1>
      {codeExamples.map((example, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">{example.title}</h2>
          <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto my-2">
            <code>{example.code}</code>
          </pre>
          <p className="text-gray-700">{example.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default AmmDexContract;
