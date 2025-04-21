import "../assets/Banking/Fd.css";
import React, { useState } from "react";

const FormPage = () => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  return (
    <div className="container">
      {/* Top form grid */}
      <div className="top-form-grid">
        <div className="form-field">
          <label htmlFor="accountType" className="label">
            <i className="fas fa-info-circle"></i> Account Type:
          </label>
          <select id="accountType" className="input-field">
            <option>FD</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="selectScheme" className="label">
            <i className="fas fa-list"></i> Select Scheme:
          </label>
          <select id="selectScheme" className="input-field">
            <option>Fixed deposit</option>
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
            <i className="fas fa-coins"></i> Min Deposit Amount:
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
            <i className="fas fa-clock"></i> Min Deposit Tenures
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
            <i className="fas fa-lock"></i> Lockin Period In Months:
          </label>
          <input
            id="lockinPeriod"
            type="text"
            value="1"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="interestLockin" className="label">
            <i className="fas fa-calendar-alt"></i> Interest Lockin In Months:
          </label>
          <input
            id="interestLockin"
            type="text"
            value="7"
            className="input-field dark-input"
          />
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
        <div className="form-field">
          <label htmlFor="compoundingType" className="label">
            <i className="fas fa-layer-group"></i> Compounding Type
          </label>
          <input
            id="compoundingType"
            type="text"
            value="yearly"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="enterAmount" className="label">
            <i className="fas fa-coins"></i> Enter Amount:
          </label>
          <input
            id="enterAmount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // 👈 Updates state on user input
            className="input-field"
            placeholder="Enter amount"
          />
        </div>

        <div className="form-field">
          <label htmlFor="enterTenure" className="label">
            <i className="fas fa-clock"></i> Enter Tenure:
          </label>
          <input
            id="enterTenure"
            type="text"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)} // 👈 Make it editable
            className="input-field"
            placeholder="Enter tenure in months"
          />
        </div>
        <div className="form-field">
          <label htmlFor="totalInterest" className="label">
            <i className="fas fa-chart-line"></i> Total Interest:
          </label>
          <input
            id="totalInterest"
            type="text"
            value="2977.64"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="bonus" className="label">
            <i className="fas fa-percent"></i> Bonus (in %):
          </label>
          <input
            id="bonus"
            type="text"
            value="0.00"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="maturityAmount" className="label">
            <i className="fas fa-money-bill-wave"></i> Maturity Amount:
          </label>
          <input
            id="maturityAmount"
            type="text"
            value="22977.64"
            className="input-field dark-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="maturityAmountBonus" className="label">
            <i className="fas fa-money-check-alt"></i> Maturity Amount(With
            Bonus):
          </label>
          <input
            id="maturityAmountBonus"
            type="text"
            value="22977.64"
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
            Payment Mode
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="form-field">
            <label htmlFor="paymentMode" className="label">
              <i className="fas fa-credit-card"></i> Payment Mode
            </label>
            <select id="paymentMode" className="input-field">
              <option>NEFT/IMPS</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="principalAmount" className="label">
              <i className="fas fa-gem"></i> Principal Amount:
            </label>
            <input
              id="principalAmount"
              type="text"
              value="20000"
              className="input-field dark-input"
            />
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

export default FormPage;
