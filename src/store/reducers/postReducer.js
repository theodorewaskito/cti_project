  import { SET_POSTS, SET_POST } from "../actionType";

  const initialState = {
    posts: [],
    post: {}
  }

  function  reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_POSTS:
        return { ...state, posts: payload }
      case SET_POST:
        return { ...state, post: payload }
      default:
        return state
    }
  }

  export default reducer