import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError, registerHandle} from '../store/actions/userAction';
// import Swal from 'sweetalert2'
import image from '../images/undraw_Filter_re_sa16.png'

export default () => { 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const error = useSelector(state => state.isError)
  const isLogin = useSelector(state => state.isLogin)

  const [registerUser, setRegisterUser] = useState({
    email: '',
    name: '',
    gender: '',
    status: ''
  })

  function submitRegister(e) {
    e.preventDefault()
    dispatch(registerHandle(registerUser))
    // navigate('/login')
  }

  return (
    <div class="d-flex justify-content-center m-4">
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
              onSubmit={submitRegister}
            >
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email"
                  value={registerUser.email}
                  onChange={(e) => setRegisterUser({
                    ...registerUser,
                    email: e.target.value
                  })}
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name"
                  value={registerUser.name}
                  onChange={(e) => setRegisterUser({
                    ...registerUser,
                    name: e.target.value
                  })}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Gender</label>
                <select class="form-select" aria-label="Default select example"
                  value={registerUser.gender}
                  onChange={(e) => setRegisterUser({
                    ...registerUser,
                    gender: e.target.value
                  })}
                >
                  <option selected className="text-center">--- Please select gender ---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Status</label>
                <select class="form-select" aria-label="Default select example"
                  value={registerUser.status}
                  onChange={(e) => setRegisterUser({
                    ...registerUser,
                    status: e.target.value
                  })}
                >
                  <option selected className="text-center">--- Please select status ---</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Register</button>
            </form>
          </div>

        </div>
        
      </div>
    </div>
  ) 
 
}