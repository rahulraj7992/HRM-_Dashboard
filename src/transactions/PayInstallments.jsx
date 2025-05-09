// import { useState } from "react";
import React , { useState } from "react";
import "../assets/transactions/PayInstallments.css";

const PayInstallments = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const handleChange = (e) => setAccountNumber(e.target.value);
  return (
    <div className="payinstallments-container">
      <main className="payinstallments-main">
        {/* Payment Collection Form */}
        <section
          className="payinstallments-collection-form"
          aria-label="Payment Collection Form"
        >
          <h2 className="payinstallments-heading">
            <i className="fas fa-credit-card payinstallments-icon"></i>
            Payment Collection Form
          </h2>

          <form className="payinstallments-form">
            <fieldset className="payinstallments-fieldset">
              <legend className="payinstallments-legend">
                Select Collection Mode
              </legend>
              <div className="payinstallments-button-group">
                <button type="button" className="payinstallments-btn-payments">
                  Installments
                  <i className="far fa-calendar-alt payinstallments-btn-icon"></i>
                </button>
                <button type="button" className="payinstallments-btn-money">
                  Money{" "}
                  <span className="payinstallments-currency-symbol">₹s</span>
                </button>
              </div>
              <p className="payinstallments-info">
                <i className="fas fa-info-circle payinstallments-info-icon"></i>
                <span>
                  <b>Installments:</b> Pay in installments (eg: 1, 2, 3, ...).
                </span>
              </p>
              <p className="payinstallments-info">
                <i className="fas fa-info-circle payinstallments-info-icon"></i>
                <span>
                  <b>Money:</b> Pay a specific amount.
                </span>
              </p>
            </fieldset>

            <fieldset className="payinstallments-fieldset">
              <label htmlFor="accountNumber" className="payinstallments-label">
                Account Number
              </label>
              <div className="payinstallments-account-group">
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="number"
                  placeholder="Enter Account Number"
                  value={accountNumber}
                  onChange={handleChange}
                  className="payinstallments-input"
                />
                <button
                  type="button"
                  className="payinstallments-btn-verify"
                  aria-label="Verify Account Number"
                >
                  Verify
                </button>
              </div>
            </fieldset>

            <table
              className="payinstallments-summary-table"
              aria-label="Summary table for dues and charges"
            >
              <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "50%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td className="payinstallments-summary-label">
                    <span className="payinstallments-currency-symbol">₹</span>{" "}
                    Total Due
                  </td>
                  <td
                    id="totalDue"
                    className="payinstallments-summary-value"
                  ></td>
                </tr>
                <tr>
                  <td className="payinstallments-summary-label">
                    <span className="payinstallments-currency-symbol">₹</span>{" "}
                    Total Due Till Now
                  </td>
                  <td
                    id="totalDueTillNow"
                    className="payinstallments-summary-value"
                  ></td>
                </tr>
                <tr>
                  <td className="payinstallments-summary-label">
                    <i className="fas fa-coins payinstallments-summary-icon"></i>{" "}
                    Total Charge
                  </td>
                  <td
                    id="totalCharge"
                    className="payinstallments-summary-value"
                  ></td>
                </tr>
                <tr>
                  <td className="payinstallments-summary-label">
                    <i className="far fa-calendar-alt payinstallments-summary-icon"></i>{" "}
                    Two Dates
                  </td>
                  <td
                    id="twoDates"
                    className="payinstallments-summary-value"
                  ></td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>

        {/* Payment Details */}
        <section
          className="payinstallments-payment-details"
          aria-label="Payment Details"
        >
          <h2 className="payinstallments-heading">
            Payment Details{" "}
            <i className="fas fa-credit-card payinstallments-icon"></i>
          </h2>

          <form className="payinstallments-details-form">
            <div className="payinstallments-row">
              <label
                htmlFor="amountInstallment"
                className="payinstallments-label-flex"
              >
                <i className="fas fa-credit-card payinstallments-label-icon"></i>{" "}
                Amount/Installment
              </label>
              <input
                id="amountInstallment"
                name="amountInstallment"
                type="text"
                placeholder="Enter amount/installment"
                className="payinstallments-input"
              />
            </div>

            <div className="payinstallments-row">
              <label htmlFor="paidDate" className="payinstallments-label-flex">
                <i className="far fa-calendar-alt payinstallments-label-icon"></i>{" "}
                Paid Date
              </label>
              <div className="payinstallments-date-group">
                <input
                  id="paidDate"
                  name="paidDate"
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="payinstallments-input"
                />
                
              </div>
            </div>

            <div className="payinstallments-row">
              <label
                htmlFor="payableAmount"
                className="payinstallments-label-flex"
              >
                <i className="fas fa-credit-card payinstallments-label-icon"></i>{" "}
                Payable Amount
              </label>
              <input
                id="payableAmount"
                name="payableAmount"
                type="text"
                readOnly
                className="payinstallments-input-readonly"
              />
            </div>

            <div className="payinstallments-row">
              <label
                htmlFor="installmentAmount"
                className="payinstallments-label-flex"
              >
                <i className="fas fa-credit-card payinstallments-label-icon"></i>{" "}
                Installment Amount
              </label>
              <input
                id="installmentAmount"
                name="installmentAmount"
                type="text"
                readOnly
                className="payinstallments-input-readonly"
              />
            </div>

            <div className="payinstallments-row">
              <label
                htmlFor="paymentMode"
                className="payinstallments-label-flex"
              >
                <i className="fas fa-credit-card payinstallments-label-icon"></i>{" "}
                Payment Mode
              </label>
              <select
                id="paymentMode"
                name="paymentMode"
                className="payinstallments-select"
              >
                <option>Cash</option>
              </select>
            </div>

            <div className="payinstallments-submit-row">
              <button type="submit" className="payinstallments-btn-submit">
                Pay
              </button>
            </div>
          </form>
        </section>

        {/* Account Details */}
        <section
          className="payinstallments-account-details"
          aria-label="Account Details"
        >
          <h2 className="payinstallments-heading">
            Account Details{" "}
            <i className="fas fa-file-alt payinstallments-icon"></i>
          </h2>

          <form className="payinstallments-details-form">
            {/* Repeat similar structure for each detail field */}
            {[
              "accNumber",
              "accType",
              "schemeName",
              "roi",
              "tenure",
              "installmentFrequency",
              "closureAmount",
              "totalInterest",
              "principalAmount",
            ].map((field) => (
              <div className="payinstallments-row" key={field}>
                <label htmlFor={field} className="payinstallments-label-flex">
                  <i className="fas fa-info-circle payinstallments-label-icon"></i>{" "}
                  {field}
                </label>
                <input
                  id={field}
                  name={field}
                  type="text"
                  readOnly
                  className="payinstallments-input-readonly"
                />
              </div>
            ))}
          </form>
        </section>

        {/* Customer Details */}
        <section
          className="payinstallments-customer-details"
          aria-label="Customer Details"
        >
          <h2 className="payinstallments-heading">
            Customer Details{" "}
            <i className="fas fa-user-circle payinstallments-icon"></i>
          </h2>

          <form className="payinstallments-details-form">
            {[
              "cusName",
              "cusId",
              "guardian",
              "aadhar",
              "pan",
              "mobile",
              "address",
            ].map((field) => (
              <div className="payinstallments-row" key={field}>
                <label htmlFor={field} className="payinstallments-label-flex">
                  <i className="fas fa-user payinstallments-label-icon"></i>{" "}
                  {field}
                </label>
                <input
                  id={field}
                  name={field}
                  type="text"
                  readOnly
                  className="payinstallments-input-readonly"
                />
              </div>
            ))}
          </form>
        </section>
      </main>
    </div>
  );
};

export default PayInstallments;
