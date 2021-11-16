  import { SET_POSTS, SET_POST, SET_COMMENTS, SET_COMMENT, SET_USER } from "../actionType";

  const initialState = {
    posts: [],
    post: {},
    comments: [],
    comment: {},
    user: {}
  }

  function  reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_POSTS:
        return { ...state, posts: payload }
      case SET_POST:
        return { ...state, post: payload }
      case SET_COMMENTS:
        return { ...state, comments: payload }
      case SET_COMMENT:
        return { ...state, comment: payload }
      case SET_USER:
        return { ...state, user: payload }
      default:
        return state
    }
  }

  export default reducer