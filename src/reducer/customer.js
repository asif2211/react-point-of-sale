
import {ADD_CUSTOMER,GET_CUSTOMER} from '../action/customer'
const initialstate = {  
    employees: [  
        { id: 1, fname: "asif", 
        lname: "bsit",
        email: "bsit@gmail.com",
        phone: "fff",
        address: "bffffsit",
        city: "fff",
        state: "bsffffit",
        zip: "ffff",
        country: "bffffsit",
        company: "bsit",
        comments:"comments"
     },  
        { id: 2, fname: "ali", 
        lname: "umer",
        email: "dffdfdfdf@gmail.com",
        phone: "dffdf",
        address: "dffdfff",
        city: "ddfdfddf",
        state: "dfdfdfdf",
        zip: "dfdf",
        country: "bdfdfdfsit",
        company: "df",
        comments:"dfdfdf"
     },  
         ]  
}; 


const customer = (state = initialstate, action) => {  
    switch (action.type) {  
        case GET_CUSTOMER: 
        let newState = {...state}
            return newState
        case ADD_CUSTOMER:    
            return {    
                ...state,    
                employees: state.employees.concat(action.payload)    
            };  
        case 'DELETE_EMPLOYEE':    
            return {    
                ...state,    
                customers: state.customers.filter(item=>item.id!==action.payload)    
            };  
        case 'EDIT_EMPLOYEE':    
            return {    
                ...state,    
                customerss: state.customerss.map((content)=>content.id ===action.payload.id ? {...content, employeeName:action.payload.employeeName,employeeDepartment : action.payload.employeeDepartment}:content)    
            };  
        default:  
            return state;  
    }  
};  
  
export default customer; 
