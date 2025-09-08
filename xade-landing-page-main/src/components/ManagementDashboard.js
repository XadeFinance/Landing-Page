import React, { useState, useEffect } from 'react';
import AccessCodeAuth from './AccessCodeAuth';
import './Dashboard.css';

const ManagementDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalVolume: 0,
    totalTransactions: 0,
    totalFees: 0,
    usersList: [],
    topUsersByVolume: [],
    topUsersByPnL: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch CSV data and process it
      const fetchUserData = async () => {
        try {
          const [usersResponse, users2Response] = await Promise.all([
            fetch('/users.csv'),
            fetch('/users-2.csv')
          ]);
          
          const [usersText, users2Text] = await Promise.all([
            usersResponse.text(),
            users2Response.text()
          ]);
          
          // Parse CSV data (tab-separated)
          const parseCSV = (csvText) => {
            const lines = csvText.trim().split('\n');
            const headers = lines[0].split('\t');
            return lines.slice(1).map(line => {
              const values = line.split('\t');
              const obj = {};
              headers.forEach((header, index) => {
                obj[header.trim()] = values[index]?.trim();
              });
              return obj;
            }).filter(row => row['Email account']); // Filter out empty rows
          };
          
          const users1 = parseCSV(usersText);
          const users2 = parseCSV(users2Text);
          const allUsers = [...users1, ...users2];
          
          // Generate synthetic volume and PnL data for demonstration
          const usersWithMetrics = allUsers.map((user, index) => {
            // Generate realistic volume and PnL based on user index and email
            const baseVolume = Math.random() * 100000 + 1000; // $1K to $101K
            const volume = Math.floor(baseVolume * (1 + index * 0.1)); // Slight increase by index
            const pnl = Math.floor(volume * (Math.random() * 0.3 - 0.1)); // -10% to +20% of volume
            const transactions = Math.floor(volume / (Math.random() * 500 + 100)); // 100-600 per transaction
            
            return {
              ...user,
              volume: volume,
              pnl: pnl,
              transactions: transactions,
              status: Math.random() > 0.2 ? 'active' : 'inactive' // 80% active
            };
          });
          
          // Calculate metrics
          const totalVolume = usersWithMetrics.reduce((sum, user) => sum + user.volume, 0);
          const totalFees = 28300; // As specified
          const totalTransactions = usersWithMetrics.reduce((sum, user) => sum + user.transactions, 0);
          
          // Top users by volume with specific addresses and volumes
          const topUsersByVolume = [
            {
              email: '0x7E3bBf75aba09833f899bB1FDd917FC3A5617555',
              volume: 2200000,
              transactions: 2200
            },
            {
              email: '3UjrFy5MuFqKVUrbUjXtCEH2cJh4SAh7JaXxjcoURHfY',
              volume: 330000,
              transactions: 330
            },
            {
              email: '0xB6d52Ce4F8a76533D65038eb20d986696e5c075E',
              volume: 44000,
              transactions: 44
            },
            {
              email: '0x926cB91d10545fD08cBFDa86127F55D70fbA05e6',
              volume: 28000,
              transactions: 28
            },
            {
              email: '0x5482BdAf196dAB6542336945789C5533ba82Db27',
              volume: 20000,
              transactions: 20
            }
          ];
            
          // Top users by PnL with specific addresses and percentages
          const topUsersByPnL = [
            {
              email: '0xA4f5C2781DA48d196fCbBD09c08AA525522b3699',
              pnl: 22.23,
              roi: 22.23
            },
            {
              email: '0x7E3bBf75aba09833f899bB1FDd917FC3A5617555',
              pnl: 11.02,
              roi: 11.02
            },
            {
              email: 'AYvVwVqdcH7rh3aUeMaUP6hwyFXybW9VxZ32nAHwPxtB',
              pnl: 3.1,
              roi: 3.1
            },
            {
              email: 'AEkd54m4M3s3zMeD2eakZdTuVaTuA2EzwWYh54Gw1JWg',
              pnl: 3.08,
              roi: 3.08
            },
            {
              email: '0xB275CEA4744327b43f9a85D2Aa7Eb2Cc9576B807',
              pnl: -0.2,
              roi: -0.2
            }
          ];
          
          setDashboardData({
            totalUsers: 18000, // As specified
            totalVolume: 8342500, // As specified
            totalTransactions: 33000, // As specified
            totalFees: totalFees,
            usersList: usersWithMetrics.map(user => ({
              email: user['Email account'],
              joinDate: user['Created at'] ? new Date(user['Created at']).toISOString().split('T')[0] : 'N/A',
              status: user.status
            })),
            topUsersByVolume,
            topUsersByPnL,
          });
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Fallback to default data
          setDashboardData({
            totalUsers: 18000,
            totalVolume: 8342500,
            totalTransactions: 33000,
            totalFees: 28300,
            usersList: [],
            topUsersByVolume: [],
            topUsersByPnL: [],
          });
          setLoading(false);
        }
      };
      
      fetchUserData();
    }
  }, [isAuthenticated]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(num);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return (
      <AccessCodeAuth 
        onAuthenticated={() => setIsAuthenticated(true)}
        title="Management Dashboard Access"
      />
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Management Dashboard</h1>
        <p>Comprehensive analytics and user management</p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dashboard data...</p>
        </div>
      ) : (
        <div className="dashboard-content">
          {/* Overview Metrics */}
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
                <p className="metric-value">{formatCurrency(dashboardData.totalVolume)}</p>
              </div>
            </div>


            <div className="metric-card">
              <div className="metric-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="metric-content">
                <h3>Total Revenue</h3>
                <p className="metric-value">{formatCurrency(dashboardData.totalFees)}</p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              All Users
            </button>
            <button 
              className={`tab-button ${activeTab === 'volume' ? 'active' : ''}`}
              onClick={() => setActiveTab('volume')}
            >
              Top by Volume
            </button>
            <button 
              className={`tab-button ${activeTab === 'pnl' ? 'active' : ''}`}
              onClick={() => setActiveTab('pnl')}
            >
              Top by P&L
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'users' && (
              <div className="users-tab">
                <div className="table-card">
                  <h3>All Users</h3>
                  <div className="table-container">
                    <table className="users-table">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Join Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.usersList.map((user, index) => (
                          <tr key={index}>
                            <td>{user.email}</td>
                            <td>{formatDate(user.joinDate)}</td>
                            <td>
                              <span className={`status-badge ${user.status}`}>
                                {user.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'volume' && (
              <div className="volume-tab">
                <div className="table-card">
                  <h3>Top Users by Volume</h3>
                  <div className="table-container">
                    <table className="volume-table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Wallet Address</th>
                          <th>Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.topUsersByVolume.map((user, index) => (
                          <tr key={index}>
                            <td>#{index + 1}</td>
                            <td className="wallet-address">{user.email}</td>
                            <td>{formatCurrency(user.volume)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pnl' && (
              <div className="pnl-tab">
                <div className="table-card">
                  <h3>Top Users by P&L</h3>
                  <div className="table-container">
                    <table className="pnl-table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Wallet Address</th>
                          <th>P&L</th>
                          <th>ROI %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.topUsersByPnL.map((user, index) => (
                          <tr key={index}>
                            <td>#{index + 1}</td>
                            <td className="wallet-address">{user.email}</td>
                            <td className={user.pnl >= 0 ? "positive" : "negative"}>
                              {user.pnl >= 0 ? `+${user.pnl}%` : `${user.pnl}%`}
                            </td>
                            <td className={user.roi >= 0 ? "positive" : "negative"}>
                              {user.roi >= 0 ? `+${user.roi}%` : `${user.roi}%`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagementDashboard;
