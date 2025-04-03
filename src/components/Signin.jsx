import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Ensure users exist in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!Array.isArray(storedUsers)) {
      alert("No registered users found. Please sign up first.");
      return;
    }

    // Check for matching user credentials
    const authenticatedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (authenticatedUser) {
      localStorage.setItem("isAuthenticated", "true"); // Mark user as logged in
      localStorage.setItem("loggedInUser", JSON.stringify(authenticatedUser)); // Store user details
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.signinBtn}>Sign In</button>
        </form>
        <p style={styles.toggleText}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

// Inline Styles Object
const styles = {
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  authBox: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  heading: {
    marginBottom: "1.5rem",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "border-color 0.3s ease",
  },
  signinBtn: {
    width: "100%",
    backgroundColor: "#ec4899",
    color: "white",
    border: "none",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  toggleText: {
    marginTop: "1rem",
    fontSize: "14px",
  },
  link: {
    color: "#ec4899",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Signin;
