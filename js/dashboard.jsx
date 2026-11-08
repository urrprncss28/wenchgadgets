import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-panel">
      <h2>Business Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total iPhones Sold</h3>
          <p className="stat-number">142</p>
        </div>
        <div className="stat-card">
          <h3>Active Cash Loans</h3>
          <p className="stat-number">28</p>
        </div>
        <div className="stat-card">
          <h3>Monthly Revenue (Expected)</h3>
          <p className="stat-number">₱ 350,000</p>
        </div>
        <div className="stat-card">
          <h3>Pending Installment Dues</h3>
          <p className="stat-number">7</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;