

let initialState = {
  username: "",
  id: 0,
  profile_pic: ""
};

const USERAUTH = "USERAUTH";

export function userAuth(id, username, profile_pic) {
return {
  type: USERAUTH,
  payload: {id,username,profile_pic}
 }
}

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case USERAUTH:
      const { username,id,profile_pic } = action.payload;
        return {...state,
          username: username,
          id: id,
          profile_pic: profile_pic
        };
      default:
        return state;
    }
  }
