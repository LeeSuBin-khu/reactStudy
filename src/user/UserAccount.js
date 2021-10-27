import React, { useState } from "react";
import Register from "./Register.js";
import Login from "./Login.js";

import { AccountDiv } from "./css/RegisterCSS.js";
function UserAccount() {
  const [Flag, setFlag] = useState("login");

  return (
    <AccountDiv>
      <div className="formArea">
        <div className="header">
          <p onClick={() => setFlag("login")}>로그인</p>
          <p onClick={() => setFlag("register")}>회원가입</p>
        </div>
        <hr />
        <div>
          {Flag === "login" ? <Login /> : <Register setFlag={setFlag} />}
        </div>
      </div>
    </AccountDiv>
  );
}

export default UserAccount;