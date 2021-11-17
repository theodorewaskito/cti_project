import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from '../store/actions/userAction';
import { deleteTodo, updateTodo } from '../store/actions/todoAction';
import Swal from 'sweetalert2'

function TodoCard({ todo }) {
  const dispatch = useDispatch()

  // const todoState = useSelector(state => state.todoState.todo);

  const [editTodo, setEditTodo] = useState({
    status: ''
  })

  function convDate(date) {
    return new Date(date)
  }

  function delTodo(id) {
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
        dispatch(deleteTodo(id))
      }
    })
  }

  function submitEditTodo(e) {
    e.preventDefault()
    dispatch(updateTodo(editTodo, todo.id))
  }

  if (todo.status == 'pending') {
    return (
      <div class="col-sm-6">
        <div class="card shadow-sm mb-4 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title"><b>{todo.title}</b></h5>
            <p class="card-text">{convDate(todo.due_on).toDateString()}</p>
  
            <form onSubmit={submitEditTodo}>
              <div class="input-group">
                <select class="form-select" id="inputGroupSelect04"
                  value={editTodo.status}
                  onChange={(e) => setEditTodo({
                    ...editTodo,
                    status: e.target.value
                  })}
                >
                  <option selected value={todo.status}>{todo.status}</option>
                  <option value="completed">completed</option>
                </select>
                <button class="btn btn-outline-secondary" type="submit">Submit</button>
              </div>
            </form>
  
            <div className="d-flex justify-content-end mt-3">
              <button
                onClick={() => delTodo(todo.id)}
                type="button" 
                class="btn"
                style={{backgroundColor: "#FE5320", padding: "5px 12px", borderRadius: "5px"}}>
                <i class="fas fa-trash-alt" style={{color: "white"}}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="col-sm-6">
        <div class="card shadow-sm mb-4 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title"><b>{todo.title}</b></h5>
            <p class="card-text">{convDate(todo.due_on).toDateString()}</p>
  
            <form onSubmit={submitEditTodo}>
              <div class="input-group">
                <select class="form-select" id="inputGroupSelect04"
                  value={editTodo.status}
                  onChange={(e) => setEditTodo({
                    ...editTodo,
                    status: e.target.value
                  })}
                >
                  <option selected value={todo.status}>{todo.status}</option>
                  <option value="pending">pending</option>
                </select>
                <button class="btn btn-outline-secondary" type="submit">Submit</button>
              </div>
            </form>
  
            <div className="d-flex justify-content-end mt-3">
              <button
                onClick={() => delTodo(todo.id)}
                type="button" 
                class="btn"
                style={{backgroundColor: "#FE5320", padding: "5px 12px", borderRadius: "5px"}}>
                <i class="fas fa-trash-alt" style={{color: "white"}}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default TodoCard
