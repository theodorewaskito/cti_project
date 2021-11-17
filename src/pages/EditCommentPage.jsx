import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCommentId, updateComment, setLoading, seError } from '../store/actions/postAction'
import Swal from 'sweetalert2'

function EditCommentPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {commentId} = useParams()

  const comment  = useSelector(state => state.postState.comment);
  const post  = useSelector(state => state.postState.post);

  console.log(comment.data);

  const [editComment, setEditComment] = useState({})

  useEffect(() => {
    dispatch(getCommentId(commentId))
  }, [])

  useEffect(() => {
    setEditComment({...comment.data})
  }, [comment.data])

  function submitEditComment(e) {
    e.preventDefault()
    dispatch(updateComment(editComment, commentId))
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Comment have been updated',
      showConfirmButton: false,
      timer: 1500
    })
    navigate(`/post/${post.data.id}`)
  }

  return (
    <div class="d-flex justify-content-center m-4">
      <div class="col-7">
        <div class="my-4">
          <h3>Edit Comment</h3>
        </div>
        <form class="my-4" 
          onSubmit={submitEditComment}
        >
          <div class="mb-3">
            <label for="title" class="form-label">Comment</label>
            <textarea 
              required
              class="form-control" 
              id="floatingTextarea2" 
              style={{height: "150px"}}
              value={editComment.body}
              onChange={(e) => setEditComment({
                ...editComment,
                body: e.target.value
              })}
            >
            </textarea>
          </div>
          <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditCommentPage
