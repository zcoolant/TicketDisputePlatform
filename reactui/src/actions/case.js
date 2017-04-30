import axios from 'axios';

export const FETCH_CASES = 'FETCH_CASES';
export const CREATE_CASE = 'CREATE_CASE';
export const FETCH_CASE = 'FETCH_CASE';
export const DELETE_CASE = 'DELETE_CASE';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw';

export function fetchCases() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_CASES,
    payload: request
  };
}

export function createCase(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_CASE,
    payload: request
  };
}

export function fetchCase(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_CASE,
    payload: request
  };
}

export function deleteCase(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_CASE,
    payload: request
  };
}
