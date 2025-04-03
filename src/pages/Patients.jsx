// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/patients.css";
export function Patients() {
  return (
    <div className="patients-container">
      <div className="patients-box">
        <h2 className="page-title text-center">Patients</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>45</td>
                <td>Diabetes</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>37</td>
                <td>High BP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
