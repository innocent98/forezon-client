import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./dashboard.css";
import { decode } from "jsonwebtoken";
import Deposit from "../deposit/Deposit";
import Withdraw from "../withdraw/Withdraw";

const Dashboard = () => {
  const { user, dispatch, accessToken } = useContext(Context);
  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  //logout a user automatically when session expired
  useEffect(() => {
    const token = accessToken.accessToken;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
        return alert("Session expired! kindly login again to continue");
      }
    }
  });

  //handle deposit and withdrawal
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);

  return (
    <div className="dashboard">
      <div className="top">
        <div className="left">
          <h3> Welcome back {user.user.username}</h3>
        <marquee behavior="" direction="left">Note: Damian Lyons Balancing of 1,000 needs to be done for maintenance</marquee>
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
              <h5 onClick={() => setDeposit(!deposit)}>Deposit</h5>
            </li>
            <li className="li">
              <div className="icon">
                <i className="bi bi-collection"></i>
              </div>
              <h5 onClick={() => setWithdraw(!withdraw)}>Withdraw</h5>
            </li>
            <li className="li">
              <div className="icon">
                <i className="bi bi-box-arrow-left"></i>
              </div>
              <h5 onClick={handleLogout}>{user ? "Logout" : "Login"}</h5>
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
                <h4>${user.user.totalWithdrawal}:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>OUTSTANDING</p>
                <h4>${user.user.dailyProfit}:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>ACCOUNT BALANCE</p>
                <h4>${user.user.accountBalance}:00</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col">
                <p>INVESTED AMOUNT</p>
                <h4>${user.user.investedAmount}:00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={deposit ? "deposit" : "none"}>
        <Deposit deposit={deposit} setDeposit={setDeposit} />
      </div>
      <div className={withdraw ? "withdraw" : "none"}>
        <Withdraw withdraw={withdraw} setWithdraw={setWithdraw} />
      </div>
    </div>
  );
};

export default Dashboard;
