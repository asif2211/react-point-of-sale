import {
  ADD_CATEGORY,
  GET_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../constant";
const initialstate = {
  category:[]
};

const category = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {...state,
        category:state.category
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category:[...state.category, action.payload],
      };
    case DELETE_CATEGORY:
     
      return {
        ...state,
        category:state.category.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        customers: state.category.map((content) =>
          content.id === action.payload.id
            ? {
                ...content,
                fname: action.payload.fname,
              }
            : content
        ),
      };
    default:
      return state;
  }
};

export default category;
