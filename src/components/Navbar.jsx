import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logoutHandle, isLogin } from '../store/actions/userAction';
import Swal from 'sweetalert2'

export default () => { 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLogin = useSelector(state => state.userState.isLogin)

  function logout() {
    dispatch(logoutHandle())
    navigate('/login')
    Swal.fire({
      position: 'top',
      text: 'You are Logged Out',
      showConfirmButton: false
    })
  }

  if (localStorage.getItem('userId')) {
    return ( 
      <nav class="navbar navbar-dark" style={{backgroundColor: "#5386FE"}}>
        <div class="d-flex flex-row bd-highlight ms-3 col-10">
          <Link to="/todo" style={{textDecoration: "none"}}>
            <a class="navbar-brand me-4" href="#">Todo</a>
          </Link>
          <Link to="/post" style={{textDecoration: "none"}}>
            <a class="navbar-brand me-4" href="#">Post</a>
          </Link>
        </div>
        <div>
          <button 
            onClick={() => logout()}
            type="button" 
            class="btn me-3" 
            style={{backgroundColor: "#FE5320", color: 'white'}}
          >Logout</button>
        </div>
      </nav>
    )
  } else if (!localStorage.getItem('userId')) {
    return (
      <nav class="navbar navbar-dark" style={{backgroundColor: "#5386FE"}}>
      <div class="d-flex flex-row bd-highlight ms-3 col-10">
        <a class="navbar-brand me-4" href="#">Todo</a>
      </div>
      <div>
        <Link to="/login" style={{textDecoration: "none"}}>
          <button type="button" class="btn me-3" style={{backgroundColor: "green", color: 'white'}}>Login</button>
        </Link>
      </div>
    </nav>
    )
  }
  
}