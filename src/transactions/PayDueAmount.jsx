import React from 'react';
import '../assets/transactions/PayDueAmount.css';

const PayDueAmount = () => {
  return (
    <div className="PayDueAmount-container">
      {/* Filter Form Section */}
      <section className="PayDueAmount-filter-section" aria-label="Filter Report Form">
        <h2 className="PayDueAmount-title">Filter Report</h2>
        <form className="PayDueAmount-filter-form">
          <div className="PayDueAmount-form-field">
            <label htmlFor="fromDate" className="PayDueAmount-label">From Date</label>
            <input type="date" id="fromDate" name="fromDate" className="PayDueAmount-input" />
          </div>
          <div className="PayDueAmount-form-field">
            <label htmlFor="toDate" className="PayDueAmount-label">To Date</label>
            <input type="date" id="toDate" name="toDate" className="PayDueAmount-input" />
          </div>
          <div className="PayDueAmount-form-field">
            <label htmlFor="accountNumber" className="PayDueAmount-label">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="Enter Account Number"className="PayDueAmount-input" />
          </div>
          <div className="PayDueAmount-form-field">
            <label htmlFor="customerName" className="PayDueAmount-label">Customer Name</label>
            <input type="text" id="customerName" name="customerName" placeholder='Enter Customer Name' className="PayDueAmount-input" />
          </div>
          <div className="PayDueAmount-form-field">
            <label htmlFor="mobile" className="PayDueAmount-label">Mobile</label>
            <input type="text" id="mobile" name="mobile"  placeholder="Enter Registered Mobile Number"className="PayDueAmount-input" />
          </div>
          <div className="PayDueAmount-form-field">
            <label htmlFor="accountType" className="PayDueAmount-label">Account Type</label>
            <select id="accountType" name="accountType" className="PayDueAmount-select">
              <option value="" disabled>Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
              <option value="Fixed Deposit">Fixed Deposit</option>
            </select>
          </div>
          <div className="PayDueAmount-form-field PayDueAmount-full-span">
            <button type="submit" className="PayDueAmount-btn PayDueAmount-btn-search">Search</button>
          </div>
        </form>
      </section>

      {/* Report Table Section */}
      <section className="PayDueAmount-table-section" aria-label="Report Table">
        <div className="PayDueAmount-table-actions">
          <div className="PayDueAmount-action-buttons">
            <button type="button" className="PayDueAmount-btn PayDueAmount-csv">
              <i className="fas fa-file-alt" /> CSV
            </button>
            <button type="button" className="PayDueAmount-btn PayDueAmount-excel">
              <i className="fas fa-file-excel" /> Excel
            </button>
            <button type="button" className="PayDueAmount-btn PayDueAmount-print">
              <i className="fas fa-print" /> Print
            </button>
          </div>
          <div className="PayDueAmount-entry-controls">
            <label htmlFor="entries" className="PayDueAmount-label-small">Show</label>
            <select id="entries" name="entries" className="PayDueAmount-select-small">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="PayDueAmount-text-small">entries</span>
          </div>
          <div className="PayDueAmount-search-control">
            <label htmlFor="search" className="PayDueAmount-label-small">Search:</label>
            <input type="search" id="search" name="search" className="PayDueAmount-input-small" />
          </div>
        </div>
        <div className="PayDueAmount-table-wrapper">
          <table className="PayDueAmount-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>ACCOUNT NUMBER</th>
                <th>ACTION</th>
                <th>TOTAL PAYABLE</th>
                <th>PENALTY AMOUNT</th>
                <th>INSTALLMENT AMOUNT</th>
                <th>DUE DATE</th>
                <th>PRINCIPAL</th>
                <th>INTEREST</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map(idx => (
                <tr key={idx} className={idx % 2 === 0 ? 'PayDueAmount-even' : 'PayDueAmount-odd'}>
                  <td className="PayDueAmount-cell-bold">{idx}</td>
                  <td className="PayDueAmount-cell-name">
                    kalml<br />CUS00007
                  </td>
                  <td className="PayDueAmount-cell">{`H02RDF0000${5 + (idx % 2)}`}</td>
                  <td className="PayDueAmount-cell">
                    <button type="button" className="PayDueAmount-btn PayDueAmount-pay">
                      Pay <i className="fas fa-arrow-right" />
                    </button>
                  </td>
                  <td className="PayDueAmount-cell-semibold">10000</td>
                  <td className="PayDueAmount-cell-semibold">N/A</td>
                  <td className="PayDueAmount-cell-semibold">10000.00</td>
                  <td className="PayDueAmount-cell-semibold">
                    {idx % 2 === 0 ? `01-0${6 + idx}-2024` : `18-0${6 + idx}-2024`}
                  </td>
                  <td className="PayDueAmount-cell-semibold">12</td>
                  <td className="PayDueAmount-cell-semibold">12</td>
                  <td className="PayDueAmount-cell-semibold">12</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PayDueAmount;
