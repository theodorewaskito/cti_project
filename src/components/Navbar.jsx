import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { loginHandle, setLoading, setError, setLogin} from '../store/action';
import Swal from 'sweetalert2'

export default () => { 

  return ( 
    <nav class="navbar navbar-dark" style={{backgroundColor: "#5386FE"}}>
      <div class="d-flex flex-row bd-highlight ms-3 col-10">
        <a class="navbar-brand me-4" href="#">Todo</a>
        <a class="navbar-brand me-4" href="#">Post</a>
        <a class="navbar-brand" href="#">Add Post</a>
      </div>
      <div>
        <button type="button" class="btn btn-danger me-3">Logout</button>
      </div>
    </nav>
  )
}