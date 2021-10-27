/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const UploadForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  input {
    width: 100%;
    resize: none;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;
    box-shadow: 0px 2px 10px rgba(150, 3, 100, 0.03),
      0px 1px 30px rgba(165, 1, 80, 0.05);
    height: auto;
  }
  textarea {
    width: 100%;
    resize: none;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;
    box-shadow: 0px 2px 10px rgba(150, 3, 100, 0.03),
      0px 1px 30px rgba(165, 1, 80, 0.05);
    min-height: 350px;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
  button {
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    width: 30%;
    margin: 0 auto;
    background-color: white;
    &:hover,
    &:focus {
      background-color: black;
      color: white;
    }
  }
`;

const UploadBtn = styled.button``;

export { UploadDiv, UploadBtn, UploadForm };