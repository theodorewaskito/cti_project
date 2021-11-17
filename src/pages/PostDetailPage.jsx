import React, { useEffect, useState } from 'react'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComments, getPostId, setError, setLoading } from '../store/actions/postAction';
import { getUserDetail, getUserPostDetail } from '../store/actions/userAction';
import Swal from 'sweetalert2'
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Error from "../components/Error";

function PostDetailPage() {
  const dispatch = useDispatch()
  const {postId} = useParams()
  // console.log(postId);
  const post  = useSelector(state => state.postState.post);
  const comments  = useSelector(state => state.postState.comments);
  const user  = useSelector(state => state.userState.user);
  const userPost  = useSelector(state => state.userState.userPost);

  const loading = useSelector(state => state.postState.isLoading)
  const error = useSelector(state => state.postState.isError)  

  // console.log(post.data.user_id);
  // console.log(userPost);

  const [addComment, setAddComment] = useState({
    post_id: 0,
    name: '',
    email: '',
    body: ''
  })

  useEffect(() => {
    dispatch(getPostId(postId))
    dispatch(getComments(postId))
    dispatch(getUserDetail())
    dispatch(getUserPostDetail(post.data.user_id))
  }, [])


  if (loading) {
    return <Loading/>
  } 

  if (error) {
    return <Error/>
  }

  function submitAddComment(e) {
    e.preventDefault()
    dispatch(createComment(postId, addComment))
    Swal.fire({
      icon: 'success',
      title: 'Sucess',
      text: 'Your comment has been submitted',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className='mb-4'>
      <Profile/>
      <div class="card border-dark my-5">
        <div class="card-body m-3">
          <div className="mb-5">
            <h5 class="card-title mb-4 post-font bold-font" style={{textAlign: "justify", textJustify: "inter-word"}}><b>{post?.data?.title}</b></h5>
            <p class="card-text post-font thin-font" style={{textAlign: "justify", textJustify: "inter-word", color: "black"}}>{post?.data?.body}</p>
          </div>
          <div className="d-flex justify-content-end">
            <p class="post-font" style={{fontSize: "14px"}}> Created by : {userPost?.data?.name}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h6>Leave a comment</h6>
        <div class="form-floating">
          <form onSubmit={submitAddComment}>
            <textarea 
              required
              class="form-control" 
              placeholder="Leave a comment here" 
              id="floatingTextarea2" 
              style={{height: "150px"}}
              value={addComment.body}
              onChange={(e) => setAddComment({
                ...addComment,
                body: e.target.value
              })}
            ></textarea>
            {/* <label for="floatingTextarea2">Comments</label> */}
            <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white"}}>Submit Comment</button>
          </form>
        </div>
      </div>

      <div className="mt-4">
        <h6>Comments</h6>
        <div>
          {
            comments?.data?.map((comment, index) => {
              return (
                <Comment
                  key={index} 
                  comment={comment}
                  postId={postId}
                />
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default PostDetailPage
