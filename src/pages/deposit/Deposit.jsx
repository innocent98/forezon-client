import { useContext, useEffect, useState } from "react";
import "./deposit.scss";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";

const Deposit = ({ deposit, setDeposit }) => {
  const accessToken = useContext(Context);

  const [copy, setCopy] = useState(false);

  //fetch wallet
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    const fetchWallet = async () => {
      const res = await axiosInstance.get("/user/wallet");
      setWallet(res.data);
    };
    fetchWallet();
  }, [setWallet]);

  // sent
  const [amount, setAmount] = useState(0);
  const handleSent = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/user/sent", {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
        },
        accessToken: accessToken.accessToken,
        amount,
      });
      window.location.reload();
      return alert(res.data);
    } catch (error) {
      return alert("Connection error!");
    }
  };

  return (
    <div className="depositWallet">
      <h3>
        Deposit USDT into the wallet address below. <br /> NB: Use trc20 as your
        network
      </h3>
      {wallet.map((w) => (
        <>
          <input
            type="text"
            name="address"
            className="form-control shadow-none"
            id=""
            value={w.wallet}
            readOnly
          />
          <span class="material-icons" onClick={() => setDeposit(!deposit)}>
            close
          </span>
          <button
            onClick={() =>
              navigator.clipboard.writeText(w.wallet) && setCopy(true)
            }
          >
            {copy ? "Copied" : "Copy"}
          </button>
        </>
      ))}
      <form className="row" onSubmit={handleSent}>
        <div className="col-md-3">
          <input
            type="number"
            name="amount"
            className="form-control shadow-none"
            placeholder="Enter USDT amount deposited"
            required
            min={10}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button type="submit">I have sent it</button>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
