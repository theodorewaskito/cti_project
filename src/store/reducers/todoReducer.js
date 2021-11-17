import { 
  SET_ERROR_TODO,
  SET_LOADING_TODO,
  SET_TODOS, 
  SET_TODO,
  SET_PAGE_TODO
} from "../actionType";

const initialState = {
  isLoadingTodo: false,
  isErrorTodo: false,
  todos: [],
  todo: {},
  page: 1
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_TODO:
      return { ...state, isLoadingTodo: payload }
    case SET_ERROR_TODO:
      return { ...state, isErrorTodo: payload }
    case SET_TODOS:
      return { ...state, todos: payload }
    case SET_TODO:
      return { ...state, todo: payload }
    case SET_PAGE_TODO:
      return { ...state, page: payload }
    default:
      return state
  }
}

export default reducer