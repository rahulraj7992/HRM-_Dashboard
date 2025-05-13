import React, { useState } from 'react';
import '../assets/print/LoanLetter.css';

const PrintLoan = () => {
  const [entries, setEntries] = useState(10);

  return (
    <div className="PrintLoan-container">
      {/* Print Loan Filter Section */}
      <section className="PrintLoan-section print-loan-filter">
        <h2 className="PrintLoan-heading">
          <i className="fas fa-filter"></i> Print Loan Filter
        </h2>
        <form className="PrintLoan-form">
          <div>
            <label htmlFor="fromDate" className="PrintLoan-label">
              <i className="fas fa-calendar-alt"></i> From Date
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              className="PrintLoan-input"
            />
          </div>
          <div>
            <label htmlFor="toDate" className="PrintLoan-label">
              <i className="fas fa-calendar-alt"></i> To Date
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              className="PrintLoan-input"
            />
          </div>
          <div>
            <label htmlFor="loanAccount" className="PrintLoan-label">
              <i className="fas fa-university"></i> Loan Account
            </label>
            <input
              type="text"
              id="loanAccount"
              name="loanAccount"
              placeholder="Enter Loan Account"
              className="PrintLoan-input"
            />
          </div>
          <div>
            <label htmlFor="customerId" className="PrintLoan-label">
              <i className="fas fa-id-badge"></i> Customer ID
            </label>
            <input
              type="text"
              id="customerId"
              name="customerId"
              placeholder="Enter Customer ID"
              className="PrintLoan-input"
            />
          </div>
          <div>
            <label htmlFor="customerName" className="PrintLoan-label">
              <i className="fas fa-user"></i> Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Enter Customer Name"
              className="PrintLoan-input"
            />
          </div>
          <div className="PrintLoan-submit">
            <button type="submit" className="PrintLoan-button">
              <i className="fas fa-search"></i> Search
            </button>
          </div>
        </form>
      </section>

      {/* Print Loan Accounts Section */}
      <section className="PrintLoan-section print-loan-accounts">
        <h2 className="PrintLoan-heading">
          <i className="fas fa-file-alt"></i> Print Loan Accounts
        </h2>

        <div className="PrintLoan-actions">
          <button className="PrintLoan-btn csv">
            <i className="fas fa-file-csv"></i> CSV
          </button>
          <button className="PrintLoan-btn excel">
            <i className="fas fa-file-excel"></i> Excel
          </button>
          <button className="PrintLoan-btn print">
            <i className="fas fa-print"></i> Print
          </button>
        </div>

        <div className="PrintLoan-options">
          <span>Show</span>
          <select
            className="PrintLoan-select"
            value={entries}
            onChange={(e) => setEntries(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>entries</span>

          <label htmlFor="searchInput" className="PrintLoan-search-label">
            Search:
          </label>
          <input
            id="searchInput"
            type="text"
            className="PrintLoan-search-input"
          />
        </div>

        <div className="PrintLoan-table-container">
          <table className="PrintLoan-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>LOAN ACCOUNT</th>
                <th>CUSTOMER NAME</th>
                <th>MOBILE</th>
                <th>STATUS</th>
                <th>LOAN AGREEMENT</th>
                <th>OFFER LETTER</th>
                <th>SANCTION LETTER</th>
                <th>NOC</th>
                <th>LOAN SUMMARY</th>
                <th>LOAN DECLARATION</th>
                <th>PROMISSORY NOTE</th>
                <th>FORECLOSURE LETTER</th>
                <th>PRINT LOD</th>
                <th>PENDING PAYMENT</th>
                <th>DELIVERY ORDER</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat rows as needed */}
              <tr>
                <td>1</td>
                <td>510PL00004</td>
                <td>kalml</td>
                <td>3214569745</td>
                <td>Disbursed</td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td><td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                <td className="PrintLoan-link">
                  <i className="fas fa-print"></i> Print
                </td>
                {/* Repeat similar columns */}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PrintLoan;
