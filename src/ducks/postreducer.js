const initialState = {
    posts: [],
    post: {}
  };
  const GET_POST = "GET_POST";
  export function getPost(post) {
    return {
      type: GET_POST,
      payload: post
    };
  }
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST:
        return {
          ...state,
          post: action.payload
        };
      default:
        return state;
    }
  }