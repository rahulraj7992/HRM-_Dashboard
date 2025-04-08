import { useNavigate } from "react-router-dom";
import "../assets/css/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "fa fa-home", text: "Dashboard", path: "/dashboard" },
    { icon: "fa fa-users", text: "Customers", path: "/Customers" },
    { icon: "fa fa-user", text: "HR Module", path: "/HrModule" },
    { icon: "fa fa-cog", text: "Settings", path: "/settings" },
    { icon: "fa fa-file", text: "Reports", path: "/reports" },
    { icon: "fa fa-envelope", text: "Messages", path: "/messages" },
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
