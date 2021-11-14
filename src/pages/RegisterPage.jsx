import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { loginHandle, setLoading, setError, setLogin} from '../store/action';
import Swal from 'sweetalert2'
import image from '../images/undraw_Filter_re_sa16.png'

export default () => { 

  return <div class="d-flex justify-content-center m-4">
    <div class="d-flex flex-column col-10">
      <div class="row">
        <div class="col-7">
          <img className="register-image" src={image} alt="register"/>
        </div>
        <div class="col-5">
          <div class="my-4">
            <h3>Register</h3>
          </div>
          <form class="my-4" 
            // onSubmit={submitLogin}
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                // value={loginUser.email}
                // onChange={(e) => setLoginUser({
                //   ...loginUser,
                //   email: e.target.value
                // })}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1"
                // value={loginUser.password}
                // onChange={(e) => setLoginUser({
                //   ...loginUser,
                //   password: e.target.value
                // })}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Gender</label>
              <select class="form-select" aria-label="Default select example">
                <option selected className="text-center">--- Please select gender ---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Status</label>
              <select class="form-select" aria-label="Default select example">
                <option selected className="text-center">--- Please select status ---</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Register</button>
          </form>
        </div>

      </div>
      
    </div>
  </div>
}