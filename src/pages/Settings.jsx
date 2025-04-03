// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/settings.css";

export function Settings() {
  return (
    <div className="settings-container">
      <h2 className="page-title">Settings</h2>
      <form className="settings-form">
        <div className="mb-3">
          <label className="form-label">Change Password</label>
          <input type="password" className="form-control" placeholder="Enter new password" />
        </div>
        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}