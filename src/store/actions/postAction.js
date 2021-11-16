import {SET_ERROR, SET_LOADING, SET_POSTS, SET_POST} from "../actionType";
import Swal from 'sweetalert2'

const baseUrl = 'https://gorest.co.in/public/v1'

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload 
  }
}

export function setPosts(payload) {
  return {
    type: SET_POSTS,
    payload: payload 
  }
}

export function setPost(payload) {
  return {
    type: SET_POST,
    payload: payload 
  }
}

export function getPosts(payload) {
  return function(dispatch) {
    // console.log(payload.email);
    dispatch(setLoading(true))
    fetch(`${baseUrl}/posts`) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setPosts(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getPostId(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/posts/${id}`) 
      .then(res => res.json())
      .then(data => {
        dispatch(setPost(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}