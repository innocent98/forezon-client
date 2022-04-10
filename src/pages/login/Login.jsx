import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form className="row g-3">
          <div className="col-md-4">
            <input
              type="email"
              placeholder="Email"
              className="form-control shadow-none"
            />
          </div>
          <div className="col-md-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control shadow-none"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary">Login</button>
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
