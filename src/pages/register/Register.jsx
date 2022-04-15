import axios from "axios";
import { useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      const res = await axios.post("/user/register", {
        email,
        username,
        password,
      });
      setSuccess(true);
      alert("Registration successful! proceed to login");
      if (success === true) {
        res.data && window.location.replace("/login");
      }
    } catch (err) {
      setError(true);
      error && alert("Email or Username exist! Please try another");
    }
  };
  return (
    <div className="register">
      <div className="container">
        <h3>Register</h3>
        <form className="row g-3 registrationForm" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <input
              type="email"
              placeholder="Email"
              className="form-control shadow-none"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="form-control shadow-none"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control shadow-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="member">
          Already a member? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
