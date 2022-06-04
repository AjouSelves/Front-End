import axios from "axios";

import { SERVER_URL_API } from "./types";
import {
  LOGIN_USER,
  REGISTER_USER,
  GET_USER_INFO,
  DELETE_USER,
  EDIT_USER_INFO,
} from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${SERVER_URL_API}/auth/login`, dataToSubmit)
    .then((response) => response.data)
    .catch((err) => {
      return err;
    });
  return { type: LOGIN_USER, payload: request };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${SERVER_URL_API}/auth/register`, dataToSubmit)
    .then((response) => response.data);
  return { type: REGISTER_USER, payload: request };
}

export function getUserInfo(header) {
  const request = axios
    .get(`${SERVER_URL_API}/user`, header)
    .then((response) => response.data);

  return { type: GET_USER_INFO, payload: request };
}

export function deleteUser(header) {
  const request = axios
    .delete(`${SERVER_URL_API}/user`, header, null)
    .then((response) => response.data);

  return { type: DELETE_USER, payload: request };
}

export function editUserInfo(body, header) {
  const request = axios
    .put(`${SERVER_URL_API}/user`, body, header)
    .then((response) => response.data);

  return { type: EDIT_USER_INFO, payload: request };
}
