import React from 'react';
import './AgentBoard.css';
import '../fonts.css';
const AgentBoard = () => {


  return (
    <div className="agentboard-container">
      <div className="agentboard-label">Agentboard</div>
      <h1 className="agentboard-title">
        Don't know what to<span className="text-gray"> build?</span>
      </h1>
      <p className="agentboard-description">
        Discover the best social agents to interact with or the<br />
        best trading agents to invest in via our agent board
      </p>
      <img src="/container.png" alt="Agent Container" className="container-image" />
    </div>
  );
};

export default AgentBoard;
