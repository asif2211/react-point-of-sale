export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";


 const  setUser = (userObj) => ({  
    type:'SET_USER',
    payload:userObj
}); 
 const logOut = () => ({  
    type:LOGOUT
}); 

export default {
    setUser,
    logOut
}