import React from 'react';
import '../assets/Loan/LoanReport.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFileCsv,
  faFileExcel,
  faPrint,
  faSortUp,
  faExclamationTriangle,
  // eslint-disable-next-line no-unused-vars
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const LoanReport = () => {
  return (
    <div className="loan-report-app">
      {/* Loan Report Filter Section */}
      <section className="loan-report-filter" aria-label="Loan Report Filter">
        <h2 className="filter-title">Loan Report Filter</h2>
        <p className="filter-subtitle">Use filter to see more precise report</p>
        <form className="filter-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="fromDate1">From Date</label>
            <div className="input-wrapper">
              <input
                type="date"
                id="fromDate1"
                name="fromDate1"
                className="input-date"
                autoComplete="off"
              />
              
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fromDate2">To Date</label>
            <div className="input-wrapper">
              <input
                type="date"
                id="fromDate2"
                name="fromDate2"
                className="input-date"
                autoComplete="off"
              />
              
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="loanAccountNumber">Loan Account Number</label>
            <input
              type="text"
              id="loanAccountNumber"
              name="loanAccountNumber"
              placeholder="Loan account number"
              className="input-text"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="applicantUserId">Applicant User Id</label>
            <input
              type="text"
              id="applicantUserId"
              name="applicantUserId"
              placeholder="Applicant user id"
              className="input-text"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="applicantUserName">Applicant User Name</label>
            <input
              type="text"
              id="applicantUserName"
              name="applicantUserName"
              placeholder="Applicant user name"
              className="input-text"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanStatus">Choose Loan Status</label>
            <select id="loanStatus" name="loanStatus" className="select-status">
              <option value="" disabled selected>Select loan status</option>
              <option>Pending</option>
              <option>Pre Closed</option>
              <option>Disbursed</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Submit</button>
          </div>
        </form>
      </section>

      {/* Loan Details Section */}
      <section className="loan-details" aria-label="Loan Details">
        <h2 className="details-title">Loan Details</h2>

        <div className="export-buttons">
          <button type="button" className="btn-csv">
            <FontAwesomeIcon icon={faFileCsv} /> CSV
          </button>
          <button type="button" className="btn-excel">
            <FontAwesomeIcon icon={faFileExcel} /> Excel
          </button>
          <button type="button" className="btn-print">
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
        </div>

        <div className="table-wrapper">
          <table className="details-table">
            <thead>
              <tr>
                <th>
                  SN. <FontAwesomeIcon icon={faSortUp} />
                </th>
                <th>Set eNach</th>
                <th>Account Number</th>
                <th>Customer Name</th>
                <th>Loan Amount</th>
                <th>ROI (%)</th>
                <th>Total EMI</th>
                <th>Recovery Frequency</th>
                <th>Applied Date</th>
                <th>Approval Date</th>
                <th>Disbursal Date</th>
                <th>Status</th>
                <th>EMI Amount</th>
                <th>Total Paid</th>
                <th>Guarantor Name</th>
                <th>Loan Type</th>
                <th>EMI Card</th>
                <th>Loan Card</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr>
                <td>1</td>
                <td>
                  <button className="btn-enach-warning" aria-label="Set eNach warning">
                    <span>Set</span>
                    <span>eNach</span>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                  </button>
                </td>
                <td>H02gg00001</td>
                <td>xdtdsrt</td>
                <td>10,000</td>
                <td>40.5</td>
                <td>6</td>
                <td>Monthly</td>
                <td>2025-04-10 00:00:00</td>
                <td>N/A</td>
                <td>N/A</td>
                <td className="status-pending">Pending</td>
                <td>500</td>
                <td>3,000</td>
                <td>John Doe</td>
                <td>Home Loan</td>
                <td><button className="btn-card">EMI Card</button></td>
                <td><button className="btn-card">Loan Card</button></td>
                <td />
              </tr>
              {/* Repeat for other rows as needed */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LoanReport;