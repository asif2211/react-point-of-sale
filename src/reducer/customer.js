import {
  ADD_CUSTOMER,
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
} from "../action/customer";
const initialstate = {
  employees: [
    {
      id: 1,
      fname: "asif",
      lname: "bsit",
      email: "bsit@gmail.com",
      phone: "fff",
      address: "bffffsit",
      city: "fff",
      state: "bsffffit",
      zip: "ffff",
      country: "bffffsit",
      company: "bsit",
      comments: "comments",
    },
    {
      id: 2,
      fname: "ali",
      lname: "umer",
      email: "dffdfdfdf@gmail.com",
      phone: "dffdf",
      address: "dffdfff",
      city: "ddfdfddf",
      state: "dfdfdfdf",
      zip: "dfdf",
      country: "bdfdfdfsit",
      company: "df",
      comments: "dfdfdf",
    },
  ],
};

const customer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {...state,
      employees:state.employees};
    case ADD_CUSTOMER:
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
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
