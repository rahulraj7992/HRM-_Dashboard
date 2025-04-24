import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import '../assets/css/authform.css'; // Make sure this path is correct

export default function AuthForm({ mode }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess('Signup successful! You can now log in.');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleMode = () => {
    navigate(mode === 'signup' ? '/login' : '/signup');
  };

  return (
    <form onSubmit={handleSubmit} className="authform-container">
      <h2 className="authform-title">
        {mode === 'signup' ? 'Sign Up' : 'Log In'}
      </h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="authform-input"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="authform-input"
      />

      {error && <p className="authform-error">{error}</p>}
      {success && (
        <p className="authform-success">
          {success}{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="authform-link ml-1"
          >
            Go to Login
          </button>
        </p>
      )}

      <button type="submit" className="authform-button">
        {mode === 'signup' ? 'Create Account' : 'Log In'}
      </button>

      <p className="authform-footer">
        {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={toggleMode}
          className="authform-link"
        >
          {mode === 'signup' ? 'Log In' : 'Sign Up'}
        </button>
      </p>
    </form>
  );
}
