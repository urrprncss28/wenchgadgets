import React, { useState } from 'react';

function IphoneInventory() {
  const [inventory, setInventory] = useState([
    { id: 1, model: 'iPhone 13 Pro Max', storage: '256GB', price: 42000, stock: 5 },
    { id: 2, model: 'iPhone 14 Pro', storage: '128GB', price: 55000, stock: 3 },
    { id: 3, model: 'iPhone 11', storage: '64GB', price: 18000, stock: 8 },
  ]);

  return (
    <div className="module-panel">
      <div className="panel-header">
        <h2>iPhone Inventory</h2>
        <button className="btn-primary">+ Add New Device</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Storage</th>
            <th>Promo Price (₱)</th>
            <th>Stock Limit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.model}</td>
              <td>{item.storage}</td>
              <td>₱{item.price.toLocaleString()}</td>
              <td>
                <span className={`badge ${item.stock < 4 ? 'badge-warning' : 'badge-success'}`}>
                  {item.stock} in stock
                </span>
              </td>
              <td>
                <button className="btn-small edit">Edit</button>
                <button className="btn-small delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IphoneInventory;