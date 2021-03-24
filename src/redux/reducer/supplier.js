import * as constant from "../constant";
  const initialstate = {
    supplier:[]
  };
  
  const supplier = (state = initialstate, action) => {
    switch (action.type) {
      case constant.GET_SUPPLIER:
        return {...state,
          supplier:state.supplier
        };
      case constant.ADD_SUPPLIER:
        return {
          ...state,
          supplier:[...state.supplier, action.payload],
        };
      case constant.DELETE_SUPPLIER:
       
        return {
          ...state,
          supplier:state.supplier.filter((item) => item.id !== action.payload),
        };
      case constant.UPDATE_SUPPLIER:
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
  