import {
    ADD_SUPPLIER,
    GET_SUPPLIER,
    DELETE_SUPPLIER,
    UPDATE_SUPPLIER,
  } from "../constant";
  const initialstate = {
    supplier:[]
  };
  
  const customer = (state = initialstate, action) => {
    switch (action.type) {
      case GET_SUPPLIER:
        return {...state,
          supplier:state.customers
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
        return {
          ...state,
          supplier: state.supplier.map((content) =>
            content.id === action.payload.id
              ? {
                  ...content,
                  fname: action.payload.fname,
                  lname: action.payload.lname,
                  email: action.payload.email,
                  phone: action.payload.phone,
                  address: action.payload.address,
                  city: action.payload.city,
                  zip: action.payload.zip,
                  country: action.payload.country,
                  company: action.payload.company,
                  comments: action.payload.comments,
                  store: action.payload.store,
                  credit: action.payload.credit,
                }
              : content
          ),
        };
      default:
        return state;
    }
  };
  
  export default customer;
  