import axios from "axios";
import { SET_USER, CLEAR_USER } from "./type.js";

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`/api/user/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: SET_USER,
    payload: request,
  };
}

export function logoutUser(dataToSubmit) {
  const request = axios
    .post(`/api/user/logout`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: CLEAR_USER,
    payload: request,
  };
}