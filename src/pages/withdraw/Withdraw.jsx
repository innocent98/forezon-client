import { useState } from "react";
import "./withdraw.scss";

const Withdraw = ({ withdraw, setWithdraw }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    alert("Withdrawal successful, you will be credited shortly");
    if (success === true) {
      window.location.replace("/dashboard");
    }
  };

  return (
    <div className="withdrawFund">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <select name="type" id="" className="form-select" required>
            <option value="">Select wallet to withdraw to</option>
            <option value="usdt">USDT</option>
            <option value="btc">BTC</option>
            <option value="eth">ETHERUM</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Enter wallet address"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary">Withdraw</button>
        </div>
      </form>

      <span class="material-icons" onClick={() => setWithdraw(!withdraw)}>
        close
      </span>
    </div>
  );
};

export default Withdraw;
