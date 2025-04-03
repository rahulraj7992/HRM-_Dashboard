import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Retrieve existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      alert("Email already registered. Please use a different email.");
      return;
    }

    // Add new user to the array
    const newUser = { fullName, email, password };
    existingUsers.push(newUser);

    // Store the updated user array in localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful! Please sign in.");
    navigate("/signin"); // Redirect to Sign In page
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
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
          <button type="submit" style={styles.signupBtn}>Sign Up</button>
        </form>
        <p style={styles.toggleText}>
          Already have an account? <a href="/signin" style={styles.link}>Sign In</a>
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
  signupBtn: {
    width: "100%",
    backgroundColor: "#4f46e5",
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
    color: "#4f46e5",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Signup;
