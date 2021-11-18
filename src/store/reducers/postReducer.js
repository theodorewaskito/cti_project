  import { 
    SET_POSTS, 
    SET_POST, 
    SET_COMMENTS, 
    SET_COMMENT, 
    SET_LOADING_POST,
    SET_ERROR_POST,
    SET_LOADING_COMMENT,
    SET_ERROR_COMMENT,
    SET_PAGE_POST
  } from "../actionType";

  const initialState = {
    isLoading: false,
    isError: false,
    isLoadingComment: false,
    isErrorComment: false,
    posts: [],
    post: {},
    comments: [],
    comment: {},
    user: {},
    page: 1
  }

  function  reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_LOADING_POST:
        return { ...state, isLoading: payload }
      case SET_ERROR_POST:
        return { ...state, isError: payload }
      case SET_LOADING_COMMENT:
        return { ...state, isLoadingComment: payload }
      case SET_ERROR_COMMENT:
        return { ...state, isErrorComment: payload }
      case SET_POSTS:
        return { ...state, posts: payload }
      case SET_POST:
        return { ...state, post: payload }
      case SET_COMMENTS:
        return { ...state, comments: payload }
      case SET_COMMENT:
        return { ...state, comment: payload }
      case SET_PAGE_POST:
        return { ...state, page: payload }
      default:
        return state
    }
  }

  export default reducer