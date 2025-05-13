import React from 'react';
import "../assets/Loan/LoanCollectionReport.css";

const LoanCollectionReport = () => {
  return (
    <div className="CollectionReportPage">
      {/* Collection Filter Section */}
      <section className="CollectionReportFilter">
        <h2>Collection Filter</h2>
        <p>Use filter to see more precised report</p>
        <form className="CollectionReportFilterForm">
          <div className="CollectionReportFormGroup">
            <label htmlFor="fromDate">From Date</label>
            <input type="date" id="fromDate" name="fromDate" placeholder="dd-mm-yyyy" />
          </div>
          <div className="CollectionReportFormGroup">
            <label htmlFor="toDate">To Date</label>
            <input type="date" id="toDate" name="toDate" placeholder="dd-mm-yyyy" />
          </div>
          <div className="CollectionReportFormGroup">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="Enter account number" />
          </div>
          <div className="CollectionReportFormGroup">
            <label htmlFor="customerId">Customer Id</label>
            <input type="text" id="customerId" name="customerId" placeholder="Enter customer id" />
          </div>
          <div className="CollectionReportFormGroup">
            <label htmlFor="collectedBy">Collected By</label>
            <select id="collectedBy" name="collectedBy">
              <option>Select user</option>
              <option>Ram</option>
              <option>Shyam</option>
            </select>
          </div>
          <div className="CollectionReportFormGroup">
            <label htmlFor="collectionAccountType">Collection Account Type</label>
            <select id="collectionAccountType" name="collectionAccountType">
              <option>Select account type</option>
              <option>Loan</option>
              <option>Deposit</option>
            </select>
          </div>
          <div className="CollectionReportFormActions">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>

      {/* Collection Report Section */}
      <section className="CollectionReportReport">
        <h2>Collection Report</h2>
        <div className="CollectionReportReportControls">
          <button type="button" className="CollectionReportBtnCsv">
            <i className="fas fa-file-csv"></i> CSV
          </button>
          <button type="button" className="CollectionReportBtnExcel">
            <i className="fas fa-file-excel"></i> Excel
          </button>
          <button type="button" className="CollectionReportBtnPrint">
            <i className="fas fa-print"></i> Print
          </button>
          <div className="CollectionReportEntriesControl">
            Show
            <select aria-label="Show entries">
              <option>10</option>
            </select>
            entries
          </div>
          <div className="CollectionReportSearchBox">
            <input type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>
        <div className="CollectionReportTableContainer">
          <table className="CollectionReportTable">
            <thead>
              <tr>
                {['SN', 'SLIP', 'CUS ID', 'CUS NAME', 'CUS AADHAR', 'ACCOUNT NUMBER', 'ACCOUNT SCHEME', 'TXN AMOUNT', 'CHARGE AMOUNT', 'TXN DATE', 'COLLECTED BY'].map((col) => (
                  <th key={col}>
                    {col} <i className="fas fa-sort-up"></i>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Example rows, replace with dynamic data */}
              {[
                { sn: 1, slip: true, cusId: 'CUS00004', name: 'RAJEEV', aadhar: '203634479666', account: 'H02RDF00003', scheme: 'RD First', amount: '30000.00', charge: '0.00', date: '2022-02-18', collector: 'asdfg' },
                { sn: 2, slip: true, cusId: 'CUS00007', name: 'kalml', aadhar: '984524984519', account: 'H02RDF00006', scheme: 'RD First', amount: '50000.00', charge: '0.00', date: '2024-05-01', collector: 'asdfg' },
                // add additional rows as needed
              ].map((row) => (
                <tr key={row.sn}>
                  <td>{row.sn}</td>
                  <td className="CollectionReportSlipCell">
                    <button className="CollectionReportBtnSlip">Slip</button>
                  </td>
                  <td>{row.cusId}</td>
                  <td>{row.name}</td>
                  <td>{row.aadhar}</td>
                  <td>{row.account}</td>
                  <td>{row.scheme}</td>
                  <td>{row.amount}</td>
                  <td>{row.charge}</td>
                  <td>{row.date}</td>
                  <td>{row.collector}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LoanCollectionReport;