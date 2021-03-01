export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const GET_CUSTOMER = "GET_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

const  getCustomer = () => ({  
    type:GET_CUSTOMER
}); 
const  AddCustomer = (customer) =>{  
    
    return dispatch => {  
        return dispatch({  
            type: ADD_CUSTOMER ,
            payload:customer 
        });  
    }  
}; 
const  DeleteCutomer = (id)=> {  
    
    return dispatch => {  
        return dispatch({  
            type: DELETE_CUSTOMER ,
            payload:id 
        });  
    }  
}; 
const UpdateCutomer = (data)=> {  
    
    return dispatch => {  
        return dispatch({  
            type: UPDATE_CUSTOMER ,
            payload:data 
        });  
    }  
}; 

export default {
    getCustomer,
    AddCustomer,
    DeleteCutomer,
    UpdateCutomer
}