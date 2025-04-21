import React, { useState } from 'react';
import '../assets/Banking/VerifyAccount.css'; // Link to your custom CSS

const VerifyAccount = () => {
  // State to hold form inputs
  const [customerId, setCustomerId] = useState('');
  const [accountType, setAccountType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');

  // State to hold table data
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulating data fetching based on customerId
  const fetchData = (customerId) => {
    // Replace this with an actual API call to fetch data based on the customerId
    const dummyData = [
      {
        sn: 1,
        action: 'Verify',
        cusName: 'John Doe',
        cusId: customerId,
        guardianName: 'Jane Doe',
        schemeName: 'Fixed Deposit',
        depositAmount: '$10,000',
        kycStatus: 'Verified',
        referenceNumber: '123456',
        requestedBy: 'Admin',
        requestedDate: '2025-04-18'
      },
      {
        sn: 2,
        action: 'Verify',
        cusName: 'Alice Smith',
        cusId: customerId,
        guardianName: 'Bob Smith',
        schemeName: 'Savings Account',
        depositAmount: '$5,000',
        kycStatus: 'Pending',
        referenceNumber: '789012',
        requestedBy: 'Admin',
        requestedDate: '2025-04-17'
      }
    ];
    setTableData(dummyData);
  };

  // Function to handle "Verify" action
  const handleVerify = (index) => {
    const updatedData = [...tableData];
    updatedData[index].action = 'Verified'; // Change "Verify" to "Verified"
    setTableData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerId) {
      setIsLoading(true);
      fetchData(customerId); // Fetch data when the form is submitted
      setIsLoading(false);
    }
  };

  return (
    <div className="VerifyAccount-wrapper">
      <section className="VerifyAccount-account-filter-section">
        <h2 className="VerifyAccount-section-title">Account Filter</h2>
        <p className="VerifyAccount-section-subtitle">Use filter to see more precise report</p>
        <form className="VerifyAccount-account-filter-form" onSubmit={handleSubmit}>
          <div className="VerifyAccount-form-group">
            <label htmlFor="accountType">Choose Account Type</label>
            <select
              id="accountType"
              name="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option selected disabled>Select Account Type</option>
              <option value="fixed">Fixed Deposit</option>
              <option value="savings">Savings Account</option>
              <option value="current">Current Account</option>
            </select>
          </div>

          <div className="VerifyAccount-form-group">
            <label htmlFor="fromDate">From Date</label>
            <div className="VerifyAccount-input-with-icon">
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                placeholder="dd-mm-yyyy"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              
            </div>
          </div>

          <div className="VerifyAccount-form-group">
            <label htmlFor="toDate">To Date</label>
            <div className="VerifyAccount-input-with-icon">
              <input
                type="date"
                id="toDate"
                name="toDate"
                placeholder="dd-mm-yyyy"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
              
            </div>
          </div>

          <div className="VerifyAccount-form-group">
            <label htmlFor="customerId">Customer Id</label>
            <input
              type="text"
              id="customerId"
              name="customerId"
              placeholder="Enter customer id"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>

          <div className="VerifyAccount-form-group VerifyAccount-full-width">
            <label htmlFor="referenceNumber">Reference Number</label>
            <input
              type="text"
              id="referenceNumber"
              name="referenceNumber"
              placeholder="Enter reference number"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
            />
          </div>

          <div className="VerifyAccount-form-group VerifyAccount-align-bottom">
            <button type="submit" className="VerifyAccount-submit-btn">
              {isLoading ? 'Loading...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </section>

      <section className="VerifyAccount-verify-account-section">
        <h2 className="VerifyAccount-section-title">Verify Account</h2>

        <div className="VerifyAccount-button-row">
          <button className="VerifyAccount-btn VerifyAccount-csv-btn"><i className="fas fa-file-csv"></i> CSV</button>
          <button className="VerifyAccount-btn VerifyAccount-excel-btn"><i className="fas fa-file-excel"></i> Excel</button>
          <button className="VerifyAccount-btn VerifyAccount-print-btn"><i className="fas fa-print"></i> Print</button>

          <div className="VerifyAccount-entry-control">
            <span>Show</span>
            <select aria-label="Show entries">
              <option>10</option>
            </select>
            <span>entries</span>
          </div>

          <div className="VerifyAccount-VerifyAccount-search-input">
            <label htmlFor="searchTableAccount" className="VerifyAccount-VerifyAccount-sr-only">Search</label>
            <input
              type="search"
              id="searchTableAccount"
              placeholder="Search"
              className="VerifyAccount-VerifyAccount-search-field"
            />
          </div>
        </div>

        <div className="VerifyAccount-table-container">
          <table className="VerifyAccount-account-table">
            <thead>
              <tr>
                <th>SN <i className="fas fa-sort-up"></i></th>
                <th>ACTION</th>
                <th>CUS NAME</th>
                <th>CUS ID</th>
                <th>GUARDIAN NAME</th>
                <th>SCHEME NAME</th>
                <th>DEPOSIT AMOUNT</th>
                <th>KYC STATUS</th>
                <th>REFERENCE NUMBER</th>
                <th>REQUESTED BY</th>
                <th>REQUESTED DATE</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sn}</td>
                    <td>
                      {row.action === 'Verify' ? (
                        <button 
                          onClick={() => handleVerify(index)} 
                          className="VerifyAccount-verify-btn"
                        >
                          Verify
                        </button>
                      ) : (
                        <span>{row.action}</span>
                      )}
                    </td>
                    <td>{row.cusName}</td>
                    <td>{row.cusId}</td>
                    <td>{row.guardianName}</td>
                    <td>{row.schemeName}</td>
                    <td>{row.depositAmount}</td>
                    <td>{row.kycStatus}</td>
                    <td>{row.referenceNumber}</td>
                    <td>{row.requestedBy}</td>
                    <td>{row.requestedDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="VerifyAccount-no-data">No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="VerifyAccount-pagination-footer">
          <div className="VerifyAccount-pagination-text">Showing {tableData.length} entries</div>
          <div className="VerifyAccount-pagination-controls">
            <button disabled>Previous</button>
            <button disabled>Next</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyAccount;
