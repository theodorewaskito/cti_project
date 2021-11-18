import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteComment, setLoadingComment, setErrorComment } from '../store/actions/postAction';
// import { setLoading, setError } from '../store/actions/userAction';
import Swal from 'sweetalert2'
import Loading from "../components/Loading";
import Error from "../components/Error";


function Comment({ comment, postId }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.postState.isLoadingComment)
  const error = useSelector(state => state.postState.isErrorComment)

  console.log(loading);
  // console.log(comment, postId);

  function editComment(id) {
    navigate(`/comment/${id}`)
  }

  function delComment(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteComment(id, postId))
      }
    })
  }

  if (loading) {
    return <Loading/>
  } 

  if (error) {
    return <Error/>
  }

  return (
    <div>
        <div class="card mb-1">
          <div class="card-body">
            
            <h5 class="card-title" style={{color: 'grey'}}>
              <i style={{fontSize: "15px"}} class="fas fa-user-circle me-2"></i>
              <b style={{fontSize: "15px"}}>{comment.name}</b>
            </h5>
            <p style={{fontSize: "15px"}}>{comment.body}</p>
            <div className="d-flex justify-content-end mt-3">
              <button
                onClick={() => editComment(comment.id)}
                class="btn" 
                style={{padding: "5px 15px"}}
              >
                <i class="fas fa-edit" style={{color: "orange"}}></i>
              </button>
              <button class="btn" style={{padding: "5px 15px"}}
                onClick={() => delComment(comment.id)}
              >
                <i class="fas fa-trash-alt" style={{color: "#FE5320"}}></i>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Comment

