import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuItems = [
    { icon: "fa fa-home", text: "Dashboard", path: "/dashboard" },
    {
      icon: "fa fa-users",
      text: "Customer",
      subItems: [
        { text: "Add Customer", path: "/Customers/add", icon: "fa fa-user-plus" },
        { text: "View Customers", path: "/Customers", icon: "fa fa-users" },
        { text: "Customer KYC", path: "/Customers/kyc", icon: "fa fa-id-card" },
        { text: "Customer Search", path: "/CustomerSearch", icon: "fa fa-search" },
      ],
    },
    {
      icon: "fa fa-user",
      text: "HR Module",
      subItems: [
        { text: "Employee Attendance", path: "/EmployeeAttendance", icon: "fa fa-calendar-check" },
        { text: "Apply Leave", path: "/LeaveForm", icon: "fa fa-clipboard-check" },
        { text: "Holiday List", path: "/Holiday", icon: "fa fa-calendar-alt" },
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
        { text: "Make MIS Payment", path: "/Banking/MisPayment", icon: "fa fa-money-check-alt" },
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
    <div className="sidebar w-full sm:w-56 md:w-60 lg:w-64 xl:w-72 bg-white shadow-md h-screen overflow-y-auto fixed top-0 left-0 z-50">
      <div className="p-2 md:p-4 flex flex-col gap-1">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full">
            <button
              className="flex items-center justify-start space-x-3 p-2 md:p-3 hover:bg-gray-200 w-full text-left transition duration-200"
              onClick={() => handleMainClick(item, index)}
            >
              <i className={`${item.icon} text-lg min-w-[20px]`}></i>
              <span className="hidden sm:inline text-sm md:text-base">{item.text}</span>
              {item.subItems && (
                <i
                  className={`ml-auto fa ${
                    openSubMenu === index ? "fa-chevron-up" : "fa-chevron-down"
                  } hidden sm:inline`}></i>
              )}
            </button>

            {item.subItems && openSubMenu === index && (
              <div className="ml-6 sm:ml-8 text-sm flex flex-col transition-all duration-200">
                {item.subItems.map((sub, subIndex) => (
                  <button
                    key={subIndex}
                    className="py-1 px-2 text-left hover:bg-gray-100 rounded transition flex items-center space-x-2"
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
  );
}
