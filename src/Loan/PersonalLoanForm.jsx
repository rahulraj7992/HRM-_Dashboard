import React, { useState, useEffect } from 'react';
import '../assets/Loan/PersonalLoanForm.css';

export default function PersonalLoanForm() {
    const [loanType, setLoanType] = useState('');
    const [loanScheme, setLoanScheme] = useState('');
    const [availableSchemes, setAvailableSchemes] = useState([]);
  
    const loanSchemes = {
      personal: [
        { value: 'quick-service-loan', text: 'Quick Service Loan' },
        { value: 'salary-loan', text: 'Salary Loan' },
        { value: 'mobile-loan', text: 'Mobile Loan' }
      ],
      fixed: [
        { value: 'fixed-loan', text: 'Fixed Loan' },
        { value: 'fix', text: 'Fix' }
      ],
      group: [
        { value: 'samooh', text: 'Samooh' },
        { value: 'gl', text: 'GL' }
      ]
    };
  
    useEffect(() => {
      if (loanType && loanSchemes[loanType]) {
        setAvailableSchemes(loanSchemes[loanType]);
      } else {
        setAvailableSchemes([]);
      }
      setLoanScheme('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loanType]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Loan Application submitted successfully!');
    };
  
    return (
      <div className="PersonalLoanForm-container">
        <h1>Personal Loan Application</h1>
        <form id="personal-loan-form" className="PersonalLoanForm-form" onSubmit={handleSubmit} noValidate>
  
          {/* Loan Options & Schemes */}
          <section className="PersonalLoanForm-section">
            <h2>Loan Options & Schemes</h2>
            <div className="PersonalLoanForm-loan-options">
              <div className="PersonalLoanForm-form-group">
                <label htmlFor="loan-type">Loan Type</label>
                <select
                  id="loan-type"
                  name="loanType"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Loan Type</option>
                  <option value="personal">Personal Loan</option>
                  <option value="fixed">Fixed Loan</option>
                  <option value="group">Group Loan</option>
                </select>
              </div>
              <div className="PersonalLoanForm-form-group">
                <label htmlFor="loan-scheme">Loan Scheme</label>
                <select
                  id="loan-scheme"
                  name="loanScheme"
                  value={loanScheme}
                  onChange={(e) => setLoanScheme(e.target.value)}
                  disabled={!availableSchemes.length}
                  required
                >
                  <option value="" disabled>Select Scheme</option>
                  {availableSchemes.map((s) => (
                    <option key={s.value} value={s.value}>{s.text}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
  
          {/* Loan Details */}
          <section className="PersonalLoanForm-section">
            <h2>Loan Details</h2>
            <div className="PersonalLoanForm-loan-details-grid">
              {/* All loan detail fields */}
              {['minLoanAmount','maxLoanAmount','chooseLoanROI','loanAmount','loanTenure','loanEMIAmount','loanInterest','loanPayable'].map(id => (
                <div className="PersonalLoanForm-form-group" key={id}>
                  <label htmlFor={id}>{(() => {
                    switch(id) {
                      case 'minLoanAmount': return 'Minimum Loan Amount';
                      case 'maxLoanAmount': return 'Maximum Loan Amount';
                      case 'chooseLoanROI': return 'Choose Loan ROI (%)';
                      case 'loanAmount': return 'Loan Amount';
                      case 'loanTenure': return 'Loan Tenure (months)';
                      case 'loanEMIAmount': return 'Loan EMI Amount';
                      case 'loanInterest': return 'Loan Interest Amount';
                      case 'loanPayable': return 'Loan Payable Amount';
                      default: return '';
                    }
                  })()}</label>
                  <input
                    type={id.includes('Amount')||id==='loanTenure' ? 'number' : id==='chooseLoanROI'? 'number' : 'text'}
                    id={id}
                    name={id}
                    {...(id==='chooseLoanROI' ? { step:'0.01', min:'0', max:'100', placeholder:'e.g. 7.5' } : {})}
                    {...(id==='minLoanAmount'||id==='maxLoanAmount' ? { min:'0', placeholder: id==='minLoanAmount' ? 'e.g. 10000':'e.g. 500000' } : {})}
                    {...(id==='loanTenure' ? { min:'1', placeholder:'e.g. 24' } : {})}
                    {...(id.includes('EMI')||id.includes('Interest')||id.includes('Payable') ? { step:'0.01', min:'0', placeholder:`Calculated ${id.replace('loan','')}` } : {})}
                    required
                  />
                </div>
              ))}
              {/* Selects: frequency, ROI type, recovery freq, mode, applied date */}
              {[
                {id:'loanFrequency',label:'Loan Frequency',options:['monthly','quarterly','half-yearly','yearly']},
                {id:'loanROIType',label:'Select Loan ROI Type',options:['fixed','floating']},
                {id:'loanRecoveryFrequency',label:'Select Loan Recovery Frequency',options:['monthly','quarterly','half-yearly','yearly']},
                {id:'loanDisbursalMode',label:'Select Loan Disbursal Mode',options:['bank-transfer','cheque','cash']}
              ].map(({id,label,options})=> (
                <div className="PersonalLoanForm-form-group" key={id}>
                  <label htmlFor={id}>{label}</label>
                  <select id={id} name={id} required>
                    <option value="" disabled>Select {label.split(' ').pop()}</option>
                    {options.map(o=> <option key={o} value={o}>{o.replace(/-/g,' ')}</option>)}
                  </select>
                </div>
              ))}
              <div className="PersonalLoanForm-form-group">
                <label htmlFor="loanAppliedDate">Loan Applied Date</label>
                <input type="date" id="loanAppliedDate" name="loanAppliedDate" required />
              </div>
              <div className="PersonalLoanForm-form-group full-width">
                <label htmlFor="loanPurpose">Loan Purpose</label>
                <input type="text" id="loanPurpose" name="loanPurpose" placeholder="Reason or description" required />
              </div>
              <div className="PersonalLoanForm-form-group full-width">
                <label htmlFor="collectionLandmark">Select Collection Landmark</label>
                <select id="collectionLandmark" name="collectionLandmark" required>
                  <option value="" disabled>Select Landmark</option>
                  <option value="near_bank_branch">Near Bank Branch</option>
                  <option value="community_center">Community Center</option>
                  <option value="local_shop">Local Shop</option>
                  <option value="other">Other</option>
                </select>
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
            <button type="submit" className="PersonalLoanForm-apply-btn" aria-label="Apply for loan">Apply</button>
          </div>
        </form>
      </div>
    );
  }