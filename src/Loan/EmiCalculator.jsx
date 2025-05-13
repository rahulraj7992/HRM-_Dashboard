import React, { useState } from 'react';
import '../assets/Loan/EmiCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalculator,
  faRupeeSign,
  faPercentage,
  faTable,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons';
import { format, addMonths } from 'date-fns';

const LoanEmiCalculator = () => {
  const [inputs, setInputs] = useState({
    loanAmount: '',
    interestRate: '',
    interestRateType: 'Yearly',
    roiType: 'Flat',
    loanTerm: '',
    emiFrequency: 'Monthly',
    firstEmiDate: format(new Date(), 'yyyy-MM-dd'),
  });

  const [schedule, setSchedule] = useState([]);
  const [totals, setTotals] = useState({ emi: 0, principal: 0, interest: 0 });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const calculateEMI = () => {
    const P = parseFloat(inputs.loanAmount);
    const r = parseFloat(inputs.interestRate) / 100;
    const n = parseInt(inputs.loanTerm);

    if (!P || !r || !n) return;

    const isYearly = inputs.interestRateType === 'Yearly';
    const isReducing = inputs.roiType === 'Reducing';

    const rate = isYearly ? r / 12 : r;
    const totalMonths = n;

    let emi = 0;
    if (isReducing) {
      emi = (P * rate * Math.pow(1 + rate, totalMonths)) / (Math.pow(1 + rate, totalMonths) - 1);
    } else {
      const totalInterest = (P * r * totalMonths) / 12;
      emi = (P + totalInterest) / totalMonths;
    }

    let balance = P;
    let totalPrincipal = 0;
    let totalInterest = 0;
    let scheduleData = [];
    const startDate = new Date(inputs.firstEmiDate);

    for (let i = 1; i <= totalMonths; i++) {
      let interest = isReducing ? balance * rate : (P * r) / 12;
      let principal = isReducing ? emi - interest : P / totalMonths;

      if (balance < principal) principal = balance;
      balance -= principal;

      scheduleData.push({
        emiNo: i,
        emi: emi.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
        dueDate: format(addMonths(startDate, i - 1), 'yyyy-MM-dd'),
      });

      totalPrincipal += principal;
      totalInterest += interest;
    }

    setSchedule(scheduleData);
    setTotals({
      emi: (emi * totalMonths).toFixed(2),
      principal: totalPrincipal.toFixed(2),
      interest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="loanEmi-container">
      <section className="loanEmi-formSection">
        <h1 className="loanEmi-heading">
          <FontAwesomeIcon icon={faCalculator} className="loanEmi-headingIcon" />
          <span>Loan EMI Calculator</span>
        </h1>
        <form className="loanEmi-form" noValidate>
          <div className="loanEmi-inputGroup">
            <label htmlFor="loanAmount">Loan Amount</label>
            <div className="loanEmi-inputWrapper">
              <FontAwesomeIcon icon={faRupeeSign} className="loanEmi-icon" />
              <input
                type="number"
                id="loanAmount"
                value={inputs.loanAmount}
                onChange={handleChange}
                placeholder="Enter loan amount"
              />
            </div>
          </div>

          <div className="loanEmi-inputGroup">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <div className="loanEmi-inputWrapper">
              <FontAwesomeIcon icon={faPercentage} className="loanEmi-icon" />
              <input
                type="number"
                step="0.01"
                id="interestRate"
                value={inputs.interestRate}
                onChange={handleChange}
                placeholder="Enter interest rate"
              />
            </div>
          </div>

          <div className="loanEmi-grid">
            <div className="loanEmi-inputGroup">
              <label htmlFor="interestRateType">Interest Rate Type</label>
              <select id="interestRateType" value={inputs.interestRateType} onChange={handleChange}>
                <option>Yearly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="loanEmi-inputGroup">
              <label htmlFor="roiType">ROI Type</label>
              <select id="roiType" value={inputs.roiType} onChange={handleChange}>
                <option>Flat</option>
                <option>Reducing</option>
              </select>
            </div>
          </div>

          <div className="loanEmi-inputGroup">
            <label htmlFor="loanTerm">Loan Term (Months)</label>
            <input
              type="number"
              id="loanTerm"
              value={inputs.loanTerm}
              onChange={handleChange}
              placeholder="Enter loan tenure"
            />
          </div>

          <div className="loanEmi-grid">
            <div className="loanEmi-inputGroup">
              <label htmlFor="emiFrequency">EMI Frequency</label>
              <select id="emiFrequency" value={inputs.emiFrequency} onChange={handleChange}>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="loanEmi-inputGroup">
              <label htmlFor="firstEmiDate">First EMI Date</label>
              <input
                type="date"
                id="firstEmiDate"
                value={inputs.firstEmiDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="button" className="loanEmi-calcButton" onClick={calculateEMI}>
            <FontAwesomeIcon icon={faCalculator} /> Calculate EMI
          </button>
        </form>
      </section>

      <section className="loanEmi-resultSection">
        <h2 className="loanEmi-subHeading">
          <FontAwesomeIcon icon={faTable} className="loanEmi-subIcon" />
          Payment Schedule
        </h2>
        <button type="button" className="loanEmi-downloadButton">
          <FontAwesomeIcon icon={faFileExcel} /> Download Excel
        </button>
        <div className="loanEmi-tableContainer">
          <table className="loanEmi-table">
            <thead>
              <tr>
                <th>EMI NO.</th>
                <th>EMI</th>
                <th>PRINCIPAL</th>
                <th>INTEREST</th>
                <th>BALANCE</th>
                <th>DUE DATE</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td>{row.emiNo}</td>
                  <td>₹{row.emi}</td>
                  <td>₹{row.principal}</td>
                  <td>₹{row.interest}</td>
                  <td>₹{row.balance}</td>
                  <td>{row.dueDate}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total:</strong></td>
                <td>₹{totals.emi}</td>
                <td>₹{totals.principal}</td>
                <td>₹{totals.interest}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LoanEmiCalculator;
