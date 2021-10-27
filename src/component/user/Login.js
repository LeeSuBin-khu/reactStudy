import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_actions.js";
import axios from "axios";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Form } from "./css/RegisterCSS.js";

function Login(props) {
  const [Id, setId] = useState("");
  const [PW, setPW] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!(Id && PW)) {
      alert("모든 값을 채워주세요");
      return;
    }

    let body = {
      email: Id,
      password: PW,
    };

    dispatch(loginUser(body)).then((response) => {
      if(response.payload.success) {
        props.history.push("/")
      }
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
      <label htmlFor="password">PW</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        value={PW}
        onChange={(e) => setPW(e.currentTarget.value)}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;