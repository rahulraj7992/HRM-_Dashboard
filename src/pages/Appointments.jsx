// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/appointments.css";

export function Appointments() {
  return (
    <div className="appointments-container">
      <div className="appointments-box">
        <h2 className="page-title text-center">Appointments</h2>
        <ul className="list-group">
          <li className="list-group-item">John Doe - 10:00 AM</li>
          <li className="list-group-item">Jane Smith - 11:30 AM</li>
        </ul>
      </div>
    </div>
  );
}