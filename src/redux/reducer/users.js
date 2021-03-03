import { SET_USER,LOGOUT } from "../action/users";
const users = (state = [], action) => {
  
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user:action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user:{},
        loggedIn: false,
      };
    default :
    return state
  }
};

export default users;