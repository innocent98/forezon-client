import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <h3>Register</h3>
        <form className="row g-3 registrationForm">
          <div className="col-md-4">
            <input
              type="email"
              placeholder="Email"
              className="form-control shadow-none"
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              placeholder="Phone Number"
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
            <button className="btn btn-primary">Register</button>
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
