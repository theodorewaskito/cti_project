import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError, loginHandle} from '../store/actions/userAction';
import Swal from 'sweetalert2'
import image from '../images/undraw_Web_devices_re_m8sc.png'
import Loading from "../components/Loading";
import Error from "../components/Error";

export default () => { 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const error = useSelector(state => state.userState.isError)
  const isLogin = useSelector(state => state.userState.isLogin)

  const loading = useSelector(state => state.userState.isLoadingUser)
  const error = useSelector(state => state.userState.isErrorUser)  

  const [loginUser, setLoginUser] = useState({
    email: ''
  })

  function submitLogin(e) {
    e.preventDefault()
    dispatch(loginHandle(loginUser))
  }

  // if (loading) {
  //   return <Loading/>
  // } 

  if (error) {
    return <Error/>
  }

  useEffect(() => {
    console.log("KONDISI LOGIN", isLogin);
    if (isLogin) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Welcome',
        text: 'You are Logged In',
        showConfirmButton: false
      })
      navigate('/post')
    } 
  }, [isLogin])

  return (
    <div class="d-flex justify-content-center m-4">
      <div class="d-flex flex-column col-10">
        <div class="my-4 d-flex justify-content-center">
          <div>
            <div>
              <img className="login-image" src={image} alt="register"/>
            </div>
            <div>
              <div class="my-4 d-flex justify-content-center">
                <h3>Login</h3>
              </div>
              <form class="my-4" 
                onSubmit={submitLogin}
              >
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" required
                    value={loginUser.email}
                    onChange={(e) => setLoginUser({
                      ...loginUser,
                      email: e.target.value
                    })}
                  />
                </div>
                <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}