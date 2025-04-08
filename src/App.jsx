import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Customers } from "./pages/Customers";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import {HrModule} from './pages/HrModule';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { KycForm} from "./pages/KycForm"; 
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// Function to check if the user is authenticated
const isAuthenticated = () => localStorage.getItem("isAuthenticated") === "true";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />

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
                      <Route path="/customers" element={<Customers />} />
                      <Route path="/KycForm/:customerId" component={<KycForm/>} />
                      <Route path="/HrModule" element={<HrModule />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
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
