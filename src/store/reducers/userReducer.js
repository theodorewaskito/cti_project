import { 
  SET_LOADING_USER, 
  SET_ERROR_USER, 
  SET_ISLOGIN, 
  SET_USER,
  SET_USER_POST 
} from "../actionType";

const initialState = {
  isLogin: false,
  isLoadingUser: true,
  isErrorUser: false,
  error: null,
  user: {},
  userPost: {}
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ISLOGIN:
      return { ...state, isLogin: payload }
    case SET_LOADING_USER:
      return { ...state, isLoadingUser: payload }
    case SET_ERROR_USER:
      return { ...state, isErrorUser: payload }
    case SET_USER:
      return { ...state, user: payload }
    case SET_USER_POST:
      return { ...state, userPost: payload }
    default:
      return state
  }
}

export default reducer
