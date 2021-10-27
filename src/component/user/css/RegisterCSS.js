/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const AccountDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .formArea {
    padding: 20px;
    border: none;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    div {
      display: flex;
      justify-content: space-around;
      p {
        margin-bottom: 0px;
        cursor: pointer;
        user-select: none;
      }
    }
    hr {
      border: 0.5px solid #c6c6c6;
      background-color: #c6c6c6;
    }
  }
`;

const Form = css`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-area: form;
  label {
    text-align: left;
  }
  input {
    margin-bottom: 1rem;
  }
  button {
    margin-top: 1rem;
    border-radius: 14px;
    border: 1px solid black;
    width: auto;
    background-color: white;
    &:hover,
    &:active {
      background-color: black;
      color: white;
    }
  }
`;

export { AccountDiv, Form };