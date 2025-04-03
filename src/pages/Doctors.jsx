// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/doctors.css";

export function Doctors() {
  return (
    <div className="doctors-container">
      <div className="doctors-box">
        <h2 className="page-title text-center">Doctors</h2>
        <ul className="list-group">
          <li className="list-group-item">Dr. Alex Johnson - Cardiologist</li>
          <li className="list-group-item">Dr. Sarah Lee - Neurologist</li>
        </ul>
      </div>
    </div>
  );
}