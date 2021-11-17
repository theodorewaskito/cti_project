import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setError } from '../store/actions/userAction';
import { getPosts, nextPagePosts, previousPagePosts } from '../store/actions/postAction';
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Error from "../components/Error";

function PostPage() {

  const dispatch = useDispatch()

  const posts = useSelector(state => state.postState.posts)
  const loading = useSelector(state => state.postState.isLoading)
  const error = useSelector(state => state.postState.isError)  
  const page = useSelector(state => state.postState.page) 

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  function previousPage(e) {
    e.preventDefault()
    dispatch(previousPagePosts())
    dispatch(getPosts())
  }

  function nextPage(e) {
    e.preventDefault()
    dispatch(nextPagePosts())
    dispatch(getPosts())
  }

  if (loading) {
    return <Loading/>
  } 

  if (error) {
    return <Error/>
  }

  if (page > 1) {
    return (
      <div>
        <Profile/>
        <div className="mb-5">
          <h1>Posts</h1>
        </div>
        <div>
          {
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
        <div className="d-flex justify-content-center my-5" style={{color: '#5386FE'}}>
          <nav aria-label="Page navigation example ">
            <ul class="pagination">
              <li class="page-item">
                <button onClick={previousPage} class="page-link">
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              <li class="page-item">
                <button class="page-link">
                  {page}
                </button>
              </li>
              <li class="page-item">
                <button onClick={nextPage} class="page-link" >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Profile/>
        <div className="mb-5">
          <h1>Posts</h1>
        </div>
        <div>
          {
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
        <div className="d-flex justify-content-center my-5" style={{color: '#5386FE'}}>
          <nav aria-label="Page navigation example ">
            <ul class="pagination">
              <li class="page-item">
                <button class="page-link">
                  {page}
                </button>
              </li>
              <li class="page-item">
                <button onClick={nextPage} class="page-link" >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default PostPage
