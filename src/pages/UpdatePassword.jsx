import React, { useState } from "react";
import * as XLSX from "xlsx";
import "../assets/css/UpdatePassword.css";

const allUsers = [
  {
    sn: 1,
    employeeId: "AD00001",
    name: "Shyam Kumar",
    email: "shyam@gmail.com",
    phone: "9874563210",
    branch: "Muzaffarpur",
    role: "Admin",
    aadhar: "683385583353",
  },
  {
    sn: 2,
    employeeId: "AGN0001",
    name: "Demo Agent",
    email: "zzzz@hunermand.in",
    phone: "0000000000",
    branch: "muzaffarpur",
    role: "Agent",
    aadhar: "123456789047",
  },
  ...Array.from({ length: 50 }, (_, i) => ({
    sn: i + 3,
    employeeId: `TVET${i + 3}`,
    name: `User ${i + 3}`,
    email: `user${i + 3}@example.com`,
    phone: `12345678${i}`,
    branch: i % 2 === 0 ? "muzaffarpur" : "Admin",
    role: i % 3 === 0 ? "Agent" : "Admin",
    aadhar: `1234567890${i}`,
  })),
];

const UpdatePasswordTable = () => {
  const [filters, setFilters] = useState({
    branch: "",
    role: "",
    employeeId: "",
  });
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [kycDocuments, setKycDocuments] = useState([]);
  const [kycForm, setKycForm] = useState({
    employeeId: "",
    documentType: "",
    documentFile: null,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const { branch, role, employeeId } = filters;
    const filtered = allUsers.filter((user) => {
      return (
        (!branch || user.branch === branch) &&
        (!role || user.role === role) &&
        (!employeeId ||
          user.employeeId.toLowerCase().includes(employeeId.toLowerCase()))
      );
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const exportToFile = (type) => {
    const dataToExport = filteredUsers.map(
      ({ sn, employeeId, name, email, phone, branch, role, aadhar }) => ({
        SN: sn,
        "Employee ID": employeeId,
        "Employee Name": name,
        Email: email,
        "Phone Number": phone,
        "Branch Name": branch,
        Role: role,
        "Aadhar Number": aadhar,
      })
    );
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    if (type === "csv")
      XLSX.writeFile(workbook, "filtered_users.csv", { bookType: "csv" });
    else XLSX.writeFile(workbook, "filtered_users.xlsx", { bookType: "xlsx" });
  };

  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <title>Print Users</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            h2 { text-align: center; }
          </style>
        </head>
        <body>
          <h2>Filtered User Data</h2>
          <table>
            <thead>
              <tr>
                <th>SN</th><th>Employee ID</th><th>Employee Name</th><th>Email</th>
                <th>Phone Number</th><th>Branch Name</th><th>Role</th><th>Aadhar Number</th>
              </tr>
            </thead>
            <tbody>
              ${filteredUsers
                .map(
                  (user) => `
                <tr>
                  <td>${user.sn}</td><td>${user.employeeId}</td><td>${user.name}</td><td>${user.email}</td>
                  <td>${user.phone}</td><td>${user.branch}</td><td>${user.role}</td><td>${user.aadhar}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>`;
    const newWin = window.open("", "", "width=900,height=700");
    newWin.document.write(printContent);
    newWin.document.close();
    newWin.print();
  };

  const indexOfLastUser = currentPage * entriesPerPage;
  const indexOfFirstUser = indexOfLastUser - entriesPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

  const handleKycFormChange = (e) => {
    const { name, value, files } = e.target;
    setKycForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleKycUpload = (e) => {
    e.preventDefault();
    const { employeeId, documentType, documentFile } = kycForm;

    if (!employeeId || !documentType || !documentFile) {
      alert("Please fill all the fields.");
      return;
    }

    const alreadyUploaded = kycDocuments.find(
      (doc) =>
        doc.employeeId === employeeId && doc.documentType === documentType
    );

    if (alreadyUploaded) {
      alert("This document type already exists for the employee.");
      return;
    }

    const newDoc = {
      id: Date.now(),
      employeeId,
      documentType,
      fileName: documentFile.name,
      fileUrl: URL.createObjectURL(documentFile),
    };
    setKycDocuments((prev) => [...prev, newDoc]);
    setKycForm({ employeeId: "", documentType: "", documentFile: null });
  };

  // Filter out already uploaded document types for the selected employee
  const availableDocumentTypes = ["Aadhar", "PAN", "Address Proof"].filter(
    (type) =>
      !kycDocuments.some(
        (doc) =>
          doc.employeeId === kycForm.employeeId && doc.documentType === type
      )
  );
  const handleUpdateDocument = (doc) => {
    console.log("Update document clicked:", doc);
    // You can open a modal here or trigger any update logic
  };

  return (
    <div className="settings-container">
      {/* Filter Section */}
      <div className="filter-card">
        <h2 className="settings-title">Search Filters</h2>
        <div className="filter-section">
          <select
            name="branch"
            value={filters.branch}
            onChange={handleFilterChange}
          >
            <option value="">Choose Branch</option>
            <option value="Admin">Admin</option>
            <option value="muzaffarpur">Muzaffarpur</option>
          </select>

          <select
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
          >
            <option value="">Choose User Type</option>
            <option value="Agent">Agent</option>
            <option value="Admin">Admin</option>
          </select>

          <input
            type="text"
            name="employeeId"
            placeholder="Enter Employee ID"
            value={filters.employeeId}
            onChange={handleFilterChange}
          />

          <button
            className="settings-btn settings-btn-yellow"
            onClick={handleSearch}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Update Password Table */}
      <div className="settings-card">
        <div className="settings-title-bar">
          <h1 className="settings-title">Update Password</h1>
          <div className="entries-control">
            Show
            <select value={entriesPerPage} onChange={handleEntriesChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </div>
        </div>

        <div className="settings-btn-group">
          <button
            className="settings-btn settings-btn-yellow"
            onClick={() => exportToFile("csv")}
          >
            CSV
          </button>
          <button
            className="settings-btn settings-btn-green"
            onClick={() => exportToFile("xlsx")}
          >
            Excel
          </button>
          <button
            className="settings-btn settings-btn-blue"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>

        <div className="settings-table-wrapper-scroll">
          <table className="settings-custom-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>ACTION</th>
                <th>EMPLOYEE ID</th>
                <th>EMPLOYEE NAME</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>BRANCH NAME</th>
                <th>ROLE</th>
                <th>AADHAR NUMBER</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.sn}>
                    <td>{user.sn}</td>
                    <td>
                      <div className="settings-action-btns">
                        <button className="settings-btn settings-btn-blue settings-small">
                          Update Password
                        </button>
                        <button className="settings-btn settings-btn-green settings-small">
                          Update Pin
                        </button>
                      </div>
                    </td>
                    <td>{user.employeeId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.branch}</td>
                    <td>{user.role}</td>
                    <td>{user.aadhar}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="settings-btn settings-btn-blue settings-small"
          >
            Prev
          </button>
          <span className="page-count">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="settings-btn settings-btn-blue settings-small"
          >
            Next
          </button>
        </div>
      </div>

      {/* KYC Upload Section */}
      <div className="kyc-section">
        <div className="settings-card">
          <h2 className="settings-title">KYC Document Upload</h2>
          <form className="filter-section" onSubmit={handleKycUpload}>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={kycForm.employeeId}
              onChange={handleKycFormChange}
            />
            <select
              name="documentType"
              value={kycForm.documentType}
              onChange={handleKycFormChange}
            >
              <option value="">Select Document Type</option>
              {availableDocumentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="file"
              name="documentFile"
              onChange={handleKycFormChange}
            />
            <button className="settings-btn settings-btn-green" type="submit">
              Upload
            </button>
          </form>

          <div className="settings-table-wrapper-scroll mt-4">
            <table className="settings-custom-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Document Type</th>
                  <th>Preview</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {kycDocuments.length > 0 ? (
                  kycDocuments.map((doc) => (
                    <tr key={doc.id}>
                      <td>{doc.employeeId}</td>
                      <td>{doc.documentType}</td>
                      <td>
                        {doc.fileName.endsWith(".pdf") ? (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View PDF
                          </a>
                        ) : (
                          <img
                            src={doc.fileUrl}
                            alt={doc.documentType}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                              borderRadius: "4px",
                            }}
                          />
                        )}
                      </td>
                      <td>
                        <button
                          className="settings-btn settings-btn-blue settings-small"
                          onClick={() => handleUpdateDocument(doc)} // replace with your update function
                        >
                          Update
                        </button>
                        <button
                          className="settings-btn settings-btn-red settings-small"
                          onClick={() =>
                            setKycDocuments((prev) =>
                              prev.filter((d) => d.id !== doc.id)
                            )
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No KYC documents uploaded</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordTable;
