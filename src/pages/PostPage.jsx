import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setError } from '../store/actions/userAction';
import { getPosts } from '../store/actions/postAction';
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Error from "../components/Error";

function PostPage() {

  const dispatch = useDispatch()

  const posts = useSelector(state => state.postState.posts)
  const loading = useSelector(state => state.postState.isLoading)
  const error = useSelector(state => state.postState.isError)  

  console.log(loading, error);

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (loading) {
    return <Loading/>
  } 

  if (error) {
    return <Error/>
  }

  return (
    <div>
      <Profile/>
      <div className="mb-5">
        <h1>Posts</h1>
      </div>
      <div>
        {
          // console.log(posts.data)
          posts?.data?.map((post, index) => {
            return (
              <PostCard
                key={index} 
                post={post}
              >
              </PostCard>
            )
          })
        }

      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5" style={{color: '#5386FE'}}>
        <nav aria-label="Page navigation example ">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li> */}
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default PostPage
