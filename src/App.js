import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import CustomerList from "./pages/Customers";
import CustomerForm from "./pages/CustomerForm";
import { Profile } from "./pages/Profile";
import CustomerSearch from "./pages/CustomerSearch";
import UpdatePasswordTable from "./pages/UpdatePassword";
import HrModule from './pages/HrModule';
import EmployeeAttendance from './pages/EmployeeAttendance';
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KycForm from './pages/KycForm';
import LeaveForm from './pages/LeaveForm';
import Holiday from './pages/Holiday';
import Contact from './pages/Contact';
import OpenAccount from "./Banking/OpenAccount";
import FixedDepositForm from "./Banking/Fixed";
import RecurringDepositForm from "./Banking/Recurring";
import SavingAccountForm from "./Banking/Savings";
import VerifyAccount from "./Banking/VerifyAccount";
import ReportPage from "./Banking/ReportPage";
import FdMisReport from "./Banking/FdMisReport";
import "./assets/css/style.css";
import "./assets/css/responsive.css";



// Function to check if the user is authenticated
const isAuthenticated = () => localStorage.getItem("isAuthenticated") === "true";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Signup & Signin */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Redirect root path based on authentication */}
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />

        {/* Protected Routes */}
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
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/customers" element={<CustomerList />} />
                      <Route path="/customers/add" element={<CustomerForm />} />
                      <Route path="/customers/kyc" element={<KycForm />} />
                      <Route path="/HrModule" element={<HrModule />} />
                      <Route path="/LeaveForm" element={<LeaveForm />} />
                      <Route path="/holiday" element={<Holiday />} />
                      <Route path="Banking/OpenAccount" element={<OpenAccount />} />
                      <Route path="Banking/OpenAccount/Fixed" element={<FixedDepositForm />} />
                      <Route path="Banking/OpenAccount/Recurring" element={<RecurringDepositForm />} />
                      <Route path="Banking/OpenAccount/Savings" element={<SavingAccountForm />} />
                      <Route path="Banking/VerifyAccount" element={<VerifyAccount />} />
                      <Route path="Banking/ReportPage" element={<ReportPage />} />
                      <Route path="Banking/FdMisReport" element={<FdMisReport />} />
                      <Route path="/EmployeeAttendance" element={<EmployeeAttendance />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/customersearch" element={<CustomerSearch />} />
                      <Route path="/UpdatePassword" element={<UpdatePasswordTable />} />
                      <Route path="/Contact" element={<Contact />} />
                      <Route path="Banking/OPenAccount/Fixed" element={<FixedDepositForm/>} />

                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        ) : (
          <Route path="/*" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    </Router>
  );
}
