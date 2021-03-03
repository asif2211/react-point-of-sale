export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";


 const  setUser = (user) => ({  
    type:SET_USER,
    payload:user
}); 
 const logOut = () => ({  
    type:LOGOUT
}); 

export default {
    setUser,
    logOut
}