import React, { useState } from "react";
import "../assets/css/CustomerSearch.css";

const CustomerSearch = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSearch = () => {
    // In a real app, fetch data based on customer ID
    setShowDetails(true);
  };

  return (
    <div className="customer-search-wrapper">
      {/* Search Section */}
      <div className="customer-search-container">
        <div className="customer-search-box">
          <h1 className="customer-search-title">Search Customer</h1>
          <div className="customer-search-input-group">
            <input
              type="text"
              placeholder="Enter Customer ID"
              className="customer-search-input"
            />
            <button className="customer-search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Show Customer Details & KYC if available */}
      {showDetails && (
        <>
          {/* Customer Details Section */}
          <div className="container-box">
            <div className="details-box">
              <h2 className="details-title">Customer Details</h2>
              <div className="details-content">
                <img
                  src="https://storage.googleapis.com/a1aa/image/DFFT-wbvvayukTxaAwbriG_I4D0vLLsh1YCpbnlhvAs.jpg"
                  alt="Customer Profile"
                  className="customer-image"
                />
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>ATTRIBUTE</th>
                      <th>VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Customer ID</td><td>CUS00001</td></tr>
                    <tr><td>Name</td><td>Rahul</td></tr>
                    <tr><td>Email</td><td>zxy@hunermand.in</td></tr>
                    <tr><td>Phone</td><td>1234567891</td></tr>
                    <tr><td>Address</td><td>Daund</td></tr>
                    <tr><td>Aadhar</td><td>123456789019</td></tr>
                    <tr><td>PAN</td><td>FSOPK2888I</td></tr>
                    <tr><td>Branch Name</td><td>Muzaffarpur</td></tr>
                    <tr><td>Branch Code</td><td>MUZ</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Space between sections */}
          <div style={{ height: "40px" }}></div>

          {/* KYC Documents Section */}
          <div className="container-box">
            <div className="details-box">
              <h2 className="details-title">KYC Documents</h2>
              <div className="details-content">
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Document Type</th>
                      <th>Preview</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aadhar Card</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/100"
                          alt="Aadhar"
                          className="kyc-preview"
                        />
                      </td>
                      <td>
                        <a href="https://via.placeholder.com/100" download>
                          Download
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>PAN Card</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/100"
                          alt="PAN"
                          className="kyc-preview"
                        />
                      </td>
                      <td>
                        <a href="https://via.placeholder.com/100" download>
                          Download
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerSearch;
