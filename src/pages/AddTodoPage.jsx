import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoading, setError } from '../store/actions/userAction';
import { createTodo } from '../store/actions/todoAction';
import Loading from "../components/Loading";
import Error from "../components/Error";

function AddTodoPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.todoState.isLoadingTodo)
  const error = useSelector(state => state.todoState.isErrorTodo)  

  const [addTodo, setAddTodo] = useState({
    title: '',
    due_on: '',
    status: ''
  })

  function submitAddTodo(e) {
    e.preventDefault()
    dispatch(createTodo(addTodo))
    navigate('/')
  }

  if (loading) {
    return <Loading/>
  } 

  if (error) {
    return <Error/>
  }


  return (
    <div class="d-flex justify-content-center m-4">
      <div class="col-7">
        <div class="my-4">
          <h3>Add Todo</h3>
        </div>
        <form class="my-4" 
          onSubmit={submitAddTodo}
        >
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="emailHelp" required
              value={addTodo.title}
              onChange={(e) => setAddTodo({
                ...addTodo,
                title: e.target.value
              })}
            />
          </div>
          <div class="mb-3">
            <label for="due_on" class="form-label">Due On</label>
            <input type="date" class="form-control" id="due_on" required
              value={addTodo.due_on}
              onChange={(e) => setAddTodo({
                ...addTodo,
                due_on: e.target.value
              })}
            />
          </div>
          <div class="mb-3">
              <label class="form-label">Status</label>
              <select class="form-select" aria-label="Default select example" required
                value={addTodo.status}
                onChange={(e) => setAddTodo({
                  ...addTodo,
                  status: e.target.value
                })}
              >
                <option selected className="text-center" value="">--- Please select status ---</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddTodoPage
