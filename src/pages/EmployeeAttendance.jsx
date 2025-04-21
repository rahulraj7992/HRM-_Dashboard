import React, { useState } from "react";
import "../assets/css/EmployeeAttendance.css";

const EmployeeAttendance = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const employeeData = [
    { id: 447, name: "Savannah Nguyen", branch: "Delhi", role: "Manager" },
    { id: 177, name: "Brooklyn Simmons", branch: "Mumbai", role: "HR" },
    { id: 185, name: "Darrell Steward", branch: "Delhi", role: "Developer" },
    { id: 816, name: "Marvin McKinney", branch: "Chennai", role: "Developer" },
    { id: 429, name: "Cameron Williamson", branch: "Delhi", role: "HR" },
    { id: 154, name: "Cody Fisher", branch: "Mumbai", role: "Manager" },
  ];

//   const getDaysInMonth = (date) => {
//     const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     const totalDays = new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDate();
//     const blanks = Array(startDay).fill(null);
//     const days = [...Array(totalDays)].map((_, i) => i + 1);
//     return [...blanks, ...days];
//   };

//   const goToPrevMonth = () => {
//     setCurrentDate(
//       (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
//     );
//   };

//   const goToNextMonth = () => {
//     setCurrentDate(
//       (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
//     );
//   };

//   const isToday = (day) => {
//     const today = new Date();
//     return (
//       day &&
//       day === today.getDate() &&
//       currentDate.getMonth() === today.getMonth() &&
//       currentDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const isSelected = (day) => {
//     return (
//       day &&
//       day === selectedDate.getDate() &&
//       currentDate.getMonth() === selectedDate.getMonth() &&
//       currentDate.getFullYear() === selectedDate.getFullYear()
//     );
//   };

//   const handleDayClick = (day) => {
//     if (!day) return;
//     const clicked = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       day
//     );
//     setSelectedDate(clicked);
//   };

  const handleDateInputChange = (e) => {
    const picked = new Date(e.target.value);
    setSelectedDate(picked);
    // setCurrentDate(new Date(picked.getFullYear(), picked.getMonth(), 1));
  };

//   const getMonthYearLabel = () =>
//     currentDate.toLocaleString("default", { month: "short", year: "numeric" });

  const formattedInputDate = selectedDate.toISOString().split("T")[0];

  const handleSearch = () => {
    const filtered = employeeData.filter((emp) => {
      const matchBranch = branch ? emp.branch === branch : true;
      const matchRole = role ? emp.role === role : true;
      const matchName = employeeName ? emp.name === employeeName : true;
      return matchBranch && matchRole && matchName;
    });
    setFilteredEmployees(filtered);
  };

  const employeeNames = [...new Set(employeeData.map((emp) => emp.name))];

  return (
    <div className="employee-attendance-wrapper">
      <div className="employee-attendance-container">
        <div className="employee-attendance-grid">
          {/* Main Content */}
          <div className="employee-attendance-main">
            {/* Filter Card */}
            <div className="employee-attendance-card">
              <h2 className="employee-attendance-title">Employee Filter</h2>
              <div className="employee-attendance-filter-group">
                <div>
                  <label>Branch</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="">Select Branch</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                <div>
                  <label>Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="Manager">Manager</option>
                    <option value="HR">HR</option>
                    <option value="Developer">Developer</option>
                  </select>
                </div>
                <div>
                  <label>Employee</label>
                  <select
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  >
                    <option value="">Select Employee</option>
                    {employeeNames.map((name, idx) => (
                      <option key={idx} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Date</label>
                  <input
                    type="date"
                    value={formattedInputDate}
                    onChange={handleDateInputChange}
                  />
                </div>
              </div>
              <button
                className="employee-attendance-search-btn"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            {/* Attendance Table */}
            <div className="employee-attendance-card">
              <h2 className="employee-attendance-title">Employee Attendance</h2>
              <div className="employee-attendance-table-wrapper">
                <table className="employee-attendance-table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Branch</th>
                      <th>Present</th>
                      <th>Absent</th>
                      <th>Leave</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(filteredEmployees.length
                      ? filteredEmployees
                      : employeeData
                    ).map((emp, i) => (
                      <tr key={i}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.branch}</td>
                        <td>
                          <input
                            type="radio"
                            name={`attendance-${emp.id}`}
                            defaultChecked
                          />
                        </td>
                        <td>
                          <input type="radio" name={`attendance-${emp.id}`} />
                        </td>
                        <td>
                          <input type="radio" name={`attendance-${emp.id}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="employee-attendance-sidebar">
            <div className="employee-attendance-stat yellow">
              <i className="fas fa-user-graduate"></i>
              <div className="employee-attendance-stat-info">
                <div className="employee-attendance-stat-value">240</div>
                <div className="employee-attendance-stat-label">
                  Total Employees
                </div>
              </div>
            </div>

            <div className="employee-attendance-stat green">
              <i className="fas fa-check-circle"></i>
              <div className="employee-attendance-stat-info">
                <div className="employee-attendance-stat-value">230</div>
                <div className="employee-attendance-stat-label">
                  Present Today
                </div>
              </div>
            </div>

            <div className="employee-attendance-stat red">
              <i className="fas fa-times-circle"></i>
              <div className="employee-attendance-stat-info">
                <div className="employee-attendance-stat-value">10</div>
                <div className="employee-attendance-stat-label">
                  Absent Today
                </div>
              </div>
            </div>

            {/* Calendar */}
            {/* <div className="employee-attendance-calendar">
              <div className="employee-attendance-calendar-header">
                <button onClick={goToPrevMonth}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span>{getMonthYearLabel()}</span>
                <button onClick={goToNextMonth}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="employee-attendance-calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="employee-attendance-calendar-day-label"
                    >
                      {day}
                    </div>
                  )
                )}
                {getDaysInMonth(currentDate).map((day, i) => (
                  <div
                    key={i}
                    className={`employee-attendance-calendar-day
                      ${isToday(day) ? "today" : ""}
                      ${isSelected(day) ? "selected" : ""}
                      ${day ? "" : "blank"}`}
                    onClick={() => handleDayClick(day)}
                  >
                    {day || ""}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
