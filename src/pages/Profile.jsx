// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/profile.css";

export function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="main-header text-center">User Profile</h1>
        <h2 className="page-title text-center">Profile</h2>
      </header>
      <div className="profile-card">
        <div className="card-header">User Details</div>
        <div className="card-body">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Role:</strong> Administrator</p>
        </div>
      </div>
    </div>
  );
}
