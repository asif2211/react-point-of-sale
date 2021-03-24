import {
    ADD_SUPPLIER,
    GET_SUPPLIER,
    DELETE_SUPPLIER,
    UPDATE_SUPPLIER,
  } from "../constant";
  const initialstate = {
    supplier:[]
  };
  
  const supplier = (state = initialstate, action) => {
    switch (action.type) {
      case GET_SUPPLIER:
        return {...state,
          supplier:state.supplier
        };
      case ADD_SUPPLIER:
        return {
          ...state,
          supplier:[...state.supplier, action.payload],
        };
      case DELETE_SUPPLIER:
       
        return {
          ...state,
          supplier:state.supplier.filter((item) => item.id !== action.payload),
        };
      case UPDATE_SUPPLIER:
        let supplier = [...state.supplier]
        let supplier_update = supplier.find(cat => cat.id === action.payload.id);
        let supplier_index = supplier.indexOf(supplier_update)
        supplier[supplier_index] = action.payload // It will update whole object
    
        return {
          ...state,
          supplier:supplier
        };
          
      default:
        return state;
    }
  };
  
  export default supplier;
  