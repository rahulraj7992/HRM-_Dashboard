// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/profile.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faLock,
  faSignOutAlt,
  faUser,
  faHistory,
  faShieldAlt,
  faChartLine,
  faEnvelope,
  faPhone,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  const [updateType, setUpdateType] = useState('password');
  const [formData, setFormData] = useState({
    old: '',
    new: '',
    confirmNew: ''
  });

  const handleTypeChange = (e) => {
    setUpdateType(e.target.value);
    setFormData({ old: '', new: '', confirmNew: '' });
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    // Save logic placeholder
    console.log(`Updating ${updateType}`, formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-wrapper">

        {/* Section: Profile Header */}
        <section className="profile-section profile-header">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="https://storage.googleapis.com/a1aa/image/c5e81452-aa79-444c-191d-9c816af4892f.jpg"
              alt="Profile"
            />
            <div className="profile-camera-icon">
              <FontAwesomeIcon icon={faCamera} className="profile-camera" />
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">AKASH (MNG00002)</h1>
            <p className="profile-position">Branch Manager</p>
            <p className="profile-email">
              <FontAwesomeIcon icon={faEnvelope} /> aks@gmail.com
            </p>
            <p className="profile-phone">
              <FontAwesomeIcon icon={faPhone} /> 6325147896
            </p>
          </div>
          <div className="profile-actions">
            <button className="profile-lock-button">
              <FontAwesomeIcon icon={faLock} /> Lock Profile
            </button>
            <button className="profile-logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </section>

        {/* Section: Personal Information */}
        <section className="profile-section">
          <h2 className="profile-section-title">
            <FontAwesomeIcon icon={faUser} className="profile-section-icon" /> Personal Information
          </h2>
          <div className="profile-info-list">
            {[
              ['Full Name', 'AKASH'],
              ['Date of Birth', '05 September 1987'],
              ['Location', 'Delhi'],
              ['Joined On', '08 August 2024'],
              ['Branch Name', 'HEAD'],
            ].map(([label, value], index) => (
              <div className="profile-info-item" key={index}>
                <span className="profile-info-label">{label}</span>
                <span className="profile-info-value">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Login Summary */}
        <section className="profile-section">
          <h2 className="profile-section-title">
            <FontAwesomeIcon icon={faHistory} className="profile-section-icon" /> Login Summary
          </h2>
          <div className="profile-info-list">
            {[
              ['Last Login', '05 May 2025, 11:44 AM'],
              ['Last Login Status', 'Success'],
              ['Last Login Message', 'Step 2: PIN authenticated successfully'],
              ['Total Success', '4'],
              ['Total Failed', '0'],
            ].map(([label, value], index) => (
              <div className="profile-info-item" key={index}>
                <span className="profile-info-label">{label}</span>
                <span className="profile-info-value">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Login History Table */}
        <section className="profile-section">
          <h2 className="profile-section-title">
            <FontAwesomeIcon icon={faHistory} className="profile-section-icon" /> Last 5 Login History
          </h2>
          <div className="profile-login-table-wrapper">
            <table className="profile-login-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Device</th>
                  <th>IP Address</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>05 May 2025, 11:44 AM</td><td>Windows 10, Chrome</td><td>51.214.233.10</td><td>Delhi</td><td><span className="status-success">Success</span></td></tr>
                <tr><td>04 May 2025, 09:32 AM</td><td>Windows 10, Chrome</td><td>51.214.233.10</td><td>Delhi</td><td><span className="status-success">Success</span></td></tr>
                <tr><td>03 May 2025, 06:12 PM</td><td>Windows 10, Chrome</td><td>51.214.233.10</td><td>Delhi</td><td><span className="status-success">Success</span></td></tr>
                <tr><td>02 May 2025, 08:10 AM</td><td>Windows 10, Chrome</td><td>51.214.233.10</td><td>Delhi</td><td><span className="status-success">Success</span></td></tr>
                <tr><td>01 May 2025, 10:44 AM</td><td>Windows 10, Chrome</td><td>51.214.233.10</td><td>Delhi</td><td><span className="status-success">Success</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Security Settings & Account Activity */}
        <section className="profile-section profile-settings-activity">
          <div className="profile-settings">
            <h2 className="profile-section-title">
              <FontAwesomeIcon icon={faShieldAlt} className="profile-section-icon" /> Security Settings
            </h2>
            <label className="profile-setting-option">
              <input type="checkbox" /> Two-Factor Authentication
            </label>
            <label className="profile-setting-option">
              <input type="checkbox" /> Email Notifications
            </label>
          </div>

          <div className="profile-activity">
            <h2 className="profile-section-title">
              <FontAwesomeIcon icon={faChartLine} className="profile-section-icon" /> Account Activity
            </h2>
            <div className="profile-info-item">
              <span className="profile-info-label">Total Number of Logins</span>
              <span className="profile-info-value">15</span>
            </div>
            <div className="profile-info-item">
              <span className="profile-info-label">Success Rate</span>
              <span className="profile-info-value">100%</span>
            </div>
            <div className="profile-info-item">
              <span className="profile-info-label">Active Sessions</span>
              <span className="profile-info-value">3</span>
            </div>
          </div>
        </section>

        {/* Section: Update Password or PIN */}
        <section className="profile-section">
          <h2 className="profile-section-title">
            <FontAwesomeIcon icon={faKey} className="profile-section-icon" /> Update Password / PIN
          </h2>
          <div className="profile-update-form">
            <div className="form-group">
              <label htmlFor="updateType">Choose Type</label>
              <select id="updateType" value={updateType} onChange={handleTypeChange}>
                <option value="password">Update Password</option>
                <option value="pin">Update PIN</option>
              </select>
            </div>
            <div className="form-group">
              <label>{updateType === 'password' ? 'Old Password' : 'Old PIN'}</label>
              <input
                type={updateType === 'password' ? 'password' : 'number'}
                name="old"
                value={formData.old}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>{updateType === 'password' ? 'New Password' : 'New PIN'}</label>
              <input
                type={updateType === 'password' ? 'password' : 'number'}
                name="new"
                value={formData.new}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>{updateType === 'password' ? 'Confirm New Password' : 'Confirm New PIN'}</label>
              <input
                type={updateType === 'password' ? 'password' : 'number'}
                name="confirmNew"
                value={formData.confirmNew}
                onChange={handleInputChange}
              />
            </div>
            <button className="profile-save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProfilePage;
