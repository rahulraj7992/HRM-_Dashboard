import React, { useState } from "react";
import "../assets/Banking/CloseAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCertificate,
  faCalendarAlt,
  faWallet,
  faCoins,
  faFileInvoiceDollar,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const userData = {
  12345: {
    accountDetails: {
      accountType: "RD",
      maturityDate: "2023-01-10 00:00:00",
      availableBalance: "₹ 100000",
      interestEarned: "₹ 6652.34",
      procedureCharge: "₹ 0",
      closureStatus: "Closure Status: approved",
      accountStatus: "Account Status: Approved",
    },
    customerInfo: {
      name: "RAJEEV",
      aadhaar: "268153476868",
      mobile: "7992333505",
      customerID: "Customer ID: CUS10004",
      pan: "PAN: BSIPM0227SH",
      email: "Email: RST@GMAIL.COM",
    },
    discounts: {
      deductions: "0.00",
      discountBonus: "0.00",
      paymentMode: "CASH",
      settlementDate: "2025-02-27",
      finalAmountPayable: "₹ 26552.34",
      remark: "",
    },
    remarks: {
      remarksText: "",
    },
  },
};

export default function CloseAccountPage() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [remarksText, setRemarksText] = useState(""); // State for the general remarks
  const [discountRemark, setDiscountRemark] = useState(
    data?.discounts.remark || ""
  ); // State for editable discounts remark

  const handleSubmit = () => {
    const accNum = inputValue.trim();
    if (!accNum) return alert("Please enter an account or loan number.");
    if (!userData[accNum])
      return alert("No data found for this account or loan number.");
    setData(userData[accNum]);
  };

  const handleRemarksChange = (e) => {
    setRemarksText(e.target.value); // Update the general remarks
  };

  const handleDiscountRemarkChange = (e) => {
    setDiscountRemark(e.target.value); // Update the discount remarks
  };

  return (
    <div className="CloseAccount-container">
      <div className="CloseAccount-card CloseAccount-bg-violet">
        <h1 className="text-white text-9xl font-bold" htmlFor="accountLoan">
          Enter Account or Loan Number
        </h1>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <input
            id="accountLoan"
            type="text"
            className="CloseAccount-input"
            placeholder="Enter Account or Loan Number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="CloseAccount-button" onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ marginRight: "0.5rem" }}
            />
            Submit
          </button>
        </div>
      </div>

      {data && (
        <>
          <div className="CloseAccount-card CloseAccount-bg-cyan CloseAccount-account-table">
            <h2 className="text-white text-xl font-bold">Account Details</h2>
            <table className="CloseAccount-table">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faCertificate} /> Account Type
                  </td>
                  <td>{data.accountDetails.accountType}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Maturity Date
                  </td>
                  <td>{data.accountDetails.maturityDate}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faWallet} /> Available Balance
                  </td>
                  <td>{data.accountDetails.availableBalance}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faCoins} /> Interest Earned
                  </td>
                  <td>{data.accountDetails.interestEarned}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} /> Procedure
                    Charge
                  </td>
                  <td>{data.accountDetails.procedureCharge}</td>
                </tr>
              </tbody>
            </table>
            <div className="CloseAccount-subcard">
              <p className="text-lg font-bold">Account Closure Request</p>
              <p>{data.accountDetails.closureStatus}</p>
              <p>{data.accountDetails.accountStatus}</p>
            </div>
          </div>

          <div className="CloseAccount-Customer-information">
            <div className="CloseAccount-card CloseAccount-bg-gradient-yellow-cyan text-white">
              <p className="text-lg font-bold">Customer Information</p>
              <p className="bold-text">Name: {data.customerInfo.name}</p>
              <p className="bold-text">Aadhaar: {data.customerInfo.aadhaar}</p>
              <p className="bold-text">Mobile: {data.customerInfo.mobile}</p>
              <p className="bold-text">{data.customerInfo.customerID}</p>
              <p className="bold-text">{data.customerInfo.pan}</p>
              <p className="bold-text">{data.customerInfo.email}</p>
            </div>
          </div>

          <div className="CloseAccount-card CloseAccount-bg-cyan text-white">
            <h2 className="text-xl font-bold">Discounts and Deductions</h2>
            <div className="CloseAccount-grid">
              <div>
                <label>Deductions</label>
                <input
                  className="CloseAccount-input"
                  value={data.discounts.deductions}
                  readOnly
                />
              </div>
              <div>
                <label>Discount/Bonus</label>
                <input
                  className="CloseAccount-input"
                  value={data.discounts.discountBonus}
                  readOnly
                />
              </div>
              <div>
                <label>Payment Mode</label>
                <select
                  className="CloseAccount-select"
                  value={data.discounts.paymentMode}
                  readOnly
                >
                  <option>CASH</option>
                  <option>CHEQUE</option>
                  <option>ONLINE</option>
                </select>
              </div>
              <div>
                <label>Settlement Date</label>
                <input
                  className="CloseAccount-input"
                  value={data.discounts.settlementDate}
                  type="date"
                
                />
              </div>
            </div>
            <div>
              <label className="text-base font-bold">
                Final Amount Payable
              </label>
              <div className="CloseAccount-final-amount">
                {data.discounts.finalAmountPayable}
              </div>
            </div>
            <div>
              <label>Remark</label>
              {/* Make the remark field editable */}
              <textarea
                className="CloseAccount-textarea"
                value={discountRemark} // Bind to discountRemark state
                onChange={handleDiscountRemarkChange} // Handle changes in this remark field
                rows={3}
              />
            </div>
          </div>

          {/* Editable General Remark */}
          <div className="CloseAccount-card CloseAccount-bg-gradient-cyan-yellow text-white">
            <label>Remarks</label>
            <textarea
              className="CloseAccount-textarea"
              value={remarksText} // Bind to remarksText state
              onChange={handleRemarksChange} // Handle changes in this specific remark
              rows={4}
            />
            <div style={{ marginTop: "1rem" }}>
              <span>Rate customer: </span>
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  style={{ marginLeft: "0.5rem" }}
                />
              ))}
            </div>
          </div>

          <div className="CloseAccount-action-button">
            <button className="CloseAccount-button">Action</button>
          </div>
        </>
      )}
    </div>
  );
}
