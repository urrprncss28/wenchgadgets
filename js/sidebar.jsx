import React from 'react';

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>Wench Gadgets</h2>
      </div>
      <ul className="nav-links">
        <li 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard Overview
        </li>
        <li 
          className={activeTab === 'inventory' ? 'active' : ''} 
          onClick={() => setActiveTab('inventory')}
        >
          iPhone Inventory
        </li>
        <li 
          className={activeTab === 'loans' ? 'active' : ''} 
          onClick={() => setActiveTab('loans')}
        >
          Cash Loans & Installments
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;