import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Banking/Openaccount.css';

const OpenAccount = () => {
  const navigate = useNavigate();

  const accountTypes = [
    {
      title: 'Fixed Deposit Account',
      icon: 'fas fa-file-alt',
      color: '#facc15',
      route:'/Banking/OpenAccount/Fixed'

    },
    {
      title: 'Recurring Deposit Account',
      icon: 'fas fa-calendar-alt',
      color: '#34d399',
      route: '/Banking/OpenAccount/Recurring',
    },
    {
      title: 'Saving Account',
      icon: 'fas fa-piggy-bank',
      color: '#60a5fa',
      route: '/Banking/OpenAccount/Savings',
    },
  ];

  return (
    <div className="OpenAccount-wrapper">
      <div className="OpenAccount-container">
        <h2 className="OpenAccount-title">Select Account Type</h2>
        <div className="OpenAccount-card-grid">
          {accountTypes.map((type, index) => (
            <div
              key={index}
              className="OpenAccount-card-box"
              style={{ backgroundColor: type.color }}
              onClick={() => navigate(type.route)}
            >
              <i className={`${type.icon} OpenAccount-card-icon`} />
              <h3 className="OpenAccount-card-title">{type.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
