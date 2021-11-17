import {
  SET_ERROR_POST, 
  SET_LOADING_POST, 
  SET_POSTS, 
  SET_POST,
  SET_COMMENTS,
  SET_COMMENT,
  SET_PAGE_POST
} from "../actionType";
import Swal from 'sweetalert2'

const baseUrl = 'https://gorest.co.in/public/v1'

export function setLoading(payload) {
  return {
    type: SET_LOADING_POST,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR_POST,
    payload: payload 
  }
}

export function setPosts(payload) {
  return {
    type: SET_POSTS,
    payload: payload 
  }
}

export function setPost(payload) {
  return {
    type: SET_POST,
    payload: payload 
  }
}

export function setComments(payload) {
  return {
    type: SET_COMMENTS,
    payload: payload 
  }
}

export function setComment(payload) {
  return {
    type: SET_COMMENT,
    payload: payload 
  }
}

export function setPage(payload) {
  return {
    type: SET_PAGE_POST,
    payload: payload 
  }
}

export function nextPagePosts(payload) {
  return function (dispatch, getState) {
    let page = getState().postState.page
    page ++
    dispatch(setPage(page))
  }
}

export function previousPagePosts(payload) {
  return function (dispatch, getState) {
    let page = getState().postState.page
    page --
    dispatch(setPage(page))
  }
}

export function getPosts(payload) {
  return function(dispatch, getState) {
    // console.log(payload.email);
    let page = getState().postState.page
    dispatch(setLoading(true))
    fetch(`${baseUrl}/posts?page=${page}`) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setPosts(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getPostId(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/posts/${id}`) 
      .then(res => res.json())
      .then(data => {
        dispatch(setPost(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getComments(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/posts/${id}/comments`) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setComments(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getCommentId(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/comments/${id}`) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setComment(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function createComment(postId, payload) {
  return function(dispatch, getState) {
    dispatch(setLoading(true))
    payload = {
      ...payload,
      post_id: postId,
      name: getState().userState.user.data.name,
      email: getState().userState.user.data.email
    }
    fetch(`${baseUrl}/posts/${postId}/comments`, {
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
        dispatch(setComment(data))
        dispatch(getComments(postId))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function deleteComment(commentId, postId) {
  return function(dispatch, getState) {
    dispatch(setLoading(true))
    // console.log(getState());
    fetch(`${baseUrl}/comments/${commentId}`, {
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
          text: `Comment has been deleted`,
          showConfirmButton: false
        })
        // const newTodo = getState().todoState.todos.data.filter(todo => todo.id !== todoId)
        // console.log(newTodo);  
        // dispatch(setTodos(newTodo))
        dispatch(getComments(postId))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function updateComment(payload, commentId) {
  return function(dispatch, getState) {
    // console.log(todoId);
    // console.log(payload);
    dispatch(setLoading(true))
    fetch(`${baseUrl}/comments/${commentId}`, {
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
        dispatch(setComment(data));
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}