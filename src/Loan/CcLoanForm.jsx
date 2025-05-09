import React, { useState, useEffect } from "react";
import "../assets/Loan/CcLoanForm.css";

export default function CcLoanForm() {
  const [loanType, setLoanType] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [roi, setRoi] = useState("");
  const [roiType, setRoiType] = useState("");

  const loanConfig = {
    interset: {
      min: 5000,
      max: 50000,
      roi: 10,
      roiMax: 12,
      roiType: "fixed",
    },
    ccloan: {
      min: 10000,
      max: 500000,
      roi: 15,
      roiMax: 20,
      roiType: "floating",
    },
  };

  useEffect(() => {
    if (loanType && loanConfig[loanType]) {
      const config = loanConfig[loanType];
      setMinAmount(config.min);
      setMaxAmount(config.max);
      setRoi(config.roi);
      setRoiType(config.roiType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Loan Application submitted successfully!");
  };

  return (
    <div className="PersonalLoanForm-container">
      <h1>CC Loan Application</h1>
      <form
        id="personal-loan-form"
        className="PersonalLoanForm-form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Loan Options */}
        <section className="PersonalLoanForm-section">
          <h2>Choose Loan Service</h2>
          <div className="PersonalLoanForm-loan-options">
            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loan-type">Loan Service Type</label>
              <select
                id="loan-type"
                name="loanType"
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Loan Type
                </option>
                <option value="interset">Only interest pay</option>
                <option value="ccloan">New Cc Loan</option>
              </select>
            </div>
          </div>
        </section>

        {/* Loan Details */}
        <section className="PersonalLoanForm-section">
          <h2>Loan Details</h2>
          <div className="PersonalLoanForm-loan-details-grid">
            <div className="PersonalLoanForm-form-group">
              <label htmlFor="maxLoanAmount">Maximum Loan Amount</label>
              <input
                type="number"
                id="maxLoanAmount"
                name="maxLoanAmount"
                min="0"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                required
              />
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="minLoanAmount">Minimum Loan Amount</label>
              <input
                type="number"
                id="minLoanAmount"
                name="minLoanAmount"
                min="0"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                required
              />
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="chooseLoanROI">Choose Loan ROI (%)</label>
              <input
                type="number"
                id="chooseLoanROI"
                name="chooseLoanROI"
                step="0.01"
                min="0"
                max="100"
                value={roi}
                onChange={(e) => setRoi(e.target.value)}
                required
              />
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanROIType">Select Loan ROI Type</label>
              <select
                id="loanROIType"
                name="loanROIType"
                value={roiType}
                onChange={(e) => setRoiType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="fixed">Fixed</option>
                <option value="floating">Floating</option>
              </select>
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanAmount">Loan Amount</label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                placeholder="Enter Loan Amount"
                required
              />
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanFrequency">Loan Frequency</label>
              <select id="loanFrequency" name="loanFrequency" required>
                <option value="" disabled>
                  Select Frequency
                </option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="half-yearly">Half-Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanRecoveryFrequency">
                Select Loan Recovery Frequency
              </label>
              <select
                id="loanRecoveryFrequency"
                name="loanRecoveryFrequency"
                required
              >
                <option value="" disabled>
                  Select Frequency
                </option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="half-yearly">Half-Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanDisbursalMode">
                Select Loan Disbursal Mode
              </label>
              <select id="loanDisbursalMode" name="loanDisbursalMode" required>
                <option value="" disabled>
                  Select Mode
                </option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="cheque">Cheque</option>
                <option value="cash">Cash</option>
              </select>
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanAppliedDate">Loan Applied Date</label>
              <input
                type="date"
                id="loanAppliedDate"
                name="loanAppliedDate"
                required
              />
            </div>

            <div className="PersonalLoanForm-form-group">
              <label htmlFor="loanEMIAmount">Loan EMI Amount</label>
              <input
                type="number"
                step="0.01"
                id="loanEMIAmount"
                name="loanEMIAmount"
                placeholder="Calculated EMIAmount"
                required
              />
            </div>
          </div>
        </section>

        {/* User Details */}
        <section className="PersonalLoanForm-section">
          <h2>User Details</h2>
          <div className="PersonalLoanForm-loan-details-grid">
            {[
              {
                id: "userId",
                label: "User ID",
                type: "text",
                placeholder: "Enter user ID",
                title: "Unique identifier for the user",
              },
              {
                id: "userName",
                label: "Name",
                type: "text",
                placeholder: "Enter full name",
                title: "Full legal name of the user",
              },
              {
                id: "userAdhar",
                label: "Aadhar Number",
                type: "text",
                placeholder: "Enter 12-digit Aadhar number",
                attrs: { maxLength: "12", pattern: "\\d{12}" },
                title: "Must be a 12-digit Aadhar number",
              },
              {
                id: "userPan",
                label: "PAN Number",
                type: "text",
                placeholder: "Enter PAN number",
                attrs: { maxLength: "10", pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}" },
                title:
                  "Format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)",
              },
              {
                id: "guardianName",
                label: "Guardian Name",
                type: "text",
                placeholder: "Enter guardian name",
                title: "Name of guardian (e.g. father/mother)",
              },
              {
                id: "userMobile",
                label: "Mobile Number",
                type: "tel",
                placeholder: "Enter 10-digit mobile number",
                attrs: { maxLength: "10", pattern: "\\d{10}" },
                title: "Valid Indian 10-digit mobile number",
              },
              {
                id: "userAddress",
                label: "Address",
                type: "textarea",
                placeholder: "Enter address",
                title: "Full residential address",
              },
              {
                id: "bankAccount",
                label: "Bank Account Number",
                type: "text",
                placeholder: "Enter bank account number",
                title: "Enter a valid bank account number",
              },
              {
                id: "bankIFSC",
                label: "Bank IFSC Code",
                type: "text",
                placeholder: "Enter IFSC code",
                attrs: { maxLength: "11", pattern: "[A-Z]{4}0[A-Z0-9]{6}" },
                title: "11-character IFSC code (e.g. HDFC0123456)",
              },
              {
                id: "userType",
                label: "User Type",
                type: "select",
                options: ["individual", "business"],
              },
            ].map((field) => (
              <div
                className={
                  "PersonalLoanForm-form-group" +
                  (field.type === "textarea" || field.id === "userAddress"
                    ? " full-width"
                    : "")
                }
                key={field.id}
              >
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "select" ? (
                  <select id={field.id} name={field.id} required>
                    <option value="" disabled>
                      Select {field.label.split(" ").pop()}
                    </option>
                    {field.options.map((o) => (
                      <option key={o} value={o}>
                        {o.charAt(0).toUpperCase() + o.slice(1)}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows="3"
                    placeholder={field.placeholder}
                    title={field.title}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    title={field.title}
                    {...field.attrs}
                    required
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Guarantor Details */}
        <section className="PersonalLoanForm-section">
  <h2>Guarantor Details</h2>
  <div className="PersonalLoanForm-loan-details-grid">
    {[
      {
        id: "guarantorUserId",
        label: "Guarantor User ID (Optional)",
        type: "text",
        placeholder: "Enter guarantor user ID",
        optional: true,
      },
      {
        id: "guarantorName",
        label: "Guarantor Name",
        type: "text",
        placeholder: "Enter guarantor full name",
      },
      {
        id: "guarantorRelation",
        label: "Choose Guarantor Relation",
        type: "select",
        options: [
          "father",
          "mother",
          "spouse",
          "friend",
          "business_partner",
          "other",
        ],
      },
      {
        id: "guarantorDOB",
        label: "Guarantor Date of Birth",
        type: "date",
      },
      {
        id: "guarantorAdhar",
        label: "Guarantor Aadhar",
        type: "text",
        placeholder: "Enter 12-digit Aadhar number",
        attrs: {
          maxLength: "12",
          pattern: "\\d{12}",
          title: "12 digit Aadhar number",
        },
      },
      {
        id: "guarantorPan",
        label: "Guarantor PAN",
        type: "text",
        placeholder: "Enter PAN number",
        attrs: {
          maxLength: "10",
          pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}",
          title: "10 character PAN number",
        },
      },
      {
        id: "guarantorMobile",
        label: "Guarantor Mobile Number",
        type: "tel",
        placeholder: "Enter 10-digit mobile number",
        attrs: {
          maxLength: "10",
          pattern: "\\d{10}",
          title: "10 digit mobile number",
        },
      },
    ].map((field) => (
      <div
        className={
          "PersonalLoanForm-form-group" +
          (field.id === "guarantorMobile" ? " full-width" : "")
        }
        key={field.id}
      >
        <label htmlFor={field.id}>{field.label}</label>
        {field.type === "select" ? (
          <select id={field.id} name={field.id} required>
            <option value="" disabled>
              Select {field.label.split(" ").pop()}
            </option>
            {field.options.map((o) => (
              <option key={o} value={o}>
                {o.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            {...(field.attrs || {})}
            {...(field.optional ? {} : { required: true })}
          />
        )}
      </div>
    ))}
  </div>
</section>

        {/* Submit */}
        <div className="PersonalLoanForm-submit-wrapper">
          <button
            type="submit"
            className="PersonalLoanForm-apply-btn"
            aria-label="Apply for loan"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
