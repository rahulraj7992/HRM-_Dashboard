/* eslint-disable no-unused-vars */
// Customers.js
import React, { useState } from "react";
import { FaPlus, FaEdit, FaIdCard, FaFilePdf, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Customers = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [customers, setCustomers] = useState([
    {
      id: "#003021M",
      firstName: "Adi",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
    {
      id: "#003021M",
      firstName: "Ram",
      lastName: "Nugroho",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      mobile: "096628388214",
      bankAccount: "1234567890",
      ifsc: "SBIN0001234",
      userRole: "Customer",
      documents: [{ name: "aadhaar.pdf", type: "Aadhaar", url: "https://example.com/aadhaar.pdf" }],
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    Object.values(customer).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    aadhar: "",
    pan: "",
    mobile: "",
    bankAccount: "",
    ifsc: "",
    userRole: "",
    documents: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [docType, setDocType] = useState("");

  const handleInputChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && docType) {
      const fileURL = URL.createObjectURL(file);
      setNewCustomer({
        ...newCustomer,
        documents: [...newCustomer.documents, { name: file.name, type: docType, url: fileURL }],
      });
      setDocType("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editIndex] = { ...updatedCustomers[editIndex], ...newCustomer };
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, { id: `#0030${customers.length + 24}R`, ...newCustomer }]);
    }
    closeFormModal();
  };

  const deleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  const openFormModal = (index = null) => {
    setEditIndex(index);
    setShowModal(true);
    
    if (index !== null) {
      setNewCustomer(customers[index]); // Load existing customer data
    } else {
      setNewCustomer({
        firstName: "",
        lastName: "",
        aadhar: "",
        pan: "",
        mobile: "",
        bankAccount: "",
        ifsc: "",
        userRole: "",
        documents: [],
      });
    }
  };
  
  const closeFormModal = () => {
    setShowModal(false);
    setEditIndex(null);
  };
  
  // Function to handle multiple document uploads
  const handleDocumentUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    setNewCustomer((prev) => ({
      ...prev,
      documents: [...prev.documents, ...files], // Append new files to existing ones
    }));
  };
  

  // const openKycPage = (customerId) => {
  //   navigate(`/KycForm/${customerId}`); // Navigate to KYC page
  // };

  return (
    <div
    style={{
      padding: window.innerWidth <= 480 ? "120px" :
               window.innerWidth <= 768 ? "120px" :
               window.innerWidth <= 1024 ? "15px" : "20px",
  
      marginTop: "50px",
  
      marginLeft: window.innerWidth <= 480 ? "40px" :
                  window.innerWidth <= 768 ? "50px" :
                  window.innerWidth <= 1024 ? "250px" : "280px",
  
      marginRight: window.innerWidth <= 480 ? "0px" :
                   window.innerWidth <= 768 ? "0px" :
                   window.innerWidth <= 1024 ? "30px" : "50px",
    }}
    >
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          marginBottom: "15px",
        }}
        onClick={() => openFormModal()}
      >
        <FaPlus style={{ marginRight: "5px" }} /> Add Customer
      </button>
      <input
        type="text"
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "15px",
        }}
        placeholder="Search customers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" , minWidth: "600px",}}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "10px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Name
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Aadhaar
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                PAN
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Mobile
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Bank Account
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                IFSC
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Role
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Documents
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.id}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.firstName} {customer.lastName}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.aadhar}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.pan}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.mobile}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.bankAccount}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.ifsc}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.userRole}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {customer.documents.length > 0
                    ? customer.documents.map((doc, idx) => (
                        <div key={idx}>
                          <FaFilePdf
                            style={{ color: "red", marginRight: "5px" }}
                          />
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {doc.type}
                          </a>
                        </div>
                      ))
                    : "No documents"}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      marginRight: "5px",
                    }}
                    onClick={() => openFormModal(index)} // Pass customer ID dynamically
                  >
                    <FaIdCard /> KYC
                  </button>
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      marginRight: "5px",
                    }}
                    onClick={() => openFormModal(index)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => deleteCustomer(index)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "5px",
              width: "calc(100% - 300px)",
              maxWidth: "600px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h5>{editIndex !== null ? "Edit Customer" : "Add Customer"}</h5>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={closeFormModal}
              >
                X
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              {Object.keys(newCustomer).map(
                (key) =>
                  key !== "documents" &&
                  key !== "userRole" && (
                    <div style={{ marginBottom: "15px" }} key={key}>
                      <label style={{ display: "block", marginBottom: "5px" }}>
                        {key}
                      </label>
                      <input
                        type="text"
                        style={{ padding: "10px", width: "100%" }}
                        name={key}
                        value={newCustomer[key]}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )
              )}

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Document Type
                </label>
                <select
                  style={{ padding: "10px", width: "100%" }}
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                >
                  <option value="">Select Document Type</option>
                  <option value="Aadhaar">Aadhaar</option>
                  <option value="PAN">PAN</option>
                  <option value="Bank Statement">Bank Statement</option>
                </select>
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Upload Document
                </label>
                <input
                  type="file"
                  style={{ padding: "10px", width: "100%" }}
                  onChange={handleFileUpload}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    padding: "10px",
                  }}
                  onClick={closeFormModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;