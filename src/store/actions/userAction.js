import {SET_ERROR, SET_LOADING, SET_ISLOGIN, SET_USER } from "../actionType";
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

export function setIsLogin(payload) {
  return {
    type: SET_ISLOGIN,
    payload: payload 
  }
}


export function setUser(payload) {
  return {
    type: SET_USER,
    payload: payload 
  }
}

export function registerHandle(payload) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 704b7efa9fffd9da310ab3f027d536e96207f72b8b8b73cc514dcb5c3e5fde47'
      },
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data.data.message[0]);
        if (data.data.message[0]) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message[0]
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Thankyou for joining',
          })
          console.log(data);
        }
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function loginHandle(payload) {
  return function(dispatch) {
    // console.log(payload.email);
    dispatch(setLoading(true))
    fetch(`${baseUrl}/users/?email=${payload.email}`) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        // console.log(data.data.length);
        if (data.data.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email not Found'
          })
        } else {
          localStorage.setItem('userId', data.data[0].id)
          dispatch(setIsLogin(true))
        }
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function logoutHandle(payload) {
  return function(dispatch) {
    localStorage.clear()
    dispatch(setIsLogin(false))
  }
}

export function getUserDetail() {
  return function(dispatch) {
    let userId = localStorage.getItem('userId')
    dispatch(setLoading(true))
    fetch(`${baseUrl}/users/${userId}`) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setUser(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}