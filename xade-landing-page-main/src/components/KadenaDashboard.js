import React, { useState, useEffect } from 'react';
import AccessCodeAuth from './AccessCodeAuth';
import './Dashboard.css';

const KadenaDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalVolume: 0,
    totalTransactions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      // Simulate API call to fetch dashboard data
      setTimeout(() => {
        setDashboardData({
          totalUsers: 122,
          totalVolume: 42000,
          totalTransactions: 3300,
        });
        setLoading(false);
      }, 1000);
    }
  }, [isAuthenticated]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatKDA = (num) => {
    return new Intl.NumberFormat('en-US').format(num) + ' KDA';
  };

  if (!isAuthenticated) {
    return (
      <AccessCodeAuth 
        onAuthenticated={() => setIsAuthenticated(true)}
        title="Kadena Dashboard Access"
      />
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Kadena Dashboard</h1>
        <p>Real-time analytics and metrics</p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dashboard data...</p>
        </div>
      ) : (
        <div className="dashboard-content">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="metric-content">
                <h3>Total Users</h3>
                <p className="metric-value">{formatNumber(dashboardData.totalUsers)}</p>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2V22M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15H7M21 12H3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="metric-content">
                <h3>Total Volume</h3>
                <p className="metric-value">{formatKDA(dashboardData.totalVolume)}</p>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="metric-content">
                <h3>Total Transactions</h3>
                <p className="metric-value">{formatNumber(dashboardData.totalTransactions)}</p>
              </div>
            </div>
          </div>

          {/* Agent Wallets Section */}
          <div className="agent-wallets-section">
            <div className="table-card">
              <h3>Agent Wallets</h3>
              <div className="table-container">
                <table className="wallets-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Wallet Address</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="wallet-address">k:10c6806c9d7c606b9304a3c663aae4fb5d0e6e37ca6fa6b6c8b3c62c040dc13f</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="wallet-address">k:a2d644f80413c13cbdf4ed9a98cf6da4510c5ceea05e415f9861bbf67681c7a5</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="wallet-address">k:9057bb04a6a71d0a0f884df610f9f5524f1f5660af9ec47959dbac34bd87a66b</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="wallet-address">k:825715b57f75f2dbb4609df9e4162b8cd071a5a2231038d6ea86af640e7b9595</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="wallet-address">k:5fdf7efcc14689c6311a26d459c31a7f2c7dd87b793ea0811fd54768adf640de</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="wallet-address">k:07ab7db5c4e3ed3f93b2b2454c7b833db9f2b2ae725c80599378ec9f2e42ec58</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="wallet-address">k:f4453e9aa6c5dbf7d1b3095f0164c68a81996ecb1c6830e932e1db293b2fc9c0</td>
                      <td><span className="status-badge active">Active</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default KadenaDashboard;
