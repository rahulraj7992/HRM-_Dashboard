import { useNavigate } from "react-router-dom";
import "../assets/css/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "fa fa-home", text: "Dashboard", path: "/dashboard" },
    { icon: "fa fa-users", text: "Patients", path: "/Patients" },
    { icon: "fa fa-calendar", text: "Appointments", path: "/appointments" },
    { icon: "fa fa-user-md", text: "Doctors", path: "/doctors" },
    { icon: "fa fa-building", text: "Departments", path: "/departments" },
    { icon: "fa fa-user", text: "Profile", path: "/profile" },
    { icon: "fa fa-cog", text: "Settings", path: "/settings" },
    { icon: "fa fa-file", text: "Reports", path: "/reports" },
    { icon: "fa fa-file-invoice", text: "Invoices", path: "/invoices" },
    { icon: "fa fa-bell", text: "Notifications", path: "/notifications" },
    { icon: "fa fa-envelope", text: "Messages", path: "/messages" },
    { icon: "fa fa-star", text: "Reviews", path: "/reviews" },
    { icon: "fa fa-chart-line", text: "Analytics", path: "/analytics" },
    { icon: "fa fa-envelope", text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="sidebar">
      {menuItems.map(({ icon, text, path }, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 p-2 md:p-3 hover:bg-gray-200 w-full text-left"
          onClick={() => navigate(path)}
        >
          <i className={icon}></i>
          <span className="hidden md:inline">{text}</span>
        </button>
      ))}
    </div>
  );
};
