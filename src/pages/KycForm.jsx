// KycForm.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const KycForm = () => {
  const { customerId } = useParams(); // Get customerId from URL
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    aadhar: "",
    pan: "",
    mobile: "",
    documents: [],
  });

  const handleInputChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setCustomerDetails({
        ...customerDetails,
        documents: [...customerDetails.documents, { name: file.name, url: fileURL }],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("KYC Data Submitted:", customerDetails);
    // Here you can save the data to your state or backend
    navigate("/"); // Redirect back to the customers page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>KYC Form for Customer ID: {customerId}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Aadhaar Number:</label>
          <input
            type="text"
            name="aadhar"
            value={customerDetails.aadhar}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>PAN Number:</label>
          <input
            type="text"
            name="pan"
            value={customerDetails.pan}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={customerDetails.mobile}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Document:</label>
          <input
            type="file"
            onChange={handleFileUpload}
            required
            style={styles.fileInput}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// Basic styles for the KYC form
const styles = {
  container: {
    padding: "20px",
    margin: "200px 100px 100px",
    maxWidth: "600px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",

  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  fileInput: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default KycForm;