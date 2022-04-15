import { useContext, useRef, useState } from "react";
import "./login.scss";
import axios from "axios";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/user/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      setError(true);
      error && alert("Invalid login credentials, please try again")
    }
  };

  return (
    <div className="login">
      <div className="container">
        <form className="row g-3" onSubmit={handleLogin}>
          <div className="col-md-4">
            <input
              type="username"
              placeholder="Username"
              className="form-control shadow-none"
              ref={usernameRef}
            />
          </div>
          <div className="col-md-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control shadow-none"
              ref={passwordRef}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" type="submit" disabled={isFetching}>
              Login
            </button>
          </div>
        </form>
        <div className="member">
          Does not have an account yet? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
