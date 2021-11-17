import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError, deleteComment} from '../store/actions/postAction';
import Swal from 'sweetalert2'

function Comment({ comment, postId }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
