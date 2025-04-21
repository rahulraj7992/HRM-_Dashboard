import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../assets/css/leave.css";

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    purpose: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [leaveData, setLeaveData] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await axios.get("http://localhost/api/leaves.php");
      setLeaveData(response.data);
    } catch (error) {
      toast.error("Failed to load leave data.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { employeeId, name, email, startDate, endDate, reason, purpose } = formData;

    if (!employeeId || !name || !email || !startDate || !endDate || !reason || !purpose) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await axios.post("http://localhost/api/submitLeave.php", {
        ...formData,
        status: "pending",
      });

      toast.success("Leave application submitted.");
      setFormData({
        employeeId: "",
        name: "",
        email: "",
        purpose: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
      fetchLeaves();
    } catch (error) {
      toast.error("Failed to submit leave.");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.post("http://localhost/api/updateStatus.php", { id, status });
      toast.success("Status updated.");
      fetchLeaves();
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  return (
    <div className="leave-wrapper">
      <Toaster position="top-right" />

      <button
        className="leave-toggle-button lg:hidden"
        onClick={() => setIsTableVisible(!isTableVisible)}
      >
        {isTableVisible ? "Hide Applications" : "Show Applications"}
      </button>

      <div className="leave-container">
        <section className="leave-section leave-form-section">
          <h2 className="leave-form-title">Apply for Leave</h2>
          <form onSubmit={handleSubmit}>
            <div className="leave-form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
              />
            </div>

            <div className="leave-form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="leave-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="leave-form-group">
              <label htmlFor="purpose">Purpose of Leave</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="">Select Purpose</option>
                <option value="Personal">Personal</option>
                <option value="Sick">Sick</option>
                <option value="Vacation">Vacation</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>

            <div className="leave-form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                min={today}
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="leave-form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                min={formData.startDate || today}
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <div className="leave-form-group">
              <label htmlFor="reason">Reason for Leave</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="leave-submit-button">
              Submit Application
            </button>
          </form>
        </section>

        {isTableVisible && (
          <section className="leave-section leave-table-section">
            <h2>Submitted Applications</h2>
            <table className="leave-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.length > 0 ? (
                  leaveData.map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.employeeId}</td>
                      <td>{leave.name}</td>
                      <td>{leave.email}</td>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <span className={`leave-status-badge ${leave.status}`}>
                          {leave.status}
                        </span>
                      </td>
                      <td>
                        <select
                          className="leave-select"
                          value={leave.status}
                          onChange={(e) => updateStatus(leave.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No leave applications submitted.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
};

export default LeaveApplication;
