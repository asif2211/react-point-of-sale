export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const GET_CUSTOMER = "GET_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

export function getCustomer() {  
    return dispatch => {  
        return dispatch({  
            type: GET_CUSTOMER  
        });  
    }  
}; 
export function AddCustomer(customer) {  
    
    return dispatch => {  
        return dispatch({  
            type: ADD_CUSTOMER ,
            payload:customer 
        });  
    }  
}; 
export function DeleteCutomer(id) {  
    
    return dispatch => {  
        return dispatch({  
            type: DELETE_CUSTOMER ,
            payload:id 
        });  
    }  
}; 
export function UpdateCutomer(data) {  
    
    return dispatch => {  
        return dispatch({  
            type: UPDATE_CUSTOMER ,
            payload:data 
        });  
    }  
}; 
