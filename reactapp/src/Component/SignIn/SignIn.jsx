import React, { useState } from "react";
import "./SignIn.css";
import { loginUserApi } from "../../api/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { msg } = await loginUserApi({ ...formData });
    const isCheck = msg === "User Successfully Signed In" ? true : false;
    if (isCheck) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
      navigate("/home");
    } else {
      alert("userName and password are wrong");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <br />
      <span>
        I don't have an account <a href="/">Sign Up</a>
      </span>
    </div>
  );
};

export default SignIn;
