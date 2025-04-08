/* eslint-disable no-unused-vars */
// HrModule.js
import React, { useState } from "react";
import "../assets/css/HrModule.css";

const HrModule = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showReview, setShowReview] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully!");
    // You can also clear the form here if needed:
    // setFormData({});
    // setStep(1);
    // setShowReview(false);
  };

  const renderReviewData = () => {
    const labels = {
      panNumber: "Pan Number",
      aadharNumber: "Aadhar Number",
      branch: "Branch",
      role: "Role",
      title: "Title",
      gender: "Gender",
      fullName: "Full Name",
      guardianName: "Guardian Name",
      mobile: "Mobile Number",
      email: "Email",
      pincode: "Pincode",
      postOffice: "Post Office",
      bankAccount: "Bank Account",
      ifsc: "Bank IFSC",
      bankBranch: "Bank Branch",
      bankName: "Bank Name",
      subDistrict: "Sub District",
      district: "District",
      state: "State",
      country: "Country",
      address: "Address",
      maritalStatus: "Marital Status",
      dob: "Date of Birth",
      doj: "Date of Joining"
    };

    return Object.entries(labels).map(([key, label]) => (
      <p key={key}>
        <strong>{label}:</strong> {formData[key] || "N/A"}
      </p>
    ));
  };

  return (
    <div className="hr-container">
      <div className="form-box">
        {step === 1 && (
          <div className="form-section">
            <h2>Personal Details</h2>
            <p>Fill in details to make a user for services access.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "33%" }}></div>
            </div>
            <div className="progress-label">33%</div>

            <div className="form-grid">
              <div>
                <label>Pan Number</label>
                <div className="input-group">
                  <input name="panNumber" onChange={handleChange} type="text" placeholder="Enter Pan Number" />
                  <button>Verify</button>
                </div>
              </div>
              <div>
                <label>Aadhar Number</label>
                <div className="input-group">
                  <input name="aadharNumber" onChange={handleChange} type="text" placeholder="Enter Aadhar Number" />
                  <button>Verify</button>
                </div>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Choose Branch</label>
                <select name="branch" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Muzaffarpur</option>
                </select>
              </div>
              <div>
                <label>Choose Role</label>
                <select name="role" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Choose Title</label>
                <select name="title" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Mr.</option>
                </select>
              </div>
              <div>
                <label>Choose Gender</label>
                <select name="gender" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                </select>
              </div>
            </div>

            <div className="button-group">
              <button disabled className="btn disabled">PREV</button>
              <button className="btn" onClick={nextStep}>NEXT</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-section">
            <h2>Additional Details</h2>
            <p>Fill in additional details for further processing.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "66%" }}></div>
            </div>
            <div className="progress-label">66%</div>

            <div className="form-grid">
              <div>
                <label>Full Name</label>
                <input name="fullName" onChange={handleChange} type="text" placeholder="Enter full name" />
              </div>
              <div>
                <label>Guardian Name</label>
                <input name="guardianName" onChange={handleChange} type="text" placeholder="Enter guardian name" />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Mobile Number</label>
                <input name="mobile" onChange={handleChange} type="text" placeholder="Enter mobile number" />
              </div>
              <div>
                <label>Email</label>
                <input name="email" onChange={handleChange} type="email" placeholder="Enter email" />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Pincode</label>
                <input name="pincode" onChange={handleChange} type="text" placeholder="Enter pincode" />
              </div>
              <div>
                <label>Choose Post Office</label>
                <select name="postOffice" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Stm</option>
                  <option>nhm</option>
                  <option>bhi</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Bank Account</label>
                <input name="bankAccount" onChange={handleChange} type="text" placeholder="Enter Bank Account" />
              </div>
              <div>
                <label>Bank IFSC</label>
                <input name="ifsc" onChange={handleChange} type="text" placeholder="Enter Bank IFSC" />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Bank Branch</label>
                <input name="bankBranch" onChange={handleChange} type="text" placeholder="Enter bank branch" />
              </div>
              <div>
                <label>Bank Name</label>
                <input name="bankName" onChange={handleChange} type="text" placeholder="Enter Bank Name" />
              </div>
            </div>

            <div className="button-group">
              <button className="btn" onClick={prevStep}>PREV</button>
              <button className="btn" onClick={nextStep}>NEXT</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-section">
            <h2>Final Details</h2>
            <p>Fill in the final details to complete the process.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }}></div>
            </div>
            <div className="progress-label">100%</div>

            <div className="form-grid">
              <div>
                <label>Sub District</label>
                <select name="subDistrict" onChange={handleChange}>
                  <option>NA</option>
                </select>
              </div>
              <div>
                <label>District</label>
                <select name="district" onChange={handleChange}>
                  <option>Muzaffarpur</option>
                  <option>Sitamarhi</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>State</label>
                <select name="state" onChange={handleChange}>
                  <option>Bihar</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div>
                <label>Country</label>
                <select name="country" onChange={handleChange}>
                  <option>India</option>
                  <option>America</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Address</label>
                <input name="address" onChange={handleChange} type="text" placeholder="Enter address" />
              </div>
              <div>
                <label>Marital Status</label>
                <select name="maritalStatus" onChange={handleChange}>
                  <option>Single - Not married</option>
                  <option>Married</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Date of Birth</label>
                <input name="dob" onChange={handleChange} type="date" />
              </div>
              <div>
                <label>Date of Joining</label>
                <input name="doj" onChange={handleChange} type="date" />
              </div>
            </div>

            <div className="button-group">
              <button className="btn" onClick={prevStep}>PREV</button>
              <button className="btn" onClick={nextStep}>NEXT</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-section">
            <h2>Confirmation</h2>
            <p>Click review to see all filled information.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }}></div>
            </div>
            <div className="progress-label">100%</div>

            <div className="button-group">
              <button className="btn" onClick={prevStep}>PREV</button>
              <button className="btn" onClick={() => setShowReview(true)}>REVIEW</button>
              <button className="btn" onClick={handleSubmit}>SUBMIT</button>
            </div>

            {showReview && (
              <div className="review-box">
                <h3>User Details Summary</h3>
                {renderReviewData()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HrModule;
