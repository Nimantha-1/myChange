import React from 'react';
import './AccountDetails.css';

function AccountDetails({ user }) {
  // Default user data if none provided
  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    accountNumber: 'ACC123456789',
    joinDate: '2023-01-15',
    balance: 1500.75,
    status: 'Active'
  };

  const account = user || defaultUser;

  return (
    <div className="account-details-container">
      <h2 className="account-title">Account Details</h2>
      
      <div className="account-card">
        <div className="account-header">
          <div className="account-avatar">
            {account.name.charAt(0).toUpperCase()}
          </div>
          <div className="account-name-status">
            <h3 className="account-name">{account.name}</h3>
            <span className={`account-status ${account.status.toLowerCase()}`}>
              {account.status}
            </span>
          </div>
        </div>

        <div className="account-info">
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">{account.email}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Account Number</span>
            <span className="info-value">{account.accountNumber}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Join Date</span>
            <span className="info-value">
              {new Date(account.joinDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Balance</span>
            <span className="info-value">
              ${account.balance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;