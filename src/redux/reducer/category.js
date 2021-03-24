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
      let categorys = [...state.category]
      let category = categorys.find(cat => cat.id === action.payload.id);
      let categoryIndex = categorys.indexOf(category)
      categorys[categoryIndex] = action.payload // It will update whole object
  
      return {
        ...state,
        category:categorys
      };
    default:
      return state;
  }
};

export default category;
