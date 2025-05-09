import React, { useState } from "react";
import "../assets/Loan/LoanKyc.css";

export default function LoanKyc() {
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [docType, setDocType] = useState("");
  const [docFile, setDocFile] = useState(null);

  const handleUpload = () => {
    if (docType && docFile) {
      setUploadedDocs([
        ...uploadedDocs,
        {
          id: uploadedDocs.length + 1,
          name: docType,
          file: URL.createObjectURL(docFile),
          status: "Uploaded",
        },
      ]);
      setDocType("");
      setDocFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("KYC Submitted Successfully!");
  };

  return (
    <div className="LoanKyc-container">
      <h1>Loan KYC Application</h1>
      <form className="LoanKyc-form" onSubmit={handleSubmit} noValidate>
        {/* Section 1: Loan Details */}
        <section className="LoanKyc-section">
          <h2>Loan Details</h2>
          <div className="LoanKyc-grid">
            <div>
              <p>Loan Account Number</p>
              <input type="text" placeholder="Loan Account Number" required />
            </div>
            <div>
              <p>Applicant Name</p>
              <input type="text" placeholder="Applicant Name" required />
            </div>
            <div>
              <p>Aadhar Number</p>
              <input type="text" placeholder="Aadhar Number" required />
            </div>
            <div>
              <p>PAN Number</p>
              <input type="text" placeholder="PAN Number" required />
            </div>
            <div>
              <p>Applicant Guardian Number</p>
              <input
                type="text"
                placeholder="Applicant Guardian Number"
                required
              />
            </div>
            <div>
              <p>Loan Amount</p>
              <input type="number" placeholder="Loan Amount" required />
            </div>
            <div>
              <p>Loan ROI (%)</p>
              <input type="number" placeholder="Loan ROI (%)" required />
            </div>
            <div>
              <p>ROI Type</p>
              <select required defaultValue="">
                <option value="" disabled>
                  Select ROI Type
                </option>
                <option value="fixed">Fixed</option>
                <option value="floating">Floating</option>
              </select>
            </div>
            <div>
              <p>Loan Tenure</p>
              <input type="text" placeholder="Loan Tenure" required />
            </div>
            <div>
              <p>Loan Recovery Frequency</p>
              <select required defaultValue="">
                <option value="" disabled>
                  Loan Recovery Frequency
                </option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <p>Loan Closure Amount</p>
              <input type="number" placeholder="Loan Closure Amount" required />
            </div>
            <div>
              <p>Loan Applied Date</p>
              <input type="date" placeholder="Loan Applied Date" required />
            </div>
          </div>
        </section>

        {/* Section 2: Upload KYC Documents */}
        <section className="LoanKyc-section">
          <h2>Upload KYC Documents</h2>
          <div className="LoanKyc-upload-row">
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose Document Type
              </option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
              <option value="Passport">Passport</option>
            </select>

            <input
              type="file"
              onChange={(e) => setDocFile(e.target.files[0])}
              required
              title=" Upload Document"
            />

            <button
              type="button"
              onClick={handleUpload}
              className="LoanKyc-upload-btn"
            >
              <i className="fas fa-upload" style={{ marginRight: "6px" }}></i>
              Upload
            </button>
          </div>
        </section>

        {/* Section 3: Uploaded Documents Table */}
        <section className="LoanKyc-section">
          <h2>Uploaded Documents</h2>
          <div className="LoanKyc-table-actions">
            <button type="button">Print</button>
            <button type="button">CSV</button>
            <button type="button">Excel</button>
          </div>
          <div className="LoanKyc-table-wrapper">
            <table className="LoanKyc-table">
              <thead>
                <tr>
                  <th>
                    <i className="fas fa-list-ol" /> Serial No
                  </th>
                  <th>
                    <i className="fas fa-file-alt" /> Document Name
                  </th>
                  <th>
                    <i className="fas fa-eye" /> See Document
                  </th>
                  <th>
                    <i className="fas fa-check-circle" /> Status
                  </th>
                  <th>
                    <i className="fas fa-tools" /> Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploadedDocs.map((doc, idx) => (
                  <tr key={idx}>
                    <td>{doc.id}</td>
                    <td>{doc.name}</td>
                    <td>
                      <a href={doc.file} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    </td>
                    <td>{doc.status}</td>
                    <td>
                      <button className="LoanKyc-action-btn">
                        <i className="fas fa-edit" /> Edit
                      </button>
                      <button className="LoanKyc-action-btn">
                        <i className="fas fa-trash" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="LoanKyc-submit-wrapper">
          <button type="submit" className="LoanKyc-submit-btn">
            Submit KYC
          </button>
        </div>
      </form>
    </div>
  );
}
