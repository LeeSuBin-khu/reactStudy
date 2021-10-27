import React, { useEffect } from "react";
import { logoutUser } from "../../_actions/user_actions.js";
import { useDispatch, useSelector } from "react-redux";

function Logout(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("user", user);
  }, []);

  const logoutHandler = () => {
    console.log(user.userData.userInfo);
    dispatch(logoutUser(user.userData.userInfo)).then((response) => {
      console.log(response);
    });
    /*
    axios.get("/api/user/logout").then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
    */
  };

  return <button onClick={() => logoutHandler()}>로그아웃</button>;
}

export default Logout;