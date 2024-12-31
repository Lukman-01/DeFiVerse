import React from 'react';

export default function DeFiStack() {
  return (
    <div>
      <h3>The DeFi Stack and Architecture</h3>
      <p>
        DeFi is built on a layered stack, each layer providing specific functionalities to the ecosystem.
      </p>
      <h4>Layers of the DeFi Stack</h4>
      <ul className="list-disc pl-6">
        <li><strong>Blockchain Layer:</strong> The foundational layer that powers DeFi, such as Ethereum.</li>
        <li><strong>Protocol Layer:</strong> Smart contracts that manage financial operations like lending and trading.</li>
        <li><strong>Application Layer:</strong> User-facing interfaces that allow interactions with DeFi services.</li>
      </ul>
      <img 
        src="/defi-stack.png" 
        alt="DeFi Stack Diagram" 
        className="my-4 w-full max-w-lg mx-auto"
      />
      <p>
        Together, these layers enable seamless financial operations without intermediaries.
      </p>
    </div>
  );
}
