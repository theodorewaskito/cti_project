import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError } from '../store/actions/userAction';
import { getTodos } from '../store/actions/todoAction';
import Swal from 'sweetalert2'
import TodoCard from "../components/TodoCard";

export default () => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const todos = useSelector(state => state.todoState.todos)
  const loading = useSelector(state => state.userState.isLoading)

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  function addTodo(e) {
    e.preventDefault()
    navigate('/todo/add')
  }

  return (
    <div className="m-5">
      <div className="mb-5">
        <h1>Todo</h1>
        <div>
          <button 
            onClick={addTodo}
            type="button" 
            class="btn" 
            style={{backgroundColor: "#5386FE", color: "white"}}
          >
            <i class="fas fa-plus-circle"></i>
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
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
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