import axios from "axios";
import { decode } from "jsonwebtoken";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./delete.scss";

const Delete = () => {
  const { dispatch } = useContext(Context);
  const accessToken = useContext(Context);
  const refreshToken = useContext(Context);

//   const [userToken, setUserToken] = useState(null)

  //fetch a user
  const [user, setUser] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/${path}`);
      setUser(res.data);
    };
    fetchUser();
  }, [path]);

  //logout a user automatically when session expired
  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
  };

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

//   //refresh token
//   const handleRefreshToken = async ()=>{
//       try {
//           const res = await axios.post("/user/refresh", {token: refreshToken.refreshToken});

//       } catch (error) {
          
//       }
//   }

  //delete a user
  const [setSuccess] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/user/delete/${path}`, {
        data: {
          headers: {
            Authorization: `Bearer ${accessToken.accessToken}`,
          },
          accessToken: accessToken.accessToken,
        },
      });
      setSuccess(true);
      window.location.replace("/admin");
    } catch (err) {}
  };

  return (
    <div className="deleteU">
      <div className="container">
        Are you sure you want to delete {user.username}? <br /> Actions can't be
        undo!
      </div>
      <div className="buttons">
        <Link to="/admin">
          {" "}
          <button className="cancel btn-warning text-white">Cancel</button>
        </Link>
        <form className="row -g-3" onSubmit={handleDelete}>
          <div className="col-md-4">
            <button className="proceed btn-primary" type="submit">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;