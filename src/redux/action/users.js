export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";


 const  setUser = (user) => ({  
    type:SET_USER,
    payload:user
}); 
 const logOut = () => ({  
    type:LOGOUT
}); 
const obj = {setUser,
    logOut}
export default obj