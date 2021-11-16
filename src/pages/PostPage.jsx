import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setError } from '../store/actions/userAction';
import { getPosts } from '../store/actions/postAction';
import PostCard from "../components/PostCard";


function PostPage() {

  const dispatch = useDispatch()

  const posts = useSelector(state => state.postState.posts)
  const loading = useSelector(state => state.userState.isLoading)
  // const error = useSelector(state => state.isError)  

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <div className="m-5">
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
