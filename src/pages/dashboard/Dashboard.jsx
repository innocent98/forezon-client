import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <div className="left">
          <h3> Welcome back <b>Peller!</b> </h3>
        </div>
        <div className="right">
          <div className="icon">
            {/* <i className="bi bi-people"></i> */}
          </div>
          {/* <div className="referral">Referral Commission: $0:00</div> */}
        </div>
      </div>
      <div className="body">
        <div className="left">
          <ul>
            <li className="li">
              <div className="icon">
                <i className="bi bi-person-circle"></i>
              </div>
              <h5>Account</h5>
            </li>
            <li className="li">
              <div className="icon">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h5>Deposit</h5>
            </li>
            <li className="li">
              <div className="icon">
                <i className="bi bi-collection"></i>
              </div>
              <h5>Withdraw</h5>
            </li>
            <li className="li">
              <div className="icon">
                <i className="bi bi-box-arrow-left"></i>
              </div>
              <h5>Logout</h5>
            </li>
          </ul>
        </div>

        <div className="right">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
              <FontAwesomeIcon icon="fa-solid fa-wallet" />
                <p>TOTAL WITHDRAWAL</p>
                <FontAwesomeIcon icon="fa-solid fa-signal" />
                <h4>$0:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>DAILY PROFIT</p>
                <h4>$0:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>ACCOUNT BALANCE</p>
                <h4>$0:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>INVESTED AMOUNT</p>
                <h4>$0:00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
