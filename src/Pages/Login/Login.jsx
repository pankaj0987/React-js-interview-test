import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });

  //loging in to user
  const login = (e) => {
    e.preventDefault();
    if (formData.username.trim().length === 0) {
      setError({ ...error, username: "Please enter username" });
      return;
    }
    if (formData.password.trim().length === 0) {
      setError({ ...error, password: "Please enter password" });
      return;
    }
    localStorage.setItem("formdata", JSON.stringify(formData));
    navigate("/login-success");
  };

  // input change handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center flex-column p-3">
      <h3 className="fs-3 mb-2">Login</h3>
      <div className="login-container border p-2 p-md-4">
        <form onSubmit={login}>
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="username">Username</label>
            <div className="w-100">
              <input
                onChange={handleInputChange}
                value={formData.username}
                className="border w-100 rounded p-2"
                name="username"
                id="username"
                type="text"
                required
              />
            </div>
            {error.username && <p className="text-danger">{error.username}</p>}
          </div>
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="Password">Password</label>
            <div className="w-100">
              <input
                onChange={handleInputChange}
                value={formData.password}
                className="border w-100 rounded p-2"
                name="password"
                type="password"
                required
              />
            </div>
            {error.password && <p className="text-danger">{error.password}</p>}
          </div>
          <button className="btn btn-primary mt-3 px-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
