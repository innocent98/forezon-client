import { useEffect, useState } from "react";
import "./deposit.scss";
import { axiosInstance } from "../../config";

const Deposit = ({ deposit, setDeposit }) => {
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

  return (
    <div className="depositWallet">
      <h3>
        Deposit USDT into the wallet address. <br /> NB: Use trc20 as your
        network
      </h3>
      {wallet.map((w) => (
        <>
          <input
            type="text"
            name="address"
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
    </div>
  );
};

export default Deposit;
