import React, { useState } from 'react';

function CashLoans() {
  const [loans, setLoans] = useState([
    { id: 1, client: 'Juan Dela Cruz', principal: 15000, term: '6 Months', monthlyAllocation: 2750, nextDueDate: '2026-10-15', status: 'Active' },
    { id: 2, client: 'Maria Clara', principal: 30000, term: '12 Months', monthlyAllocation: 2800, nextDueDate: '2026-10-05', status: 'Overdue' },
  ]);

  return (
    <div className="module-panel">
      <div className="panel-header">
        <h2>Cash Loan & Installment Tracking</h2>
        <button className="btn-primary">+ New Loan Contract</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Principal Amount (₱)</th>
            <th>Repayment Term</th>
            <th>Monthly Allocation</th>
            <th>Next Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.client}</td>
              <td>₱{loan.principal.toLocaleString()}</td>
              <td>{loan.term}</td>
              <td>₱{loan.monthlyAllocation.toLocaleString()}</td>
              <td>{loan.nextDueDate}</td>
              <td>
                <span className={`badge ${loan.status === 'Overdue' ? 'badge-danger' : 'badge-active'}`}>
                  {loan.status}
                </span>
              </td>
              <td>
                <button className="btn-small log">Log Payment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CashLoans;