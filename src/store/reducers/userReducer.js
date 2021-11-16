import { SET_LOADING, SET_ERROR, SET_ISLOGIN } from "../actionType";

const initialState = {
  isLogin: false,
  isLoading: true,
  isError: false,
  error: null
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ISLOGIN:
      return { ...state, isLogin: payload }
    case SET_LOADING:
      return { ...state, isLoading: payload }
    case SET_ERROR:
      return { ...state, isError: payload }
    default:
      return state
  }
}

export default reducer
