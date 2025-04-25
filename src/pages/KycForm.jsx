import React, { useState } from "react";
import axios from "axios";
import "../assets/css/KycForm.css"; // Assuming you're importing your CSS file

const documentTypes = [
  "Aadhaar Card",
  "PAN Card",
  "Passport",
  "Driving License",
  "Voter ID",
];

const KycForm = () => {
  const [userId, setUserId] = useState("");
  const [form, setForm] = useState({ docType: "", docNumber: "", file: null });
  const [documents, setDocuments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleAddOrUpdateDocument = async (e) => {
    e.preventDefault();

    // Validation check for required fields
    if (!form.docType || !form.docNumber || (!form.file && editingIndex === null)) {
      alert("Please fill in all fields.");
      return;
    }

    const fileToUse = form.file;
    let fileData = null;

    if (fileToUse) {
      fileData = await readFileAsBase64(fileToUse);
    }

    const newDoc = {
      docType: form.docType,
      docNumber: form.docNumber,
      fileName: fileToUse ? fileToUse.name : documents[editingIndex].fileName,
      fileUrl: fileData || documents[editingIndex].fileUrl,
    };

    const updatedDocs = [...documents];

    // If editing, update the document at editingIndex, else add new document
    if (editingIndex !== null) {
      updatedDocs[editingIndex] = newDoc;
      setEditingIndex(null);
    } else {
      updatedDocs.push(newDoc);
    }

    setDocuments(updatedDocs);
    setForm({ docType: "", docNumber: "", file: null });
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleEdit = (index) => {
    const doc = documents[index];
    setForm({
      docType: doc.docType,
      docNumber: doc.docNumber,
      file: null, // Don't preload the file
    });
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocs);
    setEditingIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || documents.length === 0) {
      alert("Please enter User ID and add at least one document.");
      return;
    }

    try {
      const payload = {
        userId,
        documents: documents.map((doc) => ({
          docType: doc.docType,
          docNumber: doc.docNumber,
          file: doc.fileUrl,
        })),
      };

      await axios.post("/api/kyc-documents", payload);

      alert("KYC documents submitted successfully!");
      setUserId("");
      setDocuments([]);
      setForm({ docType: "", docNumber: "", file: null });
      setEditingIndex(null);
    } catch (error) {
      console.error("Error submitting documents:", error);
      alert("You are Editing the Data of user.");
    }
  };

  return (
    <div className="kyc-page">
      <div className="kyc-container">
        <h2 className="kyc-header">KYC Document Upload</h2>
        <form onSubmit={handleSubmit} className="kyc-form">
          <div className="kyc-form-group">
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter User ID"
              className="kyc-input"
            />
          </div>

          <div className="kyc-form-row">
            <select
              value={form.docType}
              onChange={(e) => setForm({ ...form, docType: e.target.value })}
              className="kyc-select"
            >
              <option value="">Select Document Type</option>
              {documentTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter Document Number"
              value={form.docNumber}
              onChange={(e) =>
                setForm({ ...form, docNumber: e.target.value })
              }
              className="kyc-input"
            />

            <input
              type="file"
              onChange={handleFileChange}
              className="kyc-input-file"
            />

            <button className="kyc-btn-secondary" onClick={handleAddOrUpdateDocument}>
              {editingIndex !== null ? "Update Document" : "Add Document"}
            </button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Uploaded Documents</h3>
            {documents.length === 0 ? (
              <p>No documents uploaded.</p>
            ) : (
              <table className="kyc-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>ID Number</th>
                    <th>Preview</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, idx) => (
                    <tr key={idx}>
                      <td>{doc.docType}</td>
                      <td>{doc.docNumber}</td>
                      <td>
                        {doc.fileName.endsWith(".pdf") ? (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View PDF
                          </a>
                        ) : (
                          <img
                            src={doc.fileUrl}
                            alt={doc.docType}
                            className="kyc-preview"
                          />
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleEdit(idx)}
                          className="kyc-edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="kyc-delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <button
            type="submit"
            className="kyc-btn-primary"
            disabled={documents.length === 0}
            style={{
              opacity: documents.length === 0 ? 0.6 : 1,
              cursor: documents.length === 0 ? "not-allowed" : "pointer",
              marginTop: "30px",
            }}
          >
            Submit All Documents
          </button>
        </form>
      </div>
    </div>
  );
};

export default KycForm;
