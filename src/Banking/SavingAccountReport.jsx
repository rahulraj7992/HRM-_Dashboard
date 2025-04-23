import React, { useState } from 'react';
import '../assets/Banking/SavingReport.css';

const SavingAccountReport = () => {
  const data = [
    {
      sn: 1, acc: 'H02RDF00003', name: 'RAJEEV', guardian: 'BINOD',
      mobile: '7903235505', aadhar: '203634479666', date: '2022-01-17 00:00:00',
      approved: 'asdfg', due: 'No dues', balance: 12000
    },
    {
      sn: 2, acc: 'H02RDF00006', name: 'kalmI', guardian: 'kasnba',
      mobile: '3214569745', aadhar: '984524984519', date: '2024-01-01 00:00:00',
      approved: 'asdfg', due: '01 June 2024', balance: 20000
    },
    {
      sn: 3, acc: 'H02RDF00005', name: 'kalmI', guardian: 'kasnba',
      mobile: '3214569745', aadhar: '984524984519', date: '2024-01-18 00:00:00',
      approved: 'asdfg', due: '18 June 2024', balance: 18500
    },
    {
      sn: 4, acc: 'H02RDF00004', name: 'kalmI', guardian: 'kasnba',
      mobile: '3214569745', aadhar: '984524984519', date: '2025-01-18 00:00:00',
      approved: 'asdfg', due: '18 April 2025', balance: 22000
    },
    {
      sn: 5, acc: 'H02DD100004', name: 'ankit kumar', guardian: 'rammm',
      mobile: '6207105674', aadhar: '744772892075', date: '2025-03-10 00:00:00',
      approved: 'asdfg', due: '10 March 2025', balance: 25000
    }
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountType, setAccountType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [accountStatus, setAccountStatus] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const filtered = data.filter(row => {
      const matchesAccountType = accountType ? row.acc.includes(accountType) : true;
      const matchesFromDate = fromDate ? new Date(row.date) >= new Date(fromDate) : true;
      const matchesToDate = toDate ? new Date(row.date) <= new Date(toDate) : true;
      const matchesStatus = accountStatus ? row.approved.includes(accountStatus) : true;

      return matchesAccountType && matchesFromDate && matchesToDate && matchesStatus;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const searchedData = filteredData.filter(row => {
    const term = searchTerm.toLowerCase();
    return (
      row.name.toLowerCase().includes(term) ||
      row.acc.toLowerCase().includes(term) ||
      row.mobile.includes(term)
    );
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = searchedData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(searchedData.length / entriesPerPage);

  return (
    <div className="ReportPage-container">
      <section className="ReportPage-filter-section">
        <h2 className="ReportPage-section-title">Account Report Filter</h2>
        <p className="ReportPage-section-subtitle">Use filter to see more precise report</p>
        <form className="ReportPage-filter-form" autoComplete="off" onSubmit={handleFilterSubmit}>
          <div className="ReportPage-form-group">
            <label htmlFor="accountType">Choose Account Type</label>
            <select
              id="accountType"
              name="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="">Select account type</option>
              <option value="H02RDF">RDF</option>
              <option value="H02DD">DD</option>
            </select>
          </div>
          <div className="ReportPage-form-group">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="ReportPage-form-group">
            <label htmlFor="toDate">To Date</label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div className="ReportPage-form-group">
            <label htmlFor="accountStatus">Choose Account Status</label>
            <select
              id="accountStatus"
              name="accountStatus"
              value={accountStatus}
              onChange={(e) => setAccountStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="approved">Approve (Active)</option>
              <option value="approved">Reject</option>
              <option value="approved">Closed</option>
              <option value="approved">Preclosed</option>
            </select>
          </div>
          <div className="ReportPage-form-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>

      <section className="ReportPage-report-section">
        <h3 className="ReportPage-section-title">Fixed Deposit Report</h3>

        <div className="ReportPage-report-actions">
          <div className="ReportPage-button-group">
            <button className="ReportPage-csv-btn"><i className="fas fa-file-csv"></i> CSV</button>
            <button className="ReportPage-excel-btn"><i className="fas fa-file-excel"></i> Excel</button>
            <button className="ReportPage-print-btn"><i className="fas fa-print"></i> Print</button>
          </div>

          <div className="ReportPage-search-box">
            <input
              type="text"
              placeholder="Search by name, account, or mobile"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="ReportPage-entries-input">
            <label htmlFor="entries">Show</label>
            <input
              type="number"
              id="entries"
              name="entries"
              value={entriesPerPage}
              min="1"
              max="100"
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            />
            <label htmlFor="entries">entries</label>
          </div>
        </div>

        <div className="ReportPage-table-wrapper">
          <table className="ReportPage-report-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>ACCOUNT</th>
                <th>STATUS</th>
                <th>NAME</th>
                <th>GUARDIAN</th>
                <th>MOBILE</th>
                <th>AADHAR</th>
                <th>APPROVAL DATE</th>
                <th>APPROVED BY</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((row, i) => (
                <tr key={i}>
                  <td>{row.sn}</td>
                  <td>{row.acc}</td>
                  <td>Approved</td>
                  <td>{row.name}</td>
                  <td>{row.guardian}</td>
                  <td>{row.mobile}</td>
                  <td>{row.aadhar}</td>
                  <td>{row.date}</td>
                  <td>{row.approved}</td>
                  <td>₹{row.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ReportPage-pagination">
          <div>
            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, searchedData.length)} of {searchedData.length} entries
          </div>
          <div>
            <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavingAccountReport;
