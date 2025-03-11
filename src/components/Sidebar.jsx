import '../assets/css/sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {[ 
        { icon: 'fa fa-home', text: 'Dashboard' },
        { icon: 'fa fa-sign-in', text: 'Login' },
        { icon: 'fa fa-users', text: 'Patients' },
        { icon: 'fa fa-calendar', text: 'Appointments' },
        { icon: 'fa fa-user-md', text: 'Doctors' },
        { icon: 'fa fa-building', text: 'Departments' },
        { icon: 'fa fa-user', text: 'Profile' },
        { icon: 'fa fa-cog', text: 'Settings' },
        { icon: 'fa fa-file', text: 'Reports' },
        { icon: 'fa fa-file-invoice', text: 'Invoices' },
        { icon: 'fa fa-bell', text: 'Notifications' },
        { icon: 'fa fa-envelope', text: 'Messages' },
        { icon: 'fa fa-star', text: 'Reviews' },
        { icon: 'fa fa-chart-line', text: 'Analytics' },
        { icon: 'fa fa-sign-out', text: 'Logout' },
       
      ].map((item, index) => (
        <button 
          key={index} 
          className="flex items-center space-x-2 p-2 md:p-3 hover:bg-gray-200 w-full text-left"
        >
          <i className={item.icon}></i>
          <span className="hidden md:inline">{item.text}</span>
        </button>
      ))}
    </div>
  );
}
