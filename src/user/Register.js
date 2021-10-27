import React, { useState } from "react";
import axios from "axios";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { RegisterFromDiv, Form } from "./css/RegisterCSS.js";

function Register(props) {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [PW, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [Error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!(Id && PW && Name && PWConfirm)) {
      alert("모든 값을 채워주세요");
      return;
    }
    if (PW != PWConfirm) {
      alert("비밀번호와 비밀번호 확인의 값이 다릅니다.");
      return;
    }

    let body = {
      email: Id,
      password: PW,
      name: Name,
    };

    await axios
      .post("/api/user/register", body)
      .then((response) => {
        alert("회원가입이 완료되었습니다");
        props.setFlag("login");
      })
      .catch((err) => {
        alert("회원가입이 실패하였습니다");
      });
  };

  return (
    <form
      css={Form}
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor="id">ID</label>
      <input
        type="email"
        name="id"
        id="id"
        required
        value={Id}
        onChange={(e) => setId(e.currentTarget.value)}
      />
      <label htmlFor="id">이름</label>
      <input
        type="text"
        name="name"
        required
        value={Name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <label htmlFor="password">PW</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        value={PW}
        onChange={(e) => setPW(e.currentTarget.value)}
      />
      <label htmlFor="password">PW Confirm</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        value={PWConfirm}
        onChange={(e) => setPWConfirm(e.currentTarget.value)}
      />
      {Error && <p>{Error}</p>}
      <button type="submit">회원가입</button>
    </form>
  );
}

export default Register;