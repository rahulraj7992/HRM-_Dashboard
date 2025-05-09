import React, { useState } from 'react';
import '../assets/Wallet/RequestFund.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPaperPlane,
  faHistory,
  faFileCsv,
  faFileExcel,
  faPrint,
 
} from "@fortawesome/free-solid-svg-icons";

const RequestWalletFund = () => {
  const [formData, setFormData] = useState({
    amount: "",
    utr: "",
    date: "",
    paymentSlip: null,
    remark: "",
  });

  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: history.length + 1,
      ...formData,
      slipUrl: URL.createObjectURL(formData.paymentSlip),
      status: "Pending",
    };

    setHistory([newEntry, ...history]);

    setFormData({
      amount: "",
      utr: "",
      date: "",
      paymentSlip: null,
      remark: "",
    });

    document.getElementById("paymentSlip").value = "";
  };

  return (
    <div className="WalletRequestFund-container">
      <section className="WalletRequestFund-box">
        <h2 className="WalletRequestFund-title">
          <span className="WalletRequestFund-icon">
            <FontAwesomeIcon icon={faCreditCard} />
          </span>
          Request Wallet Fund
        </h2>
        <form className="WalletRequestFund-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="₹ Enter amount"
              required
            />
          </div>
          <div>
            <label htmlFor="utr">UTR Number</label>
            <input
              type="text"
              name="utr"
              value={formData.utr}
              onChange={handleChange}
              placeholder="Enter UTR number"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <div className="WalletRequestFund-date">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              
            </div>
          </div>
          <div>
            <label htmlFor="paymentSlip">Payment Slip</label>
            <input
              type="file"
              name="paymentSlip"
              id="paymentSlip"
              accept="image/*,.pdf"
              onChange={handleChange}
              required
            />
          </div>
          <div className="WalletRequestFund-full">
            <label htmlFor="remark">Remark</label>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              placeholder="Enter Remark"
            />
          </div>
          <div className="WalletRequestFund-full">
            <button type="submit" className="WalletRequestFund-submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              Submit Request
            </button>
          </div>
        </form>
      </section>

      <section className="WalletRequestFund-box">
        <h2 className="WalletRequestFund-title">
          <FontAwesomeIcon icon={faHistory} />
          Request History
        </h2>

        <div className="WalletRequestFund-actions">
          <div className="WalletRequestFund-buttons">
            <button className="WalletRequestFund-btn WalletRequestFund-csv">
              <FontAwesomeIcon icon={faFileCsv} /> CSV
            </button>
            <button className="WalletRequestFund-btn WalletRequestFund-excel">
              <FontAwesomeIcon icon={faFileExcel} /> Excel
            </button>
            <button className="WalletRequestFund-btn WalletRequestFund-print">
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
          </div>
        </div>

        <div className="WalletRequestFund-tableWrapper">
          <table className="WalletRequestFund-table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Date</th>
                <th>Amount</th>
                <th>UTR</th>
                <th>Slip</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? (
                history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{parseFloat(item.amount).toFixed(2)}</td>
                    <td>{item.utr}</td>
                    <td className="WalletRequestFund-center">
                      {item.paymentSlip?.type.includes("image") ? (
                        <img
                          src={item.slipUrl}
                          alt="Slip"
                          width="20"
                          height="20"
                        />
                      ) : (
                        <span>PDF</span>
                      )}
                    </td>
                    <td>
                      <span className="WalletRequestFund-status WalletRequestFund-pending">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No history yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RequestWalletFund;
