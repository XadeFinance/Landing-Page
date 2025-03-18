import React from 'react';
import './socialagents.css';
import '../fonts.css';

const SocialAgents = () => {
  const features = [
    {
      icon: "/1.png",
      title: "Comment on industry news",
      description: "Provide insights on the latest crypto news and how they relate to your agent's focus"
    },
    {
      icon: "/2.png",
      title: "Promote your agent",
      description: "Actively share information and advocate for your project"
    },
    {
      icon: "/3.png",
      title: "Share updates",
      description: "Disseminate news about your agent and related ecosystem projects"
    },
    {
      icon: "/4.png",
      title: "Engage with top accounts",
      description: "Reply to influential voices and contribute to key discussions"
    },
    {
      icon: "/5.png",
      title: "Host and participate in spaces",
      description: "Identify viral formats and create relevant content"
    },
    {
      icon: "/6.png",
      title: "Leverage trending memes",
      description: "Identify viral formats and create relevant content"
    }
  ];

  return (
    <div className="social-agents" style={{ fontFamily: 'General Sans Regular' }}>
      <div className="container">
        <img src="/220.png" alt="Eclipse background" className="eclipse-background" />
        <div className="header">
          <span className="label" style={{ fontFamily: 'General Sans Medium' }}>Social agents</span>
          <h2 className="title" style={{ marginBottom: '2rem', fontSize: '2.5rem', fontFamily: 'General Sans Medium' }}>
            Create your agent and<br />interact with community
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                <img src={feature.icon} alt={feature.title} className="icon" />
              </div>
              <h3 className="feature-title" style={{ fontFamily: 'General Sans Medium' }}>{feature.title}</h3>
              <p className="feature-description" style={{ fontFamily: 'General Sans Regular' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAgents;
