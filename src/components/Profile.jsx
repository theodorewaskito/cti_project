import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../store/actions/userAction";

export default () => { 
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state.userState.user);

  useEffect(() => {
    dispatch(getUserDetail())
  }, [])

    return ( 
      <div className="my-3">
        <div className="d-flex justify-content-end">
          <h5 class="card-title" style={{color: 'grey'}}>
            <b>{user?.data?.name}</b>
            <i class="fas fa-user-circle ms-2"></i>
          </h5>
        </div>
        <div>
          <h6 className="d-flex justify-content-end">{user?.data?.email}</h6>
        </div>
      </div>

    )
  
}