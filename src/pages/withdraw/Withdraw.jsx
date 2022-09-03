// import { useState } from "react";
import { useContext, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./withdraw.scss";

const Withdraw = ({ withdraw, setWithdraw }) => {
  const { user } = useContext(Context);

  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put("/user/withdraw/fund", {
        userId: user.user._id,
        uuid: user.user.username,
        amount,
        wallet,
      });
      window.location.reload();
      return alert(res.data);
    } catch (error) {}
  };

  return (
    <div className="withdrawFund">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <select name="type" id="" className="form-select" required>
            <option value="">Select wallet to withdraw to</option>
            <option value="usdt">USDT</option>
            {/* <option value="btc">BTC</option> */}
            {/* <option value="eth">ETHERUM</option> */}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Enter wallet address"
            className="form-control"
            required
            name="wallet"
            onChange={(e) => setWallet(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            placeholder="Amount"
            className="form-control"
            required
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
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
