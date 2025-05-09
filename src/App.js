import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard             from './pages/Dashboard';
import CustomerList          from './pages/Customers';
import CustomerForm          from './pages/CustomerForm';
import KycForm               from './pages/KycForm';
import HrModule              from './pages/HrModule';
import LeaveForm             from './pages/LeaveForm';
import Holiday               from './pages/Holiday';
import EmployeeAttendance    from './pages/EmployeeAttendance';
import ProfilePage          from './pages/Profile';
import CustomerSearch        from './pages/CustomerSearch';
import UpdatePasswordTable   from './pages/UpdatePassword';
import Contact               from './pages/Contact';

import OpenAccount           from './Banking/OpenAccount';
import FixedDepositForm      from './Banking/Fixed';
import RecurringDepositForm  from './Banking/Recurring';
import SavingAccountForm     from './Banking/Savings';
import VerifyAccount         from './Banking/VerifyAccount';
import ReportPage            from './Banking/ReportPage';
import FdMisReport           from './Banking/FdMisReport';
import SavingAccountReport   from './Banking/SavingAccountReport';
import MakeMisPayment        from './Banking/MakeMisPayment';
import CloseAccount          from './Banking/CloseAccount';

import Sidebar               from './components/Sidebar';
import Header                from './components/Header';
import AuthForm              from './components/AuthForm';
import WalletHistory from './wallet/WalletHistory';
import RequestWalletFund from './wallet/RequestFund';
import PayInstallments from './transactions/PayInstallments';
import CollectionReport from './transactions/CollectionReport';
import PayDueAmount from './transactions/PayDueAmount';
import PersonalLoanForm from './Loan/PersonalLoanForm';
import CcLoanForm from './Loan/CcLoanForm';
import EmiLoanForm from './Loan/EmiLoanForm';
import LoanKyc from './Loan/LoanKyc';
import LoanReport from './Loan/LoanReport';
import './assets/css/style.css';
import './assets/css/responsive.css';

// simple localStorage flag—swap this for real Firebase auth check!
const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/signup" element={<AuthForm mode="signup" />} />
        <Route path="/login"  element={<AuthForm mode="login" />} />
        

        {/* Redirect root */}
        <Route
          path="/"
          element={
            isAuthenticated()
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login"   replace />
          }
        />

        {/* Protected area */}
        {isAuthenticated() ? (
          <Route
            path="/*"
            element={
              <div className="main-wrapper">
                <Sidebar />

                <div className="page-wrapper">
                  <Header />
                  <div className="content">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="customers" element={<CustomerList />} />
                      <Route path="customers/add" element={<CustomerForm />} />
                      <Route path="customers/kyc" element={<KycForm />} />

                      <Route path="HrModule" element={<HrModule />} />
                      <Route path="LeaveForm" element={<LeaveForm />} />
                      <Route path="holiday" element={<Holiday />} />
                      <Route path="EmployeeAttendance" element={<EmployeeAttendance />} />

                      <Route path="profile" element={<ProfilePage/>} />
                      <Route path="customersearch" element={<CustomerSearch />} />
                      <Route path="UpdatePassword" element={<UpdatePasswordTable />} />
                      <Route path="Contact" element={<Contact />} />

                      <Route path="Banking/OpenAccount" element={<OpenAccount />} />
                      <Route path="Banking/OpenAccount/Fixed" element={<FixedDepositForm />} />
                      <Route path="Banking/OpenAccount/Recurring" element={<RecurringDepositForm />} />
                      <Route path="Banking/OpenAccount/Savings" element={<SavingAccountForm />} />
                      <Route path="Banking/VerifyAccount" element={<VerifyAccount />} />
                      <Route path="Banking/ReportPage" element={<ReportPage />} />
                      <Route path="Banking/FdMisReport" element={<FdMisReport />} />
                      <Route path="Banking/SavingAccountReport" element={<SavingAccountReport />} />
                      <Route path="Banking/CloseAccount" element={<CloseAccount />} />
                      <Route path="Banking/MisPayment" element={<MakeMisPayment />} />
                      <Route path="wallet/WalletHistory" element={<WalletHistory />} />
                      <Route path="wallet/RequestFund" element={<RequestWalletFund />} />
                      <Route path="transactions/PayInstallments" element={<PayInstallments />} />
                      <Route path="transactions/CollectionReport" element={<CollectionReport />} />
                      <Route path="transactions/PayDueAmount" element={<PayDueAmount />} />
                      <Route path="Loan/PersonalLoanForm" element={<PersonalLoanForm />} />
                      <Route path="Loan/CcLoanForm" element={<CcLoanForm />} />
                      <Route path="Loan/EmiLoanForm" element={<EmiLoanForm />} />
                      <Route path="Loan/LoanKyc" element={<LoanKyc />} />
                      <Route path="Loan/LoanReport" element={<LoanReport />} />

                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        ) : (
          // catch-all for unauthenticated users
          <Route path="/*" element={<Navigate to="/login" replace />} />
          
        )}

      </Routes>
    </Router>
  );
}
