/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "../assets/css/HrModule.css";

const CustomerForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);

  const scrollToError = () => {
    if (firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  

  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.panNumber || formData.panNumber.length !== 10) {
        stepErrors.panNumber = "PAN must be exactly 10 characters.";
      }
      if (!formData.aadharNumber || !/^\d{12}$/.test(formData.aadharNumber)) {
        stepErrors.aadharNumber = "Aadhaar must be exactly 12 digits.";
      }
    } else if (step === 2) {
      const fields = ["fullName", "guardianName", "mobile", "email", "pincode"];
      fields.forEach((field) => {
        if (!formData[field]) {
          stepErrors[field] = "This field is required.";
        }
      });
    } else if (step === 3) {
      const fields = ["district", "state", "country", "dob", "doj"];
      fields.forEach((field) => {
        if (!formData[field]) {
          stepErrors[field] = "This field is required.";
        }
      });
    }

    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      scrollToError();
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "panNumber") {
      setErrors((prev) => ({
        ...prev,
        panNumber: value.length !== 10 ? "PAN must be exactly 10 characters." : "",
      }));
    }

    if (name === "aadharNumber") {
      if (!/^\d*$/.test(value)) {
        setErrors((prev) => ({ ...prev, aadharNumber: "Aadhaar must contain digits only." }));
      } else if (value.length !== 12) {
        setErrors((prev) => ({ ...prev, aadharNumber: "Aadhaar must be exactly 12 digits." }));
      } else {
        setErrors((prev) => ({ ...prev, aadharNumber: "" }));
      }
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      // Store data in localStorage
      localStorage.setItem("CustomerForm", JSON.stringify(formData));
  
      alert("Form submitted successfully!");
      console.log("Form submitted with data:", formData);
      setStep(4); // move to review or redirect if needed
    }
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
      doj: "Date of Joining",
    };

    return Object.entries(labels).map(([key, label]) => (
      <p key={key}>
        <strong>{label}:</strong> {formData[key] || "N/A"}
      </p>
    ));
  };

  const getFieldClass = (name) => (errors[name] ? "input-error" : "");

  const renderError = (name) => {
    if (errors[name]) {
      return (
        <p className="error-text" ref={!firstErrorRef.current ? firstErrorRef : null}>
          {errors[name]}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="hr-container">
      <div className="form-box">
        {step <= 3 && (
          <>
            <div className="form-section">
              <h2>{["Personal Details", "Additional Details", "Final Details"][step - 1]}</h2>
              <p>Step {step} of 3</p>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${step * 33.33}%` }}></div>
              </div>
              <div className="progress-label">{Math.floor(step * 33.33)}%</div>

              {/* Step content */}
              {step === 1 && (
                <>
                  <div className="form-grid">
                    <div>
                      <label>Pan Number</label>
                      <div className="input-group">
                        <input
                          name="panNumber"
                          value={formData.panNumber || ""}
                          onChange={handleChange}
                          type="text"
                          maxLength="10"
                          className={getFieldClass("panNumber")}
                          placeholder="Enter Pan Number"
                        />
                        <button disabled={!!errors.panNumber || !formData.panNumber}>Verify</button>
                      </div>
                      {renderError("panNumber")}
                    </div>

                    <div>
                      <label>Aadhar Number</label>
                      <div className="input-group">
                        <input
                          name="aadharNumber"
                          value={formData.aadharNumber || ""}
                          onChange={handleChange}
                          type="text"
                          maxLength="16"
                          className={getFieldClass("aadharNumber")}
                          placeholder="Enter Aadhar Number"
                        />
                        <button disabled={!!errors.aadharNumber || !formData.aadharNumber}>
                          Verify
                        </button>
                      </div>
                      {renderError("aadharNumber")}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Choose Branch</label>
                      <select name="branch" onChange={handleChange}>
                        <option>Select</option>
                        <option>Muzaffarpur</option>
                      </select>
                    </div>
                    <div>
                      <label>Choose Role</label>
                      <select name="role" onChange={handleChange}>
                        <option>Select</option>
                        <option>Admin</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Choose Title</label>
                      <select name="title" onChange={handleChange}>
                        <option>Select</option>
                        <option>Mrs.</option>
                        <option>Mr.</option>
                      </select>
                    </div>
                    <div>
                      <label>Choose Gender</label>
                      <select name="gender" onChange={handleChange}>
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="form-grid">
                    <div>
                      <label>Full Name</label>
                      <input
                        name="fullName"
                        onChange={handleChange}
                        className={getFieldClass("fullName")}
                        type="text"
                        placeholder="Enter full name"
                      />
                      {renderError("fullName")}
                    </div>
                    <div>
                      <label>Guardian Name</label>
                      <input
                        name="guardianName"
                        onChange={handleChange}
                        className={getFieldClass("guardianName")}
                        type="text"
                        placeholder="Enter guardian name"
                      />
                      {renderError("guardianName")}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Mobile Number</label>
                      <input
                        name="mobile"
                        onChange={handleChange}
                        className={getFieldClass("mobile")}
                        type="text"
                        placeholder="Enter mobile number"
                      />
                      {renderError("mobile")}
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        name="email"
                        onChange={handleChange}
                        className={getFieldClass("email")}
                        type="email"
                        placeholder="Enter email"
                      />
                      {renderError("email")}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Pincode</label>
                      <input
                        name="pincode"
                        onChange={handleChange}
                        className={getFieldClass("pincode")}
                        type="text"
                        placeholder="Enter pincode"
                      />
                      {renderError("pincode")}
                    </div>
                    <div>
                      <label>Choose Post Office</label>
                      <select name="postOffice" onChange={handleChange}>
                        <option>Select</option>
                        <option>Stm</option>
                        <option>nhm</option>
                        <option>bhi</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Bank Account</label>
                      <input name="bankAccount" onChange={handleChange} type="text" />
                    </div>
                    <div>
                      <label>Bank IFSC</label>
                      <input name="ifsc" onChange={handleChange} type="text" />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Bank Branch</label>
                      <input name="bankBranch" onChange={handleChange} type="text" />
                    </div>
                    <div>
                      <label>Bank Name</label>
                      <input name="bankName" onChange={handleChange} type="text" />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="form-grid">
                    <div>
                      <label>Sub District</label>
                      <select name="subDistrict" onChange={handleChange}>
                        <option>NA</option>
                      </select>
                    </div>
                    <div>
                      <label>District</label>
                      <select name="district" onChange={handleChange} className={getFieldClass("district")}>
                        <option>Select</option>
                        <option>Muzaffarpur</option>
                        <option>Sitamarhi</option>
                      </select>
                      {renderError("district")}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>State</label>
                      <select name="state" onChange={handleChange} className={getFieldClass("state")}>
                        <option>Select</option>
                        <option>Bihar</option>
                        <option>Delhi</option>
                      </select>
                      {renderError("state")}
                    </div>
                    <div>
                      <label>Country</label>
                      <select name="country" onChange={handleChange} className={getFieldClass("country")}>
                        <option>Select</option>
                        <option>India</option>
                        <option>America</option>
                      </select>
                      {renderError("country")}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Address</label>
                      <input name="address" onChange={handleChange} type="text" />
                    </div>
                    <div>
                      <label>Marital Status</label>
                      <select name="maritalStatus" onChange={handleChange}>
                        <option>Select</option>
                        <option>Single - Not married</option>
                        <option>Married</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>Date of Birth</label>
                      <input name="dob" onChange={handleChange} type="date" className={getFieldClass("dob")} />
                      {renderError("dob")}
                    </div>
                    <div>
                      <label>Date of Joining</label>
                      <input name="doj" onChange={handleChange} type="date" className={getFieldClass("doj")} />
                      {renderError("doj")}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="button-group">
              <button className="btn" onClick={prevStep} disabled={step === 1}>
                PREV
              </button>
              <button className="btn" onClick={step === 3 ? handleSubmit : nextStep}>
                {step === 3 ? "SUBMIT" : "NEXT"}
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="form-section">
            <h2>Review Submitted Data</h2>
            <div className="review-box">{renderReviewData()}</div>
            <div className="button-group">
              <button className="btn" onClick={() => setStep(1)}>Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerForm;
