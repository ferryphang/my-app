import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
const BASE_URL = "http://reduxblog.herokuapp.com";
const API_KEY = "?key=123123123";

export function fetchPosts(){
  const request = axios.get(BASE_URL + "/api/posts" + API_KEY);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};