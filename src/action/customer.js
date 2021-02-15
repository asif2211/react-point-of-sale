export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const GET_CUSTOMER = "GET_CUSTOMER";

export function getCustomer() {  
    return dispatch => {  
        return dispatch({  
            type: GET_CUSTOMER  
        });  
    }  
}; 
