import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="auth-input"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="auth-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="auth-button" type="submit">
            Sign In
          </button>
        </form>
        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link className="auth-link" to="/auth/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
