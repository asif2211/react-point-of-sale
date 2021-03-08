import {
  ADD_CUSTOMER,
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
} from "../constant";
const initialstate = {
  customers:[]
};

const customer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {...state,
        customers:state.customers
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers:[...state.customers, action.payload],
      };
    case DELETE_CUSTOMER:
     
      return {
        ...state,
        customers:state.customers.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        employees: state.employees.map((content) =>
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
