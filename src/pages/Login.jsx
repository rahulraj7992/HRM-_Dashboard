// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "../assets/css/login.css";

export function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="page-title text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
