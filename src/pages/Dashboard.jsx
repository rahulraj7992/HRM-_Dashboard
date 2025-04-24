import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../assets/css/dashboard.css';
import {
  FaCalendarDay,
  FaSun,
  FaMapMarkerAlt,
  FaBed,
  FaCheck,
  FaTimes
} from 'react-icons/fa';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, u => {
      if (u) setUser(u);
      else navigate('/login');
    });
    return unsubscribe;
  }, [navigate]);

 

  const handleClick = action => {
    alert(`Icon clicked: ${action}`);
  };

  if (!user) return null;  // or a loading spinner

  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <FaCalendarDay className="icon green" />
          <div>
            <p className="value green">14.5</p>
            <p>Total Day(s)</p>
          </div>
        </div>
        <div className="card">
          <FaSun className="icon orange" />
          <div>
            <p className="value orange">01</p>
            <p>Half Day(s)</p>
          </div>
        </div>
        <div className="card">
          <FaMapMarkerAlt className="icon purple" />
          <div>
            <p className="value purple">01</p>
            <p>On Duty</p>
          </div>
        </div>
        <div className="card">
          <FaBed className="icon blue" />
          <div>
            <p className="value blue">01</p>
            <p>Leave(s)</p>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="recent-applications">
        <h2>Recent Applications (8)</h2>
        <div className="applications-row">
          {[
            { name: "Hiren Chauhan", type: "Leave", date: "15 Feb", days: "25 Days" },
            { name: "Snehal Shah", type: "On Duty", date: "07 Mar", days: "1 Day" },
            { name: "Maulin Pandya", type: "C-Off", date: "07 Mar", days: "1 Day" }
          ].map((app, index) => (
            <div className="application single-row" key={index}>
              <img
                src="https://sl.bing.net/iRsRVmpdAC4"
                alt="profile"
                className="profile-pic"
              />
              <div className="name-wrapper">
                <p className="name">{app.name}</p>
              </div>
              <p>{app.type}</p>
              <p>{app.date}</p>
              <p>{app.days}</p>
              <div className="icons">
                <FaCheck
                  className="icon green me-2 rounded-circle clickable"
                  onClick={() => handleClick('Approved')}
                />
                <FaTimes
                  className="icon red rounded-circle clickable"
                  onClick={() => handleClick('Rejected')}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employees on Leave & On Duty */}
      <div className="employee-status">
        <div className="on-leave">
          <h2>Employee’s on Leave (6)</h2>
          {['Mahakrishna Lohar', 'Ashvinpuri G Swami', 'Ashish Kalra'].map((name, i) => (
            <div className="employee" key={i}>
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="profile-pic"
              />
              <p>{name}</p>
              <p>{i + 1} Day(s)</p>
            </div>
          ))}
        </div>
        <div className="on-duty">
          <h2>Employee’s on Duty (4)</h2>
          {['Snaunak Mistry', 'Jay Patel', 'Snehal Shah'].map((name, i) => (
            <div className="employee" key={i}>
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="profile-pic"
              />
              <p>{name}</p>
              <p>In 9:30 - Out 7:30</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}