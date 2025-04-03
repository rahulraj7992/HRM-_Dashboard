// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/departments.css";

export function Departments() {
  return (
    <div className="departments-container">
      <div className="departments-box">
        <h2 className="page-title text-center">Departments</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-header">Cardiology</div>
            <div className="card-body">Heart-related treatments</div>
          </div>
          <div className="card">
            <div className="card-header">Neurology</div>
            <div className="card-body">Brain and nerve treatments</div>
          </div>
        </div>
      </div>
    </div>
  );
}