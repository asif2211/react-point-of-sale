import * as constant from "../constant";
const initialstate = {
  customers: [],
};
const customer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_CUSTOMER:
      return { ...state, customers: state.customers };
    case constant.ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case constant.DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_CUSTOMER:
      let customers = [...state.customers];
      let Updatecustomer = customers.find(
        (cat) => cat.id === action.payload.id
      );
      let Index_of_customer = customers.indexOf(Updatecustomer);
      customers[Index_of_customer] = action.payload; // It will update whole object
      return {
        ...state,
        customers: customers,
      };
    default:
      return state;
  }
};

export default customer;
