import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlus, FaEdit, FaIdCard, FaTrash } from "react-icons/fa";
import "../assets/css/Customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [alert, setAlert] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const hasProcessedState = useRef(false);

  useEffect(() => {
    const storedData = localStorage.getItem("CustomerForm");
    if (storedData) {
      setCustomers([JSON.parse(storedData)]);
    }
  }, []);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  useEffect(() => {
    const state = location.state;

    if (state?.customerData && !hasProcessedState.current) {
      const { customerData, index } = state;

      const processedDocs = (customerData.documents || []).map((doc) => ({
        ...doc,
        url: doc.url || URL.createObjectURL(doc.file),
      }));

      const newCustomer = {
        ...customerData,
        documents: processedDocs,
      };

      setCustomers((prev) => {
        const updated = [...prev];
        if (index !== null && index !== undefined && updated[index]) {
          updated[index] = { ...newCustomer, id: updated[index].id };
          setAlert("Customer updated successfully!");
        } else {
          const newId = `#HRM${prev.length + 101}`;
          updated.push({ ...newCustomer, id: newId });
          setAlert("Customer added successfully!");
        }
        return updated;
      });

      hasProcessedState.current = true;
      navigate("/customers", { replace: true });
    }
  }, [location.state, navigate]);

  const handleOpenForm = (index = null) => {
    hasProcessedState.current = false;
    const state = index !== null ? { customerData: customers[index], index } : { index: null };
    navigate("/customerform", { state });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      const customer = customers[index];
      customer?.documents?.forEach((doc) => {
        if (doc.url?.startsWith("blob:")) {
          URL.revokeObjectURL(doc.url);
        }
      });

      setCustomers((prev) => prev.filter((_, i) => i !== index));
      setAlert("Customer deleted successfully!");
    }
  };

  const handleRemoveDocument = (customerIndex, docIndex) => {
    const doc = customers[customerIndex]?.documents?.[docIndex];
    if (doc && window.confirm(`Remove document (${doc.type})?`)) {
      if (doc.url?.startsWith("blob:")) {
        URL.revokeObjectURL(doc.url);
      }
      setCustomers((prev) => {
        const updated = [...prev];
        updated[customerIndex].documents.splice(docIndex, 1);
        setAlert(`${doc.type} document removed!`);
        return updated;
      });
    }
  };

  const isImage = (filename) => /\.(jpg|jpeg|png|gif)$/i.test(filename);

  const filteredCustomers = customers.filter((customer) =>
    Object.values(customer).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  return (
    <div className="customers-container">
      {alert && <div className="alert-message">{alert}</div>}

      <div className="top-bar">
        <button className="add-btn" onClick={() => handleOpenForm()}>
          <FaPlus /> Add Customer
        </button>
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>PAN</th>
              <th>Adhar</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Joining Date</th>
              <th>Bank Account</th>
              <th>IFSC</th>
              <th>Bank Name</th>
              <th>Branch Name</th>
              <th>Role</th>
              <th>Address</th>
              <th>Documents</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((c, i) => (
              <tr key={i}>
                <td>{c.id}</td>
                <td>{c.panNumber}</td>
                <td>{c.aadharNumber}</td>
                <td>{c.fullName}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.gender}</td>
                <td>{c.dob}</td>
                <td>{c.doj}</td>
                <td>{c.bankAccount}</td>
                <td>{c.ifsc}</td>
                <td>{c.bankName}</td>
                <td>{c.bankBranch}</td>
                <td>{c.role}</td>
                <td>{c.address}</td>
                <td className="docs-cell">
                  {c.documents?.length > 0 ? (
                    c.documents.map((d, idx) => (
                      <div key={idx} className="doc-entry">
                        <a href={d.url} target="_blank" rel="noreferrer">
                          {isImage(d.url) ? (
                            <img src={d.url} alt={d.type} className="doc-thumb" />
                          ) : (
                            d.type
                          )}
                        </a>
                        <button onClick={() => handleRemoveDocument(i, idx)} className="delete-doc">
                          ❌
                        </button>
                      </div>
                    ))
                  ) : (
                    <span>No docs</span>
                  )}
                </td>
                <td>
                  <button className="kyc-btn" title="KYC" onClick={() => handleOpenForm(i)}>
                    <FaIdCard />
                  </button>
                  <button className="edit-btn" title="Edit" onClick={() => handleOpenForm(i)}>
                    <FaEdit />
                  </button>
                  <button className="delete-btn" title="Delete" onClick={() => handleDelete(i)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan="17" className="no-customers">No customers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
