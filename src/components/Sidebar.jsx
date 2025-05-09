import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../assets/css/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: "fa fa-home", text: "Dashboard", path: "/dashboard" },
    
    {
      icon: "fa fa-users",
      text: "Customer",
      subItems: [
        { text: "Add", path: "/Customers/add", icon: "fa fa-user-plus" },
        { text: "View", path: "/Customers", icon: "fa fa-users" },
        { text: "KYC", path: "/Customers/kyc", icon: "fa fa-id-card" },
        { text: "Search", path: "/CustomerSearch", icon: "fa fa-search" },
      ],
    },
    {
      icon: "fa fa-user",
      text: "HR Module",
      subItems: [
        { text: "Attendance", path: "/EmployeeAttendance", icon: "fa fa-calendar-check" },
        { text: "Apply Leave", path: "/LeaveForm", icon: "fa fa-clipboard-check" },
        { text: "Holiday", path: "/Holiday", icon: "fa fa-calendar-alt" },
      ],
    },
    {
      icon: "fa fa-university",
      text: "Banking",
      subItems: [
        { text: "Open Account", path: "/Banking/OpenAccount", icon: "fa fa-folder-open" },
        { text: "Verify Account", path: "/Banking/VerifyAccount", icon: "fa fa-check-circle" },
        { text: "RD/DD Report", path: "/Banking/ReportPage", icon: "fa fa-file-alt" },
        { text: "FD/MIS Report", path: "/Banking/FdMisReport", icon: "fa fa-chart-line" },
        { text: "Saving Account Report", path: "/Banking/SavingAccountReport", icon: "fa fa-book" },
        { text: "Close Account", path: "/Banking/CloseAccount", icon: "fa fa-times-circle" },
        { text: "Calculator", path: "/Banking/Calculator", icon: "fa fa-calculator" },
        { text: "MIS Payment", path: "/Banking/MisPayment", icon: "fa fa-money-check-alt" },
      ],
    },
    {
      icon: "fa fa-wallet",
      text: "Wallet",
      subItems: [
        { text: "History", path: "/wallet/WalletHistory", icon: "fa fa-history" },
        { text: "Request Fund", path: "/wallet/RequestFund", icon: "fa fa-credit-card" },
      ],
    },
    {
      icon: "fa fa-exchange-alt",
      text: "Transactions",
      subItems: [
        { text: "Pay Installment", path: "/transactions/payInstallments", icon: "fa fa-money-check" },
        { text: "Collection Report", path: "/transactions/CollectionReport", icon: "fa fa-file-invoice-dollar" },
        { text: "Pay Due Amount", path: "/transactions/PayDueAmount", icon: "fa fa-coins" },
      ],
    },
    {
      icon: "fa fa-hand-holding-usd",
      text: "Loan",
      subItems: [
        { text: "Personal Loan", path: "/Loan/PersonalLoanForm", icon: "fa fa-file-signature" },
        { text: "Apply CC Loan", path: "/Loan/CcLoanForm", icon: "fa fa-clipboard-list" },
        { text: "Fixed EMI Loan", path: "/Loan/EmiLoanForm", icon: "fa fa-coins" },
        { text: "Upload KYC", path: "/loan/LoanKyc", icon: "fa fa-id-card" },
        { text: "Loan Report", path: "/loan/LoanReport", icon: "fa fa-chart-pie" },
        { text: "EMI Due Report", path: "/loan/emiDue", icon: "fa fa-exclamation-circle" },
        { text: "Collection Report", path: "/loan/collection", icon: "fa fa-file-invoice-dollar" },
        { text: "Loan Closure", path: "/loan/closure", icon: "fa fa-times-circle" },
        { text: "Calculator", path: "/loan/calculator", icon: "fa fa-calculator" },
      ],
    },

    {
      icon: "fa fa-print",
      text: "Print",
      subItems: [
        { text: "Loan Letter", path: "/print/LoanLetter", icon: "fa fa-file-pdf" },
        { text: "Transaction Slips", path: "/print/slips", icon: "fa fa-receipt" },
      ],
    },

    
    {
      icon: "fa fa-cog",
      text: "Settings",
      path: "/UpdatePassword",
    },
    {
      icon: "fa fa-envelope",
      text: "Contact Us",
      path: "/Contact",
    },
  ];

  const handleMainClick = (item, index) => {
    if (item.subItems) {
      setOpenSubMenu(openSubMenu === index ? null : index);
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      

      {/* Sidebar */}
      <div
        className={`sidebar bg-white shadow-md h-screen overflow-y-auto fixed top-0 left-0 z-40 transition-transform duration-300
        ${isCollapsed ? "-translate-x-full" : "translate-x-0"} sm:translate-x-0 w-64`}
      >
        <div className="p-2 md:p-4 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              <button
                className={`flex items-center justify-start space-x-3 p-2 md:p-3 w-full text-left transition duration-200 rounded
                  ${isActive(item.path) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-200"}`}
                onClick={() => handleMainClick(item, index)}
              >
                <i className={`${item.icon} text-lg min-w-[20px]`}></i>
                <span className="hidden sm:inline text-sm md:text-base">{item.text}</span>
                {item.subItems && (
                  <i
                    className={`ml-auto fa ${
                      openSubMenu === index ? "fa-chevron-up" : "fa-chevron-down"
                    } hidden sm:inline`}
                  ></i>
                )}
              </button>

              {item.subItems && openSubMenu === index && (
                <div className="ml-6 sm:ml-8 text-sm flex flex-col transition-all duration-200">
                  {item.subItems.map((sub, subIndex) => (
                    <button
                      key={subIndex}
                      className={`py-1 px-2 text-left rounded transition flex items-center space-x-2
                      ${isActive(sub.path) ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100"}`}
                      onClick={() => navigate(sub.path)}
                    >
                      <i className={`${sub.icon} text-sm`}></i>
                      <span className="text-xs sm:text-sm">{sub.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
