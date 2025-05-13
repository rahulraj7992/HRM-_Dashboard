import React from "react";
import "../assets/Loan/DueEmiManagement.css";

const DueEmiManagement = () => {
  return (
    <div className="dueEmi-body">
      <header className="dueEmi-header">
        <div className="dueEmi-header-container">
          <h1 className="dueEmi-title">Due EMIs Management</h1>
          <nav className="dueEmi-nav">
            <button className="dueEmi-btn dueEmi-btn-blue">
              <i className="fas fa-exclamation-circle"></i>
              <span>Pending</span>
            </button>
            <button className="dueEmi-btn dueEmi-btn-gray">
              <i className="fas fa-calendar-day"></i>
              <span>Today</span>
            </button>
            <button className="dueEmi-btn dueEmi-btn-gray">
              <i className="fas fa-calendar-alt"></i>
              <span>Upcoming</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="dueEmi-main">
        <section className="dueEmi-card">
          <div className="dueEmi-actions">
            <button className="dueEmi-btn dueEmi-btn-green">
              <i className="fas fa-bell"></i>
              <span>Send Bulk Reminder</span>
            </button>
          </div>
          <form className="dueEmi-form">
            {[
              { id: "accountType", label: "Account Type", icon: "fas fa-wallet", type: "select", options: ["Savings", "Current", "Loan"] },
              { id: "customerName", label: "Customer Name", icon: "fas fa-user-circle", type: "text" },
              { id: "mobile", label: "Mobile", icon: "fas fa-mobile-alt", type: "tel" },
              { id: "accountNumber", label: "Account Number", icon: "fas fa-credit-card", type: "text" },
              { id: "aadharNumber", label: "Aadhar Number", icon: "fas fa-id-card-alt", type: "text", full: true }
            ].map(({ id, label, icon, type, options, full }) => (
              <div key={id} className={`dueEmi-form-group${full ? " dueEmi-span-2" : ""}`}>
                <label htmlFor={id}>{label}</label>
                <div className="dueEmi-input-wrapper">
                  {type === "select" ? (
                    <select id={id} defaultValue="">
                      <option value="" disabled>Select {label}</option>
                      {options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input type={type} id={id} placeholder={label} />
                  )}
                  <i className={`${icon} dueEmi-icon`}></i>
                </div>
              </div>
            ))}
          </form>
        </section>

        <section className="dueEmi-card">
          <div className="dueEmi-controls">
            <div className="dueEmi-btn-group">
              <button className="dueEmi-btn dueEmi-btn-yellow">
                <i className="fas fa-file-csv"></i> <span>CSV</span>
              </button>
              <button className="dueEmi-btn dueEmi-btn-green">
                <i className="fas fa-file-excel"></i> <span>Excel</span>
              </button>
              <button className="dueEmi-btn dueEmi-btn-teal">
                <i className="fas fa-print"></i> <span>Print</span>
              </button>
            </div>

            <div className="dueEmi-entries">
              <label htmlFor="entries">Show</label>
              <select id="entries">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span>entries</span>
            </div>

            <div className="dueEmi-search">
              <label htmlFor="search">Search:</label>
              <input type="search" id="search" placeholder="Search..." />
            </div>
          </div>

          <div className="dueEmi-table-container">
            <table className="dueEmi-table">
              <thead>
                <tr>
                  {["SN", "ACTIONS", "CUSTOMER NAME", "AADHAR NUMBER", "ACCOUNT NUMBER", "EMI AMOUNT", "DUE DATE"].map(col => (
                    <th key={col}>
                      {col} <i className="fas fa-sort"></i>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="dueEmi-no-data">No data available in table</td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav className="dueEmi-pagination">
            <div>Showing 0 to 0 of 0 entries</div>
            <div>
              <button disabled><i className="fas fa-angle-left"></i> Previous</button>
              <button disabled>Next <i className="fas fa-angle-right"></i></button>
            </div>
          </nav>
        </section>
      </main>

      <footer className="dueEmi-footer">
        <div>&copy; 2024 Your Company. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default DueEmiManagement;
