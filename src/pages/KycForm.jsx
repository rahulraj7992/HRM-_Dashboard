import React, { useState } from "react";
import axios from "axios";

const documentTypes = [
  "Aadhaar Card",
  "PAN Card",
  "Passport",
  "Driving License",
  "Voter ID",
];

const KycForm = () => {
  const [userId, setUserId] = useState("");
  const [documents, setDocuments] = useState([]);
  const [form, setForm] = useState({
    docType: "",
    docNumber: "",
    docFile: null,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleFileChange = (e) => {
    setForm({ ...form, docFile: e.target.files[0] });
  };

  const handleAddOrUpdateDocument = (e) => {
    e.preventDefault();
    const { docType, docNumber, docFile } = form;

    if (!docType || !docNumber || !docFile) {
      alert("Please fill all document fields");
      return;
    }

    const newDoc = {
      docType,
      docNumber,
      fileName: docFile.name,
      fileUrl: URL.createObjectURL(docFile),
      rawFile: docFile,
    };

    const updatedDocs = [...documents];
    if (editingIndex !== null) {
      updatedDocs[editingIndex] = newDoc;
    } else {
      updatedDocs.push(newDoc);
    }

    setDocuments(updatedDocs);
    setForm({ docType: "", docNumber: "", docFile: null });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const doc = documents[index];
    setForm({
      docType: doc.docType,
      docNumber: doc.docNumber,
      docFile: null,
    });
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...documents];
    updated.splice(index, 1);
    setDocuments(updated);
    if (editingIndex === index) {
      setEditingIndex(null);
      setForm({ docType: "", docNumber: "", docFile: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || documents.length === 0) {
      alert("Please enter User ID and upload at least one document.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    documents.forEach((doc, idx) => {
      formData.append(`documents[${idx}][type]`, doc.docType);
      formData.append(`documents[${idx}][number]`, doc.docNumber);
      formData.append(`documents[${idx}][file]`, doc.rawFile);
    });

    try {
      const response = await axios.post("http://localhost/api/kyc/upload", formData);
      if (response.data.success) {
        alert("Documents uploaded successfully!");
        setUserId("");
        setDocuments([]);
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      console.error("Upload error", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>KYC Document Upload</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter User ID"
              style={styles.input}
            />
          </div>

          <div style={styles.formRow}>
            <select
              value={form.docType}
              onChange={(e) => setForm({ ...form, docType: e.target.value })}
              style={styles.select}
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
              onChange={(e) => setForm({ ...form, docNumber: e.target.value })}
              style={styles.input}
            />

            <input type="file" onChange={handleFileChange} style={styles.inputFile} />

            <button style={styles.buttonSecondary} onClick={handleAddOrUpdateDocument}>
              {editingIndex !== null ? "Update" : "Add"}
            </button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3>Uploaded Documents</h3>
            {documents.length === 0 ? (
              <p>No documents uploaded.</p>
            ) : (
              <table style={styles.table}>
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
                          <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                            View PDF
                          </a>
                        ) : (
                          <img src={doc.fileUrl} alt={doc.docType} style={styles.preview} />
                        )}
                      </td>
                      <td>
                        <button onClick={() => handleEdit(idx)} style={styles.actionBtn}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(idx)} style={styles.deleteBtn}>
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
            style={{
              ...styles.buttonPrimary,
              opacity: documents.length === 0 ? 0.6 : 1,
              cursor: documents.length === 0 ? "not-allowed" : "pointer",
            }}
            disabled={documents.length === 0}
          >
            Submit All Documents
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)", // Soft gray gradient background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    maxWidth: "960px",
    margin: "20px auto", // Reduced top margin
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }
  ,
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  formRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    flex: 1,
    minWidth: "180px",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "200px",
  },
  inputFile: {
    flex: 1,
    minWidth: "200px",
  },
  buttonPrimary: {
    padding: "12px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonSecondary: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  preview: {
    height: "40px",
    width: "auto",
    borderRadius: "3px",
  },
  actionBtn: {
    marginRight: "10px",
    backgroundColor: "#ffc107",
    border: "none",
    padding: "6px 12px",
    borderRadius: "3px",
    color: "#000",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    border: "none",
    padding: "6px 12px",
    borderRadius: "3px",
    color: "white",
  },
};

export default KycForm;
