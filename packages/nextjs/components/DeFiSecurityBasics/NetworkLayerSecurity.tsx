import React from 'react';

const NetworkLayerSecurity: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Network Layer Security</h1>
      <p>
        The network layer handles data propagation and node communication. Key challenges include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Spy Nodes:</strong> Adversaries monitor and manipulate data flows.</li>
        <li><strong>Front-Running:</strong> Observing and preemptively executing transactions.</li>
        <li><strong>Back-Running:</strong> Delaying transactions to exploit time-sensitive opportunities.</li>
        <li><strong>Eclipse Attacks:</strong> Isolating nodes to manipulate their view of the network.</li>
      </ul>
    </div>
  );
};

export default NetworkLayerSecurity;
