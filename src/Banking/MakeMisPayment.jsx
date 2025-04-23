import React, { useState, useEffect } from "react";
import "../assets/Banking/MisPayment.css";
import {
  FaFileCsv,
  FaPrint,
  FaFileExcel,
  FaSearch,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const MakeMisPayment = () => {
  const sampleUsers = [
    {
      customerID: "CUST001",
      name: "John Doe",
      accountNumber: "ACC123456",
      periodDue: "2023-01-01 to 2023-01-31",
      interestGenerated: "$120.50",
      interestGeneratedSince: "2023-01-01",
      action: "View",
      fromDate: "01-01-2023",
      toDate: "31-01-2023",
    },
    {
      customerID: "CUST002",
      name: "Jane Smith",
      accountNumber: "ACC654321",
      periodDue: "2023-02-01 to 2023-02-28",
      interestGenerated: "$98.75",
      interestGeneratedSince: "2023-02-01",
      action: "View",
      fromDate: "01-02-2023",
      toDate: "28-02-2023",
    },
    {
      customerID: "CUST003",
      name: "Alice Johnson",
      accountNumber: "ACC789012",
      periodDue: "2023-03-01 to 2023-03-31",
      interestGenerated: "$150.00",
      interestGeneratedSince: "2023-03-01",
      action: "View",
      fromDate: "01-03-2023",
      toDate: "31-03-2023",
    },
    {
      customerID: "CUST004",
      name: "Bob Williams",
      accountNumber: "ACC345678",
      periodDue: "2023-04-01 to 2023-04-30",
      interestGenerated: "$110.25",
      interestGeneratedSince: "2023-04-01",
      action: "View",
      fromDate: "01-04-2023",
      toDate: "30-04-2023",
    },
    {
      customerID: "CUST005",
      name: "Eve Davis",
      accountNumber: "ACC901234",
      periodDue: "2023-05-01 to 2023-05-31",
      interestGenerated: "$130.00",
      interestGeneratedSince: "2023-05-01",
      action: "View",
      fromDate: "01-05-2023",
      toDate: "31-05-2023",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState(sampleUsers);
  const [searchParams, setSearchParams] = useState({
    customerName: "",
    accountNumber: "",
    customerID: "",
    fromDate: "",
    toDate: "",
  });

  const [modalData, setModalData] = useState(null);

  useEffect(() => {}, [currentPage, entriesPerPage, filteredUsers]);

  const parseDateDMY = (dateStr) => {
    if (!dateStr) return null;
    const parts = dateStr.split("-");
    if (parts.length !== 3) return null;
    const [dd, mm, yyyy] = parts;
    return new Date(`${yyyy}-${mm}-${dd}`);
  };

  const filterUsers = (filters) => {
    return sampleUsers.filter((user) => {
      if (
        filters.customerName &&
        !user.name.toLowerCase().includes(filters.customerName.toLowerCase())
      )
        return false;

      if (
        filters.accountNumber &&
        !user.accountNumber
          .toLowerCase()
          .includes(filters.accountNumber.toLowerCase())
      )
        return false;

      if (
        filters.customerID &&
        !user.customerID
          .toLowerCase()
          .includes(filters.customerID.toLowerCase())
      )
        return false;

      const userFrom = parseDateDMY(user.fromDate);
      const userTo = parseDateDMY(user.toDate);
      const filterFrom = parseDateDMY(filters.fromDate);
      const filterTo = parseDateDMY(filters.toDate);

      if (filterFrom && userTo && userTo < filterFrom) return false;
      if (filterTo && userFrom && userFrom > filterTo) return false;

      return true;
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filters = { ...searchParams };
    const filtered = filterUsers(filters);
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    if (filteredUsers.length === 0) return alert("No data to export");
    let csvContent =
      "SN,CUSTOMER ID,NAME,ACCOUNT NUMBER,PERIOD DUE,INTEREST GENERATED,INTEREST GENERATED SINCE,ACTION\n";
    filteredUsers.forEach((user, index) => {
      csvContent += `${index + 1},"${user.customerID}","${user.name}","${
        user.accountNumber
      }","${user.periodDue}","${user.interestGenerated}","${
        user.interestGeneratedSince
      }","${user.action}"\n`;
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "users.csv";
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleModalOpen = (user) => {
    setModalData(user);
  };

  const handleModalClose = () => {
    setModalData(null);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderTable = () => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = Math.min(
      startIndex + entriesPerPage,
      filteredUsers.length
    );

    if (filteredUsers.length === 0) {
      return (
        <tr>
          <td className="MakeMisPayment-table-cell" colSpan="8">
            No data available in table
          </td>
        </tr>
      );
    }

    return filteredUsers.slice(startIndex, endIndex).map((user, index) => (
      <tr key={index} className="MakeMisPayment-table-row">
        <td className="MakeMisPayment-table-cell">{startIndex + index + 1}</td>
        <td className="MakeMisPayment-table-cell">{user.customerID}</td>
        <td className="MakeMisPayment-table-cell">{user.name}</td>
        <td className="MakeMisPayment-table-cell">{user.accountNumber}</td>
        <td className="MakeMisPayment-table-cell">{user.periodDue}</td>
        <td className="MakeMisPayment-table-cell">{user.interestGenerated}</td>
        <td className="MakeMisPayment-table-cell">
          {user.interestGeneratedSince}
        </td>
        <td
          className="MakeMisPayment-table-cell MakeMisPayment-table-action"
          onClick={() => handleModalOpen(user)}
        >
          <FaSearch /> View
        </td>
      </tr>
    ));
  };

  return (
    <div className="MakeMisPayment-container">
      <div className="MakeMisPayment-form-container">
        <form
          id="searchForm"
          className="MakeMisPayment-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSearchSubmit}
        >
          <div className="MakeMisPayment-form-grid">
            <div>
              <label className="MakeMisPayment-label">
                <FaCalendarAlt className="MakeMisPayment-icon" /> From Date
              </label>
              <input
                type="text"
                id="fromDate"
                name="fromDate"
                placeholder="dd-mm-yyyy"
                className="MakeMisPayment-input"
                value={searchParams.fromDate}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, fromDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="MakeMisPayment-label">
                <FaCalendarAlt className="MakeMisPayment-icon" /> To Date
              </label>
              <input
                type="text"
                id="toDate"
                name="toDate"
                placeholder="dd-mm-yyyy"
                className="MakeMisPayment-input"
                value={searchParams.toDate}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, toDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="MakeMisPayment-label">
                <FaSearch className="MakeMisPayment-icon" /> Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="Account Number"
                className="MakeMisPayment-input"
                value={searchParams.accountNumber}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    accountNumber: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="MakeMisPayment-label">
                <FaUser className="MakeMisPayment-icon" /> Customer ID
              </label>
              <input
                type="text"
                id="customerID"
                name="customerID"
                placeholder="Customer ID"
                className="MakeMisPayment-input"
                value={searchParams.customerID}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    customerID: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="MakeMisPayment-label">
                <FaUserCircle className="MakeMisPayment-icon" /> Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                placeholder="Customer Name"
                className="MakeMisPayment-input"
                value={searchParams.customerName}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    customerName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="MakeMisPayment-form-actions">
            <button type="submit" className="MakeMisPayment-button">
              <FaSearch /> Search
            </button>
          </div>
        </form>
      </div>

      <div className="MakeMisPayment-table-section">
        <div className="MakeMisPayment-table-actions">
          <div>
            <button onClick={handleExportCSV} className="MakeMisPayment-button">
              <FaFileCsv /> CSV
            </button>
            <button
              onClick={() => alert("Export to Excel not implemented")}
              className="MakeMisPayment-button"
            >
              <FaFileExcel /> Excel
            </button>
            <button onClick={handlePrint} className="MakeMisPayment-button">
              <FaPrint /> Print
            </button>
          </div>
        </div>

        <table className="MakeMisPayment-table">
          <thead>
            <tr>
              <th className="MakeMisPayment-table-header">SN</th>
              <th className="MakeMisPayment-table-header">Customer ID</th>
              <th className="MakeMisPayment-table-header">Name</th>
              <th className="MakeMisPayment-table-header">Account Number</th>
              <th className="MakeMisPayment-table-header">Period Due</th>
              <th className="MakeMisPayment-table-header">
                Interest Generated
              </th>
              <th className="MakeMisPayment-table-header">
                Interest Generated Since
              </th>
              <th className="MakeMisPayment-table-header">Action</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>

        <div className="MakeMisPayment-pagination">
          <button
            onClick={handlePrevPage}
            className="MakeMisPayment-pagination-button"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="MakeMisPayment-pagination-page">{currentPage}</span>
          <button
            onClick={handleNextPage}
            className="MakeMisPayment-pagination-button"
            disabled={currentPage * entriesPerPage >= filteredUsers.length}
          >
            Next
          </button>
        </div>
      </div>

      {modalData && (
        <div className="MakeMisPayment-modal">
          <div className="MakeMisPayment-modal-content">
            <span
              className="MakeMisPayment-modal-close"
              onClick={handleModalClose}
            >
              &times;
            </span>
            <h3>Customer Details</h3>
            <p>
              <strong>Name:</strong> {modalData.name}
            </p>
            <p>
              <strong>Customer ID:</strong> {modalData.customerID}
            </p>
            <p>
              <strong>Account Number:</strong> {modalData.accountNumber}
            </p>
            <p>
              <strong>Period Due:</strong> {modalData.periodDue}
            </p>
            <p>
              <strong>Interest Generated:</strong> {modalData.interestGenerated}
            </p>
            <p>
              <strong>Interest Since:</strong>{" "}
              {modalData.interestGeneratedSince}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeMisPayment;
