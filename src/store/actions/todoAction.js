import {SET_ERROR, SET_LOADING, SET_TODOS, SET_TODO} from "../actionType";
import Swal from 'sweetalert2'

const baseUrl = 'https://gorest.co.in/public/v1'

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload 
  }
}

export function setTodos(payload) {
  return {
    type: SET_TODOS,
    payload: payload 
  }
}

export function setTodo(payload) {
  return {
    type: SET_TODO,
    payload: payload 
  }
}

export function getTodos(payload) {
  return function(dispatch) {
    console.log(localStorage.getItem('userId'));
    let userId = localStorage.getItem('userId')
    dispatch(setLoading(true))
    fetch(`${baseUrl}/users/${userId}/todos`) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setTodos(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getTodoId(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/todos/${id}`) 
      .then(res => res.json())
      .then(data => {
        dispatch(setTodo(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function createTodo(payload) {
  return function(dispatch) {
    console.log(localStorage.getItem('userId'));
    let userId = localStorage.getItem('userId')
    dispatch(setLoading(true))
    fetch(`${baseUrl}/users/${userId}/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 704b7efa9fffd9da310ab3f027d536e96207f72b8b8b73cc514dcb5c3e5fde47'
      },
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        // dispatch(setTodo(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function deleteTodo(todoId) {
  return function(dispatch, getState) {
    // console.log(getState().todos?.data);

    // console.log(localStorage.getItem('userId'));
    // let userId = localStorage.getItem('userId')
    // console.log(todoId);
    dispatch(setLoading(true))
    // console.log(getState());
    fetch(`${baseUrl}/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 704b7efa9fffd9da310ab3f027d536e96207f72b8b8b73cc514dcb5c3e5fde47'
      }
    }) 
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `Your todo has been deleted`,
          showConfirmButton: false
        })
        // const newTodo = getState().todoState.todos.data.filter(todo => todo.id !== todoId)
        // console.log(newTodo);  
        // dispatch(setTodos(newTodo))
        dispatch(getTodos())
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function updateTodo(payload, todoId) {
  return function(dispatch, getState) {
    console.log(todoId);
    console.log(payload);
    dispatch(setLoading(true))
    fetch(`${baseUrl}/todos/${todoId}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 704b7efa9fffd9da310ab3f027d536e96207f72b8b8b73cc514dcb5c3e5fde47'
      },
      body: JSON.stringify(payload)
    }) 
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        // dispatch(setProductList(newProduct));
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}