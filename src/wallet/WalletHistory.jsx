import React from "react";
import "../assets/Wallet/WalletHistory.css";

const WalletHistory = () => {
  return (
    <div className="app-container">
      {/* Filter Transactions Section */}
      <section className="filter-section">
        <h2 className="filter-header">
          <i className="fas fa-filter"></i>
          Filter Transactions
        </h2>
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
          <label className="input-label">
            <span className="label-text">From Date</span>
            <div className="input-wrapper">
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="input-field"
              />
              
            </div>
          </label>

          <label className="input-label">
            <span className="label-text">To Date</span>
            <div className="input-wrapper">
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="input-field"
              />
              
            </div>
          </label>

          <label className="input-label min-width">
            <span className="label-text">Factor</span>
            <div className="input-wrapper">
              <select className="select-field">
                <option value="all" selected>
                  All
                </option>
                <option value="cr">CR</option>
                <option value="dr">DR</option>
              </select>
              
            </div>
          </label>

          <button type="submit" className="filter-button">
            <i className="fas fa-search"></i> Filter
          </button>
        </form>
      </section>

      {/* Wallet Transactions Section */}
      <section className="wallet-transactions-section">
        <h3 className="wallet-header">
          <i className="fas fa-wallet"></i>
          Wallet Transactions
        </h3>

        <div className="actions-container">
          <div className="button-group">
            <button className="action-button csv-button" type="button">
              <i className="fas fa-file-alt"></i> CSV
            </button>
            <button className="action-button excel-button" type="button">
              <i className="fas fa-file-excel"></i> Excel
            </button>
            <button className="action-button print-button" type="button">
              <i className="fas fa-print"></i> Print
            </button>
          </div>
          <div className="entries-container">
            <label htmlFor="entries">Show</label>
            <select id="entries" className="entries-select">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>entries</span>
          </div>
          <div className="search-container">
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" className="search-input" />
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Narration</th>
                <th>Amount</th>
                <th>Factor</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows */}
              <tr>
                <td>1</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>2</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>3</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>4</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>5</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>6</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>7</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              <tr>
                <td>8</td>
                <td>paid on account closure to account: H02RDF00003</td>
                <td>236525.34</td>
                <td>CR</td>
                <td>2025-04-21 13:05:20</td>
              </tr>
              {/* Other rows can be added here similarly */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <div>Showing 1 to 9 of 9 entries</div>
          <nav className="pagination-nav" aria-label="Pagination">
            <button className="pagination-button prev-button" disabled>
              Previous
            </button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button next-button" disabled>
              Next
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default WalletHistory;
