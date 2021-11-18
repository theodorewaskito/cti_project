import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError } from '../store/actions/userAction';
import { getTodos, nextPageTodos, previousPageTodos } from '../store/actions/todoAction';
import Swal from 'sweetalert2'
import TodoCard from "../components/TodoCard";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default () => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const todos = useSelector(state => state.todoState.todos)
  const loading = useSelector(state => state.todoState.isLoadingTodo)
  const error = useSelector(state => state.todoState.isErrorTodo)
  const page = useSelector(state => state.todoState.page) 

  console.log(page, todos);

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  function addTodo(e) {
    e.preventDefault()
    navigate('/todo/add')
  }

  function previousPage(e) {
    e.preventDefault()
    dispatch(previousPageTodos())
    dispatch(getTodos())
  }

  function nextPage(e) {
    e.preventDefault()
    dispatch(nextPageTodos())
    dispatch(getTodos())
  }

  // if (loading) {
  //   return <Loading/>
  // } 

  if (error) {
    return <Error/>
  }

  if (page > 1) {
    if (todos?.data?.length < 20) {
      return (
        <div>
          <Profile/>
          <div className="mb-5">
            <h1>Todo</h1>
            <div>
              <button 
                onClick={addTodo}
                type="button" 
                class="btn" 
                style={{backgroundColor: "#5386FE", color: "white"}}
              >
                <i class="fas fa-plus"></i>
                <span className="ms-2">Add</span>
              </button>
            </div>
          </div>
          <div class="row">
            {
              // console.log(todos),
              todos?.data?.map(( todo, index ) => {
                return (
                  <TodoCard
                    key={index} 
                    todo={todo}
                  />
                )
              })
            }
          </div>
          <div className="d-flex justify-content-center mt-5" style={{color: '#5386FE'}}>
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
            <h1>Todo</h1>
            <div>
              <button 
                onClick={addTodo}
                type="button" 
                class="btn" 
                style={{backgroundColor: "#5386FE", color: "white"}}
              >
                <i class="fas fa-plus"></i>
                <span className="ms-2">Add</span>
              </button>
            </div>
          </div>
          <div class="row">
            {
              // console.log(todos),
              todos?.data?.map(( todo, index ) => {
                return (
                  <TodoCard
                    key={index} 
                    todo={todo}
                  />
                )
              })
            }
          </div>
          <div className="d-flex justify-content-center mt-5" style={{color: '#5386FE'}}>
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
    }
  } else {
    return (
      <div>
        <Profile/>
        <div className="mb-5">
          <h1>Todo</h1>
          <div>
            <button 
              onClick={addTodo}
              type="button" 
              class="btn" 
              style={{backgroundColor: "#5386FE", color: "white"}}
            >
              <i class="fas fa-plus"></i>
              <span className="ms-2">Add</span>
            </button>
          </div>
        </div>
        <div class="row">
          {
            // console.log(todos),
            todos?.data?.map(( todo, index ) => {
              return (
                <TodoCard
                  key={index} 
                  todo={todo}
                />
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center mt-5" style={{color: '#5386FE'}}>
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