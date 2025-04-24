import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 space-y-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-semibold text-center">
        {mode === 'signup' ? 'Sign Up' : 'Log In'}
      </h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm">
          {success}{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-blue-600 underline ml-1"
          >
            Go to Login
          </button>
        </p>
      )}

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {mode === 'signup' ? 'Create Account' : 'Log In'}
      </button>

      <p className="text-sm text-center mt-2">
        {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={toggleMode}
          className="text-blue-600 underline"
        >
          {mode === 'signup' ? 'Log In' : 'Sign Up'}
        </button>
      </p>
    </form>
  );
}
