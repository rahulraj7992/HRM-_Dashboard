import "../assets/Banking/Savings.css";
import React from "react";

const SavingAccountForm = () => {
  
  return (
    <div className="container">
      {/* Top form grid */}
      <div className="top-form-grid">
        <div className="form-field">
          <label htmlFor="accountType" className="label">
            <i className="fas fa-info-circle"></i> Account Type:
          </label>
          <select id="accountType" className="input-field">
            <option>Saving</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="selectScheme" className="label">
            <i className="fas fa-list"></i> Select Scheme:
          </label>
          <select id="selectScheme" className="input-field">
            <option>NS</option>
            <option>JS</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="roi" className="label">
            <i className="fas fa-percentage"></i> ROI:
          </label>
          <input
            id="roi"
            type="text"
            value="7"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="minDepositAmount" className="label">
            <i className="fas fa-coins"></i> Initail Deposit Amount:
          </label>
          <input
            id="minDepositAmount"
            type="text"
            value="10000.00"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="minDepositTenures" className="label">
            <i className="fas fa-clock"></i> Cash Withdrawl Limit (daily):
          </label>
          <input
            id="minDepositTenures"
            type="text"
            value="12"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lockinPeriod" className="label">
            <i className="fas fa-lock"></i> Lockin Amount:
          </label>
          <input
            id="lockinPeriod"
            type="text"
            value="20000"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="selectScheme" className="label">
            <i className="fas fa-list"></i> Operation Mode:
          </label>
          <select id="selectScheme" className="input-field">
            <option>Select Operation Mode</option>
            <option>Individual</option>
            <option>Joint</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="openingDate" className="label">
            <i className="fas fa-calendar-day"></i> Opening Date:
          </label>
          <input
            id="openingDate"
            type="date"
            value="17-04-2025"
            className="input-field dark-input"
          />
        </div>
        
       

        
        
        

        
        
      </div>

      {/* Customer and Nominee Details */}
      <div className="details-section">
        <div className="details-grid">
          <div className="details-card">
            <div className="section-title">
              Customer Details
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="grid">
              <div className="grid-item label">
                <i className="fas fa-user"></i> CUS ID
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="Enter Customer ID"
                  className="input-field"
                />
              </div>

              <div className="grid-item label">
                <i className="fas fa-user"></i> CUS Name
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>

              <div className="grid-item label">
                <i className="fas fa-user-tie"></i> Guardian
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>

              <div className="grid-item label">
                <i className="fas fa-id-card"></i> Aadhar
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>

              <div className="grid-item label">
                <i className="fas fa-id-badge"></i> PAN
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>

              <div className="grid-item label">
                <i className="fas fa-mobile-alt"></i> Mobile
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>

              <div className="grid-item label">
                <i className="fas fa-map-marker-alt"></i> Address
              </div>
              <div className="grid-item">
                <input type="text" className="input-field" />
              </div>
            </div>
          </div>

          <div></div>
          <div className="details-card">
            <div className="section-title">
              Nominee Details
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="grid">
              <div className="grid-item label">
                <i className="fas fa-id-card"></i> Nominee CUS ID
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="Enter Nominee CUS ID"
                  className="input-field"
                />
              </div>

              <div className="grid-item label">
                <i className="fas fa-user"></i> Nominee Name
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="Enter Nominee Name"
                  className="input-field"
                />
              </div>

              <div className="grid-item label">
                <i className="fas fa-birthday-cake"></i> DOB
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="dd-mm-yyyy"
                  className="input-field"
                />
              </div>

              <div className="grid-item label">
                <i className="fas fa-id-card"></i> Aadhar
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="Nominee Aadhar"
                  className="input-field"
                />
              </div>

              <div className="grid-item label">
                <i className="fas fa-id-badge"></i> PAN
              </div>
              <div className="grid-item">
                <input
                  type="text"
                  placeholder="Nominee PAN"
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="details-section">
        <div className="details-card">
          <div className="section-title">
            Referral Details
            <i className="fas fa-info-circle"></i>
          </div>

          {/* Referral ID Field */}
          <div className="form-field">
            <label htmlFor="referralId" className="label">
              <i className="fas fa-id-card"></i> Referral ID:
            </label>
            <input
              id="referralId"
              type="text"
              placeholder="Enter Referral ID"
              className="input-field dark-input"
            />
          </div>

          {/* Referee Name Field */}
          <div className="form-field">
            <label htmlFor="refereeName" className="label">
              <i className="fas fa-user"></i> Referee Name:
            </label>
            <input
              id="refereeName"
              type="text"
              placeholder="Enter Referee Name"
              className="input-field dark-input"
            />
          </div>
        </div>
      </div>
      <div
        className="form-field"
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        <button
          className="button"
          onClick={() => {
            // You can handle form submission logic here
            console.log("Form Submitted!");
            // You can also log or send all states (amount, tenure, etc.)
          }}
        >
          Open Account
        </button>
      </div>
    </div>
  );
};

export default SavingAccountForm;
